
var submit = document.getElementById = ('submit');
submit.addEventListener('click', ()=>{
    var month = document.getElementById('month').value;
    var date = document.getElementById('date').value;
    var year = document.getElementById('year').value;
    var dayBirth = new Date(`${year}-${month}-${date}`);
    alert(dayBirth);

}
)







