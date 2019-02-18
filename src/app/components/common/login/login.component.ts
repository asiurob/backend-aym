import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/service.index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    public _login: LoginService,
    public _router: Router
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });
  }

  fillCredentials( values: any ) {
    localStorage.setItem('token', values.token);
    localStorage.setItem('name', `${values.user.NAME} ${values.user.LASTNAME}`);
    localStorage.setItem('username', values.user.USERNAME);
  }

  login() {
    if ( this.form.valid ) {
      this._login.login( this.form.value )
      .subscribe( (res: any) => {
        this.fillCredentials( res );
        this._router.navigate(['/dashboard']);
      });
    }
  }
}
