    var randomNumber1 = Math.round(Math.random()*6);
    console.log(randomNumber1);
    if(randomNumber1 ===0){
        randomNumber1++;
    }
    console.log(randomNumber1);

    var images2 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".dice .img2").setAttribute("src",images2);