		
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




// Portfolio Code (Image Gallery) //


 let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
           
/* End Image Gallery Code */