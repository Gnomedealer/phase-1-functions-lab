function distanceFromHqInBlocks(someValue){
    return Math.abs(42 - someValue)
}

function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264 
}

function calculatesFarePrice(start, destination) {
    let x = distanceTravelledInFeet(start, destination)
    if (x <= 400){
        return 0
    }
    if (x > 400 && x <= 2000){
        return 0.02 * (x - 400)
    }
    if (x > 2000 && x < 2500){
        return 25
    }
    if (x > 2500)
        return 'cannot travel that far'
  }