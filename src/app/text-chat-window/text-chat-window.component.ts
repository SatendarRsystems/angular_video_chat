import { Component, OnInit } from '@angular/core';
import { VydioClientService } from '../vydio-client.service';

@Component({
  selector: 'app-text-chat-window',
  templateUrl: './text-chat-window.component.html',
  styleUrls: ['./text-chat-window.component.css']
})
export class TextChatWindowComponent implements OnInit {

  messageList = [];
  constructor(private VydioClientService: VydioClientService) {

    VydioClientService.messageRecievedConfirmed$.subscribe(
      data => {
        this.messageList.push(data);
      });

    VydioClientService.messageSendConfirmed$.subscribe(
      data => {
        this.messageList.push(data);
      });


  }

  ngOnInit() {
  }


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      var chatLogsContainer = document.getElementById("chatLogs");
      chatLogsContainer.scrollTop = chatLogsContainer.scrollHeight;
     } catch (err) { }
  }


  sendChatMsg() {
    this.VydioClientService.sendChatMsg("SendMessage");
  }
}
