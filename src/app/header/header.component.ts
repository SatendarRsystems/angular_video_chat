import { Component, OnInit } from '@angular/core';
import { VydioClientService } from '../vydio-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private VydioClientService: VydioClientService) { 
    console.log("[vc] vs is here in HeaderComponent");
  }

  ngOnInit() {

  }

  logout() {
    console.log("[vc] logout  logout  logout  logout  logout  logout ");
    this.VydioClientService.logout();
    
  }

}
