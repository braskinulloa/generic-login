import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
        userOrEmail: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    if (!!this.form?.invalid) return;
    console.log(this.form.controls);
  }
}
