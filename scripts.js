window.addEventListener("load", function () {
    let header = document.querySelector("h1");
    let div = document.getElementById("formStuff");
    let thePunisher = document.getElementById("noPeeking");
    let form = document.getElementById("teamForm");
    let body = document.querySelector("body");
    let chances = 3;

    form.addEventListener("submit", function (event) {
        let username = document.querySelector("input[name=username]");
        let team = document.querySelector("input[name=team]");

        if (username.value.toLowerCase() === "apple dog" || team.value.toLowerCase() === "apple dog") {
            if (chances === 0) {
                event.preventDefault();
                awHellNo();
            } else {
                alert("Apple Dog is not an acceptable name under any circumstance!");
                chances--;
                alert(`Try again. You have ${chances} chance(s) left before I get really angry. 😤`);
                event.preventDefault();
            }
        }

    });

    function awHellNo() {
        window.alert("You're in for it now! 😈");
        body.style.backgroundColor = "yellow";
        header.style.color = "black";
        header.style.fontSize = "150px";
        header.innerHTML = "ALL HAIL BANANA CAT. APPLE DOG IS THE ENEMY.\nSCROLL DOWN.";
        div.style.visibility = "hidden";
        thePunisher.style.visibility = "";
    }

});