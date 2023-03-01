'!TITLE "<Title>"
PROGRAM aos_cell_placement

TAKEARM
SPEED 5
defpos rest
defpos rest2
'defpos workstart
defpos hover1
defpos pickup
defpos hover2
'defpos dropoff
defpos hover_d
defpos dropoff

rest = J2P((-0.0, -51.03, 132.99, 0.0, 0.01, -90.0))
rest2 = J2P((-0.0, -99.99, 168.99, 0.0, -119.99, -90.0))
hover1 = J2P((-32.7, 41.55, 137.28, 0.0, 1.57, -116.65))
pickup = J2P((-32.7, 42.97, 136.61, 0.0, 1.57, -116.65))
hover2 = J2P((-32.7, 39.71, 137.16, 0.0, 3.87, -116.65))
hover_d = J2P((0.0, 43.10, 137.15, 0.01, 0.01, -84.91))
dropoff = J2P((0.0, 44.32, 136.13, 0.01, 0.01, -84.91))
HOME rest

GOHOME
'MOVE P,@0 rest2
MOVE P, @0 hover1
MOVE P, @0 pickup
MOVE P, @0 hover1
MOVE P, @0 hover2
MOVE P, @0 hover_d
MOVE P, @0 dropoff
DELAY 2000
MOVE P, @0 hover_d
GOHOME
GIVEARM

END
