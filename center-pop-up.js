'use-strict';

function CenterPopup(content) {
    Popup.call(this, content);
    this.element = this.createPopup();
    this.fadeCenterPopup = CenterPopup.prototype.fadeCenterPopup.bind(this);
}

CenterPopup.prototype = Object.create(Popup.prototype);
CenterPopup.prototype.show = function(node) {
    Popup.prototype.show.call(this, node);
    window.addEventListener("click", this.fadeCenterPopup);
};

CenterPopup.prototype.hide = function() {
    Popup.prototype.hide.call(this);
    window.removeEventListener("click", this.fadeCenterPopup);
};

CenterPopup.prototype.fadeCenterPopup = function(event) {
    if(event) {
        if (event.target === this.element) {
            this.hide();
        }
    }
};

CenterPopup.prototype.createPopup = function() {
    var centerPopup = document.createElement('div');
    centerPopup.classList.add('modal');
    var centerPopupContent = document.createElement('div');
    centerPopupContent.classList.add('modalWindowContent');
    var paragraph = document.createElement('p');
    paragraph.innerText = this.content;
    centerPopupContent.appendChild(paragraph);
    centerPopup.appendChild(centerPopupContent);

    return centerPopup;
};

