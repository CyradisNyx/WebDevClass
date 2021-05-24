function changeContent(newPage) {
    var contentBlock = document.getElementById("page-content");
    include(newPage, contentBlock);
    disableHeaders();
    setActiveHeader(newPage);
}

function disableHeaders() {
    var header = document.getElementById("header")
    var navbar = document.getElementById("navbar");
    var buttons = navbar.getElementsByTagName("button");
    Array.from(buttons).forEach(button => {
        button.classList.remove("current");
    });
}

function setActiveHeader(page) {
    var name = page.split('/').pop();
    name = name.split('.').shift();
    var id = name + '-btn';
    currentPage = name;

    document.getElementById(id).classList.add("current");
}