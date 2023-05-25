input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
})
basic.clearScreen()
basic.forever(function () {
    basic.showString("Hello!")
})
