(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90318],{90318:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiPreviewModule:()=>W});var n=i(46556),o=i(65046),c=i(20682),r=i(53200),s=i(79243),l=i(57760),a=i(95735),u=i(39508),p=i(64951),m=i(73803),d=i(66399),h=i(93815),w=i(34481),v=i(39373),g=i(47977),b=i(10256),f=i(90019),k=i(63131),j=i(27356);const x=["preview"],y=["contentSample"];function S(e,t){if(1&e&&u.nrm(0,"img",10),2&e){const e=t.polymorpheusOutlet;u.Y8G("src",e,u.B4B)}}function I(e,t){if(1&e){const e=u.RV6();u.j41(0,"tui-preview",4),u.bIt("tuiSwipe",(function(t){u.eBV(e);const i=u.XpG();return u.Njj(i.onSwipe(t))})),u.j41(1,"tui-preview-title"),u.EFF(2),u.k0s(),u.j41(3,"tui-preview-pagination",5),u.bIt("indexChange",(function(t){u.eBV(e);const i=u.XpG();return u.Njj(i.index=t)})),u.k0s(),u.j41(4,"button",6),u.bIt("click",(function(){u.eBV(e);const t=u.XpG();return u.Njj(t.delete())})),u.k0s(),u.j41(5,"button",7),u.bIt("click",(function(){u.eBV(e);const t=u.XpG();return u.Njj(t.download())})),u.k0s(),u.j41(6,"button",8),u.bIt("click",(function(){const t=u.eBV(e).$implicit;return u.Njj(t.complete())})),u.k0s(),u.DNE(7,S,1,1,"img",9),u.k0s()}if(2&e){const e=u.XpG();u.Y8G("rotatable",!0),u.R7$(2),u.JRh(e.title),u.R7$(1),u.Y8G("length",e.length)("index",e.index),u.R7$(4),u.Y8G("polymorpheusOutlet",e.previewContent)}}function $(e,t){1&e&&(u.j41(0,"div",11)(1,"h1"),u.EFF(2,"Important document"),u.k0s(),u.j41(3,"p"),u.EFF(4,"Hello everyone! This is some important document in A4 format, although it is made using html"),u.k0s(),u.j41(5,"p"),u.EFF(6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),u.k0s(),u.nrm(7,"img",12),u.k0s())}let T=(()=>{var e;class t{constructor(e,t){this.previewService=e,this.alerts=t,this.index=0,this.length=2}get title(){return 0===this.index?"Transaction cert.jpg":"My face.jpg"}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"https://avatars.githubusercontent.com/u/10106368"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alerts.open("Downloading...").subscribe()}delete(){this.alerts.open("Deleting...").subscribe()}onSwipe(e){"left"===e.direction&&(this.index=(0,s.tuiClamp)(this.index+1,0,this.length-1)),"right"===e.direction&&(this.index=(0,s.tuiClamp)(this.index-1,0,this.length-1))}}return(e=t).ɵfac=function(t){return new(t||e)(u.rXU(r.TuiPreviewDialogService),u.rXU(l.TuiAlertService))},e.ɵcmp=u.VBU({type:e,selectors:[["tui-preview-example-1"]],viewQuery:function(e,t){if(1&e&&(u.GBs(x,5),u.GBs(y,5)),2&e){let e;u.mGM(e=u.lsd())&&(t.preview=e.first),u.mGM(e=u.lsd())&&(t.contentSample=e.first)}},decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["icon","tuiIconTrash","title","Delete","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconDownload","title","Download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","preview",3,"src",4,"polymorpheusOutlet"],["alt","preview",3,"src"],[1,"content"],["alt","logo","src","https://github.com/taiga-family/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(e,t){1&e&&(u.j41(0,"div",0),u.EFF(1,"With all features"),u.k0s(),u.j41(2,"button",1),u.bIt("click",(function(){return t.show()})),u.EFF(3," Show preview\n"),u.k0s(),u.DNE(4,I,8,5,"ng-template",null,2,u.C5r),u.DNE(6,$,8,0,"ng-template",null,3,u.C5r))},dependencies:[a.OA,v.S,g.o,b.e,f.S,k.a,j.S],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),t})();const F=["preview"];function C(e,t){if(1&e){const e=u.RV6();u.j41(0,"tui-preview",2),u.nrm(1,"iframe",3),u.j41(2,"button",4),u.bIt("click",(function(){const t=u.eBV(e).$implicit;return u.Njj(t.complete())})),u.k0s()()}2&e&&u.Y8G("rotatable",!1)("zoomable",!1)}let G=(()=>{var e;class t{constructor(e){this.previewDialogService=e}show(){this.previewDialogService.open(this.preview||"").subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)(u.rXU(r.TuiPreviewDialogService))},e.ɵcmp=u.VBU({type:e,selectors:[["tui-preview-example-2"]],viewQuery:function(e,t){if(1&e&&u.GBs(F,5),2&e){let e;u.mGM(e=u.lsd())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","","frameborder","0","src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1","title","Youtube",1,"content"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"]],template:function(e,t){1&e&&(u.j41(0,"button",0),u.bIt("click",(function(){return t.show()})),u.EFF(1," Show simple preview\n"),u.k0s(),u.DNE(2,C,3,2,"ng-template",null,1,u.C5r))},dependencies:[v.S,g.o,b.e],styles:[".content[_ngcontent-%COMP%]{width:80%;height:80%}"],changeDetection:0}),t})();var B=i(28449),E=i(86779),D=i(9147),M=i(98595),P=i(33809),N=i(48088),R=i(75544),V=i(29591),Y=i(18335);const X=["preview"];function O(e,t){1&e&&(u.qex(0),u.j41(1,"div",9),u.nrm(2,"tui-svg",10),u.j41(3,"div"),u.EFF(4,"Preview unavailable"),u.k0s()(),u.bVm())}function _(e,t){if(1&e&&u.nrm(0,"img",11),2&e){const e=t.ngIf;u.Y8G("src",e,u.B4B)}}function U(e,t){1&e&&u.nrm(0,"tui-loader",12)}function z(e,t){if(1&e){const e=u.RV6();u.j41(0,"tui-preview",2),u.nI1(1,"async"),u.nI1(2,"async"),u.nI1(3,"async"),u.j41(4,"tui-preview-title"),u.EFF(5),u.nI1(6,"async"),u.k0s(),u.j41(7,"tui-preview-pagination",3),u.bIt("indexChange",(function(t){u.eBV(e);const i=u.XpG();return u.Njj(i.index$$.next(t))})),u.k0s(),u.j41(8,"button",4),u.bIt("click",(function(){u.eBV(e);const t=u.XpG();return u.Njj(t.download())})),u.k0s(),u.j41(9,"button",5),u.bIt("click",(function(){const t=u.eBV(e).$implicit;return u.Njj(t.complete())})),u.k0s(),u.DNE(10,O,5,0,"ng-container",6),u.nI1(11,"async"),u.DNE(12,_,1,1,"img",7),u.nI1(13,"async"),u.DNE(14,U,1,0,"tui-loader",8),u.nI1(15,"async"),u.k0s()}if(2&e){const e=u.XpG();u.Y8G("rotatable",!u.bMT(1,8,e.contentUnavailable$))("zoomable",!u.bMT(2,10,e.contentUnavailable$)&&!u.bMT(3,12,e.loading$)),u.R7$(5),u.JRh(u.bMT(6,14,e.title$)),u.R7$(2),u.Y8G("index",e.index$$.value)("length",e.items.length),u.R7$(3),u.Y8G("ngIf",u.bMT(11,16,e.contentUnavailable$)),u.R7$(2),u.Y8G("ngIf",u.bMT(13,18,e.imageSrc$)),u.R7$(2),u.Y8G("ngIf",u.bMT(15,20,e.loading$))}}let A=(()=>{var e;class t{constructor(e){this.previewDialogService=e,this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new B.t(0),this.item$=this.index$$.pipe((0,E.T)((e=>this.items[e])),(0,D.p)(s.tuiIsPresent)),this.title$=this.item$.pipe((0,E.T)((e=>e.title))),this.contentUnavailable$=this.item$.pipe((0,E.T)((e=>!e.hasPreview))),this.imageSrc$=this.item$.pipe((0,M.n)((e=>e.hasPreview?this.emulateBackendRequest().pipe((0,P.Z)("")):(0,N.of)(null)))),this.loading$=this.imageSrc$.pipe((0,E.T)((e=>""===e)))}show(){this.previewDialogService.open(this.preview||"").subscribe()}download(){console.info("downloading...")}emulateBackendRequest(){return(0,R.O)(1500).pipe((0,E.T)((()=>"https://ng-web-apis.github.io/dist/assets/images/web-api.svg")))}}return(e=t).ɵfac=function(t){return new(t||e)(u.rXU(r.TuiPreviewDialogService))},e.ɵcmp=u.VBU({type:e,selectors:[["tui-preview-example-3"]],viewQuery:function(e,t){if(1&e&&u.GBs(X,5),2&e){let e;u.mGM(e=u.lsd())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"index","length","indexChange"],["icon","tuiIconDownload","title","Download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],[4,"ngIf"],["alt","img source","height","512","width","512",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],[1,"t-container"],["src","tuiIconFileLarge",1,"t-icon"],["alt","img source","height","512","width","512",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(u.j41(0,"button",0),u.bIt("click",(function(){return t.show()})),u.EFF(1," Show preview\n"),u.k0s(),u.DNE(2,z,16,22,"ng-template",null,1,u.C5r))},dependencies:[n.bT,v.S,g.o,b.e,f.S,k.a,V._,Y.j,n.Jj],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],changeDetection:0}),t})();function L(e,t){if(1&e&&(u.j41(0,"p"),u.EFF(1," Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) "),u.k0s(),u.j41(2,"p"),u.EFF(3,"As a document you can provide images, embeds and other arbitrary content."),u.k0s(),u.j41(4,"tui-notification",3),u.EFF(5," The component automatically adjusts to the mobile device "),u.k0s(),u.j41(6,"tui-doc-example",4),u.nrm(7,"tui-preview-example-1"),u.k0s(),u.j41(8,"tui-doc-example",5),u.nrm(9,"tui-preview-example-2"),u.k0s(),u.j41(10,"tui-doc-example",6),u.nrm(11,"tui-preview-example-3"),u.k0s()),2&e){const e=u.XpG();u.R7$(6),u.Y8G("content",e.example1),u.R7$(2),u.Y8G("content",e.example2),u.R7$(2),u.Y8G("content",e.example3)}}function H(e,t){if(1&e&&(u.j41(0,"ol",7)(1,"li"),u.EFF(2," Create a template with tui-preview "),u.nrm(3,"tui-doc-code",8),u.k0s(),u.j41(4,"li"),u.EFF(5," Open the component from the "),u.j41(6,"code"),u.EFF(7,"TuiPreviewDialogService"),u.k0s(),u.EFF(8," as in the example "),u.nrm(9,"tui-doc-code",9),u.k0s()()),2&e){const e=u.XpG();u.R7$(3),u.Y8G("code",e.exampleHtml),u.R7$(6),u.Y8G("code",e.exampleComponent)}}let Q=(()=>{var e;class t{constructor(){this.exampleComponent=i.e(31028).then(i.t.bind(i,31028,17)),this.exampleHtml=i.e(36882).then(i.t.bind(i,36882,17)),this.example1={TypeScript:i.e(12490).then(i.t.bind(i,12490,17)),LESS:i.e(40250).then(i.t.bind(i,40250,17)),HTML:i.e(48718).then(i.t.bind(i,48718,17))},this.example2={TypeScript:i.e(12647).then(i.t.bind(i,12647,17)),LESS:i.e(36919).then(i.t.bind(i,36919,17)),HTML:i.e(39511).then(i.t.bind(i,39511,17))},this.example3={TypeScript:i.e(8412).then(i.t.bind(i,8412,17)),LESS:i.e(84696).then(i.t.bind(i,84696,17)),HTML:i.e(19588).then(i.t.bind(i,19588,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.VBU({type:e,selectors:[["example-preview"]],decls:3,vars:0,consts:[["header","Preview","package","ADDON-PREVIEW"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-4"],["id","default","heading","Full preview",3,"content"],["id","simple","heading","Simple mode",3,"content"],["id","loading","heading","With loading and unavailable image",3,"content"],[1,"b-demo-steps"],["filename","some.component.html",3,"code"],["filename","some.component.ts",3,"code"]],template:function(e,t){1&e&&(u.j41(0,"tui-doc-page",0),u.DNE(1,L,12,3,"ng-template",1),u.DNE(2,H,10,2,"ng-template",2),u.k0s())},dependencies:[p.v,m.t,d.P,h.T,w.o,T,G,A],encapsulation:2,changeDetection:0}),t})(),W=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=u.$C({type:e}),e.ɵinj=u.G2t({imports:[n.MD,a.yJ,l.TuiButtonModule,r.TuiPreviewModule,l.TuiNotificationModule,c.lK,l.TuiSvgModule,l.TuiLoaderModule,s.TuiSwipeModule,o.iI.forChild((0,c.CC)(Q))]}),t})()}}]);