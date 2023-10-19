const display = document.getElementById('display');
display.innerHTML = 0;
let displayExprsn = "";
function getInput(input) {
    console.log(`Button ${input} clicked`);
    const In = input;
    displayExprsn += In;
    display.innerHTML = displayExprsn;
}
function Calculations()
{
  const result = eval(displayExprsn);
  display.innerHTML = result;
}
function getReset()
{
    display.innerHTML = 0;
    displayExprsn = 0;
}
function deleteDigit()
{
    displayExprsn = displayExprsn.slice(0,-1);
    if(displayExprsn.length == 0)
    {
        display.innerHTML = 0;
    }
    else
    {
        display.innerHTML = displayExprsn;
    }
}