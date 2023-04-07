'!TITLE "<Title>"
PROGRAM aos_ink_movement

TAKEARM
defpos workstart
defpos start_jp
defpos start_p
defpos rest

workstart =J2P((9.37, -73.75, 152.74, 8.45, -5.67, 156.41))
rest = J2P((-1.46, -91.03, 164.06, 1.73, -0.63, 162.44))
start_jp = J2P ((31.27, 28.57, 148.99, 8.46, -80.60, 156.41))
start_p = (391.39, 207.25, 296.18, 107.19, -67.19, 100.03)
HOME workstart

SPEED 10
GOHOME
SPEED 10
MOVE P, @0 start_jp
MOVE P, @0 start_p

DELAY 2000

GOHOME

GIVEARM

END
