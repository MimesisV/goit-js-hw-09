import"./assets/styles-df66f4ed.js";const a="feedback-form-state",t=document.querySelector(".feedback-form"),r=t.querySelector("textarea"),o=localStorage.getItem(a);o&&(r.value=o);t.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem(a),t.reset()});r.addEventListener("input",e=>{const s=e.target.value;localStorage.setItem(a,s)});
//# sourceMappingURL=commonHelpers2.js.map
