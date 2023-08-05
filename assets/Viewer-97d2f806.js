import{_ as h,h as k,j as f,d as u,a as p,b as w}from"./Interface-eae6071a.js";import{o as i,c as o,a as n,t as b,b as _,d as v,F as P,r as D,e as y,n as j,g as I,f as L,h as S}from"./index-c515de37.js";const z={class:"landing-box"},O={class:"container landing-container"},T=n("h4",null,"Annotating with",-1),C={class:"flex justify-center"},F=n("label",{for:"assetsFieldHandle",class:"block cursor-pointer"},[n("div",null,[v(" Drag & drop, or "),n("span",{class:"underline"},"click here"),v(" to add an annotation file ")])],-1),V={key:0,class:"separator"},N=n("span",null,"or",-1),R=[N],E={key:1,class:"option-buttons"},U=["href"],B=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"See Tutorial",-1),A=[B],H=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"View Example Data",-1),Y=[H],J=["href"],q=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"Customize this Template",-1),G=[q],K=["href"],M=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"View Paper",-1),Q=[M],W={data(){return{filelist:[],config:{}}},props:["consumed_config","set_data","set_config","customize_template_link"],watch:{consumed_config(){this.consume_config()}},methods:{consume_config(){this.consumed_config.hasOwnProperty("consumed_config")?this.config=h.cloneDeep(this.consumed_config.consumed_config):this.consumed_config.hasOwnProperty("config")?this.config=h.cloneDeep(this.consumed_config.config):this.config=h.cloneDeep(this.consumed_config),this.config.template_label&&$("title").text(this.config.template_label)},async handle_drag_drop(t){var s;let e=await k(t);if(this.config.template_name=="serverless"){let a=(s=e.find(r=>r.hasOwnProperty("_thresh_template")))==null?void 0:s._thresh_template;a=f.load(a),this.set_config(a),e=e.filter(r=>!("_thresh_template"in r))}this.set_data(e)},remove(t){this.filelist.splice(t,1)},dragover(t){t.preDefault(),t.currentTarget.classList.contains("bg-green-300")||(t.currentTarget.classList.remove("bg-gray-100"),t.currentTarget.classList.add("bg-green-300"))},dragleave(t){t.currentTarget.classList.add("bg-gray-100"),t.currentTarget.classList.remove("bg-green-300")},async drop(t){t.preDefault(),await handle_drag_drop(t),t.currentTarget.classList.add("bg-gray-100"),t.currentTarget.classList.remove("bg-green-300")},get_example_data(){let t;if(this.customize_template_link.includes("http"))this.config.default_data_link?t=this.config.default_data_link:t="data/demo/start.json";else{let e=this.config.template_name;e=e.replace("demo_","demo/"),t=`data/${e}.json`}u(t).then(e=>{this.set_data(e)})}},created(){this.consume_config()},computed:{template_link(){return`/?t=${this.customize_template_link}`}}},X=Object.assign(W,{__name:"Landing",setup(t){return(e,s)=>(i(),o("main",z,[n("div",O,[T,n("h2",null,b(e.config.template_label),1),n("h3",null,b(e.config.template_description),1),n("div",C,[n("div",{class:"ba b--dashed bw2 file-box",onDragover:s[1]||(s[1]=(...a)=>e.dragover&&e.dragover(...a)),onDragleave:s[2]||(s[2]=(...a)=>e.dragleave&&e.dragleave(...a)),onDrop:s[3]||(s[3]=(...a)=>e.drop&&e.drop(...a))},[n("input",{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",id:"assetsFieldHandle",class:"file-input-field",onChange:s[0]||(s[0]=(...a)=>e.handle_drag_drop&&e.handle_drag_drop(...a)),ref:"file",accept:".json"},null,544),F],32)]),e.config.template_name!="serverless"?(i(),o("div",V,R)):_("",!0),e.config.template_name!="serverless"?(i(),o("div",E,[e.config.tutorial_link?(i(),o("a",{key:0,href:e.config.tutorial_link},A,8,U)):_("",!0),n("a",{onClick:s[4]||(s[4]=(...a)=>e.get_example_data&&e.get_example_data(...a))},Y),t.customize_template_link?(i(),o("a",{key:1,href:e.template_link},G,8,J)):_("",!0),e.config.paper_link?(i(),o("a",{key:2,href:e.config.paper_link,target:"_blank"},Q,8,K)):_("",!0)])):_("",!0)])]))}});const Z={key:0},x={key:0,class:"adjudication-container mh4"},ee={key:1,class:"mt4"},te={key:1},ae={key:2},se=n("div",{class:"spinner-container"},[n("div",{class:"spinner"})],-1),ne=[se],ie={data(){return{data:null,consumed_config:null,set_data:this.set_data,set_config:this.set_config,customize_template_link:null,is_fetching:!0,configInjection:null}},props:["template_path","serverless","injection"],methods:{set_data(t){this.data=t},set_config(t){this.consumed_config=t},highlight_container(t){if(this.consumed_config.highlight_first_interface&&t==1)return"adjudication-container-highlight"},async load_language(t){const s=`lang/${t.language||"en"}.yml`;let a=await w(s).then(r=>f.load(r));return t.interface_text=Object.assign({},a,t.interface_text),t},async load_config(t){let e=f.load(t);e=await this.load_language(e);var a=new URLSearchParams(window.location.search).get("PROLIFIC_PID");a&&(e.crowdsource="prolific"),this.set_config(e)},async load_data(t=null){const e=new URLSearchParams(window.location.search);var s=e.get("d"),a=e.get("PROLIFIC_PID"),r=e.get("STUDY_ID"),m=e.get("SESSION_ID");if(s){let d=s;ghParam?d=`https://raw.githubusercontent.com/${s}`:hfParam&&(d=`https://huggingface.co/datasets/${s.replace("main","resolve/main")}`),await u(d).then(l=>{if(a)for(let c of l)c.metadata||(c.metadata={}),c.metadata.PROLIFIC_PID=a,c.metadata.STUDY_ID=r,c.metadata.SESSION_ID=m;this.consumed_config.adjudication&&(l=Array(this.consumed_config.adjudication).fill(l)),this.set_data(l)})}else if(this.consumed_config.adjudication){let d=Array(this.consumed_config.adjudication).fill(null);for(let l=1;l<this.consumed_config.adjudication+1;l++){var g=e.get(`d${l}`);g&&(d[l-1]={data:await u(g)})}this.set_data(d)}else this.set_data(t)}},created:async function(){let t;const e=new URLSearchParams(window.location.search);var s=e.get("i"),a=e.get("gh"),r=e.get("hf");if(s?(t=s,this.customize_template_link=t):a?(t=`https://raw.githubusercontent.com/${a}`,this.customize_template_link=t):r?(t=`https://huggingface.co/datasets/${r.replace("main","resolve/main")}`,this.customize_template_link=t):(t=`templates/${this.template_path}.yml`,this.customize_template_link=this.template_path),this.serverless&&(t="templates/serverless.yml"),this.injection){window.addEventListener("message",async d=>{await this.load_config(d.data.template);const l=await JSON.parse(d.data.data);await this.load_data(l),this.customize_template_link=null,this.is_fetching=!1});return}const g=await w(t);await this.load_config(g),await this.load_data(),this.is_fetching=!1}},re=Object.assign(ie,{__name:"Viewer",setup(t){return(e,s)=>e.consumed_config!=null&&e.consumed_config!=null&&e.data!=null&&e.data!=null&&e.is_fetching==!1?(i(),o("main",Z,[e.consumed_config.adjudication?(i(),o("div",x,[(i(!0),o(P,null,D(e.consumed_config.adjudication,a=>(i(),L(p,{key:a,class:S(e.highlight_container(a)),highlight:e.consumed_config.highlight_first_interface&&a==1,input_data:e.data[a-1],consumed_config:{consumed_config:e.consumed_config}},null,8,["class","highlight","input_data","consumed_config"]))),128))])):(i(),o("div",ee,[y(p,{input_data:{data:e.data},consumed_config:{consumed_config:e.consumed_config}},null,8,["input_data","consumed_config"])]))])):e.consumed_config!=null&&e.consumed_config!=null&&(e.data==null||e.data==null)&&e.is_fetching==!1?(i(),o("main",te,[y(X,j(I(e.$data)),null,16)])):(i(),o("main",ae,ne))}});export{re as default};
