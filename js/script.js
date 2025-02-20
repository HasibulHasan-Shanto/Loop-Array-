var num = new Array();
for(var i = 0; i<5; i++){
   num[i] = parseFloat(prompt("Enter the value"))
}

var sum = 0;
for(var i = 0; i<5; i++){
    console.log(num[i])
    sum = sum + num[i]
}
console.log(sum)