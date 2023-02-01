import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';
  loginbtn:boolean;
  logoutbtn:boolean;
  
  constructor(private dataService: ApiService) {
  dataService.getLoggedInName.subscribe(name => this.changeName(name));
  if(this.dataService.isLoggedIn())
  {
  console.log("loggedin");
  this.loginbtn=false;
  this.logoutbtn=true
  }
  else{
  this.loginbtn=true;
  this.logoutbtn=false
  }
  
  }
  
  private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
  }
  logout()
  {
  this.dataService.deleteToken();
  window.location.href = window.location.href;
  }
}
// document.body.style.setProperty('margin', '0');
document.body.style.margin = "0";
document.body.style.setProperty("background-image","radial-gradient(#15483F 30%, #113C34,#000 )");

document.body.style.setProperty("background-attachment","fixed")
function active(){
  window.location.assign("http://localhost:4200/home");

}


