'!TITLE "<Title>"
PROGRAM RoboShopScrew

j01 = (63.03, 1.53, 147.98, 3.37, -38.36, 231.67) 'rest j

j02 = (71.98, 40.26, 147.42, 8.80, -69.34, 237.18) 'Well 1a 
j03 = (71.98, 44.00, 146.12, 8.67, -71.76, 237.57) 'Well 1b
j04 = (73.10, 40.96, 144.10, 10.05, -66.73, 236.85) 'Well 2a
j05 = (73.10, 44.20, 142.97, 9.90, -68.81, 237.24) 'Well 2b
j06 = (74.10, 41.64, 140.73, 11.24, -64.08, 236.37) 'Well 3a
j07 = (74.10, 44.78, 139.63, 11.06, -66.08, 236.81) 'Well 3b
j08 = (68.36, 40.72, 146.32, 5.42, -68.76, 236.60)  'Well 4a
j09 = (68.35, 43.95, 145.19, 5.35, -70.86, 236.81)  'Well 4b
j10 = (69.68, 41.31, 143.06, 6.80, -66.10, 236.43)  'Well 5a
j11 = (69.68, 44.53, 141.93, 6.70, -68.17, 236.70)  'Well 5b
j12 = (70.66, 41.90, 139.78, 7.92, -63.41, 236.11) 'Well 6a
j13 = (70.66, 44.98, 138.69, 7.79, -65.39, 236.41) 'Well 6b
j14 = (65.60, 42.85, 144.43, 4.62, -69.35, 236.50)  'Well 7a
j15 = (65.60, 44.23, 143.94, 4.60, -70.23, 236.58)  'Well 7b
j16 = (66.95, 43.33, 141.33, 6.00, -66.70, 236.38)  'Well 8a
j17 = (66.95, 44.47, 140.89, 5.97, -67.42, 236.47)  'Well 8b
j18 = (68.20, 43.82, 138.08, 7.36, -66.70, 236.11)  'Well 9a
j19 = (68.20, 45.04, 137.64, 7.32, -64.75, 236.22)  'Well 9b
j20 = (62.24, 43.09, 143.03, 1.45, -68.22, 236.01)  'Well 10a
j21 = (62.24, 43.82, 142.77, 1.44, -68.68, 236.03)  'Well 10b
j22 = (63.71, 43.41, 139.95, 2.91, -65.45, 236.03)  'Well 11a
j23 = (63.71, 44.53, 139.54, 2.89, -66.17, 236.07)  'Well 11b
j24 = (65.13, 44.41, 136.60, 4.37, -63.10, 235.93)  'Well 12a
j25 = (65.13, 45.26, 136.29, 4.35, -63.64, 235.97)  'Well 12b

j31 = (50.74, 52.71, 109.33, -12.62, -44.46, 240.22) 'Circle 1a
j32 = (50.74, 54.00, 108.83, -12.46, -45.22, 239.98) 'Circle 1b
j33 = (50.27, 55.32, 102.48, -14.32, -40.36, 241.91) 'Circle 2a
j34 = (50.27, 56.67, 101.93, -14.09, -41.14, 241.29) 'Circle 2b
j35 = (46.89, 55.46, 102.95, -18.66, -41.29, 243.50) 'Circle 3a
j36 = (46.89, 56.60, 102.49, -18.42, -41.93, 243.18) 'Circle 3b
j37 = (47.12, 52.24, 110.09, -17.07, -44.98, 241.64) 'Circle 4a
j38 = (47.12, 53.64, 109.55, -16.83, -45.80, 241.29) 'Circle 4b

j41 = (54.75, 56.69, 99.39, -8.49, -38.26, 239.72) 'Square 1a
j42 = (54.75, 58.34, 98.69, -8.34, -39.23, 239.53) 'Square 1b
j43 = (57.49, 61.77, 88.73, -5.28, -32.58, 238.78) 'Square 2a
j44 = (57.49, 63.01, 88.16, -5.19, -33.26, 238.68) 'Square 2b
j45 = (53.62, 65.02, 81.06, -13.19, -28.53, 244.13) 'Square 3a
j46 = (53.62, 66.38, 80.41, -12.90, -29.23, 243.80) 'Square 3b
j47 = (50.58, 60.11, 91.97, -15.81, -34.71, 244.15) 'Square 4a
j48 = (50.58, 61.40, 91.37, -15.55, -35.39, 243.83) 'Square 4b

j51 = (60.05, 68.79, 73.81, -1.39, -24.58, 236.80) 'Octagon 1a
j52 = (60.05, 70.06, 73.14, -1.36, -25.19, 236.77) 'Octagon 1b
j53 = (59.34, 74.28, 62.84, -3.68, -19.11, 238.68) 'Octagon 2a
j54 = (59.34, 75.25, 62.25, -3.61, -19.50, 238.60) 'Octagon 2b
j55 = (56.71, 72.60, 65.76, -10.09, -20.55, 243.41) 'Octagon 3a
j56 = (56.71, 73.83, 65.06, -9.85, -21.07, 243.17) 'Octagon 3b
j57 = (57.32, 67.37, 76.25, -6.91, -25.69, 240.48) 'Octagon 4a
j58 = (57.32, 68.84, 75.51, -6.73, -26.42, 240.28) 'Octagon 4b

TAKEARM
SPEED 75

'REST POS
MOVE P, @E j01
'Receives Signal from Robot 1
  COM_ENCOM #10

  INPUT #10, I3

'Start Screwing
  IF I3 = 3 THEN

    'Fastener 1 pickup
    MOVE P, @E j02
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j03
    DELAY 1000
    SPEED 75
    MOVE P, @E j02

    'Back to REST POS
    MOVE P, @E j01

    'Circle hole 4
    MOVE P, @E j37
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j38
    DELAY 1000
    SPEED 75
    MOVE P, @E j37

    SPEED 50
    'BACK TO REST
    MOVE P, @E j01

    'Fastener 2 pickup
    MOVE P, @E j04
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j05
    DELAY 1000
    SPEED 75
    MOVE P, @E j04

    'Back to REST POS
    MOVE P, @E j01

    'Circle hole 2
    MOVE P, @E j33
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j34
    DELAY 1000
    SPEED 75
    MOVE P, @E j33

    SPEED 50
    'BACK TO REST
    MOVE P, @E j01

    'Fastener 3 pickup
    MOVE P, @E j06
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j07
    DELAY 1000
    SPEED 75
    MOVE P, @E j06

    'Back to REST POS
    MOVE P, @E j01

    'Square hole 1
    MOVE P, @E j41
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j42
    DELAY 1000
    SPEED 75
    MOVE P, @E j41

    SPEED 50
    'BACK TO REST
    MOVE P, @E j01

    'Fastener 4 pickup
    MOVE P, @E j08
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j09
    DELAY 1000
    SPEED 75
    MOVE P, @E j08

    'Back to REST POS
    MOVE P, @E j01

    'Square hole 2
    MOVE P, @E j43
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j44
    DELAY 1000
    SPEED 75
    MOVE P, @E j43

    SPEED 50
    'BACK TO REST
    MOVE P, @E j01

    'Fastener 5 pickup
    MOVE P, @E j10
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j11
    DELAY 1000
    SPEED 75
    MOVE P, @E j10

    'Back to REST POS
    MOVE P, @E j01

    'Octagon hole 4
    MOVE P, @E j57
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j58
    DELAY 1000
    SPEED 75
    MOVE P, @E j57

    SPEED 50
    'BACK TO REST
    MOVE P, @E j01

    'Fastener 6 pickup
    MOVE P, @E j12
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j13
    DELAY 1000
    SPEED 75
    MOVE P, @E j12

    'Back to REST POS
    MOVE P, @E j01

    'Octagon hole 2
    MOVE P, @E j53
    SPEED 6.6667 'change speed to 2% 
    MOVE P, @E j54
    DELAY 1000
    SPEED 75
    MOVE P, @E j53

    SPEED 50
    'BACK TO REST
    MOVE P, @E j01
  END IF

'Reset the Variables
I3 = 0

END
