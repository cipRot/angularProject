import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 	answer = "11111"; //default capcha

  	constructor() { }

  	ngOnInit() {
  	
  	}

  	authentication(name, password, security_cod, magenta){
  		console.log(arguments);
  	}	
}
