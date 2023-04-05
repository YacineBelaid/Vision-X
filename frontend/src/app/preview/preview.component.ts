import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  isRightDrawerOpen = false;
  isBottomDrawerOpen = false;
  constructor() { }

  ngOnInit(): void {
    this.isRightDrawerOpen = false;
    this.isBottomDrawerOpen = false;
  }

  

}
