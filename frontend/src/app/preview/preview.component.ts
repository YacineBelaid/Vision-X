import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { setupSdk } from '@matterport/sdk';
import { MatterPortService } from '../services/matter-port.service';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @ViewChild('previewiframe', { static: false }) previewIframe!: ElementRef<HTMLIFrameElement>;
  private previewiframe: any
  ishelp = false;
  isRightDrawerOpen = false;
  isBottomDrawerOpen = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private MatterPortService : MatterPortService) { }

  ngOnInit(): void {
    this.isRightDrawerOpen = false;
    this.isBottomDrawerOpen = false;
    this.ishelp = false;
    this.MatterPortService.connectSdk();
  }
  ngAfterViewInit(): void {
    let intervalID = setInterval(() => {
      this.previewiframe = document.querySelector("#previewiframe");
      if (this.previewiframe !== undefined) {
        setTimeout(() => {
          console.log(this.previewiframe)
          clearInterval(intervalID);
          console.log("The interval has been stopped after 5 milliseconds");
        }, 500);
        this.elementRef.nativeElement.appendChild(this.previewiframe);
      }
      this.MatterPortService.connectSecondSdk(this.previewiframe)
      this.styleResizing(this.previewiframe)
    }, 500);
  }
  styleResizing(iframe: any) {
    this.renderer.setStyle(iframe, 'height', '93vh');
    this.renderer.setStyle(iframe, 'width', '100vw');
    this.renderer.setStyle(iframe, 'display', 'Block');
  }
}
