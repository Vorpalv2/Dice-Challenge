    var randomNumber1 = Math.round(Math.random()*6);

    if(randomNumber1 ===0){
        randomNumber1++;
    }

    var images2 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".dice .img1").setAttribute("src",images2);


    var randomNumber2 = Math.round(Math.random()*6);
    if(randomNumber2 ===0){
        randomNumber2++;
    }
    console.log("first number : " +randomNumber1+ " second number : "+randomNumber2+"");

    var image = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".dice .img2").setAttribute("src",image);

    var resultVariable = result();

    function result() {
        if(randomNumber1> randomNumber2){
            document.querySelector(".container h1").innerHTML = "Player 1 Won";
        }
        else if (randomNumber2> randomNumber1){
            document.querySelector(".container h1").innerHTML = "Player 2 Won";
        }
        else {
            document.querySelector(".container h1").innerHTML = "Its a Draw";
        }
    }