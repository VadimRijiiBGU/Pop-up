var centerPopupContainer = document.getElementsByClassName("centerPopup")[0];
var centerPopupButton = document.getElementById("centerPopupButton");
centerPopupButton.addEventListener("click", showCenterPopup);

document.getElementsByClassName("rightPopup")[0].addEventListener("click", function(event) {
    var status = event.target.dataset.status;

    if(status) {
        showRightPopup(status);
    }
})

let div = document.createElement('div');
div.className = "toastNotifications";
document.body.append(div);






