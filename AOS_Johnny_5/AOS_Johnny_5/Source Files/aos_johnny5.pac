'!TITLE "<Title>"
PROGRAM aos_johnny5

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
DELAY 2000
SPEED 5
MOVE P, @0 q2
SPEED 20
MOVE P, @0 q3
SPEED 5
MOVE P, @0 q4
SPEED 20
MOVE P, @0 q5
SPEED 5
MOVE P, @0 q6
SPEED 20
MOVE P, @0 q7
SPEED 5
MOVE P, @0 q8
'MOVE P, @0 q9
'MOVE P, @0 q10
'MOVE P, @0 q11
'MOVE P, @0 q12

PRINT #8,S10
DELAY 2000
SPEED 20
'MOVE P, @0 rest
GOHOME

DELAY 2000

' Ink application code goes here

DELAY 2000

SPEED 20
GOHOME
MOVE P, @0 q1
PRINT #8,S10
DELAY 2000
SPEED 5
MOVE P, @0 q2
SPEED 20
MOVE P, @0 q3
SPEED 5
MOVE P, @0 q4
SPEED 20
MOVE P, @0 q5
SPEED 5
MOVE P, @0 q6
SPEED 20
MOVE P, @0 q7
SPEED 5
MOVE P, @0 q8
'MOVE P, @0 q9
'MOVE P, @0 q10
'MOVE P, @0 q11
'MOVE P, @0 q12

PRINT #8,S10
DELAY 2000
SPEED 20
'MOVE P, @0 rest
GOHOME

GIVEARM
com_discom #8

END
