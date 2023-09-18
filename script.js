$(document).ready(function(){
    $("header button").click(function(){
       $("form").slideDown()
   })

   $("#cancel-btn").click(function(){
    $("form").slideUp()
   })

    $("form").on('submit', function(e){
        e.preventDefault()

        const ulrNewImg = $("#ulr-new-img").val()
        const newImg = $("<li style='display:none'></li>")
        $(`<img src="${ulrNewImg}">`).appendTo(newImg)
        $(`
        <div class="overlay-img-link">
            <a href="${newImg} target = "_blank" title="Full size image">
              Full size image
            </a>
        </div>
        `).appendTo(newImg)
        $(newImg).appendTo("ul")
        $(newImg).fadeIn(1000)
        $("#ulr-new-img").val("     ")
   })
})

