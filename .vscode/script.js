function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver ligth mode, add a img ligth
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem ligth move, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
