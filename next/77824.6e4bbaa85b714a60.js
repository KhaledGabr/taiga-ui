(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[77824],{77824:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiElasticContainerModule:()=>S});var i=n(46556),a=n(95829),s=n(65046),c=n(20682),o=n(79243),u=n(57760),r=n(96112),l=n(39508),d=n(73803),p=n(66399),m=n(93815),h=n(34481),f=n(3616),g=n(7641);let b=(()=>{var e;class t{constructor(){this.more="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas. Donec nisl ipsum, faucibus sit amet elit eu, vehicula hendrerit purus. Duis tempus pulvinar pharetra. In volutpat, odio dictum ornare iaculis, arcu turpis blandit quam, sit amet malesuada nisl enim nec tortor. In eleifend arcu diam, ut dignissim risus elementum nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque elit ac feugiat posuere. Aliquam diam ante, condimentum eget nisi nec, suscipit efficitur velit. Cras sed dolor eu tortor dapibus condimentum.",this.less="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ipsum in elit mattis consectetur. Maecenas venenatis ligula libero, lobortis rhoncus eros aliquam a. Vivamus blandit scelerisque urna, eu euismod ipsum ultricies non. Aenean fringilla tincidunt luctus. Phasellus eleifend a enim vel aliquet. Donec accumsan orci ac nunc suscipit posuere in a turpis. Fusce hendrerit in lectus eu egestas.",this.current=this.less}toggle(){this.current=this.current===this.less?this.more:this.less}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.VBU({type:e,selectors:[["tui-elastic-container-example-1"]],decls:4,vars:2,consts:[["tuiLink","",3,"click"]],template:function(e,t){1&e&&(l.j41(0,"tui-elastic-container"),l.EFF(1),l.j41(2,"button",0),l.bIt("click",(function(){return t.toggle()})),l.EFF(3),l.k0s()()),2&e&&(l.R7$(1),l.SpI(" ",t.current," "),l.R7$(2),l.SpI(" Show ",t.current===t.more?"less":"more"," "))},dependencies:[f.Q,g.E],encapsulation:2,changeDetection:0}),t})(),v=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.VBU({type:e,selectors:[["tui-elastic-container-example-2"]],decls:3,vars:0,consts:[[1,"container"],["contenteditable","",1,"editable"]],template:function(e,t){1&e&&(l.j41(0,"tui-elastic-container",0)(1,"div",1),l.EFF(2," Editable content "),l.k0s()())},dependencies:[f.Q],styles:[".container[_ngcontent-%COMP%]{border:2px solid var(--tui-text-03);overflow:visible}.container[_ngcontent-%COMP%]:focus-within{border-color:var(--tui-primary)}.editable[_ngcontent-%COMP%]{outline:none;padding:1rem}"],changeDetection:0}),t})();var x=n(72158),k=n(39373);function F(e,t){1&e&&(l.j41(0,"div",4),l.EFF(1," I'm content "),l.k0s())}let E=(()=>{var e;class t{constructor(){this.content=1}add(){this.content++}remove(){this.content--}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.VBU({type:e,selectors:[["tui-elastic-container-example-3"]],decls:6,vars:1,consts:[[1,"visible"],["class","tui-space_bottom-4",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["size","s","tuiButton","",1,"tui-space_right-2",3,"click"],["size","s","tuiButton","",3,"click"],[1,"tui-space_bottom-4"]],template:function(e,t){1&e&&(l.j41(0,"tui-elastic-container",0),l.DNE(1,F,2,0,"div",1),l.j41(2,"button",2),l.bIt("click",(function(){return t.add()})),l.EFF(3," Add content "),l.k0s(),l.j41(4,"button",3),l.bIt("click",(function(){return t.remove()})),l.EFF(5," Remove content "),l.k0s()()),2&e&&(l.R7$(1),l.Y8G("tuiRepeatTimesOf",t.content))},dependencies:[f.Q,x.N,k.S],styles:[".visible[_ngcontent-%COMP%]{overflow:visible}"],changeDetection:0}),t})();var M=n(89676),j=n(97138),T=n(45113);function C(e,t){if(1&e){const e=l.RV6();l.j41(0,"div",3)(1,"h3",4)(2,"button",5),l.bIt("click",(function(){const t=l.eBV(e).$implicit;return l.Njj(t.expanded=!t.expanded)})),l.k0s(),l.EFF(3," Nested form "),l.j41(4,"button",6),l.bIt("click",(function(){const t=l.eBV(e).index,n=l.XpG();return l.Njj(n.remove(t))})),l.k0s()(),l.j41(5,"tui-expand",7)(6,"tui-input",8),l.bIt("ngModelChange",(function(t){const n=l.eBV(e).$implicit;return l.Njj(n.value=t)})),l.EFF(7," Some input "),l.k0s()()()}if(2&e){const e=t.$implicit;l.R7$(2),l.AVh("expand_open",e.expanded),l.R7$(3),l.Y8G("expanded",e.expanded),l.R7$(1),l.Y8G("ngModel",e.value)}}let y=(()=>{var e;class t{constructor(){this.items=[{expanded:!1,value:"Test 1"},{expanded:!1,value:"Test 2"}]}add(){this.items=this.items.concat({expanded:!1,value:"New value"})}remove(e){this.items=(0,o.tuiArrayRemove)(this.items,e)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.VBU({type:e,selectors:[["tui-elastic-container-example-4"]],decls:4,vars:1,consts:[["size","s","tuiButton","",3,"click"],[1,"b-form","tui-space_top-4"],["class","wrapper",4,"ngFor","ngForOf"],[1,"wrapper"],[1,"title"],["appearance","secondary","icon","tuiIconChevronDown","shape","rounded","size","s","title","Expand","tuiIconButton","",1,"expand",3,"click"],["appearance","flat","icon","tuiIconTrash","shape","rounded","size","s","title","Remove","tuiIconButton","",1,"remove",3,"click"],[3,"expanded"],[1,"tui-space_top-4",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(l.j41(0,"button",0),l.bIt("click",(function(){return t.add()})),l.EFF(1," Add item\n"),l.k0s(),l.j41(2,"tui-elastic-container",1),l.DNE(3,C,8,4,"div",2),l.k0s()),2&e&&(l.R7$(3),l.Y8G("ngForOf",t.items))},dependencies:[i.Sq,a.BC,a.vS,M.m,j.W,f.Q,T.s,k.S],styles:[".wrapper[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}.title[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0}.expand[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:.5rem}.expand_open[_ngcontent-%COMP%]{transform:rotate(180deg)}.remove[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),t})();function w(e,t){if(1&e&&(l.j41(0,"p"),l.EFF(1,"A wrapper component that changes its height with transition, depending on the content"),l.k0s(),l.j41(2,"tui-doc-example",3),l.nrm(3,"tui-elastic-container-example-1"),l.k0s(),l.j41(4,"tui-doc-example",4),l.nrm(5,"tui-elastic-container-example-2"),l.k0s(),l.j41(6,"tui-doc-example",5),l.nrm(7,"tui-elastic-container-example-3"),l.k0s(),l.j41(8,"tui-doc-example",6),l.nrm(9,"tui-elastic-container-example-4"),l.k0s()),2&e){const e=l.XpG();l.R7$(2),l.Y8G("content",e.example1),l.R7$(2),l.Y8G("content",e.example2),l.R7$(2),l.Y8G("content",e.example3),l.R7$(2),l.Y8G("content",e.example4)}}function I(e,t){if(1&e&&(l.j41(0,"ol",7)(1,"li")(2,"p"),l.EFF(3," Import "),l.j41(4,"code"),l.EFF(5,"TuiElasticContainerModule"),l.k0s(),l.EFF(6," into a module where you want to use our component "),l.k0s(),l.nrm(7,"tui-doc-code",8),l.k0s(),l.j41(8,"li")(9,"p"),l.EFF(10,"Add to the template:"),l.k0s(),l.nrm(11,"tui-doc-code",9),l.k0s()()),2&e){const e=l.XpG();l.R7$(7),l.Y8G("code",e.exampleModule),l.R7$(4),l.Y8G("code",e.exampleHtml)}}let R=(()=>{var e;class t{constructor(){this.exampleModule=n.e(81113).then(n.t.bind(n,3494,17)),this.exampleHtml=n.e(71863).then(n.t.bind(n,71863,17)),this.example1={TypeScript:n.e(80141).then(n.t.bind(n,2522,17)),HTML:n.e(26753).then(n.t.bind(n,26753,17))},this.example2={TypeScript:n.e(54508).then(n.t.bind(n,54508,17)),HTML:n.e(43316).then(n.t.bind(n,43316,17)),LESS:n.e(71720).then(n.t.bind(n,71720,17))},this.example3={TypeScript:n.e(74359).then(n.t.bind(n,74359,17)),HTML:n.e(72551).then(n.t.bind(n,72551,17)),LESS:n.e(35655).then(n.t.bind(n,35655,17))},this.example4={TypeScript:n.e(10830).then(n.t.bind(n,10830,17)),HTML:n.e(82802).then(n.t.bind(n,82802,17)),LESS:n.e(2502).then(n.t.bind(n,2502,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.VBU({type:e,selectors:[["example-tui-elastic-container"]],decls:3,vars:0,consts:[["header","ElasticContainer","package","KIT","type","components"],["pageTab",""],["pageTab","Setup"],["id","more","heading","Show more",3,"content"],["id","contenteditable","heading","contenteditable",3,"content"],["id","dynamic","heading","Add and remove content",3,"content"],["id","expand","heading","With animations inside",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.j41(0,"tui-doc-page",0),l.DNE(1,w,10,4,"ng-template",1),l.DNE(2,I,12,2,"ng-template",2),l.k0s())},dependencies:[d.t,p.P,m.T,h.o,b,v,E,y],encapsulation:2,changeDetection:0}),t})(),S=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.$C({type:e}),e.ɵinj=l.G2t({imports:[i.MD,a.YN,r.TuiInputModule,r.TuiElasticContainerModule,o.TuiRepeatTimesModule,u.TuiExpandModule,u.TuiButtonModule,u.TuiLinkModule,c.lK,s.iI.forChild((0,c.CC)(R))]}),t})()}}]);