
$(document).ready(function() {

// First lets link our global header and footer to our 4 pages
// for that, we work with the id="header" for the global header and the id="footer" for the global footer
// with that, the 4 pages will have the same header and footer, this is in order to have a professional style

    $(function () {
        $("#header").load("header.html"); // global header
        $("#footer").load("footer.html"); // global footer
    });

// Second, lets create hover effects for images in 2 pages: Index.html and Product.html

    var originalImageSrc = $("#fo").attr("src"); //

    $("#fo").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/one_image.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc);
        }
    );

    var originalImageSrc1 = $("#ft").attr("src"); //

    $("#ft").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/second_image.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc1);
        }
    );

    var originalImageSrc2 = $("#fth").attr("src"); //

    $("#fth").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/third_image.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc2);
        }
    );

    var originalImageSrc3 = $("#prod1").attr("src"); //

    $("#prod1").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod1.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc3);
        }
    );

    var originalImageSrc4 = $("#prod2").attr("src"); //

    $("#prod2").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod2.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc4);
        }
    );

    var originalImageSrc5 = $("#prod3").attr("src"); //

    $("#prod3").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod3.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc5);
        }
    );

    var originalImageSrc6 = $("#prod4").attr("src"); //

    $("#prod4").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod4.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc6);
        }
    );

    var originalImageSrc7 = $("#prod5").attr("src"); //

    $("#prod5").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod5.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc7);
        }
    );

    var originalImageSrc8 = $("#prod6").attr("src"); //

    $("#prod6").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod6.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc8);
        }
    );

    var originalImageSrc9 = $("#prod7").attr("src"); //

    $("#prod7").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod7.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc9);
        }
    );

    var originalImageSrc10 = $("#prod8").attr("src"); //

    $("#prod8").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod8.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc10);
        }
    );

    var originalImageSrc11 = $("#prod9").attr("src"); //

    $("#prod9").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod9.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc11);
        }
    );

    var originalImageSrc12 = $("#prod10").attr("src"); //

    $("#prod10").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod10.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc12);
        }
    );

    var originalImageSrc13 = $("#prod11").attr("src"); //

    $("#prod11").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod11.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc13);
        }
    );

    var originalImageSrc14 = $("#prod12").attr("src"); //

    $("#prod12").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod12.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc14);
        }
    );

    var originalImageSrc15 = $("#prod13").attr("src"); //

    $("#prod13").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod13.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc15);
        }
    );

    var originalImageSrc16 = $("#prod14").attr("src"); //

    $("#prod14").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod14.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc16);
        }
    );

    var originalImageSrc17 = $("#prod15").attr("src"); //

    $("#prod15").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod15.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc17);
        }
    );

    var originalImageSrc18 = $("#prod16").attr("src"); //

    $("#prod16").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod16.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc18);
        }
    );

    var originalImageSrc19 = $("#prod17").attr("src"); //

    $("#prod17").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod17.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc19);
        }
    );

    var originalImageSrc20 = $("#prod18").attr("src"); //

    $("#prod18").hover(
        function() {
            // Mouse over - Change image source to the new image
            $(this).attr("src", "./img/Image1_prod18.jpg"); // This is the image that will change
        },
        function() {
            // Mouse out - Revert the image source back to the original image
            $(this).attr("src", originalImageSrc20);
        }
    );



});

