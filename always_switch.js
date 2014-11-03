var win = 0;
var lose = 0;
for(i=0;i<1000;i++){
    var choice = [1,2,3];
    answer = Math.ceil((Math.random() * 3));
    userGuess = Math.ceil((Math.random() * 3));
    aindex = choice.indexOf(answer);
    if(answer == userGuess){
        choice.splice(aindex,1);
        gindex = aindex;
        host = Math.ceil(Math.random() * 2);
        choice.splice(host, 1);
    }
    else{
        choice.splice(aindex,1);
        gindex = choice.indexOf(userGuess);
        choice.splice(gindex,1);
    }
    
    var secondChoice = [1,2,3];
    hindex = secondChoice.indexOf(choice[0]);
    secondChoice.splice(hindex, 1);
    hindex2 = secondChoice.indexOf(userGuess);
    secondChoice.splice(hindex2, 1);
    
    if(secondChoice == answer){
        win++;
    }
    else{
        lose++;
    }
}

console.log(win/1000);
console.log(lose/1000);
