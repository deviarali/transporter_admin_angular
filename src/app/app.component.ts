import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public flag: boolean = false;
  
  public showMore: boolean = false;
  public showMoreGoods: boolean = false;
  public showMoreEmployees: boolean = false;

  constructor(private router: Router,) { }

  ngOnInit(): void {
    let loggedIn = this.isLoggedIn();
    if(!loggedIn) {
      this.router.navigateByUrl('/login');
    }
  }

  showMoreItems = (text) => {
    if (text === 'users') {
      this.showMore = !this.showMore;
    }else if (text === 'goods'){
      this.showMoreGoods = !this.showMoreGoods;
    } else if (text === 'employees') {
      this.showMoreEmployees = !this.showMoreEmployees;
    }
  }

  toggleSidebar = () => {
    this.flag = !this.flag;
  }

  isLoggedIn() {
    debugger;
    var userName = localStorage.getItem("userName");
    if(userName != 'undefined' && userName != null && userName.length > 0) {
      return true;
    }
    // console.log(userName);
    return false;
  }
}
