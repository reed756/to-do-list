(()=>{"use strict";class t{constructor(t,e,a,n){this.title=t,this.description=e,this.dueDate=a,this.priority=n}}const e=(t,e)=>{t.push(e)},a=(t,e)=>{t.splice(e,1)},n=t=>"red"===t?"green":"orange"===t?"red":"green"===t?"orange":void 0,d=()=>{let t=document.querySelector(".listdiv"),e=document.createElement("form"),a=document.createElement("br"),n=document.createElement("br"),d=document.createElement("br"),l=document.createElement("br"),u=document.createElement("label"),r=document.createElement("input");u.textContent="Title:",r.setAttribute("data","title"),r.setAttribute("type","text");let i=document.createElement("label"),o=document.createElement("input");i.textContent="Description:",o.setAttribute("data","description"),o.setAttribute("type","text");let c=document.createElement("label"),m=document.createElement("input");c.textContent="Due Date:",m.setAttribute("data","duedate"),m.setAttribute("type","date");let s=document.createElement("label"),p=document.createElement("select");s.textContent="Priority:",p.setAttribute("data","priority");let b=document.createElement("option");b.textContent="Red",b.setAttribute("value","red");let C=document.createElement("option");C.textContent="Orange",C.setAttribute("value","orange");let v=document.createElement("option");v.textContent="Green",v.setAttribute("value","green");let h=document.createElement("button"),E=document.createElement("button");h.textContent="ADD TODO",h.setAttribute("type","button"),E.textContent="CANCEL",E.classList.add("cancel"),E.setAttribute("type","button"),h.setAttribute("data","add"),e.appendChild(u),e.appendChild(r),e.appendChild(a),e.appendChild(i),e.appendChild(o),e.appendChild(n),e.appendChild(c),e.appendChild(m),e.appendChild(d),e.appendChild(s),p.appendChild(b),p.appendChild(C),p.appendChild(v),e.appendChild(p),e.appendChild(l),e.appendChild(h),e.appendChild(E),t.appendChild(e)};!function(){let t=document.querySelector("#content"),e=document.createElement("div"),a=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("button"),l=document.createElement("ul"),u=document.createElement("button");e.classList.add("default2"),a.classList.add("listdiv"),l.classList.add("defaultList"),l.innerText="DEFAULT",l.setAttribute("data","0"),n.textContent="Todo List",d.textContent="ADD TODO",d.setAttribute("data",1),d.classList.add("add"),u.textContent="ADD PROJECT",u.classList.add("new-project"),e.appendChild(n),e.appendChild(u),l.appendChild(d),a.appendChild(l),t.appendChild(e),t.appendChild(a)}();const l=[[]];l.push([]);let u=document.querySelector(".add"),r=document.querySelector(".new-project"),i=!1;r.addEventListener("click",(function(){if(!1===i){(()=>{let t=document.querySelector(".default2"),e=document.createElement("form"),a=document.createElement("label"),n=document.createElement("input"),d=document.createElement("button"),l=document.createElement("button");a.textContent="Name of Project:",d.textContent="CREATE PROJECT",d.setAttribute("type","button"),d.classList.add("addproject"),l.textContent="CANCEL",l.classList.add("cancel"),e.classList.add("form"),l.setAttribute("type","button"),n.setAttribute("data","title"),n.setAttribute("type","text"),e.appendChild(a),e.appendChild(n),e.appendChild(d),e.appendChild(l),t.appendChild(e)})(),i=!0;let u=document.querySelector(".cancel"),r=document.querySelector(".default2"),o=document.querySelector(".listdiv"),c=document.querySelector(".form"),m=document.querySelector(".addproject"),s=document.querySelector("[data='title']");m.addEventListener("click",(function(){let u=document.createElement("ul"),r=document.createElement("button"),c=document.createElement("button");r.setAttribute("type","button"),r.textContent="ADD TODO",c.setAttribute("type","button"),c.textContent="DELETE PROJECT",u.textContent=`${s.value}`,u.appendChild(r),u.appendChild(c),o.appendChild(u);let m=(s.value,[]);s.value="test",l.push(m),r.setAttribute("data",""+(l.length-1)),c.setAttribute("data",""+(l.length-1)),u.setAttribute("data",""+(l.length-1)),c.addEventListener("click",(function(){l.splice(u.attributes.data.value,1),o.removeChild(u);let t=document.querySelectorAll("ul[data]");for(let e=0;e<l.length-1;e++)t[e].setAttribute("data",`${e}`)})),r.addEventListener("click",(function(){if(!1===i){d(),i=!0;let o=document.querySelector(".cancel"),c=document.querySelector(".listdiv"),m=document.querySelector("form"),s=document.querySelector("[data='title']"),p=document.querySelector("[data='description']"),b=document.querySelector("[data='duedate']"),C=document.querySelector("[data='priority']"),v=document.querySelector("[data='add']");o.addEventListener("click",(function(){c.removeChild(m),i=!1})),v.addEventListener("click",(function(){let d=new t(`${s.value}`,`${p.value}`,`${b.value}`,`${C.value}`);e(l[r.attributes.data.value],d),document.querySelector(".defaultList");let i=document.createElement("li");i.classList.add("todo"),i.style.backgroundColor=`${l[r.attributes.data.value][l[r.attributes.data.value].length-1].priority}`;let o=document.createElement("button"),c=document.createTextNode(`${l[r.attributes.data.value][l[r.attributes.data.value].length-1].title} ${l[r.attributes.data.value][l[r.attributes.data.value].length-1].dueDate}`),m=document.createElement("button");m.textContent="CHANGE PRIORITY",m.setAttribute("datanum",""+(l[r.attributes.data.value].length-1)),o.textContent="DELETE",o.setAttribute("type","button"),o.setAttribute("datanumber",""+(l[r.attributes.data.value].length-1)),o.addEventListener("click",(()=>{a(l[r.attributes.data.value],o.attributes.datanumber.value),u.removeChild(i);let t=document.querySelectorAll("button[datanumber]");for(let e=0;e<l[r.attributes.data.value].length;e++)t[e].setAttribute("datanumber",`${e}`);let e=document.querySelectorAll("button[datanum]");for(let t=0;t<l[r.attributes.data.value].length;t++)e[t].setAttribute("datanum",`${t}`)})),m.addEventListener("click",(()=>{i.removeChild(c),i.removeChild(m),i.removeChild(o),c=document.createTextNode(`${l[r.attributes.data.value][m.attributes.datanum.value].title} ${l[r.attributes.data.value][m.attributes.datanum.value].dueDate}`),i.appendChild(c),i.appendChild(m),i.appendChild(o),l[r.attributes.data.value][m.attributes.datanum.value].priority=n(l[r.attributes.data.value][m.attributes.datanum.value].priority),i.style.backgroundColor=`${l[r.attributes.data.value][m.attributes.datanum.value].priority}`})),i.appendChild(c),i.appendChild(m),i.appendChild(o),u.appendChild(i),s.value="test",p.value="test",b.value="2021-07-05",C.value="red"}))}}))})),u.addEventListener("click",(function(){r.removeChild(c),i=!1}))}})),u.addEventListener("click",(function(){if(!1===i){d(),i=!0;let u=document.querySelector(".cancel"),r=document.querySelector(".listdiv"),o=document.querySelector("form"),c=document.querySelector("[data='title']"),m=document.querySelector("[data='description']"),s=document.querySelector("[data='duedate']"),p=document.querySelector("[data='priority']"),b=document.querySelector("[data='add']");u.addEventListener("click",(function(){r.removeChild(o),i=!1})),b.addEventListener("click",(function(){let d=new t(`${c.value}`,`${m.value}`,`${s.value}`,`${p.value}`);e(l[1],d);let u=document.querySelector(".defaultList"),r=document.createElement("li");r.classList.add("todo"),r.style.backgroundColor=`${l[1][l[1].length-1].priority}`;let i=document.createElement("button"),o=document.createTextNode(`${l[1][l[1].length-1].title} ${l[1][l[1].length-1].dueDate}`),b=document.createElement("button");b.textContent="CHANGE PRIORITY",b.setAttribute("datanum",""+(l[1].length-1)),i.textContent="DELETE",i.setAttribute("type","button"),i.setAttribute("datanumber",""+(l[1].length-1)),i.addEventListener("click",(()=>{a(l[1],i.attributes.datanumber.value),u.removeChild(r);let t=document.querySelectorAll("button[datanumber]");for(let e=0;e<l[1].length;e++)t[e].setAttribute("datanumber",`${e}`);let e=document.querySelectorAll("button[datanum]");for(let t=0;t<l[1].length;t++)e[t].setAttribute("datanum",`${t}`)})),b.addEventListener("click",(()=>{r.removeChild(o),r.removeChild(b),r.removeChild(i),o=document.createTextNode(`${l[1][b.attributes.datanum.value].title} ${l[1][b.attributes.datanum.value].dueDate}`),r.appendChild(o),r.appendChild(b),r.appendChild(i),l[1][b.attributes.datanum.value].priority=n(l[1][b.attributes.datanum.value].priority),r.style.backgroundColor=`${l[1][b.attributes.datanum.value].priority}`})),r.appendChild(o),r.appendChild(b),r.appendChild(i),u.appendChild(r),c.value="test",m.value="test",s.value="2021-07-05",p.value="red"}))}}))})();