import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  LoginForm;
  RegForm;
  Indicator;
  constructor() { }

  ngOnInit(): void {
    this.LoginForm = document.getElementById("LoginForm");
    this.RegForm = document.getElementById("RegForm");
    this.Indicator = document.getElementById("Indicator");
  }
  register() {
    this.RegForm.style.transform = "translateX(0px)";
    this.LoginForm.style.transform = "translateX(0px)";
    this.Indicator.style.transform = "translateX(100px)";
  }
  login() {
    this.RegForm.style.transform = "translateX(300px)";
    this.LoginForm.style.transform = "translateX(300px)";
    this.Indicator.style.transform = "translateX(0px)";
  }


}
