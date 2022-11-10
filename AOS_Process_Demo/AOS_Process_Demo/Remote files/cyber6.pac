'!TITLE "<Title>"
PROGRAM Cyber6

TAKEARM

p1 = (600, 0, 600, 0, 90, 0)
DEFINT flg

com_state #8,Flg


IF Flg=-1 THEN

  com_encom #8

ENDIF

INPUT #8, S1
com_discom #8

IF S1 = "Robot 2" THEN
   SPEED 30
   MOVE P, P1
   DELAY 500

ELSE
  move p, @p j00, s=20
ENDIF
END
