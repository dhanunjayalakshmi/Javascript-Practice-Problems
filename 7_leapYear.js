process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter an year: ");

function main(n){
// Your code should come here
  var year = parseInt(n);
  var i = year%4;
  year -= i;
  for(i = 1; i<=100; i++)
  {
    year += 4;
    console.log(year);
  }
  process.exit();
}
