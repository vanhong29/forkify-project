export const addHandlerReload = function () {
  const logo = document.querySelector('.header-link');
  logo.addEventListener('click', function () {
    window.location.hash = '';
    location.reload();
  });
};
