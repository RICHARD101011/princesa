
const boton = document.getElementById("abrir");
const sorpresa = document.getElementById("sorpresa");

boton.addEventListener("click", () => {
  sorpresa.classList.remove("oculto");
  sorpresa.classList.add("mostrar");
  setTimeout(() => sorpresa.scrollIntoView({behavior:"smooth"}), 150);
});

const fondo = document.getElementById("petalos");
for(let i=0;i<22;i++){
  const p=document.createElement("span");
  p.className="petalo";
  p.textContent=Math.random()>.45?"♡":"🌸";
  p.style.left=Math.random()*100+"vw";
  p.style.fontSize=(12+Math.random()*17)+"px";
  p.style.animationDuration=(9+Math.random()*10)+"s";
  p.style.animationDelay=(-Math.random()*15)+"s";
  fondo.appendChild(p);
}
