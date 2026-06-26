/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    let orignalNum,rem;
    let revNum = 0;
    orignalNum=x;
    while(x>0){
        rem=x%10;
        revNum=(revNum*10)+rem;
        x=Math.floor(x/10);
    }
    if(orignalNum==revNum){
        return true;
    }
    else{
        return false;
    }
};
