(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6822],{6822:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiExpandModule:()=>M});var o=n(4594),a=n(66094),i=n(77113),r=n(85483),s=n(75311),p=n(48266),d=n(35548),c=n(54795),u=n(84439),l=n(1728),m=n(77534),h=n(33701),f=n(55836),g=n(31136),y=n(72187),x=n(34962),b=n(61091),v=n(95413),w=n(29475);function C(e,t){if(1&e&&(d.TgZ(0,"p"),d._uU(1,"Component to show expandable content"),d.qZA(),d.TgZ(2,"tui-doc-example",2),d._UZ(3,"tui-expand-example-1"),d.qZA()),2&e){const e=d.oxw();d.xp6(2),d.Q6J("content",e.example1)}}function T(e,t){1&e&&(d.TgZ(0,"div")(1,"p"),d._uU(2,"Luke's father."),d.qZA(),d.TgZ(3,"p",8),d._uU(4," Also Tyler Durden doesn't actually exist (hover for mode details) "),d.TgZ(5,"span",9),d._uU(6," Fight Club reference (notice how spoiler has "),d.TgZ(7,"code"),d._uU(8,"overflow: visible;"),d.qZA(),d._uU(9," when it's open). "),d.qZA()(),d.TgZ(10,"div"),d._uU(11,' A spoiler is an element of a disseminated summary or description of any piece of fiction that reveals any plot elements which threaten to give away important details. Typically, the details of the conclusion of the plot, including the climax and ending, are especially regarded as spoiler material. It can also be used to refer to any piece of information regarding any part of a given media that a potential consumer would not want to know beforehand. Because enjoyment of fiction depends a great deal upon the suspense of revealing plot details through standard narrative progression, the prior revelation of how things will turn out can "spoil" the enjoyment that some consumers of the narrative would otherwise have experienced. Spoilers can be found in message boards, articles, reviews, commercials, and movie trailers. '),d.qZA()())}function Z(e,t){if(1&e&&d.YNc(0,T,12,0,"div",7),2&e){const e=d.oxw(2);d.Q6J("ngIf",!e.delayed)}}function _(e,t){1&e&&(d._uU(0," Waits for a custom event "),d.TgZ(1,"code"),d._uU(2,"TUI_EXPAND_LOADED"),d.qZA(),d._uU(3," before opening. Content is initialized when opening starts "))}function P(e,t){1&e&&d._uU(0," Open / close state ")}function E(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-doc-demo"),d._uU(1," Darth Vader is (spoilers below): "),d.TgZ(2,"tui-expand",3),d.YNc(3,Z,1,1,"ng-template",4),d.qZA()(),d.TgZ(4,"tui-doc-documentation"),d.YNc(5,_,4,0,"ng-template",5),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.async=t)})),d.YNc(6,P,1,0,"ng-template",6),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.onExpandedChange(t))})),d.qZA()}if(2&e){const e=d.oxw();d.xp6(2),d.Q6J("async",e.async)("expanded",e.expanded),d.xp6(3),d.Q6J("documentationPropertyValue",e.async),d.xp6(1),d.Q6J("documentationPropertyValue",e.expanded)}}function U(e,t){if(1&e&&d._UZ(0,"tui-setup",10),2&e){const e=d.oxw();d.Q6J("import",e.exampleModule)("template",e.exampleHtml)}}let A=(()=>{var e;class t{constructor(){this.cdr=(0,d.f3M)(d.sBO),this.destroyRef=(0,d.f3M)(d.ktI),this.exampleModule=n.e(7916).then(n.t.bind(n,7916,17)),this.exampleHtml=n.e(17383).then(n.t.bind(n,17383,17)),this.example1={TypeScript:n.e(12132).then(n.t.bind(n,12132,17)),HTML:n.e(37863).then(n.t.bind(n,37863,17))},this.expanded=!1,this.async=!1,this.delayed=!1}onExpandedChange(e){this.expanded=e,this.delayed=this.async&&e,this.async&&this.expanded&&(0,u.H)(5e3).pipe((0,c.sL)(this.destroyRef)).subscribe((()=>{const e=new CustomEvent(p.TUI_EXPAND_LOADED,{bubbles:!0});this.delayed=!1,this.cdr.detectChanges(),this.expand?.nativeElement.dispatchEvent(e)}))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["example-expand"]],viewQuery:function(e,t){if(1&e&&d.Gf(p.TuiExpandComponent,5,d.SBq),2&e){let e;d.iGM(e=d.CRH())&&(t.expand=e.first)}},decls:4,vars:0,consts:[["header","Expand","package","CORE","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],[3,"async","expanded"],["tuiExpandContent",""],["documentationPropertyMode","input","documentationPropertyName","async","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","expanded","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[4,"ngIf"],[1,"tooltip"],[1,"bubble"],[3,"import","template"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,C,4,1,"ng-template",1),d.YNc(2,E,7,4,"ng-template",1),d.YNc(3,U,1,2,"ng-template",1),d.qZA())},dependencies:[l.S,m.I,o.O5,h.F,f.z,g.B,y.f,x.q,b.n,v.U,w.TuiExpandExample1],styles:['.tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:3.125rem;bottom:1.875rem;width:15.625rem;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:.25rem;padding:.625rem;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-10px)}'],changeDetection:0}),t})(),M=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[p.TuiExpand,o.ez,a.u5,a.UX,s.az,i.Bz.forChild((0,s.Ve)(A)),r.UY]}),t})()}}]);