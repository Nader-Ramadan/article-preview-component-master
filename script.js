function show() {
    document.getElementsByClassName("share-tape")[0].style.display = "flex";
    document.getElementsByClassName('share')[0].style.background = "var(--Very-Dark-Grayish-Blue)";
    document.getElementsByTagName('svg')[0].style.fill = "var(--white)";
    document.getElementsByClassName("info")[0].style.display = "none"
    document.getElementsByClassName("user-photo")[0].style.display = "none"
}
function hide() {
    document.getElementsByClassName("share-tape")[0].style.display = "none"
}