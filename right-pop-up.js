function RightPopup(content) {
    Popup.call(this, content);
    this.element = this.createPopup(content);
    this.timer = null;
}
RightPopup.prototype = Object.create(Popup.prototype);

RightPopup.prototype.show = function (node) {
    Popup.prototype.show.call(this, node);
    var element = this;
    this.timer = setTimeout(function () {
        var start = Date.now();
        var opacity = 1;
        var timer = setInterval(function () {
            var currentTime = Date.now() - start;
            if(currentTime >= 1000) {
                clearInterval(timer);
                element.hide();
                return;
            }
            draw();
        }, 100);

        function draw() {
            element.element.style.opacity = opacity / 2;
            opacity /= 2;
        }
    }.bind(this), 5000)
};

RightPopup.prototype.createPopup = function (status) {
    var popupElement = document.createElement('div');
    var content;
    popupElement.classList.add("notificationContent", status);
    var specialSymbol;
    switch(status) {
        case "error":
            specialSymbol = "&#9746";
            content = "Error!";
            break;
        case "warning":
            specialSymbol = "&#9888;";
            content = "Warning!";
            break;
        case "success":
            specialSymbol = "&#9745;";
            content = "Success!";
            break;
        case "info":
            specialSymbol = "&iquest;";
            content = "Info!";
            break;
    }
    var paragraph = document.createElement('p');
    paragraph.innerText = content;
    var special = document.createElement('span');
    special.innerHTML = specialSymbol;
    special.classList.add("specialSymbol");
    popupElement.appendChild(paragraph);
    popupElement.appendChild(special);

    return popupElement;

};

function showRightPopup(status) {
    var closeElement = document.createElement('span');
    closeElement.innerHTML = "&times;";
    closeElement.classList.add("close");
    var rightPopup = new RightPopup(status);
    rightPopup.element.appendChild(closeElement);

    closeElement.addEventListener("click", function () {
        var start = Date.now();
        var opacity = 1;
        var timer = setInterval(function () {
            var currentTime = Date.now() - start;
            if(currentTime >= 1000) {
                clearInterval(timer);
                clearTimeout(rightPopup.timer);
                rightPopup.hide();
                return;
            }
            draw();
        }, 100);

        function draw() {
            rightPopup.element.style.opacity = opacity / 2;
            opacity /= 2;
        }
    }.bind(rightPopup));


    rightPopup.show(div);
}
