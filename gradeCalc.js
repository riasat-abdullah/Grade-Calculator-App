const inp1 = document.getElementById("number1");
const output = document.getElementById("result");
const btn = document.getElementById("calculate")
btn.addEventListener('click', compare);
function compare() {
    const num1 = inp1.value;
    if(num1=='')
    {
        output.innerText = `You should enter your marks`;
        return;
    }
    if (num1 > 100 || num1 < 0) {
        output.innerText = `Invalid Number`;
    }
    else if(num1 >=90 && num1<=100)
    {
        output.innerText = `A`;
    }
    else if(num1 >=85 && num1<=89)
    {
        output.innerText = `A-`;
    } 
    else if(num1 >=80 && num1<=84)
    {
        output.innerText = `B+`;
    } 
    else if(num1 >=75 && num1<=79)
    {
        output.innerText = `B`;
    }
    else if(num1 >=70 && num1<=74)
    {
        output.innerText = `B-`;
    }
    else if(num1 >=65 && num1 <= 69)
    {
        output.innerText = `C+`;
    }
    else if(num1>=60 && num1<64)
    {
        output.innerText = `C`;
    }
    else if(num1>=55 && num1<59)
        {
            output.innerText = `C-`;
        }
    else if(num1>=50 && num1<54)
        {
            output.innerText = `D`;
        }
    else if(num1>=60 && num1<64)
    {
        output.innerText = `C`;
    } 
    else if(num1>=0 && num1<49)
        {
            output.innerText = `F`;
        }

}

