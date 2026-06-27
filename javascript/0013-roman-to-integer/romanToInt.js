/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = s.split('');
    let sum = 0;

    for(let i=0; i<roman.length; i++){
        if(roman[i]=="I" && roman[i+1]=="V"){
            sum+=4;
            i++;
        }
        else if(roman[i]=="I" && roman[i+1]=="X"){
            sum+=9;
            i++;
        }
        else if(roman[i]=="X" && roman[i+1]=="L"){
            sum+=40;
            i++;
        }
        else if(roman[i]=="X" && roman[i+1]=="C"){
            sum+=90;
            i++;
        }
        else if(roman[i]=="C" && roman[i+1]=="D"){
            sum+=400;
            i++;
        }
        else if(roman[i]=="C" && roman[i+1]=="M"){
            sum+=900;
            i++;
        }
        else if(roman[i]=="I"){sum+=1;}
        else if(roman[i]=="V"){sum+=5;}
        else if(roman[i]=="X"){sum+=10;}
        else if(roman[i]=="L"){sum+=50;}
        else if(roman[i]=="C"){sum+=100;}
        else if(roman[i]=="D"){sum+=500;}
        else if(roman[i]=="M"){sum+=1000;}
    }

    return sum;
};
