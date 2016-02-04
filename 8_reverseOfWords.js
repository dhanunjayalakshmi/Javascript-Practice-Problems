process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a string: ");

function main(n){
// Your code should come here
  var str = n.split(" ");
  var str2 = "";
  for(var i =0; i<str.length; i++){
    str2 += str[i].split("").reverse().join("")+" ";
  }
  str2 = str2;
  console.log(str2);
  process.exit();
}
