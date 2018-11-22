import PerfectScrollbar from 'perfect-scrollbar';

const watch = [];
$('.js-scrollbar').each((i, container) => watch.push(new PerfectScrollbar(container)));

$(window).on('resize', () => watch.forEach(ps => ps.update()));
