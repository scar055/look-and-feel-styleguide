 // checkbox ENTER key functie
 document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('keydown', e => {
    if (e.key === "Enter") {
      e.preventDefault();
      cb.checked = !cb.checked;
      cb.dispatchEvent(new Event("change"));
    }
  });
});