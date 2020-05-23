/*Sticky navbar*/

let navbar =document.querySelector(".navbar");
// let sec2 = document.querySelector(".section-2");

// window.addEventListener('scroll', function()
// {
//     let oTop = sec2.offset().top-window.innerHeight;
//     console.log(oTop)
// });


$(window).scroll(function()
{
    let oTop = $('.section-2').offset().top-window.innerHeight;

     console.log($(window).scrollTop()-oTop)
    if($(window).scrollTop()>oTop)
    {
        jQuery('.navbar').addClass('sticky')
    }
    else{
        jQuery('.navbar').removeClass('sticky')
    }


})


/* counter animation*/

let ncount = function(selector)
{
    $(selector).each(function()
    {
        $(this).animate({
            counter:$(this).text()
        },{
            duration:2000,
            easing:'swing',
            step:function(value)
            {
                $(this).text(Math.ceil(value))
            }
        })
    })
}
let a=0;
$(window).scroll(function(){
    let oTop = $('.numbers').offset().top-window.innerHeight;

    
     console.log($(window).scrollTop()-oTop)
    if(a==0&&$(window).scrollTop()>=oTop)
    {
        a++;
        ncount(".rect>h1")
    }
})