import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  
    constructor(private router : Router ){
  
      this.createForm()
    }
  
    ngOnInit(){
      
    }
  
    createForm(){
    this.loginForm = new FormGroup ({
      'email' : new FormControl(),
      'password': new FormControl(),
    });
    }
  
    onSubmit() {
     let email = this.loginForm.value
     let pwd = this.loginForm.value
  
     console.log('Test logger', this.router.url)
  
  
     this.router.navigateByUrl('/success')
  
    }

}
