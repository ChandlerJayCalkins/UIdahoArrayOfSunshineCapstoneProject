import socket
import sys
import time
import RPi.GPIO as gpio

# function for waiting for a tcp message from a socket
def getMsg(conn):
	msg = ""
	while True:
		msg = conn.recv(4)
		if len(msg) != 0:
			return msg

# prints a message received from one of the robotic arms
def printMsg(name, addr, msg):
	print(f"Message from {name} on {addr[0]}:{addr[1]}:")
	print(msg)

try:
	############################################################
	#
	# Set Up
	#
	############################################################

	# define ip address and port number of raspberry pi servers in a tuple
	host = "192.168.0.100"
	johnny5_port = 5001
	alpha_port = 5002
	johnny5_server_addr = (host, johnny5_port)

	# use board numbers for raspberry pi gpio
	gpio.setmode(gpio.BOARD)

	# define spray end effector pins
	pin_spray_power = 11 # gpio 17
	pin_spray_valve = 13 # gpio 27

	# define vacuum gripper / suction cups pin
	pin_succ = 22 # gpio 25

	# define conductive ink end effector pins
	pin_ink_driver = 15 # gpio 22
	pin_ink_forward = 16 # gpio 23
	pin_ink_reverse = 18 # gpio 24

	# set spray end effector pins to outputs
	gpio.setup(pin_spray_power, gpio.OUT)
	gpio.setup(pin_spray_valve, gpio.OUT)

	# set vacuum gripper / suction cups pin to output
	gpio.setup(pin_succ, gpio.OUT)

	# set conductive ink end effector pins to outputs
	gpio.setup(pin_ink_driver, gpio.OUT)
	gpio.setup(pin_ink_forward, gpio.OUT)
	gpio.setup(pin_ink_reverse, gpio.OUT)

	# define sockets to connect to robot arm controllers
	johnny5_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

	# bind johnny 5 socket to ip address and port
	try:
		johnny5_sock.bind(johnny5_server_addr)
	except:
		#print(f"Bind failed. Error code: {message[0]} Message {message[1]}")
		print("Bind failed on johnny5_server_addr")
		gpio.cleanup()
		sys.exit()

	print("Socket binding operation completed")
	msg = ""

	############################################################
	#
	# Connect to Robot Arms
	#
	############################################################

	# establish connection with johnny 5
	johnny5_sock.listen(9)
	print(f"Listening for Johnny 5 on {host}:{johnny5_port}...")
	johnny5_conn, johnny5_addr = johnny5_sock.accept()
	print(f"Connected with Johnny 5 on {johnny5_addr[0]}:{johnny5_addr[1]}")

	# get opening message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	############################################################
	#
	# Step 1: Spray Adhesive
	#
	############################################################

	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# activate spray
	gpio.output(pin_spray_power, gpio.HIGH)
	gpio.output(pin_spray_valve, gpio.HIGH)
	print("Activated sprayer...")

	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# deactivate spray
	gpio.output(pin_spray_valve, gpio.LOW)
	gpio.output(pin_spray_power, gpio.LOW)
	print("Deactivated sprayer...")

	############################################################
	#
	# Step 3: Apply Conductive Ink
	#
	############################################################
	
	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# activate ink applier driver and make it go forward
	gpio.output(pin_ink_driver, gpio.HIGH)
	gpio.output(pin_ink_forward, gpio.HIGH)
	print("Turning on ink driver...")
	print("Making ink applier go forward...")
	
	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# make ink applier go in reverse
	gpio.output(pin_ink_forward, gpio.LOW)
	gpio.output(pin_ink_reverse, gpio.HIGH)
	print("Making ink applier go in reverse...")

	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# turn off ink applier
	gpio.output(pin_ink_reverse, gpio.LOW)
	print("Turning off ink applier...")

	# forward and reverse 18 more times
	for i in range(18):
		# get message from johnny 5
		msg = getMsg(johnny5_conn).decode("utf-8")
		# print message from johnny 5
		printMsg("Johnny 5", johnny5_addr, msg)

		# activate ink applier driver and make it go forward
		gpio.output(pin_ink_forward, gpio.HIGH)
		print("Making ink applier go forward...")

		# get message from johnny 5
		msg = getMsg(johnny5_conn).decode("utf-8")
		# print message from johnny 5
		printMsg("Johnny 5", johnny5_addr, msg)

		# make ink applier go in reverse
		gpio.output(pin_ink_forward, gpio.LOW)
		gpio.output(pin_ink_reverse, gpio.HIGH)
		print("Making ink applier go in reverse...")

		# get message from johnny 5
		msg = getMsg(johnny5_conn).decode("utf-8")
		# print message from johnny 5
		printMsg("Johnny 5", johnny5_addr, msg)

		# turn off ink applier
		gpio.output(pin_ink_reverse, gpio.LOW)
		print("Turning off ink applier...")
	
	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# activate ink applier driver and make it go forward
	gpio.output(pin_ink_forward, gpio.HIGH)
	print("Making ink applier go forward...")
	
	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# make ink applier go in reverse
	gpio.output(pin_ink_forward, gpio.LOW)
	gpio.output(pin_ink_reverse, gpio.HIGH)
	print("Making ink applier go in reverse...")

	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# turn off ink applier
	gpio.output(pin_ink_reverse, gpio.LOW)
	gpio.output(pin_ink_driver, gpio.LOW)
	print("Turning off ink applier...")
	print("Turning off ink driver...")

	############################################################
	#
	# Step 4: Spray Protective Coating
	#
	############################################################

	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# activate spray
	gpio.output(pin_spray_power, gpio.HIGH)
	gpio.output(pin_spray_valve, gpio.HIGH)
	print("Activated sprayer...")

	# get message from johnny 5
	msg = getMsg(johnny5_conn).decode("utf-8")
	# print message from johnny 5
	printMsg("Johnny 5", johnny5_addr, msg)

	# deactivate spray
	gpio.output(pin_spray_valve, gpio.LOW)
	gpio.output(pin_spray_power, gpio.LOW)
	print("Deactivated sprayer...")

	############################################################
	#
	# Finish
	#
	############################################################

	# reset gpio board and close tcp sessions
	gpio.cleanup()
	johnny5_conn.close()
except:
	# reset gpio board and close tcp sessions
	gpio.cleanup()
	johnny5_conn.close()
