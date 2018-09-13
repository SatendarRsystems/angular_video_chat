import { Component, OnInit } from '@angular/core';
import { VydioClientService } from '../vydio-client.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  isLoading: Boolean = true;
  constructor(private VydioClientService : VydioClientService) {
    this.VydioClientService.loadVydioSdk();
    let self =this;
    document.addEventListener("ready" ,this.createVydioConnector.bind(this));
    VydioClientService.meetingJoinedConfirmed$.subscribe(
      data => {
        console.log(">>>>>>>>>>>>>>>>>>>>> i got the sucess event");
        this.isLoading = false;
      });
   }

  ngOnInit() {
  }

  createVydioConnector(e){
    console.log("i got the event");
    console.log(e);
    this.VydioClientService.initVydioConnector(e.detail.VC , "video-section" , "video-section");
   }
}
