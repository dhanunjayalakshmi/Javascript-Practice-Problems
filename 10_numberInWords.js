process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");
var ones = ["","One ","Two ","Three ","Four ","Five ","Six ","Seven ","Eight ","Nine ","Ten ","Eleven ","Twelve ","Thirteen ","Fourteen ","Fifteen ","Sixteen ","Seventeen ","Eighteen ","Nineteen "];
var tens = ["Twenty ","Thirty ","Forty ","Fifty ","Sixty ","Seventy ","Eighty ","Ninety "];
var place = ["Crore ","","Lakh ","","Thousand ","","Hundred ",""];

function main(n){
// Your code should come here
  if(n > 999999999)
  {
    console.log("Wrong number");
  }
  else
  {
    var i = n.length;
    var arr = n.split("").reverse();
    var j = 9 - i;
    while(j>0){
      arr.push("0");
      j--;
    }
    var a = arr.reverse().join("");
    var str = "";
    i = 0;
    j = 1;
    while(i<=7 && j<=8)
    {
      if(i==6){
        if(a[6]>0){str += ones[parseInt(a[6])]+place[i];}
        if(a[7]>0 || a[8]>0){
          str += "and ";
        }
        i += 1;
        j += 1;
      }
      else{
        m = parseInt(a[i]);
        p = parseInt(a[j]);
        var s = parseInt(a[i]+a[j]);
        if (s != 0){
          if(s>=1 && s<=19){
            str += ones[s]+place[i];
          }
          else{
            str += tens[m-2]+ones[p]+place[i];
          }
        }
        i+=2;
        j+=2;
      }
    }
    console.log(str);
  }
  process.exit();
}
