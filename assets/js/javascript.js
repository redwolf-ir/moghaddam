/* FULLPAGE SETUP
=========================== */
$("#redwolf").fullpage({
    scrollHorizontally: true,
    fadingEffect: true,
    responsiveHeight: 435,
    scrollingSpeed: 1200,
    navigation: true,
    navigationTooltips: ['Introduction', 'Videos', 'Musics', 'Photo Gallery', 'Biography', 'Contact us'],
    navigationPosition: 'left',
    normalScrollElements: '#playlist, #mplaylist, .biography_section aside',
    anchors: [
        "intro",
        "videos",
        "musics",
        "photos",
        "biography",
        "contact-us",
    ],
});

/* VIDEOS
=========================== */
$(function() {
    $("#playlist li").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("movieurl"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#videoarea").attr({
        "src": $("#playlist li").eq(0).attr("movieurl"),
        "poster": $("#playlist li").eq(0).attr("moviesposter")
    })
})

$(document).ready(function() {
    $("#playlist li").click(function() {
        $("#playlist li").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });
});

/* MUSIC
=========================== */
$(function() {
    $("#mplaylist li").on("click", function() {
        $("#audioarea").attr({
            "src": $(this).attr("musicurl"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#audioarea").attr({
        "src": $("#mplaylist li").eq(0).attr("musicurl"),
        "poster": $("#mplaylist li").eq(0).attr("musicposter")
    })
})

$(document).ready(function() {
    $("#mplaylist li").click(function() {
        $("#mplaylist li").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });
});

/* MUSIC SINGLE PAGE
=========================== */
$(function() {
    $("#mplaylist_single li").on("click", function() {
        $("#audioarea").attr({
            "src": $(this).attr("musicurl"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#audioarea").attr({
        "src": $("#mplaylist_single li").eq(0).attr("musicurl"),
        "poster": $("#mplaylist_single li").eq(0).attr("musicposter")
    })
})

$(document).ready(function() {
    $("#mplaylist_single li").click(function() {
        $("#mplaylist_single li").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });
});


/* VIDEO SINGLE PAGE
=========================== */
$(function() {
    $("#playlist-singlepage li").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("movieurl"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#videoarea").attr({
        "src": $("#playlist-singlepage li").eq(0).attr("movieurl"),
        "poster": $("#playlist-singlepage li").eq(0).attr("moviesposter")
    })
})

$(document).ready(function() {
    $("#playlist-singlepage li").click(function() {
        $("#playlist-singlepage li").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });
});


/* OFF CANVAS
=========================== */
function openNav() {
    $("#myNav").toggleClass("addWidth");
}

function closeNav() {
    $("#myNav").toggleClass("addWidth");
    if ($("#about").hasClass("opened")) {}
}

/* MUSIC & VIDEO SEARCH BAR
=========================== */
$(document).ready(function() {
    $("#filter").keyup(function() {

        var filter = $(this).val(),
            count = 0;

        $("#mplaylist_single li").each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();

            } else {
                $(this).show();
                count++;
            }
        });
    });
});

$(document).ready(function() {
    $("#filter").keyup(function() {

        var filter = $(this).val(),
            count = 0;

        $("#playlist-singlepage li").each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();

            } else {
                $(this).show();
                count++;
            }
        });
    });
});