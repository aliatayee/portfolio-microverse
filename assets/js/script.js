function menuFunction() {
    const links = document.getElementById('mobile-menu-container');
    if (links.style.display === 'block') {
      links.style.display = 'none';
    } else if (window.screen.width < 995) {
      links.style.display = 'block';
    } else {
      links.style.display = 'none';
    }
  }

  function menuOptions(param) {
    window.location.href = param;
    const links = document.getElementById('mobile-menu-container');
    links.style.display = 'none';
  }
  