const creaTabelloneNumeriEstratti = function () {
    const tabellaContenitore = document.getElementById('tabellone')
    for (let i = 1; i <= 90; i++) {
      const numeriContenitore = document.createElement('div')
      numeriContenitore.textContent = (i < 10) ? '0' + i : i
      numeriContenitore.id = 'numeroMain' + i;
      tabellaContenitore.appendChild(numeriContenitore)
    }
  }

const estrazioneNumeriUnici = function () {
    const numeriDisponibili = [];
    for (let i = 1; i <= 90; i++) {
       numeriDisponibili.push(i)
    }
    const estrazioneCasuale = Math.floor(Math.random() * numeriDisponibili.length)
    const numeroEstratto = numeriDisponibili.splice(estrazioneCasuale, 1)[0]
    return numeroEstratto;
}

const assegnaNumeroECambiaSfondo = function () {
    const estrazione = estrazioneNumeriUnici();
    const numeroTabellone = document.getElementById('numeroMain' + estrazione)

    if (numeroTabellone) {
        numeroTabellone.style.backgroundColor = 'rgb(229, 184, 11)'
    }
}

/* const chiediNumeroTabelle = function () {
    const inputNumeroTabelle = document.getElementById('inputNumeroTabelle').value
    return inputNumeroTabelle
} */


/* const creaTabellaGiocatore = function (numeroTabelle) {
    const contenitoreGiocatore = document.getElementById('giocatore')
    for (let g = 0; g < numeroTabelle; g++) {
        const tabellaContenitore = document.createElement('div')
        tabellaContenitore.className = 'giocatore'
        contenitoreGiocatore.appendChild(tabellaContenitore)

        for (let i = 1; i <= 25; i++) {
            const numeriContenitore = document.createElement('div')
            numeriContenitore.textContent = (i < 10) ? '0' + i : i
            numeriContenitore.id = 'numeroMain' + i
            tabellaContenitore.appendChild(numeriContenitore)
        }
    }
}


document.getElementById('creaTabelle').addEventListener('click', function () {
    const numeroTabelle = chiediNumeroTabelle()
    if (numeroTabelle) {
        creaTabellaGiocatore(numeroTabelle)
    }
})
 */
creaTabelloneNumeriEstratti()
document.getElementById('estrazione').addEventListener('click', assegnaNumeroECambiaSfondo)
