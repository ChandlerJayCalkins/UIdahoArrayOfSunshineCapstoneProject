'!TITLE "<Title>"
#include "setmonitorcond.pac"
#include "startsrvmonitor.pac"
#include "stopsrvmonitor.pac"

PROGRAM powertest
CALL SetMonitorCond(1,1,2,4)
CALL StartSrvMonitor
j01 = (-13.70, -9.19, 156.00, 3.54, 23.00, 167.31) 'rest pos in J
j02 = (-51.64, -9.14, 155.97, 3.53, 23.00, 167.30) 'pos #1

'2782
TAKEARM

'Rest pos
MOVE P, @E j01

'first pos
MOVE P, @E j02

'Back to rest
MOVE P, @E j01
CALL StopSrvMonitor
END
