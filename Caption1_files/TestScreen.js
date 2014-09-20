/*
 * JS for TestScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'b91e4327-0ee8-4ab0-b922-c92eb8bb9fcc';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "TestScreen",
    "location": "TestScreen.html"
}];

TestScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_6': 'TestScreen_mobilebutton_6',
        'mobilenavbar_2': 'TestScreen_mobilenavbar_2',
        'mobilenavbaritem_3': 'TestScreen_mobilenavbaritem_3',
        'mobilenavbaritem_4': 'TestScreen_mobilenavbaritem_4',
        'mobilenavbaritem_5': 'TestScreen_mobilenavbaritem_5'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'TestScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var TestScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "TestScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var TestScreen_onLoad = function() {
            TestScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            TestScreen_deviceEvents();
            TestScreen_windowEvents();
            TestScreen_elementsEvents();
        };

    // screen window events
    var TestScreen_windowEvents = function() {

            $('#TestScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var TestScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var TestScreen_elementsExtraJS = function() {
            // screen (TestScreen) extra code

        };

    // screen elements handler
    var TestScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#TestScreen_mobilecontainer [name="mobilebutton_6"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        setTimeout(function() {
                            window.location = 'startScreen.html';
                        }, 0);

                    }
                },
            }, '#TestScreen_mobilecontainer [name="mobilebutton_6"]');

        };

    $(document).off("pagebeforeshow", "#TestScreen").on("pagebeforeshow", "#TestScreen", function(event, ui) {
        TestScreen_beforeshow();
    });

    if (runBeforeShow) {
        TestScreen_beforeshow();
    } else {
        TestScreen_onLoad();
    }
};

$(document).off("pagecreate", "#TestScreen").on("pagecreate", "#TestScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    TestScreen_js();
});