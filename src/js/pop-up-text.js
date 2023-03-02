import $ from 'jquery';

$('[data-btn-more]').on('click', function () {
  $("section.about-us").animate({
    height: "inherit"
  }, 800, function(){
    $(this).find('[data-text-less]').removeClass('is-hidden');
  $(this).find('[data-btn-less]').removeClass('is-hidden');
  });
  $(this).siblings('[data-text]').toggle('slow');
  $(this).find('[data-text-more]').addClass('is-hidden');
    $(this).find('[data-btn-more]').addClass('is-hidden');
});

$('[data-btn-less]').on('click', function () {
  $("section.about-us").animate({
    height: "inherit"
  }, 800, function () {
    
  $(this).find('[data-text-more]').removeClass('is-hidden');
  $(this).find('[data-btn-more]').removeClass('is-hidden');
  });
  $(this).siblings('[data-text]').toggle('slow');
  $(this).find('[data-text-less]').addClass('is-hidden');
  $(this).find('[data-btn-less]').addClass('is-hidden');
});