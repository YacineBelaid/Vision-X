/*! For license information please see 662.js.LICENSE.txt */
(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[662],{4061:(t,e,o)=>{"use strict";var s=o(43842);function a(t,e,o){var a,n,i,l;e=e||1;for(var h=0;h<t[0].length;h++){var c=t[0][h];(!h||c[0]<a)&&(a=c[0]),(!h||c[1]<n)&&(n=c[1]),(!h||c[0]>i)&&(i=c[0]),(!h||c[1]>l)&&(l=c[1])}var u=i-a,g=l-n,f=Math.min(u,g),w=f/2;if(0===f){var p=[a,n];return p.distance=0,p}for(var m=new s(void 0,r),_=a;_<i;_+=f)for(var v=n;v<l;v+=f)m.push(new d(_+w,v+w,w,t));var W=function(t){for(var e=0,o=0,s=0,a=t[0],r=0,n=a.length,i=n-1;r<n;i=r++){var l=a[r],h=a[i],c=l[0]*h[1]-h[0]*l[1];o+=(l[0]+h[0])*c,s+=(l[1]+h[1])*c,e+=3*c}return 0===e?new d(a[0][0],a[0][1],0,t):new d(o/e,s/e,0,t)}(t),I=new d(a+u/2,n+g/2,0,t);I.d>W.d&&(W=I);for(var N=m.length;m.length;){var x=m.pop();x.d>W.d&&(W=x,o&&console.log("found best %d after %d probes",Math.round(1e4*x.d)/1e4,N)),x.max-W.d<=e||(w=x.h/2,m.push(new d(x.x-w,x.y-w,w,t)),m.push(new d(x.x+w,x.y-w,w,t)),m.push(new d(x.x-w,x.y+w,w,t)),m.push(new d(x.x+w,x.y+w,w,t)),N+=4)}o&&(console.log("num probes: "+N),console.log("best distance: "+W.d));var b=[W.x,W.y];return b.distance=W.d,b}function r(t,e){return e.max-t.max}function d(t,e,o,s){this.x=t,this.y=e,this.h=o,this.d=function(t,e,o){for(var s=!1,a=1/0,r=0;r<o.length;r++)for(var d=o[r],i=0,l=d.length,h=l-1;i<l;h=i++){var c=d[i],u=d[h];c[1]>e!=u[1]>e&&t<(u[0]-c[0])*(e-c[1])/(u[1]-c[1])+c[0]&&(s=!s),a=Math.min(a,n(t,e,c,u))}return 0===a?0:(s?1:-1)*Math.sqrt(a)}(t,e,s),this.max=this.d+this.h*Math.SQRT2}function n(t,e,o,s){var a=o[0],r=o[1],d=s[0]-a,n=s[1]-r;if(0!==d||0!==n){var i=((t-a)*d+(e-r)*n)/(d*d+n*n);i>1?(a=s[0],r=s[1]):i>0&&(a+=d*i,r+=n*i)}return(d=t-a)*d+(n=e-r)*n}s.default&&(s=s.default),t.exports=a,t.exports.default=a},43842:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});class s{constructor(t=[],e=a){if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let t=(this.length>>1)-1;t>=0;t--)this._down(t)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return;const t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:o}=this,s=e[t];for(;t>0;){const a=t-1>>1,r=e[a];if(o(s,r)>=0)break;e[t]=r,t=a}e[t]=s}_down(t){const{data:e,compare:o}=this,s=this.length>>1,a=e[t];for(;t<s;){let s=1+(t<<1),r=e[s];const d=s+1;if(d<this.length&&o(e[d],r)<0&&(s=d,r=e[d]),o(r,a)>=0)break;e[t]=r,t=s}e[t]=a}}function a(t,e){return t<e?-1:t>e?1:0}},24996:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>Z});var s=o(97542),a=o(89570),r=o(35221),d=o(5823),n=o(80742),i=o(63422),l=o(38399),h=o(71166),c=o(56163),u=o(76957);class g extends c.K{constructor(t,e,o,s){super(t,e),this.room=o,this.id=this.room.id,this.title=this.room.name,this.icon="icon-edit-floorplan",this.typeId=d.SF.MODELROOM,this.layerId=i.gi,this.dateBucket=r.Z.OLDER,this.enabled=!0,this.floorId=s}}function f(t,e=!1){let o=0;for(let e=0,s=t.length;e<s;e++){const a=t[e],r=t[e===s-1?0:e+1];o+=a[0]*r[1],o-=r[0]*a[1]}return e?o/2:Math.abs(o/2)}function w(t){const e=t.map((t=>[t.x,t.z]));return e.push(e[0]),f(e)}var p=o(84428),m=o(46391),_=o(78283),v=o(4061),W=o.n(v);class I{constructor(t,e,o,s){this.id=t,this.name=e,this.points=o,this.walls=s}get floorIndex(){return this.points[0].floorIndex}getSnapshot(){return{height:0,lowerElevation:0,source:"frontend",vertices:this.points.map((t=>t.id))}}getViewCenter(){const t=this.points.map((t=>[t.x,t.z]));t.push([this.points[0].x,this.points[0].z]);const e=W()([t],.1);return new p.Vector3(e[0],0,e[1])}getArea(){return w(this.points)}getAreaText(t){let e=this.getArea();t===m.M.IMPERIAL&&(e=(0,_.Nv)(e));const o=t===m.M.IMPERIAL?" sq ft":" sq m";return e.toFixed(1)+o}}var N=o(92558);class x{constructor(t,e,o,s){this._t1=new p.Vector3,this._t2=new p.Vector3,this.id=t,this.from=e,this.to=o,this.width=s}static getCompositeKey(t,e){const o=[t,e].sort();return`${o[0]}:${o[1]}`}get floorIndex(){return this.from.floorIndex}getOtherNode(t){if(t===this.from)return this.to;if(t===this.to)return this.from;throw new Error(`WallNode id: ${t.id} does not belong to edge id: ${this.id}`)}hasNodes(t,e){const{from:o,to:s}=this;return!(t!==o&&t!==s||e!==o&&e!==s)}getVec3(t){const e=t||new p.Vector3;return e.set(this.to.x-this.from.x,0,this.to.z-this.from.z),e}getProjection(t){const e=this._t1.copy(t).sub(this.from.getVec3(this._t2)),o=this.getVec3(this._t2);return e.dot(o)/o.length()}getSnapshot(){return{thickness:this.width}}getViewCenter(){return(new p.Vector3).addVectors(this.from.getVec3(),this.from.getVec3()).multiplyScalar(.5)}get length(){const t=this.from.x-this.to.x,e=this.from.z-this.to.z;return Math.sqrt(t*t+e*e)}}class b{constructor(t,e,o,s){this.id=t,this.floorIndex=e,this.x=o,this.z=s}getPoint(){return{x:this.x,z:this.z}}getVec3(t){const e=t||new p.Vector3;return e.set(this.x,0,this.z),e}getViewCenter(){return this.getVec3()}getSnapshot(){return{x:this.x,y:-this.z}}}class y{constructor(t,e){this.data=t,this.inputs=e,this._outputCache=null}onRun(t){throw new Error("Method not implemented.")}onInvert(t,e){throw new Error("Method not implemented.")}run(){this._outputCache=this.onRun(this.inputs)}invert(){if(!this._outputCache)throw new Error("Attempted to inverse a data action before running it");this.onInvert(this._outputCache,this.inputs),this._outputCache=null}merge(t){return!1}get output(){if(this._outputCache)return this._outputCache;throw new Error("Tried to read output of an action before it was run")}}class R extends y{onRun(t){const e=this.data.getNode(t.nodeId),o={x:e.x,z:e.z};return this.data._updateNode(t.nodeId,t.newPos),this.data._updateWallForNodes(e),{prevPos:o}}onInvert(t,e){this.data._updateNode(e.nodeId,t.prevPos);const o=this.data.getNode(e.nodeId);this.data._updateWallForNodes(o)}merge(t){return t instanceof R&&t.inputs.nodeId===this.inputs.nodeId&&(this.inputs.newPos=t.inputs.newPos,!0)}}class O extends y{onRun(t){const e=this.data._createNode(t.from,t.floorIndex),o=this.data._createNode(t.to,t.floorIndex),s=this.data._createWall(e,o,t.width);return{fromId:e.id,toId:o.id,wall:s.id}}onInvert(t,e){this.data._deleteWall(t.wall),this.data._deleteNode(t.fromId),this.data._deleteNode(t.toId)}merge(t){return!!(t instanceof R&&this._outputCache&&t.inputs.nodeId===this._outputCache.toId)&&(this.inputs.to=t.inputs.newPos,!0)}}var C=o(83021);class P{constructor(){this.actions=[]}run(){for(const t of this.actions)t.run()}invert(){for(let t=this.actions.length-1;t>=0;t--){const e=this.actions[t];null==e||e.invert()}}merge(t){if(0===this.actions.length)this.actions.push(t);else{const e=this.actions[this.actions.length-1];e&&e.merge(t)||this.actions.push(t)}return!0}}class z{constructor(){this.undoBuffer=new C.P(50),this.finalized=!1}push(t){(this.undoBuffer.isEmpty()||this.finalized)&&(this.undoBuffer.push(new P),this.finalized=!1);const e=this.undoBuffer.peek();e&&e.merge(t)}pop(){return this.undoBuffer.pop()}finalize(){this.finalized=!0}availableUndos(){return this.undoBuffer.count}}var E=o(35895),F=o(97998);class M extends y{onRun(t){const e=this.data.getWall(t.wallId),o=e.from.getPoint(),s=e.to.getPoint();return this.data._updateNode(e.from.id,t.newFromPos),this.data._updateNode(e.to.id,t.newToPos),this.data._updateWallForNodes(e.from,e.to),{prevFromPos:o,prevToPos:s}}onInvert(t,e){const o=this.data.getWall(e.wallId);this.data._updateNode(o.from.id,t.prevFromPos),this.data._updateNode(o.to.id,t.prevToPos),this.data._updateWallForNodes(o.from,o.to)}merge(t){return t instanceof M&&t.inputs.wallId===this.inputs.wallId&&(this.inputs.newFromPos=t.inputs.newFromPos,this.inputs.newToPos=t.inputs.newToPos,!0)}}class T extends y{onRun(t){const e=this.data.getNode(t.fromId),o=this.data._createNode(t.to,e.floorIndex),s=this.data._createWall(e,o,t.width);return{toId:o.id,wall:s.id}}onInvert(t,e){this.data._deleteWall(t.wall),this.data._deleteNode(t.toId)}merge(t){return!!(t instanceof R&&this._outputCache&&t.inputs.nodeId===this._outputCache.toId)&&(this.inputs.to=t.inputs.newPos,!0)}}class A extends y{onRun(t){const e=this.data.getNode(t.mergeId),o=this.data.getNode(t.keepId),s=o.getPoint();this.data._updateNode(o.id,e.getPoint());const a=this.data.getWallsForNode(e),r=[];for(const t of a){const s=t.getOtherNode(e),a=t.width;this.data._deleteWall(t.id);let d=null;this.needsReplacementWall(t,e,o)&&(d=this.data._createWall(s,o,a)),r.push({deleted:t,created:d})}return this.data._deleteNode(e.id),this.data._updateWallForNodes(e,o),{deletedNode:e,wallDiff:r,oldKeepNodePos:s}}onInvert(t,e){const o=t.deletedNode,s=this.data._createNode(o.getPoint(),o.floorIndex,o.id);for(const e of t.wallDiff)e.created&&this.data._deleteWall(e.created.id),this.data._createWall(s,e.deleted.getOtherNode(t.deletedNode),e.deleted.width);this.data._updateNode(e.keepId,t.oldKeepNodePos),this.data._updateWallForNodes(s,this.data.getNode(e.keepId))}needsReplacementWall(t,e,o){const s=t.getOtherNode(e);if(s===o)return!1;const a=x.getCompositeKey(s.id,o.id);return!this.data.walls.has(a)}}class S extends y{onRun(t){const e=this.data.getWall(t.wallId),o=this.data.getEdgeCountForNode(e.from),s=this.data.getEdgeCountForNode(e.to);this.data._deleteWall(t.wallId);let a="none";return 1===o&&1===s?(a="both",this.data._deleteNode(e.from.id),this.data._deleteNode(e.to.id)):1===o?(a="from",this.data._deleteNode(e.from.id),this.data._updateWallForNodes(e.to)):1===s?(a="to",this.data._deleteNode(e.to.id),this.data._updateWallForNodes(e.from)):(a="none",this.data._updateWallForNodes(e.from,e.to)),{deletedWall:e,deletedNodes:a}}onInvert(t,e){const o=t.deletedWall;let s,a;switch(t.deletedNodes){case"both":s=this.data._createNode({x:o.from.x,z:o.from.z},o.floorIndex,o.from.id),a=this.data._createNode({x:o.to.x,z:o.to.z},o.floorIndex,o.to.id),this.data._createWall(s,a,o.width);break;case"none":this.data._createWall(o.from,o.to,o.width),this.data._updateWallForNodes(o.from,o.to);break;case"from":s=this.data._createNode({x:o.from.x,z:o.from.z},o.floorIndex,o.from.id),this.data._createWall(s,o.to,o.width),this.data._updateWallForNodes(o.to);break;case"to":a=this.data._createNode({x:o.to.x,z:o.to.z},o.floorIndex,o.to.id),this.data._createWall(o.from,a,o.width),this.data._updateWallForNodes(o.from);break;default:throw new Error(`${t.deletedNodes} is an invalid value`)}}}class B extends y{onRun(t){const e=this.data.getWall(t.fromWallId),o=e.getVec3().normalize().multiplyScalar(t.along),s=e.from.getVec3().add(o);this.data._deleteWall(t.fromWallId);const a=this.data._createNode({x:s.x,z:s.z},e.floorIndex),r=this.data._createNode(t.to,e.floorIndex);return{deletedWall:e,newTrailingWall:this.data._createWall(a,r,t.width),newLeftWall:this.data._createWall(e.from,a,e.width),newRightWall:this.data._createWall(a,e.to,e.width)}}onInvert(t,e){this.data._deleteWall(t.newTrailingWall.id),this.data._deleteWall(t.newLeftWall.id),this.data._deleteWall(t.newRightWall.id),this.data._deleteNode(t.newTrailingWall.from.id),this.data._deleteNode(t.newTrailingWall.to.id),this.data._createWall(t.deletedWall.from,t.deletedWall.to,t.deletedWall.width)}merge(t){return!!(t instanceof R&&this._outputCache&&t.inputs.nodeId===this._outputCache.newTrailingWall.to.id)&&(this.inputs.to=t.inputs.newPos,!0)}}class V extends y{onRun(t){const e=this.data.getWall(t.wallId),o=this.data.getNode(t.nodeId),s={x:o.x,z:o.z},a=e.getVec3().normalize().multiplyScalar(t.along),r=e.from.getVec3().add(a);this.data._deleteWall(e.id),this.data._updateNode(t.nodeId,{x:r.x,z:r.z}),this.data._updateWallForNodes(o);return{deletedWall:e,newLeftWall:this.data.hasWallBetween(e.from,o)?null:this.data._createWall(e.from,o,e.width),newRightWall:this.data.hasWallBetween(o,e.to)?null:this.data._createWall(o,e.to,e.width),prevNodePos:s}}onInvert(t,e){t.newLeftWall&&this.data._deleteWall(t.newLeftWall.id),t.newRightWall&&this.data._deleteWall(t.newRightWall.id),this.data._updateNode(e.nodeId,t.prevNodePos),this.data._updateWallForNodes(this.data.getNode(e.nodeId)),this.data._createWall(t.deletedWall.from,t.deletedWall.to,t.deletedWall.width)}}class k extends y{onRun(t){const e=this.data.getWall(t.wallId).width;return this.data._setWidth(t.wallId,t.width),{width:e,wallId:t.wallId}}onInvert(t,e){this.data._setWidth(t.wallId,t.width)}merge(t){return t instanceof k&&t.inputs.wallId===this.inputs.wallId&&(this.inputs.width=t.inputs.width,!0)}}function D(t,e){let o,s,a=e[e.length-1],r=0;for(let d=0;d<e.length;++d)o=a,a=e[d],o.y<=t.y&&a.y<=t.y||o.y>t.y&&a.y>t.y||o.x<t.x&&a.x<t.x||(s=(t.y-o.y)*(a.x-o.x)-(t.x-o.x)*(a.y-o.y),a.y<o.y&&(s=-s),r+=s>0?1:0);return r%2==1}function L(t,e){return t.size===e.size&&[...t].every((t=>e.has(t)))}class $ extends y{onRun(t){const e=this.data.getWall(t.wallId),o=[],s=[],a=[],r={originalFromPos:e.from.getPoint(),originalToPos:e.to.getPoint(),deletedWalls:s,createdWalls:o,originalWallId:t.wallId,createdNodes:a};return t.fromNode&&this.createJoint(e.from,e,s,o,a),t.toNode&&this.createJoint(e.to,e,s,o,a),r}onInvert(t,e){for(const e of t.createdWalls)this.data._deleteWall(e.id);for(const e of t.deletedWalls)this.data._createWall(e.from,e.to,e.width);for(const e of t.createdNodes)this.data._deleteNode(e.id);const o=this.data.getWall(this.inputs.wallId);this.data._updateNode(o.from.id,t.originalFromPos),this.data._updateNode(o.to.id,t.originalToPos),this.data._updateWallForNodes(o.from,o.to)}merge(t){return t instanceof M&&t.inputs.wallId===this.inputs.wallId&&(this.inputs.fromPos=t.inputs.newFromPos,this.inputs.toPos=t.inputs.newToPos,!0)}createJoint(t,e,o,s,a){const r=this.data._createNode({x:t.x,z:t.z},t.floorIndex),d=this.data.getWallsForNode(t);for(const a of d)if(a.id!==e.id){const e=a.getOtherNode(t);o.push(a),this.data._deleteWall(a.id);const d=a.from===e?this.data._createWall(e,r,a.width):this.data._createWall(r,e,a.width);s.push(d)}a.push(r);const n=e.from===t?this.data._createWall(r,e.from,e.width):this.data._createWall(e.to,r,e.width);s.push(n)}}class K extends y{onRun(t){const{id:e,name:o}=t,s=this.data.getRoom(e).name;return this.data._setRoomDetails(e,o),{id:e,name:s}}onInvert(t,e){const{id:o,name:s}=t;this.data._setRoomDetails(o,s)}}var H=o(64186);class Q extends y{onRun(t){const e=this.data.getNode(t.fromId),o=this.data.getNode(t.toId);return{wall:this.data._createWall(e,o,t.width).id}}onInvert(t,e){this.data._deleteWall(t.wall)}}class U extends y{onRun(t){const e=this.data.getNode(t.nodeId),o=Array.from(this.data.getWallsForNode(e).values());if(2!==o.length)throw new Error("Can only delete nodes with two edges on it");const s=o[0],a=s.getOtherNode(e),r=o[1],d=r.getOtherNode(e);this.data._deleteNode(e.id),this.data._deleteWall(s.id),this.data._deleteWall(r.id);return{deletedNode:e,deletedWall1:s,deletedWall2:r,createdWall:this.data.hasWallBetween(a,d)?null:this.data._createWall(a,d,(s.width+r.width)/2)}}onInvert(t,e){t.createdWall&&this.data._deleteWall(t.createdWall.id),this.data._createNode(t.deletedNode.getPoint(),t.deletedNode.floorIndex,t.deletedNode.id),this.data._createWall(t.deletedWall1.from,t.deletedWall1.to,t.deletedWall1.width),this.data._createWall(t.deletedWall2.from,t.deletedWall2.to,t.deletedWall2.width)}}class q extends y{onRun(t){return this.data._recomputeRooms()}onInvert(t,e){if(t.createdRooms)for(const e of t.createdRooms)this.data._deleteRoom(e.id);if(t.deletedRooms)for(const e of t.deletedRooms)this.data._createRoom(e.id,e.points,e.walls)}}class G{constructor(){this.data=new Map,this.addedObservers=new Set,this.updatedObservers=new Set,this.deletedObservers=new Set}clear(){this.data.clear()}get(t){return this.data.get(t)}set(t,e){this.data.set(t,e)}delete(t){this.data.delete(t)}has(t){return this.data.has(t)}onChanged(t){return(0,E.k1)((()=>{t.onAdded&&this.addedObservers.add(t.onAdded),t.onUpdated&&this.updatedObservers.add(t.onUpdated),t.onRemoved&&this.deletedObservers.add(t.onRemoved)}),(()=>{t.onAdded&&this.addedObservers.delete(t.onAdded),t.onUpdated&&this.updatedObservers.delete(t.onUpdated),t.onRemoved&&this.deletedObservers.delete(t.onRemoved)}),!0)}}class J{constructor(t){this.name="wall-graph",this.version=0,this._nodes=new G,this._walls=new G,this._rooms=new G,this.undoBuffer=new z,this._nodeToWallMap=new Map,this._wallToRoomMap=new Map,this._wallsByFloor=new Map,this._observerQueue=[],this._anythingChangeObservers=new Set,this.logger=new F.Z("wall-graph"),this.wallsChanged=!1,this._updateWallForNodes=(()=>{const t=new Set,e=new Set;return(...o)=>{t.clear(),e.clear();const s=o=>{if(!t.has(o)){this._scheduleObserver({observers:this._walls.updatedObservers,param:o});const s=this._wallToRoomMap.get(o);if(s)for(const t of s.values())e.has(t)||(this._scheduleObserver({observers:this._rooms.updatedObservers,param:t}),e.add(t));t.add(o)}};for(const t of o){const e=this._nodeToWallMap.get(t);if(null!=e)for(const o of e){s(o);const e=o.getOtherNode(t),a=this._nodeToWallMap.get(e);if(null!=a)for(const t of a)s(t)}}}})(),this.getRelativeAngle=(()=>{const t=new p.Vector2,e=new p.Vector2,o=new p.Vector2,s=(e,o)=>{if(0===e.lengthSq()){const s=this.getNodeNeighbors(o);if(0===s.size)return;const a=Array.from(s.values())[0];e.set(a.x,a.z).sub(t)}};return(a,r,d)=>{if(r===d)return 2*Math.PI;t.set(a.x,a.z),e.set(r.x,r.z).sub(t),s(e,r),o.set(d.x,d.z).sub(t),s(o,d);const n=Math.atan2(e.y,e.x);let i=-(Math.atan2(o.y,o.x)-n);return i<0&&(i+=2*Math.PI),i}})(),t&&(this.version=t.version,this.load(t))}load(t){for(const e in t.floors){const o=t.floors[e],s=o.vertices;for(const t in s){const o=s[t];this._createNode({x:o.x,z:-o.y},parseInt(e,10),t)}for(const t in o.edges){const[e,s]=t.split(":"),a=o.edges[t].thickness,r=this.getNode(e),d=this.getNode(s);this._createWall(r,d,a)}}this._recomputeRooms()}get walls(){return this._walls.data}get nodes(){return this._nodes.data}get rooms(){return this._rooms.data}getNode(t){const e=this._nodes.get(t);if(e)return e;throw new Error("WallNode does not exist in WallGraphData")}getWall(t){const e=this._walls.get(t);if(e)return e;throw new Error("Wall does not exist in WallGraphData")}getRoom(t){const e=this._rooms.get(t);if(!e)throw new Error("Room id is invalid!");return e}getEntity(t){const e=this._walls.get(t)||this._nodes.get(t)||this._rooms.get(t);if(!e)throw new Error("No wall or edge for id.");return e}getEdgeCountForNode(t){var e;return(null===(e=this._nodeToWallMap.get(t))||void 0===e?void 0:e.size)||0}getWallsForNode(t){const e=this._nodeToWallMap.get(t);if(e&&e.size>0)return e;throw new Error(`WallNode: ${t.id} has no associate walls, this should not happen unless inside an action`)}getWallsForFloor(t){const e=this._wallsByFloor.get(t);return e&&e.size>0?e:null}hasWallBetween(t,e){const o=x.getCompositeKey(t.id,e.id);return this._walls.has(o)}canDeleteEntity(t){if(null!=t){const e=this.getEntity(t);return e instanceof b?2===this.getEdgeCountForNode(e):e instanceof x}return!1}undo(){const t=this.undoBuffer.pop();t&&(this.wallsChanged=!1,t.invert(),this.wallsChanged&&this._recomputeRooms(),this.commit())}availableUndos(){return this.undoBuffer.availableUndos()}finalizeHistory(){this.undoBuffer.finalize()}triggerAction(t){try{this.wallsChanged=!1,t.run()}catch(t){return this.logger.error(t),void(this._observerQueue.length=0)}this.undoBuffer.push(t),this.wallsChanged&&this.triggerAction(new q(this,{})),this.commit()}onNodesChanged(t){return this._nodes.onChanged(t)}onWallsChanged(t){return this._walls.onChanged(t)}onRoomsChanged(t){return this._rooms.onChanged(t)}commit(){const t=this._observerQueue.length;if(this._flushObserverQueue(),t>0)for(const t of this._anythingChangeObservers)t(void 0)}onPropertyChanged(t,e){const o=this["_"+t];if(o instanceof G){const s=o,a=()=>{s.addedObservers.add(e),s.updatedObservers.add(e),s.deletedObservers.add(e)},r=()=>this.removeOnPropertyChanged(t,e);return(0,E.k1)(a,r,!0,t)}throw new Error(`Property: ${t} does not exist on wall-data`)}removeOnPropertyChanged(t,e){const o=this["_"+t];if(!(o instanceof G))throw new Error(`Property: ${t} does not exist on wall-data`);{const t=o;t.addedObservers.delete(e),t.updatedObservers.delete(e),t.deletedObservers.delete(e)}}onChanged(t){if(this._anythingChangeObservers.has(t))throw new Error("This observer function is already observing this Observable, and double subscriptions are not supported.");return(0,E.k1)((()=>this._anythingChangeObservers.add(t)),(()=>this.removeOnChanged(t)),!0)}removeOnChanged(t){this._anythingChangeObservers.delete(t)}addFloatingEdge(t,e,o,s){const a=new O(this,{from:t,to:e,width:o,floorIndex:s});return this.triggerAction(a),a.output}addBridgingEdge(t,e,o){const s=new Q(this,{fromId:t,toId:e,width:o});return this.triggerAction(s),s.output}addTrailingEdgeToNode(t,e,o){const s=new T(this,{fromId:t,to:e,width:o});return this.triggerAction(s),s.output}addTrailingEdgeToEdge(t,e,o,s){const a=new B(this,{fromWallId:t,along:e,to:o,width:s});return this.triggerAction(a),a.output}splitEdgeWithNode(t,e,o){const s=new V(this,{wallId:t,nodeId:e,along:o});return this.triggerAction(s),s.output}moveNode(t,e){const o={nodeId:t,newPos:e};this.triggerAction(new R(this,o))}moveWall(t,e,o){const s={wallId:t,newFromPos:e,newToPos:o};this.triggerAction(new M(this,s))}mergeNodes(t,e){const o=new A(this,{keepId:t,mergeId:e});return this.triggerAction(o),o.output}deleteEntity(t){if(this.canDeleteEntity(t)){const e=this.getEntity(t);if(e instanceof b){const e={nodeId:t};this.triggerAction(new U(this,e))}else if(e instanceof x){const e={wallId:t};this.triggerAction(new S(this,e))}}}setWidth(t,e){const o={wallId:t,width:e};this.triggerAction(new k(this,o))}editRoomDetails(t,e){this.triggerAction(new K(this,{id:t,name:e}))}addWallJoint(t,e,o){const s={wallId:t,fromNode:e,toNode:o};this.triggerAction(new $(this,s))}_createNode(t,e,o){const s=new b(o||(0,N.fV)(),e,t.x,t.z);return this._nodes.set(s.id,s),this._scheduleObserver({observers:this._nodes.addedObservers,param:s}),s}_updateNode(t,e){const o=this._nodes.get(t);if(!o)throw new Error("Attempted to update WallNode that does not exist");o.x=e.x,o.z=e.z,this._scheduleObserver({observers:this._nodes.updatedObservers,param:o})}_deleteNode(t){const e=this._nodes.get(t);if(!e)throw new Error("Attempted to delete WallNode that does not exist");this._nodes.delete(t),this._scheduleObserver({observers:this._nodes.deletedObservers,param:e})}_createRoom(t,e,o){const s=new I(t,`Room ${t}`,e,o);this.rooms.set(t,s),this._scheduleObserver({observers:this._rooms.addedObservers,param:s})}_updateRoom(t,e){const o=this._rooms.get(t);if(!o)throw new Error("Attempted to update Room that does not exist");e.name=o.name,this.rooms.set(t,e)}_deleteRoom(t){const e=this._rooms.get(t);if(!e)throw new Error("Attempted to delete Room that does not exist");this._rooms.delete(e.id),this._scheduleObserver({observers:this._rooms.deletedObservers,param:e})}_createWall(t,e,o){if(t.id===e.id)throw new Error("Cannot create wall where the from node is the same as the to node.");if(t.floorIndex!==e.floorIndex)throw new Error("Cannot create a wall between nodes on different floors.");const s=x.getCompositeKey(t.id,e.id);if(this._walls.has(s))throw new Error(`Wall already exists between ${t.id}:${e.id}`);const a=this.getNode(t.id),r=this.getNode(e.id),d=new x(s,a,r,o);return this._walls.set(d.id,d),this._addToWallDicts(d),this._scheduleObserver({observers:this._walls.addedObservers,param:d}),this.wallsChanged=!0,d}_deleteWall(t){const e=this.getWall(t);this._walls.delete(t),this._removeFromWallDicts(e),this._scheduleObserver({observers:this._walls.deletedObservers,param:e}),this.wallsChanged=!0}_setWidth(t,e){const o=this.getWall(t);o.width=e,this._scheduleObserver({observers:this._walls.updatedObservers,param:o})}_setRoomDetails(t,e){const o=this.getRoom(t);o.name=e,this._scheduleObserver({observers:this._rooms.updatedObservers,param:o})}_addToWallDicts(t){const e=(e,o)=>{let s=o.get(e);null!=s?s.add(t):(s=new Set,s.add(t),o.set(e,s))};e(t.from,this._nodeToWallMap),e(t.to,this._nodeToWallMap),e(t.floorIndex,this._wallsByFloor)}_removeFromWallDicts(t){const e=(e,o)=>{const s=o.get(e);null!=s&&(s.delete(t),0===s.size&&o.delete(e))};e(t.from,this._nodeToWallMap),e(t.to,this._nodeToWallMap),e(t.floorIndex,this._wallsByFloor)}_scheduleObserver(t){this._observerQueue.push(t)}_flushObserverQueue(){for(const t of this._observerQueue)for(const e of t.observers){const o=t.param;e(o,o.id)}this._observerQueue.length=0}getSnapshot(){const t={version:this.version,floors:{}},e=e=>{t.floors[`${e}`]||(t.floors[`${e}`]={edges:{},vertices:{},rooms:{}})};for(const[o,s]of this._nodes.data){e(s.floorIndex);t.floors[`${s.floorIndex}`].vertices[s.id]=s.getSnapshot()}for(const[o,s]of this._walls.data){e(s.floorIndex);t.floors[`${s.floorIndex}`].edges[s.id]=s.getSnapshot()}for(const[o,s]of this._rooms.data){e(s.floorIndex);t.floors[`${s.floorIndex}`].rooms[s.id]=s.getSnapshot()}return t}_recomputeRooms(){const t={createdRooms:[],deletedRooms:[]},e=this.findEnclosedRegions(),o=e.map((t=>new Set(t))),s=new Array;for(const t of this._rooms.data.values())for(let e=0;e<o.length;e++){const a=o[e],r=t.points.reduce(((t,e)=>a.has(e)?t+1:t),0);r>0&&s.push({score:r/t.points.length,oldRoomId:t.id,newRoomIndex:e})}const a=new Set,r=new Array(e.length);s.sort(((t,e)=>{var o,s;return e.score-t.score||((null===(o=this._rooms.get(e.oldRoomId))||void 0===o?void 0:o.getArea())||0)-((null===(s=this._rooms.get(t.oldRoomId))||void 0===s?void 0:s.getArea())||0)}));for(const{oldRoomId:t,newRoomIndex:e}of s)a.has(t)||r[e]||(r[e]=t,a.add(t));for(let t=0;t<e.length;t++)r[t]||(r[t]=(0,N.fV)());for(let o=0;o<e.length;o++){const s=r[o],a=e[o],d=new Set;for(let t=0;t<a.length;t++){const e=a[t],o=a[(t+1)%a.length];this.getWallsForNodes(d,e,o)}const n=new I(s,`Room ${s}`,e[o],d),i=this._rooms.get(s);i?L(i.walls,n.walls)||this._updateRoom(s,n):(this._createRoom(s,e[o],d),t.createdRooms.push(n))}this._wallToRoomMap.clear();const d=new Set(r);for(const e of this._rooms.data.values())d.has(e.id)||(this._deleteRoom(e.id),t.deletedRooms.push(e));for(const t of this._rooms.data.values())for(const e of t.walls.values()){const o=this._wallToRoomMap.get(e)||new Set;o.add(t),this._wallToRoomMap.set(e,o)}return this.wallsChanged=!1,t}findEnclosedRegions(){const t=new Array,e=new Set,o=(o,s)=>{const a=`${o.id}/${s.id}`;if(e.has(a))return;const r=[o,s];for(;;){const t=r[r.length-1],e=r[r.length-2],o=this.getNodeNeighbors(t);let s,a=4*Math.PI;for(const r of o){const o=this.getRelativeAngle(t,e,r);o<a&&(a=o,s=r)}if(!s)throw new Error("Expected a neighbor");if(t===r[0]&&s===r[1]){r.pop();break}r.push(s)}const d=function(t){const e=t.map((t=>[t.x,t.z]));return e.push(e[0]),f(e)}(r);(0,H.r6)(d,0)||t.push(r);for(let t=0;t<r.length;t++){const o=r[t],s=r[(t+1)%r.length],a=`${o.id}/${s.id}`;e.add(a)}};for(const t of this.walls.values())o(t.from,t.to),o(t.to,t.from);const s=new Map;for(const e of t)s.set(e,w(e));t.sort(((t,e)=>s.get(t)-s.get(e)));const a=t.map((t=>t.map((t=>new p.Vector2(t.x,t.z))))),r=new p.Vector2,d=new p.Vector2;for(let e=a.length-1;e>=0;e--){const o=a[e];let s=!1;for(let n=0;n<e&&!s;n++){const i=a[n];if(i.length<3)continue;let l=!0;for(let t=0;t<i.length&&l;t++){const e=(t+1)%i.length,o=t,s=(t+2)%i.length;r.copy(i[e]),d.addVectors(i[e],i[o]).add(i[s]).multiplyScalar(1/3),d.sub(r),d.normalize().multiplyScalar(.01),r.add(d),l=!D(r,i)}l||D(r,o)&&(t.splice(e,1),s=!0)}}return t}getNodeNeighbors(t){const e=new Set,o=this._nodeToWallMap.get(t);if(!o)throw new Error("Expecting node to wall map to be valid");for(const s of o.values())e.add(s.getOtherNode(t));return e}getWallsForNodes(t,e,o){const s=x.getCompositeKey(e.id,o.id);t.add(this.getWall(s))}}class Y extends s.Y{constructor(){super(...arguments),this.name="roombounds"}async init(t,e){this.data=new J,e.market.register(this,J,this.data),async function(t,e){const[o,s]=await Promise.all([t.market.waitForData(n.R),t.market.waitForData(u.i)]),r=(a,r,d=[])=>{const n=[];for(const r of e.rooms.values())if(a(r.name)){const e=s.getFloorAtIndex(r.floorIndex);if(!e)throw new Error("Unable to find floor for room while generating search results.");n.push(new g(t.commandBinder,o,r,e.id))}return n.sort(((t,e)=>t.title.localeCompare(e.title)))},i=t=>{},c=t=>new a.V(e.onChanged(t)),f={renew:()=>{t.commandBinder.issueCommandWhenBound(new h.c6({id:d.SF.MODELROOM,groupPhraseKey:l.Z.TOOLS.ROOMPLAN,getSimpleMatches:r,registerChangeObserver:c,onSearchActivatedChanged:i,groupOrder:40,groupIcon:"icon-edit-floorplan"}))},cancel:()=>{t.commandBinder.issueCommandWhenBound(new h.Pe(d.SF.MODELROOM))}};return f.renew(),f}(e,this.data).then((t=>this.bindings.push(t)))}dispose(t){super.dispose(t)}}const Z=Y},56163:(t,e,o)=>{"use strict";o.d(e,{K:()=>n});var s=o(52528),a=o(71166),r=o(63319);const d=new s.v({});class n{constructor(t,e){this.commandBinder=t,this.layersData=e,this.textParser=d,this.enabled=!0,this.bindings=[]}getGroupingId(t){switch(t){case r.HH.TYPE:return this.getTypeId();case r.HH.FLOOR:return this.getFloorId();case r.HH.LAYER:return this.getLayerGroupId();case r.HH.DATE:return this.dateBucket}}getFloorId(){return this.floorId}getDateBucket(){return this.dateBucket}getTypeId(){return this.typeId}getLayerGroupId(){var t,e;const o=null===(t=this.layersData)||void 0===t?void 0:t.getBaseLayerId(),s=null===(e=this.layersData)||void 0===e?void 0:e.getViewLayerId();return this.layerId&&s&&this.layerId===o?s:this.layerId}isLayerVisible(){return!this.layersData||!this.layerId||this.layersData.layerVisible(this.layerId)}onSelect(){this.commandBinder.issueCommand(new a.IL(this.id,this.typeId))}registerBindings(){}cancelBindings(){this.bindings.forEach((t=>t.cancel()))}}}}]);