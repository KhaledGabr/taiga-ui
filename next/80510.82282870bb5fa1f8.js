(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[80510],{80510:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiBreadcrumbsModule:()=>A});var i=n(46556),o=n(95829),a=n(65046),u=n(20682),r=n(79243),s=n(57760),c=n(96112),p=n(39508),m=n(98236),l=n(92840),d=n(7641),f=n(73803),k=n(80199),h=n(21848),b=n(35379),g=n(66399),x=n(93815),E=n(34481);function F(t,e){if(1&t&&(p.j41(0,"a",3),p.EFF(1),p.k0s()),2&t){const t=p.XpG().$implicit;p.Y8G("routerLink",t.routerLink),p.R7$(1),p.SpI(" ",t.caption," ")}}function G(t,e){1&t&&(p.qex(0),p.DNE(1,F,2,2,"a",2),p.bVm())}function L(t,e){if(1&t&&(p.j41(0,"a",3),p.EFF(1),p.k0s()),2&t){const t=p.XpG().$implicit;p.Y8G("routerLink",t.routerLink),p.R7$(1),p.SpI(" ",t.caption," ")}}function T(t,e){1&t&&(p.qex(0),p.DNE(1,L,2,2,"a",2),p.bVm())}let R=(()=>{var t;class e{constructor(){this.items=[{caption:"Selects",routerLink:"/components/select"},{caption:"Multi",routerLink:"/components/multi-select"},{caption:"With tags",routerLink:"/components/multi-select"},{caption:"Current",routerLink:"/navigation/breadcrumbs",routerLinkActiveOptions:{exact:!0}}]}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.VBU({type:t,selectors:[["tui-breadcrumbs-example-1"]],decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],["size","l",1,"tui-space_top-2"],["tuiLink","",3,"routerLink",4,"tuiItem"],["tuiLink","",3,"routerLink"]],template:function(t,e){1&t&&(p.j41(0,"tui-breadcrumbs"),p.DNE(1,G,2,0,"ng-container",0),p.k0s(),p.j41(2,"tui-breadcrumbs",1),p.DNE(3,T,2,0,"ng-container",0),p.k0s()),2&t&&(p.R7$(1),p.Y8G("ngForOf",e.items),p.R7$(2),p.Y8G("ngForOf",e.items))},dependencies:[i.Sq,m.s,l.$,d.E,a.Wk],encapsulation:2,changeDetection:0}),e})();var $=n(7311),M=n(39373),j=n(83879),y=n(86647),D=n(5806),I=n(19724),N=n(72158);function V(t,e){if(1&t&&(p.j41(0,"a",7),p.EFF(1),p.k0s()),2&t){const t=e.$implicit,n=p.XpG(3);p.Y8G("href",n.items[t].link,p.B4B),p.R7$(1),p.SpI(" ",n.items[t].caption," ")}}function Y(t,e){if(1&t&&(p.j41(0,"tui-data-list"),p.DNE(1,V,2,2,"a",6),p.k0s()),2&t){const t=p.XpG(2);p.R7$(1),p.Y8G("tuiRepeatTimesOf",t.items.length-t.max)}}function v(t,e){if(1&t&&(p.j41(0,"tui-hosted-dropdown",3),p.nrm(1,"button",4),p.DNE(2,Y,2,1,"ng-template",null,5,p.C5r),p.k0s()),2&t){const t=p.sdS(3);p.Y8G("content",t)}}function B(t,e){if(1&t&&(p.j41(0,"a",9),p.EFF(1),p.k0s()),2&t){const t=p.XpG().$implicit,e=p.XpG();p.Y8G("href",e.items[t+e.items.length-e.max].link,p.B4B),p.R7$(1),p.SpI(" ",e.items[t+e.items.length-e.max].caption," ")}}function S(t,e){1&t&&(p.qex(0),p.DNE(1,B,2,2,"a",8),p.bVm())}let z=(()=>{var t;class e{constructor(){this.items=[{caption:"Open Source",link:"https://github.com"},{caption:"Angular",link:"https://github.com/topics/angular"},{caption:"Tinkoff",link:"https://github.com/tinkoff"},{caption:"Taiga UI",link:"https://github.com/taiga-family/taiga-ui"},{caption:"Components",link:"https://taiga-ui.dev"},{caption:"Breadcrumbs",link:"https://taiga-ui.dev/navigation/breadcrumbs"}],this.max=4}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.VBU({type:t,selectors:[["tui-breadcrumbs-example-2"]],features:[p.Jv_([(0,c.tuiBreadcrumbsOptionsProvider)({icon:"tuiIconArrowRight",mode:null,size:"l"})])],decls:6,vars:7,consts:[[3,"content",4,"tuiItem"],[4,"tuiRepeatTimes","tuiRepeatTimesOf"],[1,"b-form",3,"max","min","step","ngModel","ngModelChange"],[3,"content"],["appearance","secondary","icon","tuiIconMoreHorizontal","size","xs","title","More","tuiIconButton",""],["content",""],["tuiOption","",3,"href",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["tuiOption","",3,"href"],["tuiLink","",3,"href",4,"tuiItem"],["tuiLink","",3,"href"]],template:function(t,e){1&t&&(p.j41(0,"tui-breadcrumbs"),p.DNE(1,v,4,1,"tui-hosted-dropdown",0),p.DNE(2,S,2,0,"ng-container",1),p.k0s(),p.j41(3,"p")(4,"tui-input-number",2),p.bIt("ngModelChange",(function(t){return e.max=t})),p.EFF(5," Max tabs "),p.k0s()()),2&t&&(p.xc7("color","red"),p.R7$(2),p.Y8G("tuiRepeatTimesOf",e.max),p.R7$(2),p.Y8G("max",4)("min",2)("step",1)("ngModel",e.max))},dependencies:[o.BC,o.vS,m.s,l.$,d.E,$.o,M.S,j.u,y.b,D.Z,I.x,N.N],encapsulation:2,changeDetection:0}),e})();function C(t,e){if(1&t&&(p.j41(0,"p"),p.EFF(1,"Navigation element that shows a path from root page to the current"),p.k0s(),p.j41(2,"tui-doc-example",2),p.nrm(3,"tui-breadcrumbs-example-1"),p.k0s(),p.j41(4,"tui-doc-example",3),p.nrm(5,"tui-breadcrumbs-example-2"),p.k0s()),2&t){const t=p.XpG();p.R7$(2),p.Y8G("content",t.example1),p.R7$(2),p.Y8G("content",t.example2)}}function O(t,e){if(1&t&&(p.j41(0,"a",8),p.EFF(1),p.k0s()),2&t){const t=p.XpG().$implicit;p.Y8G("routerLink",t.routerLink),p.R7$(1),p.SpI(" ",t.caption," ")}}function w(t,e){1&t&&(p.qex(0),p.DNE(1,O,2,2,"a",7),p.bVm())}function P(t,e){1&t&&p.EFF(0," Text size ")}function X(t,e){if(1&t){const t=p.RV6();p.j41(0,"tui-doc-demo")(1,"tui-breadcrumbs",4),p.DNE(2,w,2,0,"ng-container",5),p.k0s()(),p.j41(3,"tui-doc-documentation"),p.DNE(4,P,1,0,"ng-template",6),p.bIt("documentationPropertyValueChange",(function(e){p.eBV(t);const n=p.XpG();return p.Njj(n.size=e)})),p.k0s()}if(2&t){const t=p.XpG();p.R7$(1),p.Y8G("size",t.size),p.R7$(1),p.Y8G("ngForOf",t.items),p.R7$(2),p.Y8G("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size)}}function q(t,e){if(1&t&&(p.j41(0,"ol",9)(1,"li")(2,"p"),p.EFF(3," Import "),p.j41(4,"code"),p.EFF(5,"TuiBreadcrumbsModule"),p.k0s(),p.EFF(6," into a module where you want to use our component "),p.k0s(),p.nrm(7,"tui-doc-code",10),p.k0s(),p.j41(8,"li")(9,"p"),p.EFF(10,"Add to the template:"),p.k0s(),p.nrm(11,"tui-doc-code",11),p.k0s()()),2&t){const t=p.XpG();p.R7$(7),p.Y8G("code",t.exampleModule),p.R7$(4),p.Y8G("code",t.exampleHtml)}}let H=(()=>{var t;class e{constructor(){this.exampleModule=n.e(67890).then(n.t.bind(n,67890,17)),this.exampleHtml=n.e(52476).then(n.t.bind(n,52476,17)),this.example1={TypeScript:n.e(68324).then(n.t.bind(n,68324,17)),HTML:n.e(17052).then(n.t.bind(n,17052,17))},this.example2={TypeScript:n.e(25029).then(n.t.bind(n,25029,17)),HTML:n.e(91849).then(n.t.bind(n,91849,17))},this.itemsVariants=[[{caption:"Select",routerLink:"/tui-select"},{caption:"MultiSelect",routerLink:"/tui-multi-select"},{caption:"InputTag",routerLink:"/tui-input-tag"},{caption:"Current",routerLink:"/tui-breadcrumbs"}]],this.items=this.itemsVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[0]}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=p.VBU({type:t,selectors:[["example-breadcrumbs"]],decls:4,vars:0,consts:[["header","Breadcrumbs","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","more","description","Plus using DI options","heading","More button",3,"content"],[3,"size"],[4,"ngFor","ngForOf"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiLink","",3,"routerLink",4,"tuiItem"],["tuiLink","",3,"routerLink"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(p.j41(0,"tui-doc-page",0),p.DNE(1,C,6,2,"ng-template",1),p.DNE(2,X,5,4,"ng-template",1),p.DNE(3,q,12,2,"ng-template",1),p.k0s())},dependencies:[i.Sq,m.s,l.$,d.E,f.t,k.p,h.c,b.W,g.P,x.T,E.o,a.Wk,R,z],encapsulation:2,changeDetection:0}),e})(),A=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=p.$C({type:t}),t.ɵinj=p.G2t({imports:[i.MD,o.YN,c.TuiBreadcrumbsModule,s.TuiLinkModule,u.lK,s.TuiHostedDropdownModule,s.TuiButtonModule,s.TuiDataListModule,c.TuiInputNumberModule,r.TuiRepeatTimesModule,a.iI.forChild((0,u.CC)(H))]}),e})()}}]);