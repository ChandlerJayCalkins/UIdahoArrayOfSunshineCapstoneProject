import socket
import sys
import time
import RPi.GPIO as gpio

#host = socket.gethostbyname(socket.gethostname())
host = "192.168.0.100"
port = 5001
host_addr = (host, port)

gpio.setmode(gpio.BOARD)
pin = 36
gpio.setup(pin, gpio.OUT)

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
	sock.bind(host_addr)
except:
	#print(f"Bind failed. Error code: {message[0]} Message {message[1]}")
	print("Bind failed")
	gpio.cleanup()
	sys.exit()

print("Socket binding operation completed")

sock.listen(9)
print(f"Listening on {host}:{port}")

conn, addr = sock.accept()
print(f"Connected with {addr[0]}:{addr[1]}")

msg = conn.recv(4).decode("utf-8")

print(f"Message from {addr}:")
print(msg)

wait_time = 2
print(f"Activating GPIO for {wait_time} seconds...")
gpio.output(pin, gpio.HIGH)
time.sleep(wait_time)
gpio.output(pin, gpio.LOW)
print("Deactivating GPIO...")

gpio.cleanup()
conn.close()
