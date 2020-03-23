document.addEventListener('click', (evt) => {
  const share = evt.target.closest('.js-share');
  if (!share) {
    return;
  }

  if (!share.dataset.title) {
    return;
  }

  navigator.share({
    title: share.dataset.title,
    text: share.dataset.text,
    url: share.dataset.url || location.href
  });

  evt.preventDefault();
});
