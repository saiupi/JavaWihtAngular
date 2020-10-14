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
  employeId: any;
  save: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private myRoute: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      empId: ['', Validators.required],
      empName: ['', Validators.required],
      empSal: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      addres: ['', Validators.required],

    });
    this.getData();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    let empProfile = {
      "employmentDetails": [{
        empId: this.registerForm.controls['empId'].value,
        empName: this.registerForm.controls['empName'].value,
        empSal: this.registerForm.controls['empSal'].value,
        mobileNumber: this.registerForm.controls['mobileNumber'].value,
        addres: this.registerForm.controls['addres'].value,
      }],
      "transactionType": "save"
    }
    console.log("555", empProfile)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.http.post("http://192.168.3.238:7777/set",empProfile).subscribe((res) => {
      this.results = res;
      //this.myRoute.navigate(["/dashboard"]);

      console.log("44", this.results)
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    this.getData();
  }
  getData() {
    let req = {
      "employmentDetails": [{}],
      "transactionType": "getAll"
    }
    this.http.post<any>('http://192.168.3.238:7777/get', req).subscribe(res => {
      this.data = res['employmentDetailsList'];
      // this.studentDetails=this.results['data']
      console.log("111", this.data)
    })
  }
  empDelete(employesDeleteData) {
    this.employeId = employesDeleteData.empId;
    let delete_req = {
      "employmentDetails": [{
        "empId": this.employeId
      }],
      "transactionType": "delete"
    }
    this.http.post<any>('http://192.168.3.238:7777/set', delete_req).subscribe(res => {
      this.data = res;
      this.getData();
    })
  }
  empEdit(employeEditData) {
    this.registerForm.patchValue({
      empId: employeEditData.empId,
      empName: employeEditData.empName,
      empSal: employeEditData.empSal,
      mobileNumber: employeEditData.mobileNumber,
      addres: employeEditData.addres
    });
    
      

  }
  empUpadate(){
    this.submitted = true;
    let empEditform = {
      "employmentDetails":[{
      'empId': this.registerForm.controls['empId'].value,
      'empName': this.registerForm.controls['empName'].value,
      'empSal': this.registerForm.controls['empSal'].value,
      'mobileNumber': this.registerForm.controls['mobileNumber'].value,
      'addres': this.registerForm.controls['addres'].value,
    }],
    "transactionType":"update"
    }
      return this.http.post<any>('http://192.168.3.238:7777/set',empEditform).subscribe(res => {
        this.data = res;
        console.log("33",this.data);
        
        this.getData();
      })
  }

}
