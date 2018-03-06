var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


$(document).ready(function () {
    var id = getUrlParameter("id");
    var data = JSON.stringify({idid: id});
    if (id) {
        $.ajax({
            type: "post",
            async: true,
            url: "/products/by_id",
            contentType: "application/json",
            data: data,
            success: function (data) {
                console.log(data)
                var msg = JSON.parse(data);
                $('#product_title').val(msg.title);
                $('#product_description').val(msg.description);
                $('#product_price').val(msg.price);
                $('#product_size').val(msg.size);
                $('#product_id').val(id);
                $('#submititem').attr('onclick', '');
                $('#submititem').click(function () {
                    addItem($('#product_title').val(), $('#product_description').val(), $('#product_price').val(), $('#product_size').val());
                })
            },
            error: function (msg) {
                console.log("err")
                console.log(msg);
            }
        })


    }
})



function addItem(title, desc, price, size) {
    $.ajax({
        type: "post",
        url: "/admin/api/addItem/",
        contentType: "application/json",
        data: JSON.stringify({title: title, description: desc, price: price, size: size}),
        success: function (data) {
            console.log("adding succesfull")
            res.status(200)
            window.location.replace("http://localhost:3000/admin/Admin.html");
        },
        error: function (msg) {
            console.log(msg);
            console.log("adding succesfull")
            res.status(200)
            window.location.replace("http://localhost:3000/admin/Admin.html");
        }
    })
}