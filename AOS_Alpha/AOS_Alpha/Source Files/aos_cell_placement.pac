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
pickup = J2P((-32.68, 40.36, 138.77, 5.15, 3.52, 83.46))
placement_hover = J2P((-31.98, 36.65, 139.86, -0.00, 4.29, 87.59))
drop1_hover = J2P((-6.01, 46.76, 120.22, 0.00, 14.04, 115.70))
drop1_touch = J2P((-6.24, 48.43, 119.26, 3.36, 13.14, 110.71))
drop1 = J2P((-6.24, 50.16, 118.47, 3.36, 13.15, 110.72))
drop2_hover = J2P((6.72, 46.52, 121.04, 2.31, 12.30, 123.58))
drop2_touch = J2P((6.75, 48.34, 119.31, 3.36, 12.80, 122.61))
drop2 = J2P((6.75, 49.69, 118.72, 3.36, 12.80, 122.61))
drop3_hover = J2P((6.21, 55.94, 99.19, 2.31, 24.58, 123.57))
drop3_touch = J2P((5.67, 57.92, 96.88, 1.64, 25.25, 124.97))
drop3 = J2P((5.67, 59.32, 96.39, 1.64, 25.25, 124.97))
drop4_hover = J2P((-4.52, 56.55, 98.86, 2.31, 24.58, 116.19))
drop4_touch = J2P((-5.21, 58.07, 96.54, 2.15, 26.01, 114.26))
drop4 = J2P((-5.21, 59.30, 96.05, 2.15, 26.01, 114.26)) 
rest = J2P((0.0, -81.62, 160.00, 0.0, 24.58, 116.19))


DEFINT flg
com_state #9,flg
IF flg=-1 THEN
	com_encom #9
ENDIF

FLUSH #9

S10 = ":)"
PRINT #9,S10

HOME workstart

SPEED 20
GOHOME
SPEED 20
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
PRINT #9, S10
MOVE P, @0 pickup_hover
SPEED 20
MOVE P, @0 placement_hover
MOVE P, @0 pickup_hover2
SPEED 10
MOVE P, @0 drop1_hover
SPEED 5
MOVE P, @0 drop1
PRINT #9, S10
DELAY 4000
MOVE P, @0 drop1_touch
DELAY 4000
MOVE P, @0 drop1_hover
SPEED 20
MOVE P, @0 pickup_hover2
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
PRINT #9, S10
DELAY 1000
MOVE P, @0 pickup_hover
SPEED 20
MOVE P, @0 placement_hover
MOVE P, @0 pickup_hover2
SPEED 20
MOVE P, @0 drop2_hover
SPEED 5
MOVE P, @0 drop2
PRINT #9, S10
DELAY 4000
MOVE P, @0 drop2_touch
DELAY 4000
MOVE P, @0 drop2_hover
SPEED 20
MOVE P, @0 pickup_hover2
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
PRINT #9, S10
DELAY 1000
MOVE P, @0 pickup_hover2
SPEED 20
MOVE P, drop3_hover
SPEED 5
MOVE P, @0 drop3
PRINT #9, S10
DELAY 4000
MOVE P, @0 drop3_touch
DELAY 4000
MOVE P, @0 drop3_hover
SPEED 20
MOVE P, @0 pickup_hover2
MOVE P, @0 pickup_hover
SPEED 5
MOVE P, @0 pickup
PRINT #9, S10
DELAY 1000
MOVE P, @0 pickup_hover2
SPEED 20
MOVE P, drop4_hover
SPEED 5
MOVE P, @0 drop4
PRINT #9, S10
DELAY 4000
MOVE P, @0 drop4_touch
DELAY 4000
MOVE P, @0 drop4_hover
SPEED 20
GOHOME
'MOVE P, @0 rest
GIVEARM


com_discom #9

END
