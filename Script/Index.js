let img = document.getElementById("amazing_Gif");
let scc = img.src.split('?')[0];
let newSrc = `${scc}?reload=${new Date().getTime()}`;
img.src = newSrc;