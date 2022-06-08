music.setVolume(255)
basic.forever(function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(2000)
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 10) {
        basic.showString("A")
    } else {
        basic.showString("ｂ")
    }
})
