const changeTheme = (newTheme) => {
  const domBody = document.getElementsByTagName('body')[0];
  domBody.classList.value = newTheme;

  const respectiveRadioBtn = document.querySelector(`#${newTheme}`)
  respectiveRadioBtn.checked = true

  window.localStorage.setItem('prefered-theme', newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  let preferedTheme = window.localStorage.getItem('prefered-theme');
  if (!preferedTheme) preferedTheme = 'theme1'
  changeTheme(preferedTheme);

  const radioButtons = document.querySelectorAll('.radio-container > input');

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', (evt) => {
      const newTheme = evt.target.id;
      changeTheme(newTheme);
    });
  });
});
