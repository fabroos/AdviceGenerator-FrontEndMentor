const adviceNEl = document.getElementById("adviceN");
const quoteEl = document.getElementById("quote");
const btnChange = document.getElementById("btnChange");

btnChange.addEventListener("click", () => {
  console.log(btnChange);
  fetch("https://api.quotable.io/random", {})
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      adviceNEl.textContent = Math.floor(Math.random() * 999) + 1;
      quoteEl.textContent = res.content;
    });
});
