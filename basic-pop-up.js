'use-strict';

function Popup(content) {
    this.content = content;
    this.element = null;
}
Popup.prototype.show = function (node) {
    node.appendChild(this.element);
};
Popup.prototype.hide = function () {
    this.element.classList.add("fade");
    this.element.classList.add("hideModule");
    setTimeout(this.element.remove.bind(this.element), 1000);
};
