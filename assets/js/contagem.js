function diario() {
    let trabalhoCurrent = document.querySelector('.trabalho-current')
    let trabalhoPrevious = document.querySelector('.trabalho-previous')

    let jogoCurrent = document.querySelector('.jogo-current')
    let jogoPrevious = document.querySelector('.jogo-previous')

    let estudosCurrent = document.querySelector('.estudos-current')
    let estudosPrevious = document.querySelector('.estudos-previous')

    let atividadeCurrent = document.querySelector('.atividade-current')
    let atividadePrevious = document.querySelector('.atividade-previous')

    let socialCurrent = document.querySelector('.social-current')
    let socialPrevious = document.querySelector('.social-previous')

    let cuidadoCurrent = document.querySelector('.cuidado-current')
    let cuidadoPrevious = document.querySelector('.cuidado-previous')


    let daily = [{
        "current": 5,
        "previous": 7
      },
      {
        "current": 1,
        "previous": 2
      },
      {
        "current": 0,
        "previous": 1
      },
      {
        "current": 1,
        "previous": 1
      },
      {
        "current": 1,
        "previous": 3
      },
      {
        "current": 0,
        "previous": 1
      },    
    ]
    
    trabalhoCurrent.innerHTML = `${daily[0].current}hrs`
    trabalhoPrevious.innerHTML = `último dia - ${daily[0].previous}hrs`

    jogoCurrent.innerHTML = `${daily[1].current}hrs`
    jogoPrevious.innerHTML = `último dia - ${daily[1].previous}hrs`

    estudosCurrent.innerHTML = `${daily[2].current}hrs`
    estudosPrevious.innerHTML = `último dia - ${daily[2].previous}hrs`

    atividadeCurrent.innerHTML = `${daily[3].current}hrs`
    atividadePrevious.innerHTML = `último dia - ${daily[3].previous}hrs`

    socialCurrent.innerHTML = `${daily[4].current}hrs`
    socialPrevious.innerHTML = `último dia - ${daily[4].previous}hrs`

    cuidadoCurrent.innerHTML = `${daily[5].current}hrs`
    cuidadoPrevious.innerHTML = `último dia - ${daily[5].previous}hrs`
}

function semanal() {
    let trabalhoCurrent = document.querySelector('.trabalho-current')
    let trabalhoPrevious = document.querySelector('.trabalho-previous')

    let jogoCurrent = document.querySelector('.jogo-current')
    let jogoPrevious = document.querySelector('.jogo-previous')

    let estudosCurrent = document.querySelector('.estudos-current')
    let estudosPrevious = document.querySelector('.estudos-previous')

    let atividadeCurrent = document.querySelector('.atividade-current')
    let atividadePrevious = document.querySelector('.atividade-previous')

    let socialCurrent = document.querySelector('.social-current')
    let socialPrevious = document.querySelector('.social-previous')

    let cuidadoCurrent = document.querySelector('.cuidado-current')
    let cuidadoPrevious = document.querySelector('.cuidado-previous')


    let weekly = [{
        "current": 32,
        "previous": 36
      },
      {
        "current": 10,
        "previous": 8
      },
      {
        "current": 4,
        "previous": 7
      },
      {
        "current": 4,
        "previous": 5
      },
      {
        "current": 5,
        "previous": 10
      },
      {
        "current": 2,
        "previous": 2
      },    
    ]
    
    trabalhoCurrent.innerHTML = `${weekly[0].current}hrs`
    trabalhoPrevious.innerHTML = `último dia - ${weekly[0].previous}hrs`

    jogoCurrent.innerHTML = `${weekly[1].current}hrs`
    jogoPrevious.innerHTML = `último dia - ${weekly[1].previous}hrs`

    estudosCurrent.innerHTML = `${weekly[2].current}hrs`
    estudosPrevious.innerHTML = `último dia - ${weekly[2].previous}hrs`

    atividadeCurrent.innerHTML = `${weekly[3].current}hrs`
    atividadePrevious.innerHTML = `último dia - ${weekly[3].previous}hrs`

    socialCurrent.innerHTML = `${weekly[4].current}hrs`
    socialPrevious.innerHTML = `último dia - ${weekly[4].previous}hrs`

    cuidadoCurrent.innerHTML = `${weekly[5].current}hrs`
    cuidadoPrevious.innerHTML = `último dia - ${weekly[5].previous}hrs`
}

function mensal() {
    let trabalhoCurrent = document.querySelector('.trabalho-current')
    let trabalhoPrevious = document.querySelector('.trabalho-previous')

    let jogoCurrent = document.querySelector('.jogo-current')
    let jogoPrevious = document.querySelector('.jogo-previous')

    let estudosCurrent = document.querySelector('.estudos-current')
    let estudosPrevious = document.querySelector('.estudos-previous')

    let atividadeCurrent = document.querySelector('.atividade-current')
    let atividadePrevious = document.querySelector('.atividade-previous')

    let socialCurrent = document.querySelector('.social-current')
    let socialPrevious = document.querySelector('.social-previous')

    let cuidadoCurrent = document.querySelector('.cuidado-current')
    let cuidadoPrevious = document.querySelector('.cuidado-previous')


    let monthly = [{
        "current": 103,
        "previous": 128
      },
      {
        "current": 23,
        "previous": 29
      },
      {
        "current": 13,
        "previous": 19
      },
      {
        "current": 11,
        "previous": 18
      },
      {
        "current": 21,
        "previous": 23
      },
      {
        "current": 7,
        "previous": 11
      },    
    ]
    
    trabalhoCurrent.innerHTML = `${monthly[0].current}hrs`
    trabalhoPrevious.innerHTML = `último dia - ${monthly[0].previous}hrs`

    jogoCurrent.innerHTML = `${monthly[1].current}hrs`
    jogoPrevious.innerHTML = `último dia - ${monthly[1].previous}hrs`

    estudosCurrent.innerHTML = `${monthly[2].current}hrs`
    estudosPrevious.innerHTML = `último dia - ${monthly[2].previous}hrs`

    atividadeCurrent.innerHTML = `${monthly[3].current}hrs`
    atividadePrevious.innerHTML = `último dia - ${monthly[3].previous}hrs`

    socialCurrent.innerHTML = `${monthly[4].current}hrs`
    socialPrevious.innerHTML = `último dia - ${monthly[4].previous}hrs`

    cuidadoCurrent.innerHTML = `${monthly[5].current}hrs`
    cuidadoPrevious.innerHTML = `último dia - ${monthly[5].previous}hrs`
}