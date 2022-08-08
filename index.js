/* 1- Select the `header` that is the closest to the first `h1` heading. Give the `header` a solid border of 5px. ! */

let title = document.querySelector("h1");
let header = title.closest("header");
header.style.borderBottom = "5px solid grey";

/* 2- If the `.info` section contains an `.info-package`, select all `package-title`s and give the title's previous element a border. */

// Better
// select all package-titles
// If the .info selection contains an .info-package,
// 1. select elements

const infoSection = document.querySelector(".info");
// const infoPackage = document.querySelector(".info-package");
const infoPackage = infoSection.querySelector(".info-package");
const packageTitles = document.querySelectorAll(".package-title");

// 2. style conditionally

if (infoSection.contains(infoPackage)) {
  packageTitles.forEach((title) => {
    title.previousElementSibling.style.border = "5px solid black";
  });
}
/* 3 -Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. */

const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  if (label.matches(".mild")) {
    label.style.borderBottom = "4px solid yellow";
  } else if (label.matches(".intense")) {
    label.style.borderBottom = "4px solid orange";
  } else {
    label.style.borderBottom = "4px solid red";
  }
});
/* 4-Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. Note: the `.nav-list` should still contain its children. */

// Method - 01

const navList = document.querySelector(".nav-list");
const navListChildren = navList.children;
const footerList = document.querySelector(".site-map");

// for (let i = 0; i < navListChildren.length; i++) {
//   const listItem = document.createElement("li");
//   listItem.textContent = navListChildren[i].textContent;
//   footerList.append(listItem);
// }

// Method - 02

for (let i = 0; i < navListChildren.length; i++) {
  const listItem = navListChildren[i];
  const listItemClone = listItem.cloneNode(true);
  footerList.append(listItemClone);
}
