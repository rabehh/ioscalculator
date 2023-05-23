function btnclick(value1){
    document.getElementById("screen").value=document.getElementById("screen").value+value1;
}
function clearscreen(){
    document.getElementById("screen").value=""
}
function equalto(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}