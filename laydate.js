﻿/**

 @Name : layDate v1.1 日期控件
 @Author: 贤心
 @Date: 2014-06-25
 @QQ群：176047195
 @Site：http://sentsin.com/layui/laydate

 */!function(win){var config={path:"",defSkin:"default",format:"YYYY-MM-DD",min:"1900-01-01 00:00:00",max:"2099-12-31 23:59:59",isv:false,init:true};var Dates={},doc=document,creat="createElement",byid="getElementById",tags="getElementsByTagName";var as=["laydate_box","laydate_void","laydate_click","LayDateSkin","skins/","/laydate.css"];win.laydate=function(options){options=options||{};try{as.event=win.event?win.event:laydate.caller.arguments[0]}catch(e){}Dates.run(options);return laydate};laydate.v="1.1.1";Dates.getPath=function(){var js=document.scripts,jsPath=js[js.length-1].src;return config.path?config.path:jsPath.substring(0,jsPath.lastIndexOf("/")+1)}();Dates.use=function(lib,id){var link=doc[creat]("link");link.type="text/css";link.rel="stylesheet";link.href=Dates.getPath+lib+as[5];id&&(link.id=id);doc[tags]("head")[0].appendChild(link);link=null};Dates.trim=function(str){str=str||"";return str.replace(/^\s|\s$/g,"").replace(/\s+/g," ")};Dates.digit=function(num){return num<10?"0"+(num|0):num};Dates.stopmp=function(e){e=e||win.event;e.stopPropagation?e.stopPropagation():e.cancelBubble=true;return this};Dates.each=function(arr,fn){var i=0,len=arr.length;for(;i<len;i++)if(fn(i,arr[i])===false)break};Dates.hasClass=function(elem,cls){elem=elem||{};return(new RegExp("\\b"+cls+"\\b")).test(elem.className)};Dates.addClass=function(elem,cls){elem=elem||{};Dates.hasClass(elem,cls)||(elem.className+=" "+cls);elem.className=Dates.trim(elem.className);return this};Dates.removeClass=function(elem,cls){elem=elem||{};if(Dates.hasClass(elem,cls)){var reg=new RegExp("\\b"+cls+"\\b");elem.className=elem.className.replace(reg,"")}return this};Dates.removeCssAttr=function(elem,attr){var s=elem.style;if(s.removeProperty)s.removeProperty(attr);else s.removeAttribute(attr)};Dates.shde=function(elem,type){elem.style.display=type?"none":"block"};Dates.enabled=function(elem,status){if(status){Dates.removeCssAttr(elem,"disabled");Dates.removeCssAttr(elem,"backgroundColor")}else{elem.disabled=true;elem.style.backgroundColor="#808080"}};Dates.query=function(node){if(node&&node.nodeType===1){if(node.tagName.toLowerCase()!=="input")throw new Error("\u9009\u62e9\u5668elem\u9519\u8bef");return node}var node=Dates.trim(node).split(" "),elemId=doc[byid](node[0].substr(1)),arr;if(!elemId)return;else if(!node[1])return elemId;else if(/^\./.test(node[1])){var find,child=node[1].substr(1),exp=new RegExp("\\b"+child+"\\b");arr=[];find=doc.getElementsByClassName?elemId.getElementsByClassName(child):elemId[tags]("*");Dates.each(find,function(ii,that){exp.test(that.className)&&arr.push(that)});return arr[0]?arr:""}else{arr=elemId[tags](node[1]);return arr[0]?elemId[tags](node[1]):""}};Dates.on=function(elem,even,fn){elem.attachEvent?elem.attachEvent("on"+even,function(){fn.call(elem,win.even)}):elem.addEventListener(even,fn,false);return Dates};Dates.stopMosup=function(evt,elem){if(evt!=="mouseup")Dates.on(elem,"mouseup",function(ev){Dates.stopmp(ev)})};Dates.run=function(options){var S=Dates.query,elem,devt,even=as.event,target;try{target=even.target||even.srcElement||{}}catch(e){target={}}elem=options.elem?S(options.elem):target;as.elemv=/textarea|input/.test(elem.tagName.toLocaleLowerCase())?"value":"innerHTML";if(config.init)elem[as.elemv]=laydate.now(null,options.format||config.format);if(even&&target.tagName){if(!elem||elem===Dates.elem)return;Dates.stopMosup(even.type,elem);Dates.stopmp(even);Dates.view(elem,options);Dates.reshow()}else{devt=options.event||"click";Dates.each((elem.length|0)>0?elem:[elem],function(ii,that){Dates.stopMosup(devt,that);Dates.on(that,devt,function(ev){Dates.stopmp(ev);if(that!==Dates.elem){Dates.view(that,options);Dates.reshow()}})})}};Dates.scroll=function(type){type=type?"scrollLeft":"scrollTop";return doc.body[type]|doc.documentElement[type]};Dates.winarea=function(type){return document.documentElement[type?"clientWidth":"clientHeight"]};Dates.isleap=function(year){return year%4===0&&year%100!==0||year%400===0};Dates.checkVoid=function(YY,MM,DD){var back=[];YY=YY|0;MM=MM|0;DD=DD|0;if(YY<Dates.mins[0])back=["y"];else if(YY>Dates.maxs[0])back=["y",1];else if(YY>=Dates.mins[0]&&YY<=Dates.maxs[0]){if(YY==Dates.mins[0])if(MM<Dates.mins[1])back=["m"];else if(MM==Dates.mins[1])if(DD<Dates.mins[2])back=["d"];if(YY==Dates.maxs[0])if(MM>Dates.maxs[1])back=["m",1];else if(MM==Dates.maxs[1])if(DD>Dates.maxs[2])back=["d",1]}return back};Dates.timeVoid=function(times,index){if(Dates.ymd[1]+1==Dates.mins[1]&&Dates.ymd[2]==Dates.mins[2])if(index===0&&times<Dates.mins[3])return 1;else if(index===1&&times<Dates.mins[4])return 1;else if(index===2&&times<Dates.mins[5])return 1;if(Dates.ymd[1]+1==Dates.maxs[1]&&Dates.ymd[2]==Dates.maxs[2])if(index===0&&times>Dates.maxs[3])return 1;else if(index===1&&times>Dates.maxs[4])return 1;else if(index===2&&times>Dates.maxs[5])return 1;if(times>(index?59:23))return 1};Dates.check=function(){var reg=Dates.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g,"\\d+\\").replace(/\\$/g,"");var exp=new RegExp(reg),value=Dates.elem[as.elemv];var arr=value.match(/\d+/g)||[],isvoid=Dates.checkVoid(arr[0],arr[1],arr[2]);if(value.replace(/\s/g,"")!=="")if(!exp.test(value)){Dates.elem[as.elemv]="";Dates.msg("\u65e5\u671f\u4e0d\u7b26\u5408\u683c\u5f0f\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u3002");return 1}else if(isvoid[0]){Dates.elem[as.elemv]="";Dates.msg("\u65e5\u671f\u4e0d\u5728\u6709\u6548\u671f\u5185\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9\u3002");return 1}else{isvoid.value=Dates.elem[as.elemv].match(exp).join();arr=isvoid.value.match(/\d+/g);if(!arr[1])arr[1]=0;if(arr[1]<1){arr[1]=1;isvoid.auto=1}else if(arr[1]>12){arr[1]=12;isvoid.auto=1}else if(arr[1].length<2)isvoid.auto=1;if(!arr[2])arr[2]=0;if(arr[2]<1){arr[2]=1;isvoid.auto=1}else if(arr[2]>Dates.months[(arr[1]|0)-1]){arr[2]=31;isvoid.auto=1}else if(arr[2].length<2)isvoid.auto=1;if(arr.length>3){if(Dates.timeVoid(arr[3],0))isvoid.auto=1;if(Dates.timeVoid(arr[4],1))isvoid.auto=1;if(Dates.timeVoid(arr[5],2))isvoid.auto=1}if(isvoid.auto)Dates.creation([arr[0],arr[1]|0,arr[2]|0],1);else if(isvoid.value!==Dates.elem[as.elemv])Dates.elem[as.elemv]=isvoid.value}};Dates.months=[31,null,31,30,31,30,31,31,30,31,30,31];Dates.viewDate=function(Y,M,D){var S=Dates.query,log={},De=new Date;Y<(Dates.mins[0]|0)&&(Y=Dates.mins[0]|0);Y>(Dates.maxs[0]|0)&&(Y=Dates.maxs[0]|0);De.setFullYear(Y,M,D);log.ymd=[De.getFullYear(),De.getMonth(),De.getDate()];Dates.months[1]=Dates.isleap(log.ymd[0])?29:28;De.setFullYear(log.ymd[0],log.ymd[1],1);log.FDay=De.getDay();log.PDay=Dates.months[M===0?11:M-1]-log.FDay+1;log.NDay=1;Dates.each(as.tds,function(i,elem){var YY=log.ymd[0],MM=log.ymd[1]+1,DD;elem.className="";if(i<log.FDay){elem.innerHTML=DD=i+log.PDay;Dates.addClass(elem,"laydate_nothis");MM===1&&(YY-=1);MM=MM===1?12:MM-1}else if(i>=log.FDay&&i<log.FDay+Dates.months[log.ymd[1]]){elem.innerHTML=DD=i-log.FDay+1;if(i-log.FDay+1===log.ymd[2]){Dates.addClass(elem,as[2]);log.thisDay=elem}}else{elem.innerHTML=DD=log.NDay++;Dates.addClass(elem,"laydate_nothis");MM===12&&(YY+=1);MM=MM===12?1:MM+1}if(Dates.checkVoid(YY,MM,DD)[0])Dates.addClass(elem,as[1]);Dates.options.festival&&Dates.festival(elem,MM+"."+DD);elem.setAttribute("y",YY);elem.setAttribute("m",MM);elem.setAttribute("d",DD);YY=MM=DD=null});Dates.valid=!Dates.hasClass(log.thisDay,as[1]);Dates.ymd=log.ymd;as.year.value=Dates.ymd[0]+"\u5e74";as.month.value=Dates.digit(Dates.ymd[1]+1)+"\u6708";Dates.each(as.mms,function(i,elem){var getCheck=Dates.checkVoid(Dates.ymd[0],(elem.getAttribute("m")|0)+1);if(getCheck[0]==="y"||getCheck[0]==="m")Dates.addClass(elem,as[1]);else Dates.removeClass(elem,as[1]);Dates.removeClass(elem,as[2]);getCheck=null});Dates.addClass(as.mms[Dates.ymd[1]],as[2]);log.times=[Dates.inymd[3]|0||0,Dates.inymd[4]|0||0,Dates.inymd[5]|0||0];Dates.each(new Array(3),function(i){Dates.hmsin[i].value=Dates.digit(Dates.timeVoid(log.times[i],i)?Dates.mins[i+3]|0:log.times[i]|0)});Dates[Dates.valid?"removeClass":"addClass"](as.ok,as[1])};Dates.festival=function(td,md){var str;switch(md){case "1.1":str="\u5143\u65e6";break;case "3.8":str="\u5987\u5973";break;case "4.5":str="\u6e05\u660e";break;case "5.1":str="\u52b3\u52a8";break;case "6.1":str="\u513f\u7ae5";break;case "9.10":str="\u6559\u5e08";break;case "10.1":str="\u56fd\u5e86";break}str&&(td.innerHTML=str);str=null};Dates.viewYears=function(YY){var S=Dates.query,str="";Dates.each(new Array(14),function(i){if(i===7)str+="\x3cli "+(parseInt(as.year.value)===YY?'class\x3d"'+as[2]+'"':"")+' y\x3d"'+YY+'"\x3e'+YY+"\u5e74\x3c/li\x3e";else str+='\x3cli y\x3d"'+(YY-7+i)+'"\x3e'+(YY-7+i)+"\u5e74\x3c/li\x3e"});S("#laydate_ys").innerHTML=str;Dates.each(S("#laydate_ys li"),function(i,elem){if(Dates.checkVoid(elem.getAttribute("y"))[0]==="y")Dates.addClass(elem,as[1]);else Dates.on(elem,"click",function(ev){Dates.stopmp(ev).reshow();Dates.viewDate(this.getAttribute("y")|0,Dates.ymd[1],Dates.ymd[2])})})};Dates.initDate=function(){var S=Dates.query,log={},De=new Date;var ymd=Dates.elem[as.elemv].match(/\d+/g)||[];ymd=[ymd[0]||De.getFullYear(),ymd[1]||De.getMonth()+1,ymd[2]||De.getDate(),ymd[3]||De.getHours(),ymd[4]||De.getMinutes(),ymd[5]||De.getSeconds()];if(ymd.length<3){ymd=Dates.options.start.match(/\d+/g)||[];if(ymd.length<3)ymd=[De.getFullYear(),De.getMonth()+1,De.getDate()]}Dates.inymd=ymd;Dates.viewDate(ymd[0],ymd[1]-1,ymd[2])};Dates.iswrite=function(){var S=Dates.query,log={time:S("#laydate_hms")};Dates.shde(log.time,!Dates.options.istime);Dates.shde(as.oclear,!("isclear"in Dates.options?Dates.options.isclear:1));Dates.shde(as.otoday,!("istoday"in Dates.options?Dates.options.istoday:1));Dates.shde(as.ok,!("issure"in Dates.options?Dates.options.issure:1))};Dates.timeable=function(){var S=Dates.query,log={h:S("#laydate_hms input")[0],m:S("#laydate_hms input")[1],s:S("#laydate_hms input")[2]};var timerange=Dates.options.timerange||"hms";if(timerange.indexOf("h")>=0)Dates.enabled(log.h,true);else Dates.enabled(log.h,false);if(timerange.indexOf("m")>=0)Dates.enabled(log.m,true);else Dates.enabled(log.m,false);if(timerange.indexOf("s")>=0)Dates.enabled(log.s,true);else Dates.enabled(log.s,false)};Dates.orien=function(obj,pos){var tops,rect=Dates.elem.getBoundingClientRect();obj.style.left=rect.left+(pos?0:Dates.scroll(1))+"px";if(rect.bottom+obj.offsetHeight/1.5<=Dates.winarea())tops=rect.bottom-1;else tops=rect.top>obj.offsetHeight/1.5?rect.top-obj.offsetHeight+1:Dates.winarea()-obj.offsetHeight;obj.style.top=Math.max(tops+(pos?0:Dates.scroll()),1)+"px"};Dates.follow=function(obj){if(Dates.options.fixed){obj.style.position="fixed";Dates.orien(obj,1)}else{obj.style.position="absolute";Dates.orien(obj)}};Dates.viewtb=function(){var tr,view=[],weeks=["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"];var log={},table=doc[creat]("table"),thead=doc[creat]("thead");thead.appendChild(doc[creat]("tr"));log.creath=function(i){var th=doc[creat]("th");th.innerHTML=weeks[i];thead[tags]("tr")[0].appendChild(th);th=null};Dates.each(new Array(6),function(i){view.push([]);tr=table.insertRow(0);Dates.each(new Array(7),function(j){view[i][j]=0;i===0&&log.creath(j);tr.insertCell(j)})});table.insertBefore(thead,table.children[0]);table.id=table.className="laydate_table";tr=view=null;return table.outerHTML.toLowerCase()}();Dates.view=function(elem,options){var S=Dates.query,div,log={};options=options||elem;Dates.elem=elem;Dates.options=options;Dates.options.format||(Dates.options.format=config.format);Dates.options.start=Dates.options.start||"";Dates.mm=log.mm=[Dates.options.min||config.min,Dates.options.max||config.max];Dates.mins=log.mm[0].match(/\d+/g);Dates.maxs=log.mm[1].match(/\d+/g);if(!Dates.box){div=doc[creat]("div");div.id=as[0];div.className=as[0];div.style.cssText="position: absolute;";div.setAttribute("name","laydate-v"+laydate.v);div.innerHTML=log.html='\x3cdiv class\x3d"laydate_top"\x3e'+'\x3cdiv class\x3d"laydate_ym laydate_y" id\x3d"laydate_YY"\x3e'+'\x3ca class\x3d"laydate_choose laydate_chprev laydate_tab"\x3e\x3ccite\x3e\x3c/cite\x3e\x3c/a\x3e'+'\x3cinput id\x3d"laydate_y" readonly\x3e\x3clabel\x3e\x3c/label\x3e'+'\x3ca class\x3d"laydate_choose laydate_chnext laydate_tab"\x3e\x3ccite\x3e\x3c/cite\x3e\x3c/a\x3e'+'\x3cdiv class\x3d"laydate_yms"\x3e'+'\x3ca class\x3d"laydate_tab laydate_chtop"\x3e\x3ccite\x3e\x3c/cite\x3e\x3c/a\x3e'+'\x3cul id\x3d"laydate_ys"\x3e\x3c/ul\x3e'+'\x3ca class\x3d"laydate_tab laydate_chdown"\x3e\x3ccite\x3e\x3c/cite\x3e\x3c/a\x3e'+"\x3c/div\x3e"+"\x3c/div\x3e"+'\x3cdiv class\x3d"laydate_ym laydate_m" id\x3d"laydate_MM"\x3e'+'\x3ca class\x3d"laydate_choose laydate_chprev laydate_tab"\x3e\x3ccite\x3e\x3c/cite\x3e\x3c/a\x3e'+'\x3cinput id\x3d"laydate_m" readonly\x3e\x3clabel\x3e\x3c/label\x3e'+'\x3ca class\x3d"laydate_choose laydate_chnext laydate_tab"\x3e\x3ccite\x3e\x3c/cite\x3e\x3c/a\x3e'+'\x3cdiv class\x3d"laydate_yms" id\x3d"laydate_ms"\x3e'+function(){var str="";Dates.each(new Array(12),function(i){str+='\x3cspan m\x3d"'+i+'"\x3e'+Dates.digit(i+1)+"\u6708\x3c/span\x3e"});return str}()+"\x3c/div\x3e"+"\x3c/div\x3e"+"\x3c/div\x3e"+Dates.viewtb+'\x3cdiv class\x3d"laydate_bottom"\x3e'+'\x3cul id\x3d"laydate_hms"\x3e'+'\x3cli class\x3d"laydate_sj"\x3e\u65f6\u95f4\x3c/li\x3e'+"\x3cli\x3e\x3cinput readonly\x3e\x3c/li\x3e"+"\x3cli\x3e:\x3c/li\x3e"+"\x3cli\x3e\x3cinput readonly\x3e\x3c/li\x3e"+"\x3cli\x3e:\x3c/li\x3e"+"\x3cli\x3e\x3cinput readonly\x3e\x3c/li\x3e"+"\x3c/ul\x3e"+'\x3cdiv class\x3d"laydate_time" id\x3d"laydate_time"\x3e\x3c/div\x3e'+'\x3cdiv class\x3d"laydate_btn"\x3e'+'\x3ca id\x3d"laydate_clear"\x3e\u6e05\u7a7a\x3c/a\x3e'+'\x3ca id\x3d"laydate_today"\x3e\u4eca\u5929\x3c/a\x3e'+'\x3ca id\x3d"laydate_ok"\x3e\u786e\u8ba4\x3c/a\x3e'+"\x3c/div\x3e"+(config.isv?'\x3ca href\x3d"http://sentsin.com/layui/laydate/" class\x3d"laydate_v" target\x3d"_blank"\x3elaydate-v'+laydate.v+"\x3c/a\x3e":"")+"\x3c/div\x3e";doc.body.appendChild(div);Dates.box=S("#"+as[0]);Dates.events();div=null}else Dates.shde(Dates.box);Dates.follow(Dates.box);options.zIndex?Dates.box.style.zIndex=options.zIndex:Dates.removeCssAttr(Dates.box,"z-index");Dates.stopMosup("click",Dates.box);Dates.initDate();Dates.iswrite();Dates.timeable();Dates.check()};Dates.reshow=function(){Dates.each(Dates.query("#"+as[0]+" .laydate_show"),function(i,elem){Dates.removeClass(elem,"laydate_show")});return this};Dates.close=function(){Dates.reshow();Dates.shde(Dates.query("#"+as[0]),1);Dates.elem=null};Dates.parse=function(ymd,hms,format){ymd=ymd.concat(hms);format=format||(Dates.options?Dates.options.format:config.format);return format.replace(/YYYY|MM|DD|hh|mm|ss/g,function(str,index){ymd.index=++ymd.index|0;return Dates.digit(ymd[ymd.index])})};Dates.creation=function(ymd,hide){var S=Dates.query,hms=Dates.hmsin;var getDates=Dates.parse(ymd,[hms[0].value,hms[1].value,hms[2].value]);Dates.elem[as.elemv]=getDates;if(!hide){Dates.close();typeof Dates.options.choose==="function"&&Dates.options.choose(getDates)}};Dates.events=function(){var S=Dates.query,log={box:"#"+as[0]};Dates.addClass(doc.body,"laydate_body");as.tds=S("#laydate_table td");as.mms=S("#laydate_ms span");as.year=S("#laydate_y");as.month=S("#laydate_m");Dates.each(S(log.box+" .laydate_ym"),function(i,elem){Dates.on(elem,"click",function(ev){Dates.stopmp(ev).reshow();Dates.addClass(this[tags]("div")[0],"laydate_show");if(!i){log.YY=parseInt(as.year.value);Dates.viewYears(log.YY)}})});Dates.on(S(log.box),"click",function(){Dates.reshow()});log.tabYear=function(type){if(type===0)Dates.ymd[0]--;else if(type===1)Dates.ymd[0]++;else if(type===2)log.YY-=14;else log.YY+=14;if(type<2){Dates.viewDate(Dates.ymd[0],Dates.ymd[1],Dates.ymd[2]);Dates.reshow()}else Dates.viewYears(log.YY)};Dates.each(S("#laydate_YY .laydate_tab"),function(i,elem){Dates.on(elem,"click",function(ev){Dates.stopmp(ev);log.tabYear(i)})});log.tabMonth=function(type){if(type){Dates.ymd[1]++;if(Dates.ymd[1]===12){Dates.ymd[0]++;Dates.ymd[1]=0}}else{Dates.ymd[1]--;if(Dates.ymd[1]===-1){Dates.ymd[0]--;Dates.ymd[1]=11}}Dates.viewDate(Dates.ymd[0],Dates.ymd[1],Dates.ymd[2])};Dates.each(S("#laydate_MM .laydate_tab"),function(i,elem){Dates.on(elem,"click",function(ev){Dates.stopmp(ev).reshow();log.tabMonth(i)})});Dates.each(S("#laydate_ms span"),function(i,elem){Dates.on(elem,"click",function(ev){Dates.stopmp(ev).reshow();if(!Dates.hasClass(this,as[1]))Dates.viewDate(Dates.ymd[0],this.getAttribute("m")|0,Dates.ymd[2])})});Dates.each(S("#laydate_table td"),function(i,elem){Dates.on(elem,"click",function(ev){if(!Dates.hasClass(this,as[1])){Dates.stopmp(ev);Dates.creation([this.getAttribute("y")|0,this.getAttribute("m")|0,this.getAttribute("d")|0])}})});as.oclear=S("#laydate_clear");Dates.on(as.oclear,"click",function(){Dates.elem[as.elemv]="";Dates.close()});as.otoday=S("#laydate_today");Dates.on(as.otoday,"click",function(){var now=new Date;Dates.creation([now.getFullYear(),now.getMonth()+1,now.getDate()])});as.ok=S("#laydate_ok");Dates.on(as.ok,"click",function(){if(Dates.valid)Dates.creation([Dates.ymd[0],Dates.ymd[1]+1,Dates.ymd[2]])});log.times=S("#laydate_time");Dates.hmsin=log.hmsin=S("#laydate_hms input");log.hmss=["\u5c0f\u65f6","\u5206\u949f","\u79d2\u6570"];log.hmsarr=[];Dates.msg=function(i,title){var str='\x3cdiv class\x3d"laydte_hsmtex"\x3e'+(title||"\u63d0\u793a")+"\x3cspan\x3e\u00d7\x3c/span\x3e\x3c/div\x3e";if(typeof i==="string"){str+="\x3cp\x3e"+i+"\x3c/p\x3e";Dates.shde(S("#"+as[0]));Dates.removeClass(log.times,"laydate_time1").addClass(log.times,"laydate_msg")}else{if(!log.hmsarr[i]){str+='\x3cdiv id\x3d"laydate_hmsno" class\x3d"laydate_hmsno"\x3e';Dates.each(new Array(i===0?24:60),function(i){str+="\x3cspan\x3e"+i+"\x3c/span\x3e"});str+="\x3c/div\x3e";log.hmsarr[i]=str}else str=log.hmsarr[i];Dates.removeClass(log.times,"laydate_msg");Dates[i===0?"removeClass":"addClass"](log.times,"laydate_time1")}Dates.addClass(log.times,"laydate_show");log.times.innerHTML=str};log.hmson=function(input,index){var span=S("#laydate_hmsno span"),set=Dates.valid?null:1;Dates.each(span,function(i,elem){if(set)Dates.addClass(elem,as[1]);else if(Dates.timeVoid(i,index))Dates.addClass(elem,as[1]);else Dates.on(elem,"click",function(ev){if(!Dates.hasClass(this,as[1]))input.value=Dates.digit(this.innerHTML|0)})});Dates.addClass(span[input.value|0],"laydate_click")};Dates.each(log.hmsin,function(i,elem){Dates.on(elem,"click",function(ev){Dates.stopmp(ev).reshow();Dates.msg(i,log.hmss[i]);log.hmson(this,i)})});Dates.on(doc,"mouseup",function(){var box=S("#"+as[0]);if(box&&box.style.display!=="none")Dates.check()||Dates.close()}).on(doc,"keydown",function(event){event=event||win.event;var codes=event.keyCode;if(codes===13&&Dates.elem)Dates.creation([Dates.ymd[0],Dates.ymd[1]+1,Dates.ymd[2]])})};Dates.init=function(){Dates.use("need");Dates.use(as[4]+config.defSkin,as[3]);Dates.skinLink=Dates.query("#"+as[3])}();laydate.reset=function(){Dates.box&&Dates.elem&&Dates.follow(Dates.box)};laydate.now=function(timestamp,format){var De=new Date(timestamp|0?function(tamp){return tamp<864E5?+new Date+tamp*864E5:tamp}(parseInt(timestamp)):+new Date);return Dates.parse([De.getFullYear(),De.getMonth()+1,De.getDate()],[De.getHours(),De.getMinutes(),De.getSeconds()],format)};laydate.skin=function(lib){Dates.skinLink.href=Dates.getPath+as[4]+lib+as[5]}}(window);