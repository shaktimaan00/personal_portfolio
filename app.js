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

console.log(ed_cols);










