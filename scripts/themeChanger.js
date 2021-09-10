document.addEventListener('DOMContentLoaded', (_) => {
  const radioButtons = document.querySelectorAll('.radio-container > input');

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', (evt) => {
      const newTheme = evt.target.id;

      const domBody = document.getElementsByTagName('body')[0];

      domBody.classList.value = newTheme;
    });
  });
});
