'!TITLE "<Title>"
PROGRAM aos_cell_placement

TAKEARM
defpos workstart
defpos pickup_hover
defpos pickup
defpos placement_hover
defpos drop1_hover
defpos drop1_touch
defpos drop1
defpos drop2_hover
defpos drop2_touch
defpos drop2
defpos rest

workstart = J2P((-0.0, -51.03, 132.99, 0.0, 0.01, -90.0))
pickup_hover = J2P((-32.7, 41.55, 137.28, 0.0, 1.57, -116.65))
pickup = J2P((-32.7, 42.97, 136.61, 0.0, 1.57, -116.65))
placement_hover = J2P((-32.7, 39.71, 137.16, 0.0, 3.87, -116.65))
drop1_hover = J2P((-7.42, 48.43, 120.46, 0.0, 10.47, -92.91))
drop1_touch = J2P((-7.42, 49.63, 119.26, 0.0, 11.41, -92.91))
drop1 = J2P((-7.42, 51.21, 119.26, 0.0, 10.46, -92.91))
drop2_hover = J2P((7.10, 49.10, 119.03, 0.0, 12.58, -78.69))
drop2_touch = J2P((7.10, 49.91, 118.45, 0.0, 11.95, -78.69))
drop2 = J2P((7.10, 51.17, 118.45, 0.0, 10.35, -78.69))
rest = J2P((-0.0, -99.99, 168.99, 0.0, -119.99, -90.0))
HOME workstart

SPEED 20
GOHOME
SPEED 20
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
MOVE P, @0 pickup_hover
SPEED 20
MOVE P, @0 placement_hover
SPEED 10
MOVE P, @0 drop1_hover
SPEED 5
MOVE P, @0 drop1
DELAY 4000
MOVE P, @0 drop1_touch
DELAY 4000
MOVE P, @0 drop1_hover
SPEED 20
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
MOVE P, @0 pickup_hover
SPEED 20
MOVE P, @0 placement_hover
SPEED 20
MOVE P, @0 drop2_hover
SPEED 5
MOVE P, @0 drop2
DELAY 4000
MOVE P, @0 drop2_touch
DELAY 4000
MOVE P, @0 drop2_hover
SPEED 20
GOHOME
'MOVE P, @0 rest
GIVEARM

END
