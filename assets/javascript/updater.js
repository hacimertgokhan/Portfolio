let gh_ico = `<i class="fa-brands fa-github fa-xl"></i>`;

let username = `${gh_ico} Hacı Mert Gökhan`;
let github_name = "hacimertgokhan"

let name = document.getElementById('user-name');

function updateDisplay() {name.innerHTML = username;}

function github() {window.open(`https://github.com/${github_name}`);}

name.addEventListener("click", () => {
    github();
});

updateDisplay();