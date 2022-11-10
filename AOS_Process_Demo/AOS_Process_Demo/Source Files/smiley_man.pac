'!TITLE "<Title>"
PROGRAM smiley_man

TAKEARM

DEFINT li1,li2,li3,li4,li5,li6,li7,li8

'distance to the drawing
li1=700

'values for the joints
li2=-90
li3=-45
li4=0

'speed
li5=100
li6=li5

'delay
li7=1000

'retract distance
li8=50

'home position
p0=(500,0,500,0,90,0)               

'points for the head
p25=(0,(li1-li8),672,li2,li3,li4)
p1=(0,li1,672,li2,li3,li4)          
p2=(-264,li1,408,li2,li3,li4)       
p3=(0,li1,144,li2,li3,li4)         
p4=(264,li1,408,li2,li3,li4)        

MOVE p, @e p0, S=li5                
delay li7

'moves to start position
MOVE p, @e p25, s=li5
MOVE p, @e p1, s=li6                
delay li7

'draws head
MOVE C, p2, @p p3, s=li6                     
MOVE C, p4, @e p1, s=li6               
delay li7

'backs off of point
MOVE p, @e p25, s=li5
delay li7

'points for left eye
p26=(-96,(li1-li8),576,li2,li3,li4)
p5=(-96,li1,576,li2,li3,li4)        
p6=(-120,li1,528,li2,li3,li4)       
p7=(-96,li1,480,li2,li3,li4)        
p8=(-72,li1,528,li2,li3,li4)        

'moves to left eye
MOVE p, @e p26, s=li5
MOVE p, @e p5, s=li6               
delay li7

'draws left eye
MOVE C, P6, @p p7, s=li6                   
MOVE C, p8, @P p5, s=li6           
delay li7

'backs off of point
MOVE p, @e p26, s=li5
delay li7

'points for right eye
p27=(96,(li1-li8),576,li2,li3,li4)
p9=(96,li1,576,li2,li3,li4)
p10=(72,li1,528,li2,li3,li4)
p11=(96,li1,480,li2,li3,li4)
p12=(120,li1,528,li2,li3,li4)

'moves to right eye
MOVE p, @e p27, s=li5
MOVE p, @e p9, s=li6
delay li7

'draws right eye
MOVE C, p10, @p p11, s=li6
MOVE C, p12, @P p9, s=li6
delay li7

'backs off of point
MOVE p, @e p27, s=li5
delay li7 

'points for smile
p28=(-168,li1-li8,360,li2,li3,li4)
p17=(-168,li1,360,li2,li3,li4)
p18=(168,li1,360,li2,li3,li4)
p19=(0,li1,240,li2,li3,li4)
p20=(0,li1,168,li2,li3,li4)

'moves to point
MOVE p, @e p28, s=li5
MOVE p, @e p17, s=li6
delay li7

'draws smile
MOVE C, p19, @e p18, s=li6
MOVE C, P20, @e p17, s=li6
delay li7

'backs of of point 
MOVE p, @e p28, s=li5
delay li7

'points for left dimple
P28=(-168,(li1-li8),408,li2,li3,li4)
p13=(-216,li1,360,li2,li3,li4)
p14=(-168,li1,408,li2,li3,li4)

'moves to point
MOVE p, @e p28, s=li5
MOVE p, @e p14, s=li6
delay li7

'draws left dimple
MOVE C, p17, @e p13, s=li6
delay li7

'backs off of point
MOVE p, @e p28, s=li5

'points for right dimple
p29=(168,li1-li8,408,li2,li3,li4)
p16=(168,li1,408,li2,li3,li4)
p15=(216,li1,360,li2,li3,li4)

'moves to point
MOVE p, @e p29, s=li5
MOVE p, @e p16, s=li6
delay li7

'draws right dimple
MOVE C, p18, @e p15, s=li6
delay li7

'backs off of point
MOVE p, @e p29, s=li5
delay li7

'moves to home
MOVE p, @e p0, S=li5               

END
