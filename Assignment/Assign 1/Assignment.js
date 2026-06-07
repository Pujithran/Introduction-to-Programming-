// Question 1

function display(){
    console.log("Hello, World!")
}



// Question 2

function displayName(name){
    console.log("The student's name is "+name)
}



// Question 3

function ptAge(age){
    console.log("The Patient's age is "+age)
}



// Question 4

function totalPrice(it1, it2){
    item1Price = it1
    item2Price = it2

    total = it1 + it2

    console.log("Total is "+total)
}



// Question 5

function differenceInPrice(paid, price){
    amountPaid = paid
    costOfTheTotal = price

    differenceInPrice = costOfTheTotal - amountPaid

    console.log("Balance is "+differenceInPrice)
}



// Question 6

function calculateTotalProducts(rows, columns){
    totalProducts = rows*columns

    console.log("Total number of products are "+totalProducts)
}



// Question 7

function divideByGroup(studs,groups){
    numberOfStudent = studs
    numberOfGroups = groups

    temp1 = numberOfStudent%numberOfGroups

    numberOfStudent -= temp1

    quotationPerGroups = numberOfStudent/numberOfGroups

    console.log("A group may contain "+quotationPerGroups+" students")
}



// Question 8

function findRemaining(studs,groups){
    numberOfStudent = studs
    numberOfGroups = groups

    remainingStuds = numberOfStudent%numberOfGroups

    console.log("Number of ungrouped students are "+remainingStuds)
}



// Question 9

function findAreaOfSquare(side){
    legnthOfSide = side
    
    area = legnthOfSide**2

    console.log("Area of the square is "+area)
}



// Question 10

function volumeOfCube(side){
    legnthOfSide = side

    volume = side**3

    console.log("Volume of the cube is "+volume)
}



// Question 11

function areaOfRectangle(s1,s2){
    legnth = s1
    width = s2

    area = legnth*width

    console.log("Area of the rectangle is "+area)
}



// Question 12

function perimeterOfRectangle(s1,s2){
    legnth = s1
    width = s2

    perimeter = 2*(legnth + width)

    console.log("The perimeter of the rectangle is "+perimeter)
}



// Question 13

function areaOfCircle(rad){
    radiousOfTheCircle = rad

    const pi = 22/7

    area = pi*radiousOfTheCircle**2

    console.log("Area of the circle is "+area)
}



// Question 14

function circumferenceOfCircle(rad){
    radiousOfTheCircle = rad

    const pi = 22/7

    circumference = 2*pi*radiousOfTheCircle

    console.log("The circumference of the circle is "+circumference)
}



// Question 15

function CelsiusToFahrenheit(cel){
    fahrenheite = cel*9/5 + 32

    console.log(cel+"°C in Fahrenheit is "+fahrenheite+"°F")
}



// Question 16

function FahrenHeitToCelcius(fah){
    celcius = (fah-32)*5/9

    console.log(fah+"°F in Celcius is "+celcius+"°C")
}



// Question 17

function averageOfStudents(m1, m2, m3){
    avg = (m1+m2+m3)/3

    console.log("Average of three given marks is "+avg)
}



// Question 18

function swapScore(s1,s2){
    console.log("Before swapping Student 1's score was "+s1+" and student 2's score was "+s2)

    temp = 0

    temp = s1
    s1 = s2
    s2 = temp

    console.log("After swapping Student 1's score is "+s1+" and student 2's score is "+s2)
}



// Question 19 

function minutesToHours(mins){
    extraMins = mins%60

    hrs = (mins - extraMins)/60

    console.log("Movie's duration is "+hrs+"hrs "+extraMins+"mins")
}

minutesToHours(250)