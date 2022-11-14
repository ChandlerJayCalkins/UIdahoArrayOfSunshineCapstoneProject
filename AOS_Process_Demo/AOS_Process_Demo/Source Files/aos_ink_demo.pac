'!TITLE "<Title>"
PROGRAM aos_ink_demo

TAKEARM
SPEED 40
defpos rest
defpos workStart
defpos one
defpos two
defpos three
defpos four
defpos five
defpos six
defpos seven
defpos eight

rest = J2P((-0.45, -99.99, 168.99, 121.1, -119.99, -89.27))
workStart = J2P((-0.45, 11.81, 134.5, 120.38, -1.92, -89.27))
one = J2P((14, 39.4, 126.17, 121.1, 2.58, -89.26))
two = J2P((12.12, 51.89, 90.46, 121.1, 19.86, -89.26))
three = J2P((8.69, 51.9, 90.46, 121.1, 19.86, -89.26))
four = J2P((11.38, 42.49, 124.68, 121.1, 2.23, -89.26))
five = J2P((9.09, 42.5, 124.1, 121.1, 2.23, -89.26))
six = J2P((7.08, 51.37, 93.76, 121.1, 21.36, -89.26))
seven = J2P((3.78, 51.38, 93.76, 121.1, 21.36, -89.26))
eight = J2P((5.33, 41.86, 125.1, 121.1, 3.27, -89.26))
HOME rest

MOVE P, workStart
MOVE P, one
MOVE P, two
MOVE P, three
MOVE P, four
MOVE P, five
MOVE P, six
MOVE P, seven
MOVE P, eight
GOHOME

GIVEARM
END
