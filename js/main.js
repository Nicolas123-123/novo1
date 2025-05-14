

function muda_cor(){

    let body = document.getElementById("bg");

    let x = Math.floor(Math.random()*6)
 
    switch(x){
        case 0:
            body.style.backgroundColor = "#CD5C5C";
            break;
        case 1:
            body.style.backgroundColor = "#CAFF70";
            break;
        case 2:
            body.style.backgroundColor = "#363636";
            break;
        case 3:
            body.style.backgroundColor = "#00BFFF";
            break;
        case 4:
            body.style.backgroundColor = "#458B00";
            break;
        case 5:
            body.style.backgroundColor = "#EEC900";
            break;
        case 6:
            body.style.backgroundColor = "#FF0000";
            break;
        case 7:
            body.style.backgroundColor = "#A020F0";
            break;
        default:
            body.style.backgroundColor = "#000000";
    }
}

function muda_cor_hex(){
    let body = document.getElementById("bg");
    const hex = "0123456789ABCDEF";
    let cor = "#";

    for(let i=0; i<6; i++){
        cor += hex.charAt(Math.floor(Math.random() * hex.length))
    }
    body.style.backgroundColor = cor;
}