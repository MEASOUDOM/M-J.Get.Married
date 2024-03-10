const color = [
    {
        name:'pink',
        code:'#fb839e',
        url:'pink2.css',
    },
    {
        name:'light blue',
        code:'#3e99f4',
        url:'light-blue.css',
    },
    
    {
        name:'light green',
        code:'#0dcebd',
        url:'light-green.css',
    },
    
    {
        name:'red',
        code:'#cc3a3b',
        url:'Red.css',
    },
    
    {
        name:'yellow',
        code:'#ff9801',
        url:'Yellow.css',
    } 
]

$(document).ready(function(){
    setColors();
    function setColors(){
        for(let i = 0; i < color.length; i++){
            const span = document.createElement("span");
            span.style.backgroundColor = color[i].code;
            $(".colors").append(span);
        }
    }
    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href",color[index].url);
    });

    $(".theme-mode").change(function(){
        if($(this).val() == "light") {
            $("body").removeClass("dark");
        }
        else {
            $("body").addClass("dark");
        }
    })
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })
})