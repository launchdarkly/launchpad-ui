// Generally, there should be as few modals open as possible. However
// in certain cases we may need the user to confirm an action
// that was initiated inside a modal (eg. delete an environment). To
// handle that we need to keep track of active modals.

import filter from 'lodash.filter';

type Focusable = {
  setupFocus(): void;
  clearFocus(): void;
  close(): void;
};

let stack: Focusable[] = [];
function empty() {
  return stack.length === 0;
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    pop();
  }
}

function setupDocument() {
  document.body.classList.add('has-modal');
  document.addEventListener('keydown', handleEscape);
}

function cleanDocument() {
  document.body.classList.remove('has-modal');
  document.removeEventListener('keydown', handleEscape);
}

function focusTop() {
  stack[0].setupFocus();
}

function update() {
  if (!empty()) {
    focusTop();
  } else {
    cleanDocument();
  }
}

function push(ref: Focusable) {
  stack.unshift(ref);

  if (stack.length === 1) {
    setupDocument();
  }

  ref.setupFocus();
}

function pop() {
  const top = stack.shift();
  top?.close();
  update();
}

function remove(ref: Focusable) {
  stack = filter(stack, (r) => r !== ref);
  ref.clearFocus();
  update();
}

export { push, remove };
