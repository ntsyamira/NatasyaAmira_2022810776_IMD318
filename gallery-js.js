
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
