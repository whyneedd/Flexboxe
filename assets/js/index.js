

var loading2;

function showpages() {
    loading2 = setTimeout(showload, 12000);

}

function showload() {
    document.querySelector(".load").style.display="none";
    document.querySelector(".pages").style.display="block";

}