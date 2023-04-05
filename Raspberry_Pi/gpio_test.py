import RPi.GPIO as gpio

gpio.setmode(gpio.BOARD)

pin = 36

gpio.setup(pin, gpio.OUT)

while True:
	ch = input ("Press enter to toggle GPIO or q to quit: ")
	if ch.lower() == "q":
		break
	gpio.output(pin, gpio.HIGH)
	ch = input("Press enter to toggle GPIO or q to quit: ")
	if ch.lower() == "q":
		break
	gpio.output(pin, gpio.LOW)

gpio.cleanup()
