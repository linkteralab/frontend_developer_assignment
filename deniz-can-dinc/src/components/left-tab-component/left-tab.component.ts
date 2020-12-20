import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-tab',
  templateUrl: './left-tab.component.html',
  styleUrls: ['./left-tab.component.css']
})
export class LeftTabComponent implements OnInit {
  isClosed =false;
  transofrmStyle = "rotate(0deg)";
  height10 : Number = 340;
  constructor() { }

  ngOnInit() {
  }

  funcClick(){
    this.isClosed = ! this.isClosed;
    console.log(this.isClosed);
    if(this.isClosed == true){
      this.height10=0;
      console.log(this.isClosed);
      this.transofrmStyle ="90";
    }
    else {
      this.height10=340;
      console.log(this.isClosed);
      this.transofrmStyle ="0";
     }
  }
}
