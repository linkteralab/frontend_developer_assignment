import { Component, OnInit, ViewChild } from '@angular/core';
import employees from '../../../data/employees.json';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  @ViewChild('picker') picker;
  personArray = [];
  open() {
    document.getElementById("myCheck").click(); // Click on the checkbox
  }
  constructor() { }
  ngOnInit() {
    for(let i = 0;i<=2;i++){
    this.personArray.push(employees[i]);
    console.log(this.personArray);
    }
  }

  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

}
