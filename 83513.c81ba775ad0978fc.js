(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83513],{83513:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m,maxFilesLength:()=>d});var i=o(4594),n=o(66094),r=o(80486),c=o(48266),l=o(71164),u=o(51160),s=o(35548);function p(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-file",7),s.NdJ("remove",(function(){const t=s.CHM(e).$implicit,o=s.oxw();return s.KtG(o.onRemove(t))})),s.qZA()}if(2&e){const e=t.$implicit;s.Q6J("file",e)}}function a(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-file",8),s.NdJ("remove",(function(){const t=s.CHM(e).$implicit,o=s.oxw();return s.KtG(o.onRemove(t))})),s.ALo(1,"async"),s.ALo(2,"tuiFileRejected"),s.qZA()}if(2&e){const e=t.$implicit;s.oxw();const o=s.MAs(2);s.Q6J("file",s.lcZ(1,1,s.xi3(2,3,e,o))||e)}}const f=function(){return["maxLength"]},m=(()=>{var e;class t{constructor(){this.control=new n.NI([],[d(5)]),this.accepted$=this.control.valueChanges.pipe((0,u.U)((()=>(0,l.tuiFilesAccepted)(this.control)))),this.rejected=[]}onReject(e){this.rejected=Array.from(new Set(this.rejected.concat(e)))}onRemove(e){this.rejected=this.rejected.filter((t=>t!==e)),this.control.setValue(this.control.value?.filter((t=>t!==e))??[])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent2",features:[s.jDz],decls:10,vars:13,consts:[["tuiInputFiles",""],["accept","image/*","tuiInputFiles","",3,"formControl","multiple","reject"],["validator","tuiInputFilesValidator"],[1,"tui-space_top-1"],[3,"file","remove",4,"ngFor","ngForOf"],["state","error",3,"file","remove",4,"ngFor","ngForOf"],[3,"error","formControl"],[3,"file","remove"],["state","error",3,"file","remove"]],template:function(e,t){1&e&&(s.TgZ(0,"label",0)(1,"input",1,2),s.NdJ("reject",(function(e){return t.onReject(e)})),s.qZA()(),s.TgZ(3,"tui-files",3),s.YNc(4,p,1,1,"tui-file",4),s.ALo(5,"async"),s.YNc(6,a,3,6,"tui-file",5),s.qZA(),s._UZ(7,"tui-error",6),s.ALo(8,"async"),s.ALo(9,"tuiFieldError")),2&e&&(s.xp6(1),s.Q6J("formControl",t.control)("multiple",!0),s.xp6(3),s.Q6J("ngForOf",s.lcZ(5,6,t.accepted$)),s.xp6(2),s.Q6J("ngForOf",t.rejected),s.xp6(1),s.Q6J("error",s.lcZ(8,8,s.lcZ(9,10,s.DdM(12,f))))("formControl",t.control))},dependencies:[l.TuiInputFilesComponent,l.TuiInputFilesDirective,n.UX,n.Fj,n.JJ,n.oH,l.TuiFilesComponent,l.TuiFileComponent,i.sg,i.Ov,c.TuiErrorComponent,l.TuiFieldErrorPipe,l.TuiFileRejectedPipe],encapsulation:2,changeDetection:0}),t})();function d(e){return({value:t})=>t.length>e?{maxLength:new r.TuiValidationError("Error: maximum limit - 5 files for upload")}:null}}}]);