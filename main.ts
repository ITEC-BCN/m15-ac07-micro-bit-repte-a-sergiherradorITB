input.onButtonPressed(Button.A, function () {
    opcio_maquina = llista_opcions._pickRandom()
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    if (opcio_maquina == 3) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
    if (opcio_maquina == 1) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . # . #
            # . # . #
            . # . # .
            `)
    }
    if (opcio_maquina == 2) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    opcio_maquina = llista_opcions._pickRandom()
    basic.showIcon(IconNames.Scissors)
    if (opcio_maquina == 2) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . # . #
            # . # . #
            . # . # .
            `)
    }
    if (opcio_maquina == 3) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (opcio_maquina == 1) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    opcio_maquina = llista_opcions._pickRandom()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    if (opcio_maquina == 3) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . # . #
            # . # . #
            . # . # .
            `)
    }
    if (opcio_maquina == 1) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (opcio_maquina == 2) {
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
    }
})
let opcio_maquina = 0
let llista_opcions: number[] = []
llista_opcions = [1, 2, 3]
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
