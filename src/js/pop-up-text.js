import $ from 'jquery';

$('[data-btn-more]').on('click', function () {
  $(this).siblings('[data-text]').toggle('slow');

  $(this).find('[data-text-more]').toggleClass('is-hidden');
  $(this).find('[data-text-less]').toggleClass('is-hidden');
});