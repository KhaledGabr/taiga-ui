(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[86848],{86848:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiLetModule:()=>C});var i=n(86568),c=n(82312),a=n(752),o=n(45328),u=n(6528),l=n(13692),s=n(34496),p=n(37288),r=n(83480),d=n(13052),m=n(27400),h=n(45004),y=n(49712);function f(e,t){if(1&e&&(u.SAx(0),u.I0R(1,"p"),u.OEk(2),u.C$Y(),u.I0R(3,"p"),u.OEk(4," It can be used many times: "),u.I0R(5,"tui-badge"),u.OEk(6),u.C$Y()(),u.I0R(7,"p"),u.OEk(8,"It subscribed once and async pipe unsubscribed it after component destroy"),u.C$Y(),u.k70()),2&e){const e=t.tuiLet;u.yG2(2),u.oRS("Timer value: ",e,""),u.yG2(4),u.cNF(e)}}let I=(()=>{var e;class t{constructor(){this.timer$=(0,d.I)(1e3).pipe((0,m.W)(0))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.In1({type:e,selectors:[["tui-let-example-1"]],decls:2,vars:3,consts:[[4,"tuiLet"]],template:function(e,t){1&e&&(u.yuY(0,f,9,2,"ng-container",0),u.wVc(1,"async")),2&e&&u.E7m("tuiLet",u.kDX(1,1,t.timer$))},dependencies:[h.e,y.Y,i.a],encapsulation:2,changeDetection:0}),t})();var k=n(10488);function E(e,t){if(1&e&&(u.I0R(0,"div")(1,"p"),u.OEk(2),u.C$Y(),u.I0R(3,"p"),u.OEk(4," That can be used many times: "),u.I0R(5,"tui-badge"),u.OEk(6),u.C$Y()(),u.I0R(7,"p"),u.OEk(8,"And getter is called only once."),u.C$Y()()),2&e){const e=t.tuiLet;u.yG2(2),u.oRS("Calculated with getter value: ",e,""),u.yG2(4),u.cNF(e)}}let g=(()=>{var e;class t{constructor(e){this.alerts=e}get getter(){return this.alerts.open("Getter called").subscribe(),"🐳"}}return(e=t).ɵfac=function(t){return new(t||e)(u.GI1(k.TuiAlertService))},e.ɵcmp=u.In1({type:e,selectors:[["tui-let-example-2"]],decls:1,vars:1,consts:[[4,"tuiLet"]],template:function(e,t){1&e&&u.yuY(0,E,9,2,"div",0),2&e&&u.E7m("tuiLet",t.getter)},dependencies:[h.e,y.Y],encapsulation:2,changeDetection:0}),t})();function R(e,t){if(1&e&&(u.I0R(0,"p"),u.OEk(1," Directive "),u.I0R(2,"code"),u.OEk(3,"tuiLet"),u.C$Y(),u.OEk(4," allows to reuse computed value in several places in template to avoid recalculations of getters or many async pipes "),u.C$Y(),u.I0R(5,"tui-doc-example",3),u.wR5(6,"tui-let-example-1"),u.C$Y(),u.I0R(7,"tui-doc-example",4),u.wR5(8,"tui-let-example-2"),u.C$Y()),2&e){const e=u.GaO();u.yG2(5),u.E7m("content",e.example1),u.yG2(2),u.E7m("content",e.example2)}}function Y(e,t){if(1&e&&(u.I0R(0,"ol",5)(1,"li")(2,"p"),u.OEk(3," Import "),u.I0R(4,"code"),u.OEk(5,"TuiLetModule"),u.C$Y(),u.OEk(6," into a module where you want to use our component "),u.C$Y(),u.wR5(7,"tui-doc-code",6),u.C$Y(),u.I0R(8,"li")(9,"p"),u.OEk(10,"Add to the template:"),u.C$Y(),u.wR5(11,"tui-doc-code",7),u.C$Y()()),2&e){const e=u.GaO();u.yG2(7),u.E7m("code",e.exampleModule),u.yG2(4),u.E7m("code",e.exampleHtml)}}let b=(()=>{var e;class t{constructor(){this.exampleModule=n.e(69124).then(n.t.bind(n,69124,17)),this.exampleHtml=n.e(87688).then(n.t.bind(n,65308,17)),this.example1={TypeScript:n.e(9320).then(n.t.bind(n,9320,17)),HTML:n.e(64336).then(n.t.bind(n,64336,17))},this.example2={TypeScript:n.e(72144).then(n.t.bind(n,72144,17)),HTML:n.e(73968).then(n.t.bind(n,73968,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.In1({type:e,selectors:[["example-tui-let"]],decls:3,vars:0,consts:[["header","Let","package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],["id","pipe","heading","With Pipe",3,"content"],["id","getter","heading","With getter",3,"content"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(u.I0R(0,"tui-doc-page",0),u.yuY(1,R,9,2,"ng-template",1),u.yuY(2,Y,12,2,"ng-template",2),u.C$Y())},dependencies:[l.u,s.E,p.u,r.I,I,g],encapsulation:2,changeDetection:0}),t})(),C=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=u.a4G({type:e}),e.ɵinj=u.s3X({imports:[i.MD,o.TuiLetModule,a.kx,c.qQ.forChild((0,a._A)(b))]}),t})()}}]);