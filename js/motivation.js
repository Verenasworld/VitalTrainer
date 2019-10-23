var intervalle = new Array();
var i = 0;


Array.prototype.forEach.call(document.querySelectorAll(".motivation"), function (element) {
    let mywidth = 50 - (i * 10);
    element.setAttribute("style", "width: " + mywidth + %);
    element.setAttribute("data-i", i );
    element.setAttribute("data-width", mywidth);
    i++;

});

window.addEventListener("scroll", function (e) {
    var y = window.scrollY;

    Array.prototype.forEach.call(document.querySelectorAll("motivation"), function (element) {
        let rect = element.getBoundingClientRect();
        let started = element.getAttribute("data-started");

        if (rect.top < window.innerHeight - 100 && started == null){
            element.setAttribute("data-started","1");
            let i = element.getAttribute("data-i");
            intervalle[i] = window.setInterval(increase, 10, element);
        }

    });


});

//TODO  js projekt linked in flyInElemts js in Vital Trainer einbauen!
