(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=f(t);return g[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,y=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function _(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=c.default.createElement(k,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?c.default.createElement("picture",null,r(a),s):s},k=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,f=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,g=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,I=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:L?1:0,transition:O?"opacity "+b+"ms":"none"},l),x="boolean"==typeof E?"lightgray":E,V={transitionDelay:b+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&V,{},l,{},m),q={title:t,alt:this.state.isVisible?"":a,style:C,className:f,itemProp:y};if(g){var W=g,T=p(g);return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),x&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&V)}),T.base64&&c.default.createElement(A,{ariaHidden:!0,src:T.base64,spreadProps:q,imageVariants:W,generateSources:_}),T.tracedSVG&&c.default.createElement(A,{ariaHidden:!0,src:T.tracedSVG,spreadProps:q,imageVariants:W,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(W),c.default.createElement(k,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:S},T,{imageVariants:W}))}}))}if(h){var H=h,M=p(h),P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete P.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},x&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},O&&V)}),M.base64&&c.default.createElement(A,{ariaHidden:!0,src:M.base64,spreadProps:q,imageVariants:H,generateSources:_}),M.tracedSVG&&c.default.createElement(A,{ariaHidden:!0,src:M.tracedSVG,spreadProps:q,imageVariants:H,generateSources:N}),this.state.isVisible&&c.default.createElement("picture",null,w(H),c.default.createElement(k,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:S},M,{imageVariants:H}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:R,sizes:x,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=O;t.default=V},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=(a("Wbzz"),a("Bl7J")),s=(a("ezAz"),a("9eSz"),a("vrFN")),l=(a("fxj5"),function(e){e.siteTitle;return i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"layout-container"},i.a.createElement("div",{className:"layout-left"},i.a.createElement("div",{className:"hero__surtitle"},"Hello, I am"),i.a.createElement("h1",null,"Vanessa",i.a.createElement("br",null),"De Robillard"),i.a.createElement("div",{className:"hero__subtitle"},"A young ",i.a.createElement("span",{className:"gold"},"UI/UX")," designer with crazy for mobile & web design."),i.a.createElement("div",{className:"hero__description"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat "),i.a.createElement("p",null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")),i.a.createElement("div",{className:"hero__find_me"},"Find Me on"),i.a.createElement("ul",{className:"hero__links"},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("a",{className:"button button--gold",href:""},"Hire me"),i.a.createElement("a",{className:"button",href:""},"Download C.V.")),i.a.createElement("div",{className:"layout-right"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""}))))}),o=(a("c412"),a("vCPu"),function(){return i.a.createElement("div",{className:"portfolio",id:"portfolio"},i.a.createElement("div",{className:"layout-container"},i.a.createElement("h2",{className:"portfolio__title"}," ",i.a.createElement("div",null,"Portfolio")," "),i.a.createElement("ul",null,i.a.createElement("li",null,"All"),i.a.createElement("li",null,"Logo"),i.a.createElement("li",null,"Websites"),i.a.createElement("li",null,"Mobile Apps")),i.a.createElement("div",{className:"portfolio__container"},i.a.createElement("a",{href:"https://www.google.com/",className:"portfolio__card",target:"_blank"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""})),i.a.createElement("a",{href:"https://www.google.com/",className:"portfolio__card",target:"_blank"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""})),i.a.createElement("a",{href:"https://www.google.com/",className:"portfolio__card",target:"_blank"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""})),i.a.createElement("a",{href:"https://www.google.com/",className:"portfolio__card",target:"_blank"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""})),i.a.createElement("a",{href:"https://www.google.com/",className:"portfolio__card",target:"_blank"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""})),i.a.createElement("a",{href:"https://www.google.com/",className:"portfolio__card",target:"_blank"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""})))))}),c=(a("JA9B"),function(){return i.a.createElement("div",{className:"skills",id:"skills"},i.a.createElement("div",{className:"layout-container"},i.a.createElement("h2",{className:"skills__title"}," ",i.a.createElement("div",null,"My Capabilities")," "),i.a.createElement("div",{className:"skills__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation."),i.a.createElement("div",{className:"skills__container"},i.a.createElement("div",{className:"skills__card"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""}),i.a.createElement("h3",null,"Web design"),i.a.createElement("p",null,"Get awesome design services from inkyy.com")),i.a.createElement("div",{className:"skills__card"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""}),i.a.createElement("h3",null,"Web design"),i.a.createElement("p",null,"Get awesome design services from inkyy.com")),i.a.createElement("div",{className:"skills__card"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""}),i.a.createElement("h3",null,"Web design"),i.a.createElement("p",null,"Get awesome design services from inkyy.com")),i.a.createElement("div",{className:"skills__card"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""}),i.a.createElement("h3",null,"Web design"),i.a.createElement("p",null,"Get awesome design services from inkyy.com")),i.a.createElement("div",{className:"skills__card"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""}),i.a.createElement("h3",null,"Web design"),i.a.createElement("p",null,"Get awesome design services from inkyy.com")),i.a.createElement("div",{className:"skills__card"},i.a.createElement("img",{src:"https://source.unsplash.com/random",alt:""}),i.a.createElement("h3",null,"Web design"),i.a.createElement("p",null,"Get awesome design services from inkyy.com")))))}),d=(a("spbx"),function(){return i.a.createElement("div",{className:"contact",id:"contact"},i.a.createElement("div",{className:"layout-container"},i.a.createElement("h2",{className:"contact__title top-line"},"Let’s Make Something Together"),i.a.createElement("p",{className:"contact__description"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation."),i.a.createElement("form",{action:""},i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{type:"text",placeholder:"Name"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{type:"text",placeholder:"Email"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{type:"text",placeholder:"Phone"})),i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{type:"text",placeholder:"Budget"})),i.a.createElement("div",{className:"textarea-container"},i.a.createElement("textarea",{name:"comment",form:"usrform",placeholder:"Message"})),i.a.createElement("button",{type:"submit",className:"button button--gold"},"Hire Me"))))});t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(s.a,{title:"Home"}),i.a.createElement(l,null),i.a.createElement(o,null),i.a.createElement(c,null),i.a.createElement(d,null))}},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"id":"778aa69c-44c2-5b65-bdf5-dde203eb7141","childImageSharp":{"id":"95a561b0-aa4e-5807-b55e-0a3fc7b0c02c","fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/vanportfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/vanportfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/vanportfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/vanportfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/vanportfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/vanportfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/vanportfolio/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-3e2afff81d1f2c044273.js.map