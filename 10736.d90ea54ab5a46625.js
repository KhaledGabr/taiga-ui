(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[10736],{10736:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiTabBarModule:()=>Q});var i=n(88692),o=n(69900),a=n(91795),c=n(64500),r=n(99369),u=n(75526),s=n(498),l=n(64537),d=n(21481),p=n(79121),m=n(81894),g=n(83074),b=n(43560),x=n(93525),f=n(38868),T=n(53712),h=n(37772);function Z(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"button",2),l.NdJ("click",(function(){const t=l.CHM(e).$implicit,n=l.oxw();return l.KtG(n.onClick(t))})),l._uU(1),l.qZA()}if(2&e){const e=t.$implicit;l.Q6J("badge",e.badge)("icon",e.icon),l.xp6(1),l.hij(" ",e.text," ")}}let I=(()=>{var e;class t{constructor(){this.alerts=(0,l.f3M)(u.TuiAlertService),this.activeItemIndex=1,this.items=[{text:"Favorites",icon:"tuiIconHeartLarge",badge:3},{text:"Calls",icon:"tuiIconPhoneLarge",badge:1234},{text:"Profile",icon:"tuiIconUserLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge",badge:100},{text:"More",icon:"tuiIconMoreHorizontalLarge"}]}onClick(e){e.badge=0,this.alerts.open(this.activeItemIndex,{label:e.text}).subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-tab-bar-example-1"]],decls:2,vars:2,consts:[["tuiTabBar","",1,"tabs",3,"activeItemIndex","activeItemIndexChange"],["tuiTabBarItem","",3,"badge","icon","click",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"badge","icon","click"]],template:function(e,t){1&e&&(l.TgZ(0,"nav",0),l.NdJ("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),l.YNc(1,Z,2,3,"button",1),l.qZA()),2&e&&(l.Q6J("activeItemIndex",t.activeItemIndex),l.xp6(1),l.Q6J("ngForOf",t.items))},dependencies:[i.sg,T.M,h.F],styles:[".tabs[_ngcontent-%COMP%]{padding-bottom:env(safe-area-inset-bottom)}"],changeDetection:0}),t})();var v=n(81998);let A=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-tab-bar-example-2"]],decls:11,vars:0,consts:[["tuiTabBar",""],["icon","tuiIconMoreHorizontalLarge","routerLink","/navigation/breadcrumbs","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconCodeLarge","routerLink","/navigation/pagination","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconTerminalLarge","routerLink","/navigation/stepper","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconHrLarge","routerLink","/navigation/tab-bar","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconMenuLarge","routerLink","/navigation/tabs","routerLinkActive","","tuiTabBarItem",""]],template:function(e,t){1&e&&(l.TgZ(0,"nav",0)(1,"a",1),l._uU(2," Breadcrumbs "),l.qZA(),l.TgZ(3,"a",2),l._uU(4," Pagination "),l.qZA(),l.TgZ(5,"a",3),l._uU(6," Stepper "),l.qZA(),l.TgZ(7,"a",4),l._uU(8," TabBar "),l.qZA(),l.TgZ(9,"a",5),l._uU(10," Tabs "),l.qZA()())},dependencies:[T.M,h.F,v.Y,a.rH,a.Od],encapsulation:2,changeDetection:0}),t})();function L(e,t){if(1&e&&(l.TgZ(0,"button",2),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.Q6J("icon",e.icon),l.xp6(1),l.hij(" ",e.text," ")}}let _=(()=>{var e;class t{constructor(){this.items=[{text:"Home",icon:"tuiIconHomeLarge"},{text:"Photos",icon:"tuiIconImageLarge"},{text:"Navigation",icon:"tuiIconMapPinLarge"}]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-tab-bar-example-3"]],decls:2,vars:1,consts:[["tuiTabBar","",1,"tabs"],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(e,t){1&e&&(l.TgZ(0,"nav",0),l.YNc(1,L,2,2,"button",1),l.qZA()),2&e&&(l.xp6(1),l.Q6J("ngForOf",t.items))},dependencies:[i.sg,T.M,h.F],styles:[".tabs[_ngcontent-%COMP%]{color:var(--tui-link);--tui-active-color: var(--tui-accent)}"],changeDetection:0}),t})();var U=n(38023),M=n(51927),k=n(61528),q=n(1995),B=n(27969),J=n(76189);function y(e,t){if(1&e&&(l.TgZ(0,"button",3),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.Q6J("icon",e.icon),l.xp6(1),l.hij(" ",e.text," ")}}let C=(()=>{var e;class t{constructor(){this.load$=new U.x,this.items$=this.load$.pipe((0,M.O)(null),(0,k.w)((()=>(0,q.H)(3e3).pipe((0,B.U)((()=>[{text:"Favorites",icon:"tuiIconHeartLarge"},{text:"Calls",icon:"tuiIconPhoneLarge"},{text:"Profile",icon:"tuiIconUserLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge"}])),(0,M.O)([])))))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-tab-bar-example-4"]],decls:6,vars:3,consts:[["size","m","tuiButton","",3,"click"],["tuiTabBar",""],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(e,t){1&e&&(l.TgZ(0,"p")(1,"button",0),l.NdJ("click",(function(){return t.load$.next()})),l._uU(2," Reload "),l.qZA()(),l.TgZ(3,"nav",1),l.YNc(4,y,2,2,"button",2),l.ALo(5,"async"),l.qZA()),2&e&&(l.xp6(4),l.Q6J("ngForOf",l.lcZ(5,1,t.items$)))},dependencies:[i.sg,J.v,T.M,h.F,i.Ov],encapsulation:2,changeDetection:0}),t})();function w(e,t){1&e&&l._UZ(0,"tui-tab-bar-example-1",9)}function F(e,t){1&e&&l._UZ(0,"tui-tab-bar-example-1",12)}function O(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"p"),l._uU(1,"Component for creating mobile navigation."),l.qZA(),l.TgZ(2,"tui-doc-example",3)(3,"tui-checkbox-labeled",4),l.NdJ("ngModelChange",(function(t){l.CHM(e);const n=l.oxw();return l.KtG(n.fixed=t)})),l._uU(4," Fixed "),l.qZA(),l.YNc(5,w,1,0,"tui-tab-bar-example-1",5),l.YNc(6,F,1,0,"tui-tab-bar-example-1",6),l.qZA(),l.TgZ(7,"tui-doc-example",7)(8,"tui-notification",8),l._uU(9," If you use "),l.TgZ(10,"code"),l._uU(11,"routerLink"),l.qZA(),l._uU(12," you must also add "),l.TgZ(13,"code"),l._uU(14,"routerLinkActive"),l.qZA(),l._uU(15," directive. "),l.qZA(),l._UZ(16,"tui-tab-bar-example-2",9),l.qZA(),l.TgZ(17,"tui-doc-example",10),l._UZ(18,"tui-tab-bar-example-3",9),l.qZA(),l.TgZ(19,"tui-doc-example",11)(20,"tui-notification",8),l._uU(21," When there are no "),l.TgZ(22,"code"),l._uU(23,"TabBarItem"),l.qZA(),l._uU(24," children, the component shows skeleton for 4 items "),l.qZA(),l._UZ(25,"tui-tab-bar-example-4",9),l.qZA()}if(2&e){const e=l.oxw();l.xp6(2),l.Q6J("content",e.example1),l.xp6(1),l.Q6J("ngModel",e.fixed),l.xp6(2),l.Q6J("ngIf",!e.fixed),l.xp6(1),l.Q6J("tuiDropdown",e.fixed),l.xp6(1),l.Q6J("content",e.example2),l.xp6(10),l.Q6J("content",e.example3),l.xp6(2),l.Q6J("content",e.example4)}}function H(e,t){if(1&e&&(l.TgZ(0,"ol",13)(1,"li")(2,"p"),l._uU(3," Import "),l.TgZ(4,"code"),l._uU(5,"TuiTabBarModule"),l.qZA(),l._uU(6," into your main module "),l.qZA(),l._UZ(7,"tui-doc-code",14),l.qZA(),l.TgZ(8,"li")(9,"p"),l._uU(10," Add to the template inside "),l.TgZ(11,"code"),l._uU(12,"Root"),l.qZA(),l._uU(13," component at the required layer and position with CSS: "),l.qZA(),l._UZ(14,"tui-doc-code",15),l.qZA()()),2&e){const e=l.oxw();l.xp6(7),l.Q6J("code",e.exampleModule),l.xp6(7),l.Q6J("code",e.exampleHtml)}}let S=(()=>{var e;class t{constructor(){this.fixed=!1,this.exampleModule=n.e(44170).then(n.t.bind(n,44170,17)),this.exampleHtml=n.e(41133).then(n.t.bind(n,41133,17)),this.example1={TypeScript:n.e(57469).then(n.t.bind(n,57469,17)),HTML:n.e(44819).then(n.t.bind(n,44819,17))},this.example2={TypeScript:n.e(63717).then(n.t.bind(n,63717,17)),HTML:n.e(42944).then(n.t.bind(n,42944,17))},this.example3={TypeScript:n.e(54099).then(n.t.bind(n,54099,17)),HTML:n.e(37887).then(n.t.bind(n,37887,17)),LESS:n.e(81949).then(n.t.bind(n,81949,17))},this.example4={TypeScript:n.e(92925).then(n.t.bind(n,92925,17)),HTML:n.e(2973).then(n.t.bind(n,2973,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["example-tui-tab-bar"]],decls:3,vars:0,consts:[["header","TabBar","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab","Setup"],["id","buttons","heading","Buttons",3,"content"],["size","l",1,"tui-space_bottom-4",3,"ngModel","ngModelChange"],["class","bar",4,"ngIf"],["class","fixed",4,"tuiDropdown"],["id","links","heading","Links",3,"content"],[1,"bar","tui-space_bottom-4"],[1,"bar"],["id","customization","heading","Customization",3,"content"],["id","skeleton","heading","Skeleton",3,"content"],[1,"fixed"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,O,26,7,"ng-template",1),l.YNc(2,H,15,2,"ng-template",2),l.qZA())},dependencies:[i.O5,o.JJ,o.On,d.d,p.L,m.p,g.c,b.q,x.n,f.f,I,A,_,C],styles:[".bar[_ngcontent-%COMP%]{display:block;width:25rem}.fixed[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}"],changeDetection:0}),t})(),Q=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[i.ez,o.u5,u.TuiDropdownModule,u.TuiButtonModule,u.TuiNotificationModule,s.TuiCheckboxLabeledModule,r.TuiTabBarModule,c.fV,a.Bz.forChild((0,c.Ve)(S))]}),t})()}}]);