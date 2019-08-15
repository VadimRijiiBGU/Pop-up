function CenterPopup(content) {
    Popup.call(this, content);
    this.element = this.createPopup(content);
}
CenterPopup.prototype = Object.create(Popup.prototype);
CenterPopup.prototype.hide = function() {
    Popup.prototype.hide.call(this);
}
CenterPopup.prototype.createPopup = function(content) {
    var centerPopup = document.createElement('div');
    centerPopup.classList.add('modal');
    var centerPopupContent = document.createElement('div');
    centerPopupContent.classList.add('modalWindowContent');
    var paragraph = document.createElement('p');
    paragraph.innerText = this.content;
    centerPopupContent.appendChild(paragraph);
    centerPopup.appendChild(centerPopupContent);

    return centerPopup;
}

function showCenterPopup() {
    var centerPop = new CenterPopup("Modal pop-up");
    centerPop.show(centerPopupContainer);
    console.log(centerPop.element.getElementsByClassName('modalWindowContent')[0]);
    window.onclick = function(element) {
        if(element != null) {
            if (element.target == centerPop.element) {
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