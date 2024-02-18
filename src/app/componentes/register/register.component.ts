import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordMatchValidator} from '../../shared/password-match.directives';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup; // Asegúrate de importar FormGroup desde '@angular/forms'

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: passwordMatchValidator // Aquí aplicamos el validador personalizado a nivel de formulario
    });
  }

  // Métodos getter para acceder a los controles del formulario
  get fullname() {
    return this.registerForm.controls['fullname'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
}
