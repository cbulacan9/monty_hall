var win = 0;
var lose = 0;
for(i=0;i<1000;i++){
    var choice = [1,2,3];
    answer = Math.ceil((Math.random() * 3));
    userGuess = Math.ceil((Math.random() * 3));
    aindex = choice.indexOf(answer);
    if(userGuess == answer){
        win++;
    }
    else{
        lose++;
    }
}

console.log(win/1000);
console.log(lose/1000);
