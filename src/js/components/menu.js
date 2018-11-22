import { OPEN, ACTIVE } from '../constants';

const controls = $('.js-menu-control');
const submenus = $('.js-menu-submenu');
const links = $('.js-menu-link');
const containers = $('.js-menu');
let active = false;

controls.each((i, control) => {
  control = $(control);
  const otherControl = controls.not(control);
  const container = containers.filter(`[data-container="${control.data('target')}"]`);
  const otherContrainers = containers.not(container);

  control.on('click', e => {
    e.preventDefault();
    if (control.hasClass(ACTIVE)) {
      active = false;
      control.removeClass(ACTIVE);
      container.removeClass(OPEN);
    } else {
      active = true;
      otherControl.removeClass(ACTIVE);
      otherContrainers.removeClass(OPEN);
      control.addClass(ACTIVE);
      container.addClass(OPEN);
    }
    
  });
});

$(document).on('click', e => {
  const target = $(e.target);
  if (!active || target.closest(controls).length || target.closest(containers).length) return;
  controls.removeClass(ACTIVE);
  containers.removeClass(OPEN);
});

const boxes = $('.js-menu-item');

boxes.each((i, container) => {
  container = $(container);
  const link = container.find('.js-menu-link');
  link.on('click', e => {
    e.preventDefault();
    if (!container.hasClass(ACTIVE)) {
      boxes.removeClass(ACTIVE);
      container.addClass(ACTIVE);
    } else {
      container.removeClass(ACTIVE);
    }
    active = !active;
  });
});
