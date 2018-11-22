import {OPEN} from '../constants';
$('.js-modal-control').each((i, control) => {
  control = $(control);
  const modal = $(`.js-modal[data-modal="${control.data('target')}"]`);

  control.on('click', e => {
    e.preventDefault();
    modal.toggleClass(OPEN);
  });

  modal.on('click', e => {
    if ($(e.target).closest('.js-modal-prevent').length) return;
    modal.removeClass(OPEN);
  });
});

$('.js-modal-close').each((i, control) => {
  control = $(control);
  const modal = control.closest('.js-modal');

  control.on('click', e => {
    e.preventDefault();
    modal.removeClass(OPEN);
  });
});
