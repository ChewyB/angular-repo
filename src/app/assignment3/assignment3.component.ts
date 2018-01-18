import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  secretMessage = '';
  logArray = [];

  constructor() { }

  ngOnInit() {
  }

  toggleSecretMessage(event: any) {
    this.secretMessage = this.secretMessage === '' ? 'Secret Password = tuna' : '';
    // console.log(event);
    this.logArray.push(event.timeStamp);
    console.log(this.logArray);
  }

}
