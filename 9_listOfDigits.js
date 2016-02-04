process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");

function main(n){
// Your code should come here
  var i = parseInt(n);
  var arr = [];
  while(i>0){
    arr.push(i%10);
    i = Math.floor(i/10);
  }
  for(i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
  }
  process.exit();
}
