function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
  const options = {
    bottom: '32px', // distancia desde el borde inferior de la pantalla
    right: '32px', // distancia desde el borde derecho de la pantalla
    mixColor: '#fff', // color base para mezclar con el modo oscuro
    backgroundColor: '#fff', // color de fondo de la página
    buttonColorDark: '#100f2c', // color del botón en modo oscuro
    buttonColorLight: '#fff', // color del botón en modo claro
    saveInCookies: true, // guardar la preferencia del usuario en cookies
    label: '🌓', // texto o emoji del botón
    autoMatchOsTheme: true // adaptarse al tema preferido del sistema operativo
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();


  function toggleDarkMode() {
    let root = document.documentElement;
    let darkMode = root.style.getPropertyValue("--bg-color") == "white";
    if (darkMode) {
      root.style.setProperty("--bg-color", "black");
      root.style.setProperty("--text-color", "white");
      root.classList.add("dark-mode"); // agregar la clase .dark-mode
    } else {
      root.style.setProperty("--bg-color", "white");
      root.style.setProperty("--text-color", "black");
      root.classList.remove("dark-mode"); // quitar la clase .dark-mode
    }
  }
  
    