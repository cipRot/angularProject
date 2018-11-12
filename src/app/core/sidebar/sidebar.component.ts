import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LeftSidebarService } from "../../shared/services/left-sidebar.service"; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav; 
  isOpen:boolean = false ;
  subscription: any;

  constructor(public LeftSidebarService:LeftSidebarService) {}

  ngOnInit() {
    this.LeftSidebarService.change.subscribe(isOpen => { 
      this.isOpen = isOpen;
      if(this.isOpen){
        this.open();
      } else {
        this.close();
      }
    });
  }

  close() {
    this.sidenav.close();
  }
  open(){ 
    this.sidenav.open();
  }

  ngOnDestroy() { 
    this.LeftSidebarService.change.unsubscribe();
  }
  
}
