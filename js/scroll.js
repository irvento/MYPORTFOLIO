let scrollEnabled = false;

function enableScroll() {
    scrollEnabled = true;
    document.getElementById('leftHalf').style.width = '50%';
}

function disableScroll() {
    scrollEnabled = false;
    document.getElementById('leftHalf').style.width = '100%';
}

document.addEventListener('wheel', function (event) {
    if (!scrollEnabled) {
        event.preventDefault();
    }
});
