(()=>{"use strict";!function(){let e=document.querySelector(".default"),t=document.createElement("div"),d=document.createElement("h1"),l=document.createElement("button");t.classList.add("default"),d.textContent="Todo List",l.textContent="ADD",l.classList.add("add"),t.appendChild(d),t.appendChild(l),e.appendChild(t)}();let e=[];((e,t)=>{e.push({title:"title",description:"description",dueDate:"dueDate",priority:"priority"})})(e),(e=>{let t=document.querySelector(".default");for(let d=0;d<e.length;d++){let l=document.createElement("div"),n=document.createElement("ul");l.appendChild(n),t.appendChild(l);for(let t=0;t<e[d].length;t++){let l=document.createElement("li");console.log(e[d].title),l.textContent=`${e[d][t].title}`,n.appendChild(l)}}})([].concat(e))})();