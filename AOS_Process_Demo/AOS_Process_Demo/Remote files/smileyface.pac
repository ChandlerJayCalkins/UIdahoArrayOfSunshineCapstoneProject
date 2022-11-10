'!TITLE "<SmileyFace>"
PROGRAM SmileyFace
takearm

j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 0.00)

'Circle Coordiates
p1 = (300, -500, 600, 90, 90, 0)
p2 = (300, -500, 400, 90, 90, 0)
p3 = (400, -500, 500, 90, 90, 0)
p4 = (200, -500, 500, 90, 90, 0)

'Move to home
move p, @p j00, s=40
delay 3000

'Draw circle
approach l, p1, @e 100, s=40
delay 1000
move l, @e p1, s=20
move c, p3, @p p2, s=50
move c, p4, @e p1, s=50
depart l, @p 100, s=20
delay 1000

'Move to home
move p, @p j00, s=40
END
