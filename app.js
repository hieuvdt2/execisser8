console.log(document);

const btn1 = document.getElementById("btn1");
const txt = document.getElementById("txt");
btn1.onclick=function(){
    if(txt.style.display =="none"){
        txt.style.display= "block";
    }else{
        txt.style.display="none";
    }
}
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();



  var a = 14;
  const btn4 = document.getElementById("btn4");
  const text1 = document.getElementById("a4");
  btn4.onclick =function(){
    a++;
    // a4.innerText = "tăng cỡ chư lên 14px",
    text1.style.fontSize = a+"px";
    console.log(text1.textContent);
  }


  const x = document.getElementById("nd1");
  const y = document.getElementById("nd2");
  const btn3 = document.getElementById("btn3");

  let c =""
  btn3.onclick = function(){
   console.log(x.textContent);
   console.log(y.textContent);
   c = x.textContent
   x.innerText = y.textContent;
   y.innerText = c;

  }
  
