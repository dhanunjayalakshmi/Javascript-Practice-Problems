process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");

function main(n){
// Your code should come here
  var z = parseInt(n);
  var sum = ((z*(z + 1))/2);
  console.log("Sum of 1 to "+ n +" digits is: "+sum);
  process.exit();
}
