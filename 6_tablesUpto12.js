process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");;

function main(input){
// Your code should come here
  var j = parseInt(input);
  for(var i=1;i<=12;i++){
    console.log(j+" * "+i+" = "+i*j);
  }
  process.exit();
}
