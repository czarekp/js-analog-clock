window.onload = function () {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    function analogClock() {
        // calculate angle from actual time
        let d, h, m, s;
        d = new Date();

        h = d.getHours() % 12 * 30;
        m = d.getMinutes() * 6;
        s = d.getSeconds() * 6;

        // update hands' angles
        hourHand.style.transform = 'rotate(' + h + 'deg) translate(-50% , -50%)';
        minuteHand.style.transform = 'rotate(' + m + 'deg) translate(-50%, -50%)';
        secondHand.style.transform = 'rotate(' + s + 'deg) translate(-50%, -50%)';

        // count second and update rotation
        setTimeout(analogClock, 1000);
    };

    analogClock();
}
