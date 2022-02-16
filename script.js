var nClick=0;
    
function openNav() {
    nClick++;
    console.log(nClick);
    if(nClick%2==0){
        console.log("Pari");
        document.getElementById("navLaterale").style.width = "0%";
        document.getElementById("menu").innerText = "\u2630";
    }
    else{
        console.log("Dispari");
        document.getElementById("navLaterale").style.width = "100%";
        document.getElementById("menu").innerText = "\u00d7";
    }

}