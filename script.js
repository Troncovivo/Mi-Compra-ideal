// Utilizando jQuery para seleccionar el elemento y cambiar su contenido
$(document).ready(function() {
7
  $(document).ready(function() {
    
    var button = $('#darkModeButton');
  
    // Establecer las propiedades del botón
    button.css({
      'bottom': '64px',
      'right': 'unset',
      'left': '32px',
      'transition': '0.5s'
    });
  });

  // Función para guardar la preferencia de modo oscuro en una cookie
  function getDarkModePreferenceFromCookie() {
    var cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('darkModePreference='));
    
    if (cookieValue) {
      return cookieValue.split('=')[1] === 'true';
    }
    
    return false;
  } // Función para obtener la preferencia de modo oscuro desde una cookie
  var darkModeEnabled = getDarkModePreferenceFromCookie();

  if (darkModeEnabled) {
    enableDarkMode();
  }

  // Alternar el modo oscuro al hacer clic en un botón
  $('#darkModeButton').click(function() {
    if (darkModeEnabled) {
      disableDarkMode();
      darkModeEnabled = false;
    } else {
      enableDarkMode();
      darkModeEnabled = true;
    }
    saveDarkModePreferenceToCookie(darkModeEnabled); 
  });

  // Función para habilitar el modo oscuro
  function enableDarkMode() {
    $('body').addClass('dark-mode');
  }

  // Función para deshabilitar el modo oscuro
  function disableDarkMode() {
    $('body').removeClass('dark-mode');
   
  }

});

