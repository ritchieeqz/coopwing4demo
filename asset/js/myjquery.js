$().ready(function () {
   
    $("#linkout").click(function () {
        alert("This okay !!!");
    });

    // $(window).scroll(function() {
    //     // declare variable
    //     var topPos = $(this).scrollTop();
    
    //     // if user scrolls down - show scroll to top button
    //     if (topPos > 100) {
    //       $(".navbar").css("background-color", "transparent");
    //         console.log("transparent");
    //     } else {
    //       $(".navbar").css("background-color", "#fafafa");
    //       console.log("#fafafa");
    //     }
    // })

    $.urlParam = function(){
        var results = new RegExp('#([^&#]*)').exec(window.location.href);
        if (results != null) {
            return results[0];
        }else{
            return "#home";
        }
        
    }

    $.jumpTo = function (e) {
        console.log(e);
    }

    // Directive template

    $.get('tpl/history.html', function(data) {    
        var lines = data.split("\n");
    
        $.each(lines, function(n, elem) {
           $('#historyTxt').append('<div>' + elem + '</div>');
        });
    });

    $.get('./tpl/navbar_tpl.html',function (data){  
        $('#navbar_tpl').append(data);

    });

    $.get('tpl/footer_tpl.html',function (data){  
        $('#footer_tpl').append(data);

    });

})


// Animate to ID
var jumpTo = function (TargetId) {
    $('html, body').animate({scrollTop: $(TargetId).offset().top}, 600);
}

