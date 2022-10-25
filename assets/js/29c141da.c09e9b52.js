"use strict";(self.webpackChunkreact_number_format=self.webpackChunkreact_number_format||[]).push([[63],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),m=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=m(e.components);return o.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||n;return t?o.createElement(g,l(l({ref:a},p),{},{components:t})):o.createElement(g,l({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<n;m++)l[m]=t[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6261:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var o=t(7462),r=t(3366),n=(t(7294),t(3905)),l=["components"],i={title:"Numeric Format",sidebar_position:3},s="Props",m={unversionedId:"numeric_format",id:"numeric_format",title:"Numeric Format",description:"allowLeadingZeros boolean",source:"@site/docs/numeric_format.md",sourceDirName:".",slug:"/numeric_format",permalink:"/react-number-format/docs/numeric_format",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/numeric_format.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Numeric Format",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/react-number-format/docs/props"},next:{title:"Pattern Format",permalink:"/react-number-format/docs/pattern_format"}},p={},c=[{value:"allowLeadingZeros <code>boolean</code>",id:"allowleadingzeros-boolean",level:3},{value:"allowNegative <code>boolean</code>",id:"allownegative-boolean",level:3},{value:"allowedDecimalSeparators <code>Array&lt;string&gt;</code>",id:"alloweddecimalseparators-arraystring",level:3},{value:"customInput <code>React.Component&lt;any&gt;</code>",id:"custominput-reactcomponentany",level:3},{value:"decimalScale <code>number</code>",id:"decimalscale-number",level:3},{value:"decimalSeparator <code>string</code>",id:"decimalseparator-string",level:3},{value:"prefix <code>string</code>",id:"prefix-string",level:3},{value:"suffix <code>string</code>",id:"suffix-string",level:3},{value:"thousandsGroupStyle <code>string</code>",id:"thousandsgroupstyle-string",level:3},{value:"Common Props",id:"common-props",level:3}],d={toc:c};function u(e){var a=e.components,t=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"props"},"Props"),(0,n.kt)("h3",{id:"allowleadingzeros-boolean"},"allowLeadingZeros ",(0,n.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"false")),(0,n.kt)("p",null,"This allows enabling or disabling leading zeros in the input field. By default, on blur of an input, leading zeros are removed. To allow leading 0s in the input field, set ",(0,n.kt)("inlineCode",{parentName:"p"},"allowLeadingZeros")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),". This does not, however, control trailing zeros."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat value="20020220" allowLeadingZeros thousandSeparator="," />;\n')),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/allowleadingzeros-demo-ji97mv?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"allowLeadingZeros-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"allownegative-boolean"},"allowNegative ",(0,n.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"true")),(0,n.kt)("p",null,"If set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", negative numbers will not be allowed"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value=\"-12\" allowNegative />;\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/allownegative-demo-dx8gdf?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"allowNegative-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"alloweddecimalseparators-arraystring"},"allowedDecimalSeparators ",(0,n.kt)("inlineCode",{parentName:"h3"},"Array<string>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")),(0,n.kt)("p",null,"Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value=\"12\" allowedDecimalSeparators={['%']} />;\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/allownegative-demo-forked-3ufso6?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"allowNegative-demo (forked)",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"custominput-reactcomponentany"},"customInput ",(0,n.kt)("inlineCode",{parentName:"h3"},"React.Component<any>")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"null")),(0,n.kt)("p",null,"This allow supporting custom input components with number format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\nimport { TextField } from '@mui/material';\n\n<NumericFormat value={12323} customInput={TextField} />;\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/custominput-demo-u3wg9m?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"customInput-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"decimalscale-number"},"decimalScale ",(0,n.kt)("inlineCode",{parentName:"h3"},"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")),(0,n.kt)("p",null,"If defined, it limits the number of digits after the decimal point."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={12323.3334} decimalScale={3} />;\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/decimalscale-demo-uc92li?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"decimalScale-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"decimalseparator-string"},"decimalSeparator ",(0,n.kt)("inlineCode",{parentName:"h3"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": '.'"),(0,n.kt)("p",null,"Defines the decimal character."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={12323.3333} decimalSeparator=\",\" />;\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/decimalseparator-demo-tv9ptw?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"decimalSeparator-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"prefix-string"},"prefix ",(0,n.kt)("inlineCode",{parentName:"h3"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),":",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")),(0,n.kt)("p",null,"Adds the prefix character before the input value."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={1234} prefix={'$'} />;\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/prefix-demo-6ibo72?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"prefix-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"suffix-string"},"suffix ",(0,n.kt)("inlineCode",{parentName:"h3"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")),(0,n.kt)("p",null,"Adds the suffix after the input value"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123} suffix={'/ -'} />;\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/suffice-demo-7tlerm?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"suffice-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"thousandsgroupstyle-string"},"thousandsGroupStyle ",(0,n.kt)("inlineCode",{parentName:"h3"},"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"default"),": ",(0,n.kt)("inlineCode",{parentName:"p"},",")),(0,n.kt)("p",null,"Defines the thousand grouping style."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Supported types. thousand style (thousand) : 123,456,789, indian style (lakh) : 12,34,56,789, chinese style (wan) : 1,2345,6789."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat type="text" value={1231231} thousandsGroupStyle="lakh" thousandSeparator="," />;\n')),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Demo"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/thousandsgroupstyle-demo-u3ip59?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"thousandsGroupStyle-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,n.kt)("h3",{id:"common-props"},"Common Props"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/props"},"See Common Props"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Other than this it accepts all the props which can be given to a input or span based on displayType you selected.")))}u.isMDXComponent=!0}}]);