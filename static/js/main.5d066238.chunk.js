(this.webpackJsonpRandom_Click=this.webpackJsonpRandom_Click||[]).push([[0],{206:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},290:function(e,t,a){e.exports=a(535)},319:function(e,t,a){},340:function(e,t){},342:function(e,t){},372:function(e,t){},373:function(e,t){},417:function(e,t){},419:function(e,t){},442:function(e,t){},535:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(119),r=a.n(o),s=a(40),i=a.n(s),l=a(120),u=a.n(l),p=a(84),m=a(209),d=a.n(m),h=a(208),f=a.n(h),b=(a(296),a(83)),E=a.n(b),k=a(71),v=a.n(k),g=a(203),_=a.n(g),y=a(121),A=a.n(y),O=a(200),P=a.n(O),w=a(202),j=a.n(w),C=a(201),K=a.n(C),V=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(E.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(A.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(P.a,{before:n.photo_200?c.a.createElement(K.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(A.a,{title:"Navigation Example"},c.a.createElement(j.a,null,c.a.createElement(_.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},x=a(122),S=a(207),T=a.n(S),W=a(204),U=a.n(W),I=a(205),q=a.n(I),N=a(206),R=a.n(N),z=(a(319),Object(x.b)()),F=function(e){return c.a.createElement(E.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(T.a,{onClick:e.go,"data-to":"home"},z===x.a?c.a.createElement(U.a,null):c.a.createElement(q.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:R.a,alt:"Persik The Cat"}))},G=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),o=t[0],r=t[1],s=Object(n.useState)(null),l=Object(p.a)(s,2),m=l[0],h=l[1],b=Object(n.useState)(c.a.createElement(f.a,{size:"large"})),E=Object(p.a)(b,2),k=E[0],v=E[1];Object(n.useEffect)((function(){i.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var o=document.createAttribute("scheme");o.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(o)}if("VKWebAppAccessTokenReceived"===n){a(127)({method:"POST",url:"https://olegdokuchaev.pythonanywhere.com/stories",qs:{value:i.a.send("VKWebAppCallAPIMethod",{method:"stories.getPhotoUploadServer",request_id:"32test",params:{add_to_news:1,v:"5.103",access_token:c.access_token}})}})}if("VKWebAppAccessTokenFailed"===n){a(127)({method:"POST",url:"https://olegdokuchaev.pythonanywhere.com/stories",qs:{value:c.error_type}})}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(i.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,h(e),v(null);case 5:case"end":return t.stop()}}))}()}),[]);var g=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(d.a,{activePanel:o,popout:k},c.a.createElement(V,{id:"home",fetchedUser:m,go:g}),c.a.createElement(F,{id:"persik",go:g}))};i.a.send("VKWebAppInit");i.a.send("VKWebAppGetAuthToken",{app_id:7271970,scope:"stories,friends,status"});r.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[290,1,2]]]);
//# sourceMappingURL=main.5d066238.chunk.js.map