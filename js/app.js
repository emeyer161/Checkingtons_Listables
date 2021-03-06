$(document).ready(function () {

    // Add list items using submit
    $('#submit').click(function() {
        if (document.getElementById('addItem').value=="") {
            alert('Please enter a name for the item you would like to add');
        } else {
            var itemName = document.getElementById('addItem');
            var itemQty = document.getElementById('addQty');

            $('#list').append("<li class=\"\"><div class=\"qty\">"+itemQty.value+"</div><div class=\"itemName\">"+itemName.value+"</div><img class=\"trash\" src=\"images/remove.png\" alt=\"X\"></li>");
        
            document.getElementById('addItem').value = "";
            document.getElementById('addQty').value = "";
        }
    });

    // Mark items completed using Toggle class 'Completed'
    $('#list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Delete items
    $('#list').on('click', '.trash', function() {
        $(this).parent().remove();
    });

    // New List - Delete All Items
    $('#newList').click(function() {
        $('#list li').remove();
        document.getElementById('addItem').value = "";
        document.getElementById('addQty').value = "";
    })

    // Make things sortable
    $('#list').sortable({axis:'y'});

});