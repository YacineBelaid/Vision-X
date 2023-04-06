import {AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
//import { setupSdk } from '@matterport/sdk'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
 // @ViewChild('showcaseIframe', { static: false })
 // showcaseIframe: any;
  ishelp = false;
  isRightDrawerOpen = false;
  isBottomDrawerOpen = false;
  mpSdk!: undefined;
  options = {};
  SDKKey = 'ae1b462tnzaekr1yq0h8m19ga';
  constructor() { }

  ngOnInit(): void {
    this.isRightDrawerOpen = false;
    this.isBottomDrawerOpen = false;
    this.ishelp = false;
  //  this.showcaseIframe = document.getElementById("showcase-iframe")
  }
  ngAfterViewInit(): void {
   // this.connectToSDK();
  }
  

}
