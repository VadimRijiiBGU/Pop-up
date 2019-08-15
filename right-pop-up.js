function RightPopup(content) {
    Popup.call(this, content);
    this.element = this.createPopup(content);
}
RightPopup.prototype.timer = null;
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
                console.log(element.element);
                element.hide();
                return;
            }
            draw();
        }, 100);

        function draw() {
            element.element.style.opacity = opacity / 2;
            opacity /= 2;
        }
        //this.hide();
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

    /*var closeElement = document.createElement('span');
    closeElement.innerHTML = "&times;";
    closeElement.classList.add("close");
    closeElement.addEventListener("click", function () {
        var start = Date.now();
        var opacity = 1;
        var timer = setInterval(function () {
            var currentTime = Date.now() - start;
            if(currentTime >= 1000) {
                clearInterval(timer);
                return;
                this.hide();
            }
            draw();
        }, 100);

        function draw() {
            console.log(this.element);
            this.element.style.opacity = opacity / 2;
            opacity /= 2;
        }
        this.hide();
        clearTimeout(this.timer);
    }.bind(this));*/

    popupElement.appendChild(paragraph);
    popupElement.appendChild(special);
    //popupElement.appendChild(closeElement);

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
            console.log(rightPopup);
            rightPopup.element.style.opacity = opacity / 2;
            opacity /= 2;
        }
        //this.hide();

    }.bind(rightPopup));


    rightPopup.show(div);
}