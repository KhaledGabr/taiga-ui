(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23656],{46681:(t,e,n)=>{n.d(e,{w2:()=>u.w2,kF:()=>u.kF,gw:()=>_.g,Mi:()=>_.M,FY:()=>P.FY,Pc:()=>P.Pc,UJ:()=>S.UJ,eL:()=>S.eL,el:()=>O.e,xR:()=>y.x,cK:()=>l.c,Rn:()=>p,y6:()=>g.y,t1:()=>i.t,s$:()=>c,Gm:()=>f.G,mu:()=>b.m,rF:()=>m.r,Yw:()=>C.Y,gJ:()=>d.g,fi:()=>M,Is:()=>F.I,BX:()=>G,Jx:()=>v.J,OT:()=>w.O,E5:()=>E.E,Qb:()=>x.Q,H4:()=>R.H,IA:()=>T.I,AY:()=>D.A,fm:()=>u.fm,Ot:()=>P.Ot,Wf:()=>S.Wf});var i=n(93069),o=n(46556),r=n(57760),s=n(96112),a=n(39508);let c=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.$C({type:t}),t.ɵinj=a.G2t({imports:[o.MD,r.TuiSvgModule,r.TuiButtonModule,s.TuiTilesModule]}),e})();var u=n(15088),l=n(74092),h=n(86779),d=n(5752);let p=(()=>{var t;class e{set directionOrder(t){this.table.direction="asc"===t?1:-1}constructor(t){this.table=t,this.directionOrderChange=this.table.directionChange.pipe((0,h.T)((t=>1===t?"asc":"desc")))}}return(t=e).ɵfac=function(e){return new(e||t)(a.rXU(d.g))},t.ɵdir=a.FsC({type:t,selectors:[["table","tuiTable","","tuiDirectionOrder",""]],inputs:{directionOrder:"directionOrder"},outputs:{directionOrderChange:"directionOrderChange"}}),e})();var g=n(46334),f=n(12328),b=n(91864),m=n(98222),C=n(8968),T=n(43486),v=n(30373),_=n(14314),O=n(39346),y=n(56841),k=n(79243),I=n(95735);let M=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.$C({type:t}),t.ɵinj=a.G2t({imports:[o.MD,I.yJ,k.TuiMapperPipeModule,r.TuiSvgModule]}),e})();var P=n(78844),w=n(95246),E=n(42976),x=n(49464),R=n(63564),D=n(91992),F=n(76429);let G=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=a.$C({type:t}),t.ɵinj=a.G2t({imports:[o.MD,r.TuiButtonModule,r.TuiLinkModule,r.TuiHostedDropdownModule,r.TuiDataListModule,r.TuiSvgModule,I.yJ]}),e})();var S=n(13040)},93069:(t,e,n)=>{n.d(e,{t:()=>p});var i=n(39508),o=n(95091),r=n(15088),s=n(46556),a=n(29591),c=n(39373),u=n(22264),l=n(60211),h=n(80562);function d(t,e){if(1&t){const t=i.RV6();i.j41(0,"tui-tile",2)(1,"div",3),i.nrm(2,"tui-svg",4),i.EFF(3),i.j41(4,"button",5),i.bIt("click",(function(){const e=i.eBV(t).$implicit,n=i.XpG();return i.Njj(n.toggle(e))}))("keydown.arrowDown.prevent",(function(){const e=i.eBV(t).index,n=i.XpG();return i.Njj(n.move(e,1))}))("keydown.arrowUp.prevent",(function(){const e=i.eBV(t).index,n=i.XpG();return i.Njj(n.move(e,-1))})),i.nI1(5,"async"),i.k0s()()()}if(2&t){const t=e.$implicit,n=e.index,o=i.XpG();i.xc7("order",o.order.get(n)),i.R7$(2),i.Y8G("src",o.options.icons.drag),i.R7$(1),i.SpI(" ",t," "),i.R7$(1),i.AVh("t-button_hidden",!o.isEnabled(t)),i.Y8G("icon",o.getIcon(t))("title",i.bMT(5,8,o.showHideText$))}}let p=(()=>{var t;class e{set items(t){t.length===this.unsortedItems.length&&t.every((t=>this.unsortedItems.includes(t)))||(this.unsortedItems=t)}constructor(t,e){this.options=t,this.showHideText$=e,this.dragging=!1,this.enabled=[],this.itemsChange=new i.bkB,this.enabledChange=new i.bkB,this.order=new Map,this.unsortedItems=[]}noop(){}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(t){return this.enabled.includes(t)}getIcon(t){return this.isEnabled(t)?this.options.icons.hide:this.options.icons.show}toggle(t){this.enabled=this.isEnabled(t)?this.enabled.filter((e=>e!==t)):this.enabled.concat(t),this.updateEnabled()}move(t,e){var n;const i=null!==(n=this.order.get(t))&&void 0!==n?n:t;if(!i&&e<0||i===this.unsortedItems.length-1&&e>0)return;const o=i+e,r=Array.from(this.order.values()).findIndex((t=>t===o));this.order.set(t,o),this.order.set(r,i),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const t=new Array(this.unsortedItems.length);return this.unsortedItems.forEach(((e,n)=>{var i;t[null!==(i=this.order.get(n))&&void 0!==i?i:n]=e})),t}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const t=this.getSortedItems().filter((t=>this.isEnabled(t)));this.enabled=t,this.enabledChange.emit(t)}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(r.kF),i.rXU(o.n))},t.ɵcmp=i.VBU({type:t,selectors:[["tui-reorder"]],hostBindings:function(t,e){1&t&&i.bIt("focusout.stop",(function(){return e.noop()}))("pointerdown.silent",(function(){return e.onDrag()}))("pointerup.silent",(function(){return e.onDrop()}),!1,i.EBC)},inputs:{items:"items",enabled:"enabled"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],["tuiTileHandle","",3,"order",4,"ngFor","ngForOf"],["tuiTileHandle",""],[1,"t-item"],[1,"t-icon",3,"src"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"icon","title","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(t,e){1&t&&(i.j41(0,"tui-tiles",0),i.bIt("orderChange",(function(t){return e.order=t})),i.DNE(1,d,6,10,"tui-tile",1),i.k0s()),2&t&&(i.Y8G("order",e.order),i.R7$(1),i.Y8G("ngForOf",e.unsortedItems))},dependencies:[s.Sq,a._,c.S,u.J,l.e,h.u,s.Jj],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{cursor:ns-resize;grid-auto-rows:2rem}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-base-01)}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%], .t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),e})()},15088:(t,e,n)=>{n.d(e,{fm:()=>s,kF:()=>r,w2:()=>o});var i=n(79243);const o={icons:{hide:"tuiIconEye",show:"tuiIconEyeOff",drag:"tuiIconDrag"}},r=(0,i.tuiCreateToken)(o);function s(t){return(0,i.tuiProvideOptions)(r,t,o)}},76429:(t,e,n)=>{n.d(e,{I:()=>k});var i=n(39508),o=n(95091),r=n(57760),s=n(13040),a=n(46556),c=n(39373),u=n(7641),l=n(7311),h=n(83879),d=n(86647),p=n(29591),g=n(95735);function f(t,e){if(1&t&&(i.qex(0),i.EFF(1),i.j41(2,"strong",6),i.EFF(3),i.k0s(),i.bVm()),2&t){const t=i.XpG().ngIf,e=i.XpG();i.R7$(1),i.SpI(" ",t.pages," "),i.R7$(2),i.JRh(e.pages)}}function b(t,e){if(1&t&&(i.qex(0),i.EFF(1),i.bVm()),2&t){const t=e.polymorpheusOutlet;i.R7$(1),i.SpI(" ",t," ")}}function m(t,e){if(1&t&&i.nrm(0,"tui-svg",13),2&t){const t=i.XpG(4);i.Y8G("src",t.commonIcons.check)}}function C(t,e){1&t&&i.nrm(0,"span",14)}const T=function(t,e){return{$implicit:t,total:e}};function v(t,e){if(1&t){const t=i.RV6();i.qex(0),i.j41(1,"button",9),i.bIt("click",(function(){const e=i.eBV(t).$implicit,n=i.XpG(3);return i.Njj(n.onItem(e))})),i.DNE(2,b,2,1,"ng-container",10),i.DNE(3,m,1,1,"tui-svg",11),i.DNE(4,C,1,0,"ng-template",null,12,i.C5r),i.k0s(),i.bVm()}if(2&t){const t=e.$implicit,n=i.sdS(5),o=i.XpG(3);i.R7$(2),i.Y8G("polymorpheusOutlet",o.options.sizeOptionContent)("polymorpheusOutletContext",i.l_i(4,T,t,o.total)),i.R7$(1),i.Y8G("ngIf",t===o.size)("ngIfElse",n)}}function _(t,e){if(1&t&&(i.j41(0,"tui-data-list",7),i.DNE(1,v,6,7,"ng-container",8),i.k0s()),2&t){const t=i.XpG(2);i.R7$(1),i.Y8G("ngForOf",t.items)}}function O(t,e){if(1&t){const t=i.RV6();i.qex(0),i.j41(1,"button",15),i.bIt("click",(function(){i.eBV(t);const e=i.XpG(2);return i.Njj(e.back())})),i.k0s(),i.j41(2,"button",16),i.bIt("click",(function(){i.eBV(t);const e=i.XpG(2);return i.Njj(e.forth())})),i.k0s(),i.bVm()}if(2&t){const t=e.ngIf,n=i.XpG(2);i.R7$(1),i.Y8G("disabled",n.leftDisabled)("icon",n.icons.decrement)("title",t[0]),i.R7$(1),i.Y8G("disabled",n.rightDisabled)("icon",n.icons.increment)("title",t[1])}}function y(t,e){if(1&t){const t=i.RV6();i.qex(0),i.j41(1,"span",1),i.DNE(2,f,4,2,"ng-container",0),i.k0s(),i.j41(3,"span",2),i.EFF(4),i.j41(5,"tui-hosted-dropdown",3),i.bIt("openChange",(function(e){i.eBV(t);const n=i.XpG();return i.Njj(n.open=e)})),i.j41(6,"button",4)(7,"strong"),i.EFF(8),i.k0s()(),i.DNE(9,_,2,1,"ng-template",null,5,i.C5r),i.k0s(),i.EFF(11),i.j41(12,"strong",6),i.EFF(13),i.k0s()(),i.DNE(14,O,3,6,"ng-container",0),i.nI1(15,"async"),i.bVm()}if(2&t){const t=e.ngIf,n=i.sdS(10),o=i.XpG();i.R7$(2),i.Y8G("ngIf",o.options.showPages),i.R7$(2),i.SpI(" ",t.linesPerPage," "),i.R7$(1),i.Y8G("content",n)("open",o.open),i.R7$(3),i.Lme("",o.start+1,"–",o.end,""),i.R7$(3),i.SpI(" ",t.of," "),i.R7$(2),i.JRh(o.total),i.R7$(1),i.Y8G("ngIf",i.bMT(15,9,o.spinTexts$))}}let k=(()=>{var t;class e{constructor(t,e,n,o,r){this.icons=t,this.spinTexts$=e,this.texts$=n,this.options=o,this.commonIcons=r,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new i.bkB,this.sizeChange=new i.bkB,this.paginationChange=new i.bkB,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(t){const{start:e}=this;this.size=t,this.sizeChange.emit(t),this.open=!1,this.page=Math.floor(e/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(r.TUI_SPIN_ICONS),i.rXU(r.TUI_SPIN_TEXTS),i.rXU(o.U),i.rXU(s.eL),i.rXU(r.TUI_COMMON_ICONS))},t.ɵcmp=i.VBU({type:t,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(t,e){1&t&&(i.DNE(0,y,16,11,"ng-container",0),i.nI1(1,"async")),2&t&&i.Y8G("ngIf",i.bMT(1,1,e.texts$))},dependencies:[a.Sq,a.bT,c.S,u.E,l.o,h.u,d.b,p._,g.OA,a.Jj],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),e})()},13040:(t,e,n)=>{n.d(e,{UJ:()=>o,Wf:()=>s,eL:()=>r});var i=n(79243);const o={sizeOptionContent:function({$implicit:t}){return`${t}`},showPages:!0,items:[10,20,50,100],size:10},r=(0,i.tuiCreateToken)(o);function s(t){return(0,i.tuiProvideOptions)(r,t,o)}},74092:(t,e,n)=>{n.d(e,{c:()=>o});var i=n(39508);let o=(()=>{var t;class e{constructor(t){this.template=t,this.tuiCell=""}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(i.C4Q))},t.ɵdir=i.FsC({type:t,selectors:[["ng-template","tuiCell",""]],inputs:{tuiCell:"tuiCell"}}),e})()},46334:(t,e,n)=>{n.d(e,{y:()=>o});var i=n(39508);let o=(()=>{var t;class e{constructor(t){this.template=t}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(i.C4Q))},t.ɵdir=i.FsC({type:t,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"}}),e})()},12328:(t,e,n)=>{n.d(e,{G:()=>h});var i=n(46556),o=n(39508),r=n(79243),s=n(57760),a=n(98595),c=n(14661),u=n(86779),l=n(25760);let h=(()=>{var t;class e{constructor(t,e,n){this.doc=t,this.el=e,this.parentRef=n,this.tuiResized=(0,r.tuiTypedFromEvent)(this.el.nativeElement,"mousedown").pipe((0,r.tuiPreventDefault)(),(0,a.n)((()=>{const{width:t,right:e}=this.parentRef.nativeElement.getBoundingClientRect();return(0,r.tuiTypedFromEvent)(this.doc,"mousemove").pipe((0,c.F)(),(0,u.T)((({clientX:n})=>t+n-e)),(0,l.Q)((0,r.tuiTypedFromEvent)(this.doc,"mouseup")))})))}}return(t=e).ɵfac=function(e){return new(e||t)(o.rXU(i.qQ),o.rXU(o.aKT),o.rXU(s.TUI_ELEMENT_REF))},t.ɵdir=o.FsC({type:t,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"}}),e})()},91864:(t,e,n)=>{n.d(e,{m:()=>o});var i=n(39508);let o=(()=>{var t;class e{constructor(t){this.template=t,this.tuiRowOf=[]}static ngTemplateContextGuard(t,e){return!0}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(i.C4Q))},t.ɵdir=i.FsC({type:t,selectors:[["ng-template","tuiRow",""]],inputs:{tuiRowOf:"tuiRowOf"}}),e})()},98222:(t,e,n)=>{n.d(e,{r:()=>l});var i=n(79243),o=n(6606),r=n(9147),s=n(86779),a=n(8968),c=n(5752),u=n(39508);let l=(()=>{var t;class e{set sortBy(t){this.tuiSortBy=t,this.checkSortables()}constructor(t){this.table=t,this.sortables=i.EMPTY_QUERY,this.tuiSortByChange=this.table.sorterChange.pipe((0,o.c)(0),(0,r.p)((()=>!!this.sortables.length)),(0,s.T)((t=>this.getKey(t)))),this.tuiSortBy=null}checkSortables(){this.sortables.forEach((t=>t.check()))}getKey(t){var e;return(null===(e=this.sortables.find((e=>e.sorter===t)))||void 0===e?void 0:e.key)||null}}return(t=e).ɵfac=function(e){return new(e||t)(u.rXU(c.g))},t.ɵdir=u.FsC({type:t,selectors:[["table","tuiTable","","tuiSortBy",""]],contentQueries:function(t,e,n){if(1&t&&u.wni(n,a.Y,5),2&t){let t;u.mGM(t=u.lsd())&&(e.sortables=t)}},inputs:{sortBy:["tuiSortBy","sortBy"]},outputs:{tuiSortByChange:"tuiSortByChange"}}),e})()},8968:(t,e,n)=>{n.d(e,{Y:()=>a});var i=n(39508),o=n(49464),r=n(98222),s=n(5752);let a=(()=>{var t;class e{constructor(t,e,n){this.sortBy=t,this.table=e,this.th=n,this.sorter=()=>0}get key(){return this.th.key}ngOnInit(){this.sorter=this.match?this.table.sorter:this.sorter,this.th.sorter=this.sorter}check(){this.match&&this.table.sorter!==this.sorter&&this.table.updateSorter(this.sorter)}get match(){return this.sortBy.tuiSortBy===this.key}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU((0,i.Rfq)((()=>r.r))),i.rXU(s.g),i.rXU(o.Q))},t.ɵdir=i.FsC({type:t,selectors:[["th","tuiTh","","tuiSortable",""]]}),e})()},5752:(t,e,n)=>{n.d(e,{g:()=>l});var i=n(39508),o=n(67939),r=n(79243),s=n(57760),a=n(14314),c=n(56841),u=n(78844);let l=(()=>{var t;class e extends r.AbstractTuiController{constructor(t,e,n,o,r){super(),this.entries$=t,this.mode$=e,this.stuck$=n,this.options=o,this.cdr=r,this.columns=[],this.size=this.options.size,this.direction=this.options.direction,this.directionChange=new i.bkB,this.sorterChange=new i.bkB,this.sorter=()=>0}updateSorterAndDirection(t){this.sorter===t?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(t),this.updateDirection(1))}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(t){this.sorter=t||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(t){this.direction=t,this.directionChange.emit(this.direction),this.change$.next()}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(o.PZ),i.rXU(s.TUI_MODE),i.rXU(a.g),i.rXU(u.Pc),i.rXU(i.gRc))},t.ɵdir=i.FsC({type:t,selectors:[["table","tuiTable",""]],hostAttrs:[2,"border-collapse","separate"],hostVars:1,hostBindings:function(t,e){1&t&&i.bIt("$.data-mode.attr",(function(){return e.mode$}))("$.class._stuck",(function(){return e.stuck$})),2&t&&i.BMQ("data-size",e.size)},inputs:{columns:"columns",size:"size",direction:"direction",sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},features:[i.Jv_(c.x),i.Vt3]}),e})()},43486:(t,e,n)=>{n.d(e,{I:()=>s});var i=n(67939),o=n(14314),r=n(39508);let s=(()=>{var t;class e{constructor(t){this.stuck$=t}}return(t=e).ɵfac=function(e){return new(e||t)(r.rXU(o.g))},t.ɵdir=r.FsC({type:t,selectors:[["thead","tuiThead",""]],hostBindings:function(t,e){1&t&&r.bIt("$.class._stuck",(function(){return e.stuck$}))},features:[r.Jv_([o.M,i.PZ,{provide:i.CY,useValue:"0px 10000px 10000px 10000px"}])]}),e})()},30373:(t,e,n)=>{n.d(e,{J:()=>c});var i,o=n(97270),r=n(79243),s=n(5752),a=n(39508);class c{constructor(t){this.table=t}transform(t){return this.sort(t,this.table.sorter,this.table.direction)}sort(t,e,n){return[...t].sort(((t,i)=>n*e(t,i)))}}(i=c).ɵfac=function(t){return new(t||i)(a.rXU(s.g,16))},i.ɵpipe=a.EJ8({name:"tuiTableSort",type:i,pure:!1}),(0,o.Cg)([r.tuiPure],c.prototype,"sort",null)},14314:(t,e,n)=>{n.d(e,{M:()=>a,g:()=>s});var i=n(39508),o=n(67939),r=n(86779);const s=new i.nKC("[TUI_STUCK]"),a={provide:s,deps:[i.aKT,o.PZ],useFactory:({nativeElement:t},e)=>{const n=e.pipe((0,r.T)((([{intersectionRatio:t}])=>t<1)));return t["$.class._stuck"]=n,n}}},39346:(t,e,n)=>{n.d(e,{e:()=>c});var i=n(39508),o=n(79243),r=n(57760),s=n(5752),a=n(30373);const c=[o.TuiDestroyService,a.J,{provide:s.g,deps:[[new i.kdw,s.g],i.gRc,o.TuiDestroyService],useFactory:r.tuiWatchedControllerFactory}]},56841:(t,e,n)=>{n.d(e,{x:()=>c});var i=n(39508),o=n(67939),r=n(57760),s=n(5752),a=n(14314);const c=[{provide:o.CY,useValue:"10000px 10000px 10000px 0px"},{provide:o.jB,useValue:[0,1]},{provide:r.TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,useFactory:()=>{const t=new r.TuiTextfieldAppearanceDirective;return t.appearance=r.TuiAppearance.Table,t}},{provide:r.TUI_TEXTFIELD_LABEL_OUTSIDE,useValue:{labelOutside:!0}},{provide:r.TUI_TEXTFIELD_SIZE,useExisting:(0,i.Rfq)((()=>s.g))},o.PZ,r.MODE_PROVIDER,a.M]},78844:(t,e,n)=>{n.d(e,{FY:()=>o,Ot:()=>s,Pc:()=>r});var i=n(79243);const o={sticky:!1,resizable:!1,open:!0,size:"m",direction:1,sortIcons:{asc:"tuiIconSortAscending",desc:"tuiIconSortDescending",off:"tuiIconSortOff"}},r=(0,i.tuiCreateToken)(o);function s(t){return(0,i.tuiProvideOptions)(r,t,o)}},95246:(t,e,n)=>{n.d(e,{O:()=>y});var i=n(39508),o=n(79243),r=n(96112),s=n(91864),a=n(5752),c=n(30373),u=n(39346),l=n(78844),h=n(91992),d=n(46556),p=n(95735),g=n(29591),f=n(2040);const b=["tuiTbody",""];function m(t,e){if(1&t&&(i.qex(0),i.EFF(1),i.bVm()),2&t){const t=e.polymorpheusOutlet;i.R7$(1),i.SpI(" ",t," ")}}function C(t,e){if(1&t){const t=i.RV6();i.j41(0,"tr")(1,"th",1)(2,"button",2),i.bIt("click",(function(){i.eBV(t);const e=i.XpG();return i.Njj(e.onClick())})),i.j41(3,"span",3),i.DNE(4,m,2,1,"ng-container",4),i.k0s(),i.nrm(5,"tui-svg",5),i.k0s()()()}if(2&t){const t=i.XpG();i.R7$(1),i.Y8G("colSpan",t.table.columns.length),i.R7$(3),i.Y8G("polymorpheusOutlet",t.heading),i.R7$(1),i.AVh("t-chevron_rotated",t.open),i.Y8G("src",t.arrowOptions.iconLarge)}}function T(t,e){1&t&&(i.qex(0),i.SdG(1),i.bVm())}function v(t,e){if(1&t&&(i.eu8(0,7),i.nI1(1,"tuiMapper")),2&t){const t=e.$implicit,n=e.index,o=i.XpG(2);i.Y8G("ngTemplateOutlet",o.row.template)("ngTemplateOutletContext",i.brH(1,2,t,o.toContext,n))}}function _(t,e){if(1&t&&(i.qex(0),i.DNE(1,v,2,6,"ng-container",6),i.bVm()),2&t){const t=i.XpG();i.R7$(1),i.Y8G("ngForOf",t.sorted)}}const O=["*"];let y=(()=>{var t;class e{constructor(t,e,n,r){this.pipe=t,this.options=e,this.arrowOptions=n,this.table=r,this.data=[],this.open=this.options.open,this.openChange=new i.bkB,this.rows=o.EMPTY_QUERY,this.toContext=(t,e)=>({$implicit:t,index:e})}get sorted(){return this.pipe.transform(this.data)}onClick(){this.open=!this.open,this.openChange.emit(this.open)}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(c.J),i.rXU(l.Pc),i.rXU(r.TUI_ARROW_OPTIONS),i.rXU((0,i.Rfq)((()=>a.g))))},t.ɵcmp=i.VBU({type:t,selectors:[["tbody","tuiTbody",""]],contentQueries:function(t,e,n){if(1&t&&(i.wni(n,s.m,5),i.wni(n,h.A,4)),2&t){let t;i.mGM(t=i.lsd())&&(e.row=t.first),i.mGM(t=i.lsd())&&(e.rows=t)}},inputs:{data:"data",heading:"heading",open:"open"},outputs:{openChange:"openChange"},features:[i.Jv_(u.e)],attrs:b,ngContentSelectors:O,decls:3,vars:3,consts:[[4,"ngIf"],[1,"t-heading",3,"colSpan"],["type","button",1,"t-expand",3,"click"],[1,"t-name"],[4,"polymorpheusOutlet"],[1,"t-chevron",3,"src"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(i.NAR(),i.DNE(0,C,6,5,"tr",0),i.DNE(1,T,2,0,"ng-container",0),i.DNE(2,_,2,1,"ng-container",0)),2&t&&(i.Y8G("ngIf",e.heading),i.R7$(1),i.Y8G("ngIf",e.open),i.R7$(1),i.Y8G("ngIf",e.open&&e.row))},dependencies:[d.Sq,d.bT,d.T3,p.OA,g._,f.u],styles:['[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:700;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:-webkit-sticky;position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:-webkit-sticky;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}'],changeDetection:0}),e})()},42976:(t,e,n)=>{n.d(e,{E:()=>a});var i=n(95829),o=n(39508);const r=["tuiTd",""],s=["*"];let a=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.VBU({type:t,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(t,e,n){if(1&t&&o.wni(n,i.vO,5),2&t){let t;o.mGM(t=o.lsd())&&(e.control=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&o.AVh("_editable",e.control)},attrs:r,ngContentSelectors:s,decls:1,vars:0,template:function(t,e){1&t&&(o.NAR(),o.SdG(0))},styles:['[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),e})()},63564:(t,e,n)=>{n.d(e,{H:()=>C});var i=n(39508),o=n(79243),r=n(33809),s=n(86779),a=n(46334),c=n(5752),u=n(39346),l=n(49464),h=n(46556);const d=["tuiThGroup",""];function p(t,e){if(1&t&&(i.j41(0,"th",5),i.EFF(1),i.k0s()),2&t){const t=i.XpG(2).$implicit;i.R7$(1),i.SpI(" ",t.toString()," ")}}function g(t,e){if(1&t&&i.DNE(0,p,2,1,"th",4),2&t){const t=i.XpG(3);i.Y8G("ngIf",!t.th&&!t.heads.length)}}function f(t,e){if(1&t&&(i.qex(0,2),i.DNE(1,g,1,1,"ng-template",null,3,i.C5r),i.bVm()),2&t){const t=e.$implicit,n=i.sdS(2),o=i.XpG().ngIf;i.Y8G("ngTemplateOutlet",o[t]&&o[t].template||n)}}function b(t,e){if(1&t&&(i.qex(0),i.DNE(1,f,3,1,"ng-container",1),i.bVm()),2&t){const t=i.XpG();i.R7$(1),i.Y8G("ngForOf",t.table.columns)}}const m=["*"];let C=(()=>{var t;class e{constructor(t){this.table=t,this.heads=o.EMPTY_QUERY,this.heads$=null}ngAfterContentInit(){this.heads$=this.heads.changes.pipe((0,r.Z)(null),(0,s.T)((()=>this.heads.reduce(((t,e)=>({...t,[e.tuiHead]:e})),{}))))}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU((0,i.Rfq)((()=>c.g))))},t.ɵcmp=i.VBU({type:t,selectors:[["tr","tuiThGroup",""]],contentQueries:function(t,e,n){if(1&t&&(i.wni(n,l.Q,5),i.wni(n,a.y,4)),2&t){let t;i.mGM(t=i.lsd())&&(e.th=t.first),i.mGM(t=i.lsd())&&(e.heads=t)}},features:[i.Jv_([u.e])],attrs:d,ngContentSelectors:m,decls:3,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTh","",4,"ngIf"],["tuiTh",""]],template:function(t,e){1&t&&(i.NAR(),i.SdG(0),i.DNE(1,b,2,1,"ng-container",0),i.nI1(2,"async")),2&t&&(i.R7$(1),i.Y8G("ngIf",i.bMT(2,1,e.heads$)))},dependencies:[h.Sq,h.bT,h.T3,l.Q,h.Jj],encapsulation:2,changeDetection:0}),e})()},49464:(t,e,n)=>{n.d(e,{Q:()=>m});var i=n(39508),o=n(79243),r=n(57760),s=n(46334),a=n(5752),c=n(78844),u=n(46556),l=n(29591),h=n(12328);const d=["tuiTh",""];function p(t,e){if(1&t){const t=i.RV6();i.j41(0,"button",3),i.bIt("click",(function(){i.eBV(t);const e=i.XpG();return i.Njj(e.updateSorterAndDirection())})),i.eu8(1,4),i.EFF(2),i.nI1(3,"async"),i.nrm(4,"tui-svg",5),i.k0s()}if(2&t){const t=i.XpG(),e=i.sdS(2);i.AVh("t-sort_sorted",t.isCurrent),i.R7$(1),i.Y8G("ngTemplateOutlet",e),i.R7$(1),i.SpI(" ",i.bMT(3,5,t.table.change$)," "),i.R7$(2),i.Y8G("src",t.icon)}}function g(t,e){1&t&&i.SdG(0)}function f(t,e){if(1&t){const t=i.RV6();i.j41(0,"div",6),i.bIt("tuiResized",(function(e){i.eBV(t);const n=i.XpG();return i.Njj(n.onResized(e))})),i.k0s()}}const b=["*"];let m=(()=>{var t;class e{constructor(t,e,n){this.options=t,this.head=e,this.table=n,this.sorter=this.head?(t,e)=>(0,o.tuiDefaultSort)(t[this.key],e[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky,this.width=null}get key(){if(!this.head)throw new o.TuiTableSortKeyException;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){var t;return this.isCurrent?1===(null===(t=this.table)||void 0===t?void 0:t.direction)?this.options.sortIcons.desc:this.options.sortIcons.asc:this.options.sortIcons.off}updateSorterAndDirection(){var t;null===(t=this.table)||void 0===t||t.updateSorterAndDirection(this.isCurrentAndAscDirection?null:this.sorter)}onResized(t){this.width=t}get isCurrentAndAscDirection(){var t,e;return this.sorter===(null===(t=this.table)||void 0===t?void 0:t.sorter)&&-1===(null===(e=this.table)||void 0===e?void 0:e.direction)}}return(t=e).ɵfac=function(e){return new(e||t)(i.rXU(c.Pc),i.rXU(s.y,8),i.rXU((0,i.Rfq)((()=>a.g)),8))},t.ɵcmp=i.VBU({type:t,selectors:[["th","tuiTh",""]],hostVars:4,hostBindings:function(t,e){2&t&&(i.xc7("width",e.width,"px"),i.AVh("_sticky",e.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky"},features:[i.Jv_([{provide:r.TUI_ELEMENT_REF,useExisting:i.aKT}])],attrs:d,ngContentSelectors:b,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-sort-icon",3,"src"],[1,"t-bar",3,"tuiResized"]],template:function(t,e){if(1&t&&(i.NAR(),i.DNE(0,p,5,7,"button",0),i.DNE(1,g,1,0,"ng-template",null,1,i.C5r),i.DNE(3,f,1,0,"div",2)),2&t){const t=i.sdS(2);i.Y8G("ngIf",e.sorter&&e.table)("ngIfElse",t),i.R7$(3),i.Y8G("ngIf",e.resizable)}},dependencies:[u.bT,u.T3,l._,h.G,u.Jj],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:700;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translateZ(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:700;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:-webkit-sticky;position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%], table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:700;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}'],changeDetection:0}),e})()},91992:(t,e,n)=>{n.d(e,{A:()=>v});var i=n(73308),o=n(39508),r=n(79243),s=n(84958),a=n(98595),c=n(86779),u=n(74092),l=n(5752),h=n(39346),d=n(95246),p=n(46556),g=n(42976);const f=["tuiTr",""];function b(t,e){if(1&t&&(o.j41(0,"td",5),o.EFF(1),o.k0s()),2&t){const t=e.ngIf,n=o.XpG(2).$implicit;o.R7$(1),o.SpI(" ",t[n]," ")}}function m(t,e){if(1&t&&(o.DNE(0,b,2,1,"td",4),o.nI1(1,"async")),2&t){const t=o.XpG(3);o.Y8G("ngIf",o.bMT(1,1,t.item$))}}function C(t,e){if(1&t&&(o.qex(0,2),o.DNE(1,m,2,3,"ng-template",null,3,o.C5r),o.bVm()),2&t){const t=e.$implicit,n=o.sdS(2),i=o.XpG().ngIf;o.Y8G("ngTemplateOutlet",i[t]&&i[t].template||n)}}function T(t,e){if(1&t&&(o.qex(0),o.DNE(1,C,3,1,"ng-container",1),o.bVm()),2&t){const t=o.XpG();o.R7$(1),o.Y8G("ngForOf",t.table.columns)}}let v=(()=>{var t;class e{constructor(t,e){this.table=t,this.body=e,this.cells=r.EMPTY_QUERY,this.contentReady$=new s.m(1),this.cells$=this.contentReady$.pipe((0,a.n)((()=>(0,r.tuiQueryListChanges)(this.cells))),(0,c.T)((t=>t.reduce(((t,e)=>({...t,[e.tuiCell]:e})),{})))),this.item$=this.contentReady$.pipe((0,a.n)((()=>(0,r.tuiQueryListChanges)(this.body.rows))),(0,c.T)((t=>this.body.sorted[t.findIndex((t=>t===this))])))}ngAfterContentInit(){var t=this;return(0,i.A)((function*(){yield Promise.resolve(),t.contentReady$.next(!0)}))()}}return(t=e).ɵfac=function(e){return new(e||t)(o.rXU((0,o.Rfq)((()=>l.g))),o.rXU((0,o.Rfq)((()=>d.O))))},t.ɵcmp=o.VBU({type:t,selectors:[["tr","tuiTr",""]],contentQueries:function(t,e,n){if(1&t&&o.wni(n,u.c,4),2&t){let t;o.mGM(t=o.lsd())&&(e.cells=t)}},features:[o.Jv_([h.e])],attrs:f,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTd","",4,"ngIf"],["tuiTd",""]],template:function(t,e){1&t&&(o.DNE(0,T,2,1,"ng-container",0),o.nI1(1,"async")),2&t&&o.Y8G("ngIf",o.bMT(1,1,e.cells$))},dependencies:[p.Sq,p.bT,p.T3,g.E,p.Jj],encapsulation:2,changeDetection:0}),e})()},46804:(t,e,n)=>{n.d(e,{j:()=>i});class i{}},14955:(t,e,n)=>{n.d(e,{p:()=>s});var i=n(79243),o=n(46804),r=n(39508);let s=(()=>{var t;class e extends o.j{constructor(){super(...arguments),this.filter=i.ALWAYS_TRUE_HANDLER}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=r.xGo(t)))(n||t)}}(),t.ɵdir=r.FsC({type:t,selectors:[["","tuiGenericFilter",""]],inputs:{filter:["tuiGenericFilter","filter"]},features:[r.Jv_([{provide:o.j,useExisting:t}]),r.Vt3]}),e})()},32700:(t,e,n)=>{n.d(e,{E:()=>d});var i=n(95829),o=n(46681),r=n(93261),s=n(23253),a=n(28804),c=n(14661),u=n(46804),l=n(15969),h=n(39508);let d=(()=>{var t;class e{constructor(t,e,n,i){this.head=t,this.delegate=e,this.control=n,this.filters=i,this.refresh$=(0,r.v)((()=>{var t;return(0,s.h)(this.control.valueChanges||a.w,(null===(t=this.control.statusChanges)||void 0===t?void 0:t.pipe((0,c.F)()))||a.w)}))}ngOnInit(){this.filters.register(this)}ngOnDestroy(){this.filters.unregister(this)}filter(t){const{disabled:e,value:n}=this.control;return!!e||!this.key||this.delegate.filter(t[this.key],n)}get key(){var t;return this.tuiTableFilter||(null===(t=this.head)||void 0===t?void 0:t.tuiHead)}}return(t=e).ɵfac=function(e){return new(e||t)(h.rXU(o.y6,8),h.rXU(u.j),h.rXU(i.vO),h.rXU(l.l))},t.ɵdir=h.FsC({type:t,selectors:[["","tuiTableFilter",""]],inputs:{tuiTableFilter:"tuiTableFilter"}}),e})()},15969:(t,e,n)=>{n.d(e,{l:()=>l});var i=n(84958),o=n(98595),r=n(82804),s=n(33809),a=n(86779),c=n(23253),u=n(39508);let l=(()=>{var t;class e{constructor(){this.refresh$=new i.m(1),this.filters=[]}register(t){this.filters=this.filters.concat(t),this.update()}unregister(t){this.filters=this.filters.filter((e=>e!==t)),this.update()}filter(t){return this.refresh$.pipe((0,o.n)(r.D),(0,s.Z)(null),(0,a.T)((()=>t.filter((t=>this.check(t))))))}check(t){return this.filters.every((e=>e.filter(t)))}update(){this.refresh$.next((0,c.h)(...this.filters.map((({refresh$:t})=>t))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=u.FsC({type:t,selectors:[["","tuiTableFilters",""]]}),e})()},11814:(t,e,n)=>{n.d(e,{a:()=>r});var i=n(15969),o=n(39508);let r=(()=>{var t;class e{constructor(t){this.filters=t}transform(t){return this.filters.filter(t)}}return(t=e).ɵfac=function(e){return new(e||t)(o.rXU(i.l,16))},t.ɵpipe=o.EJ8({name:"tuiTableFilters",type:t,pure:!0}),e})()},23656:(t,e,n)=>{n.r(e),n.d(e,{AbstractTuiTableFilter:()=>o.j,TUI_REORDER_DEFAULT_OPTIONS:()=>i.w2,TUI_REORDER_OPTIONS:()=>i.kF,TUI_STUCK:()=>i.gw,TUI_STUCK_PROVIDER:()=>i.Mi,TUI_TABLE_DEFAULT_OPTIONS:()=>i.FY,TUI_TABLE_OPTIONS:()=>i.Pc,TUI_TABLE_PAGINATION_DEFAULT_OPTIONS:()=>i.UJ,TUI_TABLE_PAGINATION_OPTIONS:()=>i.eL,TUI_TABLE_PAGINATION_TEXTS:()=>h.U,TUI_TABLE_PROVIDER:()=>i.el,TUI_TABLE_PROVIDERS:()=>i.xR,TUI_TABLE_SHOW_HIDE_MESSAGE:()=>h.n,TuiCellDirective:()=>i.cK,TuiDirectionOrderDirective:()=>i.Rn,TuiGenericFilterDirective:()=>r.p,TuiHeadDirective:()=>i.y6,TuiReorderComponent:()=>i.t1,TuiReorderModule:()=>i.s$,TuiResizedDirective:()=>i.Gm,TuiRowDirective:()=>i.mu,TuiSortByDirective:()=>i.rF,TuiSortableDirective:()=>i.Yw,TuiTableDirective:()=>i.gJ,TuiTableFilterDirective:()=>s.E,TuiTableFiltersDirective:()=>a.l,TuiTableFiltersModule:()=>u,TuiTableFiltersPipe:()=>l.a,TuiTableModule:()=>i.fi,TuiTablePaginationComponent:()=>i.Is,TuiTablePaginationModule:()=>i.BX,TuiTableSortPipe:()=>i.Jx,TuiTbodyComponent:()=>i.OT,TuiTdComponent:()=>i.E5,TuiThComponent:()=>i.Qb,TuiThGroupComponent:()=>i.H4,TuiTheadDirective:()=>i.IA,TuiTrComponent:()=>i.AY,tuiDefaultSort:()=>d,tuiReorderOptionsProvider:()=>i.fm,tuiTableOptionsProvider:()=>i.Ot,tuiTablePaginationOptionsProvider:()=>i.Wf});var i=n(46681),o=n(46804),r=n(14955),s=n(32700),a=n(15969),c=n(39508);let u=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=c.$C({type:t}),t.ɵinj=c.G2t({}),e})();var l=n(11814),h=n(95091);const d=n(79243).tuiDefaultSort},95091:(t,e,n)=>{n.d(e,{U:()=>s,n:()=>r});var i=n(79243),o=n(13651);const r=(0,i.tuiCreateTokenFromFactory)((0,o.Y6)("showHideText")),s=(0,i.tuiCreateTokenFromFactory)((0,o.Y6)("paginationTexts"))}}]);