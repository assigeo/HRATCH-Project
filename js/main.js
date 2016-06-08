(function($) {

    // If clicked outside the dropdown (inside the css-bar), then close it.
    function toggleDropdown() {
        $(document).on('click', '.add-style', function() {
            $('.dropdown-props').slideDown(200);
            $('.css-props').css('height', '100%');

            $('.css-palette').click(function (ev) {
                if(ev.target.id == '.dropdown-props') {
                    alert("Triggered if...");
                } else {
                    $('.dropdown-props').slideUp(200);
                }
            });
        });
    }

    function clearBlocks() {
        // $('.html-blocks').addClass('hide');
    }
    
    // When level icon is clicked, the modal opens.
    function openModal() {
        $('.settings li:nth-child(1) a').click(function() {
            $('.modal-screen').addClass('modal-open');
        })     
    }

     // When clicked outside of modal box, the modal is closed.
    function closeModal() {
        $('.modal-screen').click(function(event) {
            if(event.target == this) {
                $('.modal-screen').removeClass('modal-open');
            }
        });

        // If the continue button is clicked then close the modal. 
        $('.continue-btn').click(function(){
            $('.modal-screen').removeClass('modal-open');
        });
    }

    // Once the "Basic Tag" button is clicked, then show the Basics Blocks.
    function basicToggle() {
            $('.html-menu li:nth-child(1)').click(function() {
                
                 $('.basic-section').toggleClass('hide');
                 $('.layout-section').addClass('hide');
                 $('.text-section').addClass('hide');
            });
        }

     // Once the "Layout Tag" button is clicked, then show the Basics Blocks.
    function layoutToggle() {
            $('.html-menu li:nth-child(2)').click(function() {
                 $('.layout-section').toggleClass('hide');
                 $('.basic-section').addClass('hide');
                 $('.text-section').addClass('hide');
            });
        }

    function textToggle() {
        $('.html-menu li:nth-child(3)').click(function() {
                $('.text-section').toggleClass('hide');
                $('.basic-section').addClass('hide');
                $('.layout-section').addClass('hide');
        });
    }


    // MAIN function.
    $(document).ready(function() {

        clearBlocks();

        $('.basic-block').draggable();
        $('.layout-block').draggable();
        $('.text-block').draggable();


        // Enables the CSS "Add Style" feature menu.
        toggleDropdown();

        // Enables the LEVELS Modal
        openModal();
        closeModal();

        // Enables the Tags menu button
        basicToggle();
        layoutToggle();
        textToggle();

    });

})(jQuery);