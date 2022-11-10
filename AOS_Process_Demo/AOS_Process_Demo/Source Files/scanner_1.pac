'!TITLE "<Title>"
PROGRAM Scanner_1

TAKEARM

MOVE P, P67, SPEED = 30

DEFINT flg

com_state #8,Flg



IF Flg=-1 THEN
                   ' Don't edit this block
	com_encom #8

ENDIF


INPUT #8, S1
com_discom #8


DELAY 500

IF S1 = "hexagon" THEN
   SPEED 30
   MOVE P, P68
   DELAY 500
ELSEIF S1 = "Rectangle" THEN
	SPEED 30
	MOVE P, P69
	DELAY 500
ELSE
	SPEED 30
	MOVE P, P67
	DELAY 500
ENDIF

	Move P, P70, SPEED = 30
	DELAY 500
	GIVEARM
END
