const listaFilmes = [];
const listaTrailerLink = [
  "https://www.youtube.com/embed/AfHiUtxrmiY",
  "https://www.youtube.com/embed/2wqzcLyaU8c",
  "https://www.youtube.com/embed/_Gr2zXuEBL0",
  "https://www.youtube.com/embed/cPM1yDbmemY",
  "https://www.youtube.com/embed/75Vngn8c1ck",
  "https://www.youtube.com/embed/4D6qiPWKd4I",
  "https://www.youtube.com/embed/9GgxinPwAGc",
  "https://www.youtube.com/embed/EQxCycVTfcU",
  "https://www.youtube.com/embed/45cHA7kB_Kc",
  "https://www.youtube.com/embed/TInSjlTL_z8"
];

for (let i = 1; i<11; i++){
    listaFilmes.push("filme0" + String(i));
}

window.onload = () => {
  for(let n=0;n<listaFilmes.length;n++){
  	itemDiv = document.createElement("div");
    itemDiv.setAttribute("class","item");
    itemImg = document.createElement("img");
    itemImg.setAttribute("class", "box-film");
    itemImg.setAttribute("id", listaFilmes[n]);
    itemImg.setAttribute("src", `img/mini${n+1}.jpg`);
    itemImg.setAttribute("alt", `capa-filme${n+1}`);
    itemImg.setAttribute("onclick", "onClick(this)");
    itemImg.setAttribute("class", "w3-hover-opacity");
    itemDiv.appendChild(itemImg);
    document.getElementById('carousel-container').appendChild(itemDiv);

    modalDiv = document.createElement("div");
    modalDiv.setAttribute("id",`filme0${n+1}0`);
    modalDiv.setAttribute("class","w3-modal");
    modalDiv.setAttribute("onclick","this.style.display='none'");

    modalSpan = document.createElement("span");
    modalSpan.setAttribute("class","w3-button w3-hover-red w3-xlarge w3-display-topright");
    modalSpan.innerHTML = '&times;';
    modalDiv.appendChild(modalSpan);

    modalSubDiv = document.createElement("div");
    modalSubDiv.setAttribute("class","w3-modal-content w3-animate-zoom conteudo-modal");
    modalDiv.appendChild(modalSubDiv);

    modalFrame = document.createElement("iframe");
    modalFrame.setAttribute("width","560");
    modalFrame.setAttribute("height","315");
    modalFrame.setAttribute("src", listaTrailerLink[n]);
    modalFrame.setAttribute("title", "YouTube video player");
    modalFrame.setAttribute("frameborder", "0");
    modalFrame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    modalFrame.setAttribute("allowfullscreen","");
    modalSubDiv.appendChild(modalFrame);

    document.getElementById("container-modais").appendChild(modalDiv);
  }

  setTimeout(() => {
    script1 = document.createElement("script");
    script1.setAttribute("src", "./js/owl/jquery.min.js");
    document.body.appendChild(script1);
  }, 300);

  setTimeout(() => {
    script2 = document.createElement("script");
    script2.setAttribute("src", "./js/owl/owl.carousel.min.js");
    document.body.appendChild(script2);
  }, 400);

  setTimeout(() => {
    script3 = document.createElement("script");
    script3.setAttribute("src", "./js/owl/setup.js");  
    document.body.appendChild(script3);
  }, 500);
  
}

function onClick(element) {
  // document.getElementById("img01").src = element.src;
  filmeSelecionado = String(element.id) + "0"
  console.log(filmeSelecionado);
  document.getElementById(filmeSelecionado).style.display = "block";
}

