import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
        user: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        password: new FormControl('', [Validators.required]),
        checkPassword: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
  }
  register(): void {
    if (!!this.form?.invalid) return;
    console.log(this.form.controls);
  }
}
