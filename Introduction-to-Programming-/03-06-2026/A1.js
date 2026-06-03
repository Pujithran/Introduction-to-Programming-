function Number(num){
    let number = num

    if(number >= 0){
        console.log("Given Number is positive")
    }

    else{
        console.log("Given Number is Negative")
    }
}

Number(-3)




function OOE(num){
    Number=num
    
    if (Number % 2 == 0){
        console.log("Given number is Even")
    }

    else{
        console.log("Given number is Odd")
    }
}

OOE(6)



function MultiplesOfFive(num){
    Number = num 

    if (Number % 5 == 0){
        console.log("The given number can be divided by Five")
    }

    else{
        console.log("The given number can not be divided by Five")
    }
}

MultiplesOfFive(20)