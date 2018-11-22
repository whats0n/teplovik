import {ACTIVE} from '../constants';

$('.js-accordion').each((i, container) => {
  container = $(container);
  const items = container.find('.js-accordion-item');

  items.each((i, item) => {
    item = $(item);
    const control = item.find('.js-accordion-control');
    const content = item.find('.js-accordion-content');

    control.on('click', e => {
      e.preventDefault();
      control.toggleClass(ACTIVE);
      content.stop(true, true, true).slideToggle(400);
    });
  });
});
