input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        # # # # #
        . . . . .
        `)
    music.ringTone(440)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
})
