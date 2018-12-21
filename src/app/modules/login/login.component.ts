import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 	answer = "11111"; //default capcha

  	constructor(private httpClient:HttpClient) { }

  	ngOnInit() {
		this.httpClient
		.get("https://earthquake.usgs.gov/fdsnws/event/1/query?endtime=2016-01-31&format=geojson&limit=10&minmag=6&starttime=2016-01-01")
		.subscribe((data) => console.log(data), // success path 
		);
  	}

  	authentication(name, password, checkbox){
		  console.log(arguments);
		  this.httpClient
		  	.post(
				"https://earthquake.usgs.gov/fdsnws/event/1/query?endtime=2016-01-31&format=geojson&limit=10&minmag=6&starttime=2016-01-01", 
				{
					name,
					password,
					checkbox
				}
			).subscribe((data) => console.log(data))
  	}	
}
