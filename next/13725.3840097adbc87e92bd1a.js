(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[13725],{13725:(e,s,o)=>{o.r(s),o.d(s,{FocusClasses:()=>d,default:()=>d});var t=o(12867),n=o(62463),i=o(43594);const d=t.Extension.create({name:"focus",addOptions:()=>({className:"has-focus",mode:"all"}),addProseMirrorPlugins(){return[new n.Sy({key:new n.H$("focus"),props:{decorations:({doc:e,selection:s})=>{const{isEditable:o,isFocused:t}=this.editor,{anchor:n}=s,d=[];if(!o||!t)return i.EH.create(e,[]);let a=0;"deepest"===this.options.mode&&e.descendants(((e,s)=>{if(!e.isText)return n>=s&&n<=s+e.nodeSize-1&&void(a+=1)}));let c=0;return e.descendants(((e,s)=>!e.isText&&n>=s&&n<=s+e.nodeSize-1&&(c+=1,"deepest"===this.options.mode&&a-c>0||"shallowest"===this.options.mode&&c>1?"deepest"===this.options.mode:void d.push(i.p.node(s,s+e.nodeSize,{class:this.options.className}))))),i.EH.create(e,d)}}})]}})}}]);