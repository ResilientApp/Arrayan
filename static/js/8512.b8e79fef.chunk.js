"use strict";(self.webpackChunkarrayan=self.webpackChunkarrayan||[]).push([[8512],{8512:(a,o,t)=>{t.d(o,{OpacityUpdater:()=>e});var i=t(4709);class e{constructor(a){this.container=a}async init(a){const o=a.options.opacity;a.opacity=(0,i.V0)(o,1);const t=o.animation;t.enable&&(a.opacity.velocity=(0,i.Gu)(t.speed)/i.tZ*this.container.retina.reduceFactor,t.sync||(a.opacity.velocity*=(0,i.sZ)())),await Promise.resolve()}isEnabled(a){var o,t,i,e;return!a.destroyed&&!a.spawning&&!!a.opacity&&a.opacity.enable&&((null!==(o=a.opacity.maxLoops)&&void 0!==o?o:0)<=0||(null!==(t=a.opacity.maxLoops)&&void 0!==t?t:0)>0&&(null!==(i=a.opacity.loops)&&void 0!==i?i:0)<(null!==(e=a.opacity.maxLoops)&&void 0!==e?e:0))}reset(a){a.opacity&&(a.opacity.time=0,a.opacity.loops=0)}async update(a,o){this.isEnabled(a)&&a.opacity&&((0,i.Cr)(a,a.opacity,!0,a.options.opacity.animation.destroy,o),await Promise.resolve())}}}}]);
//# sourceMappingURL=8512.b8e79fef.chunk.js.map