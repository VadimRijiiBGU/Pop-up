function CenterPopup(content) {
    Popup.call(this, content);
    this.element = this.createPopup();
}
CenterPopup.prototype = Object.create(Popup.prototype);

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


