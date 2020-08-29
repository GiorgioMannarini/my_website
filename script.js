$(function () {
        // GLOBAL VARIABLES
        var scrolledUp = false
        var cardsClosed = true
        // Mobile first scrolling
        var startingY = 0
        var endingY = 0
        var mobilePerc = 0

        // FUNCTIONS
        const animateDivTop = selector => {
          $(selector).animate({ top: '-100%' }, 500, function () {
            $('body').css('overflow', 'auto')
          })
        }

        const animateDivBottom = selector => {
          $(selector).animate({ top: '0%' }, 500)
        }

        $.fn.isInViewport = function () {
          var elementTop = $(this).offset().top
          var elementBottom = elementTop + $(this).outerHeight()
          var viewportTop = $(window).scrollTop()
          var viewportBottom = viewportTop + $(window).height()
          return elementBottom > viewportTop && elementTop < viewportBottom
        }

        const scrollFirstUp = () => {
          scrolledUp = true //first div scrolled
          animateDivTop('.page-1')
        }

        const scrollFirstDown = () => {
          $('body').css('overflow', 'hidden')
          scrolledUp = false
          cardsClosed = true
          $('.cards').toggleClass('transition')
          animateDivBottom('.page-1')
        }
        const startCardAnimation = () => {
          cardsClosed = !cardsClosed
          setTimeout(function () {
            $('.cards').toggleClass('transition')
            $('#projects').addClass('div-card-form')
          }, 700)
        }

        // EVENTS
        $('.nav-item').click(function(){
          if (!scrolledUp) {
            scrollFirstUp()
            if($('.cards').isInViewport() && cardsClosed){
              startCardAnimation()
            }
          }
          
        })
        //First page animation
        $(window).on('wheel', function (e) {
          var scroll = -e.originalEvent.wheelDelta
          var scrollPos = $('body').scrollTop()

          // Animation for the first div
          if ((scroll > 0) & !scrolledUp) {
            scrollFirstUp()
          }
          if ((scroll < 0) & (scrollPos == 0) && scrolledUp) {
            scrollFirstDown()
          }
          if ($('.cards').isInViewport() && cardsClosed && scrolledUp) {
            startCardAnimation()
          }
        })
        $(window).on('touchstart', function (e) {
          startingY = e.changedTouches[0].pageY
        })

        //mobile scrolling for the first page
        $(window).on('touchend', function (e) {
          endingY = e.changedTouches[0].pageY

          mobilePerc = endingY - startingY
          if (mobilePerc < -150 && !scrolledUp) {
            scrollFirstUp()
          }
          if ($('.cards').isInViewport() && cardsClosed && scrolledUp) {
            startCardAnimation()
          }
        })
      })