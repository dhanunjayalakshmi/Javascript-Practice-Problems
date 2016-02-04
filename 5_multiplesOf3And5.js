process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");

function main(n){
// Your code should come here
  var j = parseInt(n);
  var sum  = 0;
  for (var i = 1; i <= j; i++){
      if(((i%3)==0 || (i%5)==0) && ((i%15)!=0)){
        sum += i;
      }
  }
  console.log("Sum is: "+sum);
  process.exit();
}
