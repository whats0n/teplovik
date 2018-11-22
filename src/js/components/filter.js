import {ACTIVE, HIDDEN} from '../constants';

const sidebar = $('.js-catalog-sidebar');
const content = $('.js-catalog-content');

$('.js-filter-open').each((i, item) => {
  item = $(item);

  item.click(function() {
    sidebar.addClass(ACTIVE);
    content.addClass(HIDDEN);
  });
});
$('.js-filter-close').each((i, item) => {
  item = $(item);

  item.click(function() {
    sidebar.removeClass(ACTIVE);
    content.removeClass(HIDDEN);
  });
});
