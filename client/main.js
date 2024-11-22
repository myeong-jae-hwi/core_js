import {
  attr,
  jaehwi,
  delayP,
  getNode,
  changeColor,
  renderLoading,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  try {
    const response = await jaehwi.get(END_POINT);
    // getNode('.loadingSpinner').remove();

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });

    const data = response.data;

    await delayP(300);

    data.forEach((user) => renderUserCard(userCardInner, user));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch {
    renderEmptyCard(userCardInner);
    console.error('!!!!!!!!!!!!!!!!!!!!');
  }
}
renderLoading(userCardInner);
renderUserList();

function handleDeleteCard(e) {
  const btn = e.target.closest('button');
  if (!btn) return;

  const idx = attr(btn.parentElement, 'data-index');
  console.log(idx);

  jaehwi.delete(`${END_POINT}/${idx}`);
}

userCardInner.addEventListener('click', handleDeleteCard);
