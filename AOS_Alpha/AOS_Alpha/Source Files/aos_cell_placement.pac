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

workstart = J2P((-0.0, -51.03, 132.99, 0.0, 0.01, 90.0))
pickup_hover = J2P((-31.98, 37.39, 139.83, 0.00, 4.89, 87.54))
pickup_hover2 = J2P((-31.98, 34.32, 140.69, 0.00, 4.95, 87.72))
pickup = J2P((-31.98, 38.76, 139.01, 0.00, 4.89, 87.54))
placement_hover = J2P((-31.98, 36.65, 139.86, -0.00, 4.29, 87.59))
drop1_hover = J2P((-6.01, 46.76, 120.22, 0.00, 14.04, 115.70))
drop1_touch = J2P((-6.01, 48.41, 119.49, 3.12, 12.50, 113.23))
drop1 = J2P((-6.01, 49.88, 118.95, 3.12, 12.50, 113.23))
drop2_hover = J2P((6.72, 46.52, 121.04, 2.31, 12.30, 123.58))
drop2_touch = J2P((6.72, 47.68, 121.04, 2.31, 11.11, 123.58))
drop2 = J2P((6.72, 49.36, 120.38, 2.31, 11.11, 123.57))
drop3_hover = J2P((6.21, 55.94, 99.19, 2.31, 24.58, 123.57))
drop3_touch = J2P((6.21, 57.13, 98.65, 2.31, 24.58, 123.57))
drop3 = J2P((6.21, 58.71, 97.73, 2.31, 24.58, 123.57))
drop4_hover = J2P((-4.52, 56.55, 98.86, 2.31, 24.58, 116.19))
drop4_touch = J2P((-4.52, 57.46, 98.20, 2.31, 24.58, 116.119))
drop4 = J2P((-4.52, 58.83, 97.46, 2.31, 24.58, 116.19)) 
rest = J2P((0.0, -81.62, 160.00, 0.0, 24.58, 116.19))
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
MOVE P, @0 pickup_hover2
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
MOVE P, @0 pickup_hover2
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
