import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required, this.regexValidator(/^[A-Z][a-z]{1,12}$/gm)]],
      lastname: ['', [Validators.required, this.regexValidator(/^[A-Z][a-z]{1,12}$/gm)]],
      email: ['', [Validators.required, this.regexValidator(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm)]],
      pass: ['', [Validators.required, this.regexValidator(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]],
      repass: ['', [Validators.required, this.regexValidator(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]],
      phone: ['', [Validators.required, this.regexValidator(/^01[0 1 5 2][0-9]{9}$/)]]
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