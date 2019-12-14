/*****************************************
TABLES
*****************************************/
function runTableQuery() {
    var currentURL = window.location.origin;
    $.ajax({ url: currentURL + '/api/tables', method: "GET" })
        .done(function (tables) {
            console.log("------------------------------------");
            console.log("URL: " + currentURL + "/api/tables");
            console.log("------------------------------------");
            console.log(tables);
            console.log("------------------------------------");

            for (var i = 0; i < tables.length; i++) {
                console.log(tables[i]);
                var tableSection = $('<div>');
                tableSection.addClass("well");
                tableSection.attr('id', 'tableWell-' + i + 1);
                $("#tableSection").append(tableSection);

                var tableNum = i + 1;
                $('#tableWell-' + i + 1).append('<h2><span class="label label-primary">' + tableNum + '</span> | ' + tables[i].customerID + '</h2>');
            }
        });
};

function runWaitlistQuery() {
    var currentURL = window.location.origin;
    $.ajax({ url: currentURL + '/api/waitlist', method: "GET" })
        .done(function (tables) {
            console.log("------------------------------------");
            console.log("URL: " + currentURL + "/api/waitlist");
            console.log("------------------------------------");
            console.log(waitlist);
            console.log("------------------------------------");

            for (var i = 0; i < waitlist.length; i++) {
                console.log(waitlist[i]);
                var waitlistSection = $('<div>');
                waitlistSection.addClass("well");
                waitlistSection.attr('id', 'waitlistWell-' + i + 1);
                $("#waitlistSection").append(waitlistSection);

                var waitlistNum = i + 1;
                $('#waitlistWell-' + i + 1).append('<h2><span class="label label-primary">' + waitlistNum + '</span> | ' + waitlist[i].customerID + '</h2>');
            }
        });
};

function clearTable() {
    var currentURL = window.location.origin;
    $.ajax({ url: currentURL + "/api/clear", method: "POST" })
};

$('#clear').on('click', function () {
    alert('Clearing...');
    clearTable();
    location.reload();
});

runTableQuery();
runWaitlistQuery();

/*****************************************
RESERVE
*****************************************/
$('.submit').on('click', function () {
    var newReservation = {
        customerName: $('#reserve_name').val().trim(),
        phoneNum: $('#reserve_phone').val().trim(),
        customerEmail: $('#reserve_mail').val().trim(),
        customerID: $('#reserve_uniqueID').val().trim()
    };

    console.log(newReservation);

    var currentURL = window.location.origin;

    $.post(currentURL + '/api/tables', newReservation, function (data) {
        if (data == true) {
            console.log('Yay! You are booked for the holidays!');
        }, else if {
            'Sorry, you are not on the waitlist');
    }

        // clear user fields after submit was clicked
        $('#reserve_name').val("");
    $('#reserve_phone').val("");
    $('#reserve_mail').val("");
    $('#reserve_uniqueID').val("");
});
return false;
});