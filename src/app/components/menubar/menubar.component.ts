import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public flag: boolean = false;
  
  public showMore: boolean = false;
  public showMoreGoods: boolean = false;
  public showMoreEmployees: boolean = false;

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
