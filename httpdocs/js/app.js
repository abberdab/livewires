(function() {
  $(document).on('click', '.js-reveal', function(e) {
    var target;
    target = $(this).attr('href');
    $(target).toggleClass('opened');
    return e.preventDefault();
  });

}).call(this);

(function() {
  $('.js-options input').change(function() {
    var check, type;
    type = $(this).attr('type');
    check = $(this).parent('label');
    if (type === 'checkbox') {
      return check.toggleClass('checked');
    } else if (type === 'radio') {
      check.siblings('label').removeClass('checked');
      return check.addClass('checked');
    }
  });

}).call(this);

(function() {
  $('.content > iframe').each(function() {
    var isMap, map, source;
    source = $(this).attr('src');
    map = /maps.google/;
    isMap = map.test(source);
    if (isMap) {
      return $(this).wrap('<figure class="map"></figure>');
    } else {
      return $(this).wrap('<figure class="video"></figure>');
    }
  });

  $('.video').fitVids();

}).call(this);

(function() {
  $('.js-open-canvas').click(function(e) {
    var target, targetName;
    target = $(this).find('a').attr('href');
    targetName = target.substring(4);
    $(this).toggleClass('active');
    $(target).toggleClass('offcanvas--open');
    if ($(target).hasClass('offcanvas--left')) {
      $('.offcanvas--push').toggleClass('offcanvas--push-left');
      $('.offcanvas--squish').toggleClass('offcanvas--squish-left');
    } else if ($(target).hasClass('offcanvas--right')) {
      $('.offcanvas--push').toggleClass('offcanvas--push-right');
      $('.offcanvas--squish').toggleClass('offcanvas--squish-right');
    }
    return e.preventDefault();
  });

}).call(this);

(function() {
  $('.js-scroll').click(function(e) {
    var dest;
    dest = $(this).attr('href');
    e.preventDefault();
    return $('html, body').animate({
      scrollTop: $(dest).offset().top
    }, 1000);
  });

}).call(this);

(function() {
  $('.tabs').each(function() {
    var $active, $content, $links;
    $links = $(this).find('a');
    $active = $($links.filter('[href=\'' + location.hash + '\']')[0] || $links[0]);
    $active.addClass('active');
    $content = $($active.attr('href'));
    $links.not($active).each(function() {
      return $($(this).attr('href')).hide();
    });
    return $(this).on('click', 'a', function(e) {
      $active.removeClass('active');
      $content.hide();
      $active = $(this);
      $content = $($(this).attr('href'));
      $active.addClass('active');
      $content.show();
      return e.preventDefault();
    });
  });

}).call(this);

(function() {


}).call(this);
