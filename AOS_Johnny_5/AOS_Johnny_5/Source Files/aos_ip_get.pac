'!TITLE "<Title>"
PROGRAM aos_ip_get

TAKEARM
defpos rest
defpos conn
defpos aha
defpos boohoo
defpos finish

rest = J2P((130.0, -98.68, 159.69, 0.0, 0.01, 85.51))
conn = J2P((130.0, -98.68, 100.0, 0.0, 0.01, 85.51))
aha = J2P((160.0, -98.68, 159.69, 0.0, 0.01, 85.51))
boohoo = J2P((100.0, -98.68, 159.69, 0.0, 0.01, 85.51))
finish = J2P((130.0, -61.0, 159.69, 0.0, 0.01, 85.51))

SPEED 20

'MOVE P, @0 rest

DEFINT flg
com_state #8,flg
IF flg=-1 THEN
	com_encom #8
	MOVE P, @0 conn
ENDIF
'com_state #4,flg
'IF flg=-1 THEN
'	MOVE P, @0 finish
'	HALT "Connection failed"
'ENDIF

FLUSH #8
S9 = ":)"
PRINT #8,S9
INPUT #8,S10
IF S10=":)" THEN
	MOVE P, @0 aha
ELSE
	MOVE P, @0 boohoo
ENDIF

com_discom #8

MOVE P, @0 finish

GIVEARM

END
