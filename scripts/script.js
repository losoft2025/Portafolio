document.addEventListener("DOMContentLoaded", function() {
  const walkingElement = document.getElementById("walking");
  const container = document.getElementById("border");
  const form = document.getElementById("contactForm");
  const mensajeEstado = document.getElementById("mensajeEstado");
  
  // Verificar que los elementos existen antes de usarlos
  if (walkingElement && container) {
    // Variables para la animación
    let position = -50;
    let direction = 1; // 1: derecha, -1: izquierda
    let speed = 0.5; // Velocidad para el carrito
    
    // Función de animación
    function animate() {
      // Calcula nueva posición
      position += speed * direction;
      
      // Obtén el ancho del contenedor
      const containerWidth = container.offsetWidth;
      
      // Cambia de dirección cuando llegue a los bordes
      if (position > containerWidth + 50) {
        direction = -1;
        walkingElement.style.transform = "scaleX(-1)"; // Gira horizontalmente
      } else if (position < -50) {
        direction = 1;
        walkingElement.style.transform = "scaleX(1)"; // Vuelve a la dirección normal
      }
      
      // Añade un pequeño efecto de "rebote" en las curvas
      if ((position > containerWidth + 40 && direction > 0) || 
          (position < -40 && direction < 0)) {
        walkingElement.style.bottom = "-4px"; // Se eleva ligeramente en las curvas
      } else {
        walkingElement.style.bottom = "-6px"; // Posición normal
      }
      
      // Actualiza la posición
      walkingElement.style.left = position + "px";
      
      // Continúa la animación
      requestAnimationFrame(animate);
    }
    
    // Iniciar la animación aquí
    animate();
  } else {
    console.error("Elementos para la animación no encontrados");
  }
  
  // Gestión del formulario de contacto
  if (form && mensajeEstado) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que la página se recargue
      mensajeEstado.textContent = "Estamos trabajando en el backend. Pronto estará disponible.";
      mensajeEstado.style.display = "block";
    });
  }
});