
 var submit = document.getElementById('submit');

// submit.addEventListener('click',(e)=>{
//     e.preventDefault();
//      var month = document.getElementById('month').value;
// console.log(month);
// var date = document.getElementById('date').value;
// console.log(date);
// var year = document.getElementById('year').value;
// console.log(year);
// })

var submit = addEventListener ('click', function (e){
    e.preventDefault();
    console.log(submit)
        let month = document.getElementById('month').value;
        console.log(month)
        let date = document.getElementById('date').value;
        console.log(date)
        let year = document.getElementById('year').value;
        console.log(year)
    let gender = document.getElementById('gender').value;
        console.log(gender);

        let calculate; {
            var CC = year.slice(0,2);
            console.log(CC);
            var YY = year.slice(2,4);
            console.log(YY);
            var DD = date;
            console.log(DD);
            var MM = month;
            console.log(MM);
            (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
            console.log(d);
            
            // return calculate;
        }
        if (date < 1 || date >31){
alert('invalid')};
if (month.value < 0 || date.value > 12) {

    alert("invalid Date of Birth! ")
}
})









