(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{Raxz:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiMapperModule",(function(){return S}));var a=n("An66"),p=n("1VvW"),l=n("SVIu"),i=n("l4xa"),o=n("kZht"),c=n("OZlg"),r=n("e0eB"),m=n("iyc4"),d=n("M03u");let s=(()=>{class e{constructor(){this.mapper=(e,t)=>`Total: ${e} ${t}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mapper-example1"]],decls:3,vars:5,template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"tuiMapper"),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"]("Transform 10 into ",o["\u0275\u0275pipeBind3"](2,1,10,t.mapper,"\u20bd"),""))},pipes:[d.a],encapsulation:2,changeDetection:0}),e})(),u=(()=>{class e{constructor(){this.numbers=[1,2,3,4,5],this.mapper=(e,t)=>e.map(e=>e*t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-mapper-example2"]],decls:3,vars:6,template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p"),o["\u0275\u0275text"](1),o["\u0275\u0275pipe"](2,"tuiMapper"),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate2"]("Transform ",t.numbers," into ",o["\u0275\u0275pipeBind3"](2,2,t.numbers,t.mapper,3),""))},pipes:[d.a],encapsulation:2,changeDetection:0}),e})();var f=n("u8jZ");const E=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],T=["heading",$localize`:␟10fe4829c652ad18f53ca09cab7eb79044c55fe4␟8594746851560578197:With array`];var _,A,h;function b(e,t){if(1&e&&(o["\u0275\u0275i18nStart"](0,_),o["\u0275\u0275elementStart"](1,"tui-doc-example",3),o["\u0275\u0275i18nAttributes"](2,E),o["\u0275\u0275element"](3,"tui-mapper-example1"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"tui-doc-example",3),o["\u0275\u0275i18nAttributes"](5,T),o["\u0275\u0275element"](6,"tui-mapper-example2"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275i18nEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("content",e.example1),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("content",e.example2)}}function x(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"ol",4),o["\u0275\u0275elementStart"](1,"li"),o["\u0275\u0275elementStart"](2,"p"),o["\u0275\u0275i18nStart"](3,A),o["\u0275\u0275element"](4,"code"),o["\u0275\u0275i18nEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](5,"tui-doc-code",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"li"),o["\u0275\u0275elementStart"](7,"p"),o["\u0275\u0275i18n"](8,h),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](9,"tui-doc-code",6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("code",e.exampleModule),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("code",e.exampleHtml)}}_=$localize`:␟60db275aad6d6fcafa5648c920947a74ad7d2502␟1345914388717321709: Pipe to transform a value with a function ${"\ufffd#1\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_MAPPER_EXAMPLE1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE1:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\ufffd#4\ufffd"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\ufffd#6\ufffd"}:START_TAG_TUI_MAPPER_EXAMPLE2:${"\ufffd/#6\ufffd"}:CLOSE_TAG_TUI_MAPPER_EXAMPLE2:${"[\ufffd/#1\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,_=o["\u0275\u0275i18nPostprocess"](_),A=$localize`:␟09e5f19ff0177e58dfd6fff3ef772381bc2db785␟7049964330523039628: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiMapperPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,h=$localize`:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`;let M=(()=>{class e{constructor(){this.exampleModule=n.e(1713).then(n.bind(null,"rN6L")),this.exampleHtml=n.e(1714).then(n.bind(null,"oref")),this.example1={TypeScript:n.e(1709).then(n.bind(null,"aPhY")),HTML:n.e(1710).then(n.bind(null,"EmVN"))},this.example2={TypeScript:n.e(1711).then(n.bind(null,"IXsl")),HTML:n.e(1712).then(n.bind(null,"4sJJ"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-mapper"]],decls:3,vars:0,consts:[["header","Mapper","package","CDK","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"tui-doc-page",0),o["\u0275\u0275template"](1,b,7,2,"ng-template",1),o["\u0275\u0275template"](2,x,10,2,"ng-template",2),o["\u0275\u0275elementEnd"]())},directives:[c.a,r.a,m.a,s,u,f.a],styles:[".text[_ngcontent-%COMP%]{font-size:1.1875rem}"],changeDetection:0}),e})(),S=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.Gb,a.c,l.m,p.f.forChild(Object(l.t)(M))]]}),e})()}}]);