import { setStorage, getStorage, getNode, deleteStorage } from './lib/index.js';

const input = getNode('#textField');
const clear = getNode('button[data-name="clear"]');

input.addEventListener('input', (e) => {
  console.log(input.value);
  setStorage('content', input.value);
});

clear.addEventListener('click', () => {
  input.value = '';
  deleteStorage();
});

async function init() {
  const data = await getStorage('content');
  console.log(data);
  input.value = data;
}

init();
