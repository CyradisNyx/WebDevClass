function servicesOnResize() {
    var currentSize = breakpoint.split(' ').shift();
    var divs = document.getElementsByClassName("collapse");
    if (currentSize == 'xl') {
        collapseAll(divs);
    } else {
        expandAll(divs);
    }
}

function expandAll(divs) {
    Array.from(divs).forEach(div => {
        div.classList.add("show");
    });
}

function collapseAll(divs) {
    Array.from(divs).forEach(div => {
        div.classList.remove("show");
    });
}