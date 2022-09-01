jasmineRequire.html=function(e){e.ResultsNode=jasmineRequire.ResultsNode(),e.HtmlReporter=jasmineRequire.HtmlReporter(e),e.QueryString=jasmineRequire.QueryString(),e.HtmlSpecFilter=jasmineRequire.HtmlSpecFilter()},jasmineRequire.HtmlReporter=function(r){var c={start:function(){},elapsed:function(){return 0}};function o(){this.topResults=new r.ResultsNode({},"",null),this.currentParent=this.topResults,this.specsExecuted=0,this.failureCount=0,this.pendingSpecCount=0}return o.prototype.suiteStarted=function(e){this.currentParent.addChild(e,"suite"),this.currentParent=this.currentParent.last()},o.prototype.suiteDone=function(e){this.currentParent.updateResult(e),this.currentParent!==this.topResults&&(this.currentParent=this.currentParent.parent),"failed"===e.status&&this.failureCount++},o.prototype.specStarted=function(e){},o.prototype.specDone=function(e){this.currentParent.addChild(e,"spec"),"excluded"!==e.status&&this.specsExecuted++,"failed"===e.status&&this.failureCount++,"pending"==e.status&&this.pendingSpecCount++},function(e){var s,i,N,v=function(){return e.env&&e.env.configuration()||{}},n=e.getContainer,l=e.createElement,u=e.createTextNode,g=e.navigateWithNewParam||function(){},S=e.addToExistingQueryString||function(e,s){return"?"+e+"="+s},C=e.filterSpecs,b=e.timer||c,y=[];this.initialize=function(){var e;(e=k(""))&&n().removeChild(e),s=w("div",{className:"jasmine_html-reporter"},w("div",{className:"jasmine-banner"},w("a",{className:"jasmine-title",href:"http://jasmine.github.io/",target:"_blank"}),w("span",{className:"jasmine-version"},r.version)),w("ul",{className:"jasmine-symbol-summary"}),w("div",{className:"jasmine-alert"}),w("div",{className:"jasmine-results"},w("div",{className:"jasmine-failures"}))),n().appendChild(s)},this.jasmineStarted=function(e){N=e.totalSpecsDefined||0,b.start()};var R=w("div",{className:"jasmine-summary"}),x=new o;this.suiteStarted=function(e){x.suiteStarted(e)},this.suiteDone=function(e){x.suiteDone(e),"failed"===e.status&&E.push(a(e)),P(e)},this.specStarted=function(e){x.specStarted(e)};var E=[];return this.specDone=function(e){x.specDone(e),I(e)&&"undefined"!=typeof console&&void 0!==console.error&&console.error("Spec '"+e.fullName+"' has no expectations."),i||(i=k(".jasmine-symbol-summary")),i.appendChild(w("li",{className:this.displaySpecInCorrectFormat(e),id:"spec_"+e.id,title:e.fullName})),"failed"===e.status&&E.push(a(e)),P(e)},this.displaySpecInCorrectFormat=function(e){return I(e)?"jasmine-empty":this.resultStatus(e.status)},this.resultStatus=function(e){return"excluded"===e?v().hideDisabled?"jasmine-excluded-no-display":"jasmine-excluded":"jasmine-"+e},this.jasmineDone=function(e){var s,i=k(".jasmine-banner"),n=k(".jasmine-alert"),a=e&&e.order;if(n.appendChild(w("span",{className:"jasmine-duration"},"finished in "+b.elapsed()/1e3+"s")),i.appendChild(function(e){var s=w("div",{className:"jasmine-run-options"},w("span",{className:"jasmine-trigger"},"Options"),w("div",{className:"jasmine-payload"},w("div",{className:"jasmine-stop-on-failure"},w("input",{className:"jasmine-fail-fast",id:"jasmine-fail-fast",type:"checkbox"}),w("label",{className:"jasmine-label",for:"jasmine-fail-fast"},"stop execution on spec failure")),w("div",{className:"jasmine-throw-failures"},w("input",{className:"jasmine-throw",id:"jasmine-throw-failures",type:"checkbox"}),w("label",{className:"jasmine-label",for:"jasmine-throw-failures"},"stop spec on expectation failure")),w("div",{className:"jasmine-random-order"},w("input",{className:"jasmine-random",id:"jasmine-random-order",type:"checkbox"}),w("label",{className:"jasmine-label",for:"jasmine-random-order"},"run tests in random order")),w("div",{className:"jasmine-hide-disabled"},w("input",{className:"jasmine-disabled",id:"jasmine-hide-disabled",type:"checkbox"}),w("label",{className:"jasmine-label",for:"jasmine-hide-disabled"},"hide disabled tests")))),i=s.querySelector("#jasmine-fail-fast");i.checked=e.failFast,i.onclick=function(){g("failFast",!e.failFast)};var n=s.querySelector("#jasmine-throw-failures");n.checked=e.oneFailurePerSpec,n.onclick=function(){g("throwFailures",!e.oneFailurePerSpec)};var a=s.querySelector("#jasmine-random-order");a.checked=e.random,a.onclick=function(){g("random",!e.random)};var t=s.querySelector("#jasmine-hide-disabled");t.checked=e.hideDisabled,t.onclick=function(){g("hideDisabled",!e.hideDisabled)};var r=s.querySelector(".jasmine-trigger"),l=s.querySelector(".jasmine-payload"),u=/\bjasmine-open\b/;return r.onclick=function(){u.test(l.className)?l.className=l.className.replace(u,""):l.className+=" jasmine-open"},s}(v())),x.specsExecuted<N){var t="Ran "+x.specsExecuted+" of "+N+" specs - run all",r=S("spec","");n.appendChild(w("span",{className:"jasmine-bar jasmine-skipped"},w("a",{href:r,title:"Run all specs"},t)))}var l,u,c="",o="jasmine-overall-result jasmine-bar ",d=e&&e.failedExpectations||[],m=0<x.failureCount+d.length;(0<N||m)&&(c+=q("spec",x.specsExecuted)+", "+q("failure",x.failureCount),x.pendingSpecCount&&(c+=", "+q("pending spec",x.pendingSpecCount))),"passed"===e.overallStatus?o+=" jasmine-passed ":"incomplete"===e.overallStatus?(o+=" jasmine-incomplete ",c="Incomplete: "+e.incompleteReason+", "+c):o+=" jasmine-failed ",a&&a.random&&(l=w("span",{className:"jasmine-seed-bar"},", randomized with seed ",w("a",{title:"randomized with seed "+a.seed,href:(u=a.seed,S("seed",u))},a.seed))),n.appendChild(w("span",{className:o},c,l));var p="AfterAll ";for(s=0;s<d.length;s++)n.appendChild(w("span",{className:"jasmine-bar jasmine-errored"},f(d[s])));function f(e){if("load"!==e.globalErrorType)return p+e.message;var s="Error during loading: "+e.message;return e.filename?s+" in "+e.filename+" line "+e.lineno:s}for(P(e),s=0;s<y.length;s++){var h=y[s];n.appendChild(w("span",{className:"jasmine-bar jasmine-warning"},"DEPRECATION: "+h))}if(k(".jasmine-results").appendChild(R),function e(s,i){for(var n,a=0;a<s.children.length;a++){var t=s.children[a];if(!C||W(t)){if("suite"===t.type){var r=w("ul",{className:"jasmine-suite",id:"suite-"+t.result.id},w("li",{className:"jasmine-suite-detail jasmine-"+t.result.status},w("a",{href:D(t.result)},t.result.description)));e(t,r),i.appendChild(r)}if("spec"===t.type){"jasmine-specs"!==i.getAttribute("class")&&(n=w("ul",{className:"jasmine-specs"}),i.appendChild(n));var l=t.result.description;I(t.result)&&(l="SPEC HAS NO EXPECTATIONS "+l),"pending"===t.result.status&&""!==t.result.pendingReason&&(l=l+" PENDING WITH MESSAGE: "+t.result.pendingReason),n.appendChild(w("li",{className:"jasmine-"+t.result.status,id:"spec-"+t.result.id},w("a",{href:D(t.result)},l)))}}}}(x.topResults,R),E.length){n.appendChild(w("span",{className:"jasmine-menu jasmine-bar jasmine-spec-list"},w("span",{},"Spec List | "),w("a",{className:"jasmine-failures-menu",href:"#"},"Failures"))),n.appendChild(w("span",{className:"jasmine-menu jasmine-bar jasmine-failure-list"},w("a",{className:"jasmine-spec-list-menu",href:"#"},"Spec List"),w("span",{}," | Failures "))),k(".jasmine-failures-menu").onclick=function(){F("jasmine-failure-list")},k(".jasmine-spec-list-menu").onclick=function(){F("jasmine-spec-list")},F("jasmine-failure-list");var j=k(".jasmine-failures");for(s=0;s<E.length;s++)j.appendChild(E[s])}},this;function a(e){for(var s=w("div",{className:"jasmine-spec-detail jasmine-failed"},function(e,s){for(var i,n=w("div",{className:"jasmine-description"},w("a",{title:e.description,href:D(e)},e.description));s&&s.parent;)n.insertBefore(u(" > "),n.firstChild),i=w("a",{href:t(s)},s.result.description),n.insertBefore(i,n.firstChild),s=s.parent;return n}(e,x.currentParent),w("div",{className:"jasmine-messages"})),i=s.childNodes[1],n=0;n<e.failedExpectations.length;n++){var a=e.failedExpectations[n];i.appendChild(w("div",{className:"jasmine-result-message"},a.message)),i.appendChild(w("div",{className:"jasmine-stack-trace"},a.stack))}return s}function t(e){for(var s=[];e&&e.parent;)s.unshift(e.result.description),e=e.parent;return S("spec",s.join(" "))}function P(e){if(e&&e.deprecationWarnings)for(var s=0;s<e.deprecationWarnings.length;s++){var i=e.deprecationWarnings[s].message;r.util.arrayContains(i)||y.push(i)}}function k(e){return n().querySelector(".jasmine_html-reporter "+e)}function w(e,s,i){for(var n=l(e),a=2;a<arguments.length;a++){var t=arguments[a];"string"==typeof t?n.appendChild(u(t)):t&&n.appendChild(t)}for(var r in s)"className"==r?n[r]=s[r]:n.setAttribute(r,s[r]);return n}function q(e,s){return s+" "+(1==s?e:e+"s")}function D(e){return S("spec",e.fullName)}function F(e){s.setAttribute("class","jasmine_html-reporter "+e)}function I(e){return e.failedExpectations.length+e.passedExpectations.length===0&&"passed"===e.status}function W(e){if("spec"==e.type&&"excluded"!=e.result.status)return!0;if("suite"==e.type)for(var s=0,i=e.children.length;s<i;s++)if(W(e.children[s]))return!0}}},jasmineRequire.HtmlSpecFilter=function(){return function(e){var s=e&&e.filterString()&&e.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=new RegExp(s);this.matches=function(e){return i.test(e)}}},jasmineRequire.ResultsNode=function(){return function i(e,s,n){this.result=e,this.type=s,this.parent=n,this.children=[],this.addChild=function(e,s){this.children.push(new i(e,s,this))},this.last=function(){return this.children[this.children.length-1]},this.updateResult=function(e){this.result=e}}},jasmineRequire.QueryString=function(){return function(r){return this.navigateWithNewParam=function(e,s){r.getWindowLocation().search=this.fullStringWithNewParam(e,s)},this.fullStringWithNewParam=function(e,s){var i=n();return i[e]=s,function(e){var s=[];for(var i in e)s.push(encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return"?"+s.join("&")}(i)},this.getParam=function(e){return n()[e]},this;function n(){var e=r.getWindowLocation().search.substring(1),s=[],i={};if(0<e.length){s=e.split("&");for(var n=0;n<s.length;n++){var a=s[n].split("="),t=decodeURIComponent(a[1]);"true"!==t&&"false"!==t||(t=JSON.parse(t)),i[decodeURIComponent(a[0])]=t}}return i}}};