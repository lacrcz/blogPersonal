$(document).ready(function() {
    // Smooth scrolling para enlaces
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    
    // Efecto de navbar al hacer scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    
    // Cambiar clase active en el menú según scroll
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 100;
        
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navbar-nav .nav-link.active').removeClass('active');
                $('.navbar-nav .nav-link').eq(i).addClass('active');
            }
        });
    }).scroll();
    
    // Animación de elementos al aparecer
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('visible');
            }
        });
    });
    
    // Validación del formulario de contacto
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('Gracias por tu mensaje. Te responderé pronto.');
        this.reset();
    });
});