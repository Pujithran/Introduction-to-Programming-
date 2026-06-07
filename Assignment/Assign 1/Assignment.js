// Question 1

function main1(){
    display()
}

function display(){
    console.log("Hello, World!")
}



// Question 2

function main2(){
    displayName("John")
}

function displayName(name){
    console.log("The student's name is "+name)
}



// Question 3

function main3(){
    ptAge(47)
}

function ptAge(age){
    console.log("The Patient's age is "+age)
}



// Question 4

function main4(){
    totalPrice(1300, 3500)
}

function totalPrice(it1, it2){
    item1Price = it1
    item2Price = it2

    total = it1 + it2

    console.log("Total is "+total)
}



// Question 5

function main5(){
    differenceInPrice(4800, 5000)
}

function differenceInPrice(paid, price){
    amountPaid = paid
    costOfTheTotal = price

    differenceInPrice = costOfTheTotal - amountPaid

    console.log("Balance is "+differenceInPrice)
}

main1()
main2()
main3()
main4()
main5()