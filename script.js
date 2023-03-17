function clrscr(){
    document.getElementsByClassName("display")[0].innerHTML = "";
}
function display(value){
    let x = document.querySelector(".display");
    x.style.fontSize = "55px";
    x.style.textAlign = "right";
    let digit = document.getElementsByClassName("display")[0].innerHTML += value;
    if(digit.length > 11){
        document.getElementsByClassName("display")[0].innerHTML = "";
    }
}
function calc(){
    let getval = document.getElementsByClassName("display")[0].innerHTML;
    let res = eval(getval);
    let resdigit = document.getElementsByClassName("display")[0].innerHTML = res;
    if(String(resdigit).length > 11){
        document.getElementsByClassName("display")[0].innerHTML = "";
    }
}