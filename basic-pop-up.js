function Popup(content) {
    this.content = content;
    this.element = null;
}
Popup.prototype.show = function (node) {
    node.appendChild(this.element);
};
Popup.prototype.hide = function () {
    this.element.classList.add("fade");
    document.getElementsByClassName("fade")[0].style.opacity = 0;
    setTimeout(this.element.remove.bind(this.element), 1000);
};