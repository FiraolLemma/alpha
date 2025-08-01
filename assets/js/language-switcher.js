// alpha/assets/js/language-switcher.js
function changeLanguage(lang) {
  // Load the language file
  fetch(`languages/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      // Update all elements with data-translate attribute
      document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (data[key]) {
          if (element.tagName === 'INPUT' && element.placeholder) {
            element.placeholder = data[key];
          } else {
            element.textContent = data[key];
          }
        }
      });
      
      // Update the document title
      if (data.title) {
        document.title = data.title;
      }
      
      // Store the selected language in localStorage
      localStorage.setItem('selectedLanguage', lang);
    })
    .catch(error => {
      console.error('Error loading language file:', error);
    });
}

// Check for saved language preference
document.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  if (savedLanguage) {
    changeLanguage(savedLanguage);
  }
});