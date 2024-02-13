// $("button").click(function(){
//     $("h1").hide()
// })


$(".hide").on("click",function(){
    $("h1").hide()
})


$(".show").on("click",function(){
    $("h1").show()
})


$(".fadein").on("click",function(){
    $("h1").fadeIn()
})


$(".fadeout").on("click",function(){
    $("h1").fadeOut()
})


$(".toggle").on("click",function(){
    $("h1").toggle()
})


$(".fadetoggle").on("click",function(){
    $("h1").fadeToggle()
})


$(".slideup").on("click",function(){
    $("h1").slideUp()
})


$(".slidedown").on("click",function(){
    $("h1").slideDown()
})


$(".slidetoggle").on("click",function(){
    $("h1").slideToggle()
})


$(".animate").on("click",function(){
    $("h1").animate({"font-size":"600%"}).animate({"opacity":0.5});
})

