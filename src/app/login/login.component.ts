import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.regexValidator(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm)]],
      pass: ['', [Validators.required, this.regexValidator(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]],
    });
  }

  regexValidator(pattern: RegExp) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && !pattern.test(control.value)) {
        return { invalidPattern: true };
      }
      return null;
    };
  }
}
