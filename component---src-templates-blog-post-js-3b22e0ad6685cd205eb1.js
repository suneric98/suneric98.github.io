(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{200:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(203),r=a(208),h=a(201),g=Object(l.a)(h.a).withConfig({displayName:"postTags__TagLink",componentId:"sc-1ij7ow6-0"})(["font-size:14px;color:#ffbf00;text-decoration:none;"]),o=function(e){var t=e.tags;return n.a.createElement(n.a.Fragment,null,t.map(function(e,a){var i=", ";return a+1===t.length&&(i=""),n.a.createElement("span",{key:e},n.a.createElement(g,{to:"tags/"+e},e),i)}))},c=l.a.div.withConfig({displayName:"postwrapper__PostWrapper",componentId:"z7l8y5-0"})(["margin:auto;padding:30px;font-size:14px;@media (max-width:414px){padding:70px 16px 0;}h1{margin:0.25em 0;}.datetime{color:#8e8e8e;}.gatsby-highlight pre{display:block;position:relative;padding:20px 0 0;background:#193549;color:#dcdcdc;border-radius:5px;overflow-y:hidden;}.gatsby-highlight pre:before{display:inline-block;position:absolute;top:15px;left:20px;width:10px;height:10px;background-color:#ff5f56;border-radius:50%;content:'';}.gatsby-highlight pre:after{display:inline-block;position:absolute;top:15px;left:40px;width:10px;height:10px;background-color:#ffbd2e;border-radius:50%;content:'';}.gatsby-highlight pre code:before{display:inline-block;position:absolute;top:15px;left:60px;width:10px;height:10px;background-color:#27c93f;border-radius:50%;content:'';}.gatsby-highlight pre code{background:none;border:none;border-radius:3px;display:inline-block;overflow:inherit;padding:1.58333rem;white-space:inherit;word-wrap:normal;font-family:Inconsolata,monospace;}.gatsby-highlight code{-moz-border-radius:3px;-webkit-border-radius:3px;white-space:pre;white-space:pre-wrap;white-space:pre-line;white-space:-pre-wrap;white-space:-o-pre-wrap;white-space:-moz-pre-wrap;white-space:-hp-pre-wrap;word-wrap:break-word;background:transparent;color:#3b9cff;display:inline;font-family:D2Coding,'D2 coding',monospace,serif;max-width:100%;overflow:auto;padding:0 0.1625rem;}.gatsby-highlight{position:relative;}.gatsby-highlight pre code{color:#dcdcdc;}.gatsby-highlight .copy-button{position:absolute;top:10px;right:10px;padding:4px 8px;line-height:12px;color:#263238;background-color:#dcdcdc;background-image:linear-gradient(#ededed,#dcdcdc);outline:0;border:1px solid #cbcbcb;border-radius:5px;font-size:10px;font-weight:700;cursor:pointer;z-index:3;}.gatsby-highlight .copy-button:hover{background-color:#dcdcdc;background-image:linear-gradient(#dcdcdc,#cbcbcb);border-color:#cbcbcb;}.gatsby-highlight .copy-button:active{background-color:#cbcbcb;background-image:linear-gradient(#cbcbcb,#bababa);border-color:#bababa;}.gatsby-highlight .keyword,.gatsby-highlight .tag,.gatsby-highlight .css .class,.gatsby-highlight .css .id,.gatsby-highlight .lisp .title,.gatsby-highlight .nginx .title,.gatsby-highlight .request,.gatsby-highlight .status,.gatsby-highlight .clojure .attribute{color:#e3ceab;}.gatsby-highlight .django .template_tag,.gatsby-highlight .django .variable,.gatsby-highlight .django .filter .argument{color:#dcdcdc;}.gatsby-highlight .number,.gatsby-highlight .date{color:#8cd0d3;}.gatsby-highlight .dos .envvar,.gatsby-highlight .dos .stream,.gatsby-highlight .variable,.gatsby-highlight .apache .sqbracket{color:#efdcbc;}.gatsby-highlight .dos .flow,.gatsby-highlight .diff .change,.gatsby-highlight .python .exception,.gatsby-highlight .python .built_in,.gatsby-highlight .literal,.gatsby-highlight .tex .special{color:#efefaf;}.gatsby-highlight .diff .chunk,.gatsby-highlight .subst{color:#8f8f8f;}.gatsby-highlight .dos .keyword,.gatsby-highlight .python .decorator,.gatsby-highlight .title,.gatsby-highlight .haskell .type,.gatsby-highlight .diff .header,.gatsby-highlight .ruby .class .parent,.gatsby-highlight .apache .tag,.gatsby-highlight .nginx .built_in,.gatsby-highlight .tex .command,.gatsby-highlight .prompt{color:#efef8f;}.gatsby-highlight .dos .winutils,.gatsby-highlight .ruby .symbol,.gatsby-highlight .ruby .symbol .string,.gatsby-highlight .ruby .string{color:#dca3a3;}.gatsby-highlight .diff .deletion,.gatsby-highlight .string,.gatsby-highlight .tag .value,.gatsby-highlight .preprocessor,.gatsby-highlight .pragma,.gatsby-highlight .built_in,.gatsby-highlight .sql .aggregate,.gatsby-highlight .javadoc,.gatsby-highlight .smalltalk .class,.gatsby-highlight .smalltalk .localvars,.gatsby-highlight .smalltalk .array,.gatsby-highlight .css .rules .value,.gatsby-highlight .attr_selector,.gatsby-highlight .pseudo,.gatsby-highlight .apache .cbracket,.gatsby-highlight .tex .formula,.gatsby-highlight .coffeescript .attribute{color:#cc9393;}.gatsby-highlight .shebang,.gatsby-highlight .diff .addition,.gatsby-highlight .comment,.gatsby-highlight .java .annotation,.gatsby-highlight .template_comment,.gatsby-highlight .pi,.gatsby-highlight .doctype{color:#7f9f7f;}.gatsby-highlight .coffeescript .javascript,.gatsby-highlight .javascript .xml,.gatsby-highlight .tex .formula,.gatsby-highlight .xml .javascript,.gatsby-highlight .xml .vbscript,.gatsby-highlight .xml .css,.gatsby-highlight .xml .cdata{opacity:0.5;}"]);a.d(t,"query",function(){return d});var s=l.a.span.withConfig({displayName:"blog-post__StyledTag",componentId:"sc-8gjuwj-0"})(["font-style:italic;"]),d=(t.default=function(e){var t=e.data.markdownRemark;return n.a.createElement(r.a,null,n.a.createElement(c,null,n.a.createElement("span",{className:"datetime"},t.frontmatter.date),n.a.createElement("h1",null,t.frontmatter.title),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),n.a.createElement("hr",null),n.a.createElement("p",null,n.a.createElement(s,null,"Tags"),": ",n.a.createElement(o,{tags:t.frontmatter.tags}))))},"3867856785")},201:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var i=a(0),n=a.n(i),l=a(66),r=a.n(l);a.d(t,"a",function(){return r.a});a(202),a(9).default.enqueue;var h=n.a.createContext({});function g(e){var t=e.staticQueryData,a=e.data,i=e.query,l=e.render,r=a?a.data:t[i]&&t[i].data;return n.a.createElement(n.a.Fragment,null,r&&l(r),!r&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,i=e.render,l=e.children;return n.a.createElement(h.Consumer,null,function(e){return n.a.createElement(g,{data:t,query:a,render:i||l,staticQueryData:e})})}},202:function(e,t,a){var i;e.exports=(i=a(204))&&i.default||i},204:function(e,t,a){"use strict";a.r(t);a(23);var i=a(0),n=a.n(i),l=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Eric Sun",authorName:""}}}}},206:function(e,t,a){e.exports=a.p+"static/headshot-50deb1fd560428567eb7305322b80bb9.png"},207:function(e,t,a){e.exports=a.p+"static/EricSunResume-00f4523f1c58331d44c4657fdcfeaab1.pdf"},208:function(e,t,a){"use strict";var i=a(205),n=a(0),l=a.n(n),r=a(201),h=a(210),g=a(203),o=a(206),c=a.n(o),s=a(209),d=a.n(s),p=a(211),m=a(207),b=a.n(m),u=g.a.div.withConfig({displayName:"sidebar__Sidebar",componentId:"sc-1nwz453-0"})(["@media (min-width:768px) and (max-width:1024px){width:20%;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){width:20%;}@media (min-width:320px) and (max-width:767px){width:10%;justify-content:flex-start;align-items:center;&::before{content:'';margin:10px;}}display:flex;flex-direction:column;width:30%;background-color:#193549;color:#dcdcdc;justify-content:center;align-items:center;"]),y=g.a.img.withConfig({displayName:"sidebar__Logo",componentId:"sc-1nwz453-1"})(["@media (min-width:768px) and (max-width:1024px){width:80px;height:80px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){width:80px;height:80px;}@media (min-width:320px) and (max-width:767px){width:30px;height:30px;}border-radius:50%;overflow:hidden;width:152px;height:152px;"]),f=Object(g.a)(r.a).withConfig({displayName:"sidebar__StyledLink",componentId:"sc-1nwz453-2"})(["text-decoration:none;color:inherit;"]),x=g.a.a.withConfig({displayName:"sidebar__StyledHref",componentId:"sc-1nwz453-3"})(["text-decoration:none;color:inherit;"]),w=g.a.div.withConfig({displayName:"sidebar__MenuWrapper",componentId:"sc-1nwz453-4"})(["@media (min-width:320px) and (max-width:767px){flex-direction:column;div{margin:0;}span{display:none;}}display:flex;flex-direction:row;div{margin:0px;}"]),E=g.a.h1.withConfig({displayName:"sidebar__SiteTitle",componentId:"sc-1nwz453-5"})(["display:flex;@media (min-width:768px) and (max-width:1024px){font-size:16px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){font-size:16px;}@media (min-width:320px) and (max-width:767px){display:none;}"]),v=(g.a.h5.withConfig({displayName:"sidebar__NameBoard",componentId:"sc-1nwz453-6"})(["display:flex;@media (min-width:768px) and (max-width:1024px){font-size:12px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){font-size:12px;}@media (min-width:320px) and (max-width:767px){display:none;}"]),function(e){var t=e.title;e.authorName;return l.a.createElement(u,null,l.a.createElement(f,{to:"/"},l.a.createElement(E,null,t)),l.a.createElement("a",null,l.a.createElement(y,{src:c.a})),l.a.createElement(w,null,l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(f,{to:"/",className:d.a.highlight_link},l.a.createElement(p.c,null)," ",l.a.createElement("span",null,"Home")),l.a.createElement("span",{style:{margin:"0.5rem"}},"·"),l.a.createElement(f,{to:"/work/",className:d.a.highlight_link},l.a.createElement(p.g,null)," ",l.a.createElement("span",null,"Work")),l.a.createElement("span",{style:{margin:"0.5rem"}},"·"),l.a.createElement(f,{to:"/project/",className:d.a.highlight_link},l.a.createElement(p.e,null)," ",l.a.createElement("span",null,"Projects"))))),l.a.createElement(w,null,l.a.createElement("div",{style:{position:"relative",bottom:"0.5rem"}},l.a.createElement("p",null,l.a.createElement(x,{className:d.a.highlight_link,href:"mailto:ejs336@cornell.edu",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.a,null)," ",l.a.createElement("span",null,"Email")),l.a.createElement("span",{style:{margin:"0.5rem"}},"·"),l.a.createElement(x,{className:d.a.highlight_link,href:"https://www.linkedin.com/in/suneric98/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement(p.d,null)," ",l.a.createElement("span",null,"Linkedin")),l.a.createElement("span",{style:{margin:"0.5rem"}},"·"),l.a.createElement(x,{className:d.a.highlight_link,href:"https://github.com/suneric98",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(p.b,null)," ",l.a.createElement("span",null,"Github")),l.a.createElement("span",{style:{margin:"0.5rem"}},"·"),l.a.createElement(x,{className:d.a.highlight_link,href:b.a,target:"_blank",download:!0},l.a.createElement(p.f,null)," ",l.a.createElement("span",null,"Resume"))))))}),k=g.a.div.withConfig({displayName:"layout__Container",componentId:"xgu04g-0"})(["display:flex;height:100vh;"]),_=g.a.div.withConfig({displayName:"layout__Content",componentId:"xgu04g-1"})(["display:flex;flex-direction:column;flex:1;overflow:scroll;padding:20px;color:#7e7e7e;"]);t.a=function(e){var t=e.children;return l.a.createElement(r.b,{query:"451039587",render:function(e){var a=e.site.siteMetadata,i=a.title,n=(a.siteDescription,a.authorName);return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,i)),l.a.createElement(k,null,l.a.createElement(v,{title:i,authorName:n}),l.a.createElement(_,null,t)))},data:i})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3b22e0ad6685cd205eb1.js.map