function cut(str, cutStart, cutEnd){
    return str.substr(0,cutStart) + str.substr(cutEnd+1);
}

function getUrlParam(param){
    var url_string = window.location.href;
    console.log(window.location.href)
    var url = new URL(url_string);
    console.log(url_string)
    return url.searchParams.get(param);
}
console.log(getUrlParam('cat'))
var query = getUrlParam("q");
var collection = getUrlParam('cat');
if (query != null && query != ""){
    console.log(true)
    searchproduct(query);
}
else if(collection == "all" || collection == "All" || collection == undefined){
    console.log(2);
    console.log(collection)
    getAllProducts();

}   else{
    console.log(3);
    getProductsByCollection(collection)
}
$(document).ready(function () {

});



    // $.ajax({
    //     type: "POST",
    //     url: "https://royalragz.myshopify.com/api/graphql",
    //     contentType: "application/graphql",
    //     headers: {
    //     "X-Shopify-Storefront-Access-Token":"b10b3ccb1773d1b9d8c5f4ea6dd6d9c4"
    //     },
    //     data: 'query {shop {collections (query:"sweaters", first:1)  {edges {node {products} }}}}',
    //     success: function (data) {
    //         console.log("test")
    //         console.log("query data: " + JSON.stringify(data));
    //         var colletionarray = data.data.shop.collections.edges;
    //         console.log(colletionarray) ;
    //         var html = "<ul>";
    //         colletionarray.forEach(function(t){
    //             html += "<li> " + t.node.title + " </li>"
    //         })
    //         html += "</ul>"
    //         $('.cat-list').append(html);
    //
    //
    //
    //     },
    //     error:function(msg) {
    //         console.log(msg);
    //     }
    // })
function searchproduct(searchterm) {
    console.log("looking for products containing " + searchterm)
    var query = 'query {shop {products (first: 25) {pageInfo {hasNextPage hasPreviousPage}edges {cursor node {id title onlineStoreUrl images(first: 1){edges{node{src}}} variants(first: 1){edges{node{price}}}}}}}}';
    $.ajax({
        type: "POST",
        url: "https://royalragz.myshopify.com/api/graphql",
        contentType: "application/graphql",
        headers: {
            "X-Shopify-Storefront-Access-Token": "b10b3ccb1773d1b9d8c5f4ea6dd6d9c4"
        },
        data: query,
        success: function (data) {
            console.log(data);
            var html = ""
            var productarray = data.data.shop.products.edges;
            console.log(productarray[1].node.onlineStoreUrl);
            productarray.forEach(function (t) {
                var id = atob(t.node.id)
                id = cut(id, 0, 21);
                console.log(id);
                console.log(t.node.title + t.node.description)
                if ((t.node.title.toLowerCase()).includes(searchterm) ){
                html +=
                    "<a href='product.html?id=" + id + "'>" +
                    "<div class='product-wrapper col-lg-3 col-md-3 col-sm-4 col-xs-6'>" +
                    "   <div class='block product-container ' >" +
                    "           <ul>  " +
                    // "               <li><a href='#'><i class='fa fa-star-o' aria-hidden='true'></i></a></li>  " +
                    "               <li><span class='converse'>" + t.node.title + "</span></li>  " +
                    // "               <li><a href='#'><i class='fa fa-shopping-basket' aria-hidden='true'></i>  " +
                    // "               </a></li>  " +
                    "           </ul>  " +
                    "  " +
                    "       <div class='img' style='overflow:hidden; height: 250px; '>  " +
                    "           <img class='productimg' style=' display: block;margin: auto;' src='" + t.node.images.edges[0].node.src + "' alt='pic' />  " +
                    "       </div>  " +
                    "  " +
                    "       <div class='bottom'>  " +
                    "           <div class='heading'> </div>  " +
                    "           <div class='info'>" + t.node.variants.edges[0].node.description + "</div>  " +
                    "           <div class='style'>" + t.node.variants.edges[0].node.size + "</div>  " +
                    "           <div class='price'>" + t.node.variants.edges[0].node.price + "</div>  " +
                    "       </div>  " +
                    "  " +
                    "   </div>" +
                    "</div>" +
                    "</a> "
                }
            })
            $('.products').append(html);
        },

        error: function (msg) {
            console.log(msg);
        }
    })
}


function getAllProducts() {
    var query = 'query {shop {products (first: 25) {pageInfo {hasNextPage hasPreviousPage}edges {cursor node {id title onlineStoreUrl images(first: 1){edges{node{src}}} variants(first: 1){edges{node{price}}}}}}}}';
        $.ajax({
        type: "POST",
        url: "https://royalragz.myshopify.com/api/graphql",
        contentType: "application/graphql",
        headers: {
            "X-Shopify-Storefront-Access-Token": "b10b3ccb1773d1b9d8c5f4ea6dd6d9c4"
        },
        data: query,
        success: function (data) {
            console.log(data);
            var html = ""
            var productarray = data.data.shop.products.edges;
            console.log(productarray[1].node.onlineStoreUrl);
            productarray.forEach(function (t) {
                var id = atob(t.node.id)
                id = cut(id, 0, 21);
                console.log(id);

                html +=
                    "<a href='product.html?id=" + id + "'>" +
                    "<div class='product-wrapper col-lg-3 col-md-4 col-sm-6 col-xs-6'>" +
                    "   <div class='block product-container ' >" +
                    "           <ul>  " +
                    // "               <li><a href='#'><i class='fa fa-star-o' aria-hidden='true'></i></a></li>  " +
                    "               <li><span class='converse'>" + t.node.title + "</span></li>  " +
                    // "               <li><a href='#'><i class='fa fa-shopping-basket' aria-hidden='true'></i>  " +
                    // "               </a></li>  " +
                    "           </ul>  " +
                    "  " +
                    "       <div class='img' style='overflow:hidden;  '>  " +
                    "           <img class='productimg' style=' width: 100%; display: block;margin: auto;' src='" + t.node.images.edges[0].node.src + "' alt='pic' />  " +
                    "       </div>  " +
                    "  " +
                    "       <div class='bottom'>  " +
                    "           <div class='heading'> </div>  " +
                    "           <div class='info'>" + t.node.variants.edges[0].node.description + "</div>  " +
                    "           <div class='style'>" + t.node.variants.edges[0].node.size + "</div>  " +
                    "           <div class='price'>" + t.node.variants.edges[0].node.price + "</div>  " +
                    "       </div>  " +
                    "  " +
                    "   </div>" +
                    "</div>" +
                    "</a> "
            })
            $('.products').append(html);
        },

        error: function (msg) {
            console.log(msg);
        }
    })
}

function getProductsByCollection(collection){
    var query = 'query {shop {collections (query:"' + collection + '", first:1)  {edges {node {products (first: 10) {pageInfo {hasNextPage hasPreviousPage}edges {cursor node {id title onlineStoreUrl images(first: 1){edges{node{src}}} variants(first: 1){edges{node{price}}}}}}}}}}}';
    $.ajax({
        type: "POST",
        url: "https://royalragz.myshopify.com/api/graphql",
        contentType: "application/graphql",
        headers: {
            "X-Shopify-Storefront-Access-Token":"b10b3ccb1773d1b9d8c5f4ea6dd6d9c4"
        },
        data: query,
        success: function (data) {
            console.log(data);
            var html = ""
            var productarray = data.data.shop.collections.edges[0].node.products.edges;
            if (productarray.length == 0){

            console.log(productarray)

                html += "<h2> No products of this category </h2>";
            }else{
            console.log(productarray[1].node.onlineStoreUrl);
            productarray.forEach(function (t){
                var id = atob(t.node.id)
                id = cut(id, 0, 21);
                console.log(id);

                html +=
                    "<a href='product.html?id=" + id + "'>" +
                    "<div class='product-wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                    "   <div class='block product-container ' >" +
                    "           <ul>  " +
                    // "               <li><a href='#'><i class='fa fa-star-o' aria-hidden='true'></i></a></li>  " +
                    "               <li><span class='converse'>" + t.node.title + "</span></li>  " +
                    // "               <li><a href='#'><i class='fa fa-shopping-basket' aria-hidden='true'></i>  " +
                    // "               </a></li>  " +
                    "           </ul>  " +
                    "  " +
                    "       <div class='img' style='overflow:hidden;  '>  " +
                    "           <img class='productimg' style=' display: block;margin:  auto;width:100%;' src='" + t.node.images.edges[0].node.src + "' alt='pic' />  " +
                    "       </div>  " +
                    "  " +
                    "       <div class='bottom'>  " +
                    "           <div class='heading'> </div>  " +
                    "           <div class='info'>" + t.node.variants.edges[0].node.description + "</div>  " +
                    "           <div class='style'>" + t.node.variants.edges[0].node.size + "</div>  " +
                    "           <div class='price'>" + t.node.variants.edges[0].node.price + "</div>  " +
                    "       </div>  " +
                    "  " +
                    "   </div>" +
                    "</div>"+
                    "</a> "
            })}
            $('.products').append(html);
        },

        error: function (msg) {
            console.log(msg);
        }
    })
}
function getnewproducts(){
    var html = '';
    $.ajax({
        type: "POST",
        url: "https://royalragz.myshopify.com/api/graphql",
        contentType: "application/graphql",
        headers: {
            "X-Shopify-Storefront-Access-Token":"b10b3ccb1773d1b9d8c5f4ea6dd6d9c4"
        },
        data: 'query {shop {products (first: 8) {pageInfo {hasNextPage hasPreviousPage}edges {cursor node {id title onlineStoreUrl images(first: 1){edges{node{src}}} variants(first: 1){edges{node{price}}}}}}}}',
        success: function (data) {
            console.log(data);
            var html = "";
            var productarray = data.data.shop.products.edges;
            console.log(productarray[1].node.onlineStoreUrl);
            html+='<div class="item active">' +
                '                    <div class="row" id="productscarousel">'
            var i = 0;
            productarray.forEach(function (t){

                if (i == 4){
                    html +='</div>\n' +
                        '                </div>\n' +
                        '                <div class="item">\n' +
                        '                    <div class="row">'
                }
                html += '<div class="col-sm-3 carousel-item">'+
                    '<div class="col-item">'+
                    '<div class="photo">'+
                    '<img src="' +t.node.images.edges[0].node.src +'" class="img-responsive" alt="a" />'+
                    '</div>'+
                    '<div class="info">'+
                    '<div class="row">'+
                    '<div class="price col-md-6">'+
                    '<h5>'+
                    t.node.title + '</h5>'+
                '<h5 class="price-text-color">'+
                t.node.variants.edges[0].node.price + '</h5>'+
                '</div>'+
                // '<div class="rating hidden-sm col-md-6">'+
                //     '<i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star">'+
                //     '</i><i class="price-text-color fa fa-star"></i><i class="price-text-color fa fa-star">'+
                //     '</i><i class="fa fa-star"></i>'+
                //     '</div>'+
                //     '</div>'+
                //     '<div class="separator clear-left">'+
                //     '<p class="btn-add">'+
                //     '<i class="fa fa-shopping-cart"></i><a href="http://www.jquery2dotnet.com" class="hidden-sm">Add to cart</a></p>'+
                // '<p class="btn-details">'+
                //     '<i class="fa fa-list"></i><a href="http://www.jquery2dotnet.com" class="hidden-sm">More details</a></p>'+
                // '</div>'+
                // '<div class="clearfix">'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
                i++;
            })
            html += '</div>\n' +
                '                </div>'
            $('#carousel').append(html);
        },

        error: function (msg) {
            console.log(msg);
        }
    })
}
function xd() {
    console.log("xd started");
    var USERNAME = "30511c72c85e4a6c8a5a4aa5ec510f69";
    var PASSWORD = "5a332e32cee038b8325b01368fde563d";
    var base64auth = btoa("30511c72c85e4a6c8a5a4aa5ec510f69:5a332e32cee038b8325b01368fde563d");
    console.log(base64auth)
    $.ajax({
        type: "GET",

        url: "https://rooyalrags.myshopify.com/admin/products.json",
        headers: {
            "Authorization": "Basic " + btoa(USERNAME + ":" + PASSWORD)
        },
        contentType: "application/json",
        success: function (data) {
            console.log("shopify data: " + data)
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function sort() {
    var goal = $('#filter').val();
    switch (goal) {
        case 'datenew':
            sortdatenew();
            break;
        case 'dateold':
            sortdateold();
            break;
        case 'pricehigh':
            sortpricehigh();
            break;
        case 'pricelow':
            sortpricelow();
            break;
        default:
            sortdatenew();
    }
}

function sortdatenew() {
    var wrapper = $('.products');
    wrapper.find('.productlink').sort(function (a, b) {
        var contentA =parseInt( $(a).attr('data-sort'));
        var contentB =parseInt( $(b).attr('data-sort'));
        return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
    })
    console.log("sorted datenew")
}

function sortdateold() {
    var wrapper = $('.products');
    wrapper.find('.productlink').sort(function (a, b) {
        var contentA =parseInt( $(a).attr('data-sort'));
        var contentB =parseInt( $(b).attr('data-sort'));
        return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
    })
}

function sortpricehigh() {
    $(".products").sortDivs();
}

function sortpricelow() {

}

function sortdivs(divarray){
    var valuearray = [];
    for (var i = 0 ; i < divarray.length; i ++){
        value[i] = divarray[i].attr('price');
    }
}