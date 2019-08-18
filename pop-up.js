var centerPopupContainer = document.getElementsByClassName("centerPopup")[0];
var centerPopupButton = document.getElementById("centerPopupButton");
centerPopupButton.addEventListener("click", showCenterPopup);

document.getElementsByClassName("rightPopup")[0].addEventListener("click", function(event) {
    var status = event.target.dataset.status;

    if(status) {
        showRightPopup(status);
    }
});

var div = document.createElement('div');
div.className = "toastNotifications";
document.body.append(div);

function showCenterPopup() {
    var centerPop = new CenterPopup("Modal pop-up");
    centerPop.show(centerPopupContainer);
    window.onclick = function(element) {
        if(element) {
            if (element.target === centerPop.element) {
                var opacity = 1;
                var start = Date.now();
                var timer = setInterval(function () {
                    var currentTime = Date.now() - start;
                    if(currentTime >= 1000) {
                        clearInterval(timer);
                        centerPop.hide();
                        return;
                    }
                    draw();
                }, 100);
                function draw() {
                    centerPop.element.getElementsByClassName('modalWindowContent')[0].style.opacity = opacity / 1.5;
                    opacity /= 2;
                }
                //centerPop.hide();
            }
        }
    }
}




