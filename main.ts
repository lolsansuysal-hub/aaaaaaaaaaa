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
    music.play(music.stringPlayable("C5 E D C5 A E E F ", 120), music.PlaybackMode.UntilDone)
})
