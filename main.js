function display(Aziz){
    document.getElementById('result').value += (Aziz)
    return Aziz
}

function clearscreen(){
    document.getElementById("result").value = "";
}
function backspace(){
    document.getElementById('result').value = "";
}
function solve(){
    let x =document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y;
    return y    
}