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



// Question 20

function billCalculatorOfThreeItems(i1,i2,i3){
    total = i1 + i2 + i3

    console.log("The total is "+total+".Rs")
}



// Question 21

function backBalanceIndicator(bal){
    balance = 0

    if(bal >=0){
        balance="Positive"
    }

    else{
        balance="Negative"
    }

    console.log("Your bank balance is "+balance)
}



// Question 22

function evenGameIndicator(num){
    result = 0

    if(num%2==0){
        result="Win"
    }

    else{
        result="Lose"
    }

    console.log("You "+result)
}



// Question 23





// Question 24

function smallerNumberFinder(num1, num2){
    small = 0

    if(num1<num2){
        small = num1
    }

    else{
        small = num2
    }

    console.log("Smaller Number is "+small)
}



//Question 25

function voteElgibilityCheck(age){
    if (age>18){
        console.log("You are Eligible to vote")
    }

    else{
        console.log("You aren't Eligible to vote")
    }
}



//Question 26

function passOrNot(score){
    if(score>50){
        console.log("You passed the exam")
    }

    else{
        console.log("You didn't pass the exam")
    }
}



//Qestion 27

function findLargestQuatation(q1,q2,q3){
    lq=0

    if(q1>q2){
        if(q1>q3){
            lq = q1    
        }
        else if(q3>q2){
            lq = q3
        }
    }

    else if(q2>q3){
        lq = q2
    }

    else{
        lq=q3
    }

    console.log("The largest quotation is "+lq)
    
}



//Question 28

function cheapestAmongOption(i1,i2,i3){
    cp=0

    if(i1<i2){
        if(i1<i3){
            cp=i1
        }

        else if(i3<i2){
            cp=i3
        }
    }

    else if(i2<i3){
        cp=i2
    }

    else{
        cp=i3
    }

    console.log("Cheapest among given is "+cp)
}



//Question 29

function multiOfFive(num){
    if(num%5==0){
        console.log("Approved")
    }

    else{
        console.log("Not Approved")
    }
}



//Question 30

function maintenanceCheck(day){
    if(day%3==0 && day%5==0){
        console.log("Maintenance day")
    }

    else{
        console.log("Not Maintenance day")
    }
}



//Question 31

function leapYearFinder(year){
    if((year%4==0 && year%100!=0) || y%400==0){
        console.log("Leap year")
    }

    else{
        console.log("Not leap year")
    }
}



//Question 32

function vowelOrConsonant(letter){
    if(letter==="a" || letter==="e" || letter==="i" || letter==="o" || letter==="u" ||letter==="A" || letter==="E" || letter==="I" || letter==="O" || letter==="U" ){
        console.log("Vowel")
    }

    else{
        console.log("Consonent")
    } 
}



//Question 33

function findMultipulsOfTen(num){
    if(num%10==0){
        console.log("Number of items are in multipul of 10")
    }

    else{
        console.log("Number of items arn't in multipul of 10")
    }
}



//Question 34

function weatherFinder(temp){
    if(temp>0){
        console.log("Positive")
    }

    else if(temp<0){
        console.log("Negative")
    }

    else{
        console.log("Zero")
    }
}



//Question 35

function clubMembershipAcceptance(memnum){
    if(memnum>=1 && memnum<=100){
        console.log("Accepted")
    }

    else{
        console.log("Rejected")
    }
}



//Question 36

function lotteryDigits(num){
    if(num.legnth===0){
        console.log("Approved")
    }

    else{
        console.log("Not Approved")
    }
}
//Dosen't function



// Question 37

function caseCheck(letter){
    if(letter===/[A-Z]/){
        console.log("Uppercase")
    }

    else{
        console.log("Lowercase")
    }
}
//Doesn't function



// Question 38

function compareAge(a1,a2){
    if(a1>a2){
        console.log(a1 +" is older")
    }

    else{
        console.log(a2+" is older")
    }
}



// Question 39

function elderDiscount(age){
    if(age>=60){
        console.log("Apply discount")
    }

    else{
        console.log("No discount provided")
    }
}



// Question 40 

function ageClassFinder(age){
    if(age>0 && age<120){
        if(age<13){
            console.log("Children")
        }

        else if(age<20){
            console.log("Teenagers")
        }

        else{
            console.log("Adults")
        }
    }

    else{
        console.log("Invalid ago")
    }
}



//Question 41

function gradeAssigner(marks){
    re=0
    if(marks>0 && marks<=100){
        if(marks>75){
            re="A"
        }
        else if(marks>65){
            re="B"
        }
        else if(marks>55){
            re="C"
        }
        else if(marks>45){
            re="D"
        }
        else{
            re="F"
        }
    }

    else{
        console.log("Invalide marks")
    }

    console.log("Your grade is "+re)
}



//Question 42

function calc(a, operator, b){
    let result=0
    switch(operator){
        case "+":
            result = a+b
            break;
        case "-":
            result = a-b
            break;
        case "*":
            result = a*b
            break;
        case "/":
            result =a/b
            break;

        default:
            console.log("Invalid operator")
    }
    console.log(result)
}



//Question 43

function classiiftTriangle(s1,s2,s3){
    if(s1===s2 && s1===s3){
        console.log("Equilateral")
    }

    else if(s1===s2 || s1===s3 || s2===s3){
        console.log("Isosceles")
    }

    else{
        console.log("Scalene")
    }
}



//Question 44

function trangleVerification(s1,s2,s3){
    if((s1+s2)>s3 || (s1+s3)>s2 || (s2+s3)>s1){
        console.log("Is Triangle")
    }

    else{
        console.log("Not Triangle")
    }
}



//Question 45

function highScore(s1,s2,s3,s4){
    if (s1>s2 && s1>s3 && s1>s4){
        console.log("Higest score is "+s1)
    }

    else if (s2>s1 && s2>s3 && s2>s4){
        console.log("Higest score is "+s2)
    }

    else if (s3>s1 && s3>s2 && s3>s4){
        console.log("Higest score is "+s3)
    }

    else {
        console.log("Higest score is "+s4)
    }
}



//Question 46

function lowestQutation(q1,q2,q3,q4){
    if (q1<(q2,q3,q4)){
        console.log(q1+" is the cheapest quotation")
    }

    else if(q2<(q1,q3,q4)){
        console.log(q2+" is the lowest quotation")
    }

    else if(q3<(q1,q2,q4)){
        console.log(q3+" is the lowest quotation")
    }

    else{
        console.log(q4+" is the lowest quotation")
    }
}



//Question 47

function centuryLeapYear(year){
    if(year%400==0){
        console.log("Century leap year")
    }

    else{
        console.log("Not century leap year")
    }
}



