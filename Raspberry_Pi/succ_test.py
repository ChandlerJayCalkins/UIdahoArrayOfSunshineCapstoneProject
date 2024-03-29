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
	alpha_port = 5002
	alpha_server_addr = (host, alpha_port)

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
	alpha_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

	# bind alpha socket to ip address and port
	try:
		alpha_sock.bind(alpha_server_addr)
	except:
		#print(f"Bind failed. Error code: {message[0]} Message {message[1]}")
		print("Bind failed on alpha_server_addr")
		gpio.cleanup()
		sys.exit()

	print("Socket binding operation completed")
	msg = ""

	############################################################
	#
	# Connect to Robot Arms
	#
	############################################################

	# establish connection with alpha
	alpha_sock.listen(9)
	print(f"Listening for Alpha on {host}:{alpha_port}...")
	alpha_conn, alpha_addr = alpha_sock.accept()
	print(f"Connected with Alpha on {alpha_addr[0]}:{alpha_addr[1]}")

	# get opening message from alpha
	msg = getMsg(alpha_conn).decode("utf-8")
	# print message from alpha
	printMsg("Alpha", alpha_addr, msg)

	############################################################
	#
	# Step 2: Place Solar Cells
	#
	############################################################

	# pick up and place 4 sets of solar cells
	for i in range(4):
		# get message from alpha
		msg = getMsg(alpha_conn).decode("utf-8")
		# print message from alpha
		printMsg("Alpha", alpha_addr, msg)

		# activate suction cups
		gpio.output(pin_succ, gpio.HIGH)
		print("Activated suction cups...")

		# get message from alpha
		msg = getMsg(alpha_conn).decode("utf-8")
		# print message from alpha
		printMsg("Alpha", alpha_addr, msg)

		# activate suction cups
		gpio.output(pin_succ, gpio.LOW)
		print("Deactivated suction cups...")

	############################################################
	#
	# Finish
	#
	############################################################

	# reset gpio board and close tcp sessions
	gpio.cleanup()
	alpha_conn.close()
except:
	# reset gpio board and close tcp sessions
	gpio.cleanup()
	alpha_conn.close()
