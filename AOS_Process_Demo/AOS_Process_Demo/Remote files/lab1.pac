'!TITLE "<Title>"
PROGRAM Lab1


TAKEARM  

MOTOR ON              

j00 = (0.00, -6.53, 155.37, 0.00, -60.54, 90)  '//home position
p1 = (600, 0, 600, 0, 90, 0)           '//center of circles

p3 = (450, 0, 600, 0, 90, 0)           '//left
p4 = (750, 0, 600, 0, 90, 0)           '//right

p5 = (600, 0, 750, 0, 90, 0)          '//top
p6 = (600, 0, 450, 0, 90, 0)          '//bottom

p7 = (600, 150, 600, 0, 90, 0)          '//front
p8 = (600, -150, 600, 0, 90, 0)          '//back

P22 = (150, -570, 600, 90, 0, 0)        '// rectangle begin 
P23 = (-150, -570, 600, 90, 0, 0)
P24 = (-150, -570, 300, 90, 0, 0)
P25 = (150, -570, 300, 90, 0, 0)

SPEED 50
DEFSTR ls1
ls1 = "xyV"

  IF ls1 = "xy" THEN
            move p, @p j00
        move l, @p p1, s=30 
            move l, @e p7, s=30
        move c, p4, @p p8, s=15
        move c, p3, @e p7, s=15
        move l, @p p1, s=30

  ELSEIF ls1 = "yz" THEN
            move p, @p j00
        move l, @p p1, s=30 
            move l, @e p7, s=30
        move c, p5, @p p8, s=15
        move c, p6, @e p7, s=15
        move l, @p p1, s=30

  ELSE
        SPEED 30
        move p, @p j00  
        MOVE l,@e P22
        MOVE l,@e P23
        MOVE l,@e P24
        MOVE l,@e P25
        MOVE l,@e P22

    
  ENDIF


GIVEARM
  


END
