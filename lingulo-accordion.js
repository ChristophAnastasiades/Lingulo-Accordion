/*
Lingulo-Accordion
Created by Christoph Anastasiades (http://www.lingulo.com)
Feel free to use this in your commercial or non-commercial projects
*/
$(function()
{
    var closedHeight = 35; // Height of closed accordion
    var speedClose = 500; // Time of the closing animation in ms
    var speedOpen = 500; // Time of the opening animation in ms
    var acc = "#lingulo-accordion"; // Accordion Container
    var elem = "h3"; // Accordion trigger element
    var old = null;
    $(acc + " > div " + elem + ":first-child").click(function()
    {
        var i = $(this).parent().index();
        if(old !== i)
        {
            $(acc + " > div:eq(" + old + ")").animate({height:closedHeight + "px"},speedClose);
            var curHeight = $(acc + " > div:eq(" + i + ")").height();
            var autoHeight = $(acc + " > div:eq(" + i + ")").css('height', 'auto').height();
            $(acc + " > div:eq(" + i + ")").height(curHeight).animate({ height: autoHeight }, speedOpen, function()
            {
                $(acc + " > div:eq(" + i + ")").css('height', 'auto');
            });
            $(acc + " > div:eq(" + i + ")").animate({height:"auto"});
            old = i;
        }        
        else
        {
            $(acc + " > div:eq(" + old + ")").animate({height:closedHeight + "px"});
            old = null;
        }        
    });
});