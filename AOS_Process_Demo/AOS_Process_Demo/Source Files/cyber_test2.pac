'!TITLE "<Title>"
PROGRAM Cyber_Test2

TAKEARM

j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 90)
P1 = (150, -570, 500, 90, 0, 0)

  MOVE P, @P j00

  DEFINT Flg
  DEFINT Flg1

'Check port 10
  com_state #10,Flg1

  IF Flg1=-1 THEN

    com_encom #10

  ENDIF

  INPUT #10, S8
  com_discom #10

  IF S8 = "YOUR TURN" THEN
  
    MOVE P, P1

  ENDIF

  DELAY 500

  MOVE P, @P j00
'
''Check port 11
'  com_state #10,Flg1
'
'  IF Flg1=-1 THEN
'
'    com_encom #10
'
'  ENDIF
'
'  WRITE #10, S2
'  com_discom #10
'
GIVEARM


END
