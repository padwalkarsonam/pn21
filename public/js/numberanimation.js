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

    
     
    if(a==0&&$(window).scrollTop()>=oTop)
    {
        a++;
        ncount(".rect>h1")
    }
})