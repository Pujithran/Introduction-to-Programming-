// Electricity bill calculator

function bill(unit){
    
    fixed=0

    rate=0

    total=0
    
    if (unit > 0 && unit < 60){
        
        if (unit < 30){
            fixed=80
            rate=5
        }
        
        else{
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
            fixed=400
            rate=20
        }

        else if (unit < 120){
            fixed=1000
            rate=28
        }

        else if (unit < 180){
            fixed=1500
            rate=44
        }

        else {
            fixed=2100
            rate=85
        }
    
    }

    total = rate*unit + fixed

    console.log("Your total bill is "+total+".Rs")

}

bill(280)