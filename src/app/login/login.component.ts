import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    private uname: string;
    private pass: string;
    private error = '';

  constructor(private router: Router) { }

  ngOnInit() {

  }
  submit(uname, pass){
        if (uname != undefined && pass != undefined) {
            if (uname == "test" && pass == "test"){
                this.router.navigate(['/chat']);
            }
            else{
                this.error = "Check your Username and Password"
            }
        }
        else {
            this.error = "Username and Password cannot be empty"
        }
  }
    signin() {
        this.router.navigate(['/signup']);
    }
}
