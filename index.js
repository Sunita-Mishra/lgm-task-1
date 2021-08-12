var counter=1;
setInterval(()=>{
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>3){
        counter=1;
    }
},3000);

let img1=document.getElementById('img7');
let img2 =document.getElementById(`img8`);
let img3=document.getElementById('img9');
let img4=document.getElementById('img10');
let img5=document.getElementById('img11');

img1.addEventListener('click',()=>{

    console.log("nnn")
    document.getElementById('img12').src=document.getElementById(`img7`).src;
}
);
img2.addEventListener('click',()=>{

    
    document.getElementById('img12').src=document.getElementById(`img8`).src;
}
);
img3.addEventListener('click',()=>{

    
    document.getElementById('img12').src=document.getElementById(`img9`).src;
}
);
img4.addEventListener('click',()=>{

    
    document.getElementById('img12').src=document.getElementById(`img10`).src;
}
);
img5.addEventListener('click',()=>{

    
    document.getElementById('img12').src=document.getElementById(`img11`).src;
}
);
   