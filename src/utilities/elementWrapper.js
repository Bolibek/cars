export const elemWrapper = (elem, className, events, content) => {
  const targetElement = document.createElement(elem)
  targetElement.classList.add(className)
  events.map((event) => targetElement.addEventListener(event.type, event.handler))
  targetElement.innerHTML = content
  return targetElement
};
