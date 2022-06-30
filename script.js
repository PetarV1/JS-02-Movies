let ukupna_cijena = 0;

function pogledaj(button) {
    button.setAttribute('disabled', 'true');
    button.textContent = "Pogledano";
    // uzimanje najblizeg diva tog buttona i dohvacanje ostalih podataka
    let film = button.closest('.card-body');
    film.style.backgroundColor = 'gainsboro'
    let naslov = film.querySelector('.card-title').textContent;
    let cijena = film.querySelector('#cijena').textContent;
    let ocjena = film.querySelector('p').textContent;
    // rezanje i pretvaranje stingova
    cijena = parseFloat(cijena.substring(8, cijena.length - 1));
    ocjena = parseFloat(ocjena.substring(8));
    // dodavanje filma u listu pogledanih filmova
    let racun = document.querySelector('.racun ul'); 
    let odgledani_film = document.createElement('li')
    odgledani_film.innerHTML = `${naslov}, Cijena: ${cijena}$` + "<span onclick='obrisi(this)' class='obrisi'><i class='bi bi-trash'></i></span>";
    racun.appendChild(odgledani_film);
    // zbrajanje cijena
    ukupna_cijena += cijena;
    document.querySelector(".cijena h5 p").textContent = `${ukupna_cijena}$`;
}

function obrisi(film) {
    // film je button obrisi (kanta za smece)
    parent = film.parentElement;
    parent.remove();
    let cijena;
    // naslov filma koji je obrisan
    let naslov = parent.innerText.substring(0, parent.textContent.indexOf(","))
    // dohvacanje svih filmova
    let filmovi = document.querySelectorAll(".card .card-body");
    // petlja za pronalazak filma koji je obrisan
    filmovi.forEach(film => {
        let naslov_filma = film.querySelector(".card-title").textContent;
        if(naslov === naslov_filma)
        {         
            film.querySelector('.btn').removeAttribute('disabled');
            film.querySelector('.btn').textContent = "Gledaj";
            film.style.backgroundColor = 'white';
            cijena = film.querySelector('#cijena').textContent;
            cijena = parseFloat(cijena.substring(8, cijena.length - 1));
            ukupna_cijena -= cijena;
            document.querySelector(".cijena h5 p").textContent = `${ukupna_cijena}$`;
        }
    });
}