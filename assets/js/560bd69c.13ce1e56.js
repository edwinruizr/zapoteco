"use strict";(self.webpackChunkzapoteco=self.webpackChunkzapoteco||[]).push([[82],{7563:(e,n,t)=>{t.d(n,{Z:()=>S});var o=t(3366),a=t(7462),r=t(7294);function s(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=s(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}const c=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=s(e))&&(o&&(o+=" "),o+=n);return o};var i=t(9766),l=t(4780),u=t(7621);const m=(0,t(3925).ZP)();var d=t(9214),p=t(9707),h=t(6842),g=t(5408),f=t(8700),v=t(5893);const Z=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,h.Z)(),E=m("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function y(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:b})}function k(e,n){const t=r.Children.toArray(e).filter(Boolean);return t.reduce(((e,o,a)=>(e.push(o),a<t.length-1&&e.push(r.cloneElement(n,{key:`separator-${a}`})),e)),[])}const N=({ownerState:e,theme:n})=>{let t=(0,a.Z)({display:"flex",flexDirection:"column"},(0,g.k9)({theme:n},(0,g.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,f.hB)(n),a=Object.keys(n.breakpoints.values).reduce(((n,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(n[t]=!0),n)),{}),r=(0,g.P$)({values:e.direction,base:a}),s=(0,g.P$)({values:e.spacing,base:a});"object"==typeof r&&Object.keys(r).forEach(((e,n,t)=>{if(!r[e]){const o=n>0?r[t[n-1]]:"column";r[e]=o}}));const c=(n,t)=>{return e.useFlexGap?{gap:(0,f.NA)(o,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${a=t?r[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,f.NA)(o,n)}};var a};t=(0,i.Z)(t,(0,g.k9)({theme:n},s,c))}return t=(0,g.dt)(n.breakpoints,t),t};var z=t(948),x=t(1657);const w=function(e={}){const{createStyledComponent:n=E,useThemeProps:t=y,componentName:s="MuiStack"}=e,i=n(N),m=r.forwardRef((function(e,n){const r=t(e),m=(0,p.Z)(r),{component:d="div",direction:h="column",spacing:g=0,divider:f,children:b,className:E,useFlexGap:y=!1}=m,N=(0,o.Z)(m,Z),z={direction:h,spacing:g,useFlexGap:y},x=(0,l.Z)({root:["root"]},(e=>(0,u.Z)(s,e)),{});return(0,v.jsx)(i,(0,a.Z)({as:d,ownerState:z,ref:n,className:c(x.root,E)},N,{children:f?k(b,f):b}))}));return m}({createStyledComponent:(0,z.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>(0,x.Z)({props:e,name:"MuiStack"})}),S=w},9707:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7462),a=t(3366),r=t(9766),s=t(4920);const c=["sx"],i=e=>{var n,t;const o={systemProps:{},otherProps:{}},a=null!=(n=null==e||null==(t=e.theme)?void 0:t.unstable_sxConfig)?n:s.Z;return Object.keys(e).forEach((n=>{a[n]?o.systemProps[n]=e[n]:o.otherProps[n]=e[n]})),o};function l(e){const{sx:n}=e,t=(0,a.Z)(e,c),{systemProps:s,otherProps:l}=i(t);let u;return u=Array.isArray(n)?[s,...n]:"function"==typeof n?(...e)=>{const t=n(...e);return(0,r.P)(t)?(0,o.Z)({},s,t):s}:(0,o.Z)({},s,n),(0,o.Z)({},l,{sx:u})}},4361:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(7294);const a={audio:"audio_xwsH"};var r=t(9583),s=t(619);function c(e){let{src:n}=e;const[t,c]=(0,o.useState)(!1),[i,{stop:l}]=(0,s.Z)(n,{interrupt:!0,onend:()=>{c(!1)}}),u=()=>{t?(l(),c(!1)):(i(),c(!0))};return t?o.createElement(r.JuG,{className:a.audio,onClick:u}):o.createElement(r.gmG,{className:a.audio,onClick:u})}},9164:(e,n,t)=>{t.d(n,{g:()=>l});var o=t(7294),a=t(619);const r={imageDiv:"imageDiv_D6Zf",featureSvg:"featureSvg_tL_m",audio:"audio_Z0pk"};var s=t(7563),c=t(9583),i=t(6010);const l=e=>{const{title:n,body:t,footer:l,audio:u,img:m,Svg:d,...p}=e,[h,g]=(0,o.useState)(!1),[f,{stop:v}]=(0,a.Z)(u,{interrupt:!0,onend:()=>{g(!1)}}),Z=()=>{h?(v(),g(!1)):(f(),g(!0))};return o.createElement("div",{className:(0,i.Z)("card-demo","margin--md","col",r.customcard)},o.createElement("div",{className:"card shadow--tl"},m&&o.createElement("div",{className:(0,i.Z)("card__image",r.featureSvg)},o.createElement("img",{src:m,alt:n,title:n})),d&&o.createElement("div",{className:(0,i.Z)("card__image",r.imageDiv)},o.createElement(d,{className:(0,i.Z)("card__image",r.featureSvg),role:"img"})),o.createElement("div",{className:"card__body"},o.createElement(s.Z,{direction:"row",spacing:1},o.createElement("h2",null,n),u&&o.createElement("h2",null,h?o.createElement(c.JuG,{className:r.audio,onClick:Z}):o.createElement(c.gmG,{className:r.audio,onClick:Z}))),o.createElement("h5",null,t)),l&&o.createElement("div",{className:"card__footer"},o.createElement("small",null,l))))}},2620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>y,default:()=>S,frontMatter:()=>E,metadata:()=>k,toc:()=>z});var o=t(7462),a=t(7294),r=t(3905),s=t(9164),c=t(629),i=t(7906),l=t(3184),u=t(3816),m=t(3252),d=t(295),p=t(4361),h=t(2882),g=t(5999);const f=e=>{const{nouns:n,...t}=e,[o,r]=(0,a.useState)(""),[c,i]=(0,a.useState)(n.reduce(((e,n,t)=>(e[t/2|0]??=[]).push(n)&&e),[]));return a.createElement("div",{className:"container"},c?.map((e=>a.createElement("div",{className:"row"},e?.map((e=>a.createElement(s.g,{title:e.zapoteco,body:e.noun,audio:e.audio,Svg:e.img})))))))},v=e=>{const{nouns:n,...t}=e;return a.createElement(h.Z,{component:c.Z,className:"item shadow--tl"},a.createElement(i.Z,{sx:{minWidth:100},"aria-label":"simple table"},a.createElement(l.Z,null,a.createElement(u.Z,null,a.createElement(m.Z,{align:"center"},a.createElement(g.Z,{id:"Pronoun"})),a.createElement(m.Z,{align:"center"},"Zapoteco"))),a.createElement(d.Z,null,n.map(((e,n)=>a.createElement(u.Z,{key:n,sx:{"&:last-child td, &:last-child th":{border:0}}},a.createElement(m.Z,{component:"th",scope:"row",align:"center"},e.noun),a.createElement(m.Z,{align:"center"},e.zapoteco," ",e.audio&&a.createElement(p.Z,{src:e.audio}))))))))},Z=[{zapoteco:"nheed",noun:a.createElement(g.Z,{id:"me"})},{zapoteco:"lhee",noun:a.createElement(g.Z,{id:"you"})},{zapoteco:"lheba",noun:a.createElement(g.Z,{id:"he"})},{zapoteco:"lhee'",noun:a.createElement(g.Z,{id:"she"})},{zapoteco:"lhekba'",noun:a.createElement(g.Z,{id:"them (at least one male)"})},{zapoteco:"lheke",noun:a.createElement(g.Z,{id:"them (all female)"})},{zapoteco:"chha'w",noun:a.createElement(g.Z,{id:"us (includes person you are talking to)"})},{zapoteco:"nhetu",noun:a.createElement(g.Z,{id:"us (excluding person you are talking to)"})},{zapoteco:"lhe'e",noun:a.createElement(g.Z,{id:"you all (excluding me)"})}],b=[{zapoteco:"xa'",noun:a.createElement(g.Z,{id:"father"})},{zapoteco:"xna'",noun:a.createElement(g.Z,{id:"mother"})},{zapoteco:"bizan",noun:a.createElement(g.Z,{id:"sibling"})},{zapoteco:"bibilh",noun:a.createElement(g.Z,{id:"sister"})},{zapoteco:"bibisha",noun:a.createElement(g.Z,{id:"brother"})},{zapoteco:"tawa",noun:a.createElement(g.Z,{id:"grandmother"})},{zapoteco:"xtawa",noun:a.createElement(g.Z,{id:"grandfather"})}],E={sidebar_position:3,title:"Nouns",description:"Learn the nouns",keywords:["learn","zapoteco","nouns","pronouns"]},y=void 0,k={unversionedId:"basics/nouns",id:"basics/nouns",title:"Nouns",description:"Learn the nouns",source:"@site/docs/basics/nouns.mdx",sourceDirName:"basics",slug:"/basics/nouns",permalink:"/zapoteco/docs/basics/nouns",draft:!1,editUrl:"https://github.com/edwinruizr/zapoteco/edit/main/docs/basics/nouns.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Nouns",description:"Learn the nouns",keywords:["learn","zapoteco","nouns","pronouns"]},sidebar:"tutorialSidebar",previous:{title:"Numbers",permalink:"/zapoteco/docs/basics/numbers"},next:{title:"Animals",permalink:"/zapoteco/docs/basics/animals"}},N={},z=[{value:"Pronouns",id:"pronouns",level:2},{value:"Nouns",id:"nouns",level:2}],x={toc:z},w="wrapper";function S(e){let{components:n,...t}=e;return(0,r.kt)(w,(0,o.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Nouns and pronouns are fundamental building blocks of language, playing a crucial role in communication and conveying\nmeaning. Nouns represent people, places, objects, or concepts, providing the essential substance of a sentence, while\npronouns like "he," "she," and "it" allow for more efficient and less repetitive communication by replacing specific\nnouns. Together, nouns and pronouns help us express thoughts, convey information, and connect ideas, making them\nindispensable components of language.'),(0,r.kt)("h2",{id:"pronouns"},"Pronouns"),(0,r.kt)(v,{nouns:Z,mdxType:"Pronouns"}),(0,r.kt)("h2",{id:"nouns"},"Nouns"),(0,r.kt)(f,{nouns:b,mdxType:"Nouns"}))}S.isMDXComponent=!0}}]);