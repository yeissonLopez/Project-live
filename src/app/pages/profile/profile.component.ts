import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  dominantHand: string = "Z" ;

  constructor() { 
  }

  dominantHandLeft() {
    this.dominantHand = "Z";
    var body = document.getElementById("profile");
    body.style.backgroundColor = "#251A40";
    
  }

  dominantHandRight() {
    this.dominantHand = "D";
    var body = document.getElementById("profile");
    body.style.backgroundColor = "#5C37B3";
  }

  dominantHandSkip() {
    this.dominantHand = "O";
    var body = document.getElementById("profile");
    body.style.backgroundColor = "#9669FF";
  }

  ngOnInit(): void {
    // this.initComponents();
  }

}
