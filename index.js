function distanceFromHqInBlocks(input) {
    if (input >= 42){
        return (input - 42);
    }else {
        return (42 -input)
    }
}
function distanceFromHqInFeet(input){
    if (input >= 42){
        return ((input -42)*264)
    }else {
        return ((42- input)*264)
    }
}
function distanceTravelledInFeet(input1, input2){
    if (input1 >= input2){
        return ((input1 - input2)*264)
    }else {
        return ((input2 - input1)* 264)
    }
}
function calculatesFarePrice (input1, input2){
    if (distanceTravelledInFeet(input1,input2) <= 400){
        return 0;
    }else if (distanceTravelledInFeet(input1,input2) >400 && distanceTravelledInFeet(input1,input2) < 2000){
        return ((distanceTravelledInFeet(input1,input2) -400)*.02);
    }else if (distanceTravelledInFeet(input1,input2) >= 2000 && distanceTravelledInFeet(input1,input2) <= 2500){
        return 25;
    }else if (distanceTravelledInFeet(input1,input2) > 2500){
        return 'cannot travel that far';
    }
}