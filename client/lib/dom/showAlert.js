import { addClass, removeClass } from './css.js';
import { getNode as $ } from './getNode.js';
import { isString } from '../utils/index.js';

export function showAlert(node, msg = '오류 발생', timeout = 1000) {
  if (isString(node)) node = $(node);

  node.textContent = msg;
  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass('.alert-error', 'is-active');
  }, timeout);
}
