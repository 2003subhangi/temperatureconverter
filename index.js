function cel_kel(){
    var input = document.getElementById('input').value;
    var res = document.getElementById('result');
    res.value = parseFloat(input) + 273.15;
    result.innerText = res.value + " K";
}
function kel_cel(){
    var input = document.getElementById('input').value;
    var res = document.getElementById('result');
    res.value = parseFloat(input) - 273.15;
    result.innerText = res.value+" C";
}
function far_kel(){
    var input = document.getElementById('input').value;
    var res = document.getElementById('result');
    res.value = (parseFloat(input) - 32) * 5/9 + 273.15;
    result.innerText = res.value+" K";
}
function kel_far(){
    var input = document.getElementById('input').value;
    var res = document.getElementById('result');
    res.value = (parseFloat(input) - 273.15) * 9/5 + 32;
    result.innerText = res.value+" F";
}
function far_cel(){
    var input=document.getElementById('input').value;
    var res=document.getElementById('result');
    res.value=(parseFloat(input)-32)*5/9;
    result.innerText=res.value+" C";
}
function cel_far(){
    var input=document.getElementById('input').value;
    var res=document.getElementById('result');
    res.value=(parseFloat(input)*9/5)+32;
    result.innerText=res.value+" F";
}