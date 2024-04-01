btn = document.querySelector('.btn')


  
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        qrval = document.querySelector('input').value;
        qr = document.querySelector('#qrr');
        qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrval}`
        console.log(qrval);
        console.log(qr);

        p = document.querySelector('#val');
        p.innerHTML = `Your QR Code is ${qrval}`
    })

