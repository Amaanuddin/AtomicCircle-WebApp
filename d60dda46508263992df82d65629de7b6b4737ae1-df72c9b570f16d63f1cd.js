(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mku":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Atomic Circle","alternateName":"Atomiccircle","description":"A site we built together during a full-day Frontend Masters Gatsby workshop!","logo":"/logo.svg","url":"https://atomiccircle.com","socials":{"instagram":"https://www.instagram.com/atomic.circle/","facebook":"https://www.facebook.com/circleatomic","twitter":"https://twitter.com/CircleAtomic"}}}}}')},"5+TX":function(t){t.exports=JSON.parse('{"data":{"image":{"sharp":{"fluid":{"srcWebp":"/static/243853846d33b1d81c28beabc3bb2a10/d1fea/Image.webp"}}}}}')},"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function f(){u=t(l.map((function(t){return t.props}))),T.canUseDOM?e(u):n&&(u=n(u))}var T=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,l=[],t};var c=o.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),f()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(T,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(T,"canUseDOM",s),T}}},Gytx:function(t,e,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),s=0;s<i.length;s++){var u=i[s];if(!c(u))return!1;var l=t[u],f=e[u];if(!1===(o=n?n.call(r,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},L12J:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("5+TX"),a=n("Wbzz"),c=(n("tUrg"),n("SRfc"),n("qKvR")),s=function(t){var e=t.data,n=t.navClass,r=t.noActive;return Object(c.b)(o.a.Fragment,null,e.map((function(t,e){return t.link.match(/^\s?http(s?)/gi)?Object(c.b)("a",{className:n,href:t.link,key:e,target:"_blank",rel:"noopener noreferrer"},t.title):Object(c.b)(a.Link,{className:n,to:t.link,key:e,activeClassName:r?"no-active":"site-nav-item-active"},t.title)})))};s.defaultProps={navClass:"site-nav-item"};var u=s,l=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),function(t){var e=t.socials;return Object(c.b)(o.a.Fragment,null,Object.keys(e).map((function(t){return Object(c.b)("a",{href:e[t],className:"site-nav-item",target:"_blank",rel:"noopener noreferrer"},Object(c.b)("img",{className:"site-nav-icon",src:"/icons/"+t+".svg",alt:t}))})))}),f=[{link:"/",title:"Home"},{link:"/about/",title:"About"},{link:"/contact/",title:"Contact"}],T=function(t){var e=t.site,n=t.isHome,r=i.data.image;return Object(c.b)("header",{className:"site-head",id:"sticky_header",style:{background:n?"linear-gradient(to bottom, transparent, 80%, black), url("+r.sharp.fluid.srcWebp+") center fixed":"black",backgroundSize:"cover"}},Object(c.b)("div",{className:"container"},Object(c.b)("div",{className:"site-mast"},Object(c.b)("div",{className:"site-mast-left"},Object(c.b)(a.Link,{to:"/"},e.logo&&Object(c.b)("img",{className:"site-logo",src:e.logo,alt:e.title}))),Object(c.b)("div",{className:"site-mast-right"},e.socials&&Object(c.b)(l,{socials:e.socials}))),n?Object(c.b)("div",{className:"site-banner"},Object(c.b)("h1",{className:"site-banner-title"},e.title),Object(c.b)("p",{className:"site-banner-desc"},e.description)):null,Object(c.b)("nav",{className:"site-nav"},Object(c.b)("div",{className:"site-nav-left"},Object(c.b)(u,{data:f,navClass:"site-nav-item"})),Object(c.b)("div",{className:"site-nav-right"},Object(c.b)(a.Link,{className:"site-nav-button",to:"/about"},"About")))))},p=n("UFXn");n("Vl0y"),e.a=function(t){var e=t.isHome,n=t.children,r=Object(p.a)();return Object(c.b)("div",{className:"viewport"},Object(c.b)("div",{className:"viewport-top"},Object(c.b)(T,{site:r,isHome:e}),Object(c.b)("main",{className:"site-main"},n)),Object(c.b)("div",{className:"viewport-bottom"},Object(c.b)("footer",{className:"site-foot"},Object(c.b)("div",{className:"site-foot-nav container"},Object(c.b)("div",{className:"site-foot-nav-left"},Object(c.b)(a.Link,{to:"/"},r.title)," © 2019"),Object(c.b)("div",{className:"site-foot-nav-right"},Object(c.b)(u,{data:f,navClass:"site-foot-nav-item",noActive:!0}))))))}},OGtf:function(t,e,n){var r=n("XKFU"),o=n("eeVq"),i=n("vhPU"),a=/"/g,c=function(t,e,n,r){var o=String(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},TJpk:function(t,e,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=f(n("q1tI")),a=f(n("17x9")),c=f(n("8+s/")),s=f(n("bmMU")),u=n("v1p5"),l=n("hFT/");function f(t){return t&&t.__esModule?t:{default:t}}function T(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var E,b,A,m=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),h=(E=m,A=b=function(t){function e(){return p(this,e),d(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,s.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case l.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,o=t.arrayTypeChildren,i=t.newChildProps,a=t.nestedChildren;return r({},o,((e={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,o=t.child,i=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((e={})[o.type]=c,e.titleAttributes=r({},a),e));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var o;n=r({},n,((o={})[e]=t[e],o))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return i.default.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=T(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,i),t.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=T(t,["children"]),o=r({},n);return e&&(o=this.mapChildrenToProps(e,o)),i.default.createElement(E,o)},o(e,null,[{key:"canUseDOM",set:function(t){E.canUseDOM=t}}]),e}(i.default.Component),b.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},b.defaultProps={defer:!0,encodeSpecialCharacters:!0},b.peek=E.peek,b.rewind=function(){var t=E.rewind();return t||(t=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},A);h.renderStatic=h.rewind,e.Helmet=h,e.default=h},UFXn:function(t,e,n){"use strict";var r=n("0mku");e.a=function(){return r.data.site.siteMetadata}},Vl0y:function(t,e,n){},bmMU:function(t,e,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,s,u,l=r(e),f=r(n);if(l&&f){if((s=e.length)!=n.length)return!1;for(c=s;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=f)return!1;var T=e instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return e.getTime()==n.getTime();var d=e instanceof RegExp,E=n instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==n.toString();var b=o(e);if((s=b.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,b[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=s;0!=c--;)if(!("_owner"===(u=b[c])&&e.$$typeof||t(e[u],n[u])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"dZ+Y":function(t,e,n){"use strict";var r=n("XKFU"),o=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(t){return o(this,t,arguments[1])}})},dmsj:function(t,e,n){"use strict";n("91GP"),n("q1tI");var r=n("TJpk"),o=n("UFXn"),i=n("qKvR");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var c=function(t){var e=t.data,n=t.title,o=t.description,a=t.image,c=t.url,s=t.keywords,u={"@context":"https://schema.org","@type":"Organization",name:e.title,alternateName:e.alternateName,url:e.url,logo:e.url+e.logo,sameAs:[e.socials.facebook,e.socials.twitter,e.socials.instragram]},l=s||["atomic circle","blog","travel","stories","friends","atomiccircle"];return Object(i.b)(r.Helmet,{title:e.title,meta:[{name:"description",content:o||e.description},{property:"og:title",content:n||e.title},{property:"og:description",content:o||e.description},{property:"og:type",content:"website"},{property:"og:image",content:a},{property:"og:url",content:c||e.url}].concat({name:"keywords",content:l.join(", ")})},u&&Object(i.b)("script",{type:"appplication/ld+json"},JSON.stringify(u)))};e.a=function(t){var e=Object(o.a)();return Object(i.b)(c,a({data:e},t))}},"hFT/":function(t,e,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(o).reduce((function(t,e){return t[o[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},tUrg:function(t,e,n){"use strict";n("OGtf")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},v1p5:function(t,e,n){(function(t){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=s(n("q1tI")),a=s(n("MgzW")),c=n("hFT/");function s(t){return t&&t.__esModule?t:{default:t}}var u,l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(t){var e=b(t,c.TAG_NAMES.TITLE),n=b(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=b(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},T=function(t){return b(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return o({},t,e)}),{})},d=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},E=function(t,e,n){var o={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&y("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],u=s.toLowerCase();-1===e.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var u=i[s],l=(0,a.default)({},o[u],r[u]);o[u]=l}return t}),[]).reverse()},b=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},A=(u=Date.now(),function(t){var e=Date.now();e-u>16?(u=e,t(e)):setTimeout((function(){A(t)}),0)}),m=function(t){return clearTimeout(t)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:t.requestAnimationFrame||A,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:t.cancelAnimationFrame||m,y=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},S=null,O=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,l=t.scriptTags,f=t.styleTags,T=t.title,p=t.titleAttributes;R(c.TAG_NAMES.BODY,r),R(c.TAG_NAMES.HTML,o),g(T,p);var d={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,i),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,s),scriptTags:P(c.TAG_NAMES.SCRIPT,l),styleTags:P(c.TAG_NAMES.STYLE,f)},E={},b={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(E[t]=n),r.length&&(b[t]=d[t].oldTags)})),e&&e(),u(t,E,b)},_=function(t){return Array.isArray(t)?t.join(""):t},g=function(t,e){void 0!==t&&document.title!==t&&(document.title=_(t)),R(c.TAG_NAMES.TITLE,e)},R=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var u=a[s],l=e[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[r]?"":e[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},N=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},w=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=N(n),i=_(e);return o?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return N(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),i.default.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+l(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){S&&v(S),t.defer?S=h((function(){O(t,(function(){S=null}))})):(O(t),S=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,u=t.scriptTags,l=t.styleTags,f=t.title,T=void 0===f?"":f,p=t.titleAttributes;return{base:w(c.TAG_NAMES.BASE,e,r),bodyAttributes:w(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(c.ATTRIBUTE_NAMES.HTML,o,r),link:w(c.TAG_NAMES.LINK,i,r),meta:w(c.TAG_NAMES.META,a,r),noscript:w(c.TAG_NAMES.NOSCRIPT,s,r),script:w(c.TAG_NAMES.SCRIPT,u,r),style:w(c.TAG_NAMES.STYLE,l,r),title:w(c.TAG_NAMES.TITLE,{title:T,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:d([c.TAG_PROPERTIES.HREF],t),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,t),defer:b(t,c.HELMET_PROPS.DEFER),encode:b(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,t),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:T(t),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:f(t),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=h,e.warn=y}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=d60dda46508263992df82d65629de7b6b4737ae1-df72c9b570f16d63f1cd.js.map