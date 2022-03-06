
var submit = document.getElementById = ('submit');
submit.addEventListener('click', ()=>{
    var month = document.getElementById('month').value;
    var date = document.getElementById('date').value;
    var year = document.getElementById('year').value;
    var dayBirth = new Date(`${year}-${month}-${date}`);
    alert(dayBirth);

}
)
function calculate(){
    var CC = year. value.slice(0,2);
    var YY = year.value.slice(2,3);
    var DD = date.value;
    var MM = month.value;

    (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7




}







