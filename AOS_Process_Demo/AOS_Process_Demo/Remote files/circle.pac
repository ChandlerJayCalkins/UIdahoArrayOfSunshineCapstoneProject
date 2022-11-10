'!TITLE "<Circle>"
PROGRAM Circle

'This program moves through circles in the xz, xy and yz plane.
'It is used to display the coordinated motion of the joints

motor on
takearm

'p00 = (400, 0, 400, 0, 90, 0)
j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 90)
p1 = (600, 0, 600, 0, 90, 0)

p2 = (450, 0, 600, 0, 90, 0)
p3 = (750, 0, 600, 0, 90, 0)

p4 = (600, 0, 750, 0, 90, 0)
p5 = (600, 0, 450, 0, 90, 0)

p6 = (600, 150, 600, 0, 90, 0)
p7 = (600, -150, 600, 0, 90, 0)

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

'Draws circle on the xy plane
move l, @e p7, s=20
move c, p3, @p p6, s=50
move c, p2, @e p7, s=50
move l, @p p1, s=20
delay 1000

'Draws circle on the yz plane
move l, @e p4, s=20
move c, p6, @p p5, s=50
move c, p7, @e p4, s=50
move l, @p p1, s=20
delay 1000

move l, @p j00, s=30
motor off

END
