
// theme
$(document).ready(function () {
    $("#firstTheme").click(first);
    $("#secondTheme").click(switchBlue);
    $("#thirdTheme").click(switchYellow);

    function first() {
        $("body").attr("class", "color__first");
    }

    function switchBlue() {
        $("body").attr("class", "color__second");
    }

    function switchYellow() {
        $("body").attr("class", "color__third");
    }
});

// digitalClock function 
 digitalClock = () => {
    d = new Date();

    /*****************************
     *****************************
     **********time section********
     ******************************
     *******************************/

    // get hourse
    var hr = d.getHours();
    var hrDom = document.querySelector(".hr");
    var hour = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];

    // print hours
    if (hr > 13) {
        hrDom.innerHTML = hour[hr - 1];
    } else {
        hrDom.innerHTML = hr;
    }

    var min = (document.querySelector(".min").innerHTML = d.getMinutes());
    // print minutes 
    if (min < 10) {
        document.querySelector(".min").innerHTML = "0" + d.getMinutes();
    } else {
        min;
    }

    var sec = (document.querySelector(".sec").innerHTML = d.getSeconds());

    //    print second 
    if(sec < 10){
        document.querySelector(".sec").innerHTML = "0" + d.getSeconds()
    }else{
        sec;
    }

    /*****************************
     *****************************
    **********date section********
    ******************************
    *******************************/

    var day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    // print day 
    document.querySelector(".day").innerHTML = day[d.getDay()];

    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    // print month, date, year 
    document.querySelector(".date").innerHTML =
        month + " - " + day + " - " + year;

    var dateFormate = document.querySelector(".ampm");
 
    // print am pm 
    if(hr >= 12){
        dateFormate.innerHTML = "PM"
    }else{
        dateFormate.innerHTML = "AM"
    }
}

 // every second refresh setInterval .call function
 setInterval( () => { digitalClock(); }, 1000);