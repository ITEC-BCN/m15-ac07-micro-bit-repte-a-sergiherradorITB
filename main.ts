input.onButtonPressed(Button.A, function () {
    opcio_maquina = llista_opcions._pickRandom()
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
let opcio_maquina = 0
let llista_opcions: number[] = []
llista_opcions = [1, 2, 3]
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
