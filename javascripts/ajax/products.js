$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "https://royalragz.myshopify.com/api/graphql",
        contentType: "application/graphql",
        headers: {
        "X-Shopify-Storefront-Access-Token":"b10b3ccb1773d1b9d8c5f4ea6dd6d9c4"
        },
        data: 'query {shop {products (first: 10) {pageInfo {hasNextPage hasPreviousPage}edges {cursor node {id title onlineStoreUrl images(first: 1){edges{node{src}}} variants(first: 1){edges{node{price}}}}}}}}',
        success: function (data) {           
            console.log(data);
            var html = ""
            var productarray = data.data.shop.products.edges; 
            console.log(productarray[1].node.onlineStoreUrl);
            productarray.forEach(function (t){
                console.log(t);
                 html +=
                    "<a href='product.html?id=" + t.node.id + "'>" +
                    "<div class='product-wrapper col-lg-3 col-md-4 col-sm-6 col-xs-12'>" + 
                    "   <div class='block product-container ' >" +
                    "           <ul>  " +
                    // "               <li><a href='#'><i class='fa fa-star-o' aria-hidden='true'></i></a></li>  " +
                    "               <li><span class='converse'>" + t.node.title + "</span></li>  " +
                    // "               <li><a href='#'><i class='fa fa-shopping-basket' aria-hidden='true'></i>  " +
                    // "               </a></li>  " +
                    "           </ul>  " +
                    "  " +
                    "       <div class='img'>  " +
                    "           <img class='productimg' src='" + t.node.images.edges[0].node.src + "' alt='pic' />  " +
                    "       </div>  " +
                    "  " +
                    "       <div class='bottom'>  " +
                    "           <div class='heading'> </div>  " +
                    "           <div class='info'>" + t.description + "</div>  " +
                    "           <div class='style'>" + t.size + "</div>  " +
                    "           <div class='price'>" + t.node.variants.edges[0].node.price + "</div>  " +
                    "       </div>  " +
                    "  " +
                    "   </div>" +
                    "</div>"+
                    "</a> " 
                })
            $('.products').append(html);
            },
            
        error: function (msg) {
            console.log(msg);
        }
    })

    $.ajax({
        type: "POST",
        url: "https://royalragz.myshopify.com/api/graphql",
        contentType: "application/graphql",
        headers: {
        "X-Shopify-Storefront-Access-Token":"b10b3ccb1773d1b9d8c5f4ea6dd6d9c4"
        },
        data: 'query {shop {collections (first:5){edges{node{title}}}}}',
        success: function (data) {
            console.log(data);
            var colletionarray = data.data.shop.collections.edges;
            console.log(colletionarray) ;
            var html = "<ul>";
            colletionarray.forEach(function(t){
                html += "<li> " + t.node.title + " </li>"
            })
            html += "</ul>"
            $('.cat-list').append(html);
            
            

        },
        error:function(msg) {
            console.log(msg);
        }
    })
})

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