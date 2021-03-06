import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavigation = () => {
    this.flag = !this.flag;
    this.toggleSidebar.emit(this.flag);
  }

  showUserDropdown = () => {
    this.isDropdownClicked =  !this.isDropdownClicked;
  }



}
