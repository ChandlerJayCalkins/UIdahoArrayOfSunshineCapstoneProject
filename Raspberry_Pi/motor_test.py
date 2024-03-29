import RPi.GPIO as gpio

gpio.setmode(gpio.BOARD)

forward_pin = 36
#reverse_pin = 37
driver_pin = 31

gpio.setup(forward_pin, gpio.OUT)
#gpio.setup(reverse_pin, gpio.OUT)
gpio.setup(driver_pin, gpio.OUT)

while True:
	ch = input("[OFF] Press enter to toggle GPIO or q to quit: ")
	if ch.lower() == "q":
		break
	gpio.output(driver_pin, gpio.HIGH)
	gpio.output(forward_pin, gpio.HIGH)
	ch = input("[FORWARD] Press enter to toggle GPIO or q to quit: ")
	if ch.lower() == "q":
		break
	gpio.output(forward_pin, gpio.LOW)
	gpio.output(driver_pin, gpio.LOW)
	#gpio.output(reverse_pin, gpio.HIGH)
	#ch = input("[REVERSE] Press enter to toggle GPIO or q to quit: ")
	#if ch.lower() == "q":
	#	break
	#gpio.output(reverse_pin, gpio.LOW)
	#gpio.output(driver_pin, gpio.LOW)
	
gpio.output(forward_pin, gpio.LOW)
#gpio.output(reverse_pin, gpio.LOW)
gpio.output(driver_pin, gpio.LOW)
gpio.cleanup()
