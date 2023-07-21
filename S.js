let categorySwitch = document.getElementsByClassName("ctr_categorySwitch")[0];
let categoryMain = document.getElementsByClassName("ctr_category")[0];

let changeCategory = categorySwitch.getElementsByTagName("a");

for (
  let categoriesTotal = 0;
  categoriesTotal < changeCategory.length;
  categoriesTotal++
) {
  changeCategory[categoriesTotal].addEventListener("click", function () {
    categorySwitch
      .getElementsByClassName("activeCategory")[0]
      .classList.remove("activeCategory");

    changeCategory[categoriesTotal].classList.add("activeCategory");

    categoryMain
      .getElementsByClassName("showCategory")[0]
      .classList.remove("showCategory");

    categoryMain
      .getElementsByTagName("div")
      [categoriesTotal].classList.add("showCategory");
  });
}

// S3

let contentSwitch = document.getElementsByClassName("ctr_aboutSwitch")[0];
let contentMain = document.getElementsByClassName("ctr_about")[0];

let changeContent = contentSwitch.getElementsByTagName("a");

for (
  let contentTotal = 0;
  contentTotal < changeContent.length;
  contentTotal++
) {
  changeContent[contentTotal].addEventListener("click", function () {
    contentSwitch
      .getElementsByClassName("activeAbout")[0]
      .classList.remove("activeAbout");

    changeContent[contentTotal].classList.add("activeAbout");

    contentMain
      .getElementsByClassName("showAbout")[0]
      .classList.remove("showAbout");

    contentMain
      .getElementsByClassName("ctr_aboutContent")
      [contentTotal].classList.add("showAbout");
  });
}

// S5

let listVolumes = document.getElementsByClassName("btn_bookFlip");
let volumeTotal;

for (volumeTotal = 0; volumeTotal < listVolumes.length; volumeTotal++) {
  listVolumes[volumeTotal].addEventListener("click", function () {
    this.classList.toggle("activeVolume");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
