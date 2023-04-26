import RPi.GPIO as gpio

gpio.setmode(gpio.BOARD)
pins = []

try:
	while True:
		pin = input("Enter pin number to set: ")
		pin = int(pin)
		if pin not in pins:
			pins.append(pin)
			gpio.setup(pin, gpio.OUT)
		out = input("Enter on or off: ")
		if out.lower() == "on":
			gpio.output(pin, gpio.HIGH)
		else:
			gpio.output(pin, gpio.LOW)
except:
	print("\nExiting program...")
	for pin in pins:
		gpio.output(pin, gpio.LOW)

gpio.cleanup()
