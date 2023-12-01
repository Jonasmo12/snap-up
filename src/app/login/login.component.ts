import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
  
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router:Router){}

  submit(): void {
    const formData = {
      username: this.username,
      password: this.password
    };

    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify(formData),

      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    
    
    
    .then(json => localStorage.setItem('token', JSON.stringify(json)));
    this.router.navigate(['/cart'])
  }

  // myForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     username: ['Sammy', Validators.required],
  //     password: ['', [Validators.required]],
  //   });
  // }

  // onSubmit(form: FormGroup) {
  //   console.log('Valid?', form.valid); // true or false
  //   console.log('Name', form.value.username);
  //   console.log('Message', form.value.password);
  // }

}
