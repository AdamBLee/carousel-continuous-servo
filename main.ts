input.onButtonPressed(Button.A, function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 0)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 180)
})
radio.onReceivedString(function (receivedString) {
	
})
input.onButtonPressed(Button.B, function () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
})
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
