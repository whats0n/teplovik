import tooltipster from 'tooltipster';
const containers = $('.js-tooltip');

containers.each((i, container) => {
  container = $(container);
  const position = container.data('position');

  container.tooltipster({
	  animation: 'fade',
	  delay: 0,
	  side: position && position.length ? position : 'right'
  });
});
