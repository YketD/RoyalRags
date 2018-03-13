<div id='product-component-2fdaf069538'></div>
<script type="text/javascript">
    /*<![CDATA[*/

    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
                    id: [423348994091],
                    node: document.getElementById('product-component-2fdaf069538'),
                    moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
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
    })();
/*]]>*/
</script>