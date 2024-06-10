function rect_click(rect, shift) {
// Handle when rectangle is clicked, modifying the class of rectangle
  let current_class = rect.getAttribute('class');

  switch (`${current_class}-${shift}`) {
    case 'unselected-false':
      rect.setAttribute('class', 'primary');
      break;
    case 'unselected-true':
      rect.setAttribute('class', 'secondary');
      break;
    case 'primary-false':
      rect.setAttribute('class', 'unselected');
      break;
    case 'primary-true':
      rect.setAttribute('class', 'secondary');
      break;
    case 'secondary-false':
      rect.setAttribute('class', 'primary');
      break;
    case 'secondary-true':
      rect.setAttribute('class', 'unselected');
      break;
    default:
      console.log(`Unrecognised current-class` + current_class);
  }
}

function ids_by_class(class_name) {
// Find all elements on the page with the specified class
  let selector = 'rect.' + class_name;
  let elements = document.querySelectorAll(selector);
  let ids = Array.from(elements).map(elem => elem.id);
  return ids.join(';');
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const button = dropdown.querySelector('.dropdown-trigger button');
  button.addEventListener('click', () => {
    dropdown.classList.toggle('is-active');
  });
});
