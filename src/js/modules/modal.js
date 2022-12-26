function modal() {

    const modal = document.querySelector('.modal'),
        btnCall = document.querySelectorAll('#call'),
        btnSend = document.querySelectorAll('#send'),
        close = document.querySelectorAll('.modal__close'),
        modalData = document.querySelector('.modal-data'),
        modalThanks = document.querySelector('.modal-thanks'),
        modalForm = document.querySelector('#modal-form');

    btnCall.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modalData.classList.remove('hide');
            modalData.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    btnSend.forEach(btn => {
        btn.addEventListener('click', () => {
            if (modal.classList.contains('show')) {
                modalData.classList.add('hide');
                modalThanks.classList.add('show');
            } else {
                document.body.style.overflow = 'hidden';
                modal.classList.add('show');
                modalData.classList.add('hide');
                modalThanks.classList.add('show');
            }

            modalForm.reset();
            modalThanks.classList.remove('show');
            setTimeout(() => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }, 3000);
        });
        
    });

    close.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

//#more send
}

export default modal;