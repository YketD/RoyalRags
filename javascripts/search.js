function getUrlParam(){
    var url_string = window.location.href;
    var url = new URL(url_string);
    console.log( url.searchParams.get("q"))
    return url.searchParams.get("q");
}

$(document).ready(function () {
    var query = getUrlParam();
    console.log(query)
    console.log(!(window.location).includes("products") )
    if (query != undefined && !(window.location).includes("products")){
        console.log(true)
         window.location = "products.html?q=" + query;
    }
})