import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public flag: boolean = false;
  
  public showMore: boolean = false;
  public showMoreGoods: boolean = false;
  public showMoreEmployees: boolean = false;
  userName = localStorage.getItem('userName')

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

}
