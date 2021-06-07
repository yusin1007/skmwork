/*---------動態活動------------*/
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; //stop the fn running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
});


/*圖層切換*/
function $(obj) {
    return document.getElementById(obj);
}
var divNo = document.getElementsByTagName("div").length;
function change(id) {
    divNo++;
    var box = document.getElementById(id);
    box.style.zIndex = divNo;

}

/*團體活動 */
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

