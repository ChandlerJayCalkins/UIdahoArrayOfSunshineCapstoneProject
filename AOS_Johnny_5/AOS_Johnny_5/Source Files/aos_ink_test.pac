'!TITLE "<Title>"
PROGRAM aos_ink_test

TAKEARM
defpos workstart
defpos pos1
defpos pos2

workstart = J2P((9.37, -73.75, 152.74, 8.45, -5.67, 156.41))
pos1 = J2P((31.26, 29.26, 145.52, 28.43, -87.04, 162.04))
pos2 = J2P((6.87, 29.26, 145.52, 28.43, -87.04, 162.04))

SPEED 15

DEFINT flg
com_state #8,flg
IF flg=-1 THEN
	com_encom #8
ENDIF

FLUSH #8
S10 = ":)"
PRINT #8,S10

MOVE P,@0 workstart
MOVE P,@0 pos1
PRINT #8,S10
MOVE P,@0 pos2
PRINT #8,S10
DELAY 1000
PRINT #8,S10
MOVE P,@0 workstart

GIVEARM
com_discom #8

END
