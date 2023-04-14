import socket
import sys
import RPi.GPIO as gpio

#host = socket.gethostbyname(socket.gethostname())
host = "192.168.0.100"
port = 5001
host_addr = (host, port)

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
	sock.bind(host_addr)
except:
	#print(f"Bind failed. Error code: {message[0]} Message {message[1]}")
	print("Bind failed")
	sys.exit()

print("Socket binding operation completed")

sock.listen(9)
print(f"Listening on {host}:{port}")

conn, addr = sock.accept()
print(f"Connected with {addr[0]}:{addr[1]}")

msg = conn.recv(4).decode("utf-8")

print(f"[{addr}] {msg}")

conn.close()
