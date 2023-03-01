input.onGesture(Gesture.TiltRight, function () {
    Longan.setServoAngel(Longan.ServoList.S0, 30)
})
input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
})
input.onGesture(Gesture.TiltLeft, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._270, wuKong.ServoList.S0, 253)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
})
basic.showLeds(`
    . . . . .
    # . . . .
    . # . . .
    . . # . #
    . . . # .
    `)
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(500)
})
