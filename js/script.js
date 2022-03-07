
//  var submit = document.getElementById('submit');

// submit.addEventListener('click',(event)=>{
//     event.preventDefault();
//      var month = document.getElementById('month').value;
// console.log(month);
// var date = document.getElementById('date').value;
// console.log(date);
// var year = document.getElementById('year').value;
// console.log(year);
// })

// var submit = addEventListener ('click', function (event){
//     event.preventDefault();
//     console.log(submit)
//         let month = document.getElementById('month').value;
//         console.log(month)
//         let date = document.getElementById('date').value;
//         console.log(date)
//         let year = document.getElementById('year').value;
//         console.log(year)
//     let gender = document.getElementById('gender').value;
//         console.log(gender);

//         let calculate; {
//             var CC = year.slice(0,2);
//             console.log(CC);
//             var YY = year.slice(2,4);
//             console.log(YY);
//             var DD = date;
//             console.log(DD);
//             var MM = month;
//             console.log(MM);
//             (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
//             console.log(d);
            
//             // return calculate;
//         }
//         if (date < 1 || date >31){
// alert('invalid')};
// if (month.value < 0 || date.value > 12) {

//     alert("invalid Date of Birth! ")
// }
let akanMale =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let akanFemale =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let button = document.getElementById("btn");
// alert("OK")
let form = document.getElementById("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // date constructor
    let formData = new FormData(e.target);
    let myDate = new Date(formData.get("name"));
    let birthDay = myDate.getDay();
    alert(birthDay)
    // gender fuctionality
    var gender = document.getElementsByName("gender");
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            var genderValue = gender[i].value;
    }
    // gender pick statements
    if (genderValue === "female"){
        document.getElementById("congrats").innerHTML = ("HURRAY");
        document.getElementById("congrats").style.color = "#CCD6F6"
        document.getElementById("second").innerHTML = (" You were born on" +days[birthDay]+ "And your Akan name is" +akanFemale[birthDay]);
        alert(akanFemale)
    }
    else{
        document.getElementById("congrats").innerHTML = ("HURRAY");
        document.getElementById("congrats").style.color = "#CCD6F6"
        document.getElementById("second").innerHTML = (" You were born on" +days[birthDay]+ "And your Akan name is" +akanMale[birthDay]);
        alert(akanMale)
    }
})