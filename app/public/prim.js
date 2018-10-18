var num =57473452
var holder
var holderTwo
console.log(prim_checker())
function prim_checker(num){
   for (i = 2 ; i < num; i++){
	holder= num/ i
	holderTwo = Math.floor(holder)-holder
	if (holderTwo === 0){    //math is psudo code for function that sees if ther numbers after the decimal point
		return(false)
	}
}
    return true
}