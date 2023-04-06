import { Injectable, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { setupSdk } from '@matterport/sdk';
@Injectable({
  providedIn: 'root'
})
export class MatterPortService {

  constructor() { }

  async connectSdk() {
    const sdkKey = 'ae1b462tnzaekr1yq0h8m19ga'; // TODO: replace with your sdk key
    // const iframeUrl = 'https://my.matterport.com/show?m=SxQL3iGyoDo&play=1&sandboxKey=[ae1b462tnzaekr1yq0h8m19ga]';
    const mpSdk = await setupSdk(sdkKey, {
      iframeAttributes: {
        src: "https://my.matterport.com/show",
        frameborder: "0",
        allow: "fullscreen; vr",
        style: {
          width: "100vw",
          height: "93vh",
          display: "none"
        },
        id: "previewiframe",
        Hidden: "true"
      },
      iframeQueryParams: {
        space: "Zh14WDtkjdC"
      }
    });
    // connect the sdk; log an error and stop if there were any connection issues
    try {
      this.onShowcaseConnect(mpSdk);
    } catch (e) {
      console.error(e);
    }
  }
  async connectSecondSdk(Iframe: any) {
    const sdkKey = 'ae1b462tnzaekr1yq0h8m19ga'; // TODO: replace with your sdk key
    // const iframeUrl = 'https://my.matterport.com/show?m=SxQL3iGyoDo&play=1&sandboxKey=[ae1b462tnzaekr1yq0h8m19ga]';
    const mpSdk = await setupSdk(sdkKey, {
      iframe: Iframe,
      iframeAttributes: {
        src: "https://my.matterport.com/show",
        frameborder: "0",
        allow: "fullscreen; vr",
        style: {
          width: "100vw",
          height: "93vh"
        },
        id: "previewiframe",
      },
      iframeQueryParams: {
        space: "Zh14WDtkjdC"
      }
    });
    // connect the sdk; log an error and stop if there were any connection issues
    try {
      this.onShowcaseConnect(mpSdk);
    } catch (e) {
      console.error(e);
    }
  }
  async onShowcaseConnect(mpSdk: any) {
    // insert your sdk code here. See the ref https://matterport.github.io/showcase-sdk//docs/reference/current/index.html
    // try retrieving the model data and log the model's sid
    try {
      const modelData = await mpSdk.Model.getData();
      console.log('Model sid:' + modelData.sid);
    } catch (e) {
      console.error(e);
    }
    try {
      this.addTag(mpSdk)
    } catch (e) {
      console.error(e);
    }
  }


  async addTag(mpSdk: any) {
    // create a tag
    const [tagId] = await mpSdk.Tag.add({
      label: 'Test Tag',
      anchorPosition: { x: 0, y: 0, z: 0 },
      stemVector: { x: 0, y: 0.3, z: 0 },
    });

    // register a static sandbox
    const [sandboxId] = await mpSdk.Tag.registerSandbox(`
      <style>
        body {
          color: #fff;
          background-color: #000;
        }
      </style>
      Hello, LR-Vision!`
    );

    // associate (attach) the sandbox to the tag
    mpSdk.Tag.attach(tagId, sandboxId);
  }
}
