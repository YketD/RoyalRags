$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/products",
        contentType: "application/json",
        success: function (data) {
            var result = JSON.stringify(data);
            console.log("product data")
            console.log(data)
            var html = "";
            data.result.forEach(function (t){
console.log(t)
                html +=
                    "<div id='item"+t.item_id+"' class='product col-lg-3 col-md-4 col-sm-6 col-xs-12'>" +
                    "<div class='row product-container'>" +
                    "<img class='productimg col-lg-12 col-md-12 col-sm-12 col-xs-12' src='.." + t.image +  "'>" +
                    "<p class='col-lg-10 col-md-10 col-sm-10 col-xs-10 title'>" + t.title + "</p>" +
                    "<p class='col-lg-2 col-md-2 col-sm-2 col-xs-2 title'>" + t.size + "</p>" +
                    "<p class='col-lg-6 col-md-6 col-sm-6 col-xs-6 title'>$" + t.price + "</p>" +
                    "<a href='newItem.html?id=" + t.item_id +"'><button type='button' class='btn btn-outline-info'>Edit</button></a>\n" +
                    "<button type='button' onclick='removeProduct(" + t.item_id + ")' class='btn btn-outline-danger'>Remove</button>" +
                    "</div>" +
                    "</div>";
             });//&id=" + t.item_id + "'
            $('.products').append(html);
        },
        error: function (msg) {
            console.log(msg);
        }
    })
});


function removeProduct(id, child){
    $.ajax({
        type: "DELETE",
        url: "/admin/api/removeItem",
        contentType: "application/json",
        data : JSON.stringify({item_id: id}),
        success: function (data) {
            console.log(id);
            $('#item' + id).fadeOut(800);
        },
        error: function (msg) {
            console.log(msg);
        }
    })
}