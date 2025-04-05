function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', onMove);
    let output = document.getElementById('result');

    function onMove(event) {
        let box = event.target;
        let offset = Math.floor(event.offsetX / box.clientWidth * 100);
        output.textContent = `${offset}%`;
    }
}
