
let imgObj = null;
function init() {
    imgObj = document.getElementById('huTao1');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 20 + 'px';


}
window.onload = init