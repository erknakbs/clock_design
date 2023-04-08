function setClock() {
    // Get the current time

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Calculate Clock handes Rotate values (according to 360deg) using the current time

    hrValue = (hours * 30) + (minutes * 6) / 12;
    minValue = minutes * 6;
    secValue = seconds * 6;


    // add Calculated rotate calues to the clock hand elements

    document.querySelector(".hr-hand").style.transform
        = "rotate(" + hrValue + "deg)";
    document.querySelector(".min-hand").style.transform
        = "rotate(" + minValue + "deg)";
    document.querySelector(".sec-hand").style.transform
        = "rotate(" + secValue + "deg)";
}

setInterval(setClock, 1000);