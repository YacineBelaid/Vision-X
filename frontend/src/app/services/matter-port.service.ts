import { Injectable } from '@angular/core';
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
      this.addModel(mpSdk)
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
  async addModel(mpSdk: any) {
    try {
      const graph = mpSdk.Graph.createDirectedGraph();
      // add a single vertex
      graph.addVertex({ id: 'A', data: 0 });

      // add multiple vertices
      graph.addVertex(
        { id: 'B', data: 1 },
        { id: 'C', data: 2 },
        { id: 'D', data: 3 },
      );
      // first get references to the vertices
      const a = graph.vertex('A');
      const b = graph.vertex('B');
      const c = graph.vertex('C');
      const d = graph.vertex('D');

      // check that the vertices were found
      if (!a || !b || !c || !d) throw Error(`one of vertices 'A', 'B', 'C', or 'D' was not in the graph`);

      // setting a single edge
      graph.setEdge({ src: a, dst: b, weight: 1 });

      // setting multiple edges
      graph.setEdge(
        { src: a, dst: b, weight: 5 },
        { src: b, dst: c, weight: 3 },
        { src: b, dst: d, weight: 6 },
        { src: c, dst: d, weight: 2 },
      );
      const aStarRunner = mpSdk.Graph.createAStarRunner(graph, a, d);
      const result = aStarRunner.exec();
      // subscribe to vertex changes
      graph.onVerticesChanged({
        onChanged() {
          console.log('vertices in the graph have changed');
        }
      });
      // subscribe to edge changes
      graph.onEdgesChanged({
        onChanged() {
          console.log('edges in the graph have changed');
        }
      });
      graph.addVertex({ id: 'E', data: 4 });
      // we can call `graph.commit()` here to trigger the `onVerticesChanged` observer, but ...
      // ... if we know we'll be making more changes, we should hold off on calling `commit` until then

      const e = graph.vertex('E');
      graph.setEdge({ src: a, dst: e, weight: 10 });
      graph.commit(); // <-- will trigger the attached observer in `onVerticesChanged` and `onEdgesChanged`
      graph.commit(); // <-- will no-op since the graph has not changed since the last `commit`
      
    } catch (e) {
      console.log(e)
    }
  }


}
