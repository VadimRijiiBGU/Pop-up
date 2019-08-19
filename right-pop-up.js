'use-strict';

function RightPopup(content, status) {
    Popup.call(this, content);
    this.element = this.createPopup(status);
    this.timer = null;
}
RightPopup.prototype = Object.create(Popup.prototype);

RightPopup.prototype.show = function (node) {
    Popup.prototype.show.call(this, node);
    this.timer = setTimeout(function () {
        this.hide();
    }.bind(this), 5000)
};

RightPopup.prototype.createPopup = function (status) {
    var popupElement = document.createElement('div');
    popupElement.classList.add("notificationContent", status);
    var specialSymbol;
    switch(status) {
        case "error":
            specialSymbol = "&#9746";
            break;
        case "warning":
            specialSymbol = "&#9888;";
            break;
        case "success":
            specialSymbol = "&#9745;";
            break;
        case "info":
            specialSymbol = "&iquest;";
            break;
    }
    var paragraph = document.createElement('p');
    paragraph.innerText = this.content;
    var special = document.createElement('span');
    special.innerHTML = specialSymbol;
    special.classList.add("specialSymbol");
    var closeElement = document.createElement('span');
    closeElement.innerHTML = "&times;";
    closeElement.classList.add("close");
    closeElement.addEventListener("click", function () {
        clearInterval(this.timer);
        this.hide();

    }.bind(this));

    popupElement.appendChild(paragraph);
    popupElement.appendChild(special);
    popupElement.appendChild(closeElement);
    return popupElement;

};
