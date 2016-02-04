process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

function main(input){
// Your code should come here
  if(input == "Alice")
    console.log("Hello "+input);
  else if(input == "Bob")
    console.log("Hello "+input);
  else {
      process.exit();
    }
}
