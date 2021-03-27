import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  public toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  public flag: boolean = false;
  public isDropdownClicked: boolean = false;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  toggleNavigation = () => {
    this.flag = !this.flag;
    this.toggleSidebar.emit(this.flag);
  }

  showUserDropdown = () => {
    this.isDropdownClicked =  !this.isDropdownClicked;
  }

logout() {
  localStorage.setItem("userName", undefined);
  this.router.navigateByUrl('/login');
}

}
