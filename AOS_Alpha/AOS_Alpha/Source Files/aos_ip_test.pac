'!TITLE "<Title>"
PROGRAM aos_ip_test

TAKEARM
SPEED 20

defpos rest
defpos conn
defpos finish

rest = J2P((0.0, -98.68, 159.69, 0.0, 0.01, 85.51))
conn = J2P((0.0, -98.68, 100.0, 0.0, 0.01, 85.51))
finish = J2P((0.0, -61.0, 159.69, 0.0, 0.01, 85.51))

MOVE P, @0 rest

DEFINT flg
com_state #9,flg
IF flg=-1 THEN
	com_encom #9
	MOVE P, @0 conn
ENDIF
com_state #9,flg
IF flg=-1 THEN
	MOVE P, @0 finish
	HALT "Connection failed"
ENDIF

FLUSH #9

S10 = ":)"
PRINT #9,S10
MOVE P, @0 finish

com_discom #9
GIVEARM

END
