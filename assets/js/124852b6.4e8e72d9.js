"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[251],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=i.createContext({}),p=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(a),h=n,u=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return a?i.createElement(u,l(l({ref:e},m),{},{components:a})):i.createElement(u,l({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9872:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={},l="\u63a8\u9001\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\u5931\u8d25",o={unversionedId:"GitStudy/GitError/PushError",id:"GitStudy/GitError/PushError",title:"\u63a8\u9001\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\u5931\u8d25",description:"---",source:"@site/docs/GitStudy/GitError/PushError.md",sourceDirName:"GitStudy/GitError",slug:"/GitStudy/GitError/PushError",permalink:"/docs/GitStudy/GitError/PushError",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GitStudy/GitError/PushError.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u4e9b\u52a9\u4e8e\u5b66\u4e60 Git \u7684\u89c6\u9891\u94fe\u63a5\u548c\u535a\u5ba2\u94fe\u63a5",permalink:"/docs/GitStudy/"},next:{title:"\u4ee3\u7801\u6ca1\u5199\u9519\uff0c\u7f16\u8bd1\u540e\u663e\u793a syntax error near",permalink:"/docs/SinglechipStudy/Error/Keil5SyntaxError Near"}},s={},p=[{value:"\u5907\u4efd\u662f\u4e2a\u597d\u4e60\u60ef",id:"\u5907\u4efd\u662f\u4e2a\u597d\u4e60\u60ef",level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"push \u51fa\u9519",id:"push-\u51fa\u9519",level:3},{value:"\u89e3\u51b3\u529e\u6cd5\uff1a",id:"\u89e3\u51b3\u529e\u6cd5",level:3},{value:"1. \u5148\u5c06\u5de5\u4f5c\u533a\u4e2d\u672a\u5b8c\u6210\u7684\u5185\u5bb9\u6dfb\u52a0\u5230\u6682\u5b58\u533a",id:"1-\u5148\u5c06\u5de5\u4f5c\u533a\u4e2d\u672a\u5b8c\u6210\u7684\u5185\u5bb9\u6dfb\u52a0\u5230\u6682\u5b58\u533a",level:4},{value:"2. \u67e5\u770b\u672c\u5730\u5e93\u4e0e\u54ea\u4e9b\u8fdc\u7a0b\u5e93\u6709\u8054\u7cfb",id:"2-\u67e5\u770b\u672c\u5730\u5e93\u4e0e\u54ea\u4e9b\u8fdc\u7a0b\u5e93\u6709\u8054\u7cfb",level:4},{value:"3. \u4fdd\u5b58\u672a\u5b8c\u6210\u7684\u5de5\u4f5c\u8fdb\u5ea6",id:"3-\u4fdd\u5b58\u672a\u5b8c\u6210\u7684\u5de5\u4f5c\u8fdb\u5ea6",level:4},{value:"4. \u628a\u8fdc\u7a0b\u5e93\u4e2d\u7684\u66f4\u65b0\u5408\u5e76\u5230\u672c\u5730\u5e93\u4e2d",id:"4-\u628a\u8fdc\u7a0b\u5e93\u4e2d\u7684\u66f4\u65b0\u5408\u5e76\u5230\u672c\u5730\u5e93\u4e2d",level:4},{value:"5. \u6062\u590d\u4e4b\u524d\u4fdd\u5b58\u7684\u5de5\u4f5c\u8fdb\u5ea6",id:"5-\u6062\u590d\u4e4b\u524d\u4fdd\u5b58\u7684\u5de5\u4f5c\u8fdb\u5ea6",level:4},{value:"6. \u89e3\u51b3\u51b2\u7a81",id:"6-\u89e3\u51b3\u51b2\u7a81",level:4},{value:"7. \u53d6\u6d88\u6682\u5b58",id:"7-\u53d6\u6d88\u6682\u5b58",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u89e3\u51b3\u8fc7\u7a0b\u4e2d\u66fe\u9047\u5230\u8fc7\u7684\u9519\u8bef",id:"\u89e3\u51b3\u8fc7\u7a0b\u4e2d\u66fe\u9047\u5230\u8fc7\u7684\u9519\u8bef",level:3}],m={toc:p},d="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(d,(0,i.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u63a8\u9001\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\u5931\u8d25"},"\u63a8\u9001\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\u5931\u8d25"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u5907\u4efd\u662f\u4e2a\u597d\u4e60\u60ef"},"\u5907\u4efd\u662f\u4e2a\u597d\u4e60\u60ef"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u5efa\u8bae\uff0c\u4e0d\u53ea\u662f\u4e0a\u4f20\u5230 GitHub \u8fdb\u884c\u7248\u672c\u63a7\u5236\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u6700\u597d\u5728\u672c\u5730\u4e5f\u8fdb\u884c\u5907\u4efd"),"\u3002\n",(0,n.kt)("img",{alt:"Alt text",src:a(8353).Z,width:"684",height:"167"}))),(0,n.kt)("hr",null),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u81ea\uff1a"),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/Rainingday/p/12364690.html"},"git push\u9519\u8beffailed to push some refs to\u7684\u89e3\u51b3\u65b9\u6cd5")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://blog.csdn.net/daguanjia11/article/details/73810577"},"\u4f7f\u7528git stash\u547d\u4ee4\u4fdd\u5b58\u548c\u6062\u590d\u8fdb\u5ea6"))),(0,n.kt)("p",{parentName:"blockquote"},"2023\u5e7410\u670826\u65e5")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,n.kt)("h3",{id:"push-\u51fa\u9519"},"push \u51fa\u9519"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u6076\uff0c\u4e4b\u524d\u5728 GitHub \u4e0a\u5728\u7ebf\u4fee\u6539\u4e86 notes \u4ed3\u5e93\u91cc\u7684\u6587\u4ef6\uff0c\u800c\u6211\u5728\u672c\u5730\u53c8\u4fee\u6539\u4e86\u8bb8\u591a\u4ee3\u7801\uff0c\u5bfc\u81f4\u6211\u628a\u672c\u5730\u4ee3\u7801 push \u5230 GitHub \u4e0a\u65f6\u51fa\u9519\u4e86  "),(0,n.kt)("p",{parentName:"blockquote"},"\u9519\u8bef\u4fe1\u606f\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"To https://github.com/Ratherthan17/my-website.git\n ! [rejected]        main -> main (fetch first)\nerror: failed to push some refs to 'https://github.com/Ratherthan17/my-website.git'\nhint: Updates were rejected because the remote contains work that you do not\nhint: have locally. This is usually caused by another repository pushing to\nhint: the same ref. If you want to integrate the remote changes, use\nhint: 'git pull' before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n")),(0,n.kt)("h3",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5\uff1a"),(0,n.kt)("h4",{id:"1-\u5148\u5c06\u5de5\u4f5c\u533a\u4e2d\u672a\u5b8c\u6210\u7684\u5185\u5bb9\u6dfb\u52a0\u5230\u6682\u5b58\u533a"},"1. \u5148\u5c06\u5de5\u4f5c\u533a\u4e2d\u672a\u5b8c\u6210\u7684\u5185\u5bb9\u6dfb\u52a0\u5230\u6682\u5b58\u533a"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"Alt text",src:a(4980).Z,width:"324",height:"256"})),(0,n.kt)("h4",{id:"2-\u67e5\u770b\u672c\u5730\u5e93\u4e0e\u54ea\u4e9b\u8fdc\u7a0b\u5e93\u6709\u8054\u7cfb"},"2. \u67e5\u770b\u672c\u5730\u5e93\u4e0e\u54ea\u4e9b\u8fdc\u7a0b\u5e93\u6709\u8054\u7cfb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u7ec8\u7aef\u91cc\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote -v")," \u67e5\u770b\u672c\u5730\u5e93\u4e0e\u54ea\u4e9b\u8fdc\u7a0b\u5e93\u6709\u8054\u7cfb  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(9397).Z,width:"695",height:"203"})))),(0,n.kt)("h4",{id:"3-\u4fdd\u5b58\u672a\u5b8c\u6210\u7684\u5de5\u4f5c\u8fdb\u5ea6"},"3. \u4fdd\u5b58\u672a\u5b8c\u6210\u7684\u5de5\u4f5c\u8fdb\u5ea6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash save '\u4fe1\u606f'")," \u4fdd\u5b58\u672a\u5b8c\u6210\u7684\u5de5\u4f5c\u8fdb\u5ea6"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(2447).Z,width:"826",height:"207"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(839).Z,width:"438",height:"296"})))),(0,n.kt)("h4",{id:"4-\u628a\u8fdc\u7a0b\u5e93\u4e2d\u7684\u66f4\u65b0\u5408\u5e76\u5230\u672c\u5730\u5e93\u4e2d"},"4. \u628a\u8fdc\u7a0b\u5e93\u4e2d\u7684\u66f4\u65b0\u5408\u5e76\u5230\u672c\u5730\u5e93\u4e2d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"git pull rebase origin branch")," \uff0corigin \u5c31\u662f\u7b2c\u4e8c\u6b65\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote -v")," \u540e\u663e\u793a\u7684\u4e0e\u672c\u5730\u5e93\u6709\u8054\u7cfb\u7684\u8fdc\u7a0b\u5e93\uff0c\u4e0d\u4e00\u5b9a\u662f origin \uff0c\u6211\u8fd9\u91cc\u5c31\u662f my-website ; branch \u4f60\u8981 push \u5230\u54ea\u4e2a\u5206\u652f\u5c31\u8f93\u5165\u54ea\u4e2a\u5206\u652f\uff0c\u6211\u8fd9\u91cc\u662f\u4e3b\u5206\u652f main  "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(9139).Z,width:"831",height:"392"})))),(0,n.kt)("h4",{id:"5-\u6062\u590d\u4e4b\u524d\u4fdd\u5b58\u7684\u5de5\u4f5c\u8fdb\u5ea6"},"5. \u6062\u590d\u4e4b\u524d\u4fdd\u5b58\u7684\u5de5\u4f5c\u8fdb\u5ea6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"git stash pop")," \uff0c\u628a\u4e4b\u524d\u4fdd\u5b58\u7684\u5de5\u4f5c\u8fdb\u5ea6\u6062\u590d"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(2969).Z,width:"694",height:"391"})))),(0,n.kt)("h4",{id:"6-\u89e3\u51b3\u51b2\u7a81"},"6. \u89e3\u51b3\u51b2\u7a81"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb Merge Changes \u91cc\u7684\u6587\u4ef6\uff0c\u5728\u6253\u5f00\u7684\u7a97\u53e3\u91cc\u70b9\u51fb\u6807\u7ea2\u7684\u5730\u65b9\uff0c\u8df3\u8f6c\u5230\u51b2\u7a81\u4f4d\u7f6e"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(3440).Z,width:"322",height:"301"}),"\n",(0,n.kt)("img",{alt:"Alt text",src:a(3373).Z,width:"1121",height:"631"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee5\u6211\u8fd9\u91cc\u7684 Divination \u4e3a\u4f8b\uff0c\u7eff\u8272\u533a\u57df\uff08Current Change\uff09\u662f\u5b83\u5728 GitHub \u4e0a\u7684\u6837\u5b50\uff0c\u84dd\u8272\u533a\u57df\uff08Incoming Change\uff09\u662f\u5b83\u5728\u672c\u5730\u7684\u6837\u5b50\u3002"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(7181).Z,width:"607",height:"356"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8981\u662f\u60f3\u4fdd\u7559\u8fdc\u7a0b\u5e93\u7684\u5185\u5bb9\uff0c\u5c31\u628a\u672c\u5730\u7684\uff08\u84dd\u8272\u533a\u57df\uff09\u5220\u6389\uff0c\u518d\u5220\u53bb <<<<<<< Updated upstream \u3001 ======= \u548c >>>>>>> Stashed changes"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(1361).Z,width:"533",height:"349"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8981\u662f\u60f3\u4fdd\u7559\u672c\u5730\u7684\u5185\u5bb9\uff0c\u5c31\u628a\u8fdc\u7a0b\u5e93\uff08\u7eff\u8272\u533a\u57df\uff09\u5220\u6389\uff0c\u518d\u5220\u53bb <<<<<<< Updated upstream \u3001 ======= \u548c >>>>>>> Stashed changes"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(9755).Z,width:"555",height:"358"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8981\u662f\u8fdc\u7a0b\u548c\u672c\u5730\u7684\u5185\u5bb9\u90fd\u60f3\u4fdd\u7559\uff0c\u5c31\u53ea\u9700\u628a <<<<<<< Updated upsteam \u3001 ======= \u548c >>>>>>> Stashed changes \u5220\u6389\u5c31\u53ef\u4ee5\u4e86"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(7944).Z,width:"512",height:"358"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 VSCode \u63d0\u4f9b\u7684\u6309\u94ae\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u8fdb\u884c\u4fee\u6539"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fdd\u7559\u8fdc\u7a0b\u5e93\u7684\u5185\u5bb9 \u2014\u2014> \u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Accept Current Change")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(2402).Z,width:"538",height:"445"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fdd\u7559\u672c\u5730\u5e93\u7684\u5185\u5bb9 \u2014\u2014> \u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Accept Incoming Change")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(1954).Z,width:"531",height:"443"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fe9\u90fd\u4fdd\u7559 \u2014\u2014> \u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"p"},"Accept Both Changes")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Alt text",src:a(8608).Z,width:"540",height:"451"})))))),(0,n.kt)("h4",{id:"7-\u53d6\u6d88\u6682\u5b58"},"7. \u53d6\u6d88\u6682\u5b58"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e4b\u524d\u7b2c 5 \u6b65\u662f\u6062\u590d\u5de5\u4f5c\u8fdb\u5ea6\uff1b\u7b2c 6 \u6b65\u662f\u89e3\u51b3\u51b2\u7a81\uff1b\u8fd9\u4e00\u6b65\u662f\u628a\u73b0\u5728\u8fd8\u6ca1\u5b8c\u6210\u7684\u3001\u8fd8\u4e0d\u60f3\u63d0\u4ea4\u7684\u5185\u5bb9\u53d6\u6d88 \u6682\u5b58 \uff0c\u53ef\u9009\u3002\n\u73b0\u5728\u5e94\u8be5\u5df2\u7ecf\u53ef\u4ee5 \u63a8\u9001 \u4e86"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:a(6431).Z,width:"319",height:"313"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53e6\u5916\uff0c\u6211\u53d1\u73b0\u6211\u7684 changes \u5c11\u4e86\uff08\u5e94\u8be5\u662f\u6211\u8fd9\u4e2a\u9879\u76ee\u7684\u95ee\u9898\uff0c\u6211\u505a \u201c\u4ece\u6211\u7684 Github \u4e0a clone \u4e0b\u6765\u7684\u7f51\u7ad9\uff0c\u7528 npm start \u51fa\u9519\u201d \u8fd9\u7bc7\u7b14\u8bb0\u7684\u65f6\u5019\u5c31\u6ca1\u5c11\uff09"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"alt text",src:a(4980).Z,width:"324",height:"256"}),"\n",(0,n.kt)("img",{alt:"alt text",src:a(572).Z,width:"309",height:"336"})))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,n.kt)("h3",{id:"\u89e3\u51b3\u8fc7\u7a0b\u4e2d\u66fe\u9047\u5230\u8fc7\u7684\u9519\u8bef"},"\u89e3\u51b3\u8fc7\u7a0b\u4e2d\u66fe\u9047\u5230\u8fc7\u7684\u9519\u8bef"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6211\u770b\u4e86B\u7ad9UP\u4e3b \u7f16\u7a0b\u516b\u70b9\u6863 \u7684 ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("a",{parentName:"em",href:"https://www.bilibili.com/video/BV1E3411c7cb/?spm_id_from=333.999.0.0&vd_source=4f65863adf19c12522e7026402e62e53"},(0,n.kt)("inlineCode",{parentName:"a"},"\u3010\u641e\u7b11Git\u6559\u7a0b\u301115 git pull\u548cgit fetch | \u4e00\u5957\u5e26\u8d70 \u5feb\u901f\u4e0a\u624b \u4fdd\u59c6\u7ea7 | \u6301\u7eed\u66f4\u65b0")))," \u8fd9\u4e00\u671f\u89c6\u9891\uff0c\u5176\u4e2d ",(0,n.kt)("inlineCode",{parentName:"li"},"1\u520641\u79d2")," \u6709\u4e00\u53e5 ",(0,n.kt)("inlineCode",{parentName:"li"},"\uff08up to date\uff09\u8868\u793a\u5f53\u524d\u672c\u5730\u548c\u8fdc\u7a0b\u662f\u540c\u6b65\u72b6\u6001"),"  \uff1b ",(0,n.kt)("inlineCode",{parentName:"li"},"2\u520627\u79d2")," \u6709\u4e00\u53e5 ",(0,n.kt)("inlineCode",{parentName:"li"},"\uff08local out of date\uff09\u672c\u5730\u72b6\u6001\u843d\u540e\u4e8e\u8fdc\u7a0b\u4ed3\u5e93")," \u3002",(0,n.kt)("br",{parentName:"li"}),"\u6211\u60f3\u770b\u770b\u6211\u7684\u662f\u54ea\u4e2a\u72b6\u6001\uff0c\u4e8e\u662f\u5728\u7ec8\u7aef\u91cc\u8f93\u5165\u4e86 ",(0,n.kt)("inlineCode",{parentName:"li"},"git remote show origin"),"\n\u7ed3\u679c\u51fa\u9519\u4e86\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PS C:\\Users\\Administrator\\Desktop\\\u5f20\u96e8\u9f50\\\u8ba1\u7b97\u673a\u5b66\u4e60\\my-website> git remote show origin\nfatal: 'origin' does not appear to be a git repository\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n")),(0,n.kt)("p",null,"\u6211\u53c8\u770b\u4e86\u53e6\u4e00\u4e2aB\u7ad9UP\u4e3b \u6280\u672f\u86cb\u8001\u5e08 \u7684  ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://www.bilibili.com/video/BV1r3411F7kn/?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click&vd_source=4f65863adf19c12522e7026402e62e53"},(0,n.kt)("inlineCode",{parentName:"a"},"Git\u5de5\u4f5c\u6d41\u548c\u6838\u5fc3\u539f\u7406 | GitHub\u57fa\u672c\u64cd\u4f5c | VS Code\u91cc\u4f7f\u7528Git\u548c\u5173\u8054GitHub")))," \u8fd9\u4e00\u671f\u89c6\u9891\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"15\u520615\u79d2")," \u63d0\u5230\u53ef\u4ee5\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote -v")," \u6307\u4ee4\u6765\u770b\u672c\u5730\u4ed3\u5e93\u548c\u54ea\u4e9b\u8fdc\u7a0b\u4ed3\u5e93\u6709\u8054\u7cfb\uff0c",(0,n.kt)("br",{parentName:"p"}),"\n","\u6211\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote -v")," \u540e\uff0c\u7ed3\u679c\u4e3a\uff1a  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PS C:\\Users\\Administrator\\Desktop\\\u5f20\u96e8\u9f50\\\u8ba1\u7b97\u673a\u5b66\u4e60\\my-website> git remote -v\nmy-website      https://github.com/Ratherthan17/my-website.git (fetch)\nmy-website      https://github.com/Ratherthan17/my-website.git (push)\n")),(0,n.kt)("p",null,"\u4ed6\u4eec\u7684\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"origin")," \uff0c\u800c\u6211\u7684\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"my-website")," \uff0c\u96be\u9053\u662f\u56e0\u4e3a\u6211\u5148\u5728\u672c\u5730\u521b\u5efa\uff0c\u7136\u540e\u624d push \u4e0a\u53bb\uff0c\u800c\u4e0d\u662f clone \u4e0b\u6765\u7684\uff1f\uff08Yes\u2014\u2014\u6765\u81ea\u672a\u6765\u7684\u6211\uff0c2024-03-05-14:59\uff09"),(0,n.kt)("p",null,"\u6211\u91cd\u65b0\u8f93\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"git remote show my-website")," \uff0c\u53c8\u9047\u5230\u4e86\u9519\u8bef\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PS C:\\Users\\Administrator\\Desktop\\\u5f20\u96e8\u9f50\\\u8ba1\u7b97\u673a\u5b66\u4e60\\my-website> git remote show my-website  \nfatal: unable to access 'https://github.com/Ratherthan17/my-website.git/': Failed to connect to github.com port 443 after 21238 ms: Couldn't connect to server \n")),(0,n.kt)("p",null,"\u6211\u5728 ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://juejin.cn/post/6844904193170341896"},"GitHub\u65e0\u6cd5\u8bbf\u95ee\u3001443 Operation timed out\u7684\u89e3\u51b3\u529e\u6cd5"))," \u8fd9\u7bc7\u6587\u7ae0\u2014\u2014\u7684\u8bc4\u8bba\u533a\u627e\u5230\u4e86\u89e3\u51b3\u529e\u6cd5"),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{alt:"alt text",src:a(6224).Z,width:"607",height:"388"})),(0,n.kt)("admonition",{title:"\u5907\u6ce8",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u56e0\u8bc4\u8bba\u533a\u90a3\u4f4d\u5927\u4f6c\u63d0\u4f9b\u7684\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u6211\u5c31\u5148\u8bd5\u7684\u4ed6\u7684\uff0c\u6210\u4e86\u540e\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u8fd9\u7bc7\u6587\u7ae0\u7684\u4f5c\u8005\u7684\u529e\u6cd5\u6211\u5c31\u6ca1\u8bd5\uff0c\u6240\u4ee5\u6211\u4e5f\u4e0d\u77e5\u9053\u6709\u6ca1\u6709\u6548\u679c"))),(0,n.kt)("p",null,"\u6210\u529f\u540e\uff0c\u7ed3\u679c\u4e3a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PS C:\\Users\\Administrator\\Desktop\\\u5f20\u96e8\u9f50\\\u8ba1\u7b97\u673a\u5b66\u4e60\\my-website> git remote show my-website\n* remote my-website\n  Fetch URL: https://github.com/Ratherthan17/my-website.git\n  Push  URL: https://github.com/Ratherthan17/my-website.git\n  HEAD branch: main\n  Remote branches:\n    gh-pages new (next fetch will store in remotes/my-website)\n    main     tracked\n  Local branch configured for 'git pull':\n    main merges with remote main\n  Local ref configured for 'git push':\n    main pushes to main (local out of date)\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(local out of date)")," \uff0c\u7684\u786e\u662f\u672c\u5730\u72b6\u6001\u843d\u540e\u4e8e\u8fdc\u7a0b\u4ed3\u5e93\u3002"))}c.isMDXComponent=!0},4980:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/1\u5148add-922e90e9e8161c2d47db5bff89b68228.png"},9397:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/2\u8f93\u5165git-remote--v-7b5236eb3bbedb02615fabc96c4868bd.png"},839:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/3\u8f93\u5165git-stash-save-\u6548\u679c-01be2c696189830a41307dbb5b64e963.png"},2447:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/3\u8f93\u5165git-stash-save-7de6d5b6b2b94f4a654ba3fc7d744bea.png"},9139:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/4\u8f93\u5165git-pull-rebase-origin-branch-1523d812161665906dbf67a708ce7d24.png"},2969:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/5\u8f93\u5165git-stash-pop-f79664d40d6c428062de04caf76dcea7.png"},572:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/6\u4fee\u6539\u5c11\u4e86-ee68efd56690eb4abdfe2973f3a785eb.png"},6431:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/6\u53d6\u6d88add-21ad691ae573710742d7495362f62105.png"},3440:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/6\u89e3\u51b3\u51b2\u7a81-1-688dd83f3886274564cd4358ff36f996.png"},3373:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/6\u89e3\u51b3\u51b2\u7a81-2-\u70b9\u51fb\u6807\u7ea2\u7684\u5730\u65b9-aad38060e1c0b494ff8f45c46b9d2161.png"},7181:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/6\u89e3\u51b3\u51b2\u7a81-3-\u9009\u62e9\u8981\u4fdd\u7559\u7684\u5185\u5bb92-7d7eb2aa4ec84cd0917ddfd0ffb49d92.png"},6224:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/DNS114_20240305152608-7b79cce0e3c8a0de7d29a8250d4252f8.png"},1954:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/\u4f7f\u7528VSCode\u4fdd\u7559\u672c\u5730-1dc7eff68054903f4cc63db767ba05a1.gif"},2402:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/\u4f7f\u7528VSCode\u4fdd\u7559\u8fdc\u7a0b-220020c244d9881f57c585b545b18bed.gif"},8608:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/\u4f7f\u7528VSCode\u4fdd\u7559\u8fdc\u7a0b\u548c\u672c\u5730-7a7d8933bf5758d403ef8e0ece293605.gif"},9755:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/\u4fdd\u7559\u672c\u5730-32d36d01e792a91a6ef43cd48baaa1d9.gif"},1361:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/\u4fdd\u7559\u8fdc\u7a0b-ddfd91e16059b614a6b7f3aa6cae1a7c.gif"},8353:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/\u5907\u4efd\u662f\u4e2a\u597d\u4e60\u60ef-356d3b6597b5df83514274de2e534fa5.png"},7944:(t,e,a)=>{a.d(e,{Z:()=>i});const i=a.p+"assets/images/\u672c\u5730\u548c\u8fdc\u7a0b\u90fd\u4fdd\u7559-755a251267d06f7e5e6566ed03650a5c.gif"}}]);