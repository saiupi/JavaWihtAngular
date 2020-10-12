import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})
export class RegistorComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  results: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private myRoute: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', [Validators.required, ]],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    let adminProfile = {
      name: this.registerForm.controls['name'].value,
      password: this.registerForm.controls['password'].value,
      mobileNumber: this.registerForm.controls['mobileNumber'].value,

    }

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post("http://192.168.2.44:3000/api/services/registor", adminProfile).subscribe((res) => {
      this.results = res;
      this.myRoute.navigate(["/login"]);

      console.log("44", this.results)
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
