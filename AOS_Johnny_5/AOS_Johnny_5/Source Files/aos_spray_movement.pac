'!TITLE "<Title>"
PROGRAM aos_spray_movement

TAKEARM
defpos workstart
defpos q1
defpos q2
defpos q3
defpos q4
defpos q5
defpos q6
defpos q7
defpos q8
defpos q9
defpos q10
defpos q11
defpos q12
defpos rest

workstart = J2P((-2.41, -61.56, 156.35, 0.0, 21.83, 160.70))
rest = J2P((-1.46, -91.03, 164.06, 0.0, -0.63, 162.44))
q1 = J2P((-21.58, 32.49, 132.36, 0.0, 14.14, 160.71))
q2 = J2P((9.11, 32.49, 132.36, 0.0, 14.14, 160.71))
q3 = J2P((8.9, 37.78, 122.13, 0.0, 18.16, 160.71))
q4 = J2P((-19.8, 37.78, 122.13, 0.0, 18.16, 160.71))
q5 = J2P((-18.08, 43.95, 107.57, 0.0, 26.26, 160.71))
q6 = J2P((7.64, 43.96, 107.57, 0.0, 26.26, 160.71))
q7 = J2P((6.8, 48.32, 98.34, 0.0, 31.9, 160.71))
q8 = J2P(( -16.19, 48.32, 98.34, 0.0, 31.9, 160.71))
q9 = J2P((-17.93, 41.82, 111.13, 0.01, 25.47, 160.70))
q10 = J2P((10.47, 41.98, 112.33, 0.01, 25.47, 179.54))
'q1 = J2P((-15.30, 40.48, 128.13, 0.64, 11.78, 160.71))
'q2 = J2P((-6.79, 41.35, 128.16, 0.64, 11.78, 160.71))
'q3 = J2P((7.95, 41.50, 128.16, 0.64, 10.42, 160.72))
'q4 = J2P((6.16, 47.07, 115.97, 3.76, 13.71, 160.72))
'q5 = J2P((-6.36, 45.54, 117.83, 3.76, 12.62, 160.72))
'q6 = J2P((-16.05, 47.44, 115.23, 3.76, 12.62, 160.72))
'q7 = J2P((-14.92, 51.92, 106.04, 3.76, 21.70, 160.72))
'q8 = J2P((-5.67, 49.43, 109.22, 3.76, 21.70, 160.72))
'q9 = J2P((5.62, 49.71, 108.34, 3.76, 21.70, 160.72))
'q10 = J2P((4.15, 55.85, 94.48, 3.76, 27.64, 160.72))
'q11 = J2P((-5.10, 55.85, 94.48, 3.76, 27.64, 160.72))
'q12 = J2P((-12.68, 57.30, 93.26, 3.76, 24.18, 160.72))
HOME workstart

DEFINT flg
com_state #8,flg
IF flg=-1 THEN
	com_encom #8
ENDIF

FLUSH #8
S10 = ":)"
PRINT #8,S10

SPEED 20
GOHOME
MOVE P, @0 q1
PRINT #8,S10
DELAY 17000
SPEED 5
MOVE P, @0 q2
SPEED 20
MOVE P, @0 q3
SPEED 5
MOVE P, @0 q4
SPEED 20
MOVE P, @0 q9
SPEED 5
MOVE P, @0 q10
SPEED 20
MOVE P, @0 q6
SPEED 5
MOVE P, @0 q5
SPEED 20
MOVE P, @0 q8
SPEED 5
MOVE P, @0 q7
'MOVE P, @0 q9
'MOVE P, @0 q10
'MOVE P, @0 q11
'MOVE P, @0 q12

PRINT #8,S10
DELAY 2000
SPEED 20
'MOVE P, @0 rest
GOHOME
'MOVE P, @0 rest
GIVEARM

com_discom #8

END
