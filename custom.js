$(".js-input").focus(function(){
    $(".label-text").addClass('is-active')
})
$('.js-input').blur(function(){
    if($(this).val().length==0){
        $(this).parent().find('.label-text').removeClass('is-active')
        $('form').removeClass('invalid')
    }
})

const input = $('.js-input')
$(".btn-submit").click(()=>{
    if(input.val().length==0){
        $('form').addClass('invalid')
    }
})