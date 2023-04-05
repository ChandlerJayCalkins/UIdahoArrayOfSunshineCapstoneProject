'!TITLE "<Title>"
PROGRAM aos_cell_placement

TAKEARM
defpos workstart
defpos pickup_hover
defpos pickup_hover2
defpos pickup
defpos placement_hover
defpos drop1_hover
defpos drop1_touch
defpos drop1
defpos drop2_hover
defpos drop2_touch
defpos drop2
defpos drop3_hover
defpos drop3_touch
defpos drop3
defpos drop4_hover
defpos drop4_touch
defpos drop4
defpos rest

workstart = J2P((-0.0, -51.03, 132.99, 0.0, 0.01, -90.0))
pickup_hover = J2P((-30.75, 40.54, 139.79, -0.03, 0.01, -90.34))
pickup_hover2 = J2P((-30.74, 37.83, 139.79, -0.03, 0.01, -90.34))
pickup = J2P((-30.75, 41.14, 139.79, -0.03, 0.01, -90.34))
placement_hover = J2P((-30.75, 38.70, 140.57, -0.03, 0.01, -90.34))
drop1_hover = J2P((-5.85, 47.64, 120.63, 6.53, 12.04, -69.94))
drop1_touch = J2P((-5.85, 48.84, 120.45, 6.60, 11.99, -69.94))
drop1 = J2P((-5.85, 50.47, 119.35, 7.84, 11.99, -68.34))
drop2_hover = J2P((7.04, 47.39, 120.81, 6.08, 12.33, -60.20))
drop2_touch = J2P((7.04, 48.84, 120.14, 6.08, 10.94, -60.20))
drop2 = J2P((7.04, 50.15, 119.77, 6.08, 10.94, -60.20))
drop3_hover = J2P((6.21, 54.77, 99.30, 6.08, 24.25, -60.20))
drop3_touch = J2P((6.21, 57.91, 98.45, 6.08, 23.72, -60.20))
drop3 = J2P((6.21, 59.18, 98.14, 6.08, 23.72, -60.20))
drop4_hover = J2P((-4.85, 54.77, 99.30, 6.08, 24.25, -69.94))
drop4_touch = J2P((-4.85, 58.13, 98.17, 1.12, 24.19, -69.02))
drop4 = J2P((-4.72, 59.31, 97.71, 1.12, 24.19, -67.54)) 
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
MOVE P, @0 pickup_hover2
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
MOVE P, @0 pickup_hover2
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
MOVE P, @0 pickup_hover2
SPEED 20
MOVE P, drop3_hover
SPEED 5
MOVE P, @0 drop3
DELAY 4000
MOVE P, @0 drop3_touch
DELAY 4000
MOVE P, @0 drop3_hover
SPEED 20
MOVE P, @0 pickup_hover2
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
MOVE P, @0 pickup_hover2
SPEED 20
MOVE P, drop4_hover
SPEED 5
MOVE P, @0 drop4
DELAY 4000
MOVE P, @0 drop4_touch
DELAY 4000
MOVE P, @0 drop4_hover
SPEED 20
GOHOME
'MOVE P, @0 rest
GIVEARM

END
