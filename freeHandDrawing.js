const pencil=document.getElementById("pencil");
let isPencilActive= false;

const colorPicker= document.getElementById("color-Picker");
colorPicker.addEventListener("change", () =>{
        drawColor=colorPicker.value;
});

function onPencilClick(){ 
 pencil.classList.toggle("active"); 
 isPencilActive = !isPencilActive
 
 if(isPencilActive){
    
    canvas.style.cursor="crosshair";
    canvas.addEventListener("mousedown", onMouseDown);
 }
 else{
    canvas.style.cursor="auto"
    canvas.removeEventListener("mousedown", onMouseDown);
 }
}
pencil.addEventListener("click", onPencilClick);