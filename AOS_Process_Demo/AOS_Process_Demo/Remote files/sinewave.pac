'!TITLE "<SineWave>"
PROGRAM SineWave

motor on
takearm

'Home Position
p00 = (400, 0, 400, 90, 0, 90)
j00 = (90, -6.53, 155.37, 0.00, -60.54, 90)
       
'Axis Points

p12 = (450, -570, 450, 90, 0, 0) + (0, 0, 200, 0, 0, 0)
p13 = (450, -570, 250, 90, 0, 0) + (0, 0, 200, 0, 0, 0)
p14 = (450, -570, 350, 90, 0, 0) + (0, 0, 200, 0, 0, 0)
p15 = (-450, -570, 350, 90, 0, 0) + (0, 0, 200, 0, 0, 0)

'Sine Wave Points
p21 = (450, -570, 350, 90, 0, 0) 'zero
p22 = (427.5, -570, 388.3, 90, 0, 0)
p23 = (405, -570, 420.7, 90, 0, 0)
p24 = (382.5, -570, 442.4, 90, 0, 0)
p25 = (360, -570, 450, 90, 0, 0) 'peak
p26 = (337.5, -570, 442.4, 90, 0, 0)
p27 = (315, -570, 420.7, 90, 0, 0)
p28 = (292.5, -570, 388.3, 90, 0, 0)
p29 = (270, -570, 350, 90, 0, 0) 'zero
p30 = (247.5, -570, 311.7, 90, 0, 0)
p31 = (225, -570, 279.3, 90, 0, 0)
p32 = (202.5, -570, 257.6, 90, 0, 0)
p33 = (180, -570, 250, 90, 0, 0) 'trough
p34 = (157.5, -570, 257.6, 90, 0, 0)
p35 = (135, -570, 279.3, 90, 0, 0)
p36 = (112.5, -570, 311.7, 90, 0, 0)
p37 = (90, -570, 350, 90, 0, 0) 'zero
p38 = (67.5, -570, 388.3, 90, 0, 0)
p39 = (45, -570, 420.7, 90, 0, 0)
p40 = (22.5, -570, 442.4, 90, 0, 0)
p41 = (0, -570, 450, 90, 0, 0) 'peak
p42 = (-22.5, -570, 442.4, 90, 0, 0)
p43 = (-45, -570, 420.7, 90, 0, 0)
p44 = (-67.5, -570, 388.3, 90, 0, 0)
p45 = (-90, -570, 350, 90, 0, 0) 'zero
p46 = (-112.5, -570, 311.7, 90, 0, 0)
p47 = (-135, -570, 279.3, 90, 0, 0)
p48 = (-157.5, -570, 257.6, 90, 0, 0)
p49 = (-180, -570, 250, 90, 0, 0) 'traugh
p50 = (-202.5, -570, 257.6, 90, 0, 0)
p51 = (-225, -570, 279.3, 90, 0, 0)
p52 = (-247.5, -570, 311.7, 90, 0, 0)
p53 = (-270, -570, 350, 90, 0, 0) 'zero
p54 = (-292.5, -570, 388.3, 90, 0, 0)
p55 = (-315, -570, 420.7, 90, 0, 0)
p56 = (-337.5, -570, 442.4, 90, 0, 0)
p57 = (-360, -570, 450, 90, 0, 0) 'peak
p58 = (-383.5, -570, 442.4, 90, 0, 0)
p59 = (-405, -570, 420.7, 90, 0, 0)
p60 = (-427.5, -570, 388.3, 90, 0, 0)
p61 = (-450, -570, 350, 90, 0, 0) 'zero

'Set Spine
setsplinepoint 1, p21 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p22 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p23 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p24 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p25 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p26 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p27 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p28 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p29 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p30 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p31 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p32 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p33 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p34 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p35 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p36 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p37 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p38 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p39 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p40 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p41 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p42 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p43 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p44 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p45 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p46 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p47 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p48 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p49 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p50 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p51 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p52 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p53 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p54 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p55 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p56 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p57 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p58 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p59 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p60 + (0, 0, 200, 0, 0, 0)
setsplinepoint 1, p61 + (0, 0, 200, 0, 0, 0)

'Move to Home Position
move p, @e j00, s=40
delay 3000

'Draw Axis
approach p, p12, @e 100, s=40
delay 1000
move l, @e p12, s=20
move l, @e p13, s=30
depart l, @p 100, s=20
delay 1000
approach l, p14, @e 100, s=40
delay 1000
move l, @e p14, s=20
move l, @e p15, s=30
depart l, @p 100, s=20
delay 1000

'Draw Spline

approach l, p14, @e 100, s=40
delay 1000
move l, @e p14, s=40
delay 1000
move s, @e 1, s=60
depart l, @e 100, s=20
delay 1000

'Return Home
move l, @p p14+(0, 100, 0, 0, 0, 0), s=40
move p, @e j00, s=40
delay 5000

motor off

END
