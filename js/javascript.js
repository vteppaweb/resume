		
		function description(msg){   // Show Description Details on Div 'description'
			if (msg=="Summary") {
				document.getElementById('description').innerHTML = "Cover Letter - Professional Summary";
			} 
			if (msg=="Experience") {
				document.getElementById('description').innerHTML = "Employment Details";
			} 
			if (msg=="Education") {
				document.getElementById('description').innerHTML = "Academic Achievements Details";
			} 
			if (msg=="Skills") {
				document.getElementById('description').innerHTML = "Soft and Hard Skills Details";			
			} 
			
		}

		function clear_description(){  // Do not show nothing on Div 'description'
			   document.getElementById('description').innerHTML = "";
		}


		// JavaScript Function for TOOLTIP 
        function ready(){
            $('[data-toggle="tooltip"]').tooltip();
        }



          $(document).ready(function(){

            // ToolTip
            $('[data-toggle="tooltip"]').tooltip();

            // Change Carousel Interval
            $('#mycarousel').carousel({ interval: 5000});

            // Botton Pause
            $('#carousel-pause').click(function(){
                $('#mycarousel').carousel('pause');
            });
            // Botton Play
            //$('#carousel-play').click(function(){
               // $('#mycarousel').carousel('cycle');
            //});

            // Change Bottons Play/Pause 
            $('#carouselButton').click(function(){
                if($('#carouselButton').children('span').hasClass('fa-pause')){
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play');
                }
                else if($('#carouselButton').children('span').hasClass('fa-play')){
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                }
                
            });


            // Login <a> tag to Show Login Modal
            $('#a_loginModal').click(function(){

                $('#loginModal').modal('show');
            });


          })



    // MDB Lightbox Init
    $(function () {
    //$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
   // $('#galleryModal').modal('show');
    });


               // Login <a> tag to Show Login Modal
            $('#a_galleryModal').click(function(){

                $('#galleryModal').modal('show');
            });