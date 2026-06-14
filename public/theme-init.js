// Applies the saved theme before first paint to avoid a flash.
// Default theme is dark unless the user explicitly chose light.
(function () {
  try {
    if (localStorage.getItem('theme') !== 'light') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
