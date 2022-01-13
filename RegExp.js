(function () {
    'use strict';
    //start
    let sub = document.querySelector('.sub');
    let result = document.querySelector(".result");

    const test = () => {
        result.style.display = "block";
        document.querySelector('.input').style.border = "";

        let text = document.querySelector('.input').value;
        String(text);
        let pattern = /[A-z]+/gi;
        if (pattern.test(text) == true) {
            result.innerHTML = text.match(pattern);
            result.style.border = "4px solid green";
        } else {
            document.querySelector('.input').style.border = "4px solid red";
            document.querySelector('.span').style.borderBottom = "3px solid blue";
            result.style.display = "none";
        }
    }
    sub.addEventListener('click', test)
    //end
})();