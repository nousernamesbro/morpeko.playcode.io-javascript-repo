document.querySelectorAll("button").forEach(button => {
  button.addEventListener("mousemove", event => {
    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    button.style.setProperty("--x", x + "%");
    button.style.setProperty("--y", y + "%");
  });

  button.addEventListener("mouseleave", () => {
    button.style.setProperty("--x", "50%");
    button.style.setProperty("--y", "50%");
  });
});

// cant be shitted to resolve the specifity war
// that causes several problems and mangles the site
// so the below lines annihlate the divs instead so there isn't anything to mangle

document.addEventListener('DOMContentLoaded', (event) => {
    const elementToRemove = document.getElementById('playcode-badge-container');

    if (elementToRemove) {
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
    
    elementsToRemove.forEach(el => {
        el.parentNode.removeChild(el);
    });  
});
document.addEventListener('DOMContentLoaded', (event) => {
    const elementToRemove = document.getElementById('playcode-free-banner');

    if (elementToRemove) {
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
    
    elementsToRemove.forEach(el => {
        el.parentNode.removeChild(el);
    });  
});

