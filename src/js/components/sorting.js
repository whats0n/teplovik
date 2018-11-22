import {OPEN,ACTIVE,BODY} from '../constants';

const sorting = $('.js-sorting');

sorting.each((i, container) => {
  container = $(container);
  const control = container.find('.js-sorting-control');
  const value = container.find('.js-sorting-value');
  const items = container.find('.js-sorting-item');

  control.on('click', e => {
    e.preventDefault();
    container.toggleClass(ACTIVE);
  });

  items.each((i, item) => {
    item = $(item);
    const otherItems = items.not(item);
    const itemValue = item.data('value');

    if (i === 0) {
      item.addClass(ACTIVE);
      value.text(itemValue);
    }
    
    item.on('click', e => {
      e.preventDefault();

      otherItems
        .add(container)
        .removeClass(ACTIVE);
      item.addClass(ACTIVE);

      value.text(itemValue);
    });

  });
});

BODY.on('click', e => {
  if ($(e.target).closest(sorting).length || !sorting.hasClass(ACTIVE)) return;
  sorting.removeClass(ACTIVE);
});
