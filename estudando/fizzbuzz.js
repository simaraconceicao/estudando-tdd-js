let FIZZ = "fizz"
let BUZZ = "Buzz"

const processInteger = (integer) => {
    if(integer % 3 === 0 && integer % 5 === 0){
        return FIZZ+BUZZ
    }
    if(integer % 3 === 0){
        return FIZZ
    }
    if(integer % 5 === 0){
        return BUZZ
    }
}


module.exports = processInteger