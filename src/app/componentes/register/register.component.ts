import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  regisForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    repPassword: ['', Validators.required]
  })

  constructor(private fb: FormBuilder){}

  get name(){
    return this.regisForm.controls['name']
  }

  get email(){
    return this.regisForm.controls['email']
  }

  get password(){
    return this.regisForm.controls['password']
  }

  get repPassword(){
    return this.regisForm.controls['repPassword']
  }
}
