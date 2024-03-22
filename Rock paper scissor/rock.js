let randomchoice;
function computer() {
    randomchoice= Math.floor(Math.random()*3)+1;
    const show = document.getElementById('show');

if(randomchoice==1) {
    show.style.backgroundImage = 'url(rock.png)';
}
else if(randomchoice==2) {
    show.style.backgroundImage = 'url(paper.png)';
}
else if(randomchoice==3) {
    show.style.backgroundImage = 'url(scissor.png)';
}
}

function play(userChoice) {
    computer()

    const output=document.getElementById('output');
    if(userChoice===randomchoice){
        output.textContent="It's a Tie";
    }
    else if (
        (userChoice===1 && randomchoice===3) ||
        (userChoice===2 && randomchoice===1) ||
        (userChoice==3 && randomchoice===2)
        ){
            output.textContent="You Win";
        } 
        else {
            output.textContent="You Loss";
        }
}







function rock() {
    var rock=1;
    if(rock==randomchoice){
        console.log("Tie");
    }
    else if(rock==randomchoice) {
        console.log("You loss");
    }
    else if(rock==randomchoice) {
        console.log("you win");
    }
}
function paper() {
    var paper=2;
    if(paper==randomchoice) {
        console.log("You Win");
    } 
    else if(paper==randomchoice){
        console.log("Tie");
    }
    else if(paper==randomchoice) {
        console.log("You loss");
    }
}
function scissor() {
    var scissor=3;
    if(scissor==randomchoice) {
        console.log("You loss");
    }
    else if(scissor==randomchoice) {
        console.log("You Win");
    }
    else if(scissor==randomchoice) {
        console.log("Tie");
    }
}
