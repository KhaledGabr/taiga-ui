(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"0GdO":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiActionModule",(function(){return w}));var o=n("An66"),i=n("1VvW"),a=n("SVIu"),c=n("dvRg"),r=n("kZht"),l=n("OZlg"),u=n("e0eB"),d=n("iyc4"),m=n("Qq0t"),p=n("RXiM");let s=(()=>{class e{constructor(e){this.alertService=e}onClick(e){this.alertService.open(e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](m.Y))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-action-example-1"]],decls:7,vars:0,consts:[[1,"wrapper"],["icon","tuiIconStarLarge",1,"action",3,"click"],["icon","tuiIconBellLarge",1,"action",3,"click"],["icon","tuiIconFlagLarge",1,"action",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"tui-action",1),r["\u0275\u0275listener"]("click",(function(){return t.onClick("Different")})),r["\u0275\u0275text"](2," And now for something completely different "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"tui-action",2),r["\u0275\u0275listener"]("click",(function(){return t.onClick("Inquisition")})),r["\u0275\u0275text"](4," Nobody expects the Spanish Inquisition! "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"tui-action",3),r["\u0275\u0275listener"]("click",(function(){return t.onClick("Lumberjack")})),r["\u0275\u0275text"](6," I'm a lumberjack and I'm OK "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]())},directives:[p.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}.action[_ngcontent-%COMP%]{flex:1;align-items:center;margin-right:3rem}.action[_ngcontent-%COMP%]:first-child{--tui-action-color:var(--tui-positive);--tui-action-background:var(--tui-success-bg)}.action[_ngcontent-%COMP%]:last-child{margin-right:0;--tui-action-color:var(--tui-negative);--tui-action-background:var(--tui-error-bg)}"],changeDetection:0}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-action-example-2"]],decls:2,vars:0,consts:[["tuiAction","","icon","tuiIconImgLarge","target","_blank","href","http://www.montypython.com/"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"a",0),r["\u0275\u0275text"](1," It's\n"),r["\u0275\u0275elementEnd"]())},directives:[p.a],encapsulation:2,changeDetection:0}),e})();var g=n("EPR0"),h=n("yHor"),y=n("zGJC"),b=n("u8jZ");const C=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],E=["heading",$localize`:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`];var T,_,x;function S(e,t){if(1&e&&(r["\u0275\u0275i18nStart"](0,T),r["\u0275\u0275elementStart"](1,"tui-doc-example",2),r["\u0275\u0275i18nAttributes"](2,C),r["\u0275\u0275element"](3,"tui-action-example-1"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](5,E),r["\u0275\u0275element"](6,"tui-action-example-2"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275i18nEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("content",e.example1),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",e.example2)}}function P(e,t){1&e&&r["\u0275\u0275text"](0," Icon ")}function I(e,t){1&e&&r["\u0275\u0275text"](0," Color of the icon ")}function A(e,t){1&e&&r["\u0275\u0275text"](0," Background of the icon ")}function v(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"tui-doc-demo"),r["\u0275\u0275elementStart"](1,"tui-action",4),r["\u0275\u0275text"](2," It's not pining, it's passed on! This parrot is no more! It has ceased to be! It's expired and gone to meet its maker! This is a late parrot! It's a stiff! Bereft of life, it rests in peace! If you hadn't nailed it to the perch, it would be pushing up the daisies! It's rung down the curtain and joined the choir invisible. This is an ex-parrot! "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"tui-doc-documentation"),r["\u0275\u0275template"](4,P,1,0,"ng-template",5),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().icon=t})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"tui-doc-documentation",6),r["\u0275\u0275template"](6,I,1,0,"ng-template",7),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().color=t})),r["\u0275\u0275template"](7,A,1,0,"ng-template",8),r["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().background=t})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275styleProp"]("--tui-action-color",e.color)("--tui-action-background",e.background),r["\u0275\u0275property"]("icon",e.icon),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("documentationPropertyValue",e.color),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("documentationPropertyValue",e.background)}}function k(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",9),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,_),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18n"](8,x),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](9,"tui-doc-code",11),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",e.exampleModule),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("code",e.exampleHtml)}}T=$localize`:␟28cf6d75c9991c2b1545e5487793a5fa6cf2196a␟7182166676993136792: Component that shows some action. Better to use it in a group. ${"\ufffd#1\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_ACTION_EXAMPLE_1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_1:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#6\ufffd"}:START_TAG_TUI_ACTION_EXAMPLE_2:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_ACTION_EXAMPLE_2:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,T=r["\u0275\u0275i18nPostprocess"](T),_=$localize`:␟800f354acb66a0b893f6e4fefe8e0c3b5e0c0654␟4753441770732122760: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiActionModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,x=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let L=(()=>{class e{constructor(){this.exampleModule=n.e(402).then(n.bind(null,"aRUt")),this.exampleHtml=n.e(403).then(n.bind(null,"3w8V")),this.example1={TypeScript:n.e(399).then(n.bind(null,"OdUL")),HTML:n.e(397).then(n.bind(null,"8EfZ")),LESS:n.e(398).then(n.bind(null,"PnZG"))},this.example2={TypeScript:n.e(401).then(n.bind(null,"E5hm")),HTML:n.e(400).then(n.bind(null,"O1U8"))},this.iconVariants=["tuiIconPrintLarge","tuiIconLoginLarge","tuiIconCalendarLarge"],this.icon=this.iconVariants[0],this.color="var(--tui-link)",this.background="var(--tui-base-02)"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["example-action"]],decls:4,vars:0,consts:[["header","Action","package","KIT","type","components"],["pageTab",""],["id","basic",3,"content",6,"heading"],["id","links",3,"content",6,"heading"],[3,"icon"],["documentationPropertyName","icon","documentationPropertyType","string","documentationPropertyMode","input",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS variables"],["documentationPropertyName","--tui-action-color","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","--tui-action-background","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275template"](1,S,7,2,"ng-template",1),r["\u0275\u0275template"](2,v,8,9,"ng-template",1),r["\u0275\u0275template"](3,k,10,2,"ng-template",1),r["\u0275\u0275elementEnd"]())},directives:[l.a,u.a,d.a,s,f,g.a,p.a,h.a,y.a,b.a],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,c.x,a.m,i.f.forChild(Object(a.t)(L))]]}),e})()}}]);