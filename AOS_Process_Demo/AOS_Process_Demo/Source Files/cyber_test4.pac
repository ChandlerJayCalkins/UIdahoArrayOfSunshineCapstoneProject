'!TITLE "<Title>"
PROGRAM Cyber_Test4
DEFINT Flg
DEFINT Flg1

TAKEARM


j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 90)
p1 = (600, 0, 600, 0, 90, 0)
p2 = (450, 0, 600, 0, 90, 0)
p3 = (750, 0, 600, 0, 90, 0)
p4 = (600, 0, 750, 0, 90, 0)
p5 = (600, 0, 450, 0, 90, 0)

DO 
  com_state #10,Flg

IF Flg=-1 THEN

    com_encom #10
ENDIF
DELAY 10

  INPUT #10, S1

  DELAY 10

  com_discom #10

Loop
  IF S1 = "YOUR" THEN

    'Move to home position
    move p, @p j00, s=20
    delay 2000
    move l, @p p1, s=30 'Move to the center of the circles

    'Draws  circle on the xz plane
    move l, @e p2, s=20
    move c, p4, @p p3, s=50
    move c, p5, @e p2, s=50
    move l, @p p1, s=20
    delay 1000
  ELSE
      move p, @p j00, s=20
  ENDIF


END
