const reader = new XMLHttpRequest();
reader.open('GET', 'text.txt', true);
reader.onreadystatechange = function () {
    if (reader.readyState === 4 && reader.status === 200) {
        document.getElementById('fileDisplayArea').innerHTML = reader.responseText;
    }
};
reader.send();

const rozdzialy = 11;

const nav = document.querySelector("nav");

for (let i = 1; i <= rozdzialy; i++) {
    nav.innerHTML += `<a href="#${i}">Rozdział ${i} </a>`
}

const menuImage = document.querySelector("#menuImage");
const upArrow = document.querySelector("#topArrow");
let isOpen = false;

const navTab = Array.from(nav.children);
const navAnchorTab = [];


navTab.forEach((element) => {
    if (element.tagName == "A") {
        navAnchorTab.push(element);
    }
})


menuImage.addEventListener("click", () => {
    isOpen = !isOpen
    navAnchorTab.forEach((element) => {
        if (isOpen) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})

navAnchorTab.forEach(element => {
    element.addEventListener("click", () => {
        if (isOpen) {
            navAnchorTab.forEach((element) => {
                element.style.display = "none";
            })
        }
        isOpen = false;
    })
})

upArrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
})

addEventListener("scroll", (e) => {
    if(scrollY > 300) upArrow.style.display = "block";
    else upArrow.style.display = "none";
})