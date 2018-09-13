import { Component, OnInit } from '@angular/core';
import { VydioClientService } from '../vydio-client.service';

@Component({
  selector: 'app-video-chat-window',
  templateUrl: './video-chat-window.component.html',
  styleUrls: ['./video-chat-window.component.css']
})
export class VideoChatWindowComponent implements OnInit {
  showPreview: Boolean = false;
  isConnected : Boolean = false;
  preview :Boolean = true;
  muted:Boolean = true;
  constructor(private VydioClientService: VydioClientService) {
    VydioClientService.meetingJoinedConfirmed$.subscribe(
      data => {
        console.log(">>>>>>>>>>>>>>>>>>>>> i got the sucess event");
        this.showPreview = true;
      });
  }

  ngOnInit() {
  }

   togglePreview() {
    this.preview = this.VydioClientService.toggleCameraPrivacy();
  }

  toggleMic() {
    this.muted =this.VydioClientService.toggleMicPrivacy();
  }


  toggleConnect() {
    if(this.isConnected){
      this.VydioClientService.endVideoCall();
      this.isConnected = false;
    }else{
      this.VydioClientService.startVideoCall();
      this.isConnected = true;
    }
  }
}
