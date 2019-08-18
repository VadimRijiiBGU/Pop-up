function Popup(content) {
    this.content = content;
    this.element = null;
}
Popup.prototype.show = function (node) {
    node.appendChild(this.element);
};
Popup.prototype.hide = function () {
    this.element.remove();
};
