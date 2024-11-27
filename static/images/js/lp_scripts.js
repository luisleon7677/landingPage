// JavaScript para alternar el estado 'active' de los elementos de la navbar
document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', function() {
      // Elimina la clase 'active' de todos los ítems
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      
      // Añade la clase 'active' al ítem clickeado
      this.classList.add('active');
    });
  });