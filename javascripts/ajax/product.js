// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "/products",
//         contentType: "application/json",
//         success: function (data) {
//             var html= "    <script type=\"text/javascript\">\n" +
//                 "            /*<![CDATA[*/\n" +
//                 "\n" +
//                 "            (function () {\n" +
//                 "                var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';\n" +
//                 "                if (window.ShopifyBuy) {\n" +
//                 "                    if (window.ShopifyBuy.UI) {\n" +
//                 "                        ShopifyBuyInit();\n" +
//                 "                    } else {\n" +
//                 "                        loadScript();\n" +
//                 "                    }\n" +
//                 "                } else {\n" +
//                 "                    loadScript();\n" +
//                 "                }\n" +
//                 "\n" +
//                 "                function loadScript() {\n" +
//                 "                    var script = document.createElement('script');\n" +
//                 "                    script.async = true;\n" +
//                 "                    script.src = scriptURL;\n" +
//                 "                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);\n" +
//                 "                    script.onload = ShopifyBuyInit;\n" +
//                 "                }\n" +
//                 "\n" +
//                 "                function ShopifyBuyInit() {\n" +
//                 "                    var client = ShopifyBuy.buildClient({\n" +
//                 "                        domain: 'royalragz.myshopify.com',\n" +
//                 "                        apiKey: 'ceb7710208c6ffea7c79125d065b7701',\n" +
//                 "                        appId: '6',\n" +
//                 "                    });\n" +
//                 "\n" +
//                 "                    ShopifyBuy.UI.onReady(client).then(function (ui) {\n" +
//                 "                        ui.createComponent('product', {\n" +
//                 "                            id: [379240185899],\n" +
//                 "                            node: document.getElementById('product-component-4f3e2a7a969'),\n" +
//                 "                            moneyFormat: '%E2%82%AC%7B%7Bamount%7D%7D',\n" +
//                 "                            options: {\n" +
//                 "                                \"product\": {\n" +
//                 "                                    \"buttonDestination\": \"checkout\",\n" +
//                 "                                    \"layout\": \"horizontal\",\n" +
//                 "                                    \"variantId\": \"all\",\n" +
//                 "                                    \"width\": \"100%\",\n" +
//                 "                                    \"contents\": {\n" +
//                 "                                        \"img\": false,\n" +
//                 "                                        \"imgWithCarousel\": true,\n" +
//                 "                                        \"variantTitle\": false,\n" +
//                 "                                        \"description\": true,\n" +
//                 "                                        \"buttonWithQuantity\": false,\n" +
//                 "                                        \"quantity\": false\n" +
//                 "                                    },\n" +
//                 "                                    \"text\": {\n" +
//                 "                                        \"button\": \"Buy now\"\n" +
//                 "                                    },\n" +
//                 "                                    \"styles\": {\n" +
//                 "                                        \"product\": {\n" +
//                 "                                            \"text-align\": \"left\",\n" +
//                 "                                            \"@media (min-width: 601px)\": {\n" +
//                 "                                                \"max-width\": \"100%\",\n" +
//                 "                                                \"margin-left\": \"0\",\n" +
//                 "                                                \"margin-bottom\": \"50px\"\n" +
//                 "                                            }\n" +
//                 "                                        },\n" +
//                 "                                        \"button\": {\n" +
//                 "                                            \"background-color\": \"#5ed600\",\n" +
//                 "                                            \":hover\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            },\n" +
//                 "                                            \":focus\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            }\n" +
//                 "                                        },\n" +
//                 "                                        \"title\": {\n" +
//                 "                                            \"font-size\": \"26px\"\n" +
//                 "                                        },\n" +
//                 "                                        \"price\": {\n" +
//                 "                                            \"font-size\": \"18px\"\n" +
//                 "                                        },\n" +
//                 "                                        \"compareAt\": {\n" +
//                 "                                            \"font-size\": \"15px\"\n" +
//                 "                                        }\n" +
//                 "                                    }\n" +
//                 "                                },\n" +
//                 "                                \"cart\": {\n" +
//                 "                                    \"contents\": {\n" +
//                 "                                        \"button\": true\n" +
//                 "                                    },\n" +
//                 "                                    \"styles\": {\n" +
//                 "                                        \"button\": {\n" +
//                 "                                            \"background-color\": \"#5ed600\",\n" +
//                 "                                            \":hover\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            },\n" +
//                 "                                            \":focus\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            }\n" +
//                 "                                        },\n" +
//                 "                                        \"footer\": {\n" +
//                 "                                            \"background-color\": \"#ffffff\"\n" +
//                 "                                        }\n" +
//                 "                                    }\n" +
//                 "                                },\n" +
//                 "                                \"modalProduct\": {\n" +
//                 "                                    \"contents\": {\n" +
//                 "                                        \"img\": false,\n" +
//                 "                                        \"imgWithCarousel\": true,\n" +
//                 "                                        \"variantTitle\": false,\n" +
//                 "                                        \"buttonWithQuantity\": true,\n" +
//                 "                                        \"button\": false,\n" +
//                 "                                        \"quantity\": false\n" +
//                 "                                    },\n" +
//                 "                                    \"styles\": {\n" +
//                 "                                        \"product\": {\n" +
//                 "                                            \"@media (min-width: 601px)\": {\n" +
//                 "                                                \"max-width\": \"100%\",\n" +
//                 "                                                \"margin-left\": \"0px\",\n" +
//                 "                                                \"margin-bottom\": \"0px\"\n" +
//                 "                                            }\n" +
//                 "                                        },\n" +
//                 "                                        \"button\": {\n" +
//                 "                                            \"background-color\": \"#5ed600\",\n" +
//                 "                                            \":hover\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            },\n" +
//                 "                                            \":focus\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            }\n" +
//                 "                                        }\n" +
//                 "                                    }\n" +
//                 "                                },\n" +
//                 "                                \"toggle\": {\n" +
//                 "                                    \"styles\": {\n" +
//                 "                                        \"toggle\": {\n" +
//                 "                                            \"background-color\": \"#5ed600\",\n" +
//                 "                                            \":hover\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            },\n" +
//                 "                                            \":focus\": {\n" +
//                 "                                                \"background-color\": \"#55c100\"\n" +
//                 "                                            }\n" +
//                 "                                        }\n" +
//                 "                                    }\n" +
//                 "                                },\n" +
//                 "                                \"productSet\": {\n" +
//                 "                                    \"styles\": {\n" +
//                 "                                        \"products\": {\n" +
//                 "                                            \"@media (min-width: 601px)\": {\n" +
//                 "                                                \"margin-left\": \"-20px\"\n" +
//                 "                                            }\n" +
//                 "                                        }\n" +
//                 "                                    }\n" +
//                 "                                }\n" +
//                 "                            }\n" +
//                 "                        });\n" +
//                 "                    });\n" +
//                 "                }\n" +
//                 "            })();\n" +
//                 "            /*]]>*/\n" +
//                 "        </script>";
//             console.log(html)
//             $('body').append(html);
//         }
//         })
//     })
function geturlparams( str_url){
    // var url_string = url; //window.location.href
    var url = new URL(str_url);
    var id = url.searchParams.get("id");
    console.log(id)
    return id;
}
$(document).ready(function () {
    var url = window.location.href;
    var id = geturlparams(url);
    var scriptURL = 'javascripts/Shopify/buy-button-storefront-1.0.76.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'royalragz.myshopify.com',
            apiKey: 'ceb7710208c6ffea7c79125d065b7701',
            appId: '6',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: [id],
                node: document.getElementById('product-component-308e6e4476d'),
                moneyFormat: '%E2%82%AC%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "buttonDestination": "checkout",
                        "layout": "horizontal",
                        "variantId": "all",
                        "width": "100%",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "description": true,
                            "buttonWithQuantity": false,
                            "quantity": false
                        },
                        "text": {
                            "button": "Buy now"
                        },
                        "styles": {
                            "product": {
                                "text-align": "left",
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "background-color": "#5ed600",
                                ":hover": {
                                    "background-color": "#55c100"
                                },
                                ":focus": {
                                    "background-color": "#55c100"
                                }
                            },
                            "title": {
                                "font-size": "26px"
                            },
                            "price": {
                                "font-size": "18px"
                            },
                            "compareAt": {
                                "font-size": "15px"
                            }
                        }
                    },
                    "cart": {
                        "contents": {
                            "button": true
                        },
                        "styles": {
                            "button": {
                                "background-color": "#5ed600",
                                ":hover": {
                                    "background-color": "#55c100"
                                },
                                ":focus": {
                                    "background-color": "#55c100"
                                }
                            },
                            "footer": {
                                "background-color": "#ffffff"
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "buttonWithQuantity": true,
                            "button": false,
                            "quantity": false
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "background-color": "#5ed600",
                                ":hover": {
                                    "background-color": "#55c100"
                                },
                                ":focus": {
                                    "background-color": "#55c100"
                                }
                            }
                        }
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#5ed600",
                                ":hover": {
                                    "background-color": "#55c100"
                                },
                                ":focus": {
                                    "background-color": "#55c100"
                                }
                            }
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
});