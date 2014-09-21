/*
 * JS for foodDetailPage generated by Appery.io
 *
 */

Apperyio.getProjectGUID = function() {
    return 'fefedff7-2195-4035-b707-62edda0f92ae';
}

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
    "name": "MenuPage",
    "location": "MenuPage.html"
}, {
    "name": "OrderTracking",
    "location": "OrderTracking.html"
}, {
    "name": "foodDetailPage",
    "location": "foodDetailPage.html"
}];

foodDetailPage_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'backBtn': 'foodDetailPage_backBtn',
        'mobileimage_1': 'foodDetailPage_mobileimage_1',
        'spacer_21': 'foodDetailPage_spacer_21',
        'itemLabel': 'foodDetailPage_itemLabel',
        'mobilegrid_6': 'foodDetailPage_mobilegrid_6',
        'mobilegridcell_7': 'foodDetailPage_mobilegridcell_7',
        'mobilegridcell_17': 'foodDetailPage_mobilegridcell_17',
        'priceLabel': 'foodDetailPage_priceLabel',
        'descriptionLabel': 'foodDetailPage_descriptionLabel',
        'mobiletextinput_22': 'foodDetailPage_mobiletextinput_22',
        'spacer_23': 'foodDetailPage_spacer_23',
        'toInput': 'foodDetailPage_toInput',
        'fromInput': 'foodDetailPage_fromInput',
        'subjectInput': 'foodDetailPage_subjectInput',
        'messageInput': 'foodDetailPage_messageInput',
        'mobilebutton_20': 'foodDetailPage_mobilebutton_20'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Apperyio.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Apperyio.CurrentScreen = 'foodDetailPage';

    /*
     * Nonvisual components
     */
    var datasources = [];

    sendMail = new Apperyio.DataSource(SendGrid_MailSend, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("foodDetailPage");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['to'],
            'TYPE': 'STRING',
            'ID': 'toInput',
            'ATTR': 'value'
        }, {
            'PATH': ['subject'],
            'TYPE': 'STRING',
            'ID': 'subjectInput',
            'ATTR': 'value'
        }, {
            'PATH': ['text'],
            'TYPE': 'STRING',
            'ID': 'messageInput',
            'ATTR': 'value'
        }, {
            'PATH': ['from'],
            'TYPE': 'STRING',
            'ID': 'fromInput',
            'ATTR': 'value'
        }, {
            'PATH': ['api_user'],
            'TYPE': 'STRING',
            'ATTR': '{api_user}'
        }, {
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://sendgrid.com/api/mail.send.json'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1411259767736'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2855432'
        }]
    });

    datasources.push(sendMail);

    restservice1 = new Apperyio.DataSource(DinnerBellDatabase_House_Specials_read_service, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("foodDetailPage");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['FoodName'],
            'ID': 'itemLabel',
            'ATTR': '@'
        }, {
            'PATH': ['FoodPrice'],
            'ID': 'priceLabel',
            'ATTR': '@'
        }, {
            'PATH': ['Images'],
            'ID': 'mobileimage_1',
            'ATTR': 'src'
        }],
        'requestMapping': [{
            'PATH': ['X-Appery-Database-Id'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': '{database_id}'
        }, {
            'PATH': ['_id'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'listID'
        }]
    });

    datasources.push(restservice1);

    /*
     * Events and handlers
     */

    // Before Show
    foodDetailPage_beforeshow = function() {
        Apperyio.CurrentScreen = "foodDetailPage";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_CDCF_onLoad = foodDetailPage_onLoad = function() {
        screen_CDCF_elementsExtraJS();
        try {
            restservice1.execute({})
        } catch (ex) {
            console.log(ex.name + '  ' + ex.message);
            hideSpinner();
        };

        // TODO fire device events only if necessary (with JS logic)
        foodDetailPage_deviceEvents();
        foodDetailPage_windowEvents();
        screen_CDCF_elementsEvents();
    }

    // screen window events
    screen_CDCF_windowEvents = foodDetailPage_windowEvents = function() {

        $('#foodDetailPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    foodDetailPage_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_CDCF_elementsExtraJS = foodDetailPage_elementsExtraJS = function() {
        // screen (foodDetailPage) extra code

    }

    // screen elements handler
    screen_CDCF_elementsEvents = foodDetailPage_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#foodDetailPage_mobileheader [name="backBtn"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'MenuPage.html';
                    }, 0);

                }
            },
        });

        $('#foodDetailPage_mobilecontainer1 [name="mobilebutton_20"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    setTimeout(function() {
                        window.location = 'OrderTracking.html';
                    }, 0);

                }
            },
        });

    }

    $("#foodDetailPage").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        foodDetailPage_beforeshow();
    });

    if (runBeforeShow) {
        foodDetailPage_beforeshow();
    } else {
        foodDetailPage_onLoad();
    }

}

$("#foodDetailPage").die("pageinit").live("pageinit", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    foodDetailPage_js();
});