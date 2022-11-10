'!TITLE "<Title>"
PROGRAM slidetest

j01 = (63.03, 1.53, 147.98, 3.37, -38.36, 231.67) 'rest j
j02 = (71.67, 42.19, 144.86, -9.84, -67.31, 234.15) 'hole 1 j
j03 = (71.67, 39.85, 145.64, -9.96, -65.77, 234.44) 'above hole

TAKEARM
SPEED 75

'REST POS
MOVE P, @E j01

'hole
MOVE P, @E j03
SPEED 6.6667 'change speed to 2% 
MOVE P, @E j02
DELAY 1000
MOVE P, @E j03 

SPEED 50
'BACK TO REST
MOVE P, @E j01

END
