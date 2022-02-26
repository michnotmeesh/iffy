(function() {
    "use strict";

    var input = document.getElementById('userInput');
    var button = document.getElementById('solve');
    var solution = document.getElementById('solution');

    document.getElementById('solve').addEventListener("click", function() {
        if (input == 3) {
            solution.innerHTML = "Triangle";
        } else if (input == 4) {
            solution.innerHTML = "Quadrilateral";
        } else if (input == 5) {
            solution.innerHTML = "Pentagon";
        } else if (input == 6) {
            solution.innerHTML = "Hexagon";
        } else if (input == 7) {
            solution.innerHTML = "Heptagon";
        } else if (input == 8) {
            solution.innerHTML = "Octagon";
        } else if (input == 9) {
            solution.innerHTML = "Nonagon";
        } else if (input == 10) {
            solution.innerHTML = "Decagon";
        } else {
            solution.innerHTML = "Try Again!";
        }
    });

})();
