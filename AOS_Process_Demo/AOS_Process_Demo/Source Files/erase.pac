'!TITLE "<Title>"
PROGRAM erase

motor on
takearm

j00 = (90.00, -6.53, 155.37, 0.00, -60.54, 90)

'positions
p10= (500, -599, 750, 45, 0 ,0)
p11= (-450, -599, 750, 45, 0, 0)
p12= (-450, -599, 700, 45, 0,0) 
p13= (500, -599, 700, 45, 0, 0)
p14= (500, -599, 650, 45, 0 ,0)
p15= (-450, -599, 650, 45, 0, 0)
p16= (-450, -599, 600, 45, 0,0)
p17= (500, -599, 600, 45, 0, 0)
p18= (500, -599, 550, 45, 0, 0)
p19= (-450, -599, 550, 45, 0 ,0)
p20= (-450, -599, 500, 45, 0, 0)
p21= (500, -599, 500, 45, 0, 0)
' move home
move p, @e j00, s=40
delay 2000

'erase
approach p, p10, @p 100, s=40
delay 1000
move l, @e p10, s=30
move l, @e p11, s=30
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
'move home
move p, @e j00, s=40
delay 5000
motor off

END
