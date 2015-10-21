$(document).ready(function () {

    // Add list items using submit
    $('#submit').click(function() {
        var itemName = document.getElementById('addItem');
        var itemQty = document.getElementById('addQty');

        $('#list').append("<li class=\"\"><div class=\"qty\">"+itemQty.value+"</div><div class=\"itemName\">"+itemName.value+"</div><img class=\"trash\" src=\"images/remove.png\" alt=\"X\"></li>");
    });

    // Mark items completed using Toggle class 'Completed'
    $('#list li').click(function() {
        $(this).toggleClass('completed');
    });

    // Delete items
    $('.trash').click(function() {
        $(this).parent().remove();
    });

    // New List - Delete All Items
    $('#newList').click(function() {
        $('#list li').remove();
    })

});