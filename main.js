(()=>{"use strict";!function(){let e=document.querySelector(".default"),t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("button");t.classList.add("default2"),n.textContent="Todo List",d.textContent="ADD",d.classList.add("add"),t.appendChild(n),t.appendChild(d),e.appendChild(t)}();let e=document.querySelector(".add"),t=!1;e.addEventListener("click",(function(){if(!1===t){(()=>{let e=document.querySelector(".default2"),t=document.createElement("form"),n=document.createElement("br"),d=document.createElement("br"),l=document.createElement("br"),a=document.createElement("br"),c=document.createElement("label"),o=document.createElement("input");c.textContent="Title:",o.setAttribute("data","title"),o.setAttribute("type","text");let u=document.createElement("label"),r=document.createElement("input");u.textContent="Description:",r.setAttribute("data","description"),r.setAttribute("type","text");let i=document.createElement("label"),p=document.createElement("input");i.textContent="Due Date:",p.setAttribute("data","duedate"),p.setAttribute("type","date");let m=document.createElement("label"),C=document.createElement("select");m.textContent="Priority:";let s=document.createElement("option");s.textContent="Red",s.setAttribute("value","red");let h=document.createElement("option");h.textContent="Orange",h.setAttribute("value","orange");let E=document.createElement("option");E.textContent="Green",E.setAttribute("value","green");let b=document.createElement("button"),x=document.createElement("button");b.textContent="ADD TODO",b.setAttribute("type","button"),x.textContent="CANCEL",x.classList.add("cancel"),x.setAttribute("type","button"),t.appendChild(c),t.appendChild(o),t.appendChild(n),t.appendChild(u),t.appendChild(r),t.appendChild(d),t.appendChild(i),t.appendChild(p),t.appendChild(l),t.appendChild(m),C.appendChild(s),C.appendChild(h),C.appendChild(E),t.appendChild(C),t.appendChild(a),t.appendChild(b),t.appendChild(x),e.appendChild(t)})(),t=!0;let e=document.querySelector(".cancel"),n=document.querySelector(".default2"),d=document.querySelector("form");e.addEventListener("click",(function(){n.removeChild(d),t=!1}))}})),(e=>{let t=document.querySelector(".default"),n=document.createElement("ul");[].forEach((function(e){let t=document.createElement("li"),d=document.createTextNode(`${e.title} ${e.description} ${e.dueDate} ${e.priority}`);t.appendChild(d),n.appendChild(t)})),t.appendChild(n)})()})();