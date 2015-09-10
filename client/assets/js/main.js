'use strict';
angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'easypiechart', 'mgo-angular-wizard', 'textAngular', 'ui.tree', 'ngMap', 'ngTagsInput', 'app.ui.ctrls', 'app.ui.directives', 'app.ui.services', 'app.controllers', 'app.directives', 'app.form.validation', 'app.ui.form.ctrls', 'app.ui.form.directives', 'app.tables', 'app.map', 'app.task', 'app.localization', 'app.chart.ctrls', 'app.chart.directives', 'app.page.ctrls']).config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      redirectTo: '/inicio'
    }).when('/inicio', {
      templateUrl: 'views/inicio.html'
    }).when('/dashboard1', {
      templateUrl: 'views/dashboard1.html'
    }).when('/ui/typography', {
      templateUrl: 'views/ui/typography.html'
    }).when('/ui/buttons', {
      templateUrl: 'views/ui/buttons.html'
    }).when('/ui/icons', {
      templateUrl: 'views/ui/icons.html'
    }).when('/ui/grids', {
      templateUrl: 'views/ui/grids.html'
    }).when('/ui/widgets', {
      templateUrl: 'views/ui/widgets.html'
    }).when('/ui/components', {
      templateUrl: 'views/ui/components.html'
    }).when('/ui/timeline', {
      templateUrl: 'views/ui/timeline.html'
    }).when('/ui/nested-lists', {
      templateUrl: 'views/ui/nested-lists.html'
    }).when('/ui/pricing-tables', {
      templateUrl: 'views/ui/pricing-tables.html'
    }).when('/forms/elements', {
      templateUrl: 'views/forms/elements.html'
    }).when('/forms/layouts', {
      templateUrl: 'views/forms/layouts.html'
    }).when('/forms/validation', {
      templateUrl: 'views/forms/validation.html'
    }).when('/forms/wizard', {
      templateUrl: 'views/forms/wizard.html'
    }).when('/maps/gmap', {
      templateUrl: 'views/maps/gmap.html'
    }).when('/maps/jqvmap', {
      templateUrl: 'views/maps/jqvmap.html'
    }).when('/tables/static', {
      templateUrl: 'views/tables/static.html'
    }).when('/tables/responsive', {
      templateUrl: 'views/tables/responsive.html'
    }).when('/tables/dynamic', {
      templateUrl: 'views/tables/dynamic.html'
    }).when('/charts/others', {
      templateUrl: 'views/charts/charts.html'
    }).when('/charts/morris', {
      templateUrl: 'views/charts/morris.html'
    }).when('/charts/flot', {
      templateUrl: 'views/charts/flot.html'
    }).when('/mail/inbox', {
      templateUrl: 'views/mail/inbox.html'
    }).when('/mail/compose', {
      templateUrl: 'views/mail/compose.html'
    }).when('/mail/single', {
      templateUrl: 'views/mail/single.html'
    }).when('/pages/features', {
      templateUrl: 'views/pages/features.html'
    }).when('/pages/signin', {
      templateUrl: 'views/pages/signin.html'
    }).when('/pages/signup', {
      templateUrl: 'views/pages/signup.html'
    }).when('/pages/forgot', {
      templateUrl: 'views/pages/forgot-password.html'
    }).when('/pages/lock-screen', {
      templateUrl: 'views/pages/lock-screen.html'
    }).when('/pages/profile', {
      templateUrl: 'views/pages/profile.html'
    }).when('/404', {
      templateUrl: 'views/pages/404.html'
    }).when('/pages/500', {
      templateUrl: 'views/pages/500.html'
    }).when('/pages/blank', {
      templateUrl: 'views/pages/blank.html'
    }).when('/pages/invoice', {
      templateUrl: 'views/pages/invoice.html'
    }).when('/pages/services', {
      templateUrl: 'views/pages/services.html'
    }).when('/pages/about', {
      templateUrl: 'views/pages/about.html'
    }).when('/pages/contact', {
      templateUrl: 'views/pages/contact.html'
    }).when('/tasks', {
      templateUrl: 'views/tasks/tasks.html'
    }).otherwise({
      redirectTo: '/404'
    });
  }
]);

/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(a,b,c){(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)})(function(d){"use strict";var e={},f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=0;f=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new h("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:c,tooltipFormat:new h("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:"#4a2",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new h("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},E='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',g=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=h=g({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e=this,f=a,g,h,i,j,k;return this.format.replace(this.fre,function(){var a;return h=arguments[1],i=arguments[3],g=e.precre.exec(h),g?(k=g[2],h=g[1]):k=!1,j=f[h],j===c?"":i&&b&&b[i]?(a=b[i],a.get?b[i].get(j)||j:b[i][j]||j):(n(j)&&(d.get("numberFormatter")?j=d.get("numberFormatter")(j):j=s(j,k,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),j)})}}),d.spformat=function(a,b){return new h(a,b)},i=function(a,b,c){return a<b?b:a>c?c:a},j=function(a,c){var d;return c===2?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},k=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},l=function(a){var b,c=[];for(b=a.length;b--;)c[b]=k(a[b]);return c},m=function(a,b){var c,d,e=[];for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);return e},n=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},s=function(a,b,c,e,f){var g,h;a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f);for(h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},o=function(a,b,c){var d;for(d=b.length;d--;){if(c&&b[d]===null)continue;if(b[d]!==a)return!1}return!0},p=function(a){var b=0,c;for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;return b},r=function(a){return d.isArray(a)?a:[a]},q=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c[typeof a.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(!j.getContext||!j.getContext("2d")){if(!a.namespaces||!!a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new J(a,b,c)}}else d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c,d)}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=t=g({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b=this.rangelist,d,e,f;if((f=this.map[a])!==c)return f;if(b)for(d=b.length;d--;){e=b[d];if(e[0]<=a&&e[1]>=a)return e[2]}return c}}),d.range_map=function(a){return new t(a)},u=g({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new v(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind("mousemove.jqs");var b=this.splist,c=b.length,e=!1,f,g;this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);for(g=0;g<c;g++)f=b[g],f.clearRegionHighlight()&&(e=!0);e&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a=this.splist,b=a.length,c=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;if(!this.over)return;for(j=0;j<b;j++)i=a[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(c=!0);if(c){l=d.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);if(this.tooltip){h="";for(j=0;j<b;j++)i=a[j],h+=i.getCurrentRegionTooltip();this.tooltip.setContent(h)}this.disableHighlight||this.canvas.render()}k===null&&this.mouseleave()}}),v=g({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c=b.get("tooltipClassname","jqstooltip"),e=this.sizeStyle,f;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{id:"jqssizetip",style:e,"class":c}),this.tooltip=d("<div/>",{id:"jqstooltip","class":c}).appendTo(this.container),f=this.tooltip.offset(),this.offsetLeft=f.left,this.offsetTop=f.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){if(!a){this.tooltip.css("visibility","hidden"),this.hidden=!0;return}this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),this.hidden&&(this.hidden=!1,this.updatePosition())},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;if(!this.height||!this.width||this.hidden)return;b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b})},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),F=function(){q(E)},d(F),K=[],d.fn.sparkline=function(b,e){return this.each(function(){var f=new d.fn.sparkline.options(this,e),g=d(this),h,i;h=function(){var e,h,i,j,k,l,m;if(b==="html"||b===c){m=this.getAttribute(f.get("tagValuesAttribute"));if(m===c||m===null)m=g.html();e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else e=b;h=f.get("width")==="auto"?e.length*f.get("defaultPixelsPerValue"):f.get("width");if(f.get("height")==="auto"){if(!f.get("composite")||!d.data(this,"_jqs_vcanvas"))j=a.createElement("span"),j.innerHTML="a",g.html(j),i=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null}else i=f.get("height");f.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?f.get("composite")||k.reset():(k=new u(this,f),d.data(this,"_jqs_mhandler",k)));if(f.get("composite")&&!d.data(this,"_jqs_vcanvas")){d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0));return}l=new(d.fn.sparkline[f.get("type")])(this,e,f,h,i),l.render(),k&&k.registerSparkline(l)};if(d(this).html()&&!f.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!f.get("composite")&&d.data(this,"_jqs_pending"))for(i=K.length;i;i--)K[i-1][0]==this&&K.splice(i-1,1);K.push([this,h]),d.data(this,"_jqs_pending",!0)}else h.call(this)})},d.fn.sparkline.defaults=f(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=K.length;b<c;b++)a=K[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(K[b][1].call(a),d.data(K[b][0],"_jqs_pending",!1),e.push(b)):!d(a).closest("html").length&&!d.data(a,"_jqs_pending")&&(d.data(K[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)K.splice(e[b-1],1)},d.fn.sparkline.options=g({init:function(a,b){var c,f,g,h;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},f=d.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===e?c=f[b.type||g.type]:c=f[h],this.mergedOptions=d.extend({},g,c,b)},getTagSetting:function(a){var b=this.tagOptionsPrefix,d,f,g,h;if(b===!1||b===c)return e;if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;else{d=this.tag.getAttribute(b+a);if(d===c||d===null)d=e;else if(d.substr(0,1)==="["){d=d.substr(1,d.length-2).split(",");for(f=d.length;f--;)d[f]=k(d[f].replace(/(^\s*)|(\s*$)/g,""))}else if(d.substr(0,1)==="{"){g=d.substr(1,d.length-2).split(","),d={};for(f=g.length;f--;)h=g[f].split(":",2),d[h[0].replace(/(^\s*)|(\s*$)/g,"")]=k(h[1].replace(/(^\s*)|(\s*$)/g,""))}else d=k(d);this.tagValCache.key=d}return d},get:function(a,b){var d=this.getTagSetting(a),f;return d!==e?d:(f=this.mergedOptions[a])===c?b:f}}),d.fn.sparkline._base=g({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,d){var e=this.currentRegion,f=!this.options.get("disableHighlight"),g;return b>this.canvasWidth||d>this.canvasHeight||b<0||d<0?null:(g=this.getRegion(a,b,d),e!==g?(e!==c&&f&&this.removeHighlight(),this.currentRegion=g,g!==c&&f&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var a=this.options,b="",e=[],f,g,i,j,k,l,m,n,o,p,q,r,s,t;if(this.currentRegion===c)return"";f=this.getCurrentRegionFields(),q=a.get("tooltipFormatter");if(q)return q(this,a,f);a.get("tooltipChartTitle")&&(b+='<div class="jqs jqstitle">'+a.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");if(!g)return"";d.isArray(g)||(g=[g]),d.isArray(f)||(f=[f]),m=this.options.get("tooltipFormatFieldlist"),n=this.options.get("tooltipFormatFieldlistKey");if(m&&n){o=[];for(l=f.length;l--;)p=f[l][n],(t=d.inArray(p,m))!=-1&&(o[t]=f[l]);f=o}i=g.length,s=f.length;for(l=0;l<i;l++){r=g[l],typeof r=="string"&&(r=new h(r)),j=r.fclass||"jqsfield";for(t=0;t<s;t++)if(!f[t].isNull||!a.get("tooltipSkipNull"))d.extend(f[t],{prefix:a.get("tooltipPrefix"),suffix:a.get("tooltipSuffix")}),k=r.render(f[t],a.get("tooltipValueLookups"),a),e.push('<div class="'+j+'">'+k+"</div>")}return e.length?b+e.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d=c.get("highlightColor"),e=c.get("highlightLighten"),f,g,h,j;if(d)return d;if(e){f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if(f){h=[],g=a.length===4?16:1;for(j=0;j<3;j++)h[j]=i(b.round(parseInt(f[j+1],16)*g*e),0,255);return"rgb("+h.join(",")+")"}}return a}}),w={changeHighlight:function(a){var b=this.currentRegion,c=this.target,e=this.regionShapes[b],f;e&&(f=this.renderRegion(b,a),d.isArray(f)||d.isArray(e)?(c.replaceWithShapes(e,f),this.regionShapes[b]=d.map(f,function(a){return a.id})):(c.replaceWithShape(e,f),this.regionShapes[b]=f.id))},render:function(){var a=this.values,b=this.target,c=this.regionShapes,e,f,g,h;if(!this.cls._super.render.call(this))return;for(g=a.length;g--;){e=this.renderRegion(g);if(e)if(d.isArray(e)){f=[];for(h=e.length;h--;)e[h].append(),f.push(e[h].id);c[g]=f}else e.append(),c[g]=e.id;else c[g]=null}b.render()}},d.fn.sparkline.line=x=g(d.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){x._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(f[e]!==null&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.yvalues[a]===null,x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a=this.currentRegion,b=this.target,d=this.vertices[a],e=this.options,f=e.get("spotRadius"),g=e.get("highlightSpotColor"),h=e.get("highlightLineColor"),i,j;if(!d)return;f&&g&&(i=b.drawCircle(d[0],d[1],f,c,g),this.highlightSpotId=i.id,b.insertAfterShape(this.lastShapeId,i)),h&&(j=b.drawLine(d[0],this.canvasTop,d[0],this.canvasTop+this.canvasHeight,h),this.highlightLineId=j.id,b.insertAfterShape(this.lastShapeId,j))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a=this.values,c=a.length,d=this.xvalues,e=this.yvalues,f=this.yminmax,g,h,i,j,k;for(g=0;g<c;g++)h=a[g],i=typeof a[g]=="string",j=typeof a[g]=="object"&&a[g]instanceof Array,k=i&&a[g].split(":"),i&&k.length===2?(d.push(Number(k[0])),e.push(Number(k[1])),f.push(Number(k[1]))):j?(d.push(h[0]),e.push(h[1]),f.push(h[1])):(d.push(g),a[g]===null||a[g]==="null"?e.push(null):(e.push(Number(h)),f.push(Number(h))));this.options.get("xvalues")&&(d=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,f),this.miny=this.minyorg=b.min.apply(b,f),this.maxx=b.max.apply(b,d),this.minx=b.min.apply(b,d),this.xvalues=d,this.yvalues=e,this.yminmax=f},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},render:function(){var a=this.options,e=this.target,f=this.canvasWidth,g=this.canvasHeight,h=this.vertices,i=a.get("spotRadius"),j=this.regionMap,k,l,m,n,o,p,q,r,s,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K;if(!x._super.render.call(this))return;this.scanValues(),this.processRangeOptions(),I=this.xvalues,J=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2)return;n=o=0,k=this.maxx-this.minx===0?1:this.maxx-this.minx,l=this.maxy-this.miny===0?1:this.maxy-this.miny,m=this.yvalues.length-1,i&&(f<i*4||g<i*4)&&(i=0);if(i){G=a.get("highlightSpotColor")&&!a.get("disableInteraction");if(G||a.get("minSpotColor")||a.get("spotColor")&&J[m]===this.miny)g-=b.ceil(i);if(G||a.get("maxSpotColor")||a.get("spotColor")&&J[m]===this.maxy)g-=b.ceil(i),n+=b.ceil(i);if(G||(a.get("minSpotColor")||a.get("maxSpotColor"))&&(J[0]===this.miny||J[0]===this.maxy))o+=b.ceil(i),f-=b.ceil(i);if(G||a.get("spotColor")||a.get("minSpotColor")||a.get("maxSpotColor")&&(J[m]===this.miny||J[m]===this.maxy))f-=b.ceil(i)}g--,a.get("normalRangeMin")!==c&&!a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),q=[],r=[q],z=A=null,B=J.length;for(K=0;K<B;K++)s=I[K],v=I[K+1],u=J[K],w=o+b.round((s-this.minx)*(f/k)),y=K<B-1?o+b.round((v-this.minx)*(f/k)):f,A=w+(y-w)/2,j[K]=[z||0,A,K],z=A,u===null?K&&(J[K-1]!==null&&(q=[],r.push(q)),h.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),q.length||q.push([w,n+g]),p=[w,n+b.round(g-g*((u-this.miny)/l))],q.push(p),h.push(p));C=[],D=[],E=r.length;for(K=0;K<E;K++)q=r[K],q.length&&(a.get("fillColor")&&(q.push([q[q.length-1][0],n+g]),D.push(q.slice(0)),q.pop()),q.length>2&&(q[0]=[q[0][0],q[1][1]]),C.push(q));E=D.length;for(K=0;K<E;K++)e.drawShape(D[K],a.get("fillColor"),a.get("fillColor")).append();a.get("normalRangeMin")!==c&&a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),E=C.length;for(K=0;K<E;K++)e.drawShape(C[K],a.get("lineColor"),c,a.get("lineWidth")).append();if(i&&a.get("valueSpots")){F=a.get("valueSpots"),F.get===c&&(F=new t(F));for(K=0;K<B;K++)H=F.get(J[K]),H&&e.drawCircle(o+b.round((I[K]-this.minx)*(f/k)),n+b.round(g-g*((J[K]-this.miny)/l)),i,c,H).append()}i&&a.get("spotColor")&&J[m]!==null&&e.drawCircle(o+b.round((I[I.length-1]-this.minx)*(f/k)),n+b.round(g-g*((J[m]-this.miny)/l)),i,c,a.get("spotColor")).append(),this.maxy!==this.minyorg&&(i&&a.get("minSpotColor")&&(s=I[d.inArray(this.minyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.minyorg-this.miny)/l)),i,c,a.get("minSpotColor")).append()),i&&a.get("maxSpotColor")&&(s=I[d.inArray(this.maxyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.maxyorg-this.miny)/l)),i,c,a.get("maxSpotColor")).append())),this.lastShapeId=e.getLastShapeId(),this.canvasTop=n,e.render()}}),d.fn.sparkline.bar=y=g(d.fn.sparkline._base,w,{type:"bar",init:function(a,e,f,g,h){var j=parseInt(f.get("barWidth"),10),n=parseInt(f.get("barSpacing"),10),o=f.get("chartRangeMin"),p=f.get("chartRangeMax"),q=f.get("chartRangeClip"),r=Infinity,s=-Infinity,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;y._super.init.call(this,a,e,f,g,h);for(A=0,B=e.length;A<B;A++){O=e[A],u=typeof O=="string"&&O.indexOf(":")>-1;if(u||d.isArray(O))J=!0,u&&(O=e[A]=l(O.split(":"))),O=m(O,null),v=b.min.apply(b,O),w=b.max.apply(b,O),v<r&&(r=v),w>s&&(s=w)}this.stacked=J,this.regionShapes={},this.barWidth=j,this.barSpacing=n,this.totalBarWidth=j+n,this.width=g=e.length*j+(e.length-1)*n,this.initTarget(),q&&(H=o===c?-Infinity:o,I=p===c?Infinity:p),z=[],x=J?[]:z;var S=[],T=[];for(A=0,B=e.length;A<B;A++)if(J){K=e[A],e[A]=N=[],S[A]=0,x[A]=T[A]=0;for(L=0,M=K.length;L<M;L++)O=N[L]=q?i(K[L],H,I):K[L],O!==null&&(O>0&&(S[A]+=O),r<0&&s>0?O<0?T[A]+=b.abs(O):x[A]+=O:x[A]+=b.abs(O-(O<0?s:r)),z.push(O))}else O=q?i(e[A],H,I):e[A],O=e[A]=k(O),O!==null&&z.push(O);this.max=G=b.max.apply(b,z),this.min=F=b.min.apply(b,z),this.stackMax=s=J?b.max.apply(b,S):G,this.stackMin=r=J?b.min.apply(b,z):F,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<F)&&(F=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>G)&&(G=f.get("chartRangeMax")),this.zeroAxis=D=f.get("zeroAxis",!0),F<=0&&G>=0&&D?E=0:D==0?E=F:F>0?E=F:E=G,this.xaxisOffset=E,C=J?b.max.apply(b,x)+b.max.apply(b,T):G-F,this.canvasHeightEf=D&&F<0?this.canvasHeight-2:this.canvasHeight-1,F<E?(Q=J&&G>=0?s:G,P=(Q-E)/C*this.canvasHeight,P!==b.ceil(P)&&(this.canvasHeightEf-=2,P=b.ceil(P))):P=this.canvasHeight,this.yoffset=P,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.range=C},getRegion:function(a,d,e){var f=b.floor(d/this.totalBarWidth);return f<0||f>=this.values.length?c:f},getCurrentRegionFields:function(){var a=this.currentRegion,b=r(this.values[a]),c=[],d,e;for(e=b.length;e--;)d=b[e],c.push({isNull:d===null,value:d,color:this.calcColor(e,d,a),offset:a});return c},calcColor:function(a,b,e){var f=this.colorMapByIndex,g=this.colorMapByValue,h=this.options,i,j;return this.stacked?i=h.get("stackedBarColor"):i=b<0?h.get("negBarColor"):h.get("barColor"),b===0&&h.get("zeroColor")!==c&&(i=h.get("zeroColor")),g&&(j=g.get(b))?i=j:f&&f.length>e&&(i=f[e]),d.isArray(i)?i[a%i.length]:i},renderRegion:function(a,e){var f=this.values[a],g=this.options,h=this.xaxisOffset,i=[],j=this.range,k=this.stacked,l=this.target,m=a*this.totalBarWidth,n=this.canvasHeightEf,p=this.yoffset,q,r,s,t,u,v,w,x,y,z;f=d.isArray(f)?f:[f],w=f.length,x=f[0],t=o(null,f),z=o(h,f,!0);if(t)return g.get("nullColor")?(s=e?g.get("nullColor"):this.calcHighlightColor(g.get("nullColor"),g),q=p>0?p-1:p,l.drawRect(m,q,this.barWidth-1,0,s,s)):c;u=p;for(v=0;v<w;v++){x=f[v];if(k&&x===h){if(!z||y)continue;y=!0}j>0?r=b.floor(n*(b.abs(x-h)/j))+1:r=1,x<h||x===h&&p===0?(q=u,u+=r):(q=p-r,p-=r),s=this.calcColor(v,x,a),e&&(s=this.calcHighlightColor(s,g)),i.push(l.drawRect(m,q,this.barWidth-1,r-1,s,s))}return i.length===1?i[0]:i}}),d.fn.sparkline.tristate=z=g(d.fn.sparkline._base,w,{type:"tristate",init:function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);z._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c,d){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.target,g,h,i,j,k,l;g=f.pixelHeight,i=b.round(g/2),j=a*this.totalBarWidth,d[a]<0?(k=i,h=i-1):d[a]>0?(k=0,h=i-1):(k=i-1,h=2),l=this.calcColor(d[a],a);if(l===null)return;return c&&(l=this.calcHighlightColor(l,e)),f.drawRect(j,k,this.barWidth-1,h-1,l,l)}}),d.fn.sparkline.discrete=A=g(d.fn.sparkline._base,w,{type:"discrete",init:function(a,e,f,g,h){A._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=f.get("width")==="auto"?e.length*2:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=f.get("lineHeight")==="auto"?b.round(this.canvasHeight*.3):f.get("lineHeight"))},getRegion:function(a,c,d){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.min,g=this.max,h=this.range,j=this.interval,k=this.target,l=this.canvasHeight,m=this.lineHeight,n=l-m,o,p,q,r;return p=i(d[a],f,g),r=a*j,o=b.round(n-n*((p-f)/h)),q=e.get("thresholdColor")&&p<e.get("thresholdValue")?e.get("thresholdColor"):e.get("lineColor"),c&&(q=this.calcHighlightColor(q,e)),k.drawLine(r,o,r,o+m,q)}}),d.fn.sparkline.bullet=B=g(d.fn.sparkline._base,{type:"bullet",init:function(a,d,e,f,g){var h,i,j;B._super.init.call(this,a,d,e,f,g),this.values=d=l(d),j=d.slice(),j[0]=j[0]===null?j[2]:j[0],j[1]=d[1]===null?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),e.get("base")===c?h=h<0?h:0:h=e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=e.get("width")==="auto"?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.valueShapes[b],d;delete this.shapes[c];switch(b.substr(0,1)){case"r":d=this.renderRange(b.substr(1),a);break;case"p":d=this.renderPerformance(a);break;case"t":d=this.renderTarget(a)}this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(this.canvasHeight*.3),d-1,b.round(this.canvasHeight*.4)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(this.canvasHeight*.1),f=this.canvasHeight-e*2,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},render:function(){var a=this.values.length,b=this.target,c,d;if(!B._super.render.call(this))return;for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()}}),d.fn.sparkline.pie=C=g(d.fn.sparkline._base,{type:"pie",init:function(a,c,e,f,g){var h=0,i;C._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),e.get("width")==="auto"&&(this.width=this.height);if(c.length>0)for(i=c.length;i--;)h+=c[i];this.total=h,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e=this.target,f=this.options,g=this.radius,h=f.get("borderWidth"),i=f.get("offset"),j=2*b.PI,k=this.values,l=this.total,m=i?2*b.PI*(i/360):0,n,o,p,q,r;q=k.length;for(p=0;p<q;p++){n=m,o=m,l>0&&(o=m+j*(k[p]/l));if(a===p)return r=f.get("sliceColors")[p%f.get("sliceColors").length],d&&(r=this.calcHighlightColor(r,f)),e.drawPieSlice(g,g,g-h,n,o,c,r);m=o}},render:function(){var a=this.target,d=this.values,e=this.options,f=this.radius,g=e.get("borderWidth"),h,i;if(!C._super.render.call(this))return;g&&a.drawCircle(f,f,b.floor(f-g/2),e.get("borderColor"),c,g).append();for(i=d.length;i--;)d[i]&&(h=this.renderSlice(i).append(),this.valueShapes[i]=h.id,this.shapes[h.id]=i);a.render()}}),d.fn.sparkline.box=D=g(d.fn.sparkline._base,{type:"box",init:function(a,b,c,e,f){D._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=c.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles
[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:"lo",value:this.loutlier}),this.routlier!==c&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==c&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a=this.target,d=this.values,e=d.length,f=this.options,g=this.canvasWidth,h=this.canvasHeight,i=f.get("chartRangeMin")===c?b.min.apply(b,d):f.get("chartRangeMin"),k=f.get("chartRangeMax")===c?b.max.apply(b,d):f.get("chartRangeMax"),l=0,m,n,o,p,q,r,s,t,u,v,w;if(!D._super.render.call(this))return;if(f.get("raw"))f.get("showOutliers")&&d.length>5?(n=d[0],m=d[1],p=d[2],q=d[3],r=d[4],s=d[5],t=d[6]):(m=d[0],p=d[1],q=d[2],r=d[3],s=d[4]);else{d.sort(function(a,b){return a-b}),p=j(d,1),q=j(d,2),r=j(d,3),o=r-p;if(f.get("showOutliers")){m=s=c;for(u=0;u<e;u++)m===c&&d[u]>p-o*f.get("outlierIQR")&&(m=d[u]),d[u]<r+o*f.get("outlierIQR")&&(s=d[u]);n=d[0],t=d[e-1]}else m=d[0],s=d[e-1]}this.quartiles=[p,q,r],this.lwhisker=m,this.rwhisker=s,this.loutlier=n,this.routlier=t,w=g/(k-i+1),f.get("showOutliers")&&(l=b.ceil(f.get("spotRadius")),g-=2*b.ceil(f.get("spotRadius")),w=g/(k-i+1),n<m&&a.drawCircle((n-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append(),t>s&&a.drawCircle((t-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append()),a.drawRect(b.round((p-i)*w+l),b.round(h*.1),b.round((r-p)*w),b.round(h*.8),f.get("boxLineColor"),f.get("boxFillColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/2),b.round((p-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/4),b.round((m-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/2),b.round((r-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/4),b.round((s-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((q-i)*w+l),b.round(h*.1),b.round((q-i)*w+l),b.round(h*.9),f.get("medianColor")).append(),f.get("target")&&(v=b.ceil(f.get("spotRadius")),a.drawLine(b.round((f.get("target")-i)*w+l),b.round(h/2-v),b.round((f.get("target")-i)*w+l),b.round(h/2+v),f.get("targetColor")).append(),a.drawLine(b.round((f.get("target")-i)*w+l-v),b.round(h/2),b.round((f.get("target")-i)*w+l+v),b.round(h/2),f.get("targetColor")).append()),a.render()}}),G=g({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),H=g({_pxregex:/(\d+)(px)?\s*$/i,init:function(a,b,c){if(!a)return;this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this)},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new G(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),I=g(H,{init:function(b,e,f,g){I._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({display:"inline-block",width:b,height:e,verticalAlign:"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g=this._getContext(d,e,f),h,i;g.beginPath(),g.moveTo(b[0][0]+.5,b[0][1]+.5);for(h=1,i=b.length;h<i;h++)g.lineTo(b[h][0]+.5,b[h][1]+.5);d!==c&&g.stroke(),e!==c&&g.fill(),this.targetX!==c&&this.targetY!==c&&g.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=this.shapeseq,d;this.shapes[b.id]=b;for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c=this.shapeseq,d={},e,f,g;for(f=a.length;f--;)d[a[f]]=!0;for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]},insertAfterShape:function(a,b){var c=this.shapeseq,d;for(d=c.length;d--;)if(c[d]===a){c.splice(d+1,0,b.id),this.shapes[b.id]=b;return}},removeShapeId:function(a){var b=this.shapeseq,c;for(c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;d.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);this.interact||(this.shapes={},this.shapeseq=[])}}),J=g(H,{init:function(b,c,e){var f;J._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,d,e,f){var g=[],h,i,j,k,l,m,n;for(n=0,m=b.length;n<m;n++)g[n]=""+b[n][0]+","+b[n][1];return h=g.splice(0,1),f=f===c?1:f,i=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',j=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',k=g[0]===g[g.length-1]?"x ":"",l='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+i+j+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+h+" l "+g.join(", ")+" "+k+'e">'+" </v:shape>",l},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+e*2+"px; height:"+e*2+'px"></v:oval>',k},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f);if(l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+d+","+e+" wa "+k.join(", ")+' x e">'+" </v:shape>",r)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c=d("#jqsshape"+a[0]),e="",f=b.length,g;for(g=0;g<f;g++)e+=this["_draw"+b[g].type].apply(this,b[g].args);c[0].outerHTML=e;for(g=1;g<a.length;g++)d("#jqsshape"+a[g]).remove()},insertAfterShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})})(document,Math);
(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      if(typeof draw === "string") {
        draw = draw.toUpperCase().replace(/-/g, "_");
        draw = Skycons.hasOwnProperty(draw) ? Skycons[draw] : null;
      }

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = draw;
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));

'use strict';
angular.module('app.chart.ctrls', []).controller('chartCtrl', [
  '$scope', function($scope) {
    $scope.easypiechart = {
      percent: 65,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: '#31C0BE',
        lineCap: 'round',
        size: 180,
        lineWidth: 5
      }
    };
    $scope.easypiechart2 = {
      percent: 35,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: '#66B5D7',
        lineCap: 'round',
        size: 180,
        lineWidth: 10
      }
    };
    $scope.easypiechart3 = {
      percent: 68,
      options: {
        animate: {
          duration: 1000,
          enabled: true
        },
        barColor: '#60CD9B',
        lineCap: 'square',
        size: 180,
        lineWidth: 20,
        scaleLength: 0
      }
    };
    $scope.gaugeChart1 = {
      data: {
        maxValue: 3000,
        animationSpeed: 40,
        val: 1375
      },
      options: {
        lines: 12,
        angle: 0,
        lineWidth: 0.47,
        pointer: {
          length: 0.6,
          strokeWidth: 0.03,
          color: '#000000'
        },
        limitMax: 'false',
        colorStart: '#A3C86D',
        colorStop: '#A3C86D',
        strokeColor: '#E0E0E0',
        generateGradient: true,
        percentColors: [[0.0, '#60CD9B'], [1.0, '#60CD9B']]
      }
    };
    $scope.gaugeChart2 = {
      data: {
        maxValue: 3000,
        animationSpeed: 45,
        val: 1200
      },
      options: {
        lines: 12,
        angle: 0,
        lineWidth: 0.47,
        pointer: {
          length: 0.6,
          strokeWidth: 0.03,
          color: '#464646'
        },
        limitMax: 'true',
        colorStart: '#7ACBEE',
        colorStop: '#7ACBEE',
        strokeColor: '#F1F1F1',
        generateGradient: true,
        percentColors: [[0.0, '#66B5D7'], [1.0, '#66B5D7']]
      }
    };
    return $scope.gaugeChart3 = {
      data: {
        maxValue: 3000,
        animationSpeed: 50,
        val: 1100
      },
      options: {
        lines: 12,
        angle: 0,
        lineWidth: 0.47,
        pointer: {
          length: 0.6,
          strokeWidth: 0.03,
          color: '#464646'
        },
        limitMax: 'true',
        colorStart: '#FF7857',
        colorStop: '#FF7857',
        strokeColor: '#F1F1F1',
        generateGradient: true,
        percentColors: [[0.0, '#E87352'], [1.0, '#E87352']]
      }
    };
  }
]).controller('morrisChartCtrl', [
  '$scope', function($scope) {
    $scope.mainData = [
      {
        month: '2013-01',
        xbox: 294000,
        will: 136000,
        playstation: 244000
      }, {
        month: '2013-02',
        xbox: 228000,
        will: 335000,
        playstation: 127000
      }, {
        month: '2013-03',
        xbox: 199000,
        will: 159000,
        playstation: 130000
      }, {
        month: '2013-04',
        xbox: 174000,
        will: 160000,
        playstation: 82000
      }, {
        month: '2013-05',
        xbox: 255000,
        will: 318000,
        playstation: 82000
      }, {
        month: '2013-06',
        xbox: 298400,
        will: 401800,
        playstation: 98600
      }, {
        month: '2013-07',
        xbox: 370000,
        will: 225000,
        playstation: 159000
      }, {
        month: '2013-08',
        xbox: 376700,
        will: 303600,
        playstation: 130000
      }, {
        month: '2013-09',
        xbox: 527800,
        will: 301000,
        playstation: 119400
      }
    ];
    $scope.simpleData = [
      {
        year: '2008',
        value: 20
      }, {
        year: '2009',
        value: 10
      }, {
        year: '2010',
        value: 5
      }, {
        year: '2011',
        value: 5
      }, {
        year: '2012',
        value: 20
      }, {
        year: '2013',
        value: 19
      }
    ];
    $scope.comboData = [
      {
        year: '2008',
        a: 20,
        b: 16,
        c: 12
      }, {
        year: '2009',
        a: 10,
        b: 22,
        c: 30
      }, {
        year: '2010',
        a: 5,
        b: 14,
        c: 20
      }, {
        year: '2011',
        a: 5,
        b: 12,
        c: 19
      }, {
        year: '2012',
        a: 20,
        b: 19,
        c: 13
      }, {
        year: '2013',
        a: 28,
        b: 22,
        c: 20
      }
    ];
    return $scope.donutData = [
      {
        label: "Download Sales",
        value: 12
      }, {
        label: "In-Store Sales",
        value: 30
      }, {
        label: "Mail-Order Sales",
        value: 20
      }, {
        label: "Online Sales",
        value: 19
      }
    ];
  }
]).controller('flotChartCtrl', [
  '$scope', function($scope) {
    var areaChart, barChart, lineChart1;
    lineChart1 = {};
    lineChart1.data1 = [[1, 15], [2, 20], [3, 14], [4, 10], [5, 10], [6, 20], [7, 28], [8, 26], [9, 22], [10, 23], [11, 24]];
    lineChart1.data2 = [[1, 9], [2, 15], [3, 17], [4, 21], [5, 16], [6, 15], [7, 13], [8, 15], [9, 29], [10, 21], [11, 29]];
    $scope.line1 = {};
    $scope.line1.data = [
      {
        data: lineChart1.data1,
        label: 'Product A'
      }, {
        data: lineChart1.data2,
        label: 'Product B',
        lines: {
          fill: false
        }
      }
    ];
    $scope.line1.options = {
      series: {
        lines: {
          show: true,
          fill: true,
          fillColor: {
            colors: [
              {
                opacity: 0
              }, {
                opacity: 0.3
              }
            ]
          }
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        }
      },
      colors: ["#31C0BE", "#8170CA", "#E87352"],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      xaxis: {
        ticks: [[1, 'Jan.'], [2, 'Feb.'], [3, 'Mar.'], [4, 'Apr.'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'Aug.'], [9, 'Sept.'], [10, 'Oct.'], [11, 'Nov.'], [12, 'Dec.']]
      }
    };
    areaChart = {};
    areaChart.data1 = [[2007, 15], [2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
    areaChart.data2 = [[2007, 15], [2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
    $scope.area = {};
    $scope.area.data = [
      {
        data: areaChart.data1,
        label: "Value A",
        lines: {
          fill: true
        }
      }, {
        data: areaChart.data2,
        label: "Value B",
        points: {
          show: true
        },
        yaxis: 2
      }
    ];
    $scope.area.options = {
      series: {
        lines: {
          show: true,
          fill: false
        },
        points: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: "#ffffff",
          symbol: "circle",
          radius: 5
        },
        shadowSize: 0
      },
      grid: {
        hoverable: true,
        clickable: true,
        tickColor: "#f9f9f9",
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      colors: ["#60CD9B", "#8170CA"],
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      xaxis: {
        mode: "time"
      },
      yaxes: [
        {}, {
          position: "right"
        }
      ]
    };
    barChart = {};
    barChart.data1 = [[2008, 20], [2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
    barChart.data2 = [[2008, 16], [2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
    barChart.data3 = [[2008, 12], [2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]];
    $scope.barChart = {};
    $scope.barChart.data = [
      {
        label: "Value A",
        data: barChart.data1
      }, {
        label: "Value B",
        data: barChart.data2
      }, {
        label: "Value C",
        data: barChart.data3
      }
    ];
    $scope.barChart.options = {
      series: {
        stack: true,
        bars: {
          show: true,
          fill: 1,
          barWidth: 0.3,
          align: "center",
          horizontal: false,
          order: 1
        }
      },
      grid: {
        hoverable: true,
        borderWidth: 1,
        borderColor: "#eeeeee"
      },
      tooltip: true,
      tooltipOpts: {
        defaultTheme: false
      },
      colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"]
    };
    $scope.pieChart = {};
    $scope.pieChart.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }
    ];
    $scope.pieChart.options = {
      series: {
        pie: {
          show: true
        }
      },
      legend: {
        show: true
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };
    $scope.donutChart = {};
    $scope.donutChart.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }
    ];
    $scope.donutChart.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.5
        }
      },
      legend: {
        show: true
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: ["#60CD9B", "#66B5D7", "#EEC95A", "#E87352"],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };
    $scope.donutChart2 = {};
    $scope.donutChart2.data = [
      {
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }, {
        label: "Direct Sales",
        data: 15
      }
    ];
    return $scope.donutChart2.options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.5
        }
      },
      legend: {
        show: false
      },
      grid: {
        hoverable: true,
        clickable: true
      },
      colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"],
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s",
        defaultTheme: false
      }
    };
  }
]).controller('flotChartCtrl.realtime', ['$scope', function($scope) {}]).controller('sparklineCtrl', [
  '$scope', function($scope) {
    $scope.demoData1 = {
      data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
      options: {
        type: 'line',
        lineColor: '#fff',
        highlightLineColor: '#fff',
        fillColor: '#60CD9B',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        width: '100%',
        height: '150px'
      }
    };
    $scope.simpleChart1 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'line',
        lineColor: '#31C0BE',
        fillColor: '#bce0df',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false
      }
    };
    $scope.simpleChart2 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'bar',
        barColor: '#31C0BE'
      }
    };
    $scope.simpleChart3 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'pie',
        sliceColors: ['#31C0BE', '#60CD9B', '#E87352', '#8170CA', '#EEC95A', '#60CD9B']
      }
    };
    $scope.tristateChart1 = {
      data: [1, 2, -3, -5, 3, 1, -4, 2],
      options: {
        type: 'tristate',
        posBarColor: '#95b75d',
        negBarColor: '#fa8564'
      }
    };
    $scope.largeChart1 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'line',
        lineColor: '#674E9E',
        highlightLineColor: '#7ACBEE',
        fillColor: '#927ED1',
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        width: '100%',
        height: '150px'
      }
    };
    $scope.largeChart2 = {
      data: [3, 1, 2, 3, 5, 3, 4, 2],
      options: {
        type: 'bar',
        barColor: '#31C0BE',
        barWidth: 10,
        width: '100%',
        height: '150px'
      }
    };
    return $scope.largeChart3 = {
      data: [3, 1, 2, 3, 5],
      options: {
        type: 'pie',
        sliceColors: ['#31C0BE', '#60CD9B', '#E87352', '#8170CA', '#EEC95A', '#60CD9B'],
        width: '150px',
        height: '150px'
      }
    };
  }
]);

'use strict';
angular.module('app.chart.directives', []).directive('gaugeChart', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function(scope, ele, attrs) {
        var data, gauge, options;
        data = scope.data;
        options = scope.options;
        gauge = new Gauge(ele[0]).setOptions(options);
        gauge.maxValue = data.maxValue;
        gauge.animationSpeed = data.animationSpeed;
        return gauge.set(data.val);
      }
    };
  }
]).directive('flotChart', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function(scope, ele, attrs) {
        var data, options, plot;
        data = scope.data;
        options = scope.options;
        return plot = $.plot(ele[0], data, options);
      }
    };
  }
]).directive('flotChartRealtime', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var data, getRandomData, plot, totalPoints, update, updateInterval;
        data = [];
        totalPoints = 300;
        getRandomData = function() {
          var i, prev, res, y;
          if (data.length > 0) {
            data = data.slice(1);
          }
          while (data.length < totalPoints) {
            prev = (data.length > 0 ? data[data.length - 1] : 50);
            y = prev + Math.random() * 10 - 5;
            if (y < 0) {
              y = 0;
            } else {
              if (y > 100) {
                y = 100;
              }
            }
            data.push(y);
          }
          res = [];
          i = 0;
          while (i < data.length) {
            res.push([i, data[i]]);
            ++i;
          }
          return res;
        };
        update = function() {
          plot.setData([getRandomData()]);
          plot.draw();
          setTimeout(update, updateInterval);
        };
        data = [];
        totalPoints = 300;
        updateInterval = 200;
        plot = $.plot(ele[0], [getRandomData()], {
          series: {
            lines: {
              show: true,
              fill: true
            },
            shadowSize: 0
          },
          yaxis: {
            min: 0,
            max: 100
          },
          xaxis: {
            show: false
          },
          grid: {
            hoverable: true,
            borderWidth: 1,
            borderColor: '#eeeeee'
          },
          colors: ["#5BDDDC"]
        });
        return update();
      }
    };
  }
]).directive('sparkline', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function(scope, ele, attrs) {
        var data, options, sparkResize, sparklineDraw;
        data = scope.data;
        options = scope.options;
        sparkResize = void 0;
        sparklineDraw = function() {
          return ele.sparkline(data, options);
        };
        $(window).resize(function(e) {
          clearTimeout(sparkResize);
          return sparkResize = setTimeout(sparklineDraw, 200);
        });
        return sparklineDraw();
      }
    };
  }
]).directive('morrisChart', [
  function() {
    return {
      restrict: 'A',
      scope: {
        data: '='
      },
      link: function(scope, ele, attrs) {
        var colors, data, func, options;
        data = scope.data;
        switch (attrs.type) {
          case 'line':
            if (attrs.lineColors === void 0 || attrs.lineColors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.lineColors);
            }
            options = {
              element: ele[0],
              data: data,
              xkey: attrs.xkey,
              ykeys: JSON.parse(attrs.ykeys),
              labels: JSON.parse(attrs.labels),
              lineWidth: attrs.lineWidth || 2,
              lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed']
            };
            return new Morris.Line(options);
          case 'area':
            if (attrs.lineColors === void 0 || attrs.lineColors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.lineColors);
            }
            options = {
              element: ele[0],
              data: data,
              xkey: attrs.xkey,
              ykeys: JSON.parse(attrs.ykeys),
              labels: JSON.parse(attrs.labels),
              lineWidth: attrs.lineWidth || 2,
              lineColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
              behaveLikeLine: attrs.behaveLikeLine || false,
              fillOpacity: attrs.fillOpacity || 'auto',
              pointSize: attrs.pointSize || 4
            };
            return new Morris.Area(options);
          case 'bar':
            if (attrs.barColors === void 0 || attrs.barColors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.barColors);
            }
            options = {
              element: ele[0],
              data: data,
              xkey: attrs.xkey,
              ykeys: JSON.parse(attrs.ykeys),
              labels: JSON.parse(attrs.labels),
              barColors: colors || ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
              stacked: attrs.stacked || null
            };
            return new Morris.Bar(options);
          case 'donut':
            if (attrs.colors === void 0 || attrs.colors === '') {
              colors = null;
            } else {
              colors = JSON.parse(attrs.colors);
            }
            options = {
              element: ele[0],
              data: data,
              colors: colors || ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135']
            };
            if (attrs.formatter) {
              func = new Function('y', 'data', attrs.formatter);
              options.formatter = func;
            }
            return new Morris.Donut(options);
        }
      }
    };
  }
]);

'use strict';
angular.module('app.map', []).directive('uiJqvmap', [
  function() {
    return {
      restrict: 'A',
      scope: {
        options: '='
      },
      link: function(scope, ele, attrs) {
        var options;
        options = scope.options;
        return ele.vectorMap(options);
      }
    };
  }
]).controller('jqvmapCtrl', [
  '$scope', function($scope) {
    var sample_data;
    sample_data = {
      "af": "16.63",
      "al": "11.58",
      "dz": "158.97",
      "ao": "85.81",
      "ag": "1.1",
      "ar": "351.02",
      "am": "8.83",
      "au": "1219.72",
      "at": "366.26",
      "az": "52.17",
      "bs": "7.54",
      "bh": "21.73",
      "bd": "105.4",
      "bb": "3.96",
      "by": "52.89",
      "be": "461.33",
      "bz": "1.43",
      "bj": "6.49",
      "bt": "1.4",
      "bo": "19.18",
      "ba": "16.2",
      "bw": "12.5",
      "br": "2023.53",
      "bn": "11.96",
      "bg": "44.84",
      "bf": "8.67",
      "bi": "1.47",
      "kh": "11.36",
      "cm": "21.88",
      "ca": "1563.66",
      "cv": "1.57",
      "cf": "2.11",
      "td": "7.59",
      "cl": "199.18",
      "cn": "5745.13",
      "co": "283.11",
      "km": "0.56",
      "cd": "12.6",
      "cg": "11.88",
      "cr": "35.02",
      "ci": "22.38",
      "hr": "59.92",
      "cy": "22.75",
      "cz": "195.23",
      "dk": "304.56",
      "dj": "1.14",
      "dm": "0.38",
      "do": "50.87",
      "ec": "61.49",
      "eg": "216.83",
      "sv": "21.8",
      "gq": "14.55",
      "er": "2.25",
      "ee": "19.22",
      "et": "30.94",
      "fj": "3.15",
      "fi": "231.98",
      "fr": "2555.44",
      "ga": "12.56",
      "gm": "1.04",
      "ge": "11.23",
      "de": "3305.9",
      "gh": "18.06",
      "gr": "305.01",
      "gd": "0.65",
      "gt": "40.77",
      "gn": "4.34",
      "gw": "0.83",
      "gy": "2.2",
      "ht": "6.5",
      "hn": "15.34",
      "hk": "226.49",
      "hu": "132.28",
      "is": "12.77",
      "in": "1430.02",
      "id": "695.06",
      "ir": "337.9",
      "iq": "84.14",
      "ie": "204.14",
      "il": "201.25",
      "it": "2036.69",
      "jm": "13.74",
      "jp": "5390.9",
      "jo": "27.13",
      "kz": "129.76",
      "ke": "32.42",
      "ki": "0.15",
      "kr": "986.26",
      "undefined": "5.73",
      "kw": "117.32",
      "kg": "4.44",
      "la": "6.34",
      "lv": "23.39",
      "lb": "39.15",
      "ls": "1.8",
      "lr": "0.98",
      "ly": "77.91",
      "lt": "35.73",
      "lu": "52.43",
      "mk": "9.58",
      "mg": "8.33",
      "mw": "5.04",
      "my": "218.95",
      "mv": "1.43",
      "ml": "9.08",
      "mt": "7.8",
      "mr": "3.49",
      "mu": "9.43",
      "mx": "1004.04",
      "md": "5.36",
      "mn": "5.81",
      "me": "3.88",
      "ma": "91.7",
      "mz": "10.21",
      "mm": "35.65",
      "na": "11.45",
      "np": "15.11",
      "nl": "770.31",
      "nz": "138",
      "ni": "6.38",
      "ne": "5.6",
      "ng": "206.66",
      "no": "413.51",
      "om": "53.78",
      "pk": "174.79",
      "pa": "27.2",
      "pg": "8.81",
      "py": "17.17",
      "pe": "153.55",
      "ph": "189.06",
      "pl": "438.88",
      "pt": "223.7",
      "qa": "126.52",
      "ro": "158.39",
      "ru": "1476.91",
      "rw": "5.69",
      "ws": "0.55",
      "st": "0.19",
      "sa": "434.44",
      "sn": "12.66",
      "rs": "38.92",
      "sc": "0.92",
      "sl": "1.9",
      "sg": "217.38",
      "sk": "86.26",
      "si": "46.44",
      "sb": "0.67",
      "za": "354.41",
      "es": "1374.78",
      "lk": "48.24",
      "kn": "0.56",
      "lc": "1",
      "vc": "0.58",
      "sd": "65.93",
      "sr": "3.3",
      "sz": "3.17",
      "se": "444.59",
      "ch": "522.44",
      "sy": "59.63",
      "tw": "426.98",
      "tj": "5.58",
      "tz": "22.43",
      "th": "312.61",
      "tl": "0.62",
      "tg": "3.07",
      "to": "0.3",
      "tt": "21.2",
      "tn": "43.86",
      "tr": "729.05",
      "tm": 0,
      "ug": "17.12",
      "ua": "136.56",
      "ae": "239.65",
      "gb": "2258.57",
      "us": "14624.18",
      "uy": "40.71",
      "uz": "37.72",
      "vu": "0.72",
      "ve": "285.21",
      "vn": "101.99",
      "ye": "30.02",
      "zm": "15.69",
      "zw": "5.57"
    };
    $scope.worldMap = {
      map: 'world_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: '#666666',
      enableZoom: true,
      showTooltip: true,
      values: sample_data,
      scaleColors: ['#C4FFFF', '#07C0BB'],
      normalizeFunction: 'polynomial'
    };
    $scope.venezuelaMap = {
      map: 'venezuela_en',
      backgroundColor: null,
      color: '#000063',
      hoverColor: '#B6AB0F',
      selectedColor: '#f4e30a',
      enableZoom: true,
      showTooltip: true,
      selectedRegion: 'ZU'
    };
    return $scope.europeMap = {
      map: 'europe_en',
      backgroundColor: null,
      color: '#ffffff',
      hoverOpacity: 0.7,
      hoverColor: '#999999',
      enableZoom: false,
      showTooltip: false,
      values: sample_data,
      scaleColors: ['#C4FFFF', '#07C0BB'],
      normalizeFunction: 'polynomial'
    };
  }
]);

'use strict';
angular.module('app.tables', []).controller('tableCtrl', [
  '$scope', '$filter', function($scope, $filter) {
    var init;
    $scope.stores = [
      {
        name: 'Nijiya Market',
        price: '$$',
        sales: 292,
        rating: 4.0
      }, {
        name: 'Eat On Monday Truck',
        price: '$',
        sales: 119,
        rating: 4.3
      }, {
        name: 'Tea Era',
        price: '$',
        sales: 874,
        rating: 4.0
      }, {
        name: 'Rogers Deli',
        price: '$',
        sales: 347,
        rating: 4.2
      }, {
        name: 'MoBowl',
        price: '$$$',
        sales: 24,
        rating: 4.6
      }, {
        name: 'The Milk Pail Market',
        price: '$',
        sales: 543,
        rating: 4.5
      }, {
        name: 'Nob Hill Foods',
        price: '$$',
        sales: 874,
        rating: 4.0
      }, {
        name: 'Scratch',
        price: '$$$',
        sales: 643,
        rating: 3.6
      }, {
        name: 'Gochi Japanese Fusion Tapas',
        price: '$$$',
        sales: 56,
        rating: 4.1
      }, {
        name: 'Cost Plus World Market',
        price: '$$',
        sales: 79,
        rating: 4.0
      }, {
        name: 'Bumble Bee Health Foods',
        price: '$$',
        sales: 43,
        rating: 4.3
      }, {
        name: 'Costco',
        price: '$$',
        sales: 219,
        rating: 3.6
      }, {
        name: 'Red Rock Coffee Co',
        price: '$',
        sales: 765,
        rating: 4.1
      }, {
        name: '99 Ranch Market',
        price: '$',
        sales: 181,
        rating: 3.4
      }, {
        name: 'Mi Pueblo Food Center',
        price: '$',
        sales: 78,
        rating: 4.0
      }, {
        name: 'Cucina Venti',
        price: '$$',
        sales: 163,
        rating: 3.3
      }, {
        name: 'Sufi Coffee Shop',
        price: '$',
        sales: 113,
        rating: 3.3
      }, {
        name: 'Dana Street Roasting',
        price: '$',
        sales: 316,
        rating: 4.1
      }, {
        name: 'Pearl Cafe',
        price: '$',
        sales: 173,
        rating: 3.4
      }, {
        name: 'Posh Bagel',
        price: '$',
        sales: 140,
        rating: 4.0
      }, {
        name: 'Artisan Wine Depot',
        price: '$$',
        sales: 26,
        rating: 4.1
      }, {
        name: 'Hong Kong Chinese Bakery',
        price: '$',
        sales: 182,
        rating: 3.4
      }, {
        name: 'Starbucks',
        price: '$$',
        sales: 97,
        rating: 3.7
      }, {
        name: 'Tapioca Express',
        price: '$',
        sales: 301,
        rating: 3.0
      }, {
        name: 'House of Bagels',
        price: '$',
        sales: 82,
        rating: 4.4
      }
    ];
    $scope.searchKeywords = '';
    $scope.filteredStores = [];
    $scope.row = '';
    $scope.select = function(page) {
      var end, start;
      start = (page - 1) * $scope.numPerPage;
      end = start + $scope.numPerPage;
      return $scope.currentPageStores = $scope.filteredStores.slice(start, end);
    };
    $scope.onFilterChange = function() {
      $scope.select(1);
      $scope.currentPage = 1;
      return $scope.row = '';
    };
    $scope.onNumPerPageChange = function() {
      $scope.select(1);
      return $scope.currentPage = 1;
    };
    $scope.onOrderChange = function() {
      $scope.select(1);
      return $scope.currentPage = 1;
    };
    $scope.search = function() {
      $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
      return $scope.onFilterChange();
    };
    $scope.order = function(rowName) {
      if ($scope.row === rowName) {
        return;
      }
      $scope.row = rowName;
      $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
      return $scope.onOrderChange();
    };
    $scope.numPerPageOpt = [3, 5, 10, 20];
    $scope.numPerPage = $scope.numPerPageOpt[2];
    $scope.currentPage = 1;
    $scope.currentPageStores = [];
    init = function() {
      $scope.search();
      return $scope.select($scope.currentPage);
    };
    return init();
  }
]);

'use strict';
angular.module('app.task', []).factory('taskStorage', function() {
  var DEMO_TASKS, STORAGE_ID;
  STORAGE_ID = 'tasks';
  DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Build a snowman!", "completed": false}, {"title": "Tango! Tango! Tango!", "completed": false}, {"title": "Play games with friends", "completed": false}, {"title": "Shopping", "completed": false}, {"title": "One more dance", "completed": false}, {"title": "Try Google glass", "completed": false} ]';
  return {
    get: function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
    },
    put: function(tasks) {
      return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
    }
  };
}).directive('taskFocus', [
  '$timeout', function($timeout) {
    return {
      link: function(scope, ele, attrs) {
        return scope.$watch(attrs.taskFocus, function(newVal) {
          if (newVal) {
            return $timeout(function() {
              return ele[0].focus();
            }, 0, false);
          }
        });
      }
    };
  }
]).controller('taskCtrl', [
  '$scope', 'taskStorage', 'filterFilter', '$rootScope', 'logger', function($scope, taskStorage, filterFilter, $rootScope, logger) {
    var tasks;
    tasks = $scope.tasks = taskStorage.get();
    $scope.newTask = '';
    $scope.remainingCount = filterFilter(tasks, {
      completed: false
    }).length;
    $scope.editedTask = null;
    $scope.statusFilter = {
      completed: false
    };
    $scope.filter = function(filter) {
      switch (filter) {
        case 'all':
          return $scope.statusFilter = '';
        case 'active':
          return $scope.statusFilter = {
            completed: false
          };
        case 'completed':
          return $scope.statusFilter = {
            completed: true
          };
      }
    };
    $scope.add = function() {
      var newTask;
      newTask = $scope.newTask.trim();
      if (newTask.length === 0) {
        return;
      }
      tasks.push({
        title: newTask,
        completed: false
      });
      logger.logSuccess('New task: "' + newTask + '" added');
      taskStorage.put(tasks);
      $scope.newTask = '';
      return $scope.remainingCount++;
    };
    $scope.edit = function(task) {
      return $scope.editedTask = task;
    };
    $scope.doneEditing = function(task) {
      $scope.editedTask = null;
      task.title = task.title.trim();
      if (!task.title) {
        $scope.remove(task);
      } else {
        logger.log('Task updated');
      }
      return taskStorage.put(tasks);
    };
    $scope.remove = function(task) {
      var index;
      $scope.remainingCount -= task.completed ? 0 : 1;
      index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
      taskStorage.put(tasks);
      return logger.logError('Task removed');
    };
    $scope.completed = function(task) {
      $scope.remainingCount += task.completed ? -1 : 1;
      taskStorage.put(tasks);
      if (task.completed) {
        if ($scope.remainingCount > 0) {
          if ($scope.remainingCount === 1) {
            return logger.log('Almost there! Only ' + $scope.remainingCount + ' task left');
          } else {
            return logger.log('Good job! Only ' + $scope.remainingCount + ' tasks left');
          }
        } else {
          return logger.logSuccess('Congrats! All done :)');
        }
      }
    };
    $scope.clearCompleted = function() {
      $scope.tasks = tasks = tasks.filter(function(val) {
        return !val.completed;
      });
      return taskStorage.put(tasks);
    };
    $scope.markAll = function(completed) {
      tasks.forEach(function(task) {
        return task.completed = completed;
      });
      $scope.remainingCount = completed ? 0 : tasks.length;
      taskStorage.put(tasks);
      if (completed) {
        return logger.logSuccess('Congrats! All done :)');
      }
    };
    $scope.$watch('remainingCount == 0', function(val) {
      return $scope.allChecked = val;
    });
    return $scope.$watch('remainingCount', function(newVal, oldVal) {
      return $rootScope.$broadcast('taskRemaining:changed', newVal);
    });
  }
]);

'use strict';
angular.module('app.ui.form.ctrls', []).controller('TagsDemoCtrl', [
  '$scope', function($scope) {
    return $scope.tags = ['foo', 'bar'];
  }
]).controller('DatepickerDemoCtrl', [
  '$scope', function($scope) {
    $scope.today = function() {
      return $scope.dt = new Date();
    };
    $scope.today();
    $scope.showWeeks = true;
    $scope.toggleWeeks = function() {
      return $scope.showWeeks = !$scope.showWeeks;
    };
    $scope.clear = function() {
      return $scope.dt = null;
    };
    $scope.disabled = function(date, mode) {
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };
    $scope.toggleMin = function() {
      var ref;
      return $scope.minDate = (ref = $scope.minDate) != null ? ref : {
        "null": new Date()
      };
    };
    $scope.toggleMin();
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      return $scope.opened = true;
    };
    $scope.dateOptions = {
      'year-format': "'yy'",
      'starting-day': 1
    };
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
    return $scope.format = $scope.formats[0];
  }
]).controller('TimepickerDemoCtrl', [
  '$scope', function($scope) {
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };
    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      return $scope.ismeridian = !$scope.ismeridian;
    };
    $scope.update = function() {
      var d;
      d = new Date();
      d.setHours(14);
      d.setMinutes(0);
      return $scope.mytime = d;
    };
    $scope.changed = function() {
      return console.log('Time changed to: ' + $scope.mytime);
    };
    return $scope.clear = function() {
      return $scope.mytime = null;
    };
  }
]).controller('TypeaheadCtrl', [
  '$scope', function($scope) {
    $scope.selected = void 0;
    return $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  }
]).controller('RatingDemoCtrl', [
  '$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;
    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      return $scope.percent = 100 * (value / $scope.max);
    };
    return $scope.ratingStates = [
      {
        stateOn: 'glyphicon-ok-sign',
        stateOff: 'glyphicon-ok-circle'
      }, {
        stateOn: 'glyphicon-star',
        stateOff: 'glyphicon-star-empty'
      }, {
        stateOn: 'glyphicon-heart',
        stateOff: 'glyphicon-ban-circle'
      }, {
        stateOn: 'glyphicon-heart'
      }, {
        stateOff: 'glyphicon-off'
      }
    ];
  }
]);

angular.module('app.ui.form.directives', []).directive('uiRangeSlider', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.slider();
      }
    };
  }
]).directive('uiFileUpload', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        return ele.bootstrapFileInput();
      }
    };
  }
]).directive('uiSpinner', [
  function() {
    return {
      restrict: 'A',
      compile: function(ele, attrs) {
        ele.addClass('ui-spinner');
        return {
          post: function() {
            return ele.spinner();
          }
        };
      }
    };
  }
]).directive('uiWizardForm', [
  function() {
    return {
      link: function(scope, ele) {
        return ele.steps();
      }
    };
  }
]);

'use strict';
angular.module('app.form.validation', []).controller('wizardFormCtrl', [
  '$scope', function($scope) {
    $scope.wizard = {
      firstName: 'some name',
      lastName: '',
      email: '',
      password: '',
      age: '',
      address: ''
    };
    $scope.isValidateStep1 = function() {
      console.log($scope.wizard_step1);
      console.log($scope.wizard.firstName !== '');
      console.log($scope.wizard.lastName === '');
      return console.log($scope.wizard.firstName !== '' && $scope.wizard.lastName !== '');
    };
    return $scope.finishedWizard = function() {
      return console.log('yoo');
    };
  }
]).controller('formConstraintsCtrl', [
  '$scope', function($scope) {
    var original;
    $scope.form = {
      required: '',
      minlength: '',
      maxlength: '',
      length_rage: '',
      type_something: '',
      confirm_type: '',
      foo: '',
      email: '',
      url: '',
      num: '',
      minVal: '',
      maxVal: '',
      valRange: '',
      pattern: ''
    };
    original = angular.copy($scope.form);
    $scope.revert = function() {
      $scope.form = angular.copy(original);
      return $scope.form_constraints.$setPristine();
    };
    $scope.canRevert = function() {
      return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
    };
    return $scope.canSubmit = function() {
      return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
    };
  }
]).controller('signinCtrl', [
  '$scope', function($scope) {
    var original;
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.showInfoOnSubmit = false;
    original = angular.copy($scope.user);
    $scope.revert = function() {
      $scope.user = angular.copy(original);
      return $scope.form_signin.$setPristine();
    };
    $scope.canRevert = function() {
      return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
    };
    $scope.canSubmit = function() {
      return $scope.form_signin.$valid && !angular.equals($scope.user, original);
    };
    return $scope.submitForm = function() {
      $scope.showInfoOnSubmit = true;
      return $scope.revert();
    };
  }
]).controller('signupCtrl', [
  '$scope', function($scope) {
    var original;
    $scope.user = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: ''
    };
    $scope.showInfoOnSubmit = false;
    original = angular.copy($scope.user);
    $scope.revert = function() {
      $scope.user = angular.copy(original);
      $scope.form_signup.$setPristine();
      return $scope.form_signup.confirmPassword.$setPristine();
    };
    $scope.canRevert = function() {
      return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
    };
    $scope.canSubmit = function() {
      return $scope.form_signup.$valid && !angular.equals($scope.user, original);
    };
    return $scope.submitForm = function() {
      $scope.showInfoOnSubmit = true;
      return $scope.revert();
    };
  }
]).directive('validateEquals', [
  function() {
    return {
      require: 'ngModel',
      link: function(scope, ele, attrs, ngModelCtrl) {
        var validateEqual;
        validateEqual = function(value) {
          var valid;
          valid = value === scope.$eval(attrs.validateEquals);
          ngModelCtrl.$setValidity('equal', valid);
          return typeof valid === "function" ? valid({
            value: void 0
          }) : void 0;
        };
        ngModelCtrl.$parsers.push(validateEqual);
        ngModelCtrl.$formatters.push(validateEqual);
        return scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
          if (newValue !== oldValue) {
            return ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue);
          }
        });
      }
    };
  }
]);

'use strict';
angular.module('app.page.ctrls', []).controller('invoiceCtrl', [
  '$scope', '$window', function($scope, $window) {
    return $scope.printInvoice = function() {
      var originalContents, popupWin, printContents;
      printContents = document.getElementById('invoice').innerHTML;
      originalContents = document.body.innerHTML;
      popupWin = window.open();
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
      return popupWin.document.close();
    };
  }
]);

'use strict';
angular.module('app.ui.ctrls', []).controller('NotifyCtrl', [
  '$scope', 'logger', function($scope, logger) {
    return $scope.notify = function(type) {
      switch (type) {
        case 'info':
          return logger.log("Heads up! This alert needs your attention, but it's not super important.");
        case 'success':
          return logger.logSuccess("Well done! You successfully read this important alert message.");
        case 'warning':
          return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
        case 'error':
          return logger.logError("Oh snap! Change a few things up and try submitting again.");
      }
    };
  }
]).controller('AlertDemoCtrl', [
  '$scope', function($scope) {
    $scope.alerts = [
      {
        type: 'success',
        msg: 'Well done! You successfully read this important alert message.'
      }, {
        type: 'info',
        msg: 'Heads up! This alert needs your attention, but it is not super important.'
      }, {
        type: 'warning',
        msg: "Warning! Best check yo self, you're not looking too good."
      }, {
        type: 'danger',
        msg: 'Oh snap! Change a few things up and try submitting again.'
      }
    ];
    $scope.addAlert = function() {
      var num, type;
      num = Math.ceil(Math.random() * 4);
      type = void 0;
      switch (num) {
        case 0:
          type = 'info';
          break;
        case 1:
          type = 'success';
          break;
        case 2:
          type = 'info';
          break;
        case 3:
          type = 'warning';
          break;
        case 4:
          type = 'danger';
      }
      return $scope.alerts.push({
        type: type,
        msg: "Another alert!"
      });
    };
    return $scope.closeAlert = function(index) {
      return $scope.alerts.splice(index, 1);
    };
  }
]).controller('ProgressDemoCtrl', [
  '$scope', function($scope) {
    $scope.max = 200;
    $scope.random = function() {
      var type, value;
      value = Math.floor((Math.random() * 100) + 10);
      type = void 0;
      if (value < 25) {
        type = "success";
      } else if (value < 50) {
        type = "info";
      } else if (value < 75) {
        type = "warning";
      } else {
        type = "danger";
      }
      $scope.showWarning = type === "danger" || type === "warning";
      $scope.dynamic = value;
      $scope.type = type;
    };
    return $scope.random();
  }
]).controller('AccordionDemoCtrl', [
  '$scope', function($scope) {
    $scope.oneAtATime = true;
    $scope.groups = [
      {
        title: "Dynamic Group Header - 1",
        content: "Dynamic Group Body - 1"
      }, {
        title: "Dynamic Group Header - 2",
        content: "Dynamic Group Body - 2"
      }, {
        title: "Dynamic Group Header - 3",
        content: "Dynamic Group Body - 3"
      }
    ];
    $scope.items = ["Item 1", "Item 2", "Item 3"];
    $scope.status = {
      isFirstOpen: true,
      isFirstOpen1: true,
      isFirstOpen2: true,
      isFirstOpen3: true,
      isFirstOpen4: true,
      isFirstOpen5: true,
      isFirstOpen6: true
    };
    $scope.addItem = function() {
      var newItemNo;
      newItemNo = $scope.items.length + 1;
      $scope.items.push("Item " + newItemNo);
    };
  }
]).controller('CollapseDemoCtrl', [
  '$scope', function($scope) {
    return $scope.isCollapsed = false;
  }
]).controller('ModalDemoCtrl', [
  '$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ["item1", "item2", "item3"];
    $scope.open = function() {
      var modalInstance;
      modalInstance = $modal.open({
        templateUrl: "myModalContent.html",
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });
      modalInstance.result.then((function(selectedItem) {
        $scope.selected = selectedItem;
      }), function() {
        $log.info("Modal dismissed at: " + new Date());
      });
    };
  }
]).controller('ModalInstanceCtrl', [
  '$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };
    $scope.ok = function() {
      $modalInstance.close($scope.selected.item);
    };
    $scope.cancel = function() {
      $modalInstance.dismiss("cancel");
    };
  }
]).controller('PaginationDemoCtrl', [
  '$scope', function($scope) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
    $scope.maxSize = 5;
    $scope.setPage = function(pageNo) {
      return $scope.currentPage = pageNo;
    };
    $scope.bigTotalItems = 175;
    return $scope.bigCurrentPage = 1;
  }
]).controller('TabsDemoCtrl', [
  '$scope', function($scope) {
    $scope.tabs = [
      {
        title: "Dynamic Title 1",
        content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
      }, {
        title: "Disabled",
        content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
        disabled: true
      }
    ];
    return $scope.navType = "pills";
  }
]).controller('TreeDemoCtrl', [
  '$scope', function($scope) {
    $scope.list = [
      {
        id: 1,
        title: "Item 1",
        items: []
      }, {
        id: 2,
        title: "Item 2",
        items: [
          {
            id: 21,
            title: "Item 2.1",
            items: [
              {
                id: 211,
                title: "Item 2.1.1",
                items: []
              }, {
                id: 212,
                title: "Item 2.1.2",
                items: []
              }
            ]
          }, {
            id: 22,
            title: "Item 2.2",
            items: [
              {
                id: 221,
                title: "Item 2.2.1",
                items: []
              }, {
                id: 222,
                title: "Item 2.2.2",
                items: []
              }
            ]
          }
        ]
      }, {
        id: 3,
        title: "Item 3",
        items: []
      }, {
        id: 4,
        title: "Item 4",
        items: [
          {
            id: 41,
            title: "Item 4.1",
            items: []
          }
        ]
      }, {
        id: 5,
        title: "Item 5",
        items: []
      }, {
        id: 6,
        title: "Item 6",
        items: []
      }, {
        id: 7,
        title: "Item 7",
        items: []
      }
    ];
    $scope.selectedItem = {};
    $scope.options = {};
    $scope.remove = function(scope) {
      scope.remove();
    };
    $scope.toggle = function(scope) {
      scope.toggle();
    };
    return $scope.newSubItem = function(scope) {
      var nodeData;
      nodeData = scope.$modelValue;
      nodeData.items.push({
        id: nodeData.id * 10 + nodeData.items.length,
        title: nodeData.title + "." + (nodeData.items.length + 1),
        items: []
      });
    };
  }
]).controller('MapDemoCtrl', [
  '$scope', '$http', '$interval', function($scope, $http, $interval) {
    var i, markers;
    markers = [];
    i = 0;
    while (i < 8) {
      markers[i] = new google.maps.Marker({
        title: "Marker: " + i
      });
      i++;
    }
    $scope.GenerateMapMarkers = function() {
      var d, lat, lng, loc, numMarkers;
      d = new Date();
      $scope.date = d.toLocaleString();
      numMarkers = Math.floor(Math.random() * 4) + 4;
      i = 0;
      while (i < numMarkers) {
        lat = 43.6600000 + (Math.random() / 100);
        lng = -79.4103000 + (Math.random() / 100);
        loc = new google.maps.LatLng(lat, lng);
        markers[i].setPosition(loc);
        markers[i].setMap($scope.map);
        i++;
      }
    };
    $interval($scope.GenerateMapMarkers, 2000);
  }
]);

'use strict';
angular.module('app.ui.directives', []).directive('uiTime', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele) {
        var checkTime, startTime;
        startTime = function() {
          var h, m, s, t, time, today;
          today = new Date();
          h = today.getHours();
          m = today.getMinutes();
          s = today.getSeconds();
          m = checkTime(m);
          s = checkTime(s);
          time = h + ":" + m + ":" + s;
          ele.html(time);
          return t = setTimeout(startTime, 500);
        };
        checkTime = function(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        };
        return startTime();
      }
    };
  }
]).directive('uiWeather', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var color, icon, skycons;
        color = attrs.color;
        icon = Skycons[attrs.icon];
        skycons = new Skycons({
          "color": color,
          "resizeClear": true
        });
        skycons.add(ele[0], icon);
        return skycons.play();
      }
    };
  }
]);

'use strict';
angular.module('app.ui.services', []).factory('logger', [
  function() {
    var logIt;
    toastr.options = {
      "closeButton": true,
      "positionClass": "toast-bottom-right",
      "timeOut": "3000"
    };
    logIt = function(message, type) {
      return toastr[type](message);
    };
    return {
      log: function(message) {
        logIt(message, 'info');
      },
      logWarning: function(message) {
        logIt(message, 'warning');
      },
      logSuccess: function(message) {
        logIt(message, 'success');
      },
      logError: function(message) {
        logIt(message, 'error');
      }
    };
  }
]);

angular.module('app.directives', []).directive('imgHolder', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return Holder.run({
          images: ele[0]
        });
      }
    };
  }
]).directive('customBackground', function() {
  return {
    restrict: "A",
    controller: [
      '$scope', '$element', '$location', function($scope, $element, $location) {
        var addBg, path;
        path = function() {
          return $location.path();
        };
        addBg = function(path) {
          $element.removeClass('body-home body-special body-tasks body-lock');
          switch (path) {
            case '/':
              return $element.addClass('body-home');
            case '/404':
            case '/pages/500':
            case '/pages/signin':
            case '/pages/signup':
            case '/pages/forgot':
              return $element.addClass('body-special');
            case '/pages/lock-screen':
              return $element.addClass('body-special body-lock');
            case '/tasks':
              return $element.addClass('body-tasks');
          }
        };
        addBg($location.path());
        return $scope.$watch(path, function(newVal, oldVal) {
          if (newVal === oldVal) {
            return;
          }
          return addBg($location.path());
        });
      }
    ]
  };
}).directive('uiColorSwitch', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return ele.find('.color-option').on('click', function(event) {
          var $this, hrefUrl, style;
          $this = $(this);
          hrefUrl = void 0;
          style = $this.data('style');
          if (style === 'loulou') {
            hrefUrl = 'styles/main.css';
            $('link[href^="styles/main"]').attr('href', hrefUrl);
          } else if (style) {
            style = '-' + style;
            hrefUrl = 'styles/main' + style + '.css';
            $('link[href^="styles/main"]').attr('href', hrefUrl);
          } else {
            return false;
          }
          return event.preventDefault();
        });
      }
    };
  }
]).directive('toggleMinNav', [
  '$rootScope', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var $content, $nav, $window, Timer, app, updateClass;
        app = $('#app');
        $window = $(window);
        $nav = $('#nav-container');
        $content = $('#content');
        ele.on('click', function(e) {
          if (app.hasClass('nav-min')) {
            app.removeClass('nav-min');
          } else {
            app.addClass('nav-min');
            $rootScope.$broadcast('minNav:enabled');
          }
          return e.preventDefault();
        });
        Timer = void 0;
        updateClass = function() {
          var width;
          width = $window.width();
          if (width < 768) {
            return app.removeClass('nav-min');
          }
        };
        return $window.resize(function() {
          var t;
          clearTimeout(t);
          return t = setTimeout(updateClass, 300);
        });
      }
    };
  }
]).directive('collapseNav', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        var $a, $aRest, $lists, $listsRest, app;
        $lists = ele.find('ul').parent('li');
        $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
        $a = $lists.children('a');
        $listsRest = ele.children('li').not($lists);
        $aRest = $listsRest.children('a');
        app = $('#app');
        $a.on('click', function(event) {
          var $parent, $this;
          if (app.hasClass('nav-min')) {
            return false;
          }
          $this = $(this);
          $parent = $this.parent('li');
          $lists.not($parent).removeClass('open').find('ul').slideUp();
          $parent.toggleClass('open').find('ul').stop().slideToggle();
          return event.preventDefault();
        });
        $aRest.on('click', function(event) {
          return $lists.removeClass('open').find('ul').slideUp();
        });
        return scope.$on('minNav:enabled', function(event) {
          return $lists.removeClass('open').find('ul').slideUp();
        });
      }
    };
  }
]).directive('highlightActive', [
  function() {
    return {
      restrict: "A",
      controller: [
        '$scope', '$element', '$attrs', '$location', function($scope, $element, $attrs, $location) {
          var highlightActive, links, path;
          links = $element.find('a');
          path = function() {
            return $location.path();
          };
          highlightActive = function(links, path) {
            path = '#' + path;
            return angular.forEach(links, function(link) {
              var $li, $link, href;
              $link = angular.element(link);
              $li = $link.parent('li');
              href = $link.attr('href');
              if ($li.hasClass('active')) {
                $li.removeClass('active');
              }
              if (path.indexOf(href) === 0) {
                return $li.addClass('active');
              }
            });
          };
          highlightActive(links, $location.path());
          return $scope.$watch(path, function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            return highlightActive(links, $location.path());
          });
        }
      ]
    };
  }
]).directive('toggleOffCanvas', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return ele.on('click', function() {
          return $('#app').toggleClass('on-canvas');
        });
      }
    };
  }
]).directive('slimScroll', [
  function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        return ele.slimScroll({
          height: attrs.scrollHeight || '100%'
        });
      }
    };
  }
]).directive('goBack', [
  function() {
    return {
      restrict: "A",
      controller: [
        '$scope', '$element', '$window', function($scope, $element, $window) {
          return $element.on('click', function() {
            return $window.history.back();
          });
        }
      ]
    };
  }
]);

'use strict';
angular.module('app.localization', []).factory('localize', [
  '$http', '$rootScope', '$window', function($http, $rootScope, $window) {
    var localize;
    localize = {
      language: '',
      url: void 0,
      resourceFileLoaded: false,
      successCallback: function(data) {
        localize.dictionary = data;
        localize.resourceFileLoaded = true;
        return $rootScope.$broadcast('localizeResourcesUpdated');
      },
      setLanguage: function(value) {
        localize.language = value.toLowerCase().split("-")[0];
        return localize.initLocalizedResources();
      },
      setUrl: function(value) {
        localize.url = value;
        return localize.initLocalizedResources();
      },
      buildUrl: function() {
        if (!localize.language) {
          localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase();
          localize.language = localize.language.split("-")[0];
        }
        return 'i18n/resources-locale_' + localize.language + '.js';
      },
      initLocalizedResources: function() {
        var url;
        url = localize.url || localize.buildUrl();
        return $http({
          method: "GET",
          url: url,
          cache: false
        }).success(localize.successCallback).error(function() {
          return $rootScope.$broadcast('localizeResourcesUpdated');
        });
      },
      getLocalizedString: function(value) {
        var result, valueLowerCase;
        result = void 0;
        if (localize.dictionary && value) {
          valueLowerCase = value.toLowerCase();
          if (localize.dictionary[valueLowerCase] === '') {
            result = value;
          } else {
            result = localize.dictionary[valueLowerCase];
          }
        } else {
          result = value;
        }
        return result;
      }
    };
    return localize;
  }
]).directive('i18n', [
  'localize', function(localize) {
    var i18nDirective;
    i18nDirective = {
      restrict: "EA",
      updateText: function(ele, input, placeholder) {
        var result;
        result = void 0;
        if (input === 'i18n-placeholder') {
          result = localize.getLocalizedString(placeholder);
          return ele.attr('placeholder', result);
        } else if (input.length >= 1) {
          result = localize.getLocalizedString(input);
          return ele.text(result);
        }
      },
      link: function(scope, ele, attrs) {
        scope.$on('localizeResourcesUpdated', function() {
          return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder);
        });
        return attrs.$observe('i18n', function(value) {
          return i18nDirective.updateText(ele, value, attrs.placeholder);
        });
      }
    };
    return i18nDirective;
  }
]).controller('LangCtrl', [
  '$scope', 'localize', function($scope, localize) {
    $scope.lang = 'English';
    $scope.setLang = function(lang) {
      switch (lang) {
        case 'English':
          localize.setLanguage('EN-US');
          break;
        case 'Español':
          localize.setLanguage('ES-ES');
          break;
        case '日本語':
          localize.setLanguage('JA-JP');
          break;
        case '中文':
          localize.setLanguage('ZH-TW');
          break;
        case 'Deutsch':
          localize.setLanguage('DE-DE');
          break;
        case 'français':
          localize.setLanguage('FR-FR');
          break;
        case 'Italiano':
          localize.setLanguage('IT-IT');
          break;
        case 'Portugal':
          localize.setLanguage('PT-BR');
          break;
        case 'Русский язык':
          localize.setLanguage('RU-RU');
          break;
        case '한국어':
          localize.setLanguage('KO-KR');
      }
      return $scope.lang = lang;
    };
    return $scope.getFlag = function() {
      var lang;
      lang = $scope.lang;
      switch (lang) {
        case 'English':
          return 'flags-american';
        case 'Español':
          return 'flags-spain';
        case '日本語':
          return 'flags-japan';
        case '中文':
          return 'flags-china';
        case 'Deutsch':
          return 'flags-germany';
        case 'français':
          return 'flags-france';
        case 'Italiano':
          return 'flags-italy';
        case 'Portugal':
          return 'flags-portugal';
        case 'Русский язык':
          return 'flags-russia';
        case '한국어':
          return 'flags-korea';
      }
    };
  }
]);

'use strict';
angular.module('app.controllers', []).controller('AppCtrl', [
  '$scope', '$location', function($scope, $location) {
    $scope.isSpecificPage = function() {
      var path;
      path = $location.path();
      return _.contains(['/404', '/pages/500', '/pages/login', '/pages/signin', '/pages/signin1', '/pages/signin2', '/pages/signup', '/pages/signup1', '/pages/signup2', '/pages/forgot', '/pages/lock-screen'], path);
    };
    return $scope.main = {
      brand: 'Intranet',
      name: 'Andres David Jimenez',
      logo: 'img/logo.png'
    };
  }
]).controller('NavCtrl', [
  '$scope', 'taskStorage', 'filterFilter', function($scope, taskStorage, filterFilter) {
    var tasks;
    tasks = $scope.tasks = taskStorage.get();
    $scope.taskRemainingCount = filterFilter(tasks, {
      completed: false
    }).length;
    return $scope.$on('taskRemaining:changed', function(event, count) {
      return $scope.taskRemainingCount = count;
    });
  }
]).controller('DashboardCtrl', ['$scope', function($scope) {}]).controller('ModalAgendaCtrl', [
  '$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ["item1", "item2", "item3"];
    $scope.contacts = [];
    $scope.saveContact = function() {
      var i;
      if ($scope.newcontact.id === null) {
        $scope.newcontact.id = uid++;
        $scope.contacts.push($scope.newcontact);
      } else {
        for (i in $scope.contacts) {
          if ($scope.contacts[i].id === $scope.newcontact.id) {
            $scope.contacts[i] = $scope.newcontact;
          }
        }
      }
      $scope.newcontact = {};
    };
    $scope["delete"] = function(id) {
      var i;
      for (i in $scope.contacts) {
        if ($scope.contacts[i].id === id) {
          $scope.contacts.splice(i, 1);
          $scope.newcontact = {};
        }
      }
    };
    $scope.edit = function(id) {
      var i;
      for (i in $scope.contacts) {
        if ($scope.contacts[i].id === id) {
          $scope.newcontact = angular.copy($scope.contacts[i]);
        }
      }
    };
    $scope.open = function() {
      var modalInstance;
      modalInstance = $modal.open({
        templateUrl: "myModalContent.html",
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function() {
            return $scope.items;
          }
        }
      });
      modalInstance.result.then((function(selectedItem) {
        $scope.selected = selectedItem;
      }), function() {
        $log.info("Modal dismissed at: " + new Date());
      });
    };
  }
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImpxdWVyeS5zcGFya2xpbmUubWluLmpzIiwic2t5Y29ucy5qcyIsIkNoYXJ0L0NoYXJ0Q3RybC5qcyIsIkNoYXJ0L0NoYXJ0RGlyZWN0aXZlLmpzIiwiTWFwL01hcC5qcyIsIlRhYmxlL1RhYmxlQ3RybC5qcyIsIlRhc2svVGFzay5qcyIsIkZvcm0vRm9ybUN0cmwuanMiLCJGb3JtL0Zvcm1EaXJlY3RpdmUuanMiLCJGb3JtL0Zvcm1WYWxpZGF0aW9uLmpzIiwiUGFnZS9QYWdlQ3RybC5qcyIsIlVJL1VJQ3RybC5qcyIsIlVJL1VJRGlyZWN0aXZlLmpzIiwiVUkvVUlTZXJ2aWNlLmpzIiwic2hhcmVkL2RpcmVjdGl2ZXMuanMiLCJzaGFyZWQvbG9jYWxpemUuanMiLCJzaGFyZWQvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3Z0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM2tCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnLCAnbmdBbmltYXRlJywgJ3VpLmJvb3RzdHJhcCcsICdlYXN5cGllY2hhcnQnLCAnbWdvLWFuZ3VsYXItd2l6YXJkJywgJ3RleHRBbmd1bGFyJywgJ3VpLnRyZWUnLCAnbmdNYXAnLCAnbmdUYWdzSW5wdXQnLCAnYXBwLnVpLmN0cmxzJywgJ2FwcC51aS5kaXJlY3RpdmVzJywgJ2FwcC51aS5zZXJ2aWNlcycsICdhcHAuY29udHJvbGxlcnMnLCAnYXBwLmRpcmVjdGl2ZXMnLCAnYXBwLmZvcm0udmFsaWRhdGlvbicsICdhcHAudWkuZm9ybS5jdHJscycsICdhcHAudWkuZm9ybS5kaXJlY3RpdmVzJywgJ2FwcC50YWJsZXMnLCAnYXBwLm1hcCcsICdhcHAudGFzaycsICdhcHAubG9jYWxpemF0aW9uJywgJ2FwcC5jaGFydC5jdHJscycsICdhcHAuY2hhcnQuZGlyZWN0aXZlcycsICdhcHAucGFnZS5jdHJscyddKS5jb25maWcoW1xuICAnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xuICAgIHJldHVybiAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuICAgICAgcmVkaXJlY3RUbzogJy9pbmljaW8nXG4gICAgfSkud2hlbignL2luaWNpbycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaW5pY2lvLmh0bWwnXG4gICAgfSkud2hlbignL2Rhc2hib2FyZDEnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Rhc2hib2FyZDEuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvdHlwb2dyYXBoeScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvdHlwb2dyYXBoeS5odG1sJ1xuICAgIH0pLndoZW4oJy91aS9idXR0b25zJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9idXR0b25zLmh0bWwnXG4gICAgfSkud2hlbignL3VpL2ljb25zJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9pY29ucy5odG1sJ1xuICAgIH0pLndoZW4oJy91aS9ncmlkcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvZ3JpZHMuaHRtbCdcbiAgICB9KS53aGVuKCcvdWkvd2lkZ2V0cycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvd2lkZ2V0cy5odG1sJ1xuICAgIH0pLndoZW4oJy91aS9jb21wb25lbnRzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS9jb21wb25lbnRzLmh0bWwnXG4gICAgfSkud2hlbignL3VpL3RpbWVsaW5lJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91aS90aW1lbGluZS5odG1sJ1xuICAgIH0pLndoZW4oJy91aS9uZXN0ZWQtbGlzdHMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VpL25lc3RlZC1saXN0cy5odG1sJ1xuICAgIH0pLndoZW4oJy91aS9wcmljaW5nLXRhYmxlcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdWkvcHJpY2luZy10YWJsZXMuaHRtbCdcbiAgICB9KS53aGVuKCcvZm9ybXMvZWxlbWVudHMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvcm1zL2VsZW1lbnRzLmh0bWwnXG4gICAgfSkud2hlbignL2Zvcm1zL2xheW91dHMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvcm1zL2xheW91dHMuaHRtbCdcbiAgICB9KS53aGVuKCcvZm9ybXMvdmFsaWRhdGlvbicsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZm9ybXMvdmFsaWRhdGlvbi5odG1sJ1xuICAgIH0pLndoZW4oJy9mb3Jtcy93aXphcmQnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2Zvcm1zL3dpemFyZC5odG1sJ1xuICAgIH0pLndoZW4oJy9tYXBzL2dtYXAnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21hcHMvZ21hcC5odG1sJ1xuICAgIH0pLndoZW4oJy9tYXBzL2pxdm1hcCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFwcy9qcXZtYXAuaHRtbCdcbiAgICB9KS53aGVuKCcvdGFibGVzL3N0YXRpYycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdGFibGVzL3N0YXRpYy5odG1sJ1xuICAgIH0pLndoZW4oJy90YWJsZXMvcmVzcG9uc2l2ZScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdGFibGVzL3Jlc3BvbnNpdmUuaHRtbCdcbiAgICB9KS53aGVuKCcvdGFibGVzL2R5bmFtaWMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3RhYmxlcy9keW5hbWljLmh0bWwnXG4gICAgfSkud2hlbignL2NoYXJ0cy9vdGhlcnMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NoYXJ0cy9jaGFydHMuaHRtbCdcbiAgICB9KS53aGVuKCcvY2hhcnRzL21vcnJpcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY2hhcnRzL21vcnJpcy5odG1sJ1xuICAgIH0pLndoZW4oJy9jaGFydHMvZmxvdCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY2hhcnRzL2Zsb3QuaHRtbCdcbiAgICB9KS53aGVuKCcvbWFpbC9pbmJveCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbC9pbmJveC5odG1sJ1xuICAgIH0pLndoZW4oJy9tYWlsL2NvbXBvc2UnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL21haWwvY29tcG9zZS5odG1sJ1xuICAgIH0pLndoZW4oJy9tYWlsL3NpbmdsZScsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbWFpbC9zaW5nbGUuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvZmVhdHVyZXMnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3BhZ2VzL2ZlYXR1cmVzLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL3NpZ25pbicsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvc2lnbmluLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL3NpZ251cCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvc2lnbnVwLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2ZvcmdvdCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvZm9yZ290LXBhc3N3b3JkLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2xvY2stc2NyZWVuJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9sb2NrLXNjcmVlbi5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9wcm9maWxlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9wcm9maWxlLmh0bWwnXG4gICAgfSkud2hlbignLzQwNCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvNDA0Lmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzLzUwMCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvNTAwLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL2JsYW5rJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9ibGFuay5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9pbnZvaWNlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9pbnZvaWNlLmh0bWwnXG4gICAgfSkud2hlbignL3BhZ2VzL3NlcnZpY2VzJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9wYWdlcy9zZXJ2aWNlcy5odG1sJ1xuICAgIH0pLndoZW4oJy9wYWdlcy9hYm91dCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvYWJvdXQuaHRtbCdcbiAgICB9KS53aGVuKCcvcGFnZXMvY29udGFjdCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvcGFnZXMvY29udGFjdC5odG1sJ1xuICAgIH0pLndoZW4oJy90YXNrcycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdGFza3MvdGFza3MuaHRtbCdcbiAgICB9KS5vdGhlcndpc2Uoe1xuICAgICAgcmVkaXJlY3RUbzogJy80MDQnXG4gICAgfSk7XG4gIH1cbl0pO1xuIiwiLyoganF1ZXJ5LnNwYXJrbGluZSAyLjEuMiAtIGh0dHA6Ly9vbW5pcG90ZW50Lm5ldC9qcXVlcnkuc3BhcmtsaW5lLyBcbioqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UgLSBzZWUgYWJvdmUgc2l0ZSBmb3IgZGV0YWlscyAqL1xuXG4oZnVuY3Rpb24oYSxiLGMpeyhmdW5jdGlvbihhKXt0eXBlb2YgZGVmaW5lPT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxhKTpqUXVlcnkmJiFqUXVlcnkuZm4uc3BhcmtsaW5lJiZhKGpRdWVyeSl9KShmdW5jdGlvbihkKXtcInVzZSBzdHJpY3RcIjt2YXIgZT17fSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1LHYsdyx4LHkseixBLEIsQyxELEUsRixHLEgsSSxKLEssTD0wO2Y9ZnVuY3Rpb24oKXtyZXR1cm57Y29tbW9uOnt0eXBlOlwibGluZVwiLGxpbmVDb2xvcjpcIiMwMGZcIixmaWxsQ29sb3I6XCIjY2RmXCIsZGVmYXVsdFBpeGVsc1BlclZhbHVlOjMsd2lkdGg6XCJhdXRvXCIsaGVpZ2h0OlwiYXV0b1wiLGNvbXBvc2l0ZTohMSx0YWdWYWx1ZXNBdHRyaWJ1dGU6XCJ2YWx1ZXNcIix0YWdPcHRpb25zUHJlZml4Olwic3BhcmtcIixlbmFibGVUYWdPcHRpb25zOiExLGVuYWJsZUhpZ2hsaWdodDohMCxoaWdobGlnaHRMaWdodGVuOjEuNCx0b29sdGlwU2tpcE51bGw6ITAsdG9vbHRpcFByZWZpeDpcIlwiLHRvb2x0aXBTdWZmaXg6XCJcIixkaXNhYmxlSGlkZGVuQ2hlY2s6ITEsbnVtYmVyRm9ybWF0dGVyOiExLG51bWJlckRpZ2l0R3JvdXBDb3VudDozLG51bWJlckRpZ2l0R3JvdXBTZXA6XCIsXCIsbnVtYmVyRGVjaW1hbE1hcms6XCIuXCIsZGlzYWJsZVRvb2x0aXBzOiExLGRpc2FibGVJbnRlcmFjdGlvbjohMX0sbGluZTp7c3BvdENvbG9yOlwiI2Y4MFwiLGhpZ2hsaWdodFNwb3RDb2xvcjpcIiM1ZjVcIixoaWdobGlnaHRMaW5lQ29sb3I6XCIjZjIyXCIsc3BvdFJhZGl1czoxLjUsbWluU3BvdENvbG9yOlwiI2Y4MFwiLG1heFNwb3RDb2xvcjpcIiNmODBcIixsaW5lV2lkdGg6MSxub3JtYWxSYW5nZU1pbjpjLG5vcm1hbFJhbmdlTWF4OmMsbm9ybWFsUmFuZ2VDb2xvcjpcIiNjY2NcIixkcmF3Tm9ybWFsT25Ub3A6ITEsY2hhcnRSYW5nZU1pbjpjLGNoYXJ0UmFuZ2VNYXg6YyxjaGFydFJhbmdlTWluWDpjLGNoYXJ0UmFuZ2VNYXhYOmMsdG9vbHRpcEZvcm1hdDpuZXcgaCgnPHNwYW4gc3R5bGU9XCJjb2xvcjoge3tjb2xvcn19XCI+JiM5Njc5Ozwvc3Bhbj4ge3twcmVmaXh9fXt7eX19e3tzdWZmaXh9fScpfSxiYXI6e2JhckNvbG9yOlwiIzMzNjZjY1wiLG5lZ0JhckNvbG9yOlwiI2Y0NFwiLHN0YWNrZWRCYXJDb2xvcjpbXCIjMzM2NmNjXCIsXCIjZGMzOTEyXCIsXCIjZmY5OTAwXCIsXCIjMTA5NjE4XCIsXCIjNjZhYTAwXCIsXCIjZGQ0NDc3XCIsXCIjMDA5OWM2XCIsXCIjOTkwMDk5XCJdLHplcm9Db2xvcjpjLG51bGxDb2xvcjpjLHplcm9BeGlzOiEwLGJhcldpZHRoOjQsYmFyU3BhY2luZzoxLGNoYXJ0UmFuZ2VNYXg6YyxjaGFydFJhbmdlTWluOmMsY2hhcnRSYW5nZUNsaXA6ITEsY29sb3JNYXA6Yyx0b29sdGlwRm9ybWF0Om5ldyBoKCc8c3BhbiBzdHlsZT1cImNvbG9yOiB7e2NvbG9yfX1cIj4mIzk2Nzk7PC9zcGFuPiB7e3ByZWZpeH19e3t2YWx1ZX19e3tzdWZmaXh9fScpfSx0cmlzdGF0ZTp7YmFyV2lkdGg6NCxiYXJTcGFjaW5nOjEscG9zQmFyQ29sb3I6XCIjNmY2XCIsbmVnQmFyQ29sb3I6XCIjZjQ0XCIsemVyb0JhckNvbG9yOlwiIzk5OVwiLGNvbG9yTWFwOnt9LHRvb2x0aXBGb3JtYXQ6bmV3IGgoJzxzcGFuIHN0eWxlPVwiY29sb3I6IHt7Y29sb3J9fVwiPiYjOTY3OTs8L3NwYW4+IHt7dmFsdWU6bWFwfX0nKSx0b29sdGlwVmFsdWVMb29rdXBzOnttYXA6e1wiLTFcIjpcIkxvc3NcIiwwOlwiRHJhd1wiLDE6XCJXaW5cIn19fSxkaXNjcmV0ZTp7bGluZUhlaWdodDpcImF1dG9cIix0aHJlc2hvbGRDb2xvcjpjLHRocmVzaG9sZFZhbHVlOjAsY2hhcnRSYW5nZU1heDpjLGNoYXJ0UmFuZ2VNaW46YyxjaGFydFJhbmdlQ2xpcDohMSx0b29sdGlwRm9ybWF0Om5ldyBoKFwie3twcmVmaXh9fXt7dmFsdWV9fXt7c3VmZml4fX1cIil9LGJ1bGxldDp7dGFyZ2V0Q29sb3I6XCIjZjMzXCIsdGFyZ2V0V2lkdGg6MyxwZXJmb3JtYW5jZUNvbG9yOlwiIzMzZlwiLHJhbmdlQ29sb3JzOltcIiNkM2RhZmVcIixcIiNhOGI2ZmZcIixcIiM3Zjk0ZmZcIl0sYmFzZTpjLHRvb2x0aXBGb3JtYXQ6bmV3IGgoXCJ7e2ZpZWxka2V5OmZpZWxkc319IC0ge3t2YWx1ZX19XCIpLHRvb2x0aXBWYWx1ZUxvb2t1cHM6e2ZpZWxkczp7cjpcIlJhbmdlXCIscDpcIlBlcmZvcm1hbmNlXCIsdDpcIlRhcmdldFwifX19LHBpZTp7b2Zmc2V0OjAsc2xpY2VDb2xvcnM6W1wiIzMzNjZjY1wiLFwiI2RjMzkxMlwiLFwiI2ZmOTkwMFwiLFwiIzEwOTYxOFwiLFwiIzY2YWEwMFwiLFwiI2RkNDQ3N1wiLFwiIzAwOTljNlwiLFwiIzk5MDA5OVwiXSxib3JkZXJXaWR0aDowLGJvcmRlckNvbG9yOlwiIzAwMFwiLHRvb2x0aXBGb3JtYXQ6bmV3IGgoJzxzcGFuIHN0eWxlPVwiY29sb3I6IHt7Y29sb3J9fVwiPiYjOTY3OTs8L3NwYW4+IHt7dmFsdWV9fSAoe3twZXJjZW50LjF9fSUpJyl9LGJveDp7cmF3OiExLGJveExpbmVDb2xvcjpcIiMwMDBcIixib3hGaWxsQ29sb3I6XCIjY2RmXCIsd2hpc2tlckNvbG9yOlwiIzAwMFwiLG91dGxpZXJMaW5lQ29sb3I6XCIjMzMzXCIsb3V0bGllckZpbGxDb2xvcjpcIiNmZmZcIixtZWRpYW5Db2xvcjpcIiNmMDBcIixzaG93T3V0bGllcnM6ITAsb3V0bGllcklRUjoxLjUsc3BvdFJhZGl1czoxLjUsdGFyZ2V0OmMsdGFyZ2V0Q29sb3I6XCIjNGEyXCIsY2hhcnRSYW5nZU1heDpjLGNoYXJ0UmFuZ2VNaW46Yyx0b29sdGlwRm9ybWF0Om5ldyBoKFwie3tmaWVsZDpmaWVsZHN9fToge3t2YWx1ZX19XCIpLHRvb2x0aXBGb3JtYXRGaWVsZGxpc3RLZXk6XCJmaWVsZFwiLHRvb2x0aXBWYWx1ZUxvb2t1cHM6e2ZpZWxkczp7bHE6XCJMb3dlciBRdWFydGlsZVwiLG1lZDpcIk1lZGlhblwiLHVxOlwiVXBwZXIgUXVhcnRpbGVcIixsbzpcIkxlZnQgT3V0bGllclwiLHJvOlwiUmlnaHQgT3V0bGllclwiLGx3OlwiTGVmdCBXaGlza2VyXCIscnc6XCJSaWdodCBXaGlza2VyXCJ9fX19fSxFPScuanFzdG9vbHRpcCB7IHBvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwcHg7dG9wOiAwcHg7dmlzaWJpbGl0eTogaGlkZGVuO2JhY2tncm91bmQ6IHJnYigwLCAwLCAwKSB0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSM5OTAwMDAwMCwgZW5kQ29sb3JzdHI9Izk5MDAwMDAwKTstbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSM5OTAwMDAwMCwgZW5kQ29sb3JzdHI9Izk5MDAwMDAwKVwiO2NvbG9yOiB3aGl0ZTtmb250OiAxMHB4IGFyaWFsLCBzYW4gc2VyaWY7dGV4dC1hbGlnbjogbGVmdDt3aGl0ZS1zcGFjZTogbm93cmFwO3BhZGRpbmc6IDVweDtib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTt6LWluZGV4OiAxMDAwMDt9Lmpxc2ZpZWxkIHsgY29sb3I6IHdoaXRlO2ZvbnQ6IDEwcHggYXJpYWwsIHNhbiBzZXJpZjt0ZXh0LWFsaWduOiBsZWZ0O30nLGc9ZnVuY3Rpb24oKXt2YXIgYSxiO3JldHVybiBhPWZ1bmN0aW9uKCl7dGhpcy5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYXJndW1lbnRzLmxlbmd0aD4xPyhhcmd1bWVudHNbMF0/KGEucHJvdG90eXBlPWQuZXh0ZW5kKG5ldyBhcmd1bWVudHNbMF0sYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV0pLGEuX3N1cGVyPWFyZ3VtZW50c1swXS5wcm90b3R5cGUpOmEucHJvdG90eXBlPWFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoLTFdLGFyZ3VtZW50cy5sZW5ndGg+MiYmKGI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEsLTEpLGIudW5zaGlmdChhLnByb3RvdHlwZSksZC5leHRlbmQuYXBwbHkoZCxiKSkpOmEucHJvdG90eXBlPWFyZ3VtZW50c1swXSxhLnByb3RvdHlwZS5jbHM9YSxhfSxkLlNQRm9ybWF0Q2xhc3M9aD1nKHtmcmU6L1xce1xceyhbXFx3Ll0rPykoOiguKz8pKT9cXH1cXH0vZyxwcmVjcmU6LyhcXHcrKVxcLihcXGQrKS8saW5pdDpmdW5jdGlvbihhLGIpe3RoaXMuZm9ybWF0PWEsdGhpcy5mY2xhc3M9Yn0scmVuZGVyOmZ1bmN0aW9uKGEsYixkKXt2YXIgZT10aGlzLGY9YSxnLGgsaSxqLGs7cmV0dXJuIHRoaXMuZm9ybWF0LnJlcGxhY2UodGhpcy5mcmUsZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gaD1hcmd1bWVudHNbMV0saT1hcmd1bWVudHNbM10sZz1lLnByZWNyZS5leGVjKGgpLGc/KGs9Z1syXSxoPWdbMV0pOms9ITEsaj1mW2hdLGo9PT1jP1wiXCI6aSYmYiYmYltpXT8oYT1iW2ldLGEuZ2V0P2JbaV0uZ2V0KGopfHxqOmJbaV1bal18fGopOihuKGopJiYoZC5nZXQoXCJudW1iZXJGb3JtYXR0ZXJcIik/aj1kLmdldChcIm51bWJlckZvcm1hdHRlclwiKShqKTpqPXMoaixrLGQuZ2V0KFwibnVtYmVyRGlnaXRHcm91cENvdW50XCIpLGQuZ2V0KFwibnVtYmVyRGlnaXRHcm91cFNlcFwiKSxkLmdldChcIm51bWJlckRlY2ltYWxNYXJrXCIpKSksail9KX19KSxkLnNwZm9ybWF0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBoKGEsYil9LGk9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBhPGI/YjphPmM/YzphfSxqPWZ1bmN0aW9uKGEsYyl7dmFyIGQ7cmV0dXJuIGM9PT0yPyhkPWIuZmxvb3IoYS5sZW5ndGgvMiksYS5sZW5ndGglMj9hW2RdOihhW2QtMV0rYVtkXSkvMik6YS5sZW5ndGglMj8oZD0oYS5sZW5ndGgqYytjKS80LGQlMT8oYVtiLmZsb29yKGQpXSthW2IuZmxvb3IoZCktMV0pLzI6YVtkLTFdKTooZD0oYS5sZW5ndGgqYysyKS80LGQlMT8oYVtiLmZsb29yKGQpXSthW2IuZmxvb3IoZCktMV0pLzI6YVtkLTFdKX0saz1mdW5jdGlvbihhKXt2YXIgYjtzd2l0Y2goYSl7Y2FzZVwidW5kZWZpbmVkXCI6YT1jO2JyZWFrO2Nhc2VcIm51bGxcIjphPW51bGw7YnJlYWs7Y2FzZVwidHJ1ZVwiOmE9ITA7YnJlYWs7Y2FzZVwiZmFsc2VcIjphPSExO2JyZWFrO2RlZmF1bHQ6Yj1wYXJzZUZsb2F0KGEpLGE9PWImJihhPWIpfXJldHVybiBhfSxsPWZ1bmN0aW9uKGEpe3ZhciBiLGM9W107Zm9yKGI9YS5sZW5ndGg7Yi0tOyljW2JdPWsoYVtiXSk7cmV0dXJuIGN9LG09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9W107Zm9yKGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspYVtjXSE9PWImJmUucHVzaChhW2NdKTtyZXR1cm4gZX0sbj1mdW5jdGlvbihhKXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdChhKSkmJmlzRmluaXRlKGEpfSxzPWZ1bmN0aW9uKGEsYixjLGUsZil7dmFyIGcsaDthPShiPT09ITE/cGFyc2VGbG9hdChhKS50b1N0cmluZygpOmEudG9GaXhlZChiKSkuc3BsaXQoXCJcIiksZz0oZz1kLmluQXJyYXkoXCIuXCIsYSkpPDA/YS5sZW5ndGg6ZyxnPGEubGVuZ3RoJiYoYVtnXT1mKTtmb3IoaD1nLWM7aD4wO2gtPWMpYS5zcGxpY2UoaCwwLGUpO3JldHVybiBhLmpvaW4oXCJcIil9LG89ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2ZvcihkPWIubGVuZ3RoO2QtLTspe2lmKGMmJmJbZF09PT1udWxsKWNvbnRpbnVlO2lmKGJbZF0hPT1hKXJldHVybiExfXJldHVybiEwfSxwPWZ1bmN0aW9uKGEpe3ZhciBiPTAsYztmb3IoYz1hLmxlbmd0aDtjLS07KWIrPXR5cGVvZiBhW2NdPT1cIm51bWJlclwiP2FbY106MDtyZXR1cm4gYn0scj1mdW5jdGlvbihhKXtyZXR1cm4gZC5pc0FycmF5KGEpP2E6W2FdfSxxPWZ1bmN0aW9uKGIpe3ZhciBjO2EuY3JlYXRlU3R5bGVTaGVldD9hLmNyZWF0ZVN0eWxlU2hlZXQoKS5jc3NUZXh0PWI6KGM9YS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksYy50eXBlPVwidGV4dC9jc3NcIixhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjKSxjW3R5cGVvZiBhLmJvZHkuc3R5bGUuV2Via2l0QXBwZWFyYW5jZT09XCJzdHJpbmdcIj9cImlubmVyVGV4dFwiOlwiaW5uZXJIVE1MXCJdPWIpfSxkLmZuLnNpbXBsZWRyYXc9ZnVuY3Rpb24oYixlLGYsZyl7dmFyIGgsaTtpZihmJiYoaD10aGlzLmRhdGEoXCJfanFzX3ZjYW52YXNcIikpKXJldHVybiBoO2lmKGQuZm4uc3BhcmtsaW5lLmNhbnZhcz09PSExKXJldHVybiExO2lmKGQuZm4uc3BhcmtsaW5lLmNhbnZhcz09PWMpe3ZhciBqPWEuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtpZighai5nZXRDb250ZXh0fHwhai5nZXRDb250ZXh0KFwiMmRcIikpe2lmKCFhLm5hbWVzcGFjZXN8fCEhYS5uYW1lc3BhY2VzLnYpcmV0dXJuIGQuZm4uc3BhcmtsaW5lLmNhbnZhcz0hMSwhMTthLm5hbWVzcGFjZXMuYWRkKFwidlwiLFwidXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWxcIixcIiNkZWZhdWx0I1ZNTFwiKSxkLmZuLnNwYXJrbGluZS5jYW52YXM9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIG5ldyBKKGEsYixjKX19ZWxzZSBkLmZuLnNwYXJrbGluZS5jYW52YXM9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIG5ldyBJKGEsYixjLGQpfX1yZXR1cm4gYj09PWMmJihiPWQodGhpcykuaW5uZXJXaWR0aCgpKSxlPT09YyYmKGU9ZCh0aGlzKS5pbm5lckhlaWdodCgpKSxoPWQuZm4uc3BhcmtsaW5lLmNhbnZhcyhiLGUsdGhpcyxnKSxpPWQodGhpcykuZGF0YShcIl9qcXNfbWhhbmRsZXJcIiksaSYmaS5yZWdpc3RlckNhbnZhcyhoKSxofSxkLmZuLmNsZWFyZHJhdz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuZGF0YShcIl9qcXNfdmNhbnZhc1wiKTthJiZhLnJlc2V0KCl9LGQuUmFuZ2VNYXBDbGFzcz10PWcoe2luaXQ6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPVtdO2ZvcihiIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShiKSYmdHlwZW9mIGI9PVwic3RyaW5nXCImJmIuaW5kZXhPZihcIjpcIik+LTEmJihjPWIuc3BsaXQoXCI6XCIpLGNbMF09Y1swXS5sZW5ndGg9PT0wPy1JbmZpbml0eTpwYXJzZUZsb2F0KGNbMF0pLGNbMV09Y1sxXS5sZW5ndGg9PT0wP0luZmluaXR5OnBhcnNlRmxvYXQoY1sxXSksY1syXT1hW2JdLGQucHVzaChjKSk7dGhpcy5tYXA9YSx0aGlzLnJhbmdlbGlzdD1kfHwhMX0sZ2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMucmFuZ2VsaXN0LGQsZSxmO2lmKChmPXRoaXMubWFwW2FdKSE9PWMpcmV0dXJuIGY7aWYoYilmb3IoZD1iLmxlbmd0aDtkLS07KXtlPWJbZF07aWYoZVswXTw9YSYmZVsxXT49YSlyZXR1cm4gZVsyXX1yZXR1cm4gY319KSxkLnJhbmdlX21hcD1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IHQoYSl9LHU9Zyh7aW5pdDpmdW5jdGlvbihhLGIpe3ZhciBjPWQoYSk7dGhpcy4kZWw9Yyx0aGlzLm9wdGlvbnM9Yix0aGlzLmN1cnJlbnRQYWdlWD0wLHRoaXMuY3VycmVudFBhZ2VZPTAsdGhpcy5lbD1hLHRoaXMuc3BsaXN0PVtdLHRoaXMudG9vbHRpcD1udWxsLHRoaXMub3Zlcj0hMSx0aGlzLmRpc3BsYXlUb29sdGlwcz0hYi5nZXQoXCJkaXNhYmxlVG9vbHRpcHNcIiksdGhpcy5oaWdobGlnaHRFbmFibGVkPSFiLmdldChcImRpc2FibGVIaWdobGlnaHRcIil9LHJlZ2lzdGVyU3BhcmtsaW5lOmZ1bmN0aW9uKGEpe3RoaXMuc3BsaXN0LnB1c2goYSksdGhpcy5vdmVyJiZ0aGlzLnVwZGF0ZURpc3BsYXkoKX0scmVnaXN0ZXJDYW52YXM6ZnVuY3Rpb24oYSl7dmFyIGI9ZChhLmNhbnZhcyk7dGhpcy5jYW52YXM9YSx0aGlzLiRjYW52YXM9YixiLm1vdXNlZW50ZXIoZC5wcm94eSh0aGlzLm1vdXNlZW50ZXIsdGhpcykpLGIubW91c2VsZWF2ZShkLnByb3h5KHRoaXMubW91c2VsZWF2ZSx0aGlzKSksYi5jbGljayhkLnByb3h5KHRoaXMubW91c2VjbGljayx0aGlzKSl9LHJlc2V0OmZ1bmN0aW9uKGEpe3RoaXMuc3BsaXN0PVtdLHRoaXMudG9vbHRpcCYmYSYmKHRoaXMudG9vbHRpcC5yZW1vdmUoKSx0aGlzLnRvb2x0aXA9Yyl9LG1vdXNlY2xpY2s6ZnVuY3Rpb24oYSl7dmFyIGI9ZC5FdmVudChcInNwYXJrbGluZUNsaWNrXCIpO2Iub3JpZ2luYWxFdmVudD1hLGIuc3BhcmtsaW5lcz10aGlzLnNwbGlzdCx0aGlzLiRlbC50cmlnZ2VyKGIpfSxtb3VzZWVudGVyOmZ1bmN0aW9uKGIpe2QoYS5ib2R5KS51bmJpbmQoXCJtb3VzZW1vdmUuanFzXCIpLGQoYS5ib2R5KS5iaW5kKFwibW91c2Vtb3ZlLmpxc1wiLGQucHJveHkodGhpcy5tb3VzZW1vdmUsdGhpcykpLHRoaXMub3Zlcj0hMCx0aGlzLmN1cnJlbnRQYWdlWD1iLnBhZ2VYLHRoaXMuY3VycmVudFBhZ2VZPWIucGFnZVksdGhpcy5jdXJyZW50RWw9Yi50YXJnZXQsIXRoaXMudG9vbHRpcCYmdGhpcy5kaXNwbGF5VG9vbHRpcHMmJih0aGlzLnRvb2x0aXA9bmV3IHYodGhpcy5vcHRpb25zKSx0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oYi5wYWdlWCxiLnBhZ2VZKSksdGhpcy51cGRhdGVEaXNwbGF5KCl9LG1vdXNlbGVhdmU6ZnVuY3Rpb24oKXtkKGEuYm9keSkudW5iaW5kKFwibW91c2Vtb3ZlLmpxc1wiKTt2YXIgYj10aGlzLnNwbGlzdCxjPWIubGVuZ3RoLGU9ITEsZixnO3RoaXMub3Zlcj0hMSx0aGlzLmN1cnJlbnRFbD1udWxsLHRoaXMudG9vbHRpcCYmKHRoaXMudG9vbHRpcC5yZW1vdmUoKSx0aGlzLnRvb2x0aXA9bnVsbCk7Zm9yKGc9MDtnPGM7ZysrKWY9YltnXSxmLmNsZWFyUmVnaW9uSGlnaGxpZ2h0KCkmJihlPSEwKTtlJiZ0aGlzLmNhbnZhcy5yZW5kZXIoKX0sbW91c2Vtb3ZlOmZ1bmN0aW9uKGEpe3RoaXMuY3VycmVudFBhZ2VYPWEucGFnZVgsdGhpcy5jdXJyZW50UGFnZVk9YS5wYWdlWSx0aGlzLmN1cnJlbnRFbD1hLnRhcmdldCx0aGlzLnRvb2x0aXAmJnRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbihhLnBhZ2VYLGEucGFnZVkpLHRoaXMudXBkYXRlRGlzcGxheSgpfSx1cGRhdGVEaXNwbGF5OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5zcGxpc3QsYj1hLmxlbmd0aCxjPSExLGU9dGhpcy4kY2FudmFzLm9mZnNldCgpLGY9dGhpcy5jdXJyZW50UGFnZVgtZS5sZWZ0LGc9dGhpcy5jdXJyZW50UGFnZVktZS50b3AsaCxpLGosayxsO2lmKCF0aGlzLm92ZXIpcmV0dXJuO2ZvcihqPTA7ajxiO2orKylpPWFbal0saz1pLnNldFJlZ2lvbkhpZ2hsaWdodCh0aGlzLmN1cnJlbnRFbCxmLGcpLGsmJihjPSEwKTtpZihjKXtsPWQuRXZlbnQoXCJzcGFya2xpbmVSZWdpb25DaGFuZ2VcIiksbC5zcGFya2xpbmVzPXRoaXMuc3BsaXN0LHRoaXMuJGVsLnRyaWdnZXIobCk7aWYodGhpcy50b29sdGlwKXtoPVwiXCI7Zm9yKGo9MDtqPGI7aisrKWk9YVtqXSxoKz1pLmdldEN1cnJlbnRSZWdpb25Ub29sdGlwKCk7dGhpcy50b29sdGlwLnNldENvbnRlbnQoaCl9dGhpcy5kaXNhYmxlSGlnaGxpZ2h0fHx0aGlzLmNhbnZhcy5yZW5kZXIoKX1rPT09bnVsbCYmdGhpcy5tb3VzZWxlYXZlKCl9fSksdj1nKHtzaXplU3R5bGU6XCJwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7ZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDt2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtmbG9hdDogbGVmdCAhaW1wb3J0YW50O1wiLGluaXQ6ZnVuY3Rpb24oYil7dmFyIGM9Yi5nZXQoXCJ0b29sdGlwQ2xhc3NuYW1lXCIsXCJqcXN0b29sdGlwXCIpLGU9dGhpcy5zaXplU3R5bGUsZjt0aGlzLmNvbnRhaW5lcj1iLmdldChcInRvb2x0aXBDb250YWluZXJcIil8fGEuYm9keSx0aGlzLnRvb2x0aXBPZmZzZXRYPWIuZ2V0KFwidG9vbHRpcE9mZnNldFhcIiwxMCksdGhpcy50b29sdGlwT2Zmc2V0WT1iLmdldChcInRvb2x0aXBPZmZzZXRZXCIsMTIpLGQoXCIjanFzc2l6ZXRpcFwiKS5yZW1vdmUoKSxkKFwiI2pxc3Rvb2x0aXBcIikucmVtb3ZlKCksdGhpcy5zaXpldGlwPWQoXCI8ZGl2Lz5cIix7aWQ6XCJqcXNzaXpldGlwXCIsc3R5bGU6ZSxcImNsYXNzXCI6Y30pLHRoaXMudG9vbHRpcD1kKFwiPGRpdi8+XCIse2lkOlwianFzdG9vbHRpcFwiLFwiY2xhc3NcIjpjfSkuYXBwZW5kVG8odGhpcy5jb250YWluZXIpLGY9dGhpcy50b29sdGlwLm9mZnNldCgpLHRoaXMub2Zmc2V0TGVmdD1mLmxlZnQsdGhpcy5vZmZzZXRUb3A9Zi50b3AsdGhpcy5oaWRkZW49ITAsZCh3aW5kb3cpLnVuYmluZChcInJlc2l6ZS5qcXMgc2Nyb2xsLmpxc1wiKSxkKHdpbmRvdykuYmluZChcInJlc2l6ZS5qcXMgc2Nyb2xsLmpxc1wiLGQucHJveHkodGhpcy51cGRhdGVXaW5kb3dEaW1zLHRoaXMpKSx0aGlzLnVwZGF0ZVdpbmRvd0RpbXMoKX0sdXBkYXRlV2luZG93RGltczpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsVG9wPWQod2luZG93KS5zY3JvbGxUb3AoKSx0aGlzLnNjcm9sbExlZnQ9ZCh3aW5kb3cpLnNjcm9sbExlZnQoKSx0aGlzLnNjcm9sbFJpZ2h0PXRoaXMuc2Nyb2xsTGVmdCtkKHdpbmRvdykud2lkdGgoKSx0aGlzLnVwZGF0ZVBvc2l0aW9uKCl9LGdldFNpemU6ZnVuY3Rpb24oYSl7dGhpcy5zaXpldGlwLmh0bWwoYSkuYXBwZW5kVG8odGhpcy5jb250YWluZXIpLHRoaXMud2lkdGg9dGhpcy5zaXpldGlwLndpZHRoKCkrMSx0aGlzLmhlaWdodD10aGlzLnNpemV0aXAuaGVpZ2h0KCksdGhpcy5zaXpldGlwLnJlbW92ZSgpfSxzZXRDb250ZW50OmZ1bmN0aW9uKGEpe2lmKCFhKXt0aGlzLnRvb2x0aXAuY3NzKFwidmlzaWJpbGl0eVwiLFwiaGlkZGVuXCIpLHRoaXMuaGlkZGVuPSEwO3JldHVybn10aGlzLmdldFNpemUoYSksdGhpcy50b29sdGlwLmh0bWwoYSkuY3NzKHt3aWR0aDp0aGlzLndpZHRoLGhlaWdodDp0aGlzLmhlaWdodCx2aXNpYmlsaXR5OlwidmlzaWJsZVwifSksdGhpcy5oaWRkZW4mJih0aGlzLmhpZGRlbj0hMSx0aGlzLnVwZGF0ZVBvc2l0aW9uKCkpfSx1cGRhdGVQb3NpdGlvbjpmdW5jdGlvbihhLGIpe2lmKGE9PT1jKXtpZih0aGlzLm1vdXNleD09PWMpcmV0dXJuO2E9dGhpcy5tb3VzZXgtdGhpcy5vZmZzZXRMZWZ0LGI9dGhpcy5tb3VzZXktdGhpcy5vZmZzZXRUb3B9ZWxzZSB0aGlzLm1vdXNleD1hLT10aGlzLm9mZnNldExlZnQsdGhpcy5tb3VzZXk9Yi09dGhpcy5vZmZzZXRUb3A7aWYoIXRoaXMuaGVpZ2h0fHwhdGhpcy53aWR0aHx8dGhpcy5oaWRkZW4pcmV0dXJuO2ItPXRoaXMuaGVpZ2h0K3RoaXMudG9vbHRpcE9mZnNldFksYSs9dGhpcy50b29sdGlwT2Zmc2V0WCxiPHRoaXMuc2Nyb2xsVG9wJiYoYj10aGlzLnNjcm9sbFRvcCksYTx0aGlzLnNjcm9sbExlZnQ/YT10aGlzLnNjcm9sbExlZnQ6YSt0aGlzLndpZHRoPnRoaXMuc2Nyb2xsUmlnaHQmJihhPXRoaXMuc2Nyb2xsUmlnaHQtdGhpcy53aWR0aCksdGhpcy50b29sdGlwLmNzcyh7bGVmdDphLHRvcDpifSl9LHJlbW92ZTpmdW5jdGlvbigpe3RoaXMudG9vbHRpcC5yZW1vdmUoKSx0aGlzLnNpemV0aXAucmVtb3ZlKCksdGhpcy5zaXpldGlwPXRoaXMudG9vbHRpcD1jLGQod2luZG93KS51bmJpbmQoXCJyZXNpemUuanFzIHNjcm9sbC5qcXNcIil9fSksRj1mdW5jdGlvbigpe3EoRSl9LGQoRiksSz1bXSxkLmZuLnNwYXJrbGluZT1mdW5jdGlvbihiLGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZj1uZXcgZC5mbi5zcGFya2xpbmUub3B0aW9ucyh0aGlzLGUpLGc9ZCh0aGlzKSxoLGk7aD1mdW5jdGlvbigpe3ZhciBlLGgsaSxqLGssbCxtO2lmKGI9PT1cImh0bWxcInx8Yj09PWMpe209dGhpcy5nZXRBdHRyaWJ1dGUoZi5nZXQoXCJ0YWdWYWx1ZXNBdHRyaWJ1dGVcIikpO2lmKG09PT1jfHxtPT09bnVsbCltPWcuaHRtbCgpO2U9bS5yZXBsYWNlKC8oXlxccyo8IS0tKXwoLS0+XFxzKiQpfFxccysvZyxcIlwiKS5zcGxpdChcIixcIil9ZWxzZSBlPWI7aD1mLmdldChcIndpZHRoXCIpPT09XCJhdXRvXCI/ZS5sZW5ndGgqZi5nZXQoXCJkZWZhdWx0UGl4ZWxzUGVyVmFsdWVcIik6Zi5nZXQoXCJ3aWR0aFwiKTtpZihmLmdldChcImhlaWdodFwiKT09PVwiYXV0b1wiKXtpZighZi5nZXQoXCJjb21wb3NpdGVcIil8fCFkLmRhdGEodGhpcyxcIl9qcXNfdmNhbnZhc1wiKSlqPWEuY3JlYXRlRWxlbWVudChcInNwYW5cIiksai5pbm5lckhUTUw9XCJhXCIsZy5odG1sKGopLGk9ZChqKS5pbm5lckhlaWdodCgpfHxkKGopLmhlaWdodCgpLGQoaikucmVtb3ZlKCksaj1udWxsfWVsc2UgaT1mLmdldChcImhlaWdodFwiKTtmLmdldChcImRpc2FibGVJbnRlcmFjdGlvblwiKT9rPSExOihrPWQuZGF0YSh0aGlzLFwiX2pxc19taGFuZGxlclwiKSxrP2YuZ2V0KFwiY29tcG9zaXRlXCIpfHxrLnJlc2V0KCk6KGs9bmV3IHUodGhpcyxmKSxkLmRhdGEodGhpcyxcIl9qcXNfbWhhbmRsZXJcIixrKSkpO2lmKGYuZ2V0KFwiY29tcG9zaXRlXCIpJiYhZC5kYXRhKHRoaXMsXCJfanFzX3ZjYW52YXNcIikpe2QuZGF0YSh0aGlzLFwiX2pxc19lcnJub3RpZnlcIil8fChhbGVydChcIkF0dGVtcHRlZCB0byBhdHRhY2ggYSBjb21wb3NpdGUgc3BhcmtsaW5lIHRvIGFuIGVsZW1lbnQgd2l0aCBubyBleGlzdGluZyBzcGFya2xpbmVcIiksZC5kYXRhKHRoaXMsXCJfanFzX2Vycm5vdGlmeVwiLCEwKSk7cmV0dXJufWw9bmV3KGQuZm4uc3BhcmtsaW5lW2YuZ2V0KFwidHlwZVwiKV0pKHRoaXMsZSxmLGgsaSksbC5yZW5kZXIoKSxrJiZrLnJlZ2lzdGVyU3BhcmtsaW5lKGwpfTtpZihkKHRoaXMpLmh0bWwoKSYmIWYuZ2V0KFwiZGlzYWJsZUhpZGRlbkNoZWNrXCIpJiZkKHRoaXMpLmlzKFwiOmhpZGRlblwiKXx8IWQodGhpcykucGFyZW50cyhcImJvZHlcIikubGVuZ3RoKXtpZighZi5nZXQoXCJjb21wb3NpdGVcIikmJmQuZGF0YSh0aGlzLFwiX2pxc19wZW5kaW5nXCIpKWZvcihpPUsubGVuZ3RoO2k7aS0tKUtbaS0xXVswXT09dGhpcyYmSy5zcGxpY2UoaS0xLDEpO0sucHVzaChbdGhpcyxoXSksZC5kYXRhKHRoaXMsXCJfanFzX3BlbmRpbmdcIiwhMCl9ZWxzZSBoLmNhbGwodGhpcyl9KX0sZC5mbi5zcGFya2xpbmUuZGVmYXVsdHM9ZigpLGQuc3BhcmtsaW5lX2Rpc3BsYXlfdmlzaWJsZT1mdW5jdGlvbigpe3ZhciBhLGIsYyxlPVtdO2ZvcihiPTAsYz1LLmxlbmd0aDtiPGM7YisrKWE9S1tiXVswXSxkKGEpLmlzKFwiOnZpc2libGVcIikmJiFkKGEpLnBhcmVudHMoKS5pcyhcIjpoaWRkZW5cIik/KEtbYl1bMV0uY2FsbChhKSxkLmRhdGEoS1tiXVswXSxcIl9qcXNfcGVuZGluZ1wiLCExKSxlLnB1c2goYikpOiFkKGEpLmNsb3Nlc3QoXCJodG1sXCIpLmxlbmd0aCYmIWQuZGF0YShhLFwiX2pxc19wZW5kaW5nXCIpJiYoZC5kYXRhKEtbYl1bMF0sXCJfanFzX3BlbmRpbmdcIiwhMSksZS5wdXNoKGIpKTtmb3IoYj1lLmxlbmd0aDtiO2ItLSlLLnNwbGljZShlW2ItMV0sMSl9LGQuZm4uc3BhcmtsaW5lLm9wdGlvbnM9Zyh7aW5pdDpmdW5jdGlvbihhLGIpe3ZhciBjLGYsZyxoO3RoaXMudXNlck9wdGlvbnM9Yj1ifHx7fSx0aGlzLnRhZz1hLHRoaXMudGFnVmFsQ2FjaGU9e30sZj1kLmZuLnNwYXJrbGluZS5kZWZhdWx0cyxnPWYuY29tbW9uLHRoaXMudGFnT3B0aW9uc1ByZWZpeD1iLmVuYWJsZVRhZ09wdGlvbnMmJihiLnRhZ09wdGlvbnNQcmVmaXh8fGcudGFnT3B0aW9uc1ByZWZpeCksaD10aGlzLmdldFRhZ1NldHRpbmcoXCJ0eXBlXCIpLGg9PT1lP2M9ZltiLnR5cGV8fGcudHlwZV06Yz1mW2hdLHRoaXMubWVyZ2VkT3B0aW9ucz1kLmV4dGVuZCh7fSxnLGMsYil9LGdldFRhZ1NldHRpbmc6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy50YWdPcHRpb25zUHJlZml4LGQsZixnLGg7aWYoYj09PSExfHxiPT09YylyZXR1cm4gZTtpZih0aGlzLnRhZ1ZhbENhY2hlLmhhc093blByb3BlcnR5KGEpKWQ9dGhpcy50YWdWYWxDYWNoZS5rZXk7ZWxzZXtkPXRoaXMudGFnLmdldEF0dHJpYnV0ZShiK2EpO2lmKGQ9PT1jfHxkPT09bnVsbClkPWU7ZWxzZSBpZihkLnN1YnN0cigwLDEpPT09XCJbXCIpe2Q9ZC5zdWJzdHIoMSxkLmxlbmd0aC0yKS5zcGxpdChcIixcIik7Zm9yKGY9ZC5sZW5ndGg7Zi0tOylkW2ZdPWsoZFtmXS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZyxcIlwiKSl9ZWxzZSBpZihkLnN1YnN0cigwLDEpPT09XCJ7XCIpe2c9ZC5zdWJzdHIoMSxkLmxlbmd0aC0yKS5zcGxpdChcIixcIiksZD17fTtmb3IoZj1nLmxlbmd0aDtmLS07KWg9Z1tmXS5zcGxpdChcIjpcIiwyKSxkW2hbMF0ucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csXCJcIildPWsoaFsxXS5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZyxcIlwiKSl9ZWxzZSBkPWsoZCk7dGhpcy50YWdWYWxDYWNoZS5rZXk9ZH1yZXR1cm4gZH0sZ2V0OmZ1bmN0aW9uKGEsYil7dmFyIGQ9dGhpcy5nZXRUYWdTZXR0aW5nKGEpLGY7cmV0dXJuIGQhPT1lP2Q6KGY9dGhpcy5tZXJnZWRPcHRpb25zW2FdKT09PWM/YjpmfX0pLGQuZm4uc3BhcmtsaW5lLl9iYXNlPWcoe2Rpc2FibGVkOiExLGluaXQ6ZnVuY3Rpb24oYSxiLGUsZixnKXt0aGlzLmVsPWEsdGhpcy4kZWw9ZChhKSx0aGlzLnZhbHVlcz1iLHRoaXMub3B0aW9ucz1lLHRoaXMud2lkdGg9Zix0aGlzLmhlaWdodD1nLHRoaXMuY3VycmVudFJlZ2lvbj1jfSxpbml0VGFyZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9IXRoaXMub3B0aW9ucy5nZXQoXCJkaXNhYmxlSW50ZXJhY3Rpb25cIik7KHRoaXMudGFyZ2V0PXRoaXMuJGVsLnNpbXBsZWRyYXcodGhpcy53aWR0aCx0aGlzLmhlaWdodCx0aGlzLm9wdGlvbnMuZ2V0KFwiY29tcG9zaXRlXCIpLGEpKT8odGhpcy5jYW52YXNXaWR0aD10aGlzLnRhcmdldC5waXhlbFdpZHRoLHRoaXMuY2FudmFzSGVpZ2h0PXRoaXMudGFyZ2V0LnBpeGVsSGVpZ2h0KTp0aGlzLmRpc2FibGVkPSEwfSxyZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kaXNhYmxlZD8odGhpcy5lbC5pbm5lckhUTUw9XCJcIiwhMSk6ITB9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGIpe30sc2V0UmVnaW9uSGlnaGxpZ2h0OmZ1bmN0aW9uKGEsYixkKXt2YXIgZT10aGlzLmN1cnJlbnRSZWdpb24sZj0hdGhpcy5vcHRpb25zLmdldChcImRpc2FibGVIaWdobGlnaHRcIiksZztyZXR1cm4gYj50aGlzLmNhbnZhc1dpZHRofHxkPnRoaXMuY2FudmFzSGVpZ2h0fHxiPDB8fGQ8MD9udWxsOihnPXRoaXMuZ2V0UmVnaW9uKGEsYixkKSxlIT09Zz8oZSE9PWMmJmYmJnRoaXMucmVtb3ZlSGlnaGxpZ2h0KCksdGhpcy5jdXJyZW50UmVnaW9uPWcsZyE9PWMmJmYmJnRoaXMucmVuZGVySGlnaGxpZ2h0KCksITApOiExKX0sY2xlYXJSZWdpb25IaWdobGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jdXJyZW50UmVnaW9uIT09Yz8odGhpcy5yZW1vdmVIaWdobGlnaHQoKSx0aGlzLmN1cnJlbnRSZWdpb249YywhMCk6ITF9LHJlbmRlckhpZ2hsaWdodDpmdW5jdGlvbigpe3RoaXMuY2hhbmdlSGlnaGxpZ2h0KCEwKX0scmVtb3ZlSGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dGhpcy5jaGFuZ2VIaWdobGlnaHQoITEpfSxjaGFuZ2VIaWdobGlnaHQ6ZnVuY3Rpb24oYSl7fSxnZXRDdXJyZW50UmVnaW9uVG9vbHRpcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3B0aW9ucyxiPVwiXCIsZT1bXSxmLGcsaSxqLGssbCxtLG4sbyxwLHEscixzLHQ7aWYodGhpcy5jdXJyZW50UmVnaW9uPT09YylyZXR1cm5cIlwiO2Y9dGhpcy5nZXRDdXJyZW50UmVnaW9uRmllbGRzKCkscT1hLmdldChcInRvb2x0aXBGb3JtYXR0ZXJcIik7aWYocSlyZXR1cm4gcSh0aGlzLGEsZik7YS5nZXQoXCJ0b29sdGlwQ2hhcnRUaXRsZVwiKSYmKGIrPSc8ZGl2IGNsYXNzPVwianFzIGpxc3RpdGxlXCI+JythLmdldChcInRvb2x0aXBDaGFydFRpdGxlXCIpK1wiPC9kaXY+XFxuXCIpLGc9dGhpcy5vcHRpb25zLmdldChcInRvb2x0aXBGb3JtYXRcIik7aWYoIWcpcmV0dXJuXCJcIjtkLmlzQXJyYXkoZyl8fChnPVtnXSksZC5pc0FycmF5KGYpfHwoZj1bZl0pLG09dGhpcy5vcHRpb25zLmdldChcInRvb2x0aXBGb3JtYXRGaWVsZGxpc3RcIiksbj10aGlzLm9wdGlvbnMuZ2V0KFwidG9vbHRpcEZvcm1hdEZpZWxkbGlzdEtleVwiKTtpZihtJiZuKXtvPVtdO2ZvcihsPWYubGVuZ3RoO2wtLTspcD1mW2xdW25dLCh0PWQuaW5BcnJheShwLG0pKSE9LTEmJihvW3RdPWZbbF0pO2Y9b31pPWcubGVuZ3RoLHM9Zi5sZW5ndGg7Zm9yKGw9MDtsPGk7bCsrKXtyPWdbbF0sdHlwZW9mIHI9PVwic3RyaW5nXCImJihyPW5ldyBoKHIpKSxqPXIuZmNsYXNzfHxcImpxc2ZpZWxkXCI7Zm9yKHQ9MDt0PHM7dCsrKWlmKCFmW3RdLmlzTnVsbHx8IWEuZ2V0KFwidG9vbHRpcFNraXBOdWxsXCIpKWQuZXh0ZW5kKGZbdF0se3ByZWZpeDphLmdldChcInRvb2x0aXBQcmVmaXhcIiksc3VmZml4OmEuZ2V0KFwidG9vbHRpcFN1ZmZpeFwiKX0pLGs9ci5yZW5kZXIoZlt0XSxhLmdldChcInRvb2x0aXBWYWx1ZUxvb2t1cHNcIiksYSksZS5wdXNoKCc8ZGl2IGNsYXNzPVwiJytqKydcIj4nK2srXCI8L2Rpdj5cIil9cmV0dXJuIGUubGVuZ3RoP2IrZS5qb2luKFwiXFxuXCIpOlwiXCJ9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt9LGNhbGNIaWdobGlnaHRDb2xvcjpmdW5jdGlvbihhLGMpe3ZhciBkPWMuZ2V0KFwiaGlnaGxpZ2h0Q29sb3JcIiksZT1jLmdldChcImhpZ2hsaWdodExpZ2h0ZW5cIiksZixnLGgsajtpZihkKXJldHVybiBkO2lmKGUpe2Y9L14jKFswLTlhLWZdKShbMC05YS1mXSkoWzAtOWEtZl0pJC9pLmV4ZWMoYSl8fC9eIyhbMC05YS1mXXsyfSkoWzAtOWEtZl17Mn0pKFswLTlhLWZdezJ9KSQvaS5leGVjKGEpO2lmKGYpe2g9W10sZz1hLmxlbmd0aD09PTQ/MTY6MTtmb3Ioaj0wO2o8MztqKyspaFtqXT1pKGIucm91bmQocGFyc2VJbnQoZltqKzFdLDE2KSpnKmUpLDAsMjU1KTtyZXR1cm5cInJnYihcIitoLmpvaW4oXCIsXCIpK1wiKVwifX1yZXR1cm4gYX19KSx3PXtjaGFuZ2VIaWdobGlnaHQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5jdXJyZW50UmVnaW9uLGM9dGhpcy50YXJnZXQsZT10aGlzLnJlZ2lvblNoYXBlc1tiXSxmO2UmJihmPXRoaXMucmVuZGVyUmVnaW9uKGIsYSksZC5pc0FycmF5KGYpfHxkLmlzQXJyYXkoZSk/KGMucmVwbGFjZVdpdGhTaGFwZXMoZSxmKSx0aGlzLnJlZ2lvblNoYXBlc1tiXT1kLm1hcChmLGZ1bmN0aW9uKGEpe3JldHVybiBhLmlkfSkpOihjLnJlcGxhY2VXaXRoU2hhcGUoZSxmKSx0aGlzLnJlZ2lvblNoYXBlc1tiXT1mLmlkKSl9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMudmFsdWVzLGI9dGhpcy50YXJnZXQsYz10aGlzLnJlZ2lvblNoYXBlcyxlLGYsZyxoO2lmKCF0aGlzLmNscy5fc3VwZXIucmVuZGVyLmNhbGwodGhpcykpcmV0dXJuO2ZvcihnPWEubGVuZ3RoO2ctLTspe2U9dGhpcy5yZW5kZXJSZWdpb24oZyk7aWYoZSlpZihkLmlzQXJyYXkoZSkpe2Y9W107Zm9yKGg9ZS5sZW5ndGg7aC0tOyllW2hdLmFwcGVuZCgpLGYucHVzaChlW2hdLmlkKTtjW2ddPWZ9ZWxzZSBlLmFwcGVuZCgpLGNbZ109ZS5pZDtlbHNlIGNbZ109bnVsbH1iLnJlbmRlcigpfX0sZC5mbi5zcGFya2xpbmUubGluZT14PWcoZC5mbi5zcGFya2xpbmUuX2Jhc2Use3R5cGU6XCJsaW5lXCIsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUpe3guX3N1cGVyLmluaXQuY2FsbCh0aGlzLGEsYixjLGQsZSksdGhpcy52ZXJ0aWNlcz1bXSx0aGlzLnJlZ2lvbk1hcD1bXSx0aGlzLnh2YWx1ZXM9W10sdGhpcy55dmFsdWVzPVtdLHRoaXMueW1pbm1heD1bXSx0aGlzLmhpZ2h0bGlnaHRTcG90SWQ9bnVsbCx0aGlzLmxhc3RTaGFwZUlkPW51bGwsdGhpcy5pbml0VGFyZ2V0KCl9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGIsZCl7dmFyIGUsZj10aGlzLnJlZ2lvbk1hcDtmb3IoZT1mLmxlbmd0aDtlLS07KWlmKGZbZV0hPT1udWxsJiZiPj1mW2VdWzBdJiZiPD1mW2VdWzFdKXJldHVybiBmW2VdWzJdO3JldHVybiBjfSxnZXRDdXJyZW50UmVnaW9uRmllbGRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uO3JldHVybntpc051bGw6dGhpcy55dmFsdWVzW2FdPT09bnVsbCx4OnRoaXMueHZhbHVlc1thXSx5OnRoaXMueXZhbHVlc1thXSxjb2xvcjp0aGlzLm9wdGlvbnMuZ2V0KFwibGluZUNvbG9yXCIpLGZpbGxDb2xvcjp0aGlzLm9wdGlvbnMuZ2V0KFwiZmlsbENvbG9yXCIpLG9mZnNldDphfX0scmVuZGVySGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uLGI9dGhpcy50YXJnZXQsZD10aGlzLnZlcnRpY2VzW2FdLGU9dGhpcy5vcHRpb25zLGY9ZS5nZXQoXCJzcG90UmFkaXVzXCIpLGc9ZS5nZXQoXCJoaWdobGlnaHRTcG90Q29sb3JcIiksaD1lLmdldChcImhpZ2hsaWdodExpbmVDb2xvclwiKSxpLGo7aWYoIWQpcmV0dXJuO2YmJmcmJihpPWIuZHJhd0NpcmNsZShkWzBdLGRbMV0sZixjLGcpLHRoaXMuaGlnaGxpZ2h0U3BvdElkPWkuaWQsYi5pbnNlcnRBZnRlclNoYXBlKHRoaXMubGFzdFNoYXBlSWQsaSkpLGgmJihqPWIuZHJhd0xpbmUoZFswXSx0aGlzLmNhbnZhc1RvcCxkWzBdLHRoaXMuY2FudmFzVG9wK3RoaXMuY2FudmFzSGVpZ2h0LGgpLHRoaXMuaGlnaGxpZ2h0TGluZUlkPWouaWQsYi5pbnNlcnRBZnRlclNoYXBlKHRoaXMubGFzdFNoYXBlSWQsaikpfSxyZW1vdmVIaWdobGlnaHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnRhcmdldDt0aGlzLmhpZ2hsaWdodFNwb3RJZCYmKGEucmVtb3ZlU2hhcGVJZCh0aGlzLmhpZ2hsaWdodFNwb3RJZCksdGhpcy5oaWdobGlnaHRTcG90SWQ9bnVsbCksdGhpcy5oaWdobGlnaHRMaW5lSWQmJihhLnJlbW92ZVNoYXBlSWQodGhpcy5oaWdobGlnaHRMaW5lSWQpLHRoaXMuaGlnaGxpZ2h0TGluZUlkPW51bGwpfSxzY2FuVmFsdWVzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52YWx1ZXMsYz1hLmxlbmd0aCxkPXRoaXMueHZhbHVlcyxlPXRoaXMueXZhbHVlcyxmPXRoaXMueW1pbm1heCxnLGgsaSxqLGs7Zm9yKGc9MDtnPGM7ZysrKWg9YVtnXSxpPXR5cGVvZiBhW2ddPT1cInN0cmluZ1wiLGo9dHlwZW9mIGFbZ109PVwib2JqZWN0XCImJmFbZ11pbnN0YW5jZW9mIEFycmF5LGs9aSYmYVtnXS5zcGxpdChcIjpcIiksaSYmay5sZW5ndGg9PT0yPyhkLnB1c2goTnVtYmVyKGtbMF0pKSxlLnB1c2goTnVtYmVyKGtbMV0pKSxmLnB1c2goTnVtYmVyKGtbMV0pKSk6aj8oZC5wdXNoKGhbMF0pLGUucHVzaChoWzFdKSxmLnB1c2goaFsxXSkpOihkLnB1c2goZyksYVtnXT09PW51bGx8fGFbZ109PT1cIm51bGxcIj9lLnB1c2gobnVsbCk6KGUucHVzaChOdW1iZXIoaCkpLGYucHVzaChOdW1iZXIoaCkpKSk7dGhpcy5vcHRpb25zLmdldChcInh2YWx1ZXNcIikmJihkPXRoaXMub3B0aW9ucy5nZXQoXCJ4dmFsdWVzXCIpKSx0aGlzLm1heHk9dGhpcy5tYXh5b3JnPWIubWF4LmFwcGx5KGIsZiksdGhpcy5taW55PXRoaXMubWlueW9yZz1iLm1pbi5hcHBseShiLGYpLHRoaXMubWF4eD1iLm1heC5hcHBseShiLGQpLHRoaXMubWlueD1iLm1pbi5hcHBseShiLGQpLHRoaXMueHZhbHVlcz1kLHRoaXMueXZhbHVlcz1lLHRoaXMueW1pbm1heD1mfSxwcm9jZXNzUmFuZ2VPcHRpb25zOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLGI9YS5nZXQoXCJub3JtYWxSYW5nZU1pblwiKSxkPWEuZ2V0KFwibm9ybWFsUmFuZ2VNYXhcIik7YiE9PWMmJihiPHRoaXMubWlueSYmKHRoaXMubWlueT1iKSxkPnRoaXMubWF4eSYmKHRoaXMubWF4eT1kKSksYS5nZXQoXCJjaGFydFJhbmdlTWluXCIpIT09YyYmKGEuZ2V0KFwiY2hhcnRSYW5nZUNsaXBcIil8fGEuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKTx0aGlzLm1pbnkpJiYodGhpcy5taW55PWEuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSksYS5nZXQoXCJjaGFydFJhbmdlTWF4XCIpIT09YyYmKGEuZ2V0KFwiY2hhcnRSYW5nZUNsaXBcIil8fGEuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKT50aGlzLm1heHkpJiYodGhpcy5tYXh5PWEuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKSksYS5nZXQoXCJjaGFydFJhbmdlTWluWFwiKSE9PWMmJihhLmdldChcImNoYXJ0UmFuZ2VDbGlwWFwiKXx8YS5nZXQoXCJjaGFydFJhbmdlTWluWFwiKTx0aGlzLm1pbngpJiYodGhpcy5taW54PWEuZ2V0KFwiY2hhcnRSYW5nZU1pblhcIikpLGEuZ2V0KFwiY2hhcnRSYW5nZU1heFhcIikhPT1jJiYoYS5nZXQoXCJjaGFydFJhbmdlQ2xpcFhcIil8fGEuZ2V0KFwiY2hhcnRSYW5nZU1heFhcIik+dGhpcy5tYXh4KSYmKHRoaXMubWF4eD1hLmdldChcImNoYXJ0UmFuZ2VNYXhYXCIpKX0sZHJhd05vcm1hbFJhbmdlOmZ1bmN0aW9uKGEsZCxlLGYsZyl7dmFyIGg9dGhpcy5vcHRpb25zLmdldChcIm5vcm1hbFJhbmdlTWluXCIpLGk9dGhpcy5vcHRpb25zLmdldChcIm5vcm1hbFJhbmdlTWF4XCIpLGo9ZCtiLnJvdW5kKGUtZSooKGktdGhpcy5taW55KS9nKSksaz1iLnJvdW5kKGUqKGktaCkvZyk7dGhpcy50YXJnZXQuZHJhd1JlY3QoYSxqLGYsayxjLHRoaXMub3B0aW9ucy5nZXQoXCJub3JtYWxSYW5nZUNvbG9yXCIpKS5hcHBlbmQoKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLGU9dGhpcy50YXJnZXQsZj10aGlzLmNhbnZhc1dpZHRoLGc9dGhpcy5jYW52YXNIZWlnaHQsaD10aGlzLnZlcnRpY2VzLGk9YS5nZXQoXCJzcG90UmFkaXVzXCIpLGo9dGhpcy5yZWdpb25NYXAsayxsLG0sbixvLHAscSxyLHMsdSx2LHcseSx6LEEsQixDLEQsRSxGLEcsSCxJLEosSztpZigheC5fc3VwZXIucmVuZGVyLmNhbGwodGhpcykpcmV0dXJuO3RoaXMuc2NhblZhbHVlcygpLHRoaXMucHJvY2Vzc1JhbmdlT3B0aW9ucygpLEk9dGhpcy54dmFsdWVzLEo9dGhpcy55dmFsdWVzO2lmKCF0aGlzLnltaW5tYXgubGVuZ3RofHx0aGlzLnl2YWx1ZXMubGVuZ3RoPDIpcmV0dXJuO249bz0wLGs9dGhpcy5tYXh4LXRoaXMubWlueD09PTA/MTp0aGlzLm1heHgtdGhpcy5taW54LGw9dGhpcy5tYXh5LXRoaXMubWlueT09PTA/MTp0aGlzLm1heHktdGhpcy5taW55LG09dGhpcy55dmFsdWVzLmxlbmd0aC0xLGkmJihmPGkqNHx8ZzxpKjQpJiYoaT0wKTtpZihpKXtHPWEuZ2V0KFwiaGlnaGxpZ2h0U3BvdENvbG9yXCIpJiYhYS5nZXQoXCJkaXNhYmxlSW50ZXJhY3Rpb25cIik7aWYoR3x8YS5nZXQoXCJtaW5TcG90Q29sb3JcIil8fGEuZ2V0KFwic3BvdENvbG9yXCIpJiZKW21dPT09dGhpcy5taW55KWctPWIuY2VpbChpKTtpZihHfHxhLmdldChcIm1heFNwb3RDb2xvclwiKXx8YS5nZXQoXCJzcG90Q29sb3JcIikmJkpbbV09PT10aGlzLm1heHkpZy09Yi5jZWlsKGkpLG4rPWIuY2VpbChpKTtpZihHfHwoYS5nZXQoXCJtaW5TcG90Q29sb3JcIil8fGEuZ2V0KFwibWF4U3BvdENvbG9yXCIpKSYmKEpbMF09PT10aGlzLm1pbnl8fEpbMF09PT10aGlzLm1heHkpKW8rPWIuY2VpbChpKSxmLT1iLmNlaWwoaSk7aWYoR3x8YS5nZXQoXCJzcG90Q29sb3JcIil8fGEuZ2V0KFwibWluU3BvdENvbG9yXCIpfHxhLmdldChcIm1heFNwb3RDb2xvclwiKSYmKEpbbV09PT10aGlzLm1pbnl8fEpbbV09PT10aGlzLm1heHkpKWYtPWIuY2VpbChpKX1nLS0sYS5nZXQoXCJub3JtYWxSYW5nZU1pblwiKSE9PWMmJiFhLmdldChcImRyYXdOb3JtYWxPblRvcFwiKSYmdGhpcy5kcmF3Tm9ybWFsUmFuZ2UobyxuLGcsZixsKSxxPVtdLHI9W3FdLHo9QT1udWxsLEI9Si5sZW5ndGg7Zm9yKEs9MDtLPEI7SysrKXM9SVtLXSx2PUlbSysxXSx1PUpbS10sdz1vK2Iucm91bmQoKHMtdGhpcy5taW54KSooZi9rKSkseT1LPEItMT9vK2Iucm91bmQoKHYtdGhpcy5taW54KSooZi9rKSk6ZixBPXcrKHktdykvMixqW0tdPVt6fHwwLEEsS10sej1BLHU9PT1udWxsP0smJihKW0stMV0hPT1udWxsJiYocT1bXSxyLnB1c2gocSkpLGgucHVzaChudWxsKSk6KHU8dGhpcy5taW55JiYodT10aGlzLm1pbnkpLHU+dGhpcy5tYXh5JiYodT10aGlzLm1heHkpLHEubGVuZ3RofHxxLnB1c2goW3csbitnXSkscD1bdyxuK2Iucm91bmQoZy1nKigodS10aGlzLm1pbnkpL2wpKV0scS5wdXNoKHApLGgucHVzaChwKSk7Qz1bXSxEPVtdLEU9ci5sZW5ndGg7Zm9yKEs9MDtLPEU7SysrKXE9cltLXSxxLmxlbmd0aCYmKGEuZ2V0KFwiZmlsbENvbG9yXCIpJiYocS5wdXNoKFtxW3EubGVuZ3RoLTFdWzBdLG4rZ10pLEQucHVzaChxLnNsaWNlKDApKSxxLnBvcCgpKSxxLmxlbmd0aD4yJiYocVswXT1bcVswXVswXSxxWzFdWzFdXSksQy5wdXNoKHEpKTtFPUQubGVuZ3RoO2ZvcihLPTA7SzxFO0srKyllLmRyYXdTaGFwZShEW0tdLGEuZ2V0KFwiZmlsbENvbG9yXCIpLGEuZ2V0KFwiZmlsbENvbG9yXCIpKS5hcHBlbmQoKTthLmdldChcIm5vcm1hbFJhbmdlTWluXCIpIT09YyYmYS5nZXQoXCJkcmF3Tm9ybWFsT25Ub3BcIikmJnRoaXMuZHJhd05vcm1hbFJhbmdlKG8sbixnLGYsbCksRT1DLmxlbmd0aDtmb3IoSz0wO0s8RTtLKyspZS5kcmF3U2hhcGUoQ1tLXSxhLmdldChcImxpbmVDb2xvclwiKSxjLGEuZ2V0KFwibGluZVdpZHRoXCIpKS5hcHBlbmQoKTtpZihpJiZhLmdldChcInZhbHVlU3BvdHNcIikpe0Y9YS5nZXQoXCJ2YWx1ZVNwb3RzXCIpLEYuZ2V0PT09YyYmKEY9bmV3IHQoRikpO2ZvcihLPTA7SzxCO0srKylIPUYuZ2V0KEpbS10pLEgmJmUuZHJhd0NpcmNsZShvK2Iucm91bmQoKElbS10tdGhpcy5taW54KSooZi9rKSksbitiLnJvdW5kKGctZyooKEpbS10tdGhpcy5taW55KS9sKSksaSxjLEgpLmFwcGVuZCgpfWkmJmEuZ2V0KFwic3BvdENvbG9yXCIpJiZKW21dIT09bnVsbCYmZS5kcmF3Q2lyY2xlKG8rYi5yb3VuZCgoSVtJLmxlbmd0aC0xXS10aGlzLm1pbngpKihmL2spKSxuK2Iucm91bmQoZy1nKigoSlttXS10aGlzLm1pbnkpL2wpKSxpLGMsYS5nZXQoXCJzcG90Q29sb3JcIikpLmFwcGVuZCgpLHRoaXMubWF4eSE9PXRoaXMubWlueW9yZyYmKGkmJmEuZ2V0KFwibWluU3BvdENvbG9yXCIpJiYocz1JW2QuaW5BcnJheSh0aGlzLm1pbnlvcmcsSildLGUuZHJhd0NpcmNsZShvK2Iucm91bmQoKHMtdGhpcy5taW54KSooZi9rKSksbitiLnJvdW5kKGctZyooKHRoaXMubWlueW9yZy10aGlzLm1pbnkpL2wpKSxpLGMsYS5nZXQoXCJtaW5TcG90Q29sb3JcIikpLmFwcGVuZCgpKSxpJiZhLmdldChcIm1heFNwb3RDb2xvclwiKSYmKHM9SVtkLmluQXJyYXkodGhpcy5tYXh5b3JnLEopXSxlLmRyYXdDaXJjbGUobytiLnJvdW5kKChzLXRoaXMubWlueCkqKGYvaykpLG4rYi5yb3VuZChnLWcqKCh0aGlzLm1heHlvcmctdGhpcy5taW55KS9sKSksaSxjLGEuZ2V0KFwibWF4U3BvdENvbG9yXCIpKS5hcHBlbmQoKSkpLHRoaXMubGFzdFNoYXBlSWQ9ZS5nZXRMYXN0U2hhcGVJZCgpLHRoaXMuY2FudmFzVG9wPW4sZS5yZW5kZXIoKX19KSxkLmZuLnNwYXJrbGluZS5iYXI9eT1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHcse3R5cGU6XCJiYXJcIixpbml0OmZ1bmN0aW9uKGEsZSxmLGcsaCl7dmFyIGo9cGFyc2VJbnQoZi5nZXQoXCJiYXJXaWR0aFwiKSwxMCksbj1wYXJzZUludChmLmdldChcImJhclNwYWNpbmdcIiksMTApLG89Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpLHA9Zi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpLHE9Zi5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKSxyPUluZmluaXR5LHM9LUluZmluaXR5LHUsdix3LHgseixBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUjt5Ll9zdXBlci5pbml0LmNhbGwodGhpcyxhLGUsZixnLGgpO2ZvcihBPTAsQj1lLmxlbmd0aDtBPEI7QSsrKXtPPWVbQV0sdT10eXBlb2YgTz09XCJzdHJpbmdcIiYmTy5pbmRleE9mKFwiOlwiKT4tMTtpZih1fHxkLmlzQXJyYXkoTykpSj0hMCx1JiYoTz1lW0FdPWwoTy5zcGxpdChcIjpcIikpKSxPPW0oTyxudWxsKSx2PWIubWluLmFwcGx5KGIsTyksdz1iLm1heC5hcHBseShiLE8pLHY8ciYmKHI9diksdz5zJiYocz13KX10aGlzLnN0YWNrZWQ9Six0aGlzLnJlZ2lvblNoYXBlcz17fSx0aGlzLmJhcldpZHRoPWosdGhpcy5iYXJTcGFjaW5nPW4sdGhpcy50b3RhbEJhcldpZHRoPWorbix0aGlzLndpZHRoPWc9ZS5sZW5ndGgqaisoZS5sZW5ndGgtMSkqbix0aGlzLmluaXRUYXJnZXQoKSxxJiYoSD1vPT09Yz8tSW5maW5pdHk6byxJPXA9PT1jP0luZmluaXR5OnApLHo9W10seD1KP1tdOno7dmFyIFM9W10sVD1bXTtmb3IoQT0wLEI9ZS5sZW5ndGg7QTxCO0ErKylpZihKKXtLPWVbQV0sZVtBXT1OPVtdLFNbQV09MCx4W0FdPVRbQV09MDtmb3IoTD0wLE09Sy5sZW5ndGg7TDxNO0wrKylPPU5bTF09cT9pKEtbTF0sSCxJKTpLW0xdLE8hPT1udWxsJiYoTz4wJiYoU1tBXSs9TykscjwwJiZzPjA/TzwwP1RbQV0rPWIuYWJzKE8pOnhbQV0rPU86eFtBXSs9Yi5hYnMoTy0oTzwwP3M6cikpLHoucHVzaChPKSl9ZWxzZSBPPXE/aShlW0FdLEgsSSk6ZVtBXSxPPWVbQV09ayhPKSxPIT09bnVsbCYmei5wdXNoKE8pO3RoaXMubWF4PUc9Yi5tYXguYXBwbHkoYix6KSx0aGlzLm1pbj1GPWIubWluLmFwcGx5KGIseiksdGhpcy5zdGFja01heD1zPUo/Yi5tYXguYXBwbHkoYixTKTpHLHRoaXMuc3RhY2tNaW49cj1KP2IubWluLmFwcGx5KGIseik6RixmLmdldChcImNoYXJ0UmFuZ2VNaW5cIikhPT1jJiYoZi5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKXx8Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpPEYpJiYoRj1mLmdldChcImNoYXJ0UmFuZ2VNaW5cIikpLGYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKSE9PWMmJihmLmdldChcImNoYXJ0UmFuZ2VDbGlwXCIpfHxmLmdldChcImNoYXJ0UmFuZ2VNYXhcIik+RykmJihHPWYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKSksdGhpcy56ZXJvQXhpcz1EPWYuZ2V0KFwiemVyb0F4aXNcIiwhMCksRjw9MCYmRz49MCYmRD9FPTA6RD09MD9FPUY6Rj4wP0U9RjpFPUcsdGhpcy54YXhpc09mZnNldD1FLEM9Sj9iLm1heC5hcHBseShiLHgpK2IubWF4LmFwcGx5KGIsVCk6Ry1GLHRoaXMuY2FudmFzSGVpZ2h0RWY9RCYmRjwwP3RoaXMuY2FudmFzSGVpZ2h0LTI6dGhpcy5jYW52YXNIZWlnaHQtMSxGPEU/KFE9SiYmRz49MD9zOkcsUD0oUS1FKS9DKnRoaXMuY2FudmFzSGVpZ2h0LFAhPT1iLmNlaWwoUCkmJih0aGlzLmNhbnZhc0hlaWdodEVmLT0yLFA9Yi5jZWlsKFApKSk6UD10aGlzLmNhbnZhc0hlaWdodCx0aGlzLnlvZmZzZXQ9UCxkLmlzQXJyYXkoZi5nZXQoXCJjb2xvck1hcFwiKSk/KHRoaXMuY29sb3JNYXBCeUluZGV4PWYuZ2V0KFwiY29sb3JNYXBcIiksdGhpcy5jb2xvck1hcEJ5VmFsdWU9bnVsbCk6KHRoaXMuY29sb3JNYXBCeUluZGV4PW51bGwsdGhpcy5jb2xvck1hcEJ5VmFsdWU9Zi5nZXQoXCJjb2xvck1hcFwiKSx0aGlzLmNvbG9yTWFwQnlWYWx1ZSYmdGhpcy5jb2xvck1hcEJ5VmFsdWUuZ2V0PT09YyYmKHRoaXMuY29sb3JNYXBCeVZhbHVlPW5ldyB0KHRoaXMuY29sb3JNYXBCeVZhbHVlKSkpLHRoaXMucmFuZ2U9Q30sZ2V0UmVnaW9uOmZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1iLmZsb29yKGQvdGhpcy50b3RhbEJhcldpZHRoKTtyZXR1cm4gZjwwfHxmPj10aGlzLnZhbHVlcy5sZW5ndGg/YzpmfSxnZXRDdXJyZW50UmVnaW9uRmllbGRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uLGI9cih0aGlzLnZhbHVlc1thXSksYz1bXSxkLGU7Zm9yKGU9Yi5sZW5ndGg7ZS0tOylkPWJbZV0sYy5wdXNoKHtpc051bGw6ZD09PW51bGwsdmFsdWU6ZCxjb2xvcjp0aGlzLmNhbGNDb2xvcihlLGQsYSksb2Zmc2V0OmF9KTtyZXR1cm4gY30sY2FsY0NvbG9yOmZ1bmN0aW9uKGEsYixlKXt2YXIgZj10aGlzLmNvbG9yTWFwQnlJbmRleCxnPXRoaXMuY29sb3JNYXBCeVZhbHVlLGg9dGhpcy5vcHRpb25zLGksajtyZXR1cm4gdGhpcy5zdGFja2VkP2k9aC5nZXQoXCJzdGFja2VkQmFyQ29sb3JcIik6aT1iPDA/aC5nZXQoXCJuZWdCYXJDb2xvclwiKTpoLmdldChcImJhckNvbG9yXCIpLGI9PT0wJiZoLmdldChcInplcm9Db2xvclwiKSE9PWMmJihpPWguZ2V0KFwiemVyb0NvbG9yXCIpKSxnJiYoaj1nLmdldChiKSk/aT1qOmYmJmYubGVuZ3RoPmUmJihpPWZbZV0pLGQuaXNBcnJheShpKT9pW2ElaS5sZW5ndGhdOml9LHJlbmRlclJlZ2lvbjpmdW5jdGlvbihhLGUpe3ZhciBmPXRoaXMudmFsdWVzW2FdLGc9dGhpcy5vcHRpb25zLGg9dGhpcy54YXhpc09mZnNldCxpPVtdLGo9dGhpcy5yYW5nZSxrPXRoaXMuc3RhY2tlZCxsPXRoaXMudGFyZ2V0LG09YSp0aGlzLnRvdGFsQmFyV2lkdGgsbj10aGlzLmNhbnZhc0hlaWdodEVmLHA9dGhpcy55b2Zmc2V0LHEscixzLHQsdSx2LHcseCx5LHo7Zj1kLmlzQXJyYXkoZik/ZjpbZl0sdz1mLmxlbmd0aCx4PWZbMF0sdD1vKG51bGwsZiksej1vKGgsZiwhMCk7aWYodClyZXR1cm4gZy5nZXQoXCJudWxsQ29sb3JcIik/KHM9ZT9nLmdldChcIm51bGxDb2xvclwiKTp0aGlzLmNhbGNIaWdobGlnaHRDb2xvcihnLmdldChcIm51bGxDb2xvclwiKSxnKSxxPXA+MD9wLTE6cCxsLmRyYXdSZWN0KG0scSx0aGlzLmJhcldpZHRoLTEsMCxzLHMpKTpjO3U9cDtmb3Iodj0wO3Y8dzt2Kyspe3g9Zlt2XTtpZihrJiZ4PT09aCl7aWYoIXp8fHkpY29udGludWU7eT0hMH1qPjA/cj1iLmZsb29yKG4qKGIuYWJzKHgtaCkvaikpKzE6cj0xLHg8aHx8eD09PWgmJnA9PT0wPyhxPXUsdSs9cik6KHE9cC1yLHAtPXIpLHM9dGhpcy5jYWxjQ29sb3Iodix4LGEpLGUmJihzPXRoaXMuY2FsY0hpZ2hsaWdodENvbG9yKHMsZykpLGkucHVzaChsLmRyYXdSZWN0KG0scSx0aGlzLmJhcldpZHRoLTEsci0xLHMscykpfXJldHVybiBpLmxlbmd0aD09PTE/aVswXTppfX0pLGQuZm4uc3BhcmtsaW5lLnRyaXN0YXRlPXo9ZyhkLmZuLnNwYXJrbGluZS5fYmFzZSx3LHt0eXBlOlwidHJpc3RhdGVcIixpbml0OmZ1bmN0aW9uKGEsYixlLGYsZyl7dmFyIGg9cGFyc2VJbnQoZS5nZXQoXCJiYXJXaWR0aFwiKSwxMCksaT1wYXJzZUludChlLmdldChcImJhclNwYWNpbmdcIiksMTApO3ouX3N1cGVyLmluaXQuY2FsbCh0aGlzLGEsYixlLGYsZyksdGhpcy5yZWdpb25TaGFwZXM9e30sdGhpcy5iYXJXaWR0aD1oLHRoaXMuYmFyU3BhY2luZz1pLHRoaXMudG90YWxCYXJXaWR0aD1oK2ksdGhpcy52YWx1ZXM9ZC5tYXAoYixOdW1iZXIpLHRoaXMud2lkdGg9Zj1iLmxlbmd0aCpoKyhiLmxlbmd0aC0xKSppLGQuaXNBcnJheShlLmdldChcImNvbG9yTWFwXCIpKT8odGhpcy5jb2xvck1hcEJ5SW5kZXg9ZS5nZXQoXCJjb2xvck1hcFwiKSx0aGlzLmNvbG9yTWFwQnlWYWx1ZT1udWxsKToodGhpcy5jb2xvck1hcEJ5SW5kZXg9bnVsbCx0aGlzLmNvbG9yTWFwQnlWYWx1ZT1lLmdldChcImNvbG9yTWFwXCIpLHRoaXMuY29sb3JNYXBCeVZhbHVlJiZ0aGlzLmNvbG9yTWFwQnlWYWx1ZS5nZXQ9PT1jJiYodGhpcy5jb2xvck1hcEJ5VmFsdWU9bmV3IHQodGhpcy5jb2xvck1hcEJ5VmFsdWUpKSksdGhpcy5pbml0VGFyZ2V0KCl9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGIuZmxvb3IoYy90aGlzLnRvdGFsQmFyV2lkdGgpfSxnZXRDdXJyZW50UmVnaW9uRmllbGRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jdXJyZW50UmVnaW9uO3JldHVybntpc051bGw6dGhpcy52YWx1ZXNbYV09PT1jLHZhbHVlOnRoaXMudmFsdWVzW2FdLGNvbG9yOnRoaXMuY2FsY0NvbG9yKHRoaXMudmFsdWVzW2FdLGEpLG9mZnNldDphfX0sY2FsY0NvbG9yOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy52YWx1ZXMsZD10aGlzLm9wdGlvbnMsZT10aGlzLmNvbG9yTWFwQnlJbmRleCxmPXRoaXMuY29sb3JNYXBCeVZhbHVlLGcsaDtyZXR1cm4gZiYmKGg9Zi5nZXQoYSkpP2c9aDplJiZlLmxlbmd0aD5iP2c9ZVtiXTpjW2JdPDA/Zz1kLmdldChcIm5lZ0JhckNvbG9yXCIpOmNbYl0+MD9nPWQuZ2V0KFwicG9zQmFyQ29sb3JcIik6Zz1kLmdldChcInplcm9CYXJDb2xvclwiKSxnfSxyZW5kZXJSZWdpb246ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLnZhbHVlcyxlPXRoaXMub3B0aW9ucyxmPXRoaXMudGFyZ2V0LGcsaCxpLGosayxsO2c9Zi5waXhlbEhlaWdodCxpPWIucm91bmQoZy8yKSxqPWEqdGhpcy50b3RhbEJhcldpZHRoLGRbYV08MD8oaz1pLGg9aS0xKTpkW2FdPjA/KGs9MCxoPWktMSk6KGs9aS0xLGg9MiksbD10aGlzLmNhbGNDb2xvcihkW2FdLGEpO2lmKGw9PT1udWxsKXJldHVybjtyZXR1cm4gYyYmKGw9dGhpcy5jYWxjSGlnaGxpZ2h0Q29sb3IobCxlKSksZi5kcmF3UmVjdChqLGssdGhpcy5iYXJXaWR0aC0xLGgtMSxsLGwpfX0pLGQuZm4uc3BhcmtsaW5lLmRpc2NyZXRlPUE9ZyhkLmZuLnNwYXJrbGluZS5fYmFzZSx3LHt0eXBlOlwiZGlzY3JldGVcIixpbml0OmZ1bmN0aW9uKGEsZSxmLGcsaCl7QS5fc3VwZXIuaW5pdC5jYWxsKHRoaXMsYSxlLGYsZyxoKSx0aGlzLnJlZ2lvblNoYXBlcz17fSx0aGlzLnZhbHVlcz1lPWQubWFwKGUsTnVtYmVyKSx0aGlzLm1pbj1iLm1pbi5hcHBseShiLGUpLHRoaXMubWF4PWIubWF4LmFwcGx5KGIsZSksdGhpcy5yYW5nZT10aGlzLm1heC10aGlzLm1pbix0aGlzLndpZHRoPWc9Zi5nZXQoXCJ3aWR0aFwiKT09PVwiYXV0b1wiP2UubGVuZ3RoKjI6dGhpcy53aWR0aCx0aGlzLmludGVydmFsPWIuZmxvb3IoZy9lLmxlbmd0aCksdGhpcy5pdGVtV2lkdGg9Zy9lLmxlbmd0aCxmLmdldChcImNoYXJ0UmFuZ2VNaW5cIikhPT1jJiYoZi5nZXQoXCJjaGFydFJhbmdlQ2xpcFwiKXx8Zi5nZXQoXCJjaGFydFJhbmdlTWluXCIpPHRoaXMubWluKSYmKHRoaXMubWluPWYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKSksZi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpIT09YyYmKGYuZ2V0KFwiY2hhcnRSYW5nZUNsaXBcIil8fGYuZ2V0KFwiY2hhcnRSYW5nZU1heFwiKT50aGlzLm1heCkmJih0aGlzLm1heD1mLmdldChcImNoYXJ0UmFuZ2VNYXhcIikpLHRoaXMuaW5pdFRhcmdldCgpLHRoaXMudGFyZ2V0JiYodGhpcy5saW5lSGVpZ2h0PWYuZ2V0KFwibGluZUhlaWdodFwiKT09PVwiYXV0b1wiP2Iucm91bmQodGhpcy5jYW52YXNIZWlnaHQqLjMpOmYuZ2V0KFwibGluZUhlaWdodFwiKSl9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGIuZmxvb3IoYy90aGlzLml0ZW1XaWR0aCl9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb247cmV0dXJue2lzTnVsbDp0aGlzLnZhbHVlc1thXT09PWMsdmFsdWU6dGhpcy52YWx1ZXNbYV0sb2Zmc2V0OmF9fSxyZW5kZXJSZWdpb246ZnVuY3Rpb24oYSxjKXt2YXIgZD10aGlzLnZhbHVlcyxlPXRoaXMub3B0aW9ucyxmPXRoaXMubWluLGc9dGhpcy5tYXgsaD10aGlzLnJhbmdlLGo9dGhpcy5pbnRlcnZhbCxrPXRoaXMudGFyZ2V0LGw9dGhpcy5jYW52YXNIZWlnaHQsbT10aGlzLmxpbmVIZWlnaHQsbj1sLW0sbyxwLHEscjtyZXR1cm4gcD1pKGRbYV0sZixnKSxyPWEqaixvPWIucm91bmQobi1uKigocC1mKS9oKSkscT1lLmdldChcInRocmVzaG9sZENvbG9yXCIpJiZwPGUuZ2V0KFwidGhyZXNob2xkVmFsdWVcIik/ZS5nZXQoXCJ0aHJlc2hvbGRDb2xvclwiKTplLmdldChcImxpbmVDb2xvclwiKSxjJiYocT10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihxLGUpKSxrLmRyYXdMaW5lKHIsbyxyLG8rbSxxKX19KSxkLmZuLnNwYXJrbGluZS5idWxsZXQ9Qj1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHt0eXBlOlwiYnVsbGV0XCIsaW5pdDpmdW5jdGlvbihhLGQsZSxmLGcpe3ZhciBoLGksajtCLl9zdXBlci5pbml0LmNhbGwodGhpcyxhLGQsZSxmLGcpLHRoaXMudmFsdWVzPWQ9bChkKSxqPWQuc2xpY2UoKSxqWzBdPWpbMF09PT1udWxsP2pbMl06alswXSxqWzFdPWRbMV09PT1udWxsP2pbMl06alsxXSxoPWIubWluLmFwcGx5KGIsZCksaT1iLm1heC5hcHBseShiLGQpLGUuZ2V0KFwiYmFzZVwiKT09PWM/aD1oPDA/aDowOmg9ZS5nZXQoXCJiYXNlXCIpLHRoaXMubWluPWgsdGhpcy5tYXg9aSx0aGlzLnJhbmdlPWktaCx0aGlzLnNoYXBlcz17fSx0aGlzLnZhbHVlU2hhcGVzPXt9LHRoaXMucmVnaW9uZGF0YT17fSx0aGlzLndpZHRoPWY9ZS5nZXQoXCJ3aWR0aFwiKT09PVwiYXV0b1wiP1wiNC4wZW1cIjpmLHRoaXMudGFyZ2V0PXRoaXMuJGVsLnNpbXBsZWRyYXcoZixnLGUuZ2V0KFwiY29tcG9zaXRlXCIpKSxkLmxlbmd0aHx8KHRoaXMuZGlzYWJsZWQ9ITApLHRoaXMuaW5pdFRhcmdldCgpfSxnZXRSZWdpb246ZnVuY3Rpb24oYSxiLGQpe3ZhciBlPXRoaXMudGFyZ2V0LmdldFNoYXBlQXQoYSxiLGQpO3JldHVybiBlIT09YyYmdGhpcy5zaGFwZXNbZV0hPT1jP3RoaXMuc2hhcGVzW2VdOmN9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmN1cnJlbnRSZWdpb247cmV0dXJue2ZpZWxka2V5OmEuc3Vic3RyKDAsMSksdmFsdWU6dGhpcy52YWx1ZXNbYS5zdWJzdHIoMSldLHJlZ2lvbjphfX0sY2hhbmdlSGlnaGxpZ2h0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY3VycmVudFJlZ2lvbixjPXRoaXMudmFsdWVTaGFwZXNbYl0sZDtkZWxldGUgdGhpcy5zaGFwZXNbY107c3dpdGNoKGIuc3Vic3RyKDAsMSkpe2Nhc2VcInJcIjpkPXRoaXMucmVuZGVyUmFuZ2UoYi5zdWJzdHIoMSksYSk7YnJlYWs7Y2FzZVwicFwiOmQ9dGhpcy5yZW5kZXJQZXJmb3JtYW5jZShhKTticmVhaztjYXNlXCJ0XCI6ZD10aGlzLnJlbmRlclRhcmdldChhKX10aGlzLnZhbHVlU2hhcGVzW2JdPWQuaWQsdGhpcy5zaGFwZXNbZC5pZF09Yix0aGlzLnRhcmdldC5yZXBsYWNlV2l0aFNoYXBlKGMsZCl9LHJlbmRlclJhbmdlOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcy52YWx1ZXNbYV0sZT1iLnJvdW5kKHRoaXMuY2FudmFzV2lkdGgqKChkLXRoaXMubWluKS90aGlzLnJhbmdlKSksZj10aGlzLm9wdGlvbnMuZ2V0KFwicmFuZ2VDb2xvcnNcIilbYS0yXTtyZXR1cm4gYyYmKGY9dGhpcy5jYWxjSGlnaGxpZ2h0Q29sb3IoZix0aGlzLm9wdGlvbnMpKSx0aGlzLnRhcmdldC5kcmF3UmVjdCgwLDAsZS0xLHRoaXMuY2FudmFzSGVpZ2h0LTEsZixmKX0scmVuZGVyUGVyZm9ybWFuY2U6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcy52YWx1ZXNbMV0sZD1iLnJvdW5kKHRoaXMuY2FudmFzV2lkdGgqKChjLXRoaXMubWluKS90aGlzLnJhbmdlKSksZT10aGlzLm9wdGlvbnMuZ2V0KFwicGVyZm9ybWFuY2VDb2xvclwiKTtyZXR1cm4gYSYmKGU9dGhpcy5jYWxjSGlnaGxpZ2h0Q29sb3IoZSx0aGlzLm9wdGlvbnMpKSx0aGlzLnRhcmdldC5kcmF3UmVjdCgwLGIucm91bmQodGhpcy5jYW52YXNIZWlnaHQqLjMpLGQtMSxiLnJvdW5kKHRoaXMuY2FudmFzSGVpZ2h0Ki40KS0xLGUsZSl9LHJlbmRlclRhcmdldDpmdW5jdGlvbihhKXt2YXIgYz10aGlzLnZhbHVlc1swXSxkPWIucm91bmQodGhpcy5jYW52YXNXaWR0aCooKGMtdGhpcy5taW4pL3RoaXMucmFuZ2UpLXRoaXMub3B0aW9ucy5nZXQoXCJ0YXJnZXRXaWR0aFwiKS8yKSxlPWIucm91bmQodGhpcy5jYW52YXNIZWlnaHQqLjEpLGY9dGhpcy5jYW52YXNIZWlnaHQtZSoyLGc9dGhpcy5vcHRpb25zLmdldChcInRhcmdldENvbG9yXCIpO3JldHVybiBhJiYoZz10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihnLHRoaXMub3B0aW9ucykpLHRoaXMudGFyZ2V0LmRyYXdSZWN0KGQsZSx0aGlzLm9wdGlvbnMuZ2V0KFwidGFyZ2V0V2lkdGhcIiktMSxmLTEsZyxnKX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52YWx1ZXMubGVuZ3RoLGI9dGhpcy50YXJnZXQsYyxkO2lmKCFCLl9zdXBlci5yZW5kZXIuY2FsbCh0aGlzKSlyZXR1cm47Zm9yKGM9MjtjPGE7YysrKWQ9dGhpcy5yZW5kZXJSYW5nZShjKS5hcHBlbmQoKSx0aGlzLnNoYXBlc1tkLmlkXT1cInJcIitjLHRoaXMudmFsdWVTaGFwZXNbXCJyXCIrY109ZC5pZDt0aGlzLnZhbHVlc1sxXSE9PW51bGwmJihkPXRoaXMucmVuZGVyUGVyZm9ybWFuY2UoKS5hcHBlbmQoKSx0aGlzLnNoYXBlc1tkLmlkXT1cInAxXCIsdGhpcy52YWx1ZVNoYXBlcy5wMT1kLmlkKSx0aGlzLnZhbHVlc1swXSE9PW51bGwmJihkPXRoaXMucmVuZGVyVGFyZ2V0KCkuYXBwZW5kKCksdGhpcy5zaGFwZXNbZC5pZF09XCJ0MFwiLHRoaXMudmFsdWVTaGFwZXMudDA9ZC5pZCksYi5yZW5kZXIoKX19KSxkLmZuLnNwYXJrbGluZS5waWU9Qz1nKGQuZm4uc3BhcmtsaW5lLl9iYXNlLHt0eXBlOlwicGllXCIsaW5pdDpmdW5jdGlvbihhLGMsZSxmLGcpe3ZhciBoPTAsaTtDLl9zdXBlci5pbml0LmNhbGwodGhpcyxhLGMsZSxmLGcpLHRoaXMuc2hhcGVzPXt9LHRoaXMudmFsdWVTaGFwZXM9e30sdGhpcy52YWx1ZXM9Yz1kLm1hcChjLE51bWJlciksZS5nZXQoXCJ3aWR0aFwiKT09PVwiYXV0b1wiJiYodGhpcy53aWR0aD10aGlzLmhlaWdodCk7aWYoYy5sZW5ndGg+MClmb3IoaT1jLmxlbmd0aDtpLS07KWgrPWNbaV07dGhpcy50b3RhbD1oLHRoaXMuaW5pdFRhcmdldCgpLHRoaXMucmFkaXVzPWIuZmxvb3IoYi5taW4odGhpcy5jYW52YXNXaWR0aCx0aGlzLmNhbnZhc0hlaWdodCkvMil9LGdldFJlZ2lvbjpmdW5jdGlvbihhLGIsZCl7dmFyIGU9dGhpcy50YXJnZXQuZ2V0U2hhcGVBdChhLGIsZCk7cmV0dXJuIGUhPT1jJiZ0aGlzLnNoYXBlc1tlXSE9PWM/dGhpcy5zaGFwZXNbZV06Y30sZ2V0Q3VycmVudFJlZ2lvbkZpZWxkczpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY3VycmVudFJlZ2lvbjtyZXR1cm57aXNOdWxsOnRoaXMudmFsdWVzW2FdPT09Yyx2YWx1ZTp0aGlzLnZhbHVlc1thXSxwZXJjZW50OnRoaXMudmFsdWVzW2FdL3RoaXMudG90YWwqMTAwLGNvbG9yOnRoaXMub3B0aW9ucy5nZXQoXCJzbGljZUNvbG9yc1wiKVthJXRoaXMub3B0aW9ucy5nZXQoXCJzbGljZUNvbG9yc1wiKS5sZW5ndGhdLG9mZnNldDphfX0sY2hhbmdlSGlnaGxpZ2h0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuY3VycmVudFJlZ2lvbixjPXRoaXMucmVuZGVyU2xpY2UoYixhKSxkPXRoaXMudmFsdWVTaGFwZXNbYl07ZGVsZXRlIHRoaXMuc2hhcGVzW2RdLHRoaXMudGFyZ2V0LnJlcGxhY2VXaXRoU2hhcGUoZCxjKSx0aGlzLnZhbHVlU2hhcGVzW2JdPWMuaWQsdGhpcy5zaGFwZXNbYy5pZF09Yn0scmVuZGVyU2xpY2U6ZnVuY3Rpb24oYSxkKXt2YXIgZT10aGlzLnRhcmdldCxmPXRoaXMub3B0aW9ucyxnPXRoaXMucmFkaXVzLGg9Zi5nZXQoXCJib3JkZXJXaWR0aFwiKSxpPWYuZ2V0KFwib2Zmc2V0XCIpLGo9MipiLlBJLGs9dGhpcy52YWx1ZXMsbD10aGlzLnRvdGFsLG09aT8yKmIuUEkqKGkvMzYwKTowLG4sbyxwLHEscjtxPWsubGVuZ3RoO2ZvcihwPTA7cDxxO3ArKyl7bj1tLG89bSxsPjAmJihvPW0raiooa1twXS9sKSk7aWYoYT09PXApcmV0dXJuIHI9Zi5nZXQoXCJzbGljZUNvbG9yc1wiKVtwJWYuZ2V0KFwic2xpY2VDb2xvcnNcIikubGVuZ3RoXSxkJiYocj10aGlzLmNhbGNIaWdobGlnaHRDb2xvcihyLGYpKSxlLmRyYXdQaWVTbGljZShnLGcsZy1oLG4sbyxjLHIpO209b319LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGFyZ2V0LGQ9dGhpcy52YWx1ZXMsZT10aGlzLm9wdGlvbnMsZj10aGlzLnJhZGl1cyxnPWUuZ2V0KFwiYm9yZGVyV2lkdGhcIiksaCxpO2lmKCFDLl9zdXBlci5yZW5kZXIuY2FsbCh0aGlzKSlyZXR1cm47ZyYmYS5kcmF3Q2lyY2xlKGYsZixiLmZsb29yKGYtZy8yKSxlLmdldChcImJvcmRlckNvbG9yXCIpLGMsZykuYXBwZW5kKCk7Zm9yKGk9ZC5sZW5ndGg7aS0tOylkW2ldJiYoaD10aGlzLnJlbmRlclNsaWNlKGkpLmFwcGVuZCgpLHRoaXMudmFsdWVTaGFwZXNbaV09aC5pZCx0aGlzLnNoYXBlc1toLmlkXT1pKTthLnJlbmRlcigpfX0pLGQuZm4uc3BhcmtsaW5lLmJveD1EPWcoZC5mbi5zcGFya2xpbmUuX2Jhc2Use3R5cGU6XCJib3hcIixpbml0OmZ1bmN0aW9uKGEsYixjLGUsZil7RC5fc3VwZXIuaW5pdC5jYWxsKHRoaXMsYSxiLGMsZSxmKSx0aGlzLnZhbHVlcz1kLm1hcChiLE51bWJlciksdGhpcy53aWR0aD1jLmdldChcIndpZHRoXCIpPT09XCJhdXRvXCI/XCI0LjBlbVwiOmUsdGhpcy5pbml0VGFyZ2V0KCksdGhpcy52YWx1ZXMubGVuZ3RofHwodGhpcy5kaXNhYmxlZD0xKX0sZ2V0UmVnaW9uOmZ1bmN0aW9uKCl7cmV0dXJuIDF9LGdldEN1cnJlbnRSZWdpb25GaWVsZHM6ZnVuY3Rpb24oKXt2YXIgYT1be2ZpZWxkOlwibHFcIix2YWx1ZTp0aGlzLnF1YXJ0aWxlc1swXX0se2ZpZWxkOlwibWVkXCIsdmFsdWU6dGhpcy5xdWFydGlsZXNcblsxXX0se2ZpZWxkOlwidXFcIix2YWx1ZTp0aGlzLnF1YXJ0aWxlc1syXX1dO3JldHVybiB0aGlzLmxvdXRsaWVyIT09YyYmYS5wdXNoKHtmaWVsZDpcImxvXCIsdmFsdWU6dGhpcy5sb3V0bGllcn0pLHRoaXMucm91dGxpZXIhPT1jJiZhLnB1c2goe2ZpZWxkOlwicm9cIix2YWx1ZTp0aGlzLnJvdXRsaWVyfSksdGhpcy5sd2hpc2tlciE9PWMmJmEucHVzaCh7ZmllbGQ6XCJsd1wiLHZhbHVlOnRoaXMubHdoaXNrZXJ9KSx0aGlzLnJ3aGlza2VyIT09YyYmYS5wdXNoKHtmaWVsZDpcInJ3XCIsdmFsdWU6dGhpcy5yd2hpc2tlcn0pLGF9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMudGFyZ2V0LGQ9dGhpcy52YWx1ZXMsZT1kLmxlbmd0aCxmPXRoaXMub3B0aW9ucyxnPXRoaXMuY2FudmFzV2lkdGgsaD10aGlzLmNhbnZhc0hlaWdodCxpPWYuZ2V0KFwiY2hhcnRSYW5nZU1pblwiKT09PWM/Yi5taW4uYXBwbHkoYixkKTpmLmdldChcImNoYXJ0UmFuZ2VNaW5cIiksaz1mLmdldChcImNoYXJ0UmFuZ2VNYXhcIik9PT1jP2IubWF4LmFwcGx5KGIsZCk6Zi5nZXQoXCJjaGFydFJhbmdlTWF4XCIpLGw9MCxtLG4sbyxwLHEscixzLHQsdSx2LHc7aWYoIUQuX3N1cGVyLnJlbmRlci5jYWxsKHRoaXMpKXJldHVybjtpZihmLmdldChcInJhd1wiKSlmLmdldChcInNob3dPdXRsaWVyc1wiKSYmZC5sZW5ndGg+NT8obj1kWzBdLG09ZFsxXSxwPWRbMl0scT1kWzNdLHI9ZFs0XSxzPWRbNV0sdD1kWzZdKToobT1kWzBdLHA9ZFsxXSxxPWRbMl0scj1kWzNdLHM9ZFs0XSk7ZWxzZXtkLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS1ifSkscD1qKGQsMSkscT1qKGQsMikscj1qKGQsMyksbz1yLXA7aWYoZi5nZXQoXCJzaG93T3V0bGllcnNcIikpe209cz1jO2Zvcih1PTA7dTxlO3UrKyltPT09YyYmZFt1XT5wLW8qZi5nZXQoXCJvdXRsaWVySVFSXCIpJiYobT1kW3VdKSxkW3VdPHIrbypmLmdldChcIm91dGxpZXJJUVJcIikmJihzPWRbdV0pO249ZFswXSx0PWRbZS0xXX1lbHNlIG09ZFswXSxzPWRbZS0xXX10aGlzLnF1YXJ0aWxlcz1bcCxxLHJdLHRoaXMubHdoaXNrZXI9bSx0aGlzLnJ3aGlza2VyPXMsdGhpcy5sb3V0bGllcj1uLHRoaXMucm91dGxpZXI9dCx3PWcvKGstaSsxKSxmLmdldChcInNob3dPdXRsaWVyc1wiKSYmKGw9Yi5jZWlsKGYuZ2V0KFwic3BvdFJhZGl1c1wiKSksZy09MipiLmNlaWwoZi5nZXQoXCJzcG90UmFkaXVzXCIpKSx3PWcvKGstaSsxKSxuPG0mJmEuZHJhd0NpcmNsZSgobi1pKSp3K2wsaC8yLGYuZ2V0KFwic3BvdFJhZGl1c1wiKSxmLmdldChcIm91dGxpZXJMaW5lQ29sb3JcIiksZi5nZXQoXCJvdXRsaWVyRmlsbENvbG9yXCIpKS5hcHBlbmQoKSx0PnMmJmEuZHJhd0NpcmNsZSgodC1pKSp3K2wsaC8yLGYuZ2V0KFwic3BvdFJhZGl1c1wiKSxmLmdldChcIm91dGxpZXJMaW5lQ29sb3JcIiksZi5nZXQoXCJvdXRsaWVyRmlsbENvbG9yXCIpKS5hcHBlbmQoKSksYS5kcmF3UmVjdChiLnJvdW5kKChwLWkpKncrbCksYi5yb3VuZChoKi4xKSxiLnJvdW5kKChyLXApKncpLGIucm91bmQoaCouOCksZi5nZXQoXCJib3hMaW5lQ29sb3JcIiksZi5nZXQoXCJib3hGaWxsQ29sb3JcIikpLmFwcGVuZCgpLGEuZHJhd0xpbmUoYi5yb3VuZCgobS1pKSp3K2wpLGIucm91bmQoaC8yKSxiLnJvdW5kKChwLWkpKncrbCksYi5yb3VuZChoLzIpLGYuZ2V0KFwibGluZUNvbG9yXCIpKS5hcHBlbmQoKSxhLmRyYXdMaW5lKGIucm91bmQoKG0taSkqdytsKSxiLnJvdW5kKGgvNCksYi5yb3VuZCgobS1pKSp3K2wpLGIucm91bmQoaC1oLzQpLGYuZ2V0KFwid2hpc2tlckNvbG9yXCIpKS5hcHBlbmQoKSxhLmRyYXdMaW5lKGIucm91bmQoKHMtaSkqdytsKSxiLnJvdW5kKGgvMiksYi5yb3VuZCgoci1pKSp3K2wpLGIucm91bmQoaC8yKSxmLmdldChcImxpbmVDb2xvclwiKSkuYXBwZW5kKCksYS5kcmF3TGluZShiLnJvdW5kKChzLWkpKncrbCksYi5yb3VuZChoLzQpLGIucm91bmQoKHMtaSkqdytsKSxiLnJvdW5kKGgtaC80KSxmLmdldChcIndoaXNrZXJDb2xvclwiKSkuYXBwZW5kKCksYS5kcmF3TGluZShiLnJvdW5kKChxLWkpKncrbCksYi5yb3VuZChoKi4xKSxiLnJvdW5kKChxLWkpKncrbCksYi5yb3VuZChoKi45KSxmLmdldChcIm1lZGlhbkNvbG9yXCIpKS5hcHBlbmQoKSxmLmdldChcInRhcmdldFwiKSYmKHY9Yi5jZWlsKGYuZ2V0KFwic3BvdFJhZGl1c1wiKSksYS5kcmF3TGluZShiLnJvdW5kKChmLmdldChcInRhcmdldFwiKS1pKSp3K2wpLGIucm91bmQoaC8yLXYpLGIucm91bmQoKGYuZ2V0KFwidGFyZ2V0XCIpLWkpKncrbCksYi5yb3VuZChoLzIrdiksZi5nZXQoXCJ0YXJnZXRDb2xvclwiKSkuYXBwZW5kKCksYS5kcmF3TGluZShiLnJvdW5kKChmLmdldChcInRhcmdldFwiKS1pKSp3K2wtdiksYi5yb3VuZChoLzIpLGIucm91bmQoKGYuZ2V0KFwidGFyZ2V0XCIpLWkpKncrbCt2KSxiLnJvdW5kKGgvMiksZi5nZXQoXCJ0YXJnZXRDb2xvclwiKSkuYXBwZW5kKCkpLGEucmVuZGVyKCl9fSksRz1nKHtpbml0OmZ1bmN0aW9uKGEsYixjLGQpe3RoaXMudGFyZ2V0PWEsdGhpcy5pZD1iLHRoaXMudHlwZT1jLHRoaXMuYXJncz1kfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YXJnZXQuYXBwZW5kU2hhcGUodGhpcyksdGhpc319KSxIPWcoe19weHJlZ2V4Oi8oXFxkKykocHgpP1xccyokL2ksaW5pdDpmdW5jdGlvbihhLGIsYyl7aWYoIWEpcmV0dXJuO3RoaXMud2lkdGg9YSx0aGlzLmhlaWdodD1iLHRoaXMudGFyZ2V0PWMsdGhpcy5sYXN0U2hhcGVJZD1udWxsLGNbMF0mJihjPWNbMF0pLGQuZGF0YShjLFwiX2pxc192Y2FudmFzXCIsdGhpcyl9LGRyYXdMaW5lOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdGhpcy5kcmF3U2hhcGUoW1thLGJdLFtjLGRdXSxlLGYpfSxkcmF3U2hhcGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuX2dlblNoYXBlKFwiU2hhcGVcIixbYSxiLGMsZF0pfSxkcmF3Q2lyY2xlOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXtyZXR1cm4gdGhpcy5fZ2VuU2hhcGUoXCJDaXJjbGVcIixbYSxiLGMsZCxlLGZdKX0sZHJhd1BpZVNsaWNlOmZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3JldHVybiB0aGlzLl9nZW5TaGFwZShcIlBpZVNsaWNlXCIsW2EsYixjLGQsZSxmLGddKX0sZHJhd1JlY3Q6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3JldHVybiB0aGlzLl9nZW5TaGFwZShcIlJlY3RcIixbYSxiLGMsZCxlLGZdKX0sZ2V0RWxlbWVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNhbnZhc30sZ2V0TGFzdFNoYXBlSWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sYXN0U2hhcGVJZH0scmVzZXQ6ZnVuY3Rpb24oKXthbGVydChcInJlc2V0IG5vdCBpbXBsZW1lbnRlZFwiKX0sX2luc2VydDpmdW5jdGlvbihhLGIpe2QoYikuaHRtbChhKX0sX2NhbGN1bGF0ZVBpeGVsRGltczpmdW5jdGlvbihhLGIsYyl7dmFyIGU7ZT10aGlzLl9weHJlZ2V4LmV4ZWMoYiksZT90aGlzLnBpeGVsSGVpZ2h0PWVbMV06dGhpcy5waXhlbEhlaWdodD1kKGMpLmhlaWdodCgpLGU9dGhpcy5fcHhyZWdleC5leGVjKGEpLGU/dGhpcy5waXhlbFdpZHRoPWVbMV06dGhpcy5waXhlbFdpZHRoPWQoYykud2lkdGgoKX0sX2dlblNoYXBlOmZ1bmN0aW9uKGEsYil7dmFyIGM9TCsrO3JldHVybiBiLnVuc2hpZnQoYyksbmV3IEcodGhpcyxjLGEsYil9LGFwcGVuZFNoYXBlOmZ1bmN0aW9uKGEpe2FsZXJ0KFwiYXBwZW5kU2hhcGUgbm90IGltcGxlbWVudGVkXCIpfSxyZXBsYWNlV2l0aFNoYXBlOmZ1bmN0aW9uKGEsYil7YWxlcnQoXCJyZXBsYWNlV2l0aFNoYXBlIG5vdCBpbXBsZW1lbnRlZFwiKX0saW5zZXJ0QWZ0ZXJTaGFwZTpmdW5jdGlvbihhLGIpe2FsZXJ0KFwiaW5zZXJ0QWZ0ZXJTaGFwZSBub3QgaW1wbGVtZW50ZWRcIil9LHJlbW92ZVNoYXBlSWQ6ZnVuY3Rpb24oYSl7YWxlcnQoXCJyZW1vdmVTaGFwZUlkIG5vdCBpbXBsZW1lbnRlZFwiKX0sZ2V0U2hhcGVBdDpmdW5jdGlvbihhLGIsYyl7YWxlcnQoXCJnZXRTaGFwZUF0IG5vdCBpbXBsZW1lbnRlZFwiKX0scmVuZGVyOmZ1bmN0aW9uKCl7YWxlcnQoXCJyZW5kZXIgbm90IGltcGxlbWVudGVkXCIpfX0pLEk9ZyhILHtpbml0OmZ1bmN0aW9uKGIsZSxmLGcpe0kuX3N1cGVyLmluaXQuY2FsbCh0aGlzLGIsZSxmKSx0aGlzLmNhbnZhcz1hLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiksZlswXSYmKGY9ZlswXSksZC5kYXRhKGYsXCJfanFzX3ZjYW52YXNcIix0aGlzKSxkKHRoaXMuY2FudmFzKS5jc3Moe2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIix3aWR0aDpiLGhlaWdodDplLHZlcnRpY2FsQWxpZ246XCJ0b3BcIn0pLHRoaXMuX2luc2VydCh0aGlzLmNhbnZhcyxmKSx0aGlzLl9jYWxjdWxhdGVQaXhlbERpbXMoYixlLHRoaXMuY2FudmFzKSx0aGlzLmNhbnZhcy53aWR0aD10aGlzLnBpeGVsV2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0PXRoaXMucGl4ZWxIZWlnaHQsdGhpcy5pbnRlcmFjdD1nLHRoaXMuc2hhcGVzPXt9LHRoaXMuc2hhcGVzZXE9W10sdGhpcy5jdXJyZW50VGFyZ2V0U2hhcGVJZD1jLGQodGhpcy5jYW52YXMpLmNzcyh7d2lkdGg6dGhpcy5waXhlbFdpZHRoLGhlaWdodDp0aGlzLnBpeGVsSGVpZ2h0fSl9LF9nZXRDb250ZXh0OmZ1bmN0aW9uKGEsYixkKXt2YXIgZT10aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGEhPT1jJiYoZS5zdHJva2VTdHlsZT1hKSxlLmxpbmVXaWR0aD1kPT09Yz8xOmQsYiE9PWMmJihlLmZpbGxTdHlsZT1iKSxlfSxyZXNldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX2dldENvbnRleHQoKTthLmNsZWFyUmVjdCgwLDAsdGhpcy5waXhlbFdpZHRoLHRoaXMucGl4ZWxIZWlnaHQpLHRoaXMuc2hhcGVzPXt9LHRoaXMuc2hhcGVzZXE9W10sdGhpcy5jdXJyZW50VGFyZ2V0U2hhcGVJZD1jfSxfZHJhd1NoYXBlOmZ1bmN0aW9uKGEsYixkLGUsZil7dmFyIGc9dGhpcy5fZ2V0Q29udGV4dChkLGUsZiksaCxpO2cuYmVnaW5QYXRoKCksZy5tb3ZlVG8oYlswXVswXSsuNSxiWzBdWzFdKy41KTtmb3IoaD0xLGk9Yi5sZW5ndGg7aDxpO2grKylnLmxpbmVUbyhiW2hdWzBdKy41LGJbaF1bMV0rLjUpO2QhPT1jJiZnLnN0cm9rZSgpLGUhPT1jJiZnLmZpbGwoKSx0aGlzLnRhcmdldFghPT1jJiZ0aGlzLnRhcmdldFkhPT1jJiZnLmlzUG9pbnRJblBhdGgodGhpcy50YXJnZXRYLHRoaXMudGFyZ2V0WSkmJih0aGlzLmN1cnJlbnRUYXJnZXRTaGFwZUlkPWEpfSxfZHJhd0NpcmNsZTpmdW5jdGlvbihhLGQsZSxmLGcsaCxpKXt2YXIgaj10aGlzLl9nZXRDb250ZXh0KGcsaCxpKTtqLmJlZ2luUGF0aCgpLGouYXJjKGQsZSxmLDAsMipiLlBJLCExKSx0aGlzLnRhcmdldFghPT1jJiZ0aGlzLnRhcmdldFkhPT1jJiZqLmlzUG9pbnRJblBhdGgodGhpcy50YXJnZXRYLHRoaXMudGFyZ2V0WSkmJih0aGlzLmN1cnJlbnRUYXJnZXRTaGFwZUlkPWEpLGchPT1jJiZqLnN0cm9rZSgpLGghPT1jJiZqLmZpbGwoKX0sX2RyYXdQaWVTbGljZTpmdW5jdGlvbihhLGIsZCxlLGYsZyxoLGkpe3ZhciBqPXRoaXMuX2dldENvbnRleHQoaCxpKTtqLmJlZ2luUGF0aCgpLGoubW92ZVRvKGIsZCksai5hcmMoYixkLGUsZixnLCExKSxqLmxpbmVUbyhiLGQpLGouY2xvc2VQYXRoKCksaCE9PWMmJmouc3Ryb2tlKCksaSYmai5maWxsKCksdGhpcy50YXJnZXRYIT09YyYmdGhpcy50YXJnZXRZIT09YyYmai5pc1BvaW50SW5QYXRoKHRoaXMudGFyZ2V0WCx0aGlzLnRhcmdldFkpJiYodGhpcy5jdXJyZW50VGFyZ2V0U2hhcGVJZD1hKX0sX2RyYXdSZWN0OmZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3JldHVybiB0aGlzLl9kcmF3U2hhcGUoYSxbW2IsY10sW2IrZCxjXSxbYitkLGMrZV0sW2IsYytlXSxbYixjXV0sZixnKX0sYXBwZW5kU2hhcGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc2hhcGVzW2EuaWRdPWEsdGhpcy5zaGFwZXNlcS5wdXNoKGEuaWQpLHRoaXMubGFzdFNoYXBlSWQ9YS5pZCxhLmlkfSxyZXBsYWNlV2l0aFNoYXBlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zaGFwZXNlcSxkO3RoaXMuc2hhcGVzW2IuaWRdPWI7Zm9yKGQ9Yy5sZW5ndGg7ZC0tOyljW2RdPT1hJiYoY1tkXT1iLmlkKTtkZWxldGUgdGhpcy5zaGFwZXNbYV19LHJlcGxhY2VXaXRoU2hhcGVzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zaGFwZXNlcSxkPXt9LGUsZixnO2ZvcihmPWEubGVuZ3RoO2YtLTspZFthW2ZdXT0hMDtmb3IoZj1jLmxlbmd0aDtmLS07KWU9Y1tmXSxkW2VdJiYoYy5zcGxpY2UoZiwxKSxkZWxldGUgdGhpcy5zaGFwZXNbZV0sZz1mKTtmb3IoZj1iLmxlbmd0aDtmLS07KWMuc3BsaWNlKGcsMCxiW2ZdLmlkKSx0aGlzLnNoYXBlc1tiW2ZdLmlkXT1iW2ZdfSxpbnNlcnRBZnRlclNoYXBlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5zaGFwZXNlcSxkO2ZvcihkPWMubGVuZ3RoO2QtLTspaWYoY1tkXT09PWEpe2Muc3BsaWNlKGQrMSwwLGIuaWQpLHRoaXMuc2hhcGVzW2IuaWRdPWI7cmV0dXJufX0scmVtb3ZlU2hhcGVJZDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnNoYXBlc2VxLGM7Zm9yKGM9Yi5sZW5ndGg7Yy0tOylpZihiW2NdPT09YSl7Yi5zcGxpY2UoYywxKTticmVha31kZWxldGUgdGhpcy5zaGFwZXNbYV19LGdldFNoYXBlQXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLnRhcmdldFg9Yix0aGlzLnRhcmdldFk9Yyx0aGlzLnJlbmRlcigpLHRoaXMuY3VycmVudFRhcmdldFNoYXBlSWR9LHJlbmRlcjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuc2hhcGVzZXEsYj10aGlzLnNoYXBlcyxjPWEubGVuZ3RoLGQ9dGhpcy5fZ2V0Q29udGV4dCgpLGUsZixnO2QuY2xlYXJSZWN0KDAsMCx0aGlzLnBpeGVsV2lkdGgsdGhpcy5waXhlbEhlaWdodCk7Zm9yKGc9MDtnPGM7ZysrKWU9YVtnXSxmPWJbZV0sdGhpc1tcIl9kcmF3XCIrZi50eXBlXS5hcHBseSh0aGlzLGYuYXJncyk7dGhpcy5pbnRlcmFjdHx8KHRoaXMuc2hhcGVzPXt9LHRoaXMuc2hhcGVzZXE9W10pfX0pLEo9ZyhILHtpbml0OmZ1bmN0aW9uKGIsYyxlKXt2YXIgZjtKLl9zdXBlci5pbml0LmNhbGwodGhpcyxiLGMsZSksZVswXSYmKGU9ZVswXSksZC5kYXRhKGUsXCJfanFzX3ZjYW52YXNcIix0aGlzKSx0aGlzLmNhbnZhcz1hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGQodGhpcy5jYW52YXMpLmNzcyh7ZGlzcGxheTpcImlubGluZS1ibG9ja1wiLHBvc2l0aW9uOlwicmVsYXRpdmVcIixvdmVyZmxvdzpcImhpZGRlblwiLHdpZHRoOmIsaGVpZ2h0OmMsbWFyZ2luOlwiMHB4XCIscGFkZGluZzpcIjBweFwiLHZlcnRpY2FsQWxpZ246XCJ0b3BcIn0pLHRoaXMuX2luc2VydCh0aGlzLmNhbnZhcyxlKSx0aGlzLl9jYWxjdWxhdGVQaXhlbERpbXMoYixjLHRoaXMuY2FudmFzKSx0aGlzLmNhbnZhcy53aWR0aD10aGlzLnBpeGVsV2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0PXRoaXMucGl4ZWxIZWlnaHQsZj0nPHY6Z3JvdXAgY29vcmRvcmlnaW49XCIwIDBcIiBjb29yZHNpemU9XCInK3RoaXMucGl4ZWxXaWR0aCtcIiBcIit0aGlzLnBpeGVsSGVpZ2h0KydcIicrJyBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDonK3RoaXMucGl4ZWxXaWR0aCtcInB4O2hlaWdodD1cIit0aGlzLnBpeGVsSGVpZ2h0KydweDtcIj48L3Y6Z3JvdXA+Jyx0aGlzLmNhbnZhcy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVFbmRcIixmKSx0aGlzLmdyb3VwPWQodGhpcy5jYW52YXMpLmNoaWxkcmVuKClbMF0sdGhpcy5yZW5kZXJlZD0hMSx0aGlzLnByZXJlbmRlcj1cIlwifSxfZHJhd1NoYXBlOmZ1bmN0aW9uKGEsYixkLGUsZil7dmFyIGc9W10saCxpLGosayxsLG0sbjtmb3Iobj0wLG09Yi5sZW5ndGg7bjxtO24rKylnW25dPVwiXCIrYltuXVswXStcIixcIitiW25dWzFdO3JldHVybiBoPWcuc3BsaWNlKDAsMSksZj1mPT09Yz8xOmYsaT1kPT09Yz8nIHN0cm9rZWQ9XCJmYWxzZVwiICc6JyBzdHJva2VXZWlnaHQ9XCInK2YrJ3B4XCIgc3Ryb2tlQ29sb3I9XCInK2QrJ1wiICcsaj1lPT09Yz8nIGZpbGxlZD1cImZhbHNlXCInOicgZmlsbENvbG9yPVwiJytlKydcIiBmaWxsZWQ9XCJ0cnVlXCIgJyxrPWdbMF09PT1nW2cubGVuZ3RoLTFdP1wieCBcIjpcIlwiLGw9Jzx2OnNoYXBlIGNvb3Jkb3JpZ2luPVwiMCAwXCIgY29vcmRzaXplPVwiJyt0aGlzLnBpeGVsV2lkdGgrXCIgXCIrdGhpcy5waXhlbEhlaWdodCsnXCIgJysnIGlkPVwianFzc2hhcGUnK2ErJ1wiICcraStqKycgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjBweDt0b3A6MHB4O2hlaWdodDonK3RoaXMucGl4ZWxIZWlnaHQrXCJweDt3aWR0aDpcIit0aGlzLnBpeGVsV2lkdGgrJ3B4O3BhZGRpbmc6MHB4O21hcmdpbjowcHg7XCIgJysnIHBhdGg9XCJtICcraCtcIiBsIFwiK2cuam9pbihcIiwgXCIpK1wiIFwiK2srJ2VcIj4nK1wiIDwvdjpzaGFwZT5cIixsfSxfZHJhd0NpcmNsZTpmdW5jdGlvbihhLGIsZCxlLGYsZyxoKXt2YXIgaSxqLGs7cmV0dXJuIGItPWUsZC09ZSxpPWY9PT1jPycgc3Ryb2tlZD1cImZhbHNlXCIgJzonIHN0cm9rZVdlaWdodD1cIicraCsncHhcIiBzdHJva2VDb2xvcj1cIicrZisnXCIgJyxqPWc9PT1jPycgZmlsbGVkPVwiZmFsc2VcIic6JyBmaWxsQ29sb3I9XCInK2crJ1wiIGZpbGxlZD1cInRydWVcIiAnLGs9Jzx2Om92YWwgIGlkPVwianFzc2hhcGUnK2ErJ1wiICcraStqKycgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6JytkK1wicHg7IGxlZnQ6XCIrYitcInB4OyB3aWR0aDpcIitlKjIrXCJweDsgaGVpZ2h0OlwiK2UqMisncHhcIj48L3Y6b3ZhbD4nLGt9LF9kcmF3UGllU2xpY2U6ZnVuY3Rpb24oYSxkLGUsZixnLGgsaSxqKXt2YXIgayxsLG0sbixvLHAscSxyO2lmKGc9PT1oKXJldHVyblwiXCI7aC1nPT09MipiLlBJJiYoZz0wLGg9MipiLlBJKSxsPWQrYi5yb3VuZChiLmNvcyhnKSpmKSxtPWUrYi5yb3VuZChiLnNpbihnKSpmKSxuPWQrYi5yb3VuZChiLmNvcyhoKSpmKSxvPWUrYi5yb3VuZChiLnNpbihoKSpmKTtpZihsPT09biYmbT09PW8pe2lmKGgtZzxiLlBJKXJldHVyblwiXCI7bD1uPWQrZixtPW89ZX1yZXR1cm4gbD09PW4mJm09PT1vJiZoLWc8Yi5QST9cIlwiOihrPVtkLWYsZS1mLGQrZixlK2YsbCxtLG4sb10scD1pPT09Yz8nIHN0cm9rZWQ9XCJmYWxzZVwiICc6JyBzdHJva2VXZWlnaHQ9XCIxcHhcIiBzdHJva2VDb2xvcj1cIicraSsnXCIgJyxxPWo9PT1jPycgZmlsbGVkPVwiZmFsc2VcIic6JyBmaWxsQ29sb3I9XCInK2orJ1wiIGZpbGxlZD1cInRydWVcIiAnLHI9Jzx2OnNoYXBlIGNvb3Jkb3JpZ2luPVwiMCAwXCIgY29vcmRzaXplPVwiJyt0aGlzLnBpeGVsV2lkdGgrXCIgXCIrdGhpcy5waXhlbEhlaWdodCsnXCIgJysnIGlkPVwianFzc2hhcGUnK2ErJ1wiICcrcCtxKycgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjBweDt0b3A6MHB4O2hlaWdodDonK3RoaXMucGl4ZWxIZWlnaHQrXCJweDt3aWR0aDpcIit0aGlzLnBpeGVsV2lkdGgrJ3B4O3BhZGRpbmc6MHB4O21hcmdpbjowcHg7XCIgJysnIHBhdGg9XCJtICcrZCtcIixcIitlK1wiIHdhIFwiK2suam9pbihcIiwgXCIpKycgeCBlXCI+JytcIiA8L3Y6c2hhcGU+XCIscil9LF9kcmF3UmVjdDpmdW5jdGlvbihhLGIsYyxkLGUsZixnKXtyZXR1cm4gdGhpcy5fZHJhd1NoYXBlKGEsW1tiLGNdLFtiLGMrZV0sW2IrZCxjK2VdLFtiK2QsY10sW2IsY11dLGYsZyl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5ncm91cC5pbm5lckhUTUw9XCJcIn0sYXBwZW5kU2hhcGU6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1tcIl9kcmF3XCIrYS50eXBlXS5hcHBseSh0aGlzLGEuYXJncyk7cmV0dXJuIHRoaXMucmVuZGVyZWQ/dGhpcy5ncm91cC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVFbmRcIixiKTp0aGlzLnByZXJlbmRlcis9Yix0aGlzLmxhc3RTaGFwZUlkPWEuaWQsYS5pZH0scmVwbGFjZVdpdGhTaGFwZTpmdW5jdGlvbihhLGIpe3ZhciBjPWQoXCIjanFzc2hhcGVcIithKSxlPXRoaXNbXCJfZHJhd1wiK2IudHlwZV0uYXBwbHkodGhpcyxiLmFyZ3MpO2NbMF0ub3V0ZXJIVE1MPWV9LHJlcGxhY2VXaXRoU2hhcGVzOmZ1bmN0aW9uKGEsYil7dmFyIGM9ZChcIiNqcXNzaGFwZVwiK2FbMF0pLGU9XCJcIixmPWIubGVuZ3RoLGc7Zm9yKGc9MDtnPGY7ZysrKWUrPXRoaXNbXCJfZHJhd1wiK2JbZ10udHlwZV0uYXBwbHkodGhpcyxiW2ddLmFyZ3MpO2NbMF0ub3V0ZXJIVE1MPWU7Zm9yKGc9MTtnPGEubGVuZ3RoO2crKylkKFwiI2pxc3NoYXBlXCIrYVtnXSkucmVtb3ZlKCl9LGluc2VydEFmdGVyU2hhcGU6ZnVuY3Rpb24oYSxiKXt2YXIgYz1kKFwiI2pxc3NoYXBlXCIrYSksZT10aGlzW1wiX2RyYXdcIitiLnR5cGVdLmFwcGx5KHRoaXMsYi5hcmdzKTtjWzBdLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyRW5kXCIsZSl9LHJlbW92ZVNoYXBlSWQ6ZnVuY3Rpb24oYSl7dmFyIGI9ZChcIiNqcXNzaGFwZVwiK2EpO3RoaXMuZ3JvdXAucmVtb3ZlQ2hpbGQoYlswXSl9LGdldFNoYXBlQXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuaWQuc3Vic3RyKDgpO3JldHVybiBkfSxyZW5kZXI6ZnVuY3Rpb24oKXt0aGlzLnJlbmRlcmVkfHwodGhpcy5ncm91cC5pbm5lckhUTUw9dGhpcy5wcmVyZW5kZXIsdGhpcy5yZW5kZXJlZD0hMCl9fSl9KX0pKGRvY3VtZW50LE1hdGgpOyIsIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLyogU2V0IHVwIGEgUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNoaW0gc28gd2UgY2FuIGFuaW1hdGUgZWZmaWNpZW50bHkgRk9SXG4gICAqIEdSRUFUIEpVU1RJQ0UuICovXG4gIHZhciByZXF1ZXN0SW50ZXJ2YWwsIGNhbmNlbEludGVydmFsO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgcmFmID0gZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgIGdsb2JhbC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICAgICAgICAgICAgZ2xvYmFsLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICxcbiAgICAgICAgY2FmID0gZ2xvYmFsLmNhbmNlbEFuaW1hdGlvbkZyYW1lICAgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgIHx8XG4gICAgICAgICAgICAgIGdsb2JhbC5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICAgICAgICAgICAgZ2xvYmFsLm9DYW5jZWxBbmltYXRpb25GcmFtZSAgICAgICB8fFxuICAgICAgICAgICAgICBnbG9iYWwubXNDYW5jZWxBbmltYXRpb25GcmFtZSAgICAgIDtcblxuICAgIGlmKHJhZiAmJiBjYWYpIHtcbiAgICAgIHJlcXVlc3RJbnRlcnZhbCA9IGZ1bmN0aW9uKGZuLCBkZWxheSkge1xuICAgICAgICB2YXIgaGFuZGxlID0ge3ZhbHVlOiBudWxsfTtcblxuICAgICAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgICAgIGhhbmRsZS52YWx1ZSA9IHJhZihsb29wKTtcbiAgICAgICAgICBmbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9vcCgpO1xuICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgfTtcblxuICAgICAgY2FuY2VsSW50ZXJ2YWwgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgY2FmKGhhbmRsZS52YWx1ZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgcmVxdWVzdEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gICAgICBjYW5jZWxJbnRlcnZhbCA9IGNsZWFySW50ZXJ2YWw7XG4gICAgfVxuICB9KCkpO1xuXG4gIC8qIENhdG11bGwtcm9tIHNwbGluZSBzdHVmZnMuICovXG4gIC8qXG4gIGZ1bmN0aW9uIHVwc2FtcGxlKG4sIHNwbGluZSkge1xuICAgIHZhciBwb2x5bGluZSA9IFtdLFxuICAgICAgICBsZW4gPSBzcGxpbmUubGVuZ3RoLFxuICAgICAgICBieCAgPSBzcGxpbmVbMF0sXG4gICAgICAgIGJ5ICA9IHNwbGluZVsxXSxcbiAgICAgICAgY3ggID0gc3BsaW5lWzJdLFxuICAgICAgICBjeSAgPSBzcGxpbmVbM10sXG4gICAgICAgIGR4ICA9IHNwbGluZVs0XSxcbiAgICAgICAgZHkgID0gc3BsaW5lWzVdLFxuICAgICAgICBpLCBqLCBheCwgYXksIHB4LCBxeCwgcngsIHN4LCBweSwgcXksIHJ5LCBzeSwgdDtcblxuICAgIGZvcihpID0gNjsgaSAhPT0gc3BsaW5lLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBheCA9IGJ4O1xuICAgICAgYnggPSBjeDtcbiAgICAgIGN4ID0gZHg7XG4gICAgICBkeCA9IHNwbGluZVtpICAgIF07XG4gICAgICBweCA9IC0wLjUgKiBheCArIDEuNSAqIGJ4IC0gMS41ICogY3ggKyAwLjUgKiBkeDtcbiAgICAgIHF4ID0gICAgICAgIGF4IC0gMi41ICogYnggKyAyLjAgKiBjeCAtIDAuNSAqIGR4O1xuICAgICAgcnggPSAtMC41ICogYXggICAgICAgICAgICArIDAuNSAqIGN4ICAgICAgICAgICA7XG4gICAgICBzeCA9ICAgICAgICAgICAgICAgICAgIGJ4ICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgYXkgPSBieTtcbiAgICAgIGJ5ID0gY3k7XG4gICAgICBjeSA9IGR5O1xuICAgICAgZHkgPSBzcGxpbmVbaSArIDFdO1xuICAgICAgcHkgPSAtMC41ICogYXkgKyAxLjUgKiBieSAtIDEuNSAqIGN5ICsgMC41ICogZHk7XG4gICAgICBxeSA9ICAgICAgICBheSAtIDIuNSAqIGJ5ICsgMi4wICogY3kgLSAwLjUgKiBkeTtcbiAgICAgIHJ5ID0gLTAuNSAqIGF5ICAgICAgICAgICAgKyAwLjUgKiBjeSAgICAgICAgICAgO1xuICAgICAgc3kgPSAgICAgICAgICAgICAgICAgICBieSAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIGZvcihqID0gMDsgaiAhPT0gbjsgKytqKSB7XG4gICAgICAgIHQgPSBqIC8gbjtcblxuICAgICAgICBwb2x5bGluZS5wdXNoKFxuICAgICAgICAgICgocHggKiB0ICsgcXgpICogdCArIHJ4KSAqIHQgKyBzeCxcbiAgICAgICAgICAoKHB5ICogdCArIHF5KSAqIHQgKyByeSkgKiB0ICsgc3lcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwb2x5bGluZS5wdXNoKFxuICAgICAgcHggKyBxeCArIHJ4ICsgc3gsXG4gICAgICBweSArIHF5ICsgcnkgKyBzeVxuICAgICk7XG5cbiAgICByZXR1cm4gcG9seWxpbmU7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duc2FtcGxlKG4sIHBvbHlsaW5lKSB7XG4gICAgdmFyIGxlbiA9IDAsXG4gICAgICAgIGksIGR4LCBkeTtcblxuICAgIGZvcihpID0gMjsgaSAhPT0gcG9seWxpbmUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGR4ID0gcG9seWxpbmVbaSAgICBdIC0gcG9seWxpbmVbaSAtIDJdO1xuICAgICAgZHkgPSBwb2x5bGluZVtpICsgMV0gLSBwb2x5bGluZVtpIC0gMV07XG4gICAgICBsZW4gKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICBsZW4gLz0gbjtcblxuICAgIHZhciBzbWFsbCA9IFtdLFxuICAgICAgICB0YXJnZXQgPSBsZW4sXG4gICAgICAgIG1pbiA9IDAsXG4gICAgICAgIG1heCwgdDtcblxuICAgIHNtYWxsLnB1c2gocG9seWxpbmVbMF0sIHBvbHlsaW5lWzFdKTtcblxuICAgIGZvcihpID0gMjsgaSAhPT0gcG9seWxpbmUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIGR4ID0gcG9seWxpbmVbaSAgICBdIC0gcG9seWxpbmVbaSAtIDJdO1xuICAgICAgZHkgPSBwb2x5bGluZVtpICsgMV0gLSBwb2x5bGluZVtpIC0gMV07XG4gICAgICBtYXggPSBtaW4gKyBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICBpZihtYXggPiB0YXJnZXQpIHtcbiAgICAgICAgdCA9ICh0YXJnZXQgLSBtaW4pIC8gKG1heCAtIG1pbik7XG5cbiAgICAgICAgc21hbGwucHVzaChcbiAgICAgICAgICBwb2x5bGluZVtpIC0gMl0gKyBkeCAqIHQsXG4gICAgICAgICAgcG9seWxpbmVbaSAtIDFdICsgZHkgKiB0XG4gICAgICAgICk7XG5cbiAgICAgICAgdGFyZ2V0ICs9IGxlbjtcbiAgICAgIH1cblxuICAgICAgbWluID0gbWF4O1xuICAgIH1cblxuICAgIHNtYWxsLnB1c2gocG9seWxpbmVbcG9seWxpbmUubGVuZ3RoIC0gMl0sIHBvbHlsaW5lW3BvbHlsaW5lLmxlbmd0aCAtIDFdKTtcblxuICAgIHJldHVybiBzbWFsbDtcbiAgfVxuICAqL1xuXG4gIC8qIERlZmluZSBza3ljb24gdGhpbmdzLiAqL1xuICAvKiBGSVhNRTogSSdtICpyZWFsbHkgcmVhbGx5KiBzb3JyeSB0aGF0IHRoaXMgY29kZSBpcyBzbyBncm9zcy4gUmVhbGx5LCBJIGFtLlxuICAgKiBJJ2xsIHRyeSB0byBjbGVhbiBpdCB1cCBldmVudHVhbGx5ISBQcm9taXNlISAqL1xuICB2YXIgS0VZRlJBTUUgPSA1MDAsXG4gICAgICBTVFJPS0UgPSAwLjA4LFxuICAgICAgVEFVID0gMi4wICogTWF0aC5QSSxcbiAgICAgIFRXT19PVkVSX1NRUlRfMiA9IDIuMCAvIE1hdGguc3FydCgyKTtcblxuICBmdW5jdGlvbiBjaXJjbGUoY3R4LCB4LCB5LCByKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCwgeSwgciwgMCwgVEFVLCBmYWxzZSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmUoY3R4LCBheCwgYXksIGJ4LCBieSkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGF4LCBheSk7XG4gICAgY3R4LmxpbmVUbyhieCwgYnkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1ZmYoY3R4LCB0LCBjeCwgY3ksIHJ4LCByeSwgcm1pbiwgcm1heCkge1xuICAgIHZhciBjID0gTWF0aC5jb3ModCAqIFRBVSksXG4gICAgICAgIHMgPSBNYXRoLnNpbih0ICogVEFVKTtcblxuICAgIHJtYXggLT0gcm1pbjtcblxuICAgIGNpcmNsZShcbiAgICAgIGN0eCxcbiAgICAgIGN4IC0gcyAqIHJ4LFxuICAgICAgY3kgKyBjICogcnkgKyBybWF4ICogMC41LFxuICAgICAgcm1pbiArICgxIC0gYyAqIDAuNSkgKiBybWF4XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1ZmZzKGN0eCwgdCwgY3gsIGN5LCByeCwgcnksIHJtaW4sIHJtYXgpIHtcbiAgICB2YXIgaTtcblxuICAgIGZvcihpID0gNTsgaS0tOyApXG4gICAgICBwdWZmKGN0eCwgdCArIGkgLyA1LCBjeCwgY3ksIHJ4LCByeSwgcm1pbiwgcm1heCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbG91ZChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSAzMDAwMDtcblxuICAgIHZhciBhID0gY3cgKiAwLjIxLFxuICAgICAgICBiID0gY3cgKiAwLjEyLFxuICAgICAgICBjID0gY3cgKiAwLjI0LFxuICAgICAgICBkID0gY3cgKiAwLjI4O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIHB1ZmZzKGN0eCwgdCwgY3gsIGN5LCBhLCBiLCBjLCBkKTtcblxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICBwdWZmcyhjdHgsIHQsIGN4LCBjeSwgYSwgYiwgYyAtIHMsIGQgLSBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1bihjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSAxMjAwMDA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4yNSAtIHMgKiAwLjUsXG4gICAgICAgIGIgPSBjdyAqIDAuMzIgKyBzICogMC41LFxuICAgICAgICBjID0gY3cgKiAwLjUwIC0gcyAqIDAuNSxcbiAgICAgICAgaSwgcCwgY29zLCBzaW47XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcztcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjeCwgY3ksIGEsIDAsIFRBVSwgZmFsc2UpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGZvcihpID0gODsgaS0tOyApIHtcbiAgICAgIHAgPSAodCArIGkgLyA4KSAqIFRBVTtcbiAgICAgIGNvcyA9IE1hdGguY29zKHApO1xuICAgICAgc2luID0gTWF0aC5zaW4ocCk7XG4gICAgICBsaW5lKGN0eCwgY3ggKyBjb3MgKiBiLCBjeSArIHNpbiAqIGIsIGN4ICsgY29zICogYywgY3kgKyBzaW4gKiBjKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb29uKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDE1MDAwO1xuXG4gICAgdmFyIGEgPSBjdyAqIDAuMjkgLSBzICogMC41LFxuICAgICAgICBiID0gY3cgKiAwLjA1LFxuICAgICAgICBjID0gTWF0aC5jb3ModCAqIFRBVSksXG4gICAgICAgIHAgPSBjICogVEFVIC8gLTE2O1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgY3ggKz0gYyAqIGI7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjeCwgY3ksIGEsIHAgKyBUQVUgLyA4LCBwICsgVEFVICogNyAvIDgsIGZhbHNlKTtcbiAgICBjdHguYXJjKGN4ICsgTWF0aC5jb3MocCkgKiBhICogVFdPX09WRVJfU1FSVF8yLCBjeSArIE1hdGguc2luKHApICogYSAqIFRXT19PVkVSX1NRUlRfMiwgYSwgcCArIFRBVSAqIDUgLyA4LCBwICsgVEFVICogMyAvIDgsIHRydWUpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBmdW5jdGlvbiByYWluKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDEzNTA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4xNixcbiAgICAgICAgYiA9IFRBVSAqIDExIC8gMTIsXG4gICAgICAgIGMgPSBUQVUgKiAgNyAvIDEyLFxuICAgICAgICBpLCBwLCB4LCB5O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuXG4gICAgZm9yKGkgPSA0OyBpLS07ICkge1xuICAgICAgcCA9ICh0ICsgaSAvIDQpICUgMTtcbiAgICAgIHggPSBjeCArICgoaSAtIDEuNSkgLyAxLjUpICogKGkgPT09IDEgfHwgaSA9PT0gMiA/IC0xIDogMSkgKiBhO1xuICAgICAgeSA9IGN5ICsgcCAqIHAgKiBjdztcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oeCwgeSAtIHMgKiAxLjUpO1xuICAgICAgY3R4LmFyYyh4LCB5LCBzICogMC43NSwgYiwgYywgZmFsc2UpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzbGVldChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdCAvPSA3NTA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4xODc1LFxuICAgICAgICBiID0gVEFVICogMTEgLyAxMixcbiAgICAgICAgYyA9IFRBVSAqICA3IC8gMTIsXG4gICAgICAgIGksIHAsIHgsIHk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcyAqIDAuNTtcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBmb3IoaSA9IDQ7IGktLTsgKSB7XG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xuICAgICAgeCA9IE1hdGguZmxvb3IoY3ggKyAoKGkgLSAxLjUpIC8gMS41KSAqIChpID09PSAxIHx8IGkgPT09IDIgPyAtMSA6IDEpICogYSkgKyAwLjU7XG4gICAgICB5ID0gY3kgKyBwICogY3c7XG4gICAgICBsaW5lKGN0eCwgeCwgeSAtIHMgKiAxLjUsIHgsIHkgKyBzICogMS41KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzbm93KGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcbiAgICB0IC89IDMwMDA7XG5cbiAgICB2YXIgYSAgPSBjdyAqIDAuMTYsXG4gICAgICAgIGIgID0gcyAqIDAuNzUsXG4gICAgICAgIHUgID0gdCAqIFRBVSAqIDAuNyxcbiAgICAgICAgdXggPSBNYXRoLmNvcyh1KSAqIGIsXG4gICAgICAgIHV5ID0gTWF0aC5zaW4odSkgKiBiLFxuICAgICAgICB2ICA9IHUgKyBUQVUgLyAzLFxuICAgICAgICB2eCA9IE1hdGguY29zKHYpICogYixcbiAgICAgICAgdnkgPSBNYXRoLnNpbih2KSAqIGIsXG4gICAgICAgIHcgID0gdSArIFRBVSAqIDIgLyAzLFxuICAgICAgICB3eCA9IE1hdGguY29zKHcpICogYixcbiAgICAgICAgd3kgPSBNYXRoLnNpbih3KSAqIGIsXG4gICAgICAgIGksIHAsIHgsIHk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gcyAqIDAuNTtcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBmb3IoaSA9IDQ7IGktLTsgKSB7XG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xuICAgICAgeCA9IGN4ICsgTWF0aC5zaW4oKHAgKyBpIC8gNCkgKiBUQVUpICogYTtcbiAgICAgIHkgPSBjeSArIHAgKiBjdztcblxuICAgICAgbGluZShjdHgsIHggLSB1eCwgeSAtIHV5LCB4ICsgdXgsIHkgKyB1eSk7XG4gICAgICBsaW5lKGN0eCwgeCAtIHZ4LCB5IC0gdnksIHggKyB2eCwgeSArIHZ5KTtcbiAgICAgIGxpbmUoY3R4LCB4IC0gd3gsIHkgLSB3eSwgeCArIHd4LCB5ICsgd3kpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZvZ2JhbmsoY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xuICAgIHQgLz0gMzAwMDA7XG5cbiAgICB2YXIgYSA9IGN3ICogMC4yMSxcbiAgICAgICAgYiA9IGN3ICogMC4wNixcbiAgICAgICAgYyA9IGN3ICogMC4yMSxcbiAgICAgICAgZCA9IGN3ICogMC4yODtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBwdWZmcyhjdHgsIHQsIGN4LCBjeSwgYSwgYiwgYywgZCk7XG5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG4gICAgcHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMgLSBzLCBkIC0gcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH1cblxuICAvKlxuICB2YXIgV0lORF9QQVRIUyA9IFtcbiAgICAgICAgZG93bnNhbXBsZSg2MywgdXBzYW1wbGUoOCwgW1xuICAgICAgICAgIC0xLjAwLCAtMC4yOCxcbiAgICAgICAgICAtMC43NSwgLTAuMTgsXG4gICAgICAgICAgLTAuNTAsICAwLjEyLFxuICAgICAgICAgIC0wLjIwLCAgMC4xMixcbiAgICAgICAgICAtMC4wNCwgLTAuMDQsXG4gICAgICAgICAgLTAuMDcsIC0wLjE4LFxuICAgICAgICAgIC0wLjE5LCAtMC4xOCxcbiAgICAgICAgICAtMC4yMywgLTAuMDUsXG4gICAgICAgICAgLTAuMTIsICAwLjExLFxuICAgICAgICAgICAwLjAyLCAgMC4xNixcbiAgICAgICAgICAgMC4yMCwgIDAuMTUsXG4gICAgICAgICAgIDAuNTAsICAwLjA3LFxuICAgICAgICAgICAwLjc1LCAgMC4xOCxcbiAgICAgICAgICAgMS4wMCwgIDAuMjhcbiAgICAgICAgXSkpLFxuICAgICAgICBkb3duc2FtcGxlKDMxLCB1cHNhbXBsZSgxNiwgW1xuICAgICAgICAgIC0xLjAwLCAtMC4xMCxcbiAgICAgICAgICAtMC43NSwgIDAuMDAsXG4gICAgICAgICAgLTAuNTAsICAwLjEwLFxuICAgICAgICAgIC0wLjI1LCAgMC4xNCxcbiAgICAgICAgICAgMC4wMCwgIDAuMTAsXG4gICAgICAgICAgIDAuMjUsICAwLjAwLFxuICAgICAgICAgICAwLjUwLCAtMC4xMCxcbiAgICAgICAgICAgMC43NSwgLTAuMTQsXG4gICAgICAgICAgIDEuMDAsIC0wLjEwXG4gICAgICAgIF0pKVxuICAgICAgXTtcbiAgKi9cblxuICB2YXIgV0lORF9QQVRIUyA9IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjc1MDAsIC0wLjE4MDAsIC0wLjcyMTksIC0wLjE1MjcsIC0wLjY5NzEsIC0wLjEyMjUsXG4gICAgICAgICAgLTAuNjczOSwgLTAuMDkxMCwgLTAuNjUxNiwgLTAuMDU4OCwgLTAuNjI5OCwgLTAuMDI2MixcbiAgICAgICAgICAtMC42MDgzLCAgMC4wMDY1LCAtMC41ODY4LCAgMC4wMzk2LCAtMC41NjQzLCAgMC4wNzMxLFxuICAgICAgICAgIC0wLjUzNzIsICAwLjEwNDEsIC0wLjUwMzMsICAwLjEyNTksIC0wLjQ2NjIsICAwLjE0MDYsXG4gICAgICAgICAgLTAuNDI3NSwgIDAuMTQ5MywgLTAuMzg4MSwgIDAuMTUzMCwgLTAuMzQ4NywgIDAuMTUyNixcbiAgICAgICAgICAtMC4zMDk1LCAgMC4xNDg4LCAtMC4yNzA4LCAgMC4xNDIxLCAtMC4yMzE5LCAgMC4xMzQyLFxuICAgICAgICAgIC0wLjE5NDMsICAwLjEyMTcsIC0wLjE2MDAsICAwLjEwMjUsIC0wLjEyOTAsICAwLjA3ODUsXG4gICAgICAgICAgLTAuMTAxMiwgIDAuMDUwOSwgLTAuMDc2NCwgIDAuMDIwNiwgLTAuMDU0NywgLTAuMDEyMCxcbiAgICAgICAgICAtMC4wMzc4LCAtMC4wNDcyLCAtMC4wMzI0LCAtMC4wODU3LCAtMC4wMzg5LCAtMC4xMjQxLFxuICAgICAgICAgIC0wLjA1NDYsIC0wLjE1OTksIC0wLjA4MTQsIC0wLjE4NzYsIC0wLjExOTMsIC0wLjE5NjQsXG4gICAgICAgICAgLTAuMTU4MiwgLTAuMTkzNSwgLTAuMTkzMSwgLTAuMTc2OSwgLTAuMjE1NywgLTAuMTQ1MyxcbiAgICAgICAgICAtMC4yMjkwLCAtMC4xMDg1LCAtMC4yMzI3LCAtMC4wNjk3LCAtMC4yMjQwLCAtMC4wMzE3LFxuICAgICAgICAgIC0wLjIwNjQsICAwLjAwMzMsIC0wLjE4NTMsICAwLjAzNjIsIC0wLjE2MTMsICAwLjA2NzIsXG4gICAgICAgICAgLTAuMTM1MCwgIDAuMDk2MSwgLTAuMTA1MSwgIDAuMTIxMywgLTAuMDcwNiwgIDAuMTM5NyxcbiAgICAgICAgICAtMC4wMzMyLCAgMC4xNTEyLCAgMC4wMDUzLCAgMC4xNTgwLCAgMC4wNDQyLCAgMC4xNjI0LFxuICAgICAgICAgICAwLjA4MzMsICAwLjE2MzYsICAwLjEyMjQsICAwLjE2MTUsICAwLjE2MTMsICAwLjE1NjUsXG4gICAgICAgICAgIDAuMTk5OSwgIDAuMTUwMCwgIDAuMjM3OCwgIDAuMTQwMiwgIDAuMjc0OSwgIDAuMTI3OSxcbiAgICAgICAgICAgMC4zMTE4LCAgMC4xMTQ3LCAgMC4zNDg3LCAgMC4xMDE1LCAgMC4zODU4LCAgMC4wODkyLFxuICAgICAgICAgICAwLjQyMzYsICAwLjA3ODcsICAwLjQ2MjEsICAwLjA3MTUsICAwLjUwMTIsICAwLjA3MDIsXG4gICAgICAgICAgIDAuNTM5OCwgIDAuMDc2NiwgIDAuNTc2OCwgIDAuMDg5MCwgIDAuNjEyMywgIDAuMTA1NSxcbiAgICAgICAgICAgMC42NDY2LCAgMC4xMjQ0LCAgMC42ODA1LCAgMC4xNDQwLCAgMC43MTQ3LCAgMC4xNjMwLFxuICAgICAgICAgICAwLjc1MDAsICAwLjE4MDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjc1MDAsICAwLjAwMDAsIC0wLjcwMzMsICAwLjAxOTUsIC0wLjY1NjksICAwLjAzOTksXG4gICAgICAgICAgLTAuNjEwNCwgIDAuMDYwMCwgLTAuNTYzNCwgIDAuMDc4OSwgLTAuNTE1NSwgIDAuMDk1NCxcbiAgICAgICAgICAtMC40NjY3LCAgMC4xMDg5LCAtMC40MTc0LCAgMC4xMjA2LCAtMC4zNjc2LCAgMC4xMjk5LFxuICAgICAgICAgIC0wLjMxNzQsICAwLjEzNjUsIC0wLjI2NjksICAwLjEzOTgsIC0wLjIxNjIsICAwLjEzOTEsXG4gICAgICAgICAgLTAuMTY1OCwgIDAuMTM0NywgLTAuMTE1NywgIDAuMTI3MSwgLTAuMDY2MSwgIDAuMTE2OSxcbiAgICAgICAgICAtMC4wMTcwLCAgMC4xMDQ2LCAgMC4wMzE2LCAgMC4wOTAzLCAgMC4wNzkxLCAgMC4wNzI4LFxuICAgICAgICAgICAwLjEyNTksICAwLjA1MzQsICAwLjE3MjMsICAwLjAzMzEsICAwLjIxODgsICAwLjAxMjksXG4gICAgICAgICAgIDAuMjY1NiwgLTAuMDA2NCwgIDAuMzEyMiwgLTAuMDI2MywgIDAuMzU4NiwgLTAuMDQ2NixcbiAgICAgICAgICAgMC40MDUyLCAtMC4wNjY1LCAgMC40NTI1LCAtMC4wODQ3LCAgMC41MDA3LCAtMC4xMDAyLFxuICAgICAgICAgICAwLjU0OTcsIC0wLjExMzAsICAwLjU5OTEsIC0wLjEyNDAsICAwLjY0OTEsIC0wLjEzMjUsXG4gICAgICAgICAgIDAuNjk5NCwgLTAuMTM4MCwgIDAuNzUwMCwgLTAuMTQwMFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgV0lORF9PRkZTRVRTID0gW1xuICAgICAgICB7c3RhcnQ6IDAuMzYsIGVuZDogMC4xMX0sXG4gICAgICAgIHtzdGFydDogMC41NiwgZW5kOiAwLjE2fVxuICAgICAgXTtcblxuICBmdW5jdGlvbiBsZWFmKGN0eCwgdCwgeCwgeSwgY3csIHMsIGNvbG9yKSB7XG4gICAgdmFyIGEgPSBjdyAvIDgsXG4gICAgICAgIGIgPSBhIC8gMyxcbiAgICAgICAgYyA9IDIgKiBiLFxuICAgICAgICBkID0gKHQgJSAxKSAqIFRBVSxcbiAgICAgICAgZSA9IE1hdGguY29zKGQpLFxuICAgICAgICBmID0gTWF0aC5zaW4oZCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeCAgICAgICAgLCB5ICAgICAgICAsIGEsIGQgICAgICAgICAgLCBkICsgTWF0aC5QSSwgZmFsc2UpO1xuICAgIGN0eC5hcmMoeCAtIGIgKiBlLCB5IC0gYiAqIGYsIGMsIGQgKyBNYXRoLlBJLCBkICAgICAgICAgICwgZmFsc2UpO1xuICAgIGN0eC5hcmMoeCArIGMgKiBlLCB5ICsgYyAqIGYsIGIsIGQgKyBNYXRoLlBJLCBkICAgICAgICAgICwgdHJ1ZSApO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3b29zaChjdHgsIHQsIGN4LCBjeSwgY3csIHMsIGluZGV4LCB0b3RhbCwgY29sb3IpIHtcbiAgICB0IC89IDI1MDA7XG5cbiAgICB2YXIgcGF0aCA9IFdJTkRfUEFUSFNbaW5kZXhdLFxuICAgICAgICBhID0gKHQgKyBpbmRleCAtIFdJTkRfT0ZGU0VUU1tpbmRleF0uc3RhcnQpICUgdG90YWwsXG4gICAgICAgIGMgPSAodCArIGluZGV4IC0gV0lORF9PRkZTRVRTW2luZGV4XS5lbmQgICkgJSB0b3RhbCxcbiAgICAgICAgZSA9ICh0ICsgaW5kZXggICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAlIHRvdGFsLFxuICAgICAgICBiLCBkLCBmLCBpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuXG4gICAgaWYoYSA8IDEpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgYSAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgYiAgPSBNYXRoLmZsb29yKGEpO1xuICAgICAgYSAtPSBiO1xuICAgICAgYiAqPSAyO1xuICAgICAgYiArPSAyO1xuXG4gICAgICBjdHgubW92ZVRvKFxuICAgICAgICBjeCArIChwYXRoW2IgLSAyXSAqICgxIC0gYSkgKyBwYXRoW2IgICAgXSAqIGEpICogY3csXG4gICAgICAgIGN5ICsgKHBhdGhbYiAtIDFdICogKDEgLSBhKSArIHBhdGhbYiArIDFdICogYSkgKiBjd1xuICAgICAgKTtcblxuICAgICAgaWYoYyA8IDEpIHtcbiAgICAgICAgYyAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgICBkICA9IE1hdGguZmxvb3IoYyk7XG4gICAgICAgIGMgLT0gZDtcbiAgICAgICAgZCAqPSAyO1xuICAgICAgICBkICs9IDI7XG5cbiAgICAgICAgZm9yKGkgPSBiOyBpICE9PSBkOyBpICs9IDIpXG4gICAgICAgICAgY3R4LmxpbmVUbyhjeCArIHBhdGhbaV0gKiBjdywgY3kgKyBwYXRoW2kgKyAxXSAqIGN3KTtcblxuICAgICAgICBjdHgubGluZVRvKFxuICAgICAgICAgIGN4ICsgKHBhdGhbZCAtIDJdICogKDEgLSBjKSArIHBhdGhbZCAgICBdICogYykgKiBjdyxcbiAgICAgICAgICBjeSArIChwYXRoW2QgLSAxXSAqICgxIC0gYykgKyBwYXRoW2QgKyAxXSAqIGMpICogY3dcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgZWxzZVxuICAgICAgICBmb3IoaSA9IGI7IGkgIT09IHBhdGgubGVuZ3RoOyBpICs9IDIpXG4gICAgICAgICAgY3R4LmxpbmVUbyhjeCArIHBhdGhbaV0gKiBjdywgY3kgKyBwYXRoW2kgKyAxXSAqIGN3KTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGVsc2UgaWYoYyA8IDEpIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgYyAqPSBwYXRoLmxlbmd0aCAvIDIgLSAxO1xuICAgICAgZCAgPSBNYXRoLmZsb29yKGMpO1xuICAgICAgYyAtPSBkO1xuICAgICAgZCAqPSAyO1xuICAgICAgZCArPSAyO1xuXG4gICAgICBjdHgubW92ZVRvKGN4ICsgcGF0aFswXSAqIGN3LCBjeSArIHBhdGhbMV0gKiBjdyk7XG5cbiAgICAgIGZvcihpID0gMjsgaSAhPT0gZDsgaSArPSAyKVxuICAgICAgICBjdHgubGluZVRvKGN4ICsgcGF0aFtpXSAqIGN3LCBjeSArIHBhdGhbaSArIDFdICogY3cpO1xuXG4gICAgICBjdHgubGluZVRvKFxuICAgICAgICBjeCArIChwYXRoW2QgLSAyXSAqICgxIC0gYykgKyBwYXRoW2QgICAgXSAqIGMpICogY3csXG4gICAgICAgIGN5ICsgKHBhdGhbZCAtIDFdICogKDEgLSBjKSArIHBhdGhbZCArIDFdICogYykgKiBjd1xuICAgICAgKTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cblxuICAgIGlmKGUgPCAxKSB7XG4gICAgICBlICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XG4gICAgICBmICA9IE1hdGguZmxvb3IoZSk7XG4gICAgICBlIC09IGY7XG4gICAgICBmICo9IDI7XG4gICAgICBmICs9IDI7XG5cbiAgICAgIGxlYWYoXG4gICAgICAgIGN0eCxcbiAgICAgICAgdCxcbiAgICAgICAgY3ggKyAocGF0aFtmIC0gMl0gKiAoMSAtIGUpICsgcGF0aFtmICAgIF0gKiBlKSAqIGN3LFxuICAgICAgICBjeSArIChwYXRoW2YgLSAxXSAqICgxIC0gZSkgKyBwYXRoW2YgKyAxXSAqIGUpICogY3csXG4gICAgICAgIGN3LFxuICAgICAgICBzLFxuICAgICAgICBjb2xvclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgU2t5Y29ucyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgdGhpcy5saXN0ICAgICAgICA9IFtdO1xuICAgICAgICB0aGlzLmludGVydmFsICAgID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb2xvciAgICAgICA9IG9wdHMgJiYgb3B0cy5jb2xvciA/IG9wdHMuY29sb3IgOiBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMucmVzaXplQ2xlYXIgPSAhIShvcHRzICYmIG9wdHMucmVzaXplQ2xlYXIpO1xuICAgICAgfTtcblxuICBTa3ljb25zLkNMRUFSX0RBWSA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc3VuKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuQ0xFQVJfTklHSFQgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIG1vb24oY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCBjb2xvcik7XG4gIH07XG5cbiAgU2t5Y29ucy5QQVJUTFlfQ0xPVURZX0RBWSA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc3VuKGN0eCwgdCwgdyAqIDAuNjI1LCBoICogMC4zNzUsIHMgKiAwLjc1LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC4zNzUsIGggKiAwLjYyNSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLlBBUlRMWV9DTE9VRFlfTklHSFQgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIG1vb24oY3R4LCB0LCB3ICogMC42NjcsIGggKiAwLjM3NSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgICBjbG91ZChjdHgsIHQsIHcgKiAwLjM3NSwgaCAqIDAuNjI1LCBzICogMC43NSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuQ0xPVURZID0gZnVuY3Rpb24oY3R4LCB0LCBjb2xvcikge1xuICAgIHZhciB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICBjbG91ZChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLlJBSU4gPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcblxuICAgIHJhaW4oY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICAgIGNsb3VkKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLlNMRUVUID0gZnVuY3Rpb24oY3R4LCB0LCBjb2xvcikge1xuICAgIHZhciB3ID0gY3R4LmNhbnZhcy53aWR0aCxcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxuICAgICAgICBzID0gTWF0aC5taW4odywgaCk7XG5cbiAgICBzbGVldChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuU05PVyA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc25vdyhjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC41LCBoICogMC4zNywgcyAqIDAuOSwgcyAqIFNUUk9LRSwgY29sb3IpO1xuICB9O1xuXG4gIFNreWNvbnMuV0lORCA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xuXG4gICAgc3dvb3NoKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuNSwgcywgcyAqIFNUUk9LRSwgMCwgMiwgY29sb3IpO1xuICAgIHN3b29zaChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjUsIHMsIHMgKiBTVFJPS0UsIDEsIDIsIGNvbG9yKTtcbiAgfTtcblxuICBTa3ljb25zLkZPRyA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpLFxuICAgICAgICBrID0gcyAqIFNUUk9LRTtcblxuICAgIGZvZ2JhbmsoY3R4LCB0LCB3ICogMC41LCBoICogMC4zMiwgcyAqIDAuNzUsIGssIGNvbG9yKTtcblxuICAgIHQgLz0gNTAwMDtcblxuICAgIHZhciBhID0gTWF0aC5jb3MoKHQgICAgICAgKSAqIFRBVSkgKiBzICogMC4wMixcbiAgICAgICAgYiA9IE1hdGguY29zKCh0ICsgMC4yNSkgKiBUQVUpICogcyAqIDAuMDIsXG4gICAgICAgIGMgPSBNYXRoLmNvcygodCArIDAuNTApICogVEFVKSAqIHMgKiAwLjAyLFxuICAgICAgICBkID0gTWF0aC5jb3MoKHQgKyAwLjc1KSAqIFRBVSkgKiBzICogMC4wMixcbiAgICAgICAgbiA9IGggKiAwLjkzNixcbiAgICAgICAgZSA9IE1hdGguZmxvb3IobiAtIGsgKiAwLjUpICsgMC41LFxuICAgICAgICBmID0gTWF0aC5mbG9vcihuIC0gayAqIDIuNSkgKyAwLjU7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHgubGluZVdpZHRoID0gaztcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XG5cbiAgICBsaW5lKGN0eCwgYSArIHcgKiAwLjIgKyBrICogMC41LCBlLCBiICsgdyAqIDAuOCAtIGsgKiAwLjUsIGUpO1xuICAgIGxpbmUoY3R4LCBjICsgdyAqIDAuMiArIGsgKiAwLjUsIGYsIGQgKyB3ICogMC44IC0gayAqIDAuNSwgZik7XG4gIH07XG5cbiAgU2t5Y29ucy5wcm90b3R5cGUgPSB7XG4gICAgYWRkOiBmdW5jdGlvbihlbCwgZHJhdykge1xuICAgICAgdmFyIG9iajtcblxuICAgICAgaWYodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgICBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcblxuICAgICAgLy8gRG9lcyBub3RoaW5nIGlmIGNhbnZhcyBuYW1lIGRvZXNuJ3QgZXhpc3RzXG4gICAgICBpZihlbCA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBpZih0eXBlb2YgZHJhdyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBkcmF3ID0gZHJhdy50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLy0vZywgXCJfXCIpO1xuICAgICAgICBkcmF3ID0gU2t5Y29ucy5oYXNPd25Qcm9wZXJ0eShkcmF3KSA/IFNreWNvbnNbZHJhd10gOiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBEb2VzIG5vdGhpbmcgaWYgdGhlIGRyYXcgZnVuY3Rpb24gaXNuJ3QgYWN0dWFsbHkgYSBmdW5jdGlvblxuICAgICAgaWYodHlwZW9mIGRyYXcgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBvYmogPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsLFxuICAgICAgICBjb250ZXh0OiBlbC5nZXRDb250ZXh0KFwiMmRcIiksXG4gICAgICAgIGRyYXdpbmc6IGRyYXdcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubGlzdC5wdXNoKG9iaik7XG4gICAgICB0aGlzLmRyYXcob2JqLCBLRVlGUkFNRSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGVsLCBkcmF3KSB7XG4gICAgICB2YXIgaTtcblxuICAgICAgaWYodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxuICAgICAgICBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKTtcblxuICAgICAgZm9yKGkgPSB0aGlzLmxpc3QubGVuZ3RoOyBpLS07IClcbiAgICAgICAgaWYodGhpcy5saXN0W2ldLmVsZW1lbnQgPT09IGVsKSB7XG4gICAgICAgICAgdGhpcy5saXN0W2ldLmRyYXdpbmcgPSBkcmF3O1xuICAgICAgICAgIHRoaXMuZHJhdyh0aGlzLmxpc3RbaV0sIEtFWUZSQU1FKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgdGhpcy5hZGQoZWwsIGRyYXcpO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmKHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbCk7XG5cbiAgICAgIGZvcihpID0gdGhpcy5saXN0Lmxlbmd0aDsgaS0tOyApXG4gICAgICAgIGlmKHRoaXMubGlzdFtpXS5lbGVtZW50ID09PSBlbCkge1xuICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkcmF3OiBmdW5jdGlvbihvYmosIHRpbWUpIHtcbiAgICAgIHZhciBjYW52YXMgPSBvYmouY29udGV4dC5jYW52YXM7XG5cbiAgICAgIGlmKHRoaXMucmVzaXplQ2xlYXIpXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcblxuICAgICAgZWxzZVxuICAgICAgICBvYmouY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgICAgb2JqLmRyYXdpbmcob2JqLmNvbnRleHQsIHRpbWUsIHRoaXMuY29sb3IpO1xuICAgIH0sXG4gICAgcGxheTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSByZXF1ZXN0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IoaSA9IHNlbGYubGlzdC5sZW5ndGg7IGktLTsgKVxuICAgICAgICAgIHNlbGYuZHJhdyhzZWxmLmxpc3RbaV0sIG5vdyk7XG4gICAgICB9LCAxMDAwIC8gNjApO1xuICAgIH0sXG4gICAgcGF1c2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmKHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgICAgY2FuY2VsSW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBnbG9iYWwuU2t5Y29ucyA9IFNreWNvbnM7XG59KHRoaXMpKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAuY2hhcnQuY3RybHMnLCBbXSkuY29udHJvbGxlcignY2hhcnRDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmVhc3lwaWVjaGFydCA9IHtcbiAgICAgIHBlcmNlbnQ6IDY1LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBiYXJDb2xvcjogJyMzMUMwQkUnLFxuICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxuICAgICAgICBzaXplOiAxODAsXG4gICAgICAgIGxpbmVXaWR0aDogNVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmVhc3lwaWVjaGFydDIgPSB7XG4gICAgICBwZXJjZW50OiAzNSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYmFyQ29sb3I6ICcjNjZCNUQ3JyxcbiAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgc2l6ZTogMTgwLFxuICAgICAgICBsaW5lV2lkdGg6IDEwXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuZWFzeXBpZWNoYXJ0MyA9IHtcbiAgICAgIHBlcmNlbnQ6IDY4LFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBiYXJDb2xvcjogJyM2MENEOUInLFxuICAgICAgICBsaW5lQ2FwOiAnc3F1YXJlJyxcbiAgICAgICAgc2l6ZTogMTgwLFxuICAgICAgICBsaW5lV2lkdGg6IDIwLFxuICAgICAgICBzY2FsZUxlbmd0aDogMFxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmdhdWdlQ2hhcnQxID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBtYXhWYWx1ZTogMzAwMCxcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDQwLFxuICAgICAgICB2YWw6IDEzNzVcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxpbmVzOiAxMixcbiAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgIGxpbmVXaWR0aDogMC40NyxcbiAgICAgICAgcG9pbnRlcjoge1xuICAgICAgICAgIGxlbmd0aDogMC42LFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLjAzLFxuICAgICAgICAgIGNvbG9yOiAnIzAwMDAwMCdcbiAgICAgICAgfSxcbiAgICAgICAgbGltaXRNYXg6ICdmYWxzZScsXG4gICAgICAgIGNvbG9yU3RhcnQ6ICcjQTNDODZEJyxcbiAgICAgICAgY29sb3JTdG9wOiAnI0EzQzg2RCcsXG4gICAgICAgIHN0cm9rZUNvbG9yOiAnI0UwRTBFMCcsXG4gICAgICAgIGdlbmVyYXRlR3JhZGllbnQ6IHRydWUsXG4gICAgICAgIHBlcmNlbnRDb2xvcnM6IFtbMC4wLCAnIzYwQ0Q5QiddLCBbMS4wLCAnIzYwQ0Q5QiddXVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmdhdWdlQ2hhcnQyID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBtYXhWYWx1ZTogMzAwMCxcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDQ1LFxuICAgICAgICB2YWw6IDEyMDBcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxpbmVzOiAxMixcbiAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgIGxpbmVXaWR0aDogMC40NyxcbiAgICAgICAgcG9pbnRlcjoge1xuICAgICAgICAgIGxlbmd0aDogMC42LFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLjAzLFxuICAgICAgICAgIGNvbG9yOiAnIzQ2NDY0NidcbiAgICAgICAgfSxcbiAgICAgICAgbGltaXRNYXg6ICd0cnVlJyxcbiAgICAgICAgY29sb3JTdGFydDogJyM3QUNCRUUnLFxuICAgICAgICBjb2xvclN0b3A6ICcjN0FDQkVFJyxcbiAgICAgICAgc3Ryb2tlQ29sb3I6ICcjRjFGMUYxJyxcbiAgICAgICAgZ2VuZXJhdGVHcmFkaWVudDogdHJ1ZSxcbiAgICAgICAgcGVyY2VudENvbG9yczogW1swLjAsICcjNjZCNUQ3J10sIFsxLjAsICcjNjZCNUQ3J11dXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmdhdWdlQ2hhcnQzID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBtYXhWYWx1ZTogMzAwMCxcbiAgICAgICAgYW5pbWF0aW9uU3BlZWQ6IDUwLFxuICAgICAgICB2YWw6IDExMDBcbiAgICAgIH0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxpbmVzOiAxMixcbiAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgIGxpbmVXaWR0aDogMC40NyxcbiAgICAgICAgcG9pbnRlcjoge1xuICAgICAgICAgIGxlbmd0aDogMC42LFxuICAgICAgICAgIHN0cm9rZVdpZHRoOiAwLjAzLFxuICAgICAgICAgIGNvbG9yOiAnIzQ2NDY0NidcbiAgICAgICAgfSxcbiAgICAgICAgbGltaXRNYXg6ICd0cnVlJyxcbiAgICAgICAgY29sb3JTdGFydDogJyNGRjc4NTcnLFxuICAgICAgICBjb2xvclN0b3A6ICcjRkY3ODU3JyxcbiAgICAgICAgc3Ryb2tlQ29sb3I6ICcjRjFGMUYxJyxcbiAgICAgICAgZ2VuZXJhdGVHcmFkaWVudDogdHJ1ZSxcbiAgICAgICAgcGVyY2VudENvbG9yczogW1swLjAsICcjRTg3MzUyJ10sIFsxLjAsICcjRTg3MzUyJ11dXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignbW9ycmlzQ2hhcnRDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLm1haW5EYXRhID0gW1xuICAgICAge1xuICAgICAgICBtb250aDogJzIwMTMtMDEnLFxuICAgICAgICB4Ym94OiAyOTQwMDAsXG4gICAgICAgIHdpbGw6IDEzNjAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDI0NDAwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDInLFxuICAgICAgICB4Ym94OiAyMjgwMDAsXG4gICAgICAgIHdpbGw6IDMzNTAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDEyNzAwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDMnLFxuICAgICAgICB4Ym94OiAxOTkwMDAsXG4gICAgICAgIHdpbGw6IDE1OTAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDEzMDAwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDQnLFxuICAgICAgICB4Ym94OiAxNzQwMDAsXG4gICAgICAgIHdpbGw6IDE2MDAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDgyMDAwXG4gICAgICB9LCB7XG4gICAgICAgIG1vbnRoOiAnMjAxMy0wNScsXG4gICAgICAgIHhib3g6IDI1NTAwMCxcbiAgICAgICAgd2lsbDogMzE4MDAwLFxuICAgICAgICBwbGF5c3RhdGlvbjogODIwMDBcbiAgICAgIH0sIHtcbiAgICAgICAgbW9udGg6ICcyMDEzLTA2JyxcbiAgICAgICAgeGJveDogMjk4NDAwLFxuICAgICAgICB3aWxsOiA0MDE4MDAsXG4gICAgICAgIHBsYXlzdGF0aW9uOiA5ODYwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDcnLFxuICAgICAgICB4Ym94OiAzNzAwMDAsXG4gICAgICAgIHdpbGw6IDIyNTAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDE1OTAwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDgnLFxuICAgICAgICB4Ym94OiAzNzY3MDAsXG4gICAgICAgIHdpbGw6IDMwMzYwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDEzMDAwMFxuICAgICAgfSwge1xuICAgICAgICBtb250aDogJzIwMTMtMDknLFxuICAgICAgICB4Ym94OiA1Mjc4MDAsXG4gICAgICAgIHdpbGw6IDMwMTAwMCxcbiAgICAgICAgcGxheXN0YXRpb246IDExOTQwMFxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnNpbXBsZURhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIHllYXI6ICcyMDA4JyxcbiAgICAgICAgdmFsdWU6IDIwXG4gICAgICB9LCB7XG4gICAgICAgIHllYXI6ICcyMDA5JyxcbiAgICAgICAgdmFsdWU6IDEwXG4gICAgICB9LCB7XG4gICAgICAgIHllYXI6ICcyMDEwJyxcbiAgICAgICAgdmFsdWU6IDVcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTEnLFxuICAgICAgICB2YWx1ZTogNVxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAxMicsXG4gICAgICAgIHZhbHVlOiAyMFxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAxMycsXG4gICAgICAgIHZhbHVlOiAxOVxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmNvbWJvRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgeWVhcjogJzIwMDgnLFxuICAgICAgICBhOiAyMCxcbiAgICAgICAgYjogMTYsXG4gICAgICAgIGM6IDEyXG4gICAgICB9LCB7XG4gICAgICAgIHllYXI6ICcyMDA5JyxcbiAgICAgICAgYTogMTAsXG4gICAgICAgIGI6IDIyLFxuICAgICAgICBjOiAzMFxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAxMCcsXG4gICAgICAgIGE6IDUsXG4gICAgICAgIGI6IDE0LFxuICAgICAgICBjOiAyMFxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAxMScsXG4gICAgICAgIGE6IDUsXG4gICAgICAgIGI6IDEyLFxuICAgICAgICBjOiAxOVxuICAgICAgfSwge1xuICAgICAgICB5ZWFyOiAnMjAxMicsXG4gICAgICAgIGE6IDIwLFxuICAgICAgICBiOiAxOSxcbiAgICAgICAgYzogMTNcbiAgICAgIH0sIHtcbiAgICAgICAgeWVhcjogJzIwMTMnLFxuICAgICAgICBhOiAyOCxcbiAgICAgICAgYjogMjIsXG4gICAgICAgIGM6IDIwXG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gJHNjb3BlLmRvbnV0RGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRG93bmxvYWQgU2FsZXNcIixcbiAgICAgICAgdmFsdWU6IDEyXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkluLVN0b3JlIFNhbGVzXCIsXG4gICAgICAgIHZhbHVlOiAzMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJNYWlsLU9yZGVyIFNhbGVzXCIsXG4gICAgICAgIHZhbHVlOiAyMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJPbmxpbmUgU2FsZXNcIixcbiAgICAgICAgdmFsdWU6IDE5XG4gICAgICB9XG4gICAgXTtcbiAgfVxuXSkuY29udHJvbGxlcignZmxvdENoYXJ0Q3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHZhciBhcmVhQ2hhcnQsIGJhckNoYXJ0LCBsaW5lQ2hhcnQxO1xuICAgIGxpbmVDaGFydDEgPSB7fTtcbiAgICBsaW5lQ2hhcnQxLmRhdGExID0gW1sxLCAxNV0sIFsyLCAyMF0sIFszLCAxNF0sIFs0LCAxMF0sIFs1LCAxMF0sIFs2LCAyMF0sIFs3LCAyOF0sIFs4LCAyNl0sIFs5LCAyMl0sIFsxMCwgMjNdLCBbMTEsIDI0XV07XG4gICAgbGluZUNoYXJ0MS5kYXRhMiA9IFtbMSwgOV0sIFsyLCAxNV0sIFszLCAxN10sIFs0LCAyMV0sIFs1LCAxNl0sIFs2LCAxNV0sIFs3LCAxM10sIFs4LCAxNV0sIFs5LCAyOV0sIFsxMCwgMjFdLCBbMTEsIDI5XV07XG4gICAgJHNjb3BlLmxpbmUxID0ge307XG4gICAgJHNjb3BlLmxpbmUxLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IGxpbmVDaGFydDEuZGF0YTEsXG4gICAgICAgIGxhYmVsOiAnUHJvZHVjdCBBJ1xuICAgICAgfSwge1xuICAgICAgICBkYXRhOiBsaW5lQ2hhcnQxLmRhdGEyLFxuICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgQicsXG4gICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgZmlsbDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmxpbmUxLm9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgZmlsbENvbG9yOiB7XG4gICAgICAgICAgICBjb2xvcnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuM1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgIGZpbGxDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgc3ltYm9sOiBcImNpcmNsZVwiLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjMzFDMEJFXCIsIFwiIzgxNzBDQVwiLCBcIiNFODczNTJcIl0sXG4gICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHRpY2tDb2xvcjogXCIjZjlmOWY5XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjZWVlZWVlXCJcbiAgICAgIH0sXG4gICAgICB4YXhpczoge1xuICAgICAgICB0aWNrczogW1sxLCAnSmFuLiddLCBbMiwgJ0ZlYi4nXSwgWzMsICdNYXIuJ10sIFs0LCAnQXByLiddLCBbNSwgJ01heSddLCBbNiwgJ0p1bmUnXSwgWzcsICdKdWx5J10sIFs4LCAnQXVnLiddLCBbOSwgJ1NlcHQuJ10sIFsxMCwgJ09jdC4nXSwgWzExLCAnTm92LiddLCBbMTIsICdEZWMuJ11dXG4gICAgICB9XG4gICAgfTtcbiAgICBhcmVhQ2hhcnQgPSB7fTtcbiAgICBhcmVhQ2hhcnQuZGF0YTEgPSBbWzIwMDcsIDE1XSwgWzIwMDgsIDIwXSwgWzIwMDksIDEwXSwgWzIwMTAsIDVdLCBbMjAxMSwgNV0sIFsyMDEyLCAyMF0sIFsyMDEzLCAyOF1dO1xuICAgIGFyZWFDaGFydC5kYXRhMiA9IFtbMjAwNywgMTVdLCBbMjAwOCwgMTZdLCBbMjAwOSwgMjJdLCBbMjAxMCwgMTRdLCBbMjAxMSwgMTJdLCBbMjAxMiwgMTldLCBbMjAxMywgMjJdXTtcbiAgICAkc2NvcGUuYXJlYSA9IHt9O1xuICAgICRzY29wZS5hcmVhLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGRhdGE6IGFyZWFDaGFydC5kYXRhMSxcbiAgICAgICAgbGFiZWw6IFwiVmFsdWUgQVwiLFxuICAgICAgICBsaW5lczoge1xuICAgICAgICAgIGZpbGw6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBkYXRhOiBhcmVhQ2hhcnQuZGF0YTIsXG4gICAgICAgIGxhYmVsOiBcIlZhbHVlIEJcIixcbiAgICAgICAgcG9pbnRzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB5YXhpczogMlxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmFyZWEub3B0aW9ucyA9IHtcbiAgICAgIHNlcmllczoge1xuICAgICAgICBsaW5lczoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgZmlsbDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcG9pbnRzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBmaWxsQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgIHN5bWJvbDogXCJjaXJjbGVcIixcbiAgICAgICAgICByYWRpdXM6IDVcbiAgICAgICAgfSxcbiAgICAgICAgc2hhZG93U2l6ZTogMFxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHRpY2tDb2xvcjogXCIjZjlmOWY5XCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjZWVlZWVlXCJcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFtcIiM2MENEOUJcIiwgXCIjODE3MENBXCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB4YXhpczoge1xuICAgICAgICBtb2RlOiBcInRpbWVcIlxuICAgICAgfSxcbiAgICAgIHlheGVzOiBbXG4gICAgICAgIHt9LCB7XG4gICAgICAgICAgcG9zaXRpb246IFwicmlnaHRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICBiYXJDaGFydCA9IHt9O1xuICAgIGJhckNoYXJ0LmRhdGExID0gW1syMDA4LCAyMF0sIFsyMDA5LCAxMF0sIFsyMDEwLCA1XSwgWzIwMTEsIDVdLCBbMjAxMiwgMjBdLCBbMjAxMywgMjhdXTtcbiAgICBiYXJDaGFydC5kYXRhMiA9IFtbMjAwOCwgMTZdLCBbMjAwOSwgMjJdLCBbMjAxMCwgMTRdLCBbMjAxMSwgMTJdLCBbMjAxMiwgMTldLCBbMjAxMywgMjJdXTtcbiAgICBiYXJDaGFydC5kYXRhMyA9IFtbMjAwOCwgMTJdLCBbMjAwOSwgMzBdLCBbMjAxMCwgMjBdLCBbMjAxMSwgMTldLCBbMjAxMiwgMTNdLCBbMjAxMywgMjBdXTtcbiAgICAkc2NvcGUuYmFyQ2hhcnQgPSB7fTtcbiAgICAkc2NvcGUuYmFyQ2hhcnQuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVmFsdWUgQVwiLFxuICAgICAgICBkYXRhOiBiYXJDaGFydC5kYXRhMVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJWYWx1ZSBCXCIsXG4gICAgICAgIGRhdGE6IGJhckNoYXJ0LmRhdGEyXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIlZhbHVlIENcIixcbiAgICAgICAgZGF0YTogYmFyQ2hhcnQuZGF0YTNcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5iYXJDaGFydC5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHN0YWNrOiB0cnVlLFxuICAgICAgICBiYXJzOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBmaWxsOiAxLFxuICAgICAgICAgIGJhcldpZHRoOiAwLjMsXG4gICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgb3JkZXI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZWVlZVwiXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFtcIiM2MENEOUJcIiwgXCIjNjZCNUQ3XCIsIFwiI0VFQzk1QVwiLCBcIiNFODczNTJcIl1cbiAgICB9O1xuICAgICRzY29wZS5waWVDaGFydCA9IHt9O1xuICAgICRzY29wZS5waWVDaGFydC5kYXRhID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJEb3dubG9hZCBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAxMlxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAzMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJNYWlsLU9yZGVyIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDIwXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIk9ubGluZSBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAxOVxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnBpZUNoYXJ0Lm9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgcGllOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHNob3c6IHRydWVcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICB9LFxuICAgICAgY29sb3JzOiBbXCIjNjBDRDlCXCIsIFwiIzY2QjVEN1wiLCBcIiNFRUM5NUFcIiwgXCIjRTg3MzUyXCJdLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwiJXAuMCUsICVzXCIsXG4gICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5kb251dENoYXJ0ID0ge307XG4gICAgJHNjb3BlLmRvbnV0Q2hhcnQuZGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiRG93bmxvYWQgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTJcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiSW4tU3RvcmUgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMzBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiTWFpbC1PcmRlciBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAyMFxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogXCJPbmxpbmUgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMTlcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5kb251dENoYXJ0Lm9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgcGllOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBpbm5lclJhZGl1czogMC41XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFtcIiM2MENEOUJcIiwgXCIjNjZCNUQ3XCIsIFwiI0VFQzk1QVwiLCBcIiNFODczNTJcIl0sXG4gICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgY29udGVudDogXCIlcC4wJSwgJXNcIixcbiAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmRvbnV0Q2hhcnQyID0ge307XG4gICAgJHNjb3BlLmRvbnV0Q2hhcnQyLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkRvd25sb2FkIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDEyXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkluLVN0b3JlIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDMwXG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIk1haWwtT3JkZXIgU2FsZXNcIixcbiAgICAgICAgZGF0YTogMjBcbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiT25saW5lIFNhbGVzXCIsXG4gICAgICAgIGRhdGE6IDE5XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkRpcmVjdCBTYWxlc1wiLFxuICAgICAgICBkYXRhOiAxNVxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuICRzY29wZS5kb251dENoYXJ0Mi5vcHRpb25zID0ge1xuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIHBpZToge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgaW5uZXJSYWRpdXM6IDAuNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGNvbG9yczogW1wiIzFCQjdBMFwiLCBcIiMzOUI1QjlcIiwgXCIjNTJBM0JCXCIsIFwiIzYxOUNDNFwiLCBcIiM2RDkwQzVcIl0sXG4gICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgY29udGVudDogXCIlcC4wJSwgJXNcIixcbiAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ2Zsb3RDaGFydEN0cmwucmVhbHRpbWUnLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge31dKS5jb250cm9sbGVyKCdzcGFya2xpbmVDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmRlbW9EYXRhMSA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAyLCA0LCA2LCA0LCA1LCAyLCA0LCA1LCAzLCA0LCA2LCA0LCA3XSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBsaW5lQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgaGlnaGxpZ2h0TGluZUNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGZpbGxDb2xvcjogJyM2MENEOUInLFxuICAgICAgICBzcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtYXhTcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxNTBweCdcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5zaW1wbGVDaGFydDEgPSB7XG4gICAgICBkYXRhOiBbMywgMSwgMiwgMywgNSwgMywgNCwgMl0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgbGluZUNvbG9yOiAnIzMxQzBCRScsXG4gICAgICAgIGZpbGxDb2xvcjogJyNiY2UwZGYnLFxuICAgICAgICBzcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtaW5TcG90Q29sb3I6IGZhbHNlLFxuICAgICAgICBtYXhTcG90Q29sb3I6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgICAkc2NvcGUuc2ltcGxlQ2hhcnQyID0ge1xuICAgICAgZGF0YTogWzMsIDEsIDIsIDMsIDUsIDMsIDQsIDJdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgYmFyQ29sb3I6ICcjMzFDMEJFJ1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLnNpbXBsZUNoYXJ0MyA9IHtcbiAgICAgIGRhdGE6IFszLCAxLCAyLCAzLCA1LCAzLCA0LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgIHNsaWNlQ29sb3JzOiBbJyMzMUMwQkUnLCAnIzYwQ0Q5QicsICcjRTg3MzUyJywgJyM4MTcwQ0EnLCAnI0VFQzk1QScsICcjNjBDRDlCJ11cbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS50cmlzdGF0ZUNoYXJ0MSA9IHtcbiAgICAgIGRhdGE6IFsxLCAyLCAtMywgLTUsIDMsIDEsIC00LCAyXSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdHlwZTogJ3RyaXN0YXRlJyxcbiAgICAgICAgcG9zQmFyQ29sb3I6ICcjOTViNzVkJyxcbiAgICAgICAgbmVnQmFyQ29sb3I6ICcjZmE4NTY0J1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmxhcmdlQ2hhcnQxID0ge1xuICAgICAgZGF0YTogWzMsIDEsIDIsIDMsIDUsIDMsIDQsIDJdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGxpbmVDb2xvcjogJyM2NzRFOUUnLFxuICAgICAgICBoaWdobGlnaHRMaW5lQ29sb3I6ICcjN0FDQkVFJyxcbiAgICAgICAgZmlsbENvbG9yOiAnIzkyN0VEMScsXG4gICAgICAgIHNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgIG1pblNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgIG1heFNwb3RDb2xvcjogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzE1MHB4J1xuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmxhcmdlQ2hhcnQyID0ge1xuICAgICAgZGF0YTogWzMsIDEsIDIsIDMsIDUsIDMsIDQsIDJdLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgYmFyQ29sb3I6ICcjMzFDMEJFJyxcbiAgICAgICAgYmFyV2lkdGg6IDEwLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxNTBweCdcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUubGFyZ2VDaGFydDMgPSB7XG4gICAgICBkYXRhOiBbMywgMSwgMiwgMywgNV0sXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICBzbGljZUNvbG9yczogWycjMzFDMEJFJywgJyM2MENEOUInLCAnI0U4NzM1MicsICcjODE3MENBJywgJyNFRUM5NUEnLCAnIzYwQ0Q5QiddLFxuICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTUwcHgnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmNoYXJ0LmRpcmVjdGl2ZXMnLCBbXSkuZGlyZWN0aXZlKCdnYXVnZUNoYXJ0JywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGRhdGE6ICc9JyxcbiAgICAgICAgb3B0aW9uczogJz0nXG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGRhdGEsIGdhdWdlLCBvcHRpb25zO1xuICAgICAgICBkYXRhID0gc2NvcGUuZGF0YTtcbiAgICAgICAgb3B0aW9ucyA9IHNjb3BlLm9wdGlvbnM7XG4gICAgICAgIGdhdWdlID0gbmV3IEdhdWdlKGVsZVswXSkuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgZ2F1Z2UubWF4VmFsdWUgPSBkYXRhLm1heFZhbHVlO1xuICAgICAgICBnYXVnZS5hbmltYXRpb25TcGVlZCA9IGRhdGEuYW5pbWF0aW9uU3BlZWQ7XG4gICAgICAgIHJldHVybiBnYXVnZS5zZXQoZGF0YS52YWwpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnZmxvdENoYXJ0JywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGRhdGE6ICc9JyxcbiAgICAgICAgb3B0aW9uczogJz0nXG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGRhdGEsIG9wdGlvbnMsIHBsb3Q7XG4gICAgICAgIGRhdGEgPSBzY29wZS5kYXRhO1xuICAgICAgICBvcHRpb25zID0gc2NvcGUub3B0aW9ucztcbiAgICAgICAgcmV0dXJuIHBsb3QgPSAkLnBsb3QoZWxlWzBdLCBkYXRhLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2Zsb3RDaGFydFJlYWx0aW1lJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBkYXRhLCBnZXRSYW5kb21EYXRhLCBwbG90LCB0b3RhbFBvaW50cywgdXBkYXRlLCB1cGRhdGVJbnRlcnZhbDtcbiAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgICB0b3RhbFBvaW50cyA9IDMwMDtcbiAgICAgICAgZ2V0UmFuZG9tRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBpLCBwcmV2LCByZXMsIHk7XG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChkYXRhLmxlbmd0aCA8IHRvdGFsUG9pbnRzKSB7XG4gICAgICAgICAgICBwcmV2ID0gKGRhdGEubGVuZ3RoID4gMCA/IGRhdGFbZGF0YS5sZW5ndGggLSAxXSA6IDUwKTtcbiAgICAgICAgICAgIHkgPSBwcmV2ICsgTWF0aC5yYW5kb20oKSAqIDEwIC0gNTtcbiAgICAgICAgICAgIGlmICh5IDwgMCkge1xuICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh5ID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgeSA9IDEwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5wdXNoKHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXMgPSBbXTtcbiAgICAgICAgICBpID0gMDtcbiAgICAgICAgICB3aGlsZSAoaSA8IGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXMucHVzaChbaSwgZGF0YVtpXV0pO1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgICAgICB1cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBwbG90LnNldERhdGEoW2dldFJhbmRvbURhdGEoKV0pO1xuICAgICAgICAgIHBsb3QuZHJhdygpO1xuICAgICAgICAgIHNldFRpbWVvdXQodXBkYXRlLCB1cGRhdGVJbnRlcnZhbCk7XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgdG90YWxQb2ludHMgPSAzMDA7XG4gICAgICAgIHVwZGF0ZUludGVydmFsID0gMjAwO1xuICAgICAgICBwbG90ID0gJC5wbG90KGVsZVswXSwgW2dldFJhbmRvbURhdGEoKV0sIHtcbiAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgIGZpbGw6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWVlZWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb2xvcnM6IFtcIiM1QkRERENcIl1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3NwYXJrbGluZScsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBkYXRhOiAnPScsXG4gICAgICAgIG9wdGlvbnM6ICc9J1xuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHZhciBkYXRhLCBvcHRpb25zLCBzcGFya1Jlc2l6ZSwgc3BhcmtsaW5lRHJhdztcbiAgICAgICAgZGF0YSA9IHNjb3BlLmRhdGE7XG4gICAgICAgIG9wdGlvbnMgPSBzY29wZS5vcHRpb25zO1xuICAgICAgICBzcGFya1Jlc2l6ZSA9IHZvaWQgMDtcbiAgICAgICAgc3BhcmtsaW5lRHJhdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBlbGUuc3BhcmtsaW5lKGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc3BhcmtSZXNpemUpO1xuICAgICAgICAgIHJldHVybiBzcGFya1Jlc2l6ZSA9IHNldFRpbWVvdXQoc3BhcmtsaW5lRHJhdywgMjAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzcGFya2xpbmVEcmF3KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdtb3JyaXNDaGFydCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBkYXRhOiAnPSdcbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgY29sb3JzLCBkYXRhLCBmdW5jLCBvcHRpb25zO1xuICAgICAgICBkYXRhID0gc2NvcGUuZGF0YTtcbiAgICAgICAgc3dpdGNoIChhdHRycy50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnbGluZSc6XG4gICAgICAgICAgICBpZiAoYXR0cnMubGluZUNvbG9ycyA9PT0gdm9pZCAwIHx8IGF0dHJzLmxpbmVDb2xvcnMgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGNvbG9ycyA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBKU09OLnBhcnNlKGF0dHJzLmxpbmVDb2xvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgZWxlbWVudDogZWxlWzBdLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB4a2V5OiBhdHRycy54a2V5LFxuICAgICAgICAgICAgICB5a2V5czogSlNPTi5wYXJzZShhdHRycy55a2V5cyksXG4gICAgICAgICAgICAgIGxhYmVsczogSlNPTi5wYXJzZShhdHRycy5sYWJlbHMpLFxuICAgICAgICAgICAgICBsaW5lV2lkdGg6IGF0dHJzLmxpbmVXaWR0aCB8fCAyLFxuICAgICAgICAgICAgICBsaW5lQ29sb3JzOiBjb2xvcnMgfHwgWycjMGI2MmE0JywgJyM3YTkyYTMnLCAnIzRkYTc0ZCcsICcjYWZkOGY4JywgJyNlZGMyNDAnLCAnI2NiNGI0YicsICcjOTQ0MGVkJ11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vcnJpcy5MaW5lKG9wdGlvbnMpO1xuICAgICAgICAgIGNhc2UgJ2FyZWEnOlxuICAgICAgICAgICAgaWYgKGF0dHJzLmxpbmVDb2xvcnMgPT09IHZvaWQgMCB8fCBhdHRycy5saW5lQ29sb3JzID09PSAnJykge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gSlNPTi5wYXJzZShhdHRycy5saW5lQ29sb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZVswXSxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgeGtleTogYXR0cnMueGtleSxcbiAgICAgICAgICAgICAgeWtleXM6IEpTT04ucGFyc2UoYXR0cnMueWtleXMpLFxuICAgICAgICAgICAgICBsYWJlbHM6IEpTT04ucGFyc2UoYXR0cnMubGFiZWxzKSxcbiAgICAgICAgICAgICAgbGluZVdpZHRoOiBhdHRycy5saW5lV2lkdGggfHwgMixcbiAgICAgICAgICAgICAgbGluZUNvbG9yczogY29sb3JzIHx8IFsnIzBiNjJhNCcsICcjN2E5MmEzJywgJyM0ZGE3NGQnLCAnI2FmZDhmOCcsICcjZWRjMjQwJywgJyNjYjRiNGInLCAnIzk0NDBlZCddLFxuICAgICAgICAgICAgICBiZWhhdmVMaWtlTGluZTogYXR0cnMuYmVoYXZlTGlrZUxpbmUgfHwgZmFsc2UsXG4gICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiBhdHRycy5maWxsT3BhY2l0eSB8fCAnYXV0bycsXG4gICAgICAgICAgICAgIHBvaW50U2l6ZTogYXR0cnMucG9pbnRTaXplIHx8IDRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vcnJpcy5BcmVhKG9wdGlvbnMpO1xuICAgICAgICAgIGNhc2UgJ2Jhcic6XG4gICAgICAgICAgICBpZiAoYXR0cnMuYmFyQ29sb3JzID09PSB2b2lkIDAgfHwgYXR0cnMuYmFyQ29sb3JzID09PSAnJykge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29sb3JzID0gSlNPTi5wYXJzZShhdHRycy5iYXJDb2xvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgZWxlbWVudDogZWxlWzBdLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICB4a2V5OiBhdHRycy54a2V5LFxuICAgICAgICAgICAgICB5a2V5czogSlNPTi5wYXJzZShhdHRycy55a2V5cyksXG4gICAgICAgICAgICAgIGxhYmVsczogSlNPTi5wYXJzZShhdHRycy5sYWJlbHMpLFxuICAgICAgICAgICAgICBiYXJDb2xvcnM6IGNvbG9ycyB8fCBbJyMwYjYyYTQnLCAnIzdhOTJhMycsICcjNGRhNzRkJywgJyNhZmQ4ZjgnLCAnI2VkYzI0MCcsICcjY2I0YjRiJywgJyM5NDQwZWQnXSxcbiAgICAgICAgICAgICAgc3RhY2tlZDogYXR0cnMuc3RhY2tlZCB8fCBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuQmFyKG9wdGlvbnMpO1xuICAgICAgICAgIGNhc2UgJ2RvbnV0JzpcbiAgICAgICAgICAgIGlmIChhdHRycy5jb2xvcnMgPT09IHZvaWQgMCB8fCBhdHRycy5jb2xvcnMgPT09ICcnKSB7XG4gICAgICAgICAgICAgIGNvbG9ycyA9IG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb2xvcnMgPSBKU09OLnBhcnNlKGF0dHJzLmNvbG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICBlbGVtZW50OiBlbGVbMF0sXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgIGNvbG9yczogY29sb3JzIHx8IFsnIzBCNjJBNCcsICcjMzk4MEI1JywgJyM2NzlEQzYnLCAnIzk1QkJENycsICcjQjBDQ0UxJywgJyMwOTU3OTEnLCAnIzA5NTA4NScsICcjMDgzRTY3JywgJyMwNTJDNDgnLCAnIzA0MjEzNSddXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGF0dHJzLmZvcm1hdHRlcikge1xuICAgICAgICAgICAgICBmdW5jID0gbmV3IEZ1bmN0aW9uKCd5JywgJ2RhdGEnLCBhdHRycy5mb3JtYXR0ZXIpO1xuICAgICAgICAgICAgICBvcHRpb25zLmZvcm1hdHRlciA9IGZ1bmM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vcnJpcy5Eb251dChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5tYXAnLCBbXSkuZGlyZWN0aXZlKCd1aUpxdm1hcCcsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBzY29wZToge1xuICAgICAgICBvcHRpb25zOiAnPSdcbiAgICAgIH0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHNjb3BlLm9wdGlvbnM7XG4gICAgICAgIHJldHVybiBlbGUudmVjdG9yTWFwKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ2pxdm1hcEN0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgc2FtcGxlX2RhdGE7XG4gICAgc2FtcGxlX2RhdGEgPSB7XG4gICAgICBcImFmXCI6IFwiMTYuNjNcIixcbiAgICAgIFwiYWxcIjogXCIxMS41OFwiLFxuICAgICAgXCJkelwiOiBcIjE1OC45N1wiLFxuICAgICAgXCJhb1wiOiBcIjg1LjgxXCIsXG4gICAgICBcImFnXCI6IFwiMS4xXCIsXG4gICAgICBcImFyXCI6IFwiMzUxLjAyXCIsXG4gICAgICBcImFtXCI6IFwiOC44M1wiLFxuICAgICAgXCJhdVwiOiBcIjEyMTkuNzJcIixcbiAgICAgIFwiYXRcIjogXCIzNjYuMjZcIixcbiAgICAgIFwiYXpcIjogXCI1Mi4xN1wiLFxuICAgICAgXCJic1wiOiBcIjcuNTRcIixcbiAgICAgIFwiYmhcIjogXCIyMS43M1wiLFxuICAgICAgXCJiZFwiOiBcIjEwNS40XCIsXG4gICAgICBcImJiXCI6IFwiMy45NlwiLFxuICAgICAgXCJieVwiOiBcIjUyLjg5XCIsXG4gICAgICBcImJlXCI6IFwiNDYxLjMzXCIsXG4gICAgICBcImJ6XCI6IFwiMS40M1wiLFxuICAgICAgXCJialwiOiBcIjYuNDlcIixcbiAgICAgIFwiYnRcIjogXCIxLjRcIixcbiAgICAgIFwiYm9cIjogXCIxOS4xOFwiLFxuICAgICAgXCJiYVwiOiBcIjE2LjJcIixcbiAgICAgIFwiYndcIjogXCIxMi41XCIsXG4gICAgICBcImJyXCI6IFwiMjAyMy41M1wiLFxuICAgICAgXCJiblwiOiBcIjExLjk2XCIsXG4gICAgICBcImJnXCI6IFwiNDQuODRcIixcbiAgICAgIFwiYmZcIjogXCI4LjY3XCIsXG4gICAgICBcImJpXCI6IFwiMS40N1wiLFxuICAgICAgXCJraFwiOiBcIjExLjM2XCIsXG4gICAgICBcImNtXCI6IFwiMjEuODhcIixcbiAgICAgIFwiY2FcIjogXCIxNTYzLjY2XCIsXG4gICAgICBcImN2XCI6IFwiMS41N1wiLFxuICAgICAgXCJjZlwiOiBcIjIuMTFcIixcbiAgICAgIFwidGRcIjogXCI3LjU5XCIsXG4gICAgICBcImNsXCI6IFwiMTk5LjE4XCIsXG4gICAgICBcImNuXCI6IFwiNTc0NS4xM1wiLFxuICAgICAgXCJjb1wiOiBcIjI4My4xMVwiLFxuICAgICAgXCJrbVwiOiBcIjAuNTZcIixcbiAgICAgIFwiY2RcIjogXCIxMi42XCIsXG4gICAgICBcImNnXCI6IFwiMTEuODhcIixcbiAgICAgIFwiY3JcIjogXCIzNS4wMlwiLFxuICAgICAgXCJjaVwiOiBcIjIyLjM4XCIsXG4gICAgICBcImhyXCI6IFwiNTkuOTJcIixcbiAgICAgIFwiY3lcIjogXCIyMi43NVwiLFxuICAgICAgXCJjelwiOiBcIjE5NS4yM1wiLFxuICAgICAgXCJka1wiOiBcIjMwNC41NlwiLFxuICAgICAgXCJkalwiOiBcIjEuMTRcIixcbiAgICAgIFwiZG1cIjogXCIwLjM4XCIsXG4gICAgICBcImRvXCI6IFwiNTAuODdcIixcbiAgICAgIFwiZWNcIjogXCI2MS40OVwiLFxuICAgICAgXCJlZ1wiOiBcIjIxNi44M1wiLFxuICAgICAgXCJzdlwiOiBcIjIxLjhcIixcbiAgICAgIFwiZ3FcIjogXCIxNC41NVwiLFxuICAgICAgXCJlclwiOiBcIjIuMjVcIixcbiAgICAgIFwiZWVcIjogXCIxOS4yMlwiLFxuICAgICAgXCJldFwiOiBcIjMwLjk0XCIsXG4gICAgICBcImZqXCI6IFwiMy4xNVwiLFxuICAgICAgXCJmaVwiOiBcIjIzMS45OFwiLFxuICAgICAgXCJmclwiOiBcIjI1NTUuNDRcIixcbiAgICAgIFwiZ2FcIjogXCIxMi41NlwiLFxuICAgICAgXCJnbVwiOiBcIjEuMDRcIixcbiAgICAgIFwiZ2VcIjogXCIxMS4yM1wiLFxuICAgICAgXCJkZVwiOiBcIjMzMDUuOVwiLFxuICAgICAgXCJnaFwiOiBcIjE4LjA2XCIsXG4gICAgICBcImdyXCI6IFwiMzA1LjAxXCIsXG4gICAgICBcImdkXCI6IFwiMC42NVwiLFxuICAgICAgXCJndFwiOiBcIjQwLjc3XCIsXG4gICAgICBcImduXCI6IFwiNC4zNFwiLFxuICAgICAgXCJnd1wiOiBcIjAuODNcIixcbiAgICAgIFwiZ3lcIjogXCIyLjJcIixcbiAgICAgIFwiaHRcIjogXCI2LjVcIixcbiAgICAgIFwiaG5cIjogXCIxNS4zNFwiLFxuICAgICAgXCJoa1wiOiBcIjIyNi40OVwiLFxuICAgICAgXCJodVwiOiBcIjEzMi4yOFwiLFxuICAgICAgXCJpc1wiOiBcIjEyLjc3XCIsXG4gICAgICBcImluXCI6IFwiMTQzMC4wMlwiLFxuICAgICAgXCJpZFwiOiBcIjY5NS4wNlwiLFxuICAgICAgXCJpclwiOiBcIjMzNy45XCIsXG4gICAgICBcImlxXCI6IFwiODQuMTRcIixcbiAgICAgIFwiaWVcIjogXCIyMDQuMTRcIixcbiAgICAgIFwiaWxcIjogXCIyMDEuMjVcIixcbiAgICAgIFwiaXRcIjogXCIyMDM2LjY5XCIsXG4gICAgICBcImptXCI6IFwiMTMuNzRcIixcbiAgICAgIFwianBcIjogXCI1MzkwLjlcIixcbiAgICAgIFwiam9cIjogXCIyNy4xM1wiLFxuICAgICAgXCJrelwiOiBcIjEyOS43NlwiLFxuICAgICAgXCJrZVwiOiBcIjMyLjQyXCIsXG4gICAgICBcImtpXCI6IFwiMC4xNVwiLFxuICAgICAgXCJrclwiOiBcIjk4Ni4yNlwiLFxuICAgICAgXCJ1bmRlZmluZWRcIjogXCI1LjczXCIsXG4gICAgICBcImt3XCI6IFwiMTE3LjMyXCIsXG4gICAgICBcImtnXCI6IFwiNC40NFwiLFxuICAgICAgXCJsYVwiOiBcIjYuMzRcIixcbiAgICAgIFwibHZcIjogXCIyMy4zOVwiLFxuICAgICAgXCJsYlwiOiBcIjM5LjE1XCIsXG4gICAgICBcImxzXCI6IFwiMS44XCIsXG4gICAgICBcImxyXCI6IFwiMC45OFwiLFxuICAgICAgXCJseVwiOiBcIjc3LjkxXCIsXG4gICAgICBcImx0XCI6IFwiMzUuNzNcIixcbiAgICAgIFwibHVcIjogXCI1Mi40M1wiLFxuICAgICAgXCJta1wiOiBcIjkuNThcIixcbiAgICAgIFwibWdcIjogXCI4LjMzXCIsXG4gICAgICBcIm13XCI6IFwiNS4wNFwiLFxuICAgICAgXCJteVwiOiBcIjIxOC45NVwiLFxuICAgICAgXCJtdlwiOiBcIjEuNDNcIixcbiAgICAgIFwibWxcIjogXCI5LjA4XCIsXG4gICAgICBcIm10XCI6IFwiNy44XCIsXG4gICAgICBcIm1yXCI6IFwiMy40OVwiLFxuICAgICAgXCJtdVwiOiBcIjkuNDNcIixcbiAgICAgIFwibXhcIjogXCIxMDA0LjA0XCIsXG4gICAgICBcIm1kXCI6IFwiNS4zNlwiLFxuICAgICAgXCJtblwiOiBcIjUuODFcIixcbiAgICAgIFwibWVcIjogXCIzLjg4XCIsXG4gICAgICBcIm1hXCI6IFwiOTEuN1wiLFxuICAgICAgXCJtelwiOiBcIjEwLjIxXCIsXG4gICAgICBcIm1tXCI6IFwiMzUuNjVcIixcbiAgICAgIFwibmFcIjogXCIxMS40NVwiLFxuICAgICAgXCJucFwiOiBcIjE1LjExXCIsXG4gICAgICBcIm5sXCI6IFwiNzcwLjMxXCIsXG4gICAgICBcIm56XCI6IFwiMTM4XCIsXG4gICAgICBcIm5pXCI6IFwiNi4zOFwiLFxuICAgICAgXCJuZVwiOiBcIjUuNlwiLFxuICAgICAgXCJuZ1wiOiBcIjIwNi42NlwiLFxuICAgICAgXCJub1wiOiBcIjQxMy41MVwiLFxuICAgICAgXCJvbVwiOiBcIjUzLjc4XCIsXG4gICAgICBcInBrXCI6IFwiMTc0Ljc5XCIsXG4gICAgICBcInBhXCI6IFwiMjcuMlwiLFxuICAgICAgXCJwZ1wiOiBcIjguODFcIixcbiAgICAgIFwicHlcIjogXCIxNy4xN1wiLFxuICAgICAgXCJwZVwiOiBcIjE1My41NVwiLFxuICAgICAgXCJwaFwiOiBcIjE4OS4wNlwiLFxuICAgICAgXCJwbFwiOiBcIjQzOC44OFwiLFxuICAgICAgXCJwdFwiOiBcIjIyMy43XCIsXG4gICAgICBcInFhXCI6IFwiMTI2LjUyXCIsXG4gICAgICBcInJvXCI6IFwiMTU4LjM5XCIsXG4gICAgICBcInJ1XCI6IFwiMTQ3Ni45MVwiLFxuICAgICAgXCJyd1wiOiBcIjUuNjlcIixcbiAgICAgIFwid3NcIjogXCIwLjU1XCIsXG4gICAgICBcInN0XCI6IFwiMC4xOVwiLFxuICAgICAgXCJzYVwiOiBcIjQzNC40NFwiLFxuICAgICAgXCJzblwiOiBcIjEyLjY2XCIsXG4gICAgICBcInJzXCI6IFwiMzguOTJcIixcbiAgICAgIFwic2NcIjogXCIwLjkyXCIsXG4gICAgICBcInNsXCI6IFwiMS45XCIsXG4gICAgICBcInNnXCI6IFwiMjE3LjM4XCIsXG4gICAgICBcInNrXCI6IFwiODYuMjZcIixcbiAgICAgIFwic2lcIjogXCI0Ni40NFwiLFxuICAgICAgXCJzYlwiOiBcIjAuNjdcIixcbiAgICAgIFwiemFcIjogXCIzNTQuNDFcIixcbiAgICAgIFwiZXNcIjogXCIxMzc0Ljc4XCIsXG4gICAgICBcImxrXCI6IFwiNDguMjRcIixcbiAgICAgIFwia25cIjogXCIwLjU2XCIsXG4gICAgICBcImxjXCI6IFwiMVwiLFxuICAgICAgXCJ2Y1wiOiBcIjAuNThcIixcbiAgICAgIFwic2RcIjogXCI2NS45M1wiLFxuICAgICAgXCJzclwiOiBcIjMuM1wiLFxuICAgICAgXCJzelwiOiBcIjMuMTdcIixcbiAgICAgIFwic2VcIjogXCI0NDQuNTlcIixcbiAgICAgIFwiY2hcIjogXCI1MjIuNDRcIixcbiAgICAgIFwic3lcIjogXCI1OS42M1wiLFxuICAgICAgXCJ0d1wiOiBcIjQyNi45OFwiLFxuICAgICAgXCJ0alwiOiBcIjUuNThcIixcbiAgICAgIFwidHpcIjogXCIyMi40M1wiLFxuICAgICAgXCJ0aFwiOiBcIjMxMi42MVwiLFxuICAgICAgXCJ0bFwiOiBcIjAuNjJcIixcbiAgICAgIFwidGdcIjogXCIzLjA3XCIsXG4gICAgICBcInRvXCI6IFwiMC4zXCIsXG4gICAgICBcInR0XCI6IFwiMjEuMlwiLFxuICAgICAgXCJ0blwiOiBcIjQzLjg2XCIsXG4gICAgICBcInRyXCI6IFwiNzI5LjA1XCIsXG4gICAgICBcInRtXCI6IDAsXG4gICAgICBcInVnXCI6IFwiMTcuMTJcIixcbiAgICAgIFwidWFcIjogXCIxMzYuNTZcIixcbiAgICAgIFwiYWVcIjogXCIyMzkuNjVcIixcbiAgICAgIFwiZ2JcIjogXCIyMjU4LjU3XCIsXG4gICAgICBcInVzXCI6IFwiMTQ2MjQuMThcIixcbiAgICAgIFwidXlcIjogXCI0MC43MVwiLFxuICAgICAgXCJ1elwiOiBcIjM3LjcyXCIsXG4gICAgICBcInZ1XCI6IFwiMC43MlwiLFxuICAgICAgXCJ2ZVwiOiBcIjI4NS4yMVwiLFxuICAgICAgXCJ2blwiOiBcIjEwMS45OVwiLFxuICAgICAgXCJ5ZVwiOiBcIjMwLjAyXCIsXG4gICAgICBcInptXCI6IFwiMTUuNjlcIixcbiAgICAgIFwiendcIjogXCI1LjU3XCJcbiAgICB9O1xuICAgICRzY29wZS53b3JsZE1hcCA9IHtcbiAgICAgIG1hcDogJ3dvcmxkX2VuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICBob3Zlck9wYWNpdHk6IDAuNyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjNjY2NjY2JyxcbiAgICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgIHZhbHVlczogc2FtcGxlX2RhdGEsXG4gICAgICBzY2FsZUNvbG9yczogWycjQzRGRkZGJywgJyMwN0MwQkInXSxcbiAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCdcbiAgICB9O1xuICAgICRzY29wZS52ZW5lenVlbGFNYXAgPSB7XG4gICAgICBtYXA6ICd2ZW5lenVlbGFfZW4nLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICAgICAgY29sb3I6ICcjMDAwMDYzJyxcbiAgICAgIGhvdmVyQ29sb3I6ICcjQjZBQjBGJyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjZjRlMzBhJyxcbiAgICAgIGVuYWJsZVpvb206IHRydWUsXG4gICAgICBzaG93VG9vbHRpcDogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkUmVnaW9uOiAnWlUnXG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmV1cm9wZU1hcCA9IHtcbiAgICAgIG1hcDogJ2V1cm9wZV9lbicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgaG92ZXJPcGFjaXR5OiAwLjcsXG4gICAgICBob3ZlckNvbG9yOiAnIzk5OTk5OScsXG4gICAgICBlbmFibGVab29tOiBmYWxzZSxcbiAgICAgIHNob3dUb29sdGlwOiBmYWxzZSxcbiAgICAgIHZhbHVlczogc2FtcGxlX2RhdGEsXG4gICAgICBzY2FsZUNvbG9yczogWycjQzRGRkZGJywgJyMwN0MwQkInXSxcbiAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCdcbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudGFibGVzJywgW10pLmNvbnRyb2xsZXIoJ3RhYmxlQ3RybCcsIFtcbiAgJyRzY29wZScsICckZmlsdGVyJywgZnVuY3Rpb24oJHNjb3BlLCAkZmlsdGVyKSB7XG4gICAgdmFyIGluaXQ7XG4gICAgJHNjb3BlLnN0b3JlcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ05paml5YSBNYXJrZXQnLFxuICAgICAgICBwcmljZTogJyQkJyxcbiAgICAgICAgc2FsZXM6IDI5MixcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0VhdCBPbiBNb25kYXkgVHJ1Y2snLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTE5LFxuICAgICAgICByYXRpbmc6IDQuM1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnVGVhIEVyYScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiA4NzQsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdSb2dlcnMgRGVsaScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAzNDcsXG4gICAgICAgIHJhdGluZzogNC4yXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdNb0Jvd2wnLFxuICAgICAgICBwcmljZTogJyQkJCcsXG4gICAgICAgIHNhbGVzOiAyNCxcbiAgICAgICAgcmF0aW5nOiA0LjZcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RoZSBNaWxrIFBhaWwgTWFya2V0JyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDU0MyxcbiAgICAgICAgcmF0aW5nOiA0LjVcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ05vYiBIaWxsIEZvb2RzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA4NzQsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdTY3JhdGNoJyxcbiAgICAgICAgcHJpY2U6ICckJCQnLFxuICAgICAgICBzYWxlczogNjQzLFxuICAgICAgICByYXRpbmc6IDMuNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnR29jaGkgSmFwYW5lc2UgRnVzaW9uIFRhcGFzJyxcbiAgICAgICAgcHJpY2U6ICckJCQnLFxuICAgICAgICBzYWxlczogNTYsXG4gICAgICAgIHJhdGluZzogNC4xXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDb3N0IFBsdXMgV29ybGQgTWFya2V0JyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA3OSxcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0J1bWJsZSBCZWUgSGVhbHRoIEZvb2RzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA0MyxcbiAgICAgICAgcmF0aW5nOiA0LjNcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0Nvc3RjbycsXG4gICAgICAgIHByaWNlOiAnJCQnLFxuICAgICAgICBzYWxlczogMjE5LFxuICAgICAgICByYXRpbmc6IDMuNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnUmVkIFJvY2sgQ29mZmVlIENvJyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDc2NSxcbiAgICAgICAgcmF0aW5nOiA0LjFcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJzk5IFJhbmNoIE1hcmtldCcsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAxODEsXG4gICAgICAgIHJhdGluZzogMy40XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdNaSBQdWVibG8gRm9vZCBDZW50ZXInLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogNzgsXG4gICAgICAgIHJhdGluZzogNC4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDdWNpbmEgVmVudGknLFxuICAgICAgICBwcmljZTogJyQkJyxcbiAgICAgICAgc2FsZXM6IDE2MyxcbiAgICAgICAgcmF0aW5nOiAzLjNcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1N1ZmkgQ29mZmVlIFNob3AnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTEzLFxuICAgICAgICByYXRpbmc6IDMuM1xuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnRGFuYSBTdHJlZXQgUm9hc3RpbmcnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMzE2LFxuICAgICAgICByYXRpbmc6IDQuMVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnUGVhcmwgQ2FmZScsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAxNzMsXG4gICAgICAgIHJhdGluZzogMy40XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdQb3NoIEJhZ2VsJyxcbiAgICAgICAgcHJpY2U6ICckJyxcbiAgICAgICAgc2FsZXM6IDE0MCxcbiAgICAgICAgcmF0aW5nOiA0LjBcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0FydGlzYW4gV2luZSBEZXBvdCcsXG4gICAgICAgIHByaWNlOiAnJCQnLFxuICAgICAgICBzYWxlczogMjYsXG4gICAgICAgIHJhdGluZzogNC4xXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdIb25nIEtvbmcgQ2hpbmVzZSBCYWtlcnknLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogMTgyLFxuICAgICAgICByYXRpbmc6IDMuNFxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnU3RhcmJ1Y2tzJyxcbiAgICAgICAgcHJpY2U6ICckJCcsXG4gICAgICAgIHNhbGVzOiA5NyxcbiAgICAgICAgcmF0aW5nOiAzLjdcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ1RhcGlvY2EgRXhwcmVzcycsXG4gICAgICAgIHByaWNlOiAnJCcsXG4gICAgICAgIHNhbGVzOiAzMDEsXG4gICAgICAgIHJhdGluZzogMy4wXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdIb3VzZSBvZiBCYWdlbHMnLFxuICAgICAgICBwcmljZTogJyQnLFxuICAgICAgICBzYWxlczogODIsXG4gICAgICAgIHJhdGluZzogNC40XG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuc2VhcmNoS2V5d29yZHMgPSAnJztcbiAgICAkc2NvcGUuZmlsdGVyZWRTdG9yZXMgPSBbXTtcbiAgICAkc2NvcGUucm93ID0gJyc7XG4gICAgJHNjb3BlLnNlbGVjdCA9IGZ1bmN0aW9uKHBhZ2UpIHtcbiAgICAgIHZhciBlbmQsIHN0YXJ0O1xuICAgICAgc3RhcnQgPSAocGFnZSAtIDEpICogJHNjb3BlLm51bVBlclBhZ2U7XG4gICAgICBlbmQgPSBzdGFydCArICRzY29wZS5udW1QZXJQYWdlO1xuICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50UGFnZVN0b3JlcyA9ICRzY29wZS5maWx0ZXJlZFN0b3Jlcy5zbGljZShzdGFydCwgZW5kKTtcbiAgICB9O1xuICAgICRzY29wZS5vbkZpbHRlckNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlbGVjdCgxKTtcbiAgICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICByZXR1cm4gJHNjb3BlLnJvdyA9ICcnO1xuICAgIH07XG4gICAgJHNjb3BlLm9uTnVtUGVyUGFnZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlbGVjdCgxKTtcbiAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFBhZ2UgPSAxO1xuICAgIH07XG4gICAgJHNjb3BlLm9uT3JkZXJDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5zZWxlY3QoMSk7XG4gICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRQYWdlID0gMTtcbiAgICB9O1xuICAgICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS5maWx0ZXJlZFN0b3JlcyA9ICRmaWx0ZXIoJ2ZpbHRlcicpKCRzY29wZS5zdG9yZXMsICRzY29wZS5zZWFyY2hLZXl3b3Jkcyk7XG4gICAgICByZXR1cm4gJHNjb3BlLm9uRmlsdGVyQ2hhbmdlKCk7XG4gICAgfTtcbiAgICAkc2NvcGUub3JkZXIgPSBmdW5jdGlvbihyb3dOYW1lKSB7XG4gICAgICBpZiAoJHNjb3BlLnJvdyA9PT0gcm93TmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkc2NvcGUucm93ID0gcm93TmFtZTtcbiAgICAgICRzY29wZS5maWx0ZXJlZFN0b3JlcyA9ICRmaWx0ZXIoJ29yZGVyQnknKSgkc2NvcGUuc3RvcmVzLCByb3dOYW1lKTtcbiAgICAgIHJldHVybiAkc2NvcGUub25PcmRlckNoYW5nZSgpO1xuICAgIH07XG4gICAgJHNjb3BlLm51bVBlclBhZ2VPcHQgPSBbMywgNSwgMTAsIDIwXTtcbiAgICAkc2NvcGUubnVtUGVyUGFnZSA9ICRzY29wZS5udW1QZXJQYWdlT3B0WzJdO1xuICAgICRzY29wZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgJHNjb3BlLmN1cnJlbnRQYWdlU3RvcmVzID0gW107XG4gICAgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNlYXJjaCgpO1xuICAgICAgcmV0dXJuICRzY29wZS5zZWxlY3QoJHNjb3BlLmN1cnJlbnRQYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiBpbml0KCk7XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC50YXNrJywgW10pLmZhY3RvcnkoJ3Rhc2tTdG9yYWdlJywgZnVuY3Rpb24oKSB7XG4gIHZhciBERU1PX1RBU0tTLCBTVE9SQUdFX0lEO1xuICBTVE9SQUdFX0lEID0gJ3Rhc2tzJztcbiAgREVNT19UQVNLUyA9ICdbIHtcInRpdGxlXCI6IFwiRmluaXNoIGhvbWV3b3JrXCIsIFwiY29tcGxldGVkXCI6IHRydWV9LCB7XCJ0aXRsZVwiOiBcIk1ha2UgYSBjYWxsXCIsIFwiY29tcGxldGVkXCI6IHRydWV9LCB7XCJ0aXRsZVwiOiBcIkJ1aWxkIGEgc25vd21hbiFcIiwgXCJjb21wbGV0ZWRcIjogZmFsc2V9LCB7XCJ0aXRsZVwiOiBcIlRhbmdvISBUYW5nbyEgVGFuZ28hXCIsIFwiY29tcGxldGVkXCI6IGZhbHNlfSwge1widGl0bGVcIjogXCJQbGF5IGdhbWVzIHdpdGggZnJpZW5kc1wiLCBcImNvbXBsZXRlZFwiOiBmYWxzZX0sIHtcInRpdGxlXCI6IFwiU2hvcHBpbmdcIiwgXCJjb21wbGV0ZWRcIjogZmFsc2V9LCB7XCJ0aXRsZVwiOiBcIk9uZSBtb3JlIGRhbmNlXCIsIFwiY29tcGxldGVkXCI6IGZhbHNlfSwge1widGl0bGVcIjogXCJUcnkgR29vZ2xlIGdsYXNzXCIsIFwiY29tcGxldGVkXCI6IGZhbHNlfSBdJztcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9JRCkgfHwgREVNT19UQVNLUyk7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uKHRhc2tzKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9JRCwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICB9XG4gIH07XG59KS5kaXJlY3RpdmUoJ3Rhc2tGb2N1cycsIFtcbiAgJyR0aW1lb3V0JywgZnVuY3Rpb24oJHRpbWVvdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiR3YXRjaChhdHRycy50YXNrRm9jdXMsIGZ1bmN0aW9uKG5ld1ZhbCkge1xuICAgICAgICAgIGlmIChuZXdWYWwpIHtcbiAgICAgICAgICAgIHJldHVybiAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZVswXS5mb2N1cygpO1xuICAgICAgICAgICAgfSwgMCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcigndGFza0N0cmwnLCBbXG4gICckc2NvcGUnLCAndGFza1N0b3JhZ2UnLCAnZmlsdGVyRmlsdGVyJywgJyRyb290U2NvcGUnLCAnbG9nZ2VyJywgZnVuY3Rpb24oJHNjb3BlLCB0YXNrU3RvcmFnZSwgZmlsdGVyRmlsdGVyLCAkcm9vdFNjb3BlLCBsb2dnZXIpIHtcbiAgICB2YXIgdGFza3M7XG4gICAgdGFza3MgPSAkc2NvcGUudGFza3MgPSB0YXNrU3RvcmFnZS5nZXQoKTtcbiAgICAkc2NvcGUubmV3VGFzayA9ICcnO1xuICAgICRzY29wZS5yZW1haW5pbmdDb3VudCA9IGZpbHRlckZpbHRlcih0YXNrcywge1xuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH0pLmxlbmd0aDtcbiAgICAkc2NvcGUuZWRpdGVkVGFzayA9IG51bGw7XG4gICAgJHNjb3BlLnN0YXR1c0ZpbHRlciA9IHtcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9O1xuICAgICRzY29wZS5maWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICAgICAgcmV0dXJuICRzY29wZS5zdGF0dXNGaWx0ZXIgPSAnJztcbiAgICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnN0YXR1c0ZpbHRlciA9IHtcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdjb21wbGV0ZWQnOlxuICAgICAgICAgIHJldHVybiAkc2NvcGUuc3RhdHVzRmlsdGVyID0ge1xuICAgICAgICAgICAgY29tcGxldGVkOiB0cnVlXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5hZGQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuZXdUYXNrO1xuICAgICAgbmV3VGFzayA9ICRzY29wZS5uZXdUYXNrLnRyaW0oKTtcbiAgICAgIGlmIChuZXdUYXNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IG5ld1Rhc2ssXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgbG9nZ2VyLmxvZ1N1Y2Nlc3MoJ05ldyB0YXNrOiBcIicgKyBuZXdUYXNrICsgJ1wiIGFkZGVkJyk7XG4gICAgICB0YXNrU3RvcmFnZS5wdXQodGFza3MpO1xuICAgICAgJHNjb3BlLm5ld1Rhc2sgPSAnJztcbiAgICAgIHJldHVybiAkc2NvcGUucmVtYWluaW5nQ291bnQrKztcbiAgICB9O1xuICAgICRzY29wZS5lZGl0ID0gZnVuY3Rpb24odGFzaykge1xuICAgICAgcmV0dXJuICRzY29wZS5lZGl0ZWRUYXNrID0gdGFzaztcbiAgICB9O1xuICAgICRzY29wZS5kb25lRWRpdGluZyA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICRzY29wZS5lZGl0ZWRUYXNrID0gbnVsbDtcbiAgICAgIHRhc2sudGl0bGUgPSB0YXNrLnRpdGxlLnRyaW0oKTtcbiAgICAgIGlmICghdGFzay50aXRsZSkge1xuICAgICAgICAkc2NvcGUucmVtb3ZlKHRhc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnVGFzayB1cGRhdGVkJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFza1N0b3JhZ2UucHV0KHRhc2tzKTtcbiAgICB9O1xuICAgICRzY29wZS5yZW1vdmUgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICB2YXIgaW5kZXg7XG4gICAgICAkc2NvcGUucmVtYWluaW5nQ291bnQgLT0gdGFzay5jb21wbGV0ZWQgPyAwIDogMTtcbiAgICAgIGluZGV4ID0gJHNjb3BlLnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAkc2NvcGUudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRhc2tTdG9yYWdlLnB1dCh0YXNrcyk7XG4gICAgICByZXR1cm4gbG9nZ2VyLmxvZ0Vycm9yKCdUYXNrIHJlbW92ZWQnKTtcbiAgICB9O1xuICAgICRzY29wZS5jb21wbGV0ZWQgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAkc2NvcGUucmVtYWluaW5nQ291bnQgKz0gdGFzay5jb21wbGV0ZWQgPyAtMSA6IDE7XG4gICAgICB0YXNrU3RvcmFnZS5wdXQodGFza3MpO1xuICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgIGlmICgkc2NvcGUucmVtYWluaW5nQ291bnQgPiAwKSB7XG4gICAgICAgICAgaWYgKCRzY29wZS5yZW1haW5pbmdDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2coJ0FsbW9zdCB0aGVyZSEgT25seSAnICsgJHNjb3BlLnJlbWFpbmluZ0NvdW50ICsgJyB0YXNrIGxlZnQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2coJ0dvb2Qgam9iISBPbmx5ICcgKyAkc2NvcGUucmVtYWluaW5nQ291bnQgKyAnIHRhc2tzIGxlZnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dTdWNjZXNzKCdDb25ncmF0cyEgQWxsIGRvbmUgOiknKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmNsZWFyQ29tcGxldGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUudGFza3MgPSB0YXNrcyA9IHRhc2tzLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuICF2YWwuY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGFza1N0b3JhZ2UucHV0KHRhc2tzKTtcbiAgICB9O1xuICAgICRzY29wZS5tYXJrQWxsID0gZnVuY3Rpb24oY29tcGxldGVkKSB7XG4gICAgICB0YXNrcy5mb3JFYWNoKGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRhc2suY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgfSk7XG4gICAgICAkc2NvcGUucmVtYWluaW5nQ291bnQgPSBjb21wbGV0ZWQgPyAwIDogdGFza3MubGVuZ3RoO1xuICAgICAgdGFza1N0b3JhZ2UucHV0KHRhc2tzKTtcbiAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dTdWNjZXNzKCdDb25ncmF0cyEgQWxsIGRvbmUgOiknKTtcbiAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS4kd2F0Y2goJ3JlbWFpbmluZ0NvdW50ID09IDAnLCBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuYWxsQ2hlY2tlZCA9IHZhbDtcbiAgICB9KTtcbiAgICByZXR1cm4gJHNjb3BlLiR3YXRjaCgncmVtYWluaW5nQ291bnQnLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgcmV0dXJuICRyb290U2NvcGUuJGJyb2FkY2FzdCgndGFza1JlbWFpbmluZzpjaGFuZ2VkJywgbmV3VmFsKTtcbiAgICB9KTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnVpLmZvcm0uY3RybHMnLCBbXSkuY29udHJvbGxlcignVGFnc0RlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgcmV0dXJuICRzY29wZS50YWdzID0gWydmb28nLCAnYmFyJ107XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0RhdGVwaWNrZXJEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS50b2RheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5kdCA9IG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICAkc2NvcGUudG9kYXkoKTtcbiAgICAkc2NvcGUuc2hvd1dlZWtzID0gdHJ1ZTtcbiAgICAkc2NvcGUudG9nZ2xlV2Vla3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuc2hvd1dlZWtzID0gISRzY29wZS5zaG93V2Vla3M7XG4gICAgfTtcbiAgICAkc2NvcGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkc2NvcGUuZHQgPSBudWxsO1xuICAgIH07XG4gICAgJHNjb3BlLmRpc2FibGVkID0gZnVuY3Rpb24oZGF0ZSwgbW9kZSkge1xuICAgICAgcmV0dXJuIG1vZGUgPT09ICdkYXknICYmIChkYXRlLmdldERheSgpID09PSAwIHx8IGRhdGUuZ2V0RGF5KCkgPT09IDYpO1xuICAgIH07XG4gICAgJHNjb3BlLnRvZ2dsZU1pbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlZjtcbiAgICAgIHJldHVybiAkc2NvcGUubWluRGF0ZSA9IChyZWYgPSAkc2NvcGUubWluRGF0ZSkgIT0gbnVsbCA/IHJlZiA6IHtcbiAgICAgICAgXCJudWxsXCI6IG5ldyBEYXRlKClcbiAgICAgIH07XG4gICAgfTtcbiAgICAkc2NvcGUudG9nZ2xlTWluKCk7XG4gICAgJHNjb3BlLm9wZW4gPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuICRzY29wZS5vcGVuZWQgPSB0cnVlO1xuICAgIH07XG4gICAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xuICAgICAgJ3llYXItZm9ybWF0JzogXCIneXknXCIsXG4gICAgICAnc3RhcnRpbmctZGF5JzogMVxuICAgIH07XG4gICAgJHNjb3BlLmZvcm1hdHMgPSBbJ2RkLU1NTU0teXl5eScsICd5eXl5L01NL2RkJywgJ3Nob3J0RGF0ZSddO1xuICAgIHJldHVybiAkc2NvcGUuZm9ybWF0ID0gJHNjb3BlLmZvcm1hdHNbMF07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1RpbWVwaWNrZXJEZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5teXRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICRzY29wZS5oc3RlcCA9IDE7XG4gICAgJHNjb3BlLm1zdGVwID0gMTU7XG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XG4gICAgICBoc3RlcDogWzEsIDIsIDNdLFxuICAgICAgbXN0ZXA6IFsxLCA1LCAxMCwgMTUsIDI1LCAzMF1cbiAgICB9O1xuICAgICRzY29wZS5pc21lcmlkaWFuID0gdHJ1ZTtcbiAgICAkc2NvcGUudG9nZ2xlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICRzY29wZS5pc21lcmlkaWFuID0gISRzY29wZS5pc21lcmlkaWFuO1xuICAgIH07XG4gICAgJHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGQ7XG4gICAgICBkID0gbmV3IERhdGUoKTtcbiAgICAgIGQuc2V0SG91cnMoMTQpO1xuICAgICAgZC5zZXRNaW51dGVzKDApO1xuICAgICAgcmV0dXJuICRzY29wZS5teXRpbWUgPSBkO1xuICAgIH07XG4gICAgJHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygnVGltZSBjaGFuZ2VkIHRvOiAnICsgJHNjb3BlLm15dGltZSk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmNsZWFyID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLm15dGltZSA9IG51bGw7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignVHlwZWFoZWFkQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5zZWxlY3RlZCA9IHZvaWQgMDtcbiAgICByZXR1cm4gJHNjb3BlLnN0YXRlcyA9IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsICdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJywgJ0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJywgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ107XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1JhdGluZ0RlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnJhdGUgPSA3O1xuICAgICRzY29wZS5tYXggPSAxMDtcbiAgICAkc2NvcGUuaXNSZWFkb25seSA9IGZhbHNlO1xuICAgICRzY29wZS5ob3ZlcmluZ092ZXIgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgJHNjb3BlLm92ZXJTdGFyID0gdmFsdWU7XG4gICAgICByZXR1cm4gJHNjb3BlLnBlcmNlbnQgPSAxMDAgKiAodmFsdWUgLyAkc2NvcGUubWF4KTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUucmF0aW5nU3RhdGVzID0gW1xuICAgICAge1xuICAgICAgICBzdGF0ZU9uOiAnZ2x5cGhpY29uLW9rLXNpZ24nLFxuICAgICAgICBzdGF0ZU9mZjogJ2dseXBoaWNvbi1vay1jaXJjbGUnXG4gICAgICB9LCB7XG4gICAgICAgIHN0YXRlT246ICdnbHlwaGljb24tc3RhcicsXG4gICAgICAgIHN0YXRlT2ZmOiAnZ2x5cGhpY29uLXN0YXItZW1wdHknXG4gICAgICB9LCB7XG4gICAgICAgIHN0YXRlT246ICdnbHlwaGljb24taGVhcnQnLFxuICAgICAgICBzdGF0ZU9mZjogJ2dseXBoaWNvbi1iYW4tY2lyY2xlJ1xuICAgICAgfSwge1xuICAgICAgICBzdGF0ZU9uOiAnZ2x5cGhpY29uLWhlYXJ0J1xuICAgICAgfSwge1xuICAgICAgICBzdGF0ZU9mZjogJ2dseXBoaWNvbi1vZmYnXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwLnVpLmZvcm0uZGlyZWN0aXZlcycsIFtdKS5kaXJlY3RpdmUoJ3VpUmFuZ2VTbGlkZXInLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSkge1xuICAgICAgICByZXR1cm4gZWxlLnNsaWRlcigpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndWlGaWxlVXBsb2FkJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUpIHtcbiAgICAgICAgcmV0dXJuIGVsZS5ib290c3RyYXBGaWxlSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3VpU3Bpbm5lcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBjb21waWxlOiBmdW5jdGlvbihlbGUsIGF0dHJzKSB7XG4gICAgICAgIGVsZS5hZGRDbGFzcygndWktc3Bpbm5lcicpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZS5zcGlubmVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgndWlXaXphcmRGb3JtJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSkge1xuICAgICAgICByZXR1cm4gZWxlLnN0ZXBzKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLmZvcm0udmFsaWRhdGlvbicsIFtdKS5jb250cm9sbGVyKCd3aXphcmRGb3JtQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS53aXphcmQgPSB7XG4gICAgICBmaXJzdE5hbWU6ICdzb21lIG5hbWUnLFxuICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgYWdlOiAnJyxcbiAgICAgIGFkZHJlc3M6ICcnXG4gICAgfTtcbiAgICAkc2NvcGUuaXNWYWxpZGF0ZVN0ZXAxID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUud2l6YXJkX3N0ZXAxKTtcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS53aXphcmQuZmlyc3ROYW1lICE9PSAnJyk7XG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUud2l6YXJkLmxhc3ROYW1lID09PSAnJyk7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJHNjb3BlLndpemFyZC5maXJzdE5hbWUgIT09ICcnICYmICRzY29wZS53aXphcmQubGFzdE5hbWUgIT09ICcnKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuZmluaXNoZWRXaXphcmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZygneW9vJyk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignZm9ybUNvbnN0cmFpbnRzQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgIHZhciBvcmlnaW5hbDtcbiAgICAkc2NvcGUuZm9ybSA9IHtcbiAgICAgIHJlcXVpcmVkOiAnJyxcbiAgICAgIG1pbmxlbmd0aDogJycsXG4gICAgICBtYXhsZW5ndGg6ICcnLFxuICAgICAgbGVuZ3RoX3JhZ2U6ICcnLFxuICAgICAgdHlwZV9zb21ldGhpbmc6ICcnLFxuICAgICAgY29uZmlybV90eXBlOiAnJyxcbiAgICAgIGZvbzogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgbnVtOiAnJyxcbiAgICAgIG1pblZhbDogJycsXG4gICAgICBtYXhWYWw6ICcnLFxuICAgICAgdmFsUmFuZ2U6ICcnLFxuICAgICAgcGF0dGVybjogJydcbiAgICB9O1xuICAgIG9yaWdpbmFsID0gYW5ndWxhci5jb3B5KCRzY29wZS5mb3JtKTtcbiAgICAkc2NvcGUucmV2ZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUuZm9ybSA9IGFuZ3VsYXIuY29weShvcmlnaW5hbCk7XG4gICAgICByZXR1cm4gJHNjb3BlLmZvcm1fY29uc3RyYWludHMuJHNldFByaXN0aW5lKCk7XG4gICAgfTtcbiAgICAkc2NvcGUuY2FuUmV2ZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIWFuZ3VsYXIuZXF1YWxzKCRzY29wZS5mb3JtLCBvcmlnaW5hbCkgfHwgISRzY29wZS5mb3JtX2NvbnN0cmFpbnRzLiRwcmlzdGluZTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuY2FuU3VibWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmZvcm1fY29uc3RyYWludHMuJHZhbGlkICYmICFhbmd1bGFyLmVxdWFscygkc2NvcGUuZm9ybSwgb3JpZ2luYWwpO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ3NpZ25pbkN0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICB2YXIgb3JpZ2luYWw7XG4gICAgJHNjb3BlLnVzZXIgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuICAgICRzY29wZS5zaG93SW5mb09uU3VibWl0ID0gZmFsc2U7XG4gICAgb3JpZ2luYWwgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnVzZXIpO1xuICAgICRzY29wZS5yZXZlcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICRzY29wZS51c2VyID0gYW5ndWxhci5jb3B5KG9yaWdpbmFsKTtcbiAgICAgIHJldHVybiAkc2NvcGUuZm9ybV9zaWduaW4uJHNldFByaXN0aW5lKCk7XG4gICAgfTtcbiAgICAkc2NvcGUuY2FuUmV2ZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIWFuZ3VsYXIuZXF1YWxzKCRzY29wZS51c2VyLCBvcmlnaW5hbCkgfHwgISRzY29wZS5mb3JtX3NpZ25pbi4kcHJpc3RpbmU7XG4gICAgfTtcbiAgICAkc2NvcGUuY2FuU3VibWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmZvcm1fc2lnbmluLiR2YWxpZCAmJiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLnVzZXIsIG9yaWdpbmFsKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNob3dJbmZvT25TdWJtaXQgPSB0cnVlO1xuICAgICAgcmV0dXJuICRzY29wZS5yZXZlcnQoKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdzaWdudXBDdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgdmFyIG9yaWdpbmFsO1xuICAgICRzY29wZS51c2VyID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICAgICAgYWdlOiAnJ1xuICAgIH07XG4gICAgJHNjb3BlLnNob3dJbmZvT25TdWJtaXQgPSBmYWxzZTtcbiAgICBvcmlnaW5hbCA9IGFuZ3VsYXIuY29weSgkc2NvcGUudXNlcik7XG4gICAgJHNjb3BlLnJldmVydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnVzZXIgPSBhbmd1bGFyLmNvcHkob3JpZ2luYWwpO1xuICAgICAgJHNjb3BlLmZvcm1fc2lnbnVwLiRzZXRQcmlzdGluZSgpO1xuICAgICAgcmV0dXJuICRzY29wZS5mb3JtX3NpZ251cC5jb25maXJtUGFzc3dvcmQuJHNldFByaXN0aW5lKCk7XG4gICAgfTtcbiAgICAkc2NvcGUuY2FuUmV2ZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gIWFuZ3VsYXIuZXF1YWxzKCRzY29wZS51c2VyLCBvcmlnaW5hbCkgfHwgISRzY29wZS5mb3JtX3NpZ251cC4kcHJpc3RpbmU7XG4gICAgfTtcbiAgICAkc2NvcGUuY2FuU3VibWl0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJHNjb3BlLmZvcm1fc2lnbnVwLiR2YWxpZCAmJiAhYW5ndWxhci5lcXVhbHMoJHNjb3BlLnVzZXIsIG9yaWdpbmFsKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJHNjb3BlLnNob3dJbmZvT25TdWJtaXQgPSB0cnVlO1xuICAgICAgcmV0dXJuICRzY29wZS5yZXZlcnQoKTtcbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3ZhbGlkYXRlRXF1YWxzJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMsIG5nTW9kZWxDdHJsKSB7XG4gICAgICAgIHZhciB2YWxpZGF0ZUVxdWFsO1xuICAgICAgICB2YWxpZGF0ZUVxdWFsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsaWQ7XG4gICAgICAgICAgdmFsaWQgPSB2YWx1ZSA9PT0gc2NvcGUuJGV2YWwoYXR0cnMudmFsaWRhdGVFcXVhbHMpO1xuICAgICAgICAgIG5nTW9kZWxDdHJsLiRzZXRWYWxpZGl0eSgnZXF1YWwnLCB2YWxpZCk7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWxpZCA9PT0gXCJmdW5jdGlvblwiID8gdmFsaWQoe1xuICAgICAgICAgICAgdmFsdWU6IHZvaWQgMFxuICAgICAgICAgIH0pIDogdm9pZCAwO1xuICAgICAgICB9O1xuICAgICAgICBuZ01vZGVsQ3RybC4kcGFyc2Vycy5wdXNoKHZhbGlkYXRlRXF1YWwpO1xuICAgICAgICBuZ01vZGVsQ3RybC4kZm9ybWF0dGVycy5wdXNoKHZhbGlkYXRlRXF1YWwpO1xuICAgICAgICByZXR1cm4gc2NvcGUuJHdhdGNoKGF0dHJzLnZhbGlkYXRlRXF1YWxzLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmdNb2RlbEN0cmwuJHNldFZpZXdWYWx1ZShuZ01vZGVsQ3RybC4kVmlld1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5wYWdlLmN0cmxzJywgW10pLmNvbnRyb2xsZXIoJ2ludm9pY2VDdHJsJywgW1xuICAnJHNjb3BlJywgJyR3aW5kb3cnLCBmdW5jdGlvbigkc2NvcGUsICR3aW5kb3cpIHtcbiAgICByZXR1cm4gJHNjb3BlLnByaW50SW52b2ljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG9yaWdpbmFsQ29udGVudHMsIHBvcHVwV2luLCBwcmludENvbnRlbnRzO1xuICAgICAgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnZvaWNlJykuaW5uZXJIVE1MO1xuICAgICAgb3JpZ2luYWxDb250ZW50cyA9IGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MO1xuICAgICAgcG9wdXBXaW4gPSB3aW5kb3cub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQub3BlbigpO1xuICAgICAgcG9wdXBXaW4uZG9jdW1lbnQud3JpdGUoJzxodG1sPjxoZWFkPjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwic3R5bGVzL21haW4uY3NzXCIgLz48L2hlYWQ+PGJvZHkgb25sb2FkPVwid2luZG93LnByaW50KClcIj4nICsgcHJpbnRDb250ZW50cyArICc8L2h0bWw+Jyk7XG4gICAgICByZXR1cm4gcG9wdXBXaW4uZG9jdW1lbnQuY2xvc2UoKTtcbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAudWkuY3RybHMnLCBbXSkuY29udHJvbGxlcignTm90aWZ5Q3RybCcsIFtcbiAgJyRzY29wZScsICdsb2dnZXInLCBmdW5jdGlvbigkc2NvcGUsIGxvZ2dlcikge1xuICAgIHJldHVybiAkc2NvcGUubm90aWZ5ID0gZnVuY3Rpb24odHlwZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgIHJldHVybiBsb2dnZXIubG9nKFwiSGVhZHMgdXAhIFRoaXMgYWxlcnQgbmVlZHMgeW91ciBhdHRlbnRpb24sIGJ1dCBpdCdzIG5vdCBzdXBlciBpbXBvcnRhbnQuXCIpO1xuICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICByZXR1cm4gbG9nZ2VyLmxvZ1N1Y2Nlc3MoXCJXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLlwiKTtcbiAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dXYXJuaW5nKFwiV2FybmluZyEgQmVzdCBjaGVjayB5byBzZWxmLCB5b3UncmUgbm90IGxvb2tpbmcgdG9vIGdvb2QuXCIpO1xuICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgcmV0dXJuIGxvZ2dlci5sb2dFcnJvcihcIk9oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLlwiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdBbGVydERlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLmFsZXJ0cyA9IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICBtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLidcbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICBtc2c6ICdIZWFkcyB1cCEgVGhpcyBhbGVydCBuZWVkcyB5b3VyIGF0dGVudGlvbiwgYnV0IGl0IGlzIG5vdCBzdXBlciBpbXBvcnRhbnQuJ1xuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgIG1zZzogXCJXYXJuaW5nISBCZXN0IGNoZWNrIHlvIHNlbGYsIHlvdSdyZSBub3QgbG9va2luZyB0b28gZ29vZC5cIlxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgbXNnOiAnT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uJ1xuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmFkZEFsZXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbnVtLCB0eXBlO1xuICAgICAgbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgIHR5cGUgPSB2b2lkIDA7XG4gICAgICBzd2l0Y2ggKG51bSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgdHlwZSA9ICdpbmZvJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHR5cGUgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0eXBlID0gJ2luZm8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdHlwZSA9ICd3YXJuaW5nJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHR5cGUgPSAnZGFuZ2VyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAkc2NvcGUuYWxlcnRzLnB1c2goe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBtc2c6IFwiQW5vdGhlciBhbGVydCFcIlxuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLmNsb3NlQWxlcnQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuICRzY29wZS5hbGVydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdQcm9ncmVzc0RlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLm1heCA9IDIwMDtcbiAgICAkc2NvcGUucmFuZG9tID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdHlwZSwgdmFsdWU7XG4gICAgICB2YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTApO1xuICAgICAgdHlwZSA9IHZvaWQgMDtcbiAgICAgIGlmICh2YWx1ZSA8IDI1KSB7XG4gICAgICAgIHR5cGUgPSBcInN1Y2Nlc3NcIjtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPCA1MCkge1xuICAgICAgICB0eXBlID0gXCJpbmZvXCI7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgNzUpIHtcbiAgICAgICAgdHlwZSA9IFwid2FybmluZ1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IFwiZGFuZ2VyXCI7XG4gICAgICB9XG4gICAgICAkc2NvcGUuc2hvd1dhcm5pbmcgPSB0eXBlID09PSBcImRhbmdlclwiIHx8IHR5cGUgPT09IFwid2FybmluZ1wiO1xuICAgICAgJHNjb3BlLmR5bmFtaWMgPSB2YWx1ZTtcbiAgICAgICRzY29wZS50eXBlID0gdHlwZTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUucmFuZG9tKCk7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0FjY29yZGlvbkRlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLm9uZUF0QVRpbWUgPSB0cnVlO1xuICAgICRzY29wZS5ncm91cHMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgR3JvdXAgSGVhZGVyIC0gMVwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgR3JvdXAgQm9keSAtIDFcIlxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogXCJEeW5hbWljIEdyb3VwIEhlYWRlciAtIDJcIixcbiAgICAgICAgY29udGVudDogXCJEeW5hbWljIEdyb3VwIEJvZHkgLSAyXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBHcm91cCBIZWFkZXIgLSAzXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBHcm91cCBCb2R5IC0gM1wiXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuaXRlbXMgPSBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl07XG4gICAgJHNjb3BlLnN0YXR1cyA9IHtcbiAgICAgIGlzRmlyc3RPcGVuOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW4xOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW4yOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW4zOiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW40OiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW41OiB0cnVlLFxuICAgICAgaXNGaXJzdE9wZW42OiB0cnVlXG4gICAgfTtcbiAgICAkc2NvcGUuYWRkSXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5ld0l0ZW1ObztcbiAgICAgIG5ld0l0ZW1ObyA9ICRzY29wZS5pdGVtcy5sZW5ndGggKyAxO1xuICAgICAgJHNjb3BlLml0ZW1zLnB1c2goXCJJdGVtIFwiICsgbmV3SXRlbU5vKTtcbiAgICB9O1xuICB9XG5dKS5jb250cm9sbGVyKCdDb2xsYXBzZURlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgcmV0dXJuICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICB9XG5dKS5jb250cm9sbGVyKCdNb2RhbERlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgJyRtb2RhbCcsICckbG9nJywgZnVuY3Rpb24oJHNjb3BlLCAkbW9kYWwsICRsb2cpIHtcbiAgICAkc2NvcGUuaXRlbXMgPSBbXCJpdGVtMVwiLCBcIml0ZW0yXCIsIFwiaXRlbTNcIl07XG4gICAgJHNjb3BlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlO1xuICAgICAgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwibXlNb2RhbENvbnRlbnQuaHRtbFwiLFxuICAgICAgICBjb250cm9sbGVyOiAnTW9kYWxJbnN0YW5jZUN0cmwnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgaXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5pdGVtcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbigoZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbTtcbiAgICAgIH0pLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvZy5pbmZvKFwiTW9kYWwgZGlzbWlzc2VkIGF0OiBcIiArIG5ldyBEYXRlKCkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignTW9kYWxJbnN0YW5jZUN0cmwnLCBbXG4gICckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnLCAnaXRlbXMnLCBmdW5jdGlvbigkc2NvcGUsICRtb2RhbEluc3RhbmNlLCBpdGVtcykge1xuICAgICRzY29wZS5pdGVtcyA9IGl0ZW1zO1xuICAgICRzY29wZS5zZWxlY3RlZCA9IHtcbiAgICAgIGl0ZW06ICRzY29wZS5pdGVtc1swXVxuICAgIH07XG4gICAgJHNjb3BlLm9rID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5jbG9zZSgkc2NvcGUuc2VsZWN0ZWQuaXRlbSk7XG4gICAgfTtcbiAgICAkc2NvcGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAkbW9kYWxJbnN0YW5jZS5kaXNtaXNzKFwiY2FuY2VsXCIpO1xuICAgIH07XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ1BhZ2luYXRpb25EZW1vQ3RybCcsIFtcbiAgJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS50b3RhbEl0ZW1zID0gNjQ7XG4gICAgJHNjb3BlLmN1cnJlbnRQYWdlID0gNDtcbiAgICAkc2NvcGUubWF4U2l6ZSA9IDU7XG4gICAgJHNjb3BlLnNldFBhZ2UgPSBmdW5jdGlvbihwYWdlTm8pIHtcbiAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFBhZ2UgPSBwYWdlTm87XG4gICAgfTtcbiAgICAkc2NvcGUuYmlnVG90YWxJdGVtcyA9IDE3NTtcbiAgICByZXR1cm4gJHNjb3BlLmJpZ0N1cnJlbnRQYWdlID0gMTtcbiAgfVxuXSkuY29udHJvbGxlcignVGFic0RlbW9DdHJsJywgW1xuICAnJHNjb3BlJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICAgJHNjb3BlLnRhYnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkR5bmFtaWMgVGl0bGUgMVwiLFxuICAgICAgICBjb250ZW50OiBcIkR5bmFtaWMgY29udGVudCAxLiAgQ29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwsIHF1aWRlbSwgb2ZmaWNpaXMsIGV0IGV4IGxhdWRhbnRpdW0gc2VkIGN1cGlkaXRhdGUgdm9sdXB0YXR1bSBsaWJlcm8gbm9iaXMgc2l0IGlsbHVtIHZvbHVwdGF0ZXMgYmVhdGFlIGFiLiBBZCwgcmVwZWxsZW5kdXMgbm9uIHNlcXVpIGV0IGF0LlwiXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiBcIkRpc2FibGVkXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiRHluYW1pYyBjb250ZW50IDIuICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwsIHF1aWRlbSwgb2ZmaWNpaXMsIGV0IGV4IGxhdWRhbnRpdW0gc2VkIGN1cGlkaXRhdGUgdm9sdXB0YXR1bSBsaWJlcm8gbm9iaXMgc2l0IGlsbHVtIHZvbHVwdGF0ZXMgYmVhdGFlIGFiLiBBZCwgcmVwZWxsZW5kdXMgbm9uIHNlcXVpIGV0IGF0LlwiLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIF07XG4gICAgcmV0dXJuICRzY29wZS5uYXZUeXBlID0gXCJwaWxsc1wiO1xuICB9XG5dKS5jb250cm9sbGVyKCdUcmVlRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAkc2NvcGUubGlzdCA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gMVwiLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIkl0ZW0gMlwiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyMSxcbiAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4xXCIsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIxMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMS4xXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjEyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4xLjJcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAyMixcbiAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4yXCIsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIyMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJdGVtIDIuMi4xXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMjIyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gMi4yLjJcIixcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSAzXCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA0XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQxLFxuICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSA0LjFcIixcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA1XCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNixcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA2XCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSwge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgdGl0bGU6IFwiSXRlbSA3XCIsXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLnNlbGVjdGVkSXRlbSA9IHt9O1xuICAgICRzY29wZS5vcHRpb25zID0ge307XG4gICAgJHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgICBzY29wZS5yZW1vdmUoKTtcbiAgICB9O1xuICAgICRzY29wZS50b2dnbGUgPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgc2NvcGUudG9nZ2xlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gJHNjb3BlLm5ld1N1Ykl0ZW0gPSBmdW5jdGlvbihzY29wZSkge1xuICAgICAgdmFyIG5vZGVEYXRhO1xuICAgICAgbm9kZURhdGEgPSBzY29wZS4kbW9kZWxWYWx1ZTtcbiAgICAgIG5vZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICBpZDogbm9kZURhdGEuaWQgKiAxMCArIG5vZGVEYXRhLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgdGl0bGU6IG5vZGVEYXRhLnRpdGxlICsgXCIuXCIgKyAobm9kZURhdGEuaXRlbXMubGVuZ3RoICsgMSksXG4gICAgICAgIGl0ZW1zOiBbXVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignTWFwRGVtb0N0cmwnLCBbXG4gICckc2NvcGUnLCAnJGh0dHAnLCAnJGludGVydmFsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgJGludGVydmFsKSB7XG4gICAgdmFyIGksIG1hcmtlcnM7XG4gICAgbWFya2VycyA9IFtdO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgOCkge1xuICAgICAgbWFya2Vyc1tpXSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICB0aXRsZTogXCJNYXJrZXI6IFwiICsgaVxuICAgICAgfSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgICRzY29wZS5HZW5lcmF0ZU1hcE1hcmtlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkLCBsYXQsIGxuZywgbG9jLCBudW1NYXJrZXJzO1xuICAgICAgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAkc2NvcGUuZGF0ZSA9IGQudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgIG51bU1hcmtlcnMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDQ7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbnVtTWFya2Vycykge1xuICAgICAgICBsYXQgPSA0My42NjAwMDAwICsgKE1hdGgucmFuZG9tKCkgLyAxMDApO1xuICAgICAgICBsbmcgPSAtNzkuNDEwMzAwMCArIChNYXRoLnJhbmRvbSgpIC8gMTAwKTtcbiAgICAgICAgbG9jID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XG4gICAgICAgIG1hcmtlcnNbaV0uc2V0UG9zaXRpb24obG9jKTtcbiAgICAgICAgbWFya2Vyc1tpXS5zZXRNYXAoJHNjb3BlLm1hcCk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9O1xuICAgICRpbnRlcnZhbCgkc2NvcGUuR2VuZXJhdGVNYXBNYXJrZXJzLCAyMDAwKTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnVpLmRpcmVjdGl2ZXMnLCBbXSkuZGlyZWN0aXZlKCd1aVRpbWUnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSkge1xuICAgICAgICB2YXIgY2hlY2tUaW1lLCBzdGFydFRpbWU7XG4gICAgICAgIHN0YXJ0VGltZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBoLCBtLCBzLCB0LCB0aW1lLCB0b2RheTtcbiAgICAgICAgICB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgaCA9IHRvZGF5LmdldEhvdXJzKCk7XG4gICAgICAgICAgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcbiAgICAgICAgICBzID0gdG9kYXkuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgIG0gPSBjaGVja1RpbWUobSk7XG4gICAgICAgICAgcyA9IGNoZWNrVGltZShzKTtcbiAgICAgICAgICB0aW1lID0gaCArIFwiOlwiICsgbSArIFwiOlwiICsgcztcbiAgICAgICAgICBlbGUuaHRtbCh0aW1lKTtcbiAgICAgICAgICByZXR1cm4gdCA9IHNldFRpbWVvdXQoc3RhcnRUaW1lLCA1MDApO1xuICAgICAgICB9O1xuICAgICAgICBjaGVja1RpbWUgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgaWYgKGkgPCAxMCkge1xuICAgICAgICAgICAgaSA9IFwiMFwiICsgaTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzdGFydFRpbWUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3VpV2VhdGhlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgY29sb3IsIGljb24sIHNreWNvbnM7XG4gICAgICAgIGNvbG9yID0gYXR0cnMuY29sb3I7XG4gICAgICAgIGljb24gPSBTa3ljb25zW2F0dHJzLmljb25dO1xuICAgICAgICBza3ljb25zID0gbmV3IFNreWNvbnMoe1xuICAgICAgICAgIFwiY29sb3JcIjogY29sb3IsXG4gICAgICAgICAgXCJyZXNpemVDbGVhclwiOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBza3ljb25zLmFkZChlbGVbMF0sIGljb24pO1xuICAgICAgICByZXR1cm4gc2t5Y29ucy5wbGF5KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSk7XG4iLCIndXNlIHN0cmljdCc7XG5hbmd1bGFyLm1vZHVsZSgnYXBwLnVpLnNlcnZpY2VzJywgW10pLmZhY3RvcnkoJ2xvZ2dlcicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxvZ0l0O1xuICAgIHRvYXN0ci5vcHRpb25zID0ge1xuICAgICAgXCJjbG9zZUJ1dHRvblwiOiB0cnVlLFxuICAgICAgXCJwb3NpdGlvbkNsYXNzXCI6IFwidG9hc3QtYm90dG9tLXJpZ2h0XCIsXG4gICAgICBcInRpbWVPdXRcIjogXCIzMDAwXCJcbiAgICB9O1xuICAgIGxvZ0l0ID0gZnVuY3Rpb24obWVzc2FnZSwgdHlwZSkge1xuICAgICAgcmV0dXJuIHRvYXN0clt0eXBlXShtZXNzYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBsb2c6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgbG9nSXQobWVzc2FnZSwgJ2luZm8nKTtcbiAgICAgIH0sXG4gICAgICBsb2dXYXJuaW5nOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICd3YXJuaW5nJyk7XG4gICAgICB9LFxuICAgICAgbG9nU3VjY2VzczogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBsb2dJdChtZXNzYWdlLCAnc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGxvZ0Vycm9yOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIGxvZ0l0KG1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pLmRpcmVjdGl2ZSgnaW1nSG9sZGVyJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBIb2xkZXIucnVuKHtcbiAgICAgICAgICBpbWFnZXM6IGVsZVswXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2N1c3RvbUJhY2tncm91bmQnLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogXCJBXCIsXG4gICAgY29udHJvbGxlcjogW1xuICAgICAgJyRzY29wZScsICckZWxlbWVudCcsICckbG9jYXRpb24nLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkbG9jYXRpb24pIHtcbiAgICAgICAgdmFyIGFkZEJnLCBwYXRoO1xuICAgICAgICBwYXRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKCk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZEJnID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKCdib2R5LWhvbWUgYm9keS1zcGVjaWFsIGJvZHktdGFza3MgYm9keS1sb2NrJyk7XG4gICAgICAgICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50LmFkZENsYXNzKCdib2R5LWhvbWUnKTtcbiAgICAgICAgICAgIGNhc2UgJy80MDQnOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzLzUwMCc6XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvc2lnbmluJzpcbiAgICAgICAgICAgIGNhc2UgJy9wYWdlcy9zaWdudXAnOlxuICAgICAgICAgICAgY2FzZSAnL3BhZ2VzL2ZvcmdvdCc6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS1zcGVjaWFsJyk7XG4gICAgICAgICAgICBjYXNlICcvcGFnZXMvbG9jay1zY3JlZW4nOlxuICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQuYWRkQ2xhc3MoJ2JvZHktc3BlY2lhbCBib2R5LWxvY2snKTtcbiAgICAgICAgICAgIGNhc2UgJy90YXNrcyc6XG4gICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5hZGRDbGFzcygnYm9keS10YXNrcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYWRkQmcoJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgICAgIHJldHVybiAkc2NvcGUuJHdhdGNoKHBhdGgsIGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gb2xkVmFsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhZGRCZygkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgXVxuICB9O1xufSkuZGlyZWN0aXZlKCd1aUNvbG9yU3dpdGNoJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBlbGUuZmluZCgnLmNvbG9yLW9wdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyICR0aGlzLCBocmVmVXJsLCBzdHlsZTtcbiAgICAgICAgICAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgaHJlZlVybCA9IHZvaWQgMDtcbiAgICAgICAgICBzdHlsZSA9ICR0aGlzLmRhdGEoJ3N0eWxlJyk7XG4gICAgICAgICAgaWYgKHN0eWxlID09PSAnbG91bG91Jykge1xuICAgICAgICAgICAgaHJlZlVybCA9ICdzdHlsZXMvbWFpbi5jc3MnO1xuICAgICAgICAgICAgJCgnbGlua1tocmVmXj1cInN0eWxlcy9tYWluXCJdJykuYXR0cignaHJlZicsIGhyZWZVcmwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgIHN0eWxlID0gJy0nICsgc3R5bGU7XG4gICAgICAgICAgICBocmVmVXJsID0gJ3N0eWxlcy9tYWluJyArIHN0eWxlICsgJy5jc3MnO1xuICAgICAgICAgICAgJCgnbGlua1tocmVmXj1cInN0eWxlcy9tYWluXCJdJykuYXR0cignaHJlZicsIGhyZWZVcmwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ3RvZ2dsZU1pbk5hdicsIFtcbiAgJyRyb290U2NvcGUnLCBmdW5jdGlvbigkcm9vdFNjb3BlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgJGNvbnRlbnQsICRuYXYsICR3aW5kb3csIFRpbWVyLCBhcHAsIHVwZGF0ZUNsYXNzO1xuICAgICAgICBhcHAgPSAkKCcjYXBwJyk7XG4gICAgICAgICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgICAgICRuYXYgPSAkKCcjbmF2LWNvbnRhaW5lcicpO1xuICAgICAgICAkY29udGVudCA9ICQoJyNjb250ZW50Jyk7XG4gICAgICAgIGVsZS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGFwcC5oYXNDbGFzcygnbmF2LW1pbicpKSB7XG4gICAgICAgICAgICBhcHAucmVtb3ZlQ2xhc3MoJ25hdi1taW4nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXBwLmFkZENsYXNzKCduYXYtbWluJyk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21pbk5hdjplbmFibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBUaW1lciA9IHZvaWQgMDtcbiAgICAgICAgdXBkYXRlQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgd2lkdGg7XG4gICAgICAgICAgd2lkdGggPSAkd2luZG93LndpZHRoKCk7XG4gICAgICAgICAgaWYgKHdpZHRoIDwgNzY4KSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwLnJlbW92ZUNsYXNzKCduYXYtbWluJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gJHdpbmRvdy5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICAgIHJldHVybiB0ID0gc2V0VGltZW91dCh1cGRhdGVDbGFzcywgMzAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdjb2xsYXBzZU5hdicsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlLCBhdHRycykge1xuICAgICAgICB2YXIgJGEsICRhUmVzdCwgJGxpc3RzLCAkbGlzdHNSZXN0LCBhcHA7XG4gICAgICAgICRsaXN0cyA9IGVsZS5maW5kKCd1bCcpLnBhcmVudCgnbGknKTtcbiAgICAgICAgJGxpc3RzLmFwcGVuZCgnPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1yaWdodCBpY29uLWhhcy11bFwiPjwvaT4nKTtcbiAgICAgICAgJGEgPSAkbGlzdHMuY2hpbGRyZW4oJ2EnKTtcbiAgICAgICAgJGxpc3RzUmVzdCA9IGVsZS5jaGlsZHJlbignbGknKS5ub3QoJGxpc3RzKTtcbiAgICAgICAgJGFSZXN0ID0gJGxpc3RzUmVzdC5jaGlsZHJlbignYScpO1xuICAgICAgICBhcHAgPSAkKCcjYXBwJyk7XG4gICAgICAgICRhLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgdmFyICRwYXJlbnQsICR0aGlzO1xuICAgICAgICAgIGlmIChhcHAuaGFzQ2xhc3MoJ25hdi1taW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgJHBhcmVudCA9ICR0aGlzLnBhcmVudCgnbGknKTtcbiAgICAgICAgICAkbGlzdHMubm90KCRwYXJlbnQpLnJlbW92ZUNsYXNzKCdvcGVuJykuZmluZCgndWwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgJHBhcmVudC50b2dnbGVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc3RvcCgpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkYVJlc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gJGxpc3RzLnJlbW92ZUNsYXNzKCdvcGVuJykuZmluZCgndWwnKS5zbGlkZVVwKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2NvcGUuJG9uKCdtaW5OYXY6ZW5hYmxlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuICRsaXN0cy5yZW1vdmVDbGFzcygnb3BlbicpLmZpbmQoJ3VsJykuc2xpZGVVcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5dKS5kaXJlY3RpdmUoJ2hpZ2hsaWdodEFjdGl2ZScsIFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiBcIkFcIixcbiAgICAgIGNvbnRyb2xsZXI6IFtcbiAgICAgICAgJyRzY29wZScsICckZWxlbWVudCcsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24oJHNjb3BlLCAkZWxlbWVudCwgJGF0dHJzLCAkbG9jYXRpb24pIHtcbiAgICAgICAgICB2YXIgaGlnaGxpZ2h0QWN0aXZlLCBsaW5rcywgcGF0aDtcbiAgICAgICAgICBsaW5rcyA9ICRlbGVtZW50LmZpbmQoJ2EnKTtcbiAgICAgICAgICBwYXRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJGxvY2F0aW9uLnBhdGgoKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGhpZ2hsaWdodEFjdGl2ZSA9IGZ1bmN0aW9uKGxpbmtzLCBwYXRoKSB7XG4gICAgICAgICAgICBwYXRoID0gJyMnICsgcGF0aDtcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmZvckVhY2gobGlua3MsIGZ1bmN0aW9uKGxpbmspIHtcbiAgICAgICAgICAgICAgdmFyICRsaSwgJGxpbmssIGhyZWY7XG4gICAgICAgICAgICAgICRsaW5rID0gYW5ndWxhci5lbGVtZW50KGxpbmspO1xuICAgICAgICAgICAgICAkbGkgPSAkbGluay5wYXJlbnQoJ2xpJyk7XG4gICAgICAgICAgICAgIGhyZWYgPSAkbGluay5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgIGlmICgkbGkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJGxpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKGhyZWYpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRsaS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgaGlnaGxpZ2h0QWN0aXZlKGxpbmtzLCAkbG9jYXRpb24ucGF0aCgpKTtcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLiR3YXRjaChwYXRoLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gb2xkVmFsKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoaWdobGlnaHRBY3RpdmUobGlua3MsICRsb2NhdGlvbi5wYXRoKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCd0b2dnbGVPZmZDYW52YXMnLCBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZSwgYXR0cnMpIHtcbiAgICAgICAgcmV0dXJuIGVsZS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJCgnI2FwcCcpLnRvZ2dsZUNsYXNzKCdvbi1jYW52YXMnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXSkuZGlyZWN0aXZlKCdzbGltU2Nyb2xsJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHJldHVybiBlbGUuc2xpbVNjcm9sbCh7XG4gICAgICAgICAgaGVpZ2h0OiBhdHRycy5zY3JvbGxIZWlnaHQgfHwgJzEwMCUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pLmRpcmVjdGl2ZSgnZ29CYWNrJywgW1xuICBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgY29udHJvbGxlcjogW1xuICAgICAgICAnJHNjb3BlJywgJyRlbGVtZW50JywgJyR3aW5kb3cnLCBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkd2luZG93KSB7XG4gICAgICAgICAgcmV0dXJuICRlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICR3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG5dKTtcbiIsIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXIubW9kdWxlKCdhcHAubG9jYWxpemF0aW9uJywgW10pLmZhY3RvcnkoJ2xvY2FsaXplJywgW1xuICAnJGh0dHAnLCAnJHJvb3RTY29wZScsICckd2luZG93JywgZnVuY3Rpb24oJGh0dHAsICRyb290U2NvcGUsICR3aW5kb3cpIHtcbiAgICB2YXIgbG9jYWxpemU7XG4gICAgbG9jYWxpemUgPSB7XG4gICAgICBsYW5ndWFnZTogJycsXG4gICAgICB1cmw6IHZvaWQgMCxcbiAgICAgIHJlc291cmNlRmlsZUxvYWRlZDogZmFsc2UsXG4gICAgICBzdWNjZXNzQ2FsbGJhY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgbG9jYWxpemUuZGljdGlvbmFyeSA9IGRhdGE7XG4gICAgICAgIGxvY2FsaXplLnJlc291cmNlRmlsZUxvYWRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xvY2FsaXplUmVzb3VyY2VzVXBkYXRlZCcpO1xuICAgICAgfSxcbiAgICAgIHNldExhbmd1YWdlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBsb2NhbGl6ZS5sYW5ndWFnZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgICByZXR1cm4gbG9jYWxpemUuaW5pdExvY2FsaXplZFJlc291cmNlcygpO1xuICAgICAgfSxcbiAgICAgIHNldFVybDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgbG9jYWxpemUudXJsID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5pbml0TG9jYWxpemVkUmVzb3VyY2VzKCk7XG4gICAgICB9LFxuICAgICAgYnVpbGRVcmw6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIWxvY2FsaXplLmxhbmd1YWdlKSB7XG4gICAgICAgICAgbG9jYWxpemUubGFuZ3VhZ2UgPSAoJHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8ICR3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGxvY2FsaXplLmxhbmd1YWdlID0gbG9jYWxpemUubGFuZ3VhZ2Uuc3BsaXQoXCItXCIpWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnaTE4bi9yZXNvdXJjZXMtbG9jYWxlXycgKyBsb2NhbGl6ZS5sYW5ndWFnZSArICcuanMnO1xuICAgICAgfSxcbiAgICAgIGluaXRMb2NhbGl6ZWRSZXNvdXJjZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXJsO1xuICAgICAgICB1cmwgPSBsb2NhbGl6ZS51cmwgfHwgbG9jYWxpemUuYnVpbGRVcmwoKTtcbiAgICAgICAgcmV0dXJuICRodHRwKHtcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgY2FjaGU6IGZhbHNlXG4gICAgICAgIH0pLnN1Y2Nlc3MobG9jYWxpemUuc3VjY2Vzc0NhbGxiYWNrKS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsb2NhbGl6ZVJlc291cmNlc1VwZGF0ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0TG9jYWxpemVkU3RyaW5nOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0LCB2YWx1ZUxvd2VyQ2FzZTtcbiAgICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgICBpZiAobG9jYWxpemUuZGljdGlvbmFyeSAmJiB2YWx1ZSkge1xuICAgICAgICAgIHZhbHVlTG93ZXJDYXNlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAobG9jYWxpemUuZGljdGlvbmFyeVt2YWx1ZUxvd2VyQ2FzZV0gPT09ICcnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbG9jYWxpemUuZGljdGlvbmFyeVt2YWx1ZUxvd2VyQ2FzZV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbG9jYWxpemU7XG4gIH1cbl0pLmRpcmVjdGl2ZSgnaTE4bicsIFtcbiAgJ2xvY2FsaXplJywgZnVuY3Rpb24obG9jYWxpemUpIHtcbiAgICB2YXIgaTE4bkRpcmVjdGl2ZTtcbiAgICBpMThuRGlyZWN0aXZlID0ge1xuICAgICAgcmVzdHJpY3Q6IFwiRUFcIixcbiAgICAgIHVwZGF0ZVRleHQ6IGZ1bmN0aW9uKGVsZSwgaW5wdXQsIHBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGlucHV0ID09PSAnaTE4bi1wbGFjZWhvbGRlcicpIHtcbiAgICAgICAgICByZXN1bHQgPSBsb2NhbGl6ZS5nZXRMb2NhbGl6ZWRTdHJpbmcocGxhY2Vob2xkZXIpO1xuICAgICAgICAgIHJldHVybiBlbGUuYXR0cigncGxhY2Vob2xkZXInLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmVzdWx0ID0gbG9jYWxpemUuZ2V0TG9jYWxpemVkU3RyaW5nKGlucHV0KTtcbiAgICAgICAgICByZXR1cm4gZWxlLnRleHQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGUsIGF0dHJzKSB7XG4gICAgICAgIHNjb3BlLiRvbignbG9jYWxpemVSZXNvdXJjZXNVcGRhdGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGkxOG5EaXJlY3RpdmUudXBkYXRlVGV4dChlbGUsIGF0dHJzLmkxOG4sIGF0dHJzLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhdHRycy4kb2JzZXJ2ZSgnaTE4bicsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGkxOG5EaXJlY3RpdmUudXBkYXRlVGV4dChlbGUsIHZhbHVlLCBhdHRycy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGkxOG5EaXJlY3RpdmU7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0xhbmdDdHJsJywgW1xuICAnJHNjb3BlJywgJ2xvY2FsaXplJywgZnVuY3Rpb24oJHNjb3BlLCBsb2NhbGl6ZSkge1xuICAgICRzY29wZS5sYW5nID0gJ0VuZ2xpc2gnO1xuICAgICRzY29wZS5zZXRMYW5nID0gZnVuY3Rpb24obGFuZykge1xuICAgICAgc3dpdGNoIChsYW5nKSB7XG4gICAgICAgIGNhc2UgJ0VuZ2xpc2gnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdFTi1VUycpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFc3Bhw7FvbCc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0VTLUVTJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ+aXpeacrOiqnic6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0pBLUpQJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ+S4reaWhyc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ1pILVRXJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0RldXRzY2gnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdERS1ERScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmcmFuw6dhaXMnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdGUi1GUicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJdGFsaWFubyc6XG4gICAgICAgICAgbG9jYWxpemUuc2V0TGFuZ3VhZ2UoJ0lULUlUJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BvcnR1Z2FsJzpcbiAgICAgICAgICBsb2NhbGl6ZS5zZXRMYW5ndWFnZSgnUFQtQlInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAn0KDRg9GB0YHQutC40Lkg0Y/Qt9GL0LonOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdSVS1SVScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICftlZzqta3slrQnOlxuICAgICAgICAgIGxvY2FsaXplLnNldExhbmd1YWdlKCdLTy1LUicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICRzY29wZS5sYW5nID0gbGFuZztcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUuZ2V0RmxhZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhbmc7XG4gICAgICBsYW5nID0gJHNjb3BlLmxhbmc7XG4gICAgICBzd2l0Y2ggKGxhbmcpIHtcbiAgICAgICAgY2FzZSAnRW5nbGlzaCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1hbWVyaWNhbic7XG4gICAgICAgIGNhc2UgJ0VzcGHDsW9sJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLXNwYWluJztcbiAgICAgICAgY2FzZSAn5pel5pys6KqeJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWphcGFuJztcbiAgICAgICAgY2FzZSAn5Lit5paHJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWNoaW5hJztcbiAgICAgICAgY2FzZSAnRGV1dHNjaCc6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1nZXJtYW55JztcbiAgICAgICAgY2FzZSAnZnJhbsOnYWlzJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWZyYW5jZSc7XG4gICAgICAgIGNhc2UgJ0l0YWxpYW5vJzpcbiAgICAgICAgICByZXR1cm4gJ2ZsYWdzLWl0YWx5JztcbiAgICAgICAgY2FzZSAnUG9ydHVnYWwnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3MtcG9ydHVnYWwnO1xuICAgICAgICBjYXNlICfQoNGD0YHRgdC60LjQuSDRj9C30YvQuic6XG4gICAgICAgICAgcmV0dXJuICdmbGFncy1ydXNzaWEnO1xuICAgICAgICBjYXNlICftlZzqta3slrQnOlxuICAgICAgICAgIHJldHVybiAnZmxhZ3Mta29yZWEnO1xuICAgICAgfVxuICAgIH07XG4gIH1cbl0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhci5tb2R1bGUoJ2FwcC5jb250cm9sbGVycycsIFtdKS5jb250cm9sbGVyKCdBcHBDdHJsJywgW1xuICAnJHNjb3BlJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uKCRzY29wZSwgJGxvY2F0aW9uKSB7XG4gICAgJHNjb3BlLmlzU3BlY2lmaWNQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGF0aDtcbiAgICAgIHBhdGggPSAkbG9jYXRpb24ucGF0aCgpO1xuICAgICAgcmV0dXJuIF8uY29udGFpbnMoWycvNDA0JywgJy9wYWdlcy81MDAnLCAnL3BhZ2VzL2xvZ2luJywgJy9wYWdlcy9zaWduaW4nLCAnL3BhZ2VzL3NpZ25pbjEnLCAnL3BhZ2VzL3NpZ25pbjInLCAnL3BhZ2VzL3NpZ251cCcsICcvcGFnZXMvc2lnbnVwMScsICcvcGFnZXMvc2lnbnVwMicsICcvcGFnZXMvZm9yZ290JywgJy9wYWdlcy9sb2NrLXNjcmVlbiddLCBwYXRoKTtcbiAgICB9O1xuICAgIHJldHVybiAkc2NvcGUubWFpbiA9IHtcbiAgICAgIGJyYW5kOiAnSW50cmFuZXQnLFxuICAgICAgbmFtZTogJ0FuZHJlcyBEYXZpZCBKaW1lbmV6JyxcbiAgICAgIGxvZ286ICdpbWcvbG9nby5wbmcnXG4gICAgfTtcbiAgfVxuXSkuY29udHJvbGxlcignTmF2Q3RybCcsIFtcbiAgJyRzY29wZScsICd0YXNrU3RvcmFnZScsICdmaWx0ZXJGaWx0ZXInLCBmdW5jdGlvbigkc2NvcGUsIHRhc2tTdG9yYWdlLCBmaWx0ZXJGaWx0ZXIpIHtcbiAgICB2YXIgdGFza3M7XG4gICAgdGFza3MgPSAkc2NvcGUudGFza3MgPSB0YXNrU3RvcmFnZS5nZXQoKTtcbiAgICAkc2NvcGUudGFza1JlbWFpbmluZ0NvdW50ID0gZmlsdGVyRmlsdGVyKHRhc2tzLCB7XG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfSkubGVuZ3RoO1xuICAgIHJldHVybiAkc2NvcGUuJG9uKCd0YXNrUmVtYWluaW5nOmNoYW5nZWQnLCBmdW5jdGlvbihldmVudCwgY291bnQpIHtcbiAgICAgIHJldHVybiAkc2NvcGUudGFza1JlbWFpbmluZ0NvdW50ID0gY291bnQ7XG4gICAgfSk7XG4gIH1cbl0pLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEN0cmwnLCBbJyRzY29wZScsIGZ1bmN0aW9uKCRzY29wZSkge31dKS5jb250cm9sbGVyKCdNb2RhbEFnZW5kYUN0cmwnLCBbXG4gICckc2NvcGUnLCAnJG1vZGFsJywgJyRsb2cnLCBmdW5jdGlvbigkc2NvcGUsICRtb2RhbCwgJGxvZykge1xuICAgICRzY29wZS5pdGVtcyA9IFtcIml0ZW0xXCIsIFwiaXRlbTJcIiwgXCJpdGVtM1wiXTtcbiAgICAkc2NvcGUuY29udGFjdHMgPSBbXTtcbiAgICAkc2NvcGUuc2F2ZUNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpO1xuICAgICAgaWYgKCRzY29wZS5uZXdjb250YWN0LmlkID09PSBudWxsKSB7XG4gICAgICAgICRzY29wZS5uZXdjb250YWN0LmlkID0gdWlkKys7XG4gICAgICAgICRzY29wZS5jb250YWN0cy5wdXNoKCRzY29wZS5uZXdjb250YWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoaSBpbiAkc2NvcGUuY29udGFjdHMpIHtcbiAgICAgICAgICBpZiAoJHNjb3BlLmNvbnRhY3RzW2ldLmlkID09PSAkc2NvcGUubmV3Y29udGFjdC5pZCkge1xuICAgICAgICAgICAgJHNjb3BlLmNvbnRhY3RzW2ldID0gJHNjb3BlLm5ld2NvbnRhY3Q7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc2NvcGUubmV3Y29udGFjdCA9IHt9O1xuICAgIH07XG4gICAgJHNjb3BlW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yIChpIGluICRzY29wZS5jb250YWN0cykge1xuICAgICAgICBpZiAoJHNjb3BlLmNvbnRhY3RzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICRzY29wZS5jb250YWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgJHNjb3BlLm5ld2NvbnRhY3QgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLmVkaXQgPSBmdW5jdGlvbihpZCkge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IgKGkgaW4gJHNjb3BlLmNvbnRhY3RzKSB7XG4gICAgICAgIGlmICgkc2NvcGUuY29udGFjdHNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgICAgJHNjb3BlLm5ld2NvbnRhY3QgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmNvbnRhY3RzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgJHNjb3BlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtb2RhbEluc3RhbmNlO1xuICAgICAgbW9kYWxJbnN0YW5jZSA9ICRtb2RhbC5vcGVuKHtcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwibXlNb2RhbENvbnRlbnQuaHRtbFwiLFxuICAgICAgICBjb250cm9sbGVyOiAnTW9kYWxJbnN0YW5jZUN0cmwnLFxuICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgaXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5pdGVtcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbW9kYWxJbnN0YW5jZS5yZXN1bHQudGhlbigoZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICRzY29wZS5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbTtcbiAgICAgIH0pLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJGxvZy5pbmZvKFwiTW9kYWwgZGlzbWlzc2VkIGF0OiBcIiArIG5ldyBEYXRlKCkpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=