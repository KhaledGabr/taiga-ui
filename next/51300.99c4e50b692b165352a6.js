(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[51300],{51300:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiTreeModule:()=>se});var o=n(12057),i=n(24751),r=n(33982),l=n(29851),c=n(68807),a=n(3497),u=n(55908),s=n(74788),d=n(88331),p=n(37159),m=n(57068),h=n(84239),T=n(23046);let g=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-tree-example-1"]],decls:17,vars:1,consts:[[3,"tuiTreeController"]],template:function(e,t){1&e&&(s.ynx(0,0),s.TgZ(1,"tui-tree-item"),s._uU(2," Fruits "),s.TgZ(3,"tui-tree-item"),s._uU(4," Apples "),s.TgZ(5,"tui-tree-item"),s._uU(6,"Granny Smith"),s.qZA(),s.TgZ(7,"tui-tree-item"),s._uU(8,"Red Delicious"),s.qZA(),s.qZA(),s.TgZ(9,"tui-tree-item"),s._uU(10,"Oranges"),s.qZA(),s.qZA(),s.TgZ(11,"tui-tree-item"),s._uU(12," Animals "),s.TgZ(13,"tui-tree-item"),s._uU(14,"Cats"),s.qZA(),s.TgZ(15,"tui-tree-item"),s._uU(16,"Dogs"),s.qZA(),s.qZA(),s.BQk()),2&e&&s.Q6J("tuiTreeController",!0)},directives:[h.o,T.R],encapsulation:2,changeDetection:0}),e})();var x=n(93759);let f=(()=>{class e{constructor(){this.data=["Top level 1",["Second level item",["Third level 1","Third level 2","Third level 3"]],"Top level 2","Top level 3",["Second 1","Second 2"]]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-tree-example-2"]],decls:1,vars:1,consts:[[3,"value"]],template:function(e,t){1&e&&s._UZ(0,"tui-tree",0),2&e&&s.Q6J("value",t.data)},directives:[x.Y],styles:["tui-tree[_ngcontent-%COMP%]{margin-left:-3.5rem}"],changeDetection:0}),e})();var v=n(97247),_=n(34880);function Z(e,t){if(1&e&&s._UZ(0,"tui-svg",4),2&e){const e=s.oxw().$implicit;s.Q6J("src",e.icon)}}function y(e,t){if(1&e&&(s.TgZ(0,"div",2),s.YNc(1,Z,1,1,"tui-svg",3),s._uU(2),s.qZA()),2&e){const e=t.$implicit,n=t.node;s.Udp("opacity",1/n.level),s.xp6(1),s.Q6J("ngIf",e.icon),s.xp6(1),s.hij(" ",e.text," ")}}let A=(()=>{class e{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",icon:"tuiIconHeart",children:[{text:"Another item",children:[{text:"Next level 1",icon:"tuiIconHeart"},{text:"Next level 2",icon:"tuiIconHeart"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2",icon:"tuiIconHeart"}]}]},this.handler=e=>e.children||c.EMPTY_ARRAY}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-tree-example-3"]],decls:3,vars:4,consts:[[3,"tuiTreeController","value","content","childrenHandler"],["content",""],[1,"wrapper"],[3,"src",4,"ngIf"],[3,"src"]],template:function(e,t){if(1&e&&(s._UZ(0,"tui-tree",0),s.YNc(1,y,3,4,"ng-template",null,1,s.W1O)),2&e){const e=s.MAs(2);s.Q6J("tuiTreeController",!0)("value",t.data)("content",e)("childrenHandler",t.handler)}},directives:[x.Y,v.n,h.o,o.O5,_.P],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();var U=n(63624),M=n(76189);function b(e,t){if(1&e&&s._uU(0),2&e){const e=t.$implicit;s.hij(" ",e.text,"\n")}}let C=(()=>{class e{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.map=new Map,this.handler=e=>e.children||c.EMPTY_ARRAY}toggleTopmost(){this.map.set(this.data,!this.map.get(this.data))}toggleLevel(){const e=this.data.children||[];this.map.set(e[0],!this.map.get(e[0]))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-tree-example-4"]],decls:8,vars:5,consts:[[3,"tuiTreeController","map","value","content","childrenHandler"],["content",""],["tuiButton","","size","s","type","button",1,"tui-space_right-2",3,"click"],["tuiButton","","size","s","type","button",3,"click"]],template:function(e,t){if(1&e&&(s._UZ(0,"tui-tree",0),s.YNc(1,b,1,1,"ng-template",null,1,s.W1O),s.TgZ(3,"p"),s.TgZ(4,"button",2),s.NdJ("click",(function(){return t.toggleTopmost()})),s._uU(5," Toggle Topmost "),s.qZA(),s.TgZ(6,"button",3),s.NdJ("click",(function(){return t.toggleLevel()})),s._uU(7," Toggle Top level 1 "),s.qZA(),s.qZA()),2&e){const e=s.MAs(2);s.Q6J("tuiTreeController",!1)("map",t.map)("value",t.data)("content",e)("childrenHandler",t.handler)}},directives:[x.Y,v.n,U.m,M.v],encapsulation:2,changeDetection:0}),e})();var N=n(89570);let w=(()=>{class e extends u.TuiTreeItemContentComponent{get icon(){return this.isExpandable?"tuiIconFolderLarge":"tuiIconFileLarge"}}return e.ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["folders"]],hostBindings:function(e,t){1&e&&s.NdJ("click",(function(){return t.onClick()}))},features:[s.qOj],decls:2,vars:2,consts:[[1,"tui-space_right-2",3,"src"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(s._UZ(0,"tui-svg",0),s.GkF(1,1)),2&e&&(s.Q6J("src",t.icon),s.xp6(1),s.Q6J("ngTemplateOutlet",t.context.template))},directives:[_.P,o.tP],styles:['[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;height:var(--tui-height-s);display:flex;align-items:center;padding:0 .5rem;border-radius:var(--tui-radius-xs);background:var(--tui-base-01)}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";position:absolute;left:-.75rem;z-index:-1}[_nghost-%COMP%]:before{width:1rem;border-bottom:1px solid var(--tui-base-04)}[_nghost-%COMP%]:after{top:-1rem;bottom:1rem;border-left:1px solid var(--tui-base-04)}._expandable[_nghost-%COMP%]:hover{cursor:pointer;background:var(--tui-base-02)}tui-svg[_ngcontent-%COMP%]{position:relative;background:inherit;z-index:1}']}),e})();function P(e,t){if(1&e&&s._UZ(0,"tui-tree",2),2&e){const e=t.$implicit,n=s.oxw(),o=s.MAs(2);s.Q6J("tuiTreeController",!0)("value",e)("content",o)("childrenHandler",n.handler)}}function q(e,t){if(1&e&&s._uU(0),2&e){const e=t.$implicit;s.hij(" ",e.text,"\n")}}let Y=(()=>{class e{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||c.EMPTY_ARRAY}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-tree-example-5"]],features:[s._Bn([{provide:u.TUI_TREE_CONTENT,useValue:new N.Al(w)}])],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"]],template:function(e,t){1&e&&(s.YNc(0,P,1,4,"tui-tree",0),s.YNc(1,q,1,1,"ng-template",null,1,s.W1O)),2&e&&s.Q6J("ngForOf",t.data.children)},directives:[o.sg,x.Y,v.n,h.o],styles:["tui-tree[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0}),e})();var O=n(81894),J=n(35271);function E(e,t){if(1&e&&s._UZ(0,"tui-tree",2),2&e){const e=t.$implicit,n=s.oxw(),o=s.MAs(2);s.Q6J("tuiTreeController",!0)("value",e)("content",o)("childrenHandler",n.handler)}}function k(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-checkbox-labeled",3),s.NdJ("ngModelChange",(function(t){const n=s.CHM(e).$implicit;return s.oxw().onChecked(n,t)})),s.ALo(1,"tuiMapper"),s._uU(2),s.qZA()}if(2&e){const e=t.$implicit,n=s.oxw();s.Q6J("ngModel",s.Dn7(1,2,e,n.getValue,n.map)),s.xp6(2),s.hij(" ",e.text," ")}}let H=(()=>{class e{constructor(){this.map=new Map,this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||c.EMPTY_ARRAY,this.getValue=(e,t)=>{const n=Q(e),o=!!t.get(n[0]);for(const e of n)if(o!==!!t.get(e))return null;return o}}onChecked(e,t){Q(e).forEach((e=>this.map.set(e,t))),this.map=new Map(this.map.entries())}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-tree-example-6"]],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"],[1,"tui-space_vertical-2","tui-space_left-1",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.YNc(0,E,1,4,"tui-tree",0),s.YNc(1,k,3,6,"ng-template",null,1,s.W1O)),2&e&&s.Q6J("ngForOf",t.data.children)},directives:[o.sg,x.Y,v.n,h.o,O.p,i.JJ,i.On],pipes:[J.c],encapsulation:2,changeDetection:0}),e})();function Q(e){return e.children?e.children.map(Q).reduce(((e,t)=>[...e,...t]),[]):[e]}var S=n(46797),I=n(88002);let L=(()=>{class e{loadChildren({text:e}){return(0,S.H)(3e3).pipe((0,I.U)((()=>[{text:`${e} 1`,children:Math.random()>.5},{text:`${e} 2`,children:Math.random()>.5},{text:`${e} 3`,children:Math.random()>.5}])))}hasChildren({children:e}){return!!e}}return e.ɵfac=function(t){return new(t||e)},e.ɵprov=s.Yz7({token:e,factory:e.ɵfac}),e})();var R=n(23184);function D(e,t){1&e&&s._UZ(0,"tui-loader",4)}function $(e,t){if(1&e&&s._uU(0),2&e){const e=s.oxw().$implicit;s.Oqu(e.text)}}function V(e,t){if(1&e&&(s.YNc(0,D,1,0,"tui-loader",2),s.YNc(1,$,1,1,"ng-template",null,3,s.W1O)),2&e){const e=t.$implicit,n=s.MAs(2),o=s.oxw();s.Q6J("ngIf",e===o.loading)("ngIfElse",n)}}let B=(()=>{class e{constructor(e,t){this.loading=e,this.service=t,this.map=new Map,this.childrenHandler=e=>this.service.getChildren(e)}onToggled(e){this.service.loadChildren(e)}}return e.ɵfac=function(t){return new(t||e)(s.Y36(u.TUI_TREE_LOADING),s.Y36(u.TuiTreeService))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-tree-example-7"]],features:[s._Bn([u.TuiTreeService,{provide:u.TUI_TREE_START,useValue:{text:"Topmost"}},{provide:u.TUI_TREE_LOADER,useClass:L}])],decls:4,vars:7,consts:[[3,"tuiTreeController","map","value","childrenHandler","content","toggled"],["content",""],["class","loader",4,"ngIf","ngIfElse"],["text",""],[1,"loader"]],template:function(e,t){if(1&e&&(s.TgZ(0,"tui-tree",0),s.NdJ("toggled",(function(e){return t.onToggled(e)})),s.ALo(1,"async"),s.qZA(),s.YNc(2,V,3,2,"ng-template",null,1,s.W1O)),2&e){const e=s.MAs(3);s.Q6J("tuiTreeController",!1)("map",t.map)("value",s.lcZ(1,5,t.service.data$))("childrenHandler",t.childrenHandler)("content",e)}},directives:[x.Y,v.n,U.m,o.O5,R.k],pipes:[o.Ov],styles:[".loader[_ngcontent-%COMP%]{width:2rem;margin:1rem 0}"],changeDetection:0}),e})();var F=n(54476),z=n(17023),X=n(66596),j=n(76349);function W(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1,"Component to display tree-like data structure"),s.qZA(),s.TgZ(2,"tui-doc-example",2),s._UZ(3,"tui-tree-example-1"),s.qZA(),s.TgZ(4,"tui-doc-example",3),s._UZ(5,"tui-tree-example-2"),s.qZA(),s.TgZ(6,"tui-doc-example",4),s._UZ(7,"tui-tree-example-3"),s.qZA(),s.TgZ(8,"tui-doc-example",5),s._UZ(9,"tui-tree-example-4"),s.qZA(),s.TgZ(10,"tui-doc-example",6),s._UZ(11,"tui-tree-example-5"),s.qZA(),s.TgZ(12,"tui-doc-example",7),s._UZ(13,"tui-tree-example-6"),s.qZA(),s.TgZ(14,"tui-doc-example",8),s._UZ(15,"tui-tree-example-7"),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Q6J("content",e.example1),s.xp6(2),s.Q6J("content",e.example2),s.xp6(2),s.Q6J("content",e.example3),s.xp6(2),s.Q6J("content",e.example4),s.xp6(2),s.Q6J("content",e.example5),s.xp6(2),s.Q6J("content",e.example6),s.xp6(2),s.Q6J("content",e.example7)}}function G(e,t){1&e&&(s._uU(0," Directive used to enable opening/closing of nodes with children. "),s.TgZ(1,"code"),s._uU(2,"Boolean"),s.qZA(),s._uU(3," input is the default state. "))}function K(e,t){}function ee(e,t){}function te(e,t){}function ne(e,t){1&e&&(s._uU(0," Directive used to enable opening/closing of nodes with children. "),s.TgZ(1,"code"),s._uU(2,"Boolean"),s.qZA(),s._uU(3," input is the default state. "))}function oe(e,t){1&e&&s._uU(0," A map used with controller directive for manual programmatic toggling. ")}function ie(e,t){1&e&&(s._uU(0," Provide your own component used internally to display node content (see "),s.TgZ(1,"a",20),s._uU(2," this example "),s.qZA(),s._uU(3," ) "))}function re(e,t){1&e&&s._uU(0," Provide your own open/closed controlling mechanism ")}function le(e,t){1&e&&(s._uU(0," Provide your own tracker for value/node pairs (so you can match "),s.TgZ(1,"code"),s._uU(2,"TreeItem"),s.qZA(),s._uU(3," instances to their corresponding "),s.TgZ(4,"code"),s._uU(5,"data: T"),s.qZA(),s._uU(6," when using "),s.TgZ(7,"code"),s._uU(8,"Tree"),s.qZA(),s._uU(9," component with custom open/closed controller) "))}function ce(e,t){1&e&&(s.TgZ(0,"tui-doc-documentation",9),s.YNc(1,G,4,0,"ng-template",10),s.qZA(),s.TgZ(2,"tui-doc-documentation",11),s.YNc(3,K,0,0,"ng-template",12),s.YNc(4,ee,0,0,"ng-template",13),s.YNc(5,te,0,0,"ng-template",14),s.YNc(6,ne,4,0,"ng-template",10),s.YNc(7,oe,1,0,"ng-template",15),s.qZA(),s.TgZ(8,"tui-doc-documentation",16),s.YNc(9,ie,4,0,"ng-template",17),s.YNc(10,re,1,0,"ng-template",18),s.YNc(11,le,10,0,"ng-template",19),s.qZA()),2&e&&(s.Q6J("showValues",!1),s.xp6(2),s.Q6J("showValues",!1),s.xp6(6),s.Q6J("showValues",!1))}function ae(e,t){if(1&e&&(s.TgZ(0,"ol",21),s.TgZ(1,"li"),s.TgZ(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiTreeModule"),s.qZA(),s._uU(6," into a module where you want to use our component "),s.qZA(),s._UZ(7,"tui-doc-code",22),s.qZA(),s.TgZ(8,"li"),s.TgZ(9,"p"),s._uU(10,"Add to the template:"),s.qZA(),s._UZ(11,"tui-doc-code",23),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let ue=(()=>{class e{constructor(){this.exampleModule=n.e(148).then(n.t.bind(n,148,17)),this.exampleHtml=n.e(27696).then(n.t.bind(n,27696,17)),this.example1={TypeScript:n.e(79720).then(n.t.bind(n,79720,17)),HTML:n.e(93017).then(n.t.bind(n,93017,17))},this.example2={TypeScript:n.e(12878).then(n.t.bind(n,12878,17)),HTML:n.e(90894).then(n.t.bind(n,90894,17)),LESS:n.e(4918).then(n.t.bind(n,4918,17))},this.example3={TypeScript:n.e(64387).then(n.t.bind(n,64387,17)),HTML:n.e(39585).then(n.t.bind(n,39585,17)),LESS:n.e(82776).then(n.t.bind(n,82776,17))},this.example4={TypeScript:n.e(29166).then(n.t.bind(n,29166,17)),HTML:n.e(93606).then(n.t.bind(n,93606,17))},this.example5={TypeScript:n.e(29902).then(n.t.bind(n,29902,17)),HTML:n.e(45433).then(n.t.bind(n,45433,17)),LESS:n.e(21457).then(n.t.bind(n,21457,17)),"content.ts":n.e(90422).then(n.t.bind(n,90422,17)),"content.less":n.e(90351).then(n.t.bind(n,90351,17))},this.example6={TypeScript:n.e(15661).then(n.t.bind(n,15661,17)),HTML:n.e(45946).then(n.t.bind(n,45946,17))},this.example7={TypeScript:n.e(67978).then(n.t.bind(n,67978,17)),HTML:n.e(21825).then(n.t.bind(n,21825,17)),LESS:n.e(5690).then(n.t.bind(n,5690,17)),"service.ts":n.e(97485).then(n.t.bind(n,97485,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["example-tree"]],decls:4,vars:0,consts:[["header","Tree","package","KIT","type","components"],["pageTab",""],["id","manual","heading","Manual",3,"content"],["id","array","heading","Array",3,"content"],["id","template","heading","Template",3,"content"],["id","programmatic","heading","Programmatic control",3,"content"],["id","custom","heading","Custom",3,"content"],["id","checkbox","heading","Checkbox",3,"content"],["id","async","heading","Asynchronous",3,"content"],["heading","TreeItem",3,"showValues"],["documentationPropertyName","tuiTreeController","documentationPropertyType","boolean","documentationPropertyMode","input"],["heading","Tree",3,"showValues"],["documentationPropertyName","childrenHandler","documentationPropertyType","TuiHandler<T, readonly T[]>","documentationPropertyMode","input"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent<TuiTreeContext>","documentationPropertyMode","input"],["documentationPropertyName","data","documentationPropertyType","T","documentationPropertyMode","input"],["documentationPropertyName","map","documentationPropertyType","Map<T, boolean>","documentationPropertyMode","input"],["heading","Tokens",3,"showValues"],["documentationPropertyName","TUI_TREE_CONTENT","documentationPropertyType","PolymorpheusContent<TuiTreeItemContext>"],["documentationPropertyName","TUI_TREE_CONTROLLER","documentationPropertyType","TuiTreeController"],["documentationPropertyName","TUI_TREE_ACCESSOR","documentationPropertyType","TuiTreeAccessor<T>"],["tuiLink","","routerLink","/components/tree","fragment","custom"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,W,16,7,"ng-template",1),s.YNc(2,ce,12,3,"ng-template",1),s.YNc(3,ae,12,2,"ng-template",1),s.qZA())},directives:[d.q,p.n,m.f,g,f,A,C,Y,H,B,F.z,z.B,X.V,r.yS,j.c],encapsulation:2,changeDetection:0}),e})(),se=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[u.TuiTreeModule,a.TuiSvgModule,a.TuiButtonModule,a.TuiLinkModule,u.TuiCheckboxLabeledModule,c.TuiMapperPipeModule,a.TuiLoaderModule,i.u5,o.ez,l.fV,r.Bz.forChild((0,l.Ve)(ue))]]}),e})()}}]);