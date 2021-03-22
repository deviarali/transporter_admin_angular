import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserVo } from 'src/app/models/user-vo';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  private user: UserVo = new UserVo();
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  userName: string;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService) { 
                console.log('Dev login check');
  }

  ngOnInit(): void {
    console.log('Dev login check');
    this.loginForm = this.formBuilder.group ({
      mobileNumber: [this.user.mobileNumber, ''],
      password: [this.user.password, '']
    })
  }

 
 
  onSubmit() : void {
    this.loginService.loginValidate(this.loginForm.value).subscribe((response: UserVo) => {
      if(response['resultObject'] != null) {
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        this.user = response['resultObject'];
        this.userName = this.user.firstName;
        localStorage.setItem('loggedInUser', this.user.id.toString());
        localStorage.setItem('userName', this.userName);
        this.router.navigateByUrl('/dashboard')
      } else {
        this.invalidLogin = true;
        this.loginSuccess = false;
        this.router.navigateByUrl('/login');
         
      }
    })    
  }
}
