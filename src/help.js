import "./scss/style.scss";

document.querySelector("#helpcircle").addEventListener("click", randomTable);

function randomTable() {
  const data = { tableid: Math.floor(Math.random() * 10) + 1 };
  const postData = JSON.stringify(data);
  fetch("https://foobar-cc0c.restdb.io/rest/foobar", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "61b71e3fa3fedd557f8e0abd",
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((data) => console.log(`Table ${postData} added`));
}

const toggle = document.querySelector(".toggle input");
var element = document.body;

toggle.addEventListener("click", () => {
  const onOff = toggle.parentNode.querySelector(".onoff");

  onOff.textContent = toggle.checked ? "Lightmode" : "Darkmode";
  onOff.textcontent.style = toggle.checked = element.classList.toggle("light-mode");
  onOff.textcontent.style = toggle.unchecked = element.classList.toggle("dark-mode");
});
