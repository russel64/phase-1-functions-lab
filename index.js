// Code your solution in this file!


function distanceFromHqInBlocks(num1){
    return Math.abs(42 - num1);
}

function distanceFromHqInFeet(num1) {
    return Math.abs(distanceFromHqInBlocks(num1) * 264);
  }

function distanceTravelledInFeet(num1, num2) {
    return Math.abs((num1 - num2) * 264);
  }

function calculatesFarePrice(num1, num2){
    const distance = Math.abs((num1 - num2) * 264);
        if (distance <= 400) {
            return parseInt(0)
        } else if (distance > 400 && distance < 2000){ //distance>2000
           return (distance - 400) * .02
        } else if (distance > 2000 && distance < 2500){
            return 25
        } else if (distance > 2500){
            return 'cannot travel that far'
        }
    }
