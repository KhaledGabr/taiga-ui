(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2879,59091,23384,78971,59029],{96533:(t,e,n)=>{n.d(e,{XQ:()=>i.X,MB:()=>r.M,Ud:()=>c});var i=n(36379),o=n(57473),r=n(99843),a=(n(86699),n(20755));let c=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[o.O,r.M]}),e})();n(93327)},57473:(t,e,n)=>{n.d(e,{O:()=>g});var i=n(8239),o=n(76733),r=n(20755),a=n(72133),c=n(5393),s=n(11830),u=n(86699),l=n(17628);const p=["tuiTextfield",""];function d(t,e){if(1&t&&(r.TgZ(0,"option",2),r._uU(1),r.qZA()),2&t){const t=r.oxw();r.xp6(1),r.hij(" ",t.placeholder,"\n")}}function f(t,e){if(1&t&&(r.TgZ(0,"option",1),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t," ")}}const h=function(t){return[t]};function v(t,e){if(1&t&&r.YNc(0,f,2,1,"option",3),2&t){const t=r.oxw();r.Q6J("ngForOf",r.VKq(1,h,t.value))}}let g=(()=>{var t;class e extends u.b{constructor(){super(...arguments),this.nav=(0,r.f3M)(c.s5),this.control=(0,r.f3M)(a.a5),this.placeholder=""}setValue(t){this.control.control?.setValue(t)}get value(){return this.textfield.stringify(this.control.value)}onCopy(){var t=this;return(0,i.Z)((function*(){yield t.nav.clipboard.writeText(t.el.value)}))()}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=r.n5z(t)))(n||t)}}(),t.ɵcmp=r.Xpm({type:t,selectors:[["select","tuiTextfield",""]],hostVars:1,hostBindings:function(t,e){1&t&&r.NdJ("keydown.space.prevent",(function(){return 0}))("keydown.enter.prevent",(function(){return 0}))("keydown.backspace",(function(){return e.setValue("")}))("pointerdown.prevent",(function(){return e.el.focus()}))("keydown.control.c",(function(){return e.onCopy()}))("keydown.meta.c",(function(){return e.onCopy()})),2&t&&r.Ikx("id",e.el.id||e.id)},inputs:{placeholder:"placeholder"},standalone:!0,features:[r._Bn([(0,s.tuiProvide)(u.b,t)]),r.qOj,r.jDz,r.zW0([s.TuiNativeValidatorDirective,l.TuiAppearanceDirective])],attrs:p,decls:3,vars:2,consts:[["disabled","","selected","","value","",4,"ngIf","ngIfElse"],["selected",""],["disabled","","selected","","value",""],["selected","",4,"ngFor","ngForOf"]],template:function(t,e){if(1&t&&(r.YNc(0,d,2,1,"option",0),r.YNc(1,v,1,3,"ng-template",null,1,r.W1O)),2&t){const t=r.MAs(2);r.Q6J("ngIf",e.placeholder&&!e.value)("ngIfElse",t)}},dependencies:[o.ez,o.sg,o.O5],encapsulation:2,changeDetection:0}),e})()},59091:(t,e,n)=>{n.d(e,{w:()=>v});var i=n(20755),o=n(11830),r=n(17628),a=n(96533),c=n(74500),s=n(5824),u=n(77355),l=n(42463),p=n(96954),d=n(93934),f=n(17085),h=n(76733);let v=(()=>{var t;class e extends r.TuiHintOptionsDirective{constructor(){super(...arguments),this.textfield=(0,i.f3M)(a.MB,{optional:!0}),this.platform=(0,i.f3M)(o.TUI_PLATFORM),this.describeId="",this.tooltipOptions=(0,i.f3M)(c.xz),this.iconAppearance=(0,i.f3M)(r.TuiAppearanceDirective,{optional:!0})}get id(){return this.describeId||this.textfield?.id||""}get computedAppearance(){return this.appearance}get tooltipIcon(){const{icons:t}=this.tooltipOptions;return(0,o.tuiIsString)(t)?t:t[this.platform]}stopOnMobile(t){"web"!==this.platform&&(t.preventDefault(),t.stopPropagation()),this.driver$?.toggle()}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.ɵcmp=i.Xpm({type:t,selectors:[["tui-tooltip"]],viewQuery:function(t,e){if(1&t&&i.Gf(r.TuiHintHoverDirective,5),2&t){let t;i.iGM(t=i.CRH())&&(e.driver$=t.first)}},hostBindings:function(t,e){1&t&&i.NdJ("mousedown",(function(t){return e.stopOnMobile(t)}))},inputs:{content:"content",direction:"direction",appearance:"appearance",showDelay:"showDelay",hideDelay:"hideDelay",describeId:"describeId",context:"context"},features:[i.qOj],decls:3,vars:13,consts:[["automation-id","tui-tooltip__icon","size","xs","tuiIconButton","",1,"t-tooltip-button",3,"appearance","iconLeft","tuiAppearanceState","tuiHint","tuiHintAppearance","tuiHintContext","tuiHintDescribe","tuiHintDirection","tuiHintHideDelay","tuiHintShowDelay"],["driver","tuiHintHover"]],template:function(t,e){if(1&t&&(i._UZ(0,"button",0,1),i.ALo(2,"async")),2&t){const t=i.MAs(1);i.Q6J("appearance",(null==e.iconAppearance?null:e.iconAppearance.tuiAppearance)||"icon")("iconLeft",e.tooltipIcon)("tuiAppearanceState",i.lcZ(2,11,t)?"active":null)("tuiHint",e.content)("tuiHintAppearance",e.computedAppearance)("tuiHintContext",e.context)("tuiHintDescribe",e.id)("tuiHintDirection",e.direction)("tuiHintHideDelay",e.hideDelay)("tuiHintShowDelay",e.showDelay),i.uIk("tabindex",e.id?-1:0)}},dependencies:[s.m,u.D,l.x,p.t,d.$,f.D,h.Ov],styles:['[_nghost-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;font-size:0;line-height:0;pointer-events:auto;border-radius:100%;cursor:pointer}.t-tooltip-button[_ngcontent-%COMP%]{border-radius:inherit;outline-offset:-4px}.t-tooltip-button[_ngcontent-%COMP%]:before{width:1rem;height:1rem}[tuiWrapper][data-appearance="textfield"][data-state="disabled"][_nghost-%COMP%]   .t-tooltip-button[_ngcontent-%COMP%], [tuiWrapper][data-appearance="textfield"][data-state="disabled"]   [_nghost-%COMP%]   .t-tooltip-button[_ngcontent-%COMP%]{opacity:1}'],changeDetection:0}),e})()},74500:(t,e,n)=>{n.d(e,{Rp:()=>a,xz:()=>r});var i=n(11830);const o={icons:"tuiIconHelpCircle"},r=(0,i.tuiCreateToken)(o);function a(t){return(0,i.tuiProvideOptions)(r,t,o)}}}]);