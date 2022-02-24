function createElement(type = 'div', ...classes) {
  const newElement = document.createElement(type);
  addClass(newElement, ...classes);

  return newElement;
}

function addClass(element, ...classes) {
  if (classes) {
    classes.forEach((newClass) => {
      element.classList.add(newClass);
    });
  }
}

function clear(element) {
  element.textContent = '';
}

function insertAfter(newNode, targetNode) {
  targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling);
}

export { createElement, addClass, clear, insertAfter };
