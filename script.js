
document.addEventListener("keydown", (e)=>{
    let box = document.querySelector("#box");
    let text = document.querySelector("#text")
    let sp = document.querySelector("#sp")
    
    text.innerText = `you pressed - `;
    sp.innerText = `${e.key}`;
    let sbox = document.querySelector("#squar");
    sbox.className = "square";
    sbox.innerText = `${e.keyCode}`;
});

