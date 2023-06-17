function letterCombinations(input_digit) {
  //Complete the function
    let res=[];
    let charObj={
				"0":"0",
				"1":"1",
                "2":"abc", 
                "3":"def",
                "4":"ghi",
                "5":"jkl",
                "6":"mno",
                "7":"pqrs", 
                "8":"tuv", 
                "9":"wxyz"
                };
                
    function backTrack(digInd,curStr)
	{
        if(curStr.length==input_digit.length){
            res.push(curStr);
            return;
        }
        for(let i=0;i<charObj[input_digit.charAt(digInd)].length;i++){
            backTrack(digInd+1,curStr+charObj[input_digit.charAt(digInd)].charAt(i));
        }

    }

    backTrack(0,"");

    return res;
}

module.exports = letterCombinations;
