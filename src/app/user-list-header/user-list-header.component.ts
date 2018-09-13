import { Component, OnInit } from '@angular/core';
import { VydioClientService } from '../vydio-client.service';
@Component({
  selector: 'app-user-list-header',
  templateUrl: './user-list-header.component.html',
  styleUrls: ['./user-list-header.component.css']
})
export class UserListHeaderComponent implements OnInit {

  constructor(private VydioClientService: VydioClientService) { }

  ngOnInit() {
  }

}
