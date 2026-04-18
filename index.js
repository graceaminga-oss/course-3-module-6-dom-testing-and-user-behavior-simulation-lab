// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
//button click simulation
function simulateClick(parentId, content) {
  const parent = document.getElementById(parentId)

  const button = createElement('button', 'Click Me')

  button.addEventListener('click', () => {
    addElementToDOM(parentId, content)
  })

  parent.appendChild(button)

  // simulate click
  button.click()
}
// form submission handling
function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId)
  const input = document.getElementById('user-input')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!input.value) return displayError('Input cannot be empty')

    clearError()
    addElementToDOM(outputId, input.value)
    input.value = ''
  })

  form.dispatchEvent(new Event('submit'))
}
// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.
// 1. Add element to DOM
function addElementToDOM(parentId, content) {
  const parent = document.getElementById(parentId)
  const newElement = createElement('p', content)
  parent.appendChild(newElement)
}
// 2. Remove element from DOM
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.remove()
  }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.
function displayError(message) {
  const errorElement = document.getElementById('error-message')
  errorElement.textContent = message
  errorElement.classList.remove('hidden')
}

function clearError() {
  const errorElement = document.getElementById('error-message')
  errorElement.textContent = ''
  errorElement.classList.add('hidden')
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function createElement(tag, textContent = '') {
  const element = document.createElement(tag)
  element.textContent = textContent
  return element
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}