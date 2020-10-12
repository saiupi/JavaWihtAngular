import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  results: any;
  studentDetails: any = [];
  data: Object;
  pageNo=0;
  pageSize=5;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private myRoute: Router) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      sal: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required]

    });
    this.getData();
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    let adminProfile = {
      id: this.registerForm.controls['id'].value,
      name: this.registerForm.controls['name'].value,
      sal: this.registerForm.controls['sal'].value,
      phone: this.registerForm.controls['phone'].value,
      city: this.registerForm.controls['city'].value,
    }
    console.log("555", adminProfile)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post("http://192.168.3.183:8081/poc2/employee/save",adminProfile).subscribe((res) => {
      this.results = res;
      //this.myRoute.navigate(["/dashboard"]);

      console.log("44", this.results)
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    this.getData();
  }
  getData() {
    this.http.get("http://192.168.3.183:8081/poc2/employee/getAll/0/100").subscribe((res) => {
      this.data = res;
      // this.studentDetails=this.results['data']
      console.log("111", this.data)
    })
  }

}
