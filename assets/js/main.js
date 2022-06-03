var timeBlock = document.querySelectorAll("textarea");
var timeblockHour = document.querySelectorAll('.time-block')
var timeNow = moment().format('ha');
console.log(timeNow)



function time() {
    var currentTime = moment().format('dddd, MMMM Do');
    var textToAdd = document.createTextNode(currentTime);
    var currentDay = document.getElementById('currentDay')
    currentDay.appendChild(textToAdd)

}




function textAreaColor() {
    for (let i = 0; i < timeBlock.length; i++) {
        for (let i = 0; i < timeblockHour.length; i++) {
            if (timeblockHour[i].id === timeNow) {
                timeBlock[i].setAttribute("style", "background-color: red")
            } else if (timeblockHour[i].id > timeNow) {
                timeBlock[i].setAttribute("style", "background-color: green")
            } else if (timeblockHour[i].id < timeNow) {
                timeBlock[i].setAttribute("style", "background-color: #D3D3D3")

            }
        };
    };
};

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var time = this.parentElement.innerText
        var text = this.parentElement.children[1].value
        var textArea = this.id
        localStorage.setItem(time, text);
        console.log(time)
    });
    $.each(timeBlock, function () {
        $(this).val(localStorage.getItem(this.parentElement.innerText));
    });
});






time()

textAreaColor()







