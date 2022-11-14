'!TITLE "<Title>"
PROGRAM aos_vaacuum_demo

	TAKEARM
	SPEED 20
	defpos rest
	defpos workStart
	defpos pickup
	defpos dropoff1
	defpos dropoff2
	defpos dropoff3
	defpos dropoff4

	rest = J2P((-0.45, -99.99, 168.99, 121.1, -119.99, -89.27))
	workStart = J2P((-0.45, 11.81, 134.5, 120.38, -1.92, -89.27))
	pickup = J2P((-44.58, 40.99, 150.22, 121.10, -19.53, -89.27))
	dropoff1 = J2P((-2.3, 40.33, 122.22, 121.1, 2.16, -89.26))
	dropoff2 = J2P((13.12, 41.73, 120.89, 121.1, 2.49, -89.26))
	dropoff3 = J2P((9.31, 44.48, 103.65, 121.1, 15.76, -89.26))
	dropoff4 = J2P((-2.05, 44.63, 103.66,121.1, 15.76, -89.26))
	HOME rest

	MOVE P,@0 workStart
	MOVE P,@0 pickup
	MOVE P,@0 dropoff1
	MOVE P,@0 pickup
	MOVE P,@0 dropoff2
	MOVE P,@0 pickup
	MOVE P,@0 dropoff3
	MOVE P,@0 pickup
	MOVE P,@0 dropoff4
	GOHOME
	GIVEARM

END
