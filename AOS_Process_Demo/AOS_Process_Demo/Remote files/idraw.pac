'!TITLE "<iDraw>"
PROGRAM iDraw

motor on
takearm

'p00 = (400, 0, 400, 0, 90, 0)
j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 90)

'I points
p11 = (150, -570, 600, 90, 0, 0)
p12 = (-150, -570, 600, 90, 0, 0)
p13 = (-150, -570, 500, 90, 0, 0)
p14 = (-50, -570, 500, 90, 0, 0)
p15 = (-50, -570, 300, 90, 0, 0)
p16 = (-150, -570, 300, 90, 0, 0)
p17 = (-150, -570, 200, 90, 0, 0)
p18 = (150, -570, 200, 90, 0, 0)
p19 = (150, -570, 300, 90, 0, 0)
p20 = (50, -570, 300, 90, 0, 0)
p21 = (50, -570, 500, 90, 0, 0)
p22 = (150, -570, 500, 90, 0, 0)

'Move to home
move p, @e j00, s=40
delay 3000

'Draw I
approach l, p11, @p 100, s=40
delay 1000
move l, @e p11, s=20
move l, @e p12, s=30
move l, @e p13, s=30
move l, @e p14, s=30
move l, @e p15, s=30
move l, @e p16, s=30
move l, @e p17, s=30
move l, @e p18, s=30
move l, @e p19, s=30
move l, @e p20, s=30
move l, @e p21, s=30
move l, @e p22, s=30
move l, @e p11, s=30
depart l, @p 100, s=20
delay 1000

'Move to home
move p, @e j00, s=40
motor off

END
