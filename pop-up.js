var centerPopupContainer = document.getElementsByClassName("centerPopup")[0];
var centerPopupButton = document.getElementById("centerPopupButton");
centerPopupButton.addEventListener("click", showCenterPopup);

document.getElementsByClassName("rightPopup")[0].addEventListener("click", function(event) {
    var status = event.target.dataset.status;
    var content = event.target.dataset.content;

    if(status) {
        showRightPopup(content, status);
    }
});

var div = document.createElement('div');
div.className = "toastNotifications";
document.body.append(div);

function showCenterPopup() {
    var centerPop = new CenterPopup("Modal pop-up");
    centerPop.show(centerPopupContainer);
}

function showRightPopup(content, status) {
    var rightPopup = new RightPopup(content, status);
    rightPopup.show(div);
}



