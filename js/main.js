let select = document.getElementById("Select");
let botonb = document.getElementById("buttonB");
let botona = document.getElementById("butttonA");
let screen = document.getElementById("screen");
let start = document.getElementById("botonstart");
let encendido = false;

start = addEventListener("click", (e) => {
  if (e.target.id == "botonstart") {
    if (encendido == false) {
      screen.style.backgroundImage = "url(imagenes/nintendoLogo.gif)";
      screen.style.backgroundSize = "200px 200px";
      encendido = true;
    } else if (encendido == true) {
      console.log("entra apagar");
      screen.style.backgroundImage = "none";
      screen.style.backgroundColor = "grey";
      encendido = false;
    }
  }
});
botona = addEventListener("click", (e) => {
  if (e.target.id == "butttonA") {
    screen.style.backgroundImage = "url(imagenes/mario1.png)";
    screen.style.backgroundSize = "180px 180px";
  }
});
select = addEventListener("click", (e) => {
  if (e.target.id == "Select") {
    console.log("entrar");
    screen.style.backgroundImage = "url(imagenes/selectplayer.gif)";
    screen.style.backgroundSize = "180px 180px";
  }
});
botonb = addEventListener("click", (e) => {
  if (e.target.id == "buttonB") {
    screen.style.backgroundImage = "url(imagenes/mario2.jpg)";
    screen.style.backgroundSize = "180px 180px";
  }
});
