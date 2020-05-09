//====================Back To Top==========================	

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })

});



$("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    itemsMobile: [550, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    slideSpeed: 1000,
    autoPlay: true
});



$("#testimonial-slider2").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    itemsMobile: [550, 1],
    pagination: false,
    navigation: false,
    navigationText: ["", ""],
    slideSpeed: 1000,
    autoPlay: true
});
//====================active nav==========================	

var url = window.location;
// Will only work if string in href matches with location
$('ul.nav a[href="' + url + '"]').parent().addClass('active');

// Will also work for relative and absolute hrefs
$('ul.nav a').filter(function() {
    return this.href == url;
}).parent().addClass('active')


//====================Animation Effect==========================	

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};;