import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/login/login.component.html',
  styleUrls: ['app/login/login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error:string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    // reset login status
  }

  login(){
    console.log("login");
  }

}
