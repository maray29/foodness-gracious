export function createModal() {
  setupEventListeners();

  // Set a timeout to open the modal after 5 seconds
  setTimeout(checkAndOpenModal, 5000);
}

function checkAndOpenModal() {
  if (shouldShowModal()) {
    openModal();
  }
}

function shouldShowModal() {
  const lastCloseTime = localStorage.getItem('modalLastClosed');
  if (!lastCloseTime) {
    console.log('true');
    return true;
  }

  const now = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const bool = now - lastCloseTime > oneDay;
  console.log(bool);
  return bool;
}

function openModal() {
  const modalWrap = document.querySelector("[ma-element='modal-wrap']");
  modalWrap.style.display = 'flex';
}

function closeModalHandler() {
  const modalWrap = document.querySelector("[ma-element='modal-wrap']");
  modalWrap.style.display = 'none';

  // Save the current timestamp to local storage
  const now = new Date().getTime();
  localStorage.setItem('modalLastClosed', now);
}

function setupEventListeners() {
  const closeButton = document.querySelectorAll("[ma-element='close-button']");
  const modalWrap = document.querySelector("[ma-element='modal-wrap']");

  // Add event listener to each close button
  closeButton.forEach((button) => {
    button.addEventListener('click', closeModalHandler);
  });

  // Add event listener to the modal wrapper
  modalWrap.addEventListener('click', (event) => {
    if (event.target === modalWrap) {
      closeModalHandler();
    }
  });

  // Add event listener for keydown on the whole document
  document.addEventListener('keydown', function (event) {
    // Check if the pressed key is 'Escape'
    if (event.key === 'Escape') {
      closeModalHandler();
    }
  });
}
