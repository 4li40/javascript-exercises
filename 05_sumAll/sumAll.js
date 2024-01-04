const sumAll = function(nb1,nb2) {

    if(!Number.isInteger(nb1) || !Number.isInteger(nb2)) return "ERROR";
    if(nb1 < 0 || nb2 < 0) return "ERROR";
    if(nb1 > nb2){
        const temp = nb1;
        nb1 = nb2;
        nb2 = temp;
    }

    let sum = 0;
    for(let i = nb1; i <= nb2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
