var firstOne = document.getElementById("firstBtn");
var firstOneOff = document.getElementById("firstBtnOff");
var secondOne = document.getElementById("secondBtn");

firstBtn.onmouseover = (event) => {
    firstOne.style = "background: #39d083"
    firstOneOff.style = "background: #39d083";
    event.stopPropagation();
}

firstBtnOff.onmouseover = (event) => {
    firstOne.style = "background: #39d083"
    firstOneOff.style = "background: #39d083";
    event.stopPropagation();
}

firstBtn.onmouseout = (event) => {
    firstOne.style = "background: #22424b"
    firstOneOff.style = "background: #22424b";
    event.stopPropagation();
}

firstBtnOff.onmouseout = (event) => {
    firstOne.style = "background: #22424b"
    firstOneOff.style = "background: #22424b";
    event.stopPropagation();
}

secondBtn.onmouseover = (event) => {
    secondOne.style = "background: #39d083";
    event.stopPropagation();
}

secondBtn.onmouseout = (event) => {
    secondOne.style = "background: #22424b";
    event.stopPropagation();
}