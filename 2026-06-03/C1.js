// Electricity bill calculator

function bill(unit){
    
    fixed=0

    rate=0

    total=0

    temp=0
    
    if (unit > 0 && unit < 60){
        
        if (unit < 30){
            fixed=80
            rate=5
        }
        
        else{
            temp=unit-30
            fixed=210
            rate=9
        }
    
    }

    else if (unit > 60){

        if (unit == 60){
            fixed=0
            rate=14
        }

        else if (unit < 90){
            temp=unit-60
            fixed=400
            rate=20
        }

        else if (unit < 120){
            temp=unit-90
            fixed=1000
            rate=28
        }

        else if (unit < 180){
            temp=unit-120
            fixed=1500
            rate=44
        }

        else {
            temp=unit-180
            fixed=2100
            rate=85
        }
    
    }

    total = (rate*temp) + fixed

    console.log("Your total bill is "+total+".Rs")

}

bill(300)