(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{kyuL:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTreeModule",(function(){return be}));var l=n("An66"),r=n("3kIJ"),o=n("1VvW"),i=n("SVIu"),a=n("l4xa"),c=n("Qq0t"),d=n("dvRg"),p=n("kZht"),u=n("OZlg"),m=n("e0eB"),s=n("iyc4"),h=n("N/r3"),x=n("2Xhq");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tree-example-1"]],decls:17,vars:1,consts:[[3,"tuiTreeController"]],template:function(e,t){1&e&&(p["\u0275\u0275elementContainerStart"](0,0),p["\u0275\u0275elementStart"](1,"tui-tree-item"),p["\u0275\u0275text"](2," Fruits "),p["\u0275\u0275elementStart"](3,"tui-tree-item"),p["\u0275\u0275text"](4," Apples "),p["\u0275\u0275elementStart"](5,"tui-tree-item"),p["\u0275\u0275text"](6,"Granny Smith"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-tree-item"),p["\u0275\u0275text"](8,"Red Delicious"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"tui-tree-item"),p["\u0275\u0275text"](10,"Oranges"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"tui-tree-item"),p["\u0275\u0275text"](12," Animals "),p["\u0275\u0275elementStart"](13,"tui-tree-item"),p["\u0275\u0275text"](14,"Cats"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"tui-tree-item"),p["\u0275\u0275text"](16,"Dogs"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementContainerEnd"]()),2&e&&p["\u0275\u0275property"]("tuiTreeController",!0)},directives:[h.a,x.a],encapsulation:2,changeDetection:0}),e})();var g=n("ABKX");let v=(()=>{class e{constructor(){this.data=["Top level 1",["Second level item",["Third level 1","Third level 2","Third level 3"]],"Top level 2","Top level 3",["Second 1","Second 2"]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tree-example-2"]],decls:1,vars:1,consts:[[3,"value"]],template:function(e,t){1&e&&p["\u0275\u0275element"](0,"tui-tree",0),2&e&&p["\u0275\u0275property"]("value",t.data)},directives:[g.a],styles:["tui-tree[_ngcontent-%COMP%]{margin-left:-3.5rem}"],changeDetection:0}),e})();var T=n("xdWi"),y=n("ONKv");function b(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-svg",4),2&e){const e=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275property"]("src",e.icon)}}function C(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275template"](1,b,1,1,"tui-svg",3),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275styleProp"]("opacity",1/t.node.level),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",e.icon),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e.text," ")}}let E=(()=>{class e{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",icon:"tuiIconHeart",children:[{text:"Another item",children:[{text:"Next level 1",icon:"tuiIconHeart"},{text:"Next level 2",icon:"tuiIconHeart"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2",icon:"tuiIconHeart"}]}]},this.handler=e=>e.children||a.v}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tree-example-3"]],decls:3,vars:4,consts:[[3,"tuiTreeController","value","content","childrenHandler"],["content",""],[1,"wrapper"],[3,"src",4,"ngIf"],[3,"src"]],template:function(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-tree",0),p["\u0275\u0275template"](1,C,3,4,"ng-template",null,1,p["\u0275\u0275templateRefExtractor"])),2&e){const e=p["\u0275\u0275reference"](2);p["\u0275\u0275property"]("tuiTreeController",!0)("value",t.data)("content",e)("childrenHandler",t.handler)}},directives:[g.a,T.a,h.a,l.t,y.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();var S=n("fKbf"),M=n("zV1d");function P(e,t){1&e&&p["\u0275\u0275text"](0),2&e&&p["\u0275\u0275textInterpolate1"](" ",t.$implicit.text,"\n")}let w=(()=>{class e{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.map=new Map,this.handler=e=>e.children||a.v}toggleTopmost(){this.map.set(this.data,!this.map.get(this.data))}toggleLevel(){this.map.set(this.data.children[0],!this.map.get(this.data.children[0]))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tree-example-4"]],decls:8,vars:5,consts:[[3,"tuiTreeController","map","value","content","childrenHandler"],["content",""],["tuiButton","","size","s",1,"tui-space_right-2",3,"click"],["tuiButton","","size","s",3,"click"]],template:function(e,t){if(1&e&&(p["\u0275\u0275element"](0,"tui-tree",0),p["\u0275\u0275template"](1,P,1,1,"ng-template",null,1,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementStart"](3,"p"),p["\u0275\u0275elementStart"](4,"button",2),p["\u0275\u0275listener"]("click",(function(){return t.toggleTopmost()})),p["\u0275\u0275text"](5," Toggle Topmost "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"button",3),p["\u0275\u0275listener"]("click",(function(){return t.toggleLevel()})),p["\u0275\u0275text"](7," Toggle Top level 1 "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275reference"](2);p["\u0275\u0275property"]("tuiTreeController",!1)("map",t.map)("value",t.data)("content",e)("childrenHandler",t.handler)}},directives:[g.a,T.a,S.a,M.a],encapsulation:2,changeDetection:0}),e})();var I=n("cWK9");let O=(()=>{class e extends d.Nb{get icon(){return this.isExpandable?"tuiIconFolderLarge":"tuiIconFileLarge"}}return e.\u0275fac=function(t){return H(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["folders"]],hostBindings:function(e,t){1&e&&p["\u0275\u0275listener"]("click",(function(){return t.onClick()}))},features:[p["\u0275\u0275InheritDefinitionFeature"]],decls:2,vars:2,consts:[[1,"tui-space_right-2",3,"src"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(p["\u0275\u0275element"](0,"tui-svg",0),p["\u0275\u0275elementContainer"](1,1)),2&e&&(p["\u0275\u0275property"]("src",t.icon),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngTemplateOutlet",t.context.template))},directives:[y.a,l.A],styles:['[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;height:var(--tui-height-s);display:flex;align-items:center;padding:0 .5rem;border-radius:var(--tui-radius-xs);background:var(--tui-base-01)}[_nghost-%COMP%]:after, [_nghost-%COMP%]:before{content:"";position:absolute;left:-.75rem;z-index:-1}[_nghost-%COMP%]:before{width:1rem;border-bottom:1px solid var(--tui-base-04)}[_nghost-%COMP%]:after{top:-1rem;bottom:1rem;border-left:1px solid var(--tui-base-04)}._expandable[_nghost-%COMP%]:hover{cursor:pointer;background:var(--tui-base-02)}tui-tree[_nghost-%COMP%]:last-child > tui-tree-item[_ngcontent-%COMP%] > [polymorpheus-outlet][_ngcontent-%COMP%], tui-tree:last-child > tui-tree-item > [polymorpheus-outlet]   [_nghost-%COMP%], tui-svg[_ngcontent-%COMP%]{position:relative}tui-svg[_ngcontent-%COMP%]{background:inherit;z-index:1}']}),e})();const H=p["\u0275\u0275getInheritedFactory"](O);function _(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-tree",2),2&e){const e=t.$implicit,n=p["\u0275\u0275nextContext"](),l=p["\u0275\u0275reference"](2);p["\u0275\u0275property"]("tuiTreeController",!0)("value",e)("content",l)("childrenHandler",n.handler)}}function k(e,t){1&e&&p["\u0275\u0275text"](0),2&e&&p["\u0275\u0275textInterpolate1"](" ",t.$implicit.text,"\n")}let N=(()=>{class e{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||a.v}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tree-example-5"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:d.r,useValue:new I.b(O)}])],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"]],template:function(e,t){1&e&&(p["\u0275\u0275template"](0,_,1,4,"tui-tree",0),p["\u0275\u0275template"](1,k,1,1,"ng-template",null,1,p["\u0275\u0275templateRefExtractor"])),2&e&&p["\u0275\u0275property"]("ngForOf",t.data.children)},directives:[l.s,g.a,T.a,h.a],styles:["tui-tree[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0}),e})();var A=n("D+uv"),$=n("M03u");function z(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-tree",2),2&e){const e=t.$implicit,n=p["\u0275\u0275nextContext"](),l=p["\u0275\u0275reference"](2);p["\u0275\u0275property"]("tuiTreeController",!0)("value",e)("content",l)("childrenHandler",n.handler)}}function L(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-checkbox-labeled",3),p["\u0275\u0275listener"]("ngModelChange",(function(n){p["\u0275\u0275restoreView"](e);const l=t.$implicit;return p["\u0275\u0275nextContext"]().onChecked(l,n)})),p["\u0275\u0275pipe"](1,"tuiMapper"),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("ngModel",p["\u0275\u0275pipeBind3"](1,2,e,n.getValue,n.map)),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"](" ",e.text," ")}}let F=(()=>{class e{constructor(){this.map=new Map,this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||a.v,this.getValue=(e,t)=>{const n=V(e),l=!!t.get(n[0]);for(let r=0;r<n.length;r++)if(l!==!!t.get(n[r]))return null;return l}}onChecked(e,t){V(e).forEach(e=>this.map.set(e,t)),this.map=new Map(this.map.entries())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tree-example-6"]],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"],[1,"tui-space_vertical-2","tui-space_left-1",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275template"](0,z,1,4,"tui-tree",0),p["\u0275\u0275template"](1,L,3,6,"ng-template",null,1,p["\u0275\u0275templateRefExtractor"])),2&e&&p["\u0275\u0275property"]("ngForOf",t.data.children)},directives:[l.s,g.a,T.a,h.a,A.a,r.NgControlStatus,r.NgModel],pipes:[$.a],encapsulation:2,changeDetection:0}),e})();function V(e){return e.children?e.children.map(V).reduce((e,t)=>[...e,...t],[]):[e]}var D=n("8lHc"),R=n("7SLS");let j=(()=>{class e{loadChildren({text:e}){return Object(D.a)(3e3).pipe(Object(R.a)([{text:e+" 1",children:Math.random()>.5},{text:e+" 2",children:Math.random()>.5},{text:e+" 3",children:Math.random()>.5}]))}hasChildren({children:e}){return!!e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=p["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();var B=n("HUEM");function G(e,t){1&e&&p["\u0275\u0275element"](0,"tui-loader",4)}function U(e,t){if(1&e&&p["\u0275\u0275text"](0),2&e){const e=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275textInterpolate"](e.text)}}function K(e,t){if(1&e&&(p["\u0275\u0275template"](0,G,1,0,"tui-loader",2),p["\u0275\u0275template"](1,U,1,1,"ng-template",null,3,p["\u0275\u0275templateRefExtractor"])),2&e){const e=t.$implicit,n=p["\u0275\u0275reference"](2),l=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("ngIf",e===l.loading)("ngIfElse",n)}}let W=(()=>{class e{constructor(e,t){this.loading=e,this.service=t,this.map=new Map,this.childrenHandler=e=>this.service.getChildren(e)}onToggled(e){this.service.loadChildren(e)}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](d.t),p["\u0275\u0275directiveInject"](d.Pb))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-tree-example-7"]],features:[p["\u0275\u0275ProvidersFeature"]([d.Pb,{provide:d.u,useValue:{text:"Topmost"}},{provide:d.s,useClass:j}])],decls:4,vars:7,consts:[[3,"tuiTreeController","map","value","childrenHandler","content","toggled"],["content",""],["class","loader",4,"ngIf","ngIfElse"],["text",""],[1,"loader"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-tree",0),p["\u0275\u0275listener"]("toggled",(function(e){return t.onToggled(e)})),p["\u0275\u0275pipe"](1,"async"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](2,K,3,2,"ng-template",null,1,p["\u0275\u0275templateRefExtractor"])),2&e){const e=p["\u0275\u0275reference"](3);p["\u0275\u0275property"]("tuiTreeController",!1)("map",t.map)("value",p["\u0275\u0275pipeBind1"](1,5,t.service.data$))("childrenHandler",t.childrenHandler)("content",e)}},directives:[g.a,T.a,S.a,l.t,B.a],pipes:[l.b],styles:[".loader[_ngcontent-%COMP%]{width:2rem;margin:1rem 0}"],changeDetection:0}),e})();var X,Z=n("yHor"),J=n("zGJC"),q=n("yZWP"),Q=n("u8jZ");X=$localize`:␟149371ee21e2bfea977655b73a5d24d2f79cf9c8␟7525510331693117035:Component to display tree-like data structure`;const Y=["heading",$localize`:␟9d0ac9c23563b10fafabeedbf739e933b054d1c8␟2233560223291461480:Manual`],ee=["heading",$localize`:␟5f507ba5cd0e7796cb0e2e09d95b267384069287␟427843987492660980:Array`],te=["heading",$localize`:␟467bff8643ae9525e0477374f132a6b19bedbfd5␟5610425955750546094:Template`],ne=["heading",$localize`:␟ce39c4f4b594097cb27118d8439de3dadb3d6fbb␟959005572385202816:Programmatic control`],le=["heading",$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`],re=["heading",$localize`:␟4550f610fd0713a3f3ac61109ee77ba83124ac8e␟289341251890660084:Checkbox`],oe=["heading",$localize`:␟b2f9aee0adc67cfacfc0d888ba57440260cd29e5␟8275800366978668046:Asynchronous`];function ie(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18n"](1,X),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-example",2),p["\u0275\u0275i18nAttributes"](3,Y),p["\u0275\u0275element"](4,"tui-tree-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](6,ee),p["\u0275\u0275element"](7,"tui-tree-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](9,te),p["\u0275\u0275element"](10,"tui-tree-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](12,ne),p["\u0275\u0275element"](13,"tui-tree-example-4"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"tui-doc-example",6),p["\u0275\u0275i18nAttributes"](15,le),p["\u0275\u0275element"](16,"tui-tree-example-5"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](17,"tui-doc-example",7),p["\u0275\u0275i18nAttributes"](18,re),p["\u0275\u0275element"](19,"tui-tree-example-6"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"tui-doc-example",8),p["\u0275\u0275i18nAttributes"](21,oe),p["\u0275\u0275element"](22,"tui-tree-example-7"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example3),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example4),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example5),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example6),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example7)}}function ae(e,t){1&e&&(p["\u0275\u0275text"](0," Directive used to enable opening/closing of nodes with children. "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"Boolean"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," input is the default state. "))}function ce(e,t){}function de(e,t){}function pe(e,t){}function ue(e,t){1&e&&(p["\u0275\u0275text"](0," Directive used to enable opening/closing of nodes with children. "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"Boolean"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," input is the default state. "))}function me(e,t){1&e&&p["\u0275\u0275text"](0," A map used with controller directive for manual programmatic toggling. ")}function se(e,t){1&e&&(p["\u0275\u0275text"](0," Provide your own component used internally to display node content (see "),p["\u0275\u0275elementStart"](1,"a",20),p["\u0275\u0275text"](2," this example "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," ) "))}function he(e,t){1&e&&p["\u0275\u0275text"](0," Provide your own open/closed controlling mechanism ")}function xe(e,t){1&e&&(p["\u0275\u0275text"](0," Provide your own tracker for value/node pairs (so you can match "),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2,"TreeItem"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](3," instances to their corresponding "),p["\u0275\u0275elementStart"](4,"code"),p["\u0275\u0275text"](5,"data: T"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](6," when using "),p["\u0275\u0275elementStart"](7,"code"),p["\u0275\u0275text"](8,"Tree"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](9," component with custom open/closed controller) "))}function fe(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-documentation",9),p["\u0275\u0275template"](1,ae,4,0,"ng-template",10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation",11),p["\u0275\u0275template"](3,ce,0,0,"ng-template",12),p["\u0275\u0275template"](4,de,0,0,"ng-template",13),p["\u0275\u0275template"](5,pe,0,0,"ng-template",14),p["\u0275\u0275template"](6,ue,4,0,"ng-template",10),p["\u0275\u0275template"](7,me,1,0,"ng-template",15),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-doc-documentation",16),p["\u0275\u0275template"](9,se,4,0,"ng-template",17),p["\u0275\u0275template"](10,he,1,0,"ng-template",18),p["\u0275\u0275template"](11,xe,10,0,"ng-template",19),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("showValues",!1),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("showValues",!1),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("showValues",!1))}var ge,ve;function Te(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",21),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,ge),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",22),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,ve),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",23),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}ge=$localize`:␟6e79a7191ed5e61990905539aa327e48d2514354␟5790081766230251440: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTreeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,ve=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ye=(()=>{class e{constructor(){this.exampleModule=n.e(1428).then(n.bind(null,"dGvy")),this.exampleHtml=n.e(1429).then(n.bind(null,"Yj+p")),this.example1={TypeScript:n.e(1408).then(n.bind(null,"uAkz")),HTML:n.e(1407).then(n.bind(null,"xBft"))},this.example2={TypeScript:n.e(1411).then(n.bind(null,"sG+9")),HTML:n.e(1409).then(n.bind(null,"0kht")),LESS:n.e(1410).then(n.bind(null,"McQp"))},this.example3={TypeScript:n.e(1414).then(n.bind(null,"zIec")),HTML:n.e(1412).then(n.bind(null,"23jx")),LESS:n.e(1413).then(n.bind(null,"OIFe"))},this.example4={TypeScript:n.e(1416).then(n.bind(null,"tYI+")),HTML:n.e(1415).then(n.bind(null,"FH1o"))},this.example5={TypeScript:n.e(1421).then(n.bind(null,"bXzy")),HTML:n.e(1419).then(n.bind(null,"7WFn")),LESS:n.e(1420).then(n.bind(null,"CX3M")),"content.ts":n.e(1418).then(n.bind(null,"zUU/")),"content.less":n.e(1417).then(n.bind(null,"c09S"))},this.example6={TypeScript:n.e(1423).then(n.bind(null,"ibgd")),HTML:n.e(1422).then(n.bind(null,"0IXU"))},this.example7={TypeScript:n.e(1426).then(n.bind(null,"VVG7")),HTML:n.e(1424).then(n.bind(null,"M2Z/")),LESS:n.e(1425).then(n.bind(null,"FsAT")),"service.ts":n.e(1427).then(n.bind(null,"rztI"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tree"]],decls:4,vars:0,consts:[["header","Tree","package","KIT","type","components"],["pageTab",""],["id","manual",3,"content",6,"heading"],["id","array",3,"content",6,"heading"],["id","template",3,"content",6,"heading"],["id","programmatic",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],["id","checkbox",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["heading","TreeItem",3,"showValues"],["documentationPropertyName","tuiTreeController","documentationPropertyType","boolean","documentationPropertyMode","input"],["heading","Tree",3,"showValues"],["documentationPropertyName","childrenHandler","documentationPropertyType","TuiHandler<T, readonly T[]>","documentationPropertyMode","input"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent<TuiTreeContext>","documentationPropertyMode","input"],["documentationPropertyName","data","documentationPropertyType","T","documentationPropertyMode","input"],["documentationPropertyName","map","documentationPropertyType","Map<T, boolean>","documentationPropertyMode","input"],["heading","Tokens",3,"showValues"],["documentationPropertyName","TUI_TREE_CONTENT","documentationPropertyType","PolymorpheusContent<TuiTreeItemContext>"],["documentationPropertyName","TUI_TREE_CONTROLLER","documentationPropertyType","TuiTreeController"],["documentationPropertyName","TUI_TREE_ACCESSOR","documentationPropertyType","TuiTreeAccessor<T>"],["tuiLink","","routerLink","/components/tree","fragment","custom"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,ie,23,7,"ng-template",1),p["\u0275\u0275template"](2,fe,12,3,"ng-template",1),p["\u0275\u0275template"](3,Te,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[u.a,m.a,s.a,f,v,E,w,N,F,W,Z.a,J.a,q.a,o.e,Q.a],encapsulation:2,changeDetection:0}),e})(),be=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.Ob,c.Vb,c.ab,c.yb,d.H,a.Gb,c.zb,r.FormsModule,l.c,i.m,o.f.forChild(Object(i.t)(ye))]]}),e})()}}]);