"use strict";(self.webpackChunkarrayan=self.webpackChunkarrayan||[]).push([[1683],{1683:(i,t,e)=>{e.d(t,{TiltUpdater:()=>l});var s=e(4709);class n{constructor(){this.enable=!1,this.speed=0,this.decay=0,this.sync=!1}load(i){i&&(void 0!==i.enable&&(this.enable=i.enable),void 0!==i.speed&&(this.speed=(0,s.Cs)(i.speed)),void 0!==i.decay&&(this.decay=(0,s.Cs)(i.decay)),void 0!==i.sync&&(this.sync=i.sync))}}class a extends s.SW{constructor(){super(),this.animation=new n,this.direction="clockwise",this.enable=!1,this.value=0}load(i){super.load(i),i&&(this.animation.load(i.animation),void 0!==i.direction&&(this.direction=i.direction),void 0!==i.enable&&(this.enable=i.enable))}}const o=2*Math.PI;class l{constructor(i){this.container=i}getTransformValues(i){var t;const e=(null===(t=i.tilt)||void 0===t?void 0:t.enable)&&i.tilt;return{b:e?Math.cos(e.value)*e.cosDirection:void 0,c:e?Math.sin(e.value)*e.sinDirection:void 0}}async init(i){var t;const e=i.options.tilt;if(!e)return;i.tilt={enable:e.enable,value:(0,s.Id)((0,s.Gu)(e.value)),sinDirection:(0,s.sZ)()>=s.vq?1:-1,cosDirection:(0,s.sZ)()>=s.vq?1:-1,min:0,max:o};let n=e.direction;if("random"===n){n=Math.floor(2*(0,s.sZ)())>0?"counter-clockwise":"clockwise"}switch(n){case"counter-clockwise":case"counterClockwise":i.tilt.status="decreasing";break;case"clockwise":i.tilt.status="increasing"}const a=null===(t=i.options.tilt)||void 0===t?void 0:t.animation;null!==a&&void 0!==a&&a.enable&&(i.tilt.decay=1-(0,s.Gu)(a.decay),i.tilt.velocity=(0,s.Gu)(a.speed)/360*this.container.retina.reduceFactor,a.sync||(i.tilt.velocity*=(0,s.sZ)())),await Promise.resolve()}isEnabled(i){var t;const e=null===(t=i.options.tilt)||void 0===t?void 0:t.animation;return!i.destroyed&&!i.spawning&&!(null===e||void 0===e||!e.enable)}loadOptions(i){i.tilt||(i.tilt=new a);for(var t=arguments.length,e=new Array(t>1?t-1:0),s=1;s<t;s++)e[s-1]=arguments[s];for(const n of e)i.tilt.load(null===n||void 0===n?void 0:n.tilt)}async update(i,t){this.isEnabled(i)&&i.tilt&&((0,s.Cr)(i,i.tilt,!1,"none",t),await Promise.resolve())}}}}]);
//# sourceMappingURL=1683.7b949dff.chunk.js.map