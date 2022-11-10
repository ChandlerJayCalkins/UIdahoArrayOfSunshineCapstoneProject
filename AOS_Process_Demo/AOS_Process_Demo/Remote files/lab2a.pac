'!TITLE "<Title>"
PROGRAM lab2a
motor on
takearm

'Initialize position variable

j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 90)
P1 = (600, 0, 600, 0, 90, 0)
P2 = (450, 0, 600, 0, 90, 0)
P3 = (750, 0, 600, 0, 90, 0)
P4 = (600, 0, 750, 0, 90, 0)
P5 = (600, 0, 450, 0, 90, 0)
P6 = (600, 150, 600, 0, 90, 0)
P7 = (450, -150, 600, 0, 90, 0)

'Move to home position

delay 2000


'circle program here

	MOVE P, @P j00
	DELAY 2000

	MOVE P, P1
	MOVE L, @E P2
	MOVE C, P4, @P P3
	MOVE C, P5, @P P2

	MOVE P, @P j00
	DELAY 2000

	MOVE P, P1
	MOVE L, @E P2
	MOVE C, P7, @P P3
	MOVE C, P6, @P P2


givearm
END
