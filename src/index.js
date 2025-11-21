const state = {
  crabCount: 0,
};

const addCrab = (event) => {
  console.log('in addCrab:', event);
  const newCrab = document.createElement('span');
  const crabContainer = document.querySelector('#crabContainer');
  newCrab.textContent = '🦀';
  crabContainer.appendChild(newCrab);
  state.crabCount += 1;
  const crabCountContainer = document.querySelector('#crabCount');
  crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
};

const registerEventHandlers = (event) => {
  console.log('in registerEventHandlers:', event);
  const crabButton = document.querySelector('#addCrabButton');
  crabButton.addEventListener('click', addCrab);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);


