// const url="https://api.spotify.com/v1";

// .json(url).then(function(data){
//     console.log(data);
// });

// const dataPromise =.json(url);
// console.log("Data Promise: ", dataPromise);


var scoops = 5;
while(scoops > 0){
    document.write("Another Scoop!<br>")
    scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");


for(let number = 0;number <=10; number=number+2){
    document.write("Number:")
    number = number + 2;
    console.log(number);
}
document.write("Past 10")

for(var number = 0; number <= 10; number = number + 2) {
    if( number % 2 == 0){
        console.log(number);
    } else {
        console.log("Past ten")
    }
}