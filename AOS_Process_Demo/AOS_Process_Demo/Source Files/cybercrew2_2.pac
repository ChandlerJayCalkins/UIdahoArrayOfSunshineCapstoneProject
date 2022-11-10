'!TITLE "<Title>"
PROGRAM cybercrew2_2
TAKEARM

j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 90)

P1 = (150, -570, 600, 90, 0, 0)

'Check port 10

    
Com_encom #10

  INPUT #10, I3
  IF I3 = 2 THEN
    MOVE P, P1
  Endif

  delay 500

  com_discom #10

Move P, @P j00

'Check port 10
'  com_state #10, Flg1
'
'  If Flg1 = -1 then
'    
'    com_encom #11
'
'  Endif
'
'  WRITE #10, S2
'  com_discom #10

GIVEARM

END
