(()=>{"use strict";!function(){let e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h1"),d=document.createElement("button");t.classList.add("default"),n.textContent="Todo List",d.textContent="ADD",d.classList.add("add"),t.appendChild(n),t.appendChild(d),e.appendChild(t)}();let e=[],t={title:"shopping",description:"need to shop",dueDate:"whenever",priority:"asap"};((e,t)=>{e.push(t)})(e,t),((e,t)=>{e.priority="green"})(t),console.log(e)})();