import {DOC, BODY, NO_TOUCH, IS_TOUCH} from './constants';

DOC.ready(() => {
  !('ontouchstart' in window) ? BODY.addClass(NO_TOUCH) : BODY.addClass(IS_TOUCH);
  require('./components');
});
