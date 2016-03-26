$(document).ready(function(){   
       $('#leftArrow').click(function() {
        $('#sideNavParent').removeClass('hide');
        $('#sideNavParent').addClass('show');
        $('#sideNavParent1').removeClass('show');
        $('#sideNavParent1').addClass('hide');
        $('.body-content').css("margin-left", "60px");
        $(this).removeClass('show');
        $(this).addClass('hide')
        $('#rightArrow').removeClass('hide');
        $('#rightArrow').addClass('show');
           
       });
       
       $('#rightArrow').click(function() {
        $('.body-content').css("margin-left", "195px");
        $('#sideNavParent1').removeClass('hide');
        $('#sideNavParent1').addClass('show');
        $('#sideNavParent').removeClass('show');
        $('#sideNavParent').addClass('hide');
        $(this).removeClass('show');
        $(this).addClass('hide')
        $('#leftArrow').removeClass('hide');
        $('#leftArrow').addClass('show');
       });
       
       var homeGlyphH =  {
           color: "red",
           backgroundColor: "#1C1C1C",
           borderLeftColor: "#1C1C1C"
       };
       
       var homeGlyph =  {
           color: "#999999",
           backgroundColor: "#1C1C1C",
           borderLeftColor: "#1C1C1C"
       };
       
       $('#glyphHomea').mouseenter(function(){
          
            $('#glyphHome').css(homeGlyphH);
       });
       
       $('#glyphHomea').mouseleave(function(){
           $('#glyphHome').css(homeGlyph);
       }) 
       

           
       $('.pdsa-small-navbar ul li a[href="download.html"]').tooltip({title: "Download", placement: "right"});
       $('.pdsa-small-navbar ul li a[href="genres.html"]').tooltip({title: "Genres", placement: "right"});
       $('.pdsa-small-navbar ul li a[href="playlists.html"]').tooltip({title: "Playlists", placement: "right"});
       $('.pdsa-small-navbar ul li a[href="songs.html"]').tooltip({title: "Songs", placement: "right"});
        $('.pdsa-sn-wrapper').find('.musicA').append('<hr width="75%">');   
});