// $("h1").css("color","red")

// $("h1").addClass("big another");
// $("h1").removeClass("another");


$("button").html("<em>Click </em>me");

// $("h1").text("<b>namaste</b>")

$("a").attr( "href", "http://www.bing.com" );

// for(i=0; i<document.querySelectorAll("button").length; i++)
// {
//    document.querySelectorAll("button")[i].addEventListener("click", function()
//    {
//     document.querySelector("h1").style.color="blue"
//    })
// }

$("button").click(function(){
    $("h1").css("color", "yellow")
})

$(document).keydown(function(event){
    $("h1").html(event.key)
})

$("h1").on("mouseover",function(){
    $("h1").css("color", "green")
})


$("button").remove()

$("h1").append("<button>append</button>")
$("h1").prepend("<button>prepend</button>")
$("h1").before("<button>before</button>")
$("h1").after("<button>after</button>")
