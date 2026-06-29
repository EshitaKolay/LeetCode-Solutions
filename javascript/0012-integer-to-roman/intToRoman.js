/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let str = num.toString();   //converting number into string for itteration
    let extract=[];   // array for storing the digits place value

    //for loop for extacting the place values
    for(let i=0; i<str.length;i++){
        // using "*" implicitly converts string into number
        let placeValue = str[i]*Math.pow(10,str.length-1-i);
        extract.push(placeValue);
    }
    //Extract =[3000,700,40,9]

    let result="";   //stores the final answer

    //creating loop for iteration through out the array extract
    for(let j=0; j<extract.length; j++){

        let val=extract[j];   //current iteration value

        //if value is 0 skips the current iteration
        if(val==0){
            continue;
        }
        //Place value: 1000 "M"
        else if(val>=1000){
            //value greater than 1000
            if(val>1000){
                for(let i=1;i<=Math.floor(extract[j]/1000);i++){
                    result+="M";
                }
            }
            else{
                result+="M";
            }
        }
        //Place value 100
        else if(val>=100){
            //value: 900
            if(val==900){
                result+="CM";
            }
            //vlaue: 400
            else if(val==400){
                result+="CD"
            }
            //value greater then or equal to500
            else if(val>=500){
                //value is greater than 500
                if(val>500){
                    result +="D";
                    val-=500;
                    //for loop for finding rest
                    for(let i=1;i<=Math.floor(val/100);i++){
                        result+="C";
                    }
                }
                else{
                    result+="D";
                }
            //value is greater than 100
            }
            else if(val>100){
                result+="C";
                val-=100;
                for(let i=1; i<=Math.floor(val/100); i++){
                    result+="C";
                }
            }
            else{
                result+="C";
            }

        }
        //Place value: 10
        else if(val>=10){
            //value: 90
            if(val==90){
                result+="XC";
            }
            //value: 40
            else if(val==40){
                result+="XL";
            }
            //if value is greater then or equale to 50
            else if(val>=50){
                //value is greater then 50
                if(val>50){
                    result+="L";
                    val-=50;
                    //for loop for finding rest
                    for(let i=1; i<=Math.floor(val/10);i++){
                        result+="X";   
                    }
                }
                else{
                    result+="L";
                }
            }
            //value is greater than 10
            else if(val>10){
                result+="X";
                val-=10;
                for(let i=1;i<=Math.floor(val/10);i++){
                    result+="X"
                }
            }
            //value: 10
            else{
                result+="X";
            }
        }
        //Place value: 1
        else if(val>=1){
            //value: 9
            if(val==9){
                result+="IX";
            }
            //value:4
            else if(val==4){
                result+="IV";
            }
            //value is greater than or equal to 5
            else if(val>=5){
                //value is greater than 5
               if(val>5){
                 result+="V";
                val-=5;
                for(let i=1; i<=val;i++){
                    result+="I";
                }
               }
               else{
                result+="V";
               }
            }
            //value is greater than 1
            else if(val>1){
                result+="I";
                val-=1;
                for(let i=1;i<=val;i++){
                    result+="I";
                }
            }
            else{
                result+="I";
            }

        }
    }
    return result;
};
