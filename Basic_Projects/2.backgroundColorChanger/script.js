const parent = document.getElementById("parent");
parent.addEventListener("click", (e) => {
  const btn = e.target;
  const body = document.querySelector("body");
  body.style.backgroundColor = btn.id;
});
