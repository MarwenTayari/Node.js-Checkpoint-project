/*baby-steps*/ 
var args = process.argv; 
args = args.splice(2,args.length); 
var answer = args.reduce( (a,b) => Number(a) + Number(b) ); 
console.log(answer); 