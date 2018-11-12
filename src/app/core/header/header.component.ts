import {Component, ViewChild, ElementRef} from '@angular/core'; 
import { LeftSidebarService } from "../../shared/services/left-sidebar.service";  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  constructor(public LeftSidebarService:LeftSidebarService){ 
  }
  open_sidebar(){  
    this.LeftSidebarService.toggle(); 
  };

}
