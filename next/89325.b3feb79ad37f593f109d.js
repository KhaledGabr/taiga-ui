(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89325],{89325:(o,t,i)=>{i.r(t),i.d(t,{Youtube:()=>l});var e=i(12867);const s=/^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/,n=/^(https?:\/\/)?(www\.|music\.)?(youtube\.com|youtu\.be)(?!.*\/channel\/)(?!\/@)(.+)?$/g,a=o=>o?"https://www.youtube-nocookie.com/embed/":"https://www.youtube.com/embed/",l=e.Node.create({name:"youtube",addOptions:()=>({addPasteHandler:!0,allowFullscreen:!0,autoplay:!1,ccLanguage:void 0,ccLoadPolicy:void 0,controls:!0,disableKBcontrols:!1,enableIFrameApi:!1,endTime:0,height:480,interfaceLanguage:void 0,ivLoadPolicy:0,loop:!1,modestBranding:!1,HTMLAttributes:{},inline:!1,nocookie:!1,origin:"",playlist:"",progressBarColor:void 0,width:640}),inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null},start:{default:0},width:{default:this.options.width},height:{default:this.options.height}}},parseHTML:()=>[{tag:"div[data-youtube-video] iframe"}],addCommands(){return{setYoutubeVideo:o=>({commands:t})=>!!o.src.match(s)&&t.insertContent({type:this.name,attrs:o})}},addPasteRules(){return this.options.addPasteHandler?[(0,e.nodePasteRule)({find:n,type:this.type,getAttributes:o=>({src:o.input})})]:[]},renderHTML({HTMLAttributes:o}){const t=(o=>{const{url:t,allowFullscreen:i,autoplay:e,ccLanguage:s,ccLoadPolicy:n,controls:l,disableKBcontrols:r,enableIFrameApi:p,endTime:u,interfaceLanguage:c,ivLoadPolicy:d,loop:h,modestBranding:g,nocookie:b,origin:y,playlist:m,progressBarColor:L,startAt:w}=o;if(t.includes("/embed/"))return t;if(t.includes("youtu.be")){const o=t.split("/").pop();return o?`${a(b)}${o}`:null}const f=/v=([-\w]+)/gm.exec(t);if(!f||!f[1])return null;let B=`${a(b)}${f[1]}`;const v=[];return!1===i&&v.push("fs=0"),e&&v.push("autoplay=1"),s&&v.push(`cc_lang_pref=${s}`),n&&v.push("cc_load_policy=1"),l||v.push("controls=0"),r&&v.push("disablekb=1"),p&&v.push("enablejsapi=1"),u&&v.push(`end=${u}`),c&&v.push(`hl=${c}`),d&&v.push(`iv_load_policy=${d}`),h&&v.push("loop=1"),g&&v.push("modestbranding=1"),y&&v.push(`origin=${y}`),m&&v.push(`playlist=${m}`),w&&v.push(`start=${w}`),L&&v.push(`color=${L}`),v.length&&(B+=`?${v.join("&")}`),B})({url:o.src,allowFullscreen:this.options.allowFullscreen,autoplay:this.options.autoplay,ccLanguage:this.options.ccLanguage,ccLoadPolicy:this.options.ccLoadPolicy,controls:this.options.controls,disableKBcontrols:this.options.disableKBcontrols,enableIFrameApi:this.options.enableIFrameApi,endTime:this.options.endTime,interfaceLanguage:this.options.interfaceLanguage,ivLoadPolicy:this.options.ivLoadPolicy,loop:this.options.loop,modestBranding:this.options.modestBranding,nocookie:this.options.nocookie,origin:this.options.origin,playlist:this.options.playlist,progressBarColor:this.options.progressBarColor,startAt:o.start||0});return o.src=t,["div",{"data-youtube-video":""},["iframe",(0,e.mergeAttributes)(this.options.HTMLAttributes,{width:this.options.width,height:this.options.height,allowfullscreen:this.options.allowFullscreen,autoplay:this.options.autoplay,ccLanguage:this.options.ccLanguage,ccLoadPolicy:this.options.ccLoadPolicy,disableKBcontrols:this.options.disableKBcontrols,enableIFrameApi:this.options.enableIFrameApi,endTime:this.options.endTime,interfaceLanguage:this.options.interfaceLanguage,ivLoadPolicy:this.options.ivLoadPolicy,loop:this.options.loop,modestBranding:this.options.modestBranding,origin:this.options.origin,playlist:this.options.playlist,progressBarColor:this.options.progressBarColor},o)]]}}).extend({}).configure({autoplay:!1,ccLanguage:"en",interfaceLanguage:"en",allowFullscreen:!0,disableKBcontrols:!0})}}]);