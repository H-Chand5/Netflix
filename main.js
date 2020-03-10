const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.content-item');

tabs.forEach(item => item.addEventListener('click', SelectItem));

function SelectItem(e) {
    removeborder();
    removeshow();
    this.classList.add('tab-border');
    const tabContents = document.querySelector(`#${this.id}-content`);
    tabContents.classList.add('show');
}  

function removeshow() {
    tabContents.forEach(item => item.classList.remove('show'));
}
function removeborder() {
    tabs.forEach(item => item.classList.remove('tab-border'));
}
