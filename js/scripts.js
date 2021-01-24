
        //Carousel script
          $(document).ready(function(){
            $('#mycarousel').carousel( { interval: 2000 } );
            $('#carouselButton').click(function(){
              if ($('#carouselButton').children('span').hasClass('fa-pause')) {
                $('#mycarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
              }
              else {
                $('#mycarousel').carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
              }

            });

        //Modals Scripts
            //Login Modal
            $('#loginButton').click(function() {
              $('#loginModal').modal('show');
            });
            $('#closeModal').click(function() {
              $('#loginModal').modal('hide')
            });
            $('#cancelButton').click(function() {
              $('#loginModal').modal('hide')
            });

            //Reserve Modal
            $('#reserveButton').click(function() {
              $('#reserveModal').modal('show');
            });
            $('#closeModal2').click(function() {
              $('#reserveModal').modal('hide')
            });
            $('#cancelButton2').click(function() {
              $('#reserveModal').modal('hide')
            });
          });
