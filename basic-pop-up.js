function Popup(content) {
    this.content = content;
}
Popup.prototype.element = null;
Popup.prototype.show = function (node) {
    node.appendChild(this.element);
}
Popup.prototype.hide = function () {
    this.element.remove();
}