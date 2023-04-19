import RPi.GPIO as gpio

gpio.setmode(gpio.BOARD)
pins = []

#pin = 36

#gpio.setup(pin, gpio.OUT)

try:
	while True:
		#ch = input ("Press enter to toggle GPIO or q to quit: ")
		#if ch.lower() == "q":
		#	break
		#gpio.output(pin, gpio.HIGH)
		#ch = input("Press enter to toggle GPIO or q to quit: ")
		#if ch.lower() == "q":
		#	break
		#gpio.output(pin, gpio.LOW)
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
