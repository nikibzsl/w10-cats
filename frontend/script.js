const googleSearchButton = document.querySelector('#btn-google-search');

googleSearchButton.addEventListener('click', function (event) {
    event.preventDefault();

    const form = document.querySelector('#form-google-search');
    const searchTerm = form.querySelector('input[name="q"]').value;

    if (searchTerm === '') {
        alert('Írj már be valamit!!');
    } else {
        form.submit();
    }
});
 // eseménykezelők paramétereket kapnak. A böngésző hívja meg, és minden esetben az esemény adataid paraméterben átadja nekünk