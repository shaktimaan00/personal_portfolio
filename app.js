let education = document.querySelector(".education");
let experience = document.querySelector(".experience");
let ed_cols = document.querySelector(".ed-cols");
let ex_cols = document.querySelector(".ex-cols");

education.addEventListener("click", () => {
    education.classList.add("active");
    experience.classList.remove("active");
    ed_cols.classList.add("show");
    ex_cols.classList.remove("show");
})

experience.addEventListener("click", () => {
  experience.classList.add("active");
  education.classList.remove("active");
  ed_cols.classList.remove("show");
  ex_cols.classList.add("show")
});

// console.log(ed_cols);

let pdot1 = document.querySelector(".pdot1");
let pdot2 = document.querySelector(".pdot2");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

pdot1.addEventListener("click", () => {
  pdot1.classList.add("pactive");
  box1.style.display = "block";
  pdot2.classList.remove("pactive");
  box2.style.display = "none";
})

pdot2.addEventListener("click", () => {
  pdot2.classList.add("pactive");
  box2.style.display = "block";
  pdot1.classList.remove("pactive");
  box1.style.display = "none";
});




