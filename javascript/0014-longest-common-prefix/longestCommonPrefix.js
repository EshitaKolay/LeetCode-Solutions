/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let match = strs[0];
    for(let i=1; i<strs.length; i++){
        let nextWord = strs[i];
        while(!nextWord.startsWith(match)){
            match = match.slice(0,-1);
        }
    }
    return match;
};
