'!TITLE "<Title>"
PROGRAM demo

	TAKEARM
	SPEED 10
	defpos rest
	defpos workStart
	defpos topLeft
	defpos topRight
	defpos midRight
	defpos midLeft
	defpos bottomLeft
	defpos bottomRight
	rest = J2P((-0.45, -99.99, 168.99, 121.1, -119.99, -89.27))
	workStart = J2P((-0.45, 11.81, 134.5, 120.38, -1.92, -89.27))
	topLeft = J2P((16.26, 70.85, 50.83, 120.38, 45.07, -89.26))
	topRight = J2P((-13.66, 70.86, 50.83, 120.38, 45.07, -89.26))
	midRight = J2P((-22.43, 48.23, 98.28, 121.1, 18.85, -89.26))
	midLeft = J2P((22.65, 48.32, 99.99, 119.99, 18.9, -89.26))
	bottomLeft = J2P((30.43, 40.03, 130.65, 119.99, -2.47, -89.26))
	bottomRight = J2P((-30.01, 40.03, 130.65, 119.99, -5.91, -89.26))
	HOME rest
	MOVE P, @0 workStart
	MOVE P, @0 topLeft
	MOVE P, @0 topRight
	MOVE P, @0 midRight
	MOVE P, @0 midLeft
	MOVE P, @0 bottomLeft
	MOVE P, @0 bottomRight
	GOHOME
	GIVEARM

END
