document.addEventListener("DOMContentLoaded", () => {
  const switchIcons = document.getElementsByClassName("switch-icon");

  // const sampleArray = [1,3,4,5,6];
  for (let i = 0; i < switchIcons.length; i++) {
    const switchIcon = switchIcons[i];
    switchIcon.addEventListener("click", (event) => {
      const imagePathArray = event.target.src.split('/');
      const imageName = imagePathArray[imagePathArray.length - 1];
      if (imageName === 'icon-minus.svg'){
        imagePathArray[imagePathArray.length - 1] = 'icon-plus.svg';
      } else {
        imagePathArray[imagePathArray.length - 1] = 'icon-minus.svg';
      }
      switchIcon.src = imagePathArray.join('/');
      
      const paragraph = event.target.closest("div").parentNode.children[1];

      if (paragraph.classList.contains("hide")) {
        paragraph.classList.remove("hide");
      } else {
        paragraph.classList.add("hide");
      }
    });
  }
});
