(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97499],{97499:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var r=o(76733),s=o(20755),n=o(72133),c=o(11830),a=o(17628),u=o(97733),i=o(92425),p=o(90096),l=o(52891);const d=(()=>{var e;class t{constructor(){this.format=(0,s.f3M)(a.TUI_NUMBER_FORMAT),this.alerts=(0,s.f3M)(a.TuiAlertService),this.value=12345.67,this.numberProcessor$=this.format.pipe((0,i.U)((e=>t=>t.replace(e.decimalSeparator,".").replaceAll(new RegExp(e.thousandSeparator,"g"),"")))),this.textProcessor=e=>e.toUpperCase()}onCopy(e){this.alerts.open(e.clipboardData?.getData("text/plain")??"").subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],hostBindings:function(e,t){1&e&&s.NdJ("copy",(function(e){return t.onCopy(e)}))},standalone:!0,features:[s.jDz],decls:5,vars:5,consts:[[1,"tui-space_bottom-2",3,"tuiCopyProcessor","ngModel","ngModelChange"],[3,"tuiCopyProcessor"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-input-number",0),s.NdJ("ngModelChange",(function(e){return t.value=e})),s.ALo(1,"async"),s._uU(2," Copy this\n"),s.qZA(),s.TgZ(3,"div",1),s._uU(4,"Try copy this text"),s.qZA()),2&e&&(s.Q6J("tuiCopyProcessor",s.lcZ(1,3,t.numberProcessor$))("ngModel",t.value),s.xp6(3),s.Q6J("tuiCopyProcessor",t.textProcessor))},dependencies:[u.TuiInputNumberModule,p.q,l.g,c.TuiCopyProcessorDirective,n.u5,n.JJ,n.On,r.Ov],encapsulation:2,changeDetection:0}),t})()}}]);