var bin2dec = function(string){
  var total = 0;
  var position = 0;
  for(i = string.length; i > 0; i--){
    if(parseInt(string.charAt(i - 1)) === 1 ){
      total += Math.pow(2,position);
    }
    position +=1;
  }

  return total;
}

debugger;
console.log(bin2dec("1100000"))
