'!TITLE "<Title>"
PROGRAM UI_logo

TAKEARM

DEFINT li1,li2,li3,li4,li5,li6,li7,li8,li9,li10

'distance to the drawing
li1=510

'values for the joints
li2=2.18
li3=-41.88
li4=-87.24

'speed
li5=100
li6=li5

'delay for motion
li7=500

'delay for points
li8=0

'retract position (degrees)
li9=10
li10=5

'home position
p0=(500,0,500,0,90,0)  
                                                  
'moves to home postion
move p, @e p0, s=100                                                     
delay li7

'points for top I
j0=(111.8014,(-5.770835-li9),(111.9134+li10),55.1979,-26.8909,172.9308)
p1=(-168,li1,672,li2,li3,li4)                                            
p2=(168,li1,672,li2,li3,li4)                                            
p3=(168,li1,576,li2,li3,li4)                                             
p4=(72,li1,576,li2,li3,li4)                                              
p5=(72,li1,468,li2,li3,li4)                                              
p6=(-72,li1,468,li2,li3,li4)                                             
p7=(-72,li1,576,li2,li3,li4)                                            
p8=(-168,li1,576,li2,li3,li4)                                            

'moves to start postion
move p, @e j0, s=li5
delay li7
'draws top of I
move l, @e p1, @e p2, s=li5                                          
delay li8
move l, @e p3, @e p4, s=li5                                         
delay li8
move l, @e p5, @e p6, s=li5                                          
delay li8
move l, @e p7, @e p8, s=li5                                              
delay li8
move l, @e p1, s=li5                                                     
delay li8
move l, @e j0, s=li5
delay li7

'points for lower I
j1=(99.72758,(21.03546-li9),(139.4512+li10),10.30799,-70.77831,-138.4266)
p9=(-72,li1,324,li2,li3,li4)
p10=(-72,li1,240,li2,li3,li4)
p11=(-168,li1,240,li2,li3,li4)
p12=(-168,li1,144,li2,li3,li4)
p13=(168,li1,144,li2,li3,li4)
p14=(168,li1,240,li2,li3,li4)
p15=(72,li1,240,li2,li3,li4)
p16=(72,li1,324,li2,li3,li4)

'moves to start position
move p, @e j1, s=li5
delay li8
'draws lower I
move l, @e p9, @e p10, s=li5
delay li8
move l, @e p11, @e p12, s=li5
delay li8
move l, @e p13, @e p14, s=li5
delay li8
move l, @e p15, @e p16, s=li5
delay li8
move l, @e p9, s=li5
delay li8
move l, @e j1, s=li5
delay li7

'points for outer box
j2=(129.6442,(18.31762-li9),(115.1832+li10),50.28069,-56.04468,-168.9134)
p17=(-348,li1,468,li2,li3,li4)
p18=(-348,li1,324,li2,li3,li4)
p19=(348,li1,324,li2,li3,li4)
p20=(348,li1,468,li2,li3,li4)

'moves to start position
move p, @e j2, s=li5
delay li8
'draws outer box
move l, @e p17, @e p18, s=li5
delay li8
move l, @e p19, @e p20, s=li5
delay li8
move l, @e p17, s=li5
delay li8
move l, @e j2, s=li5
delay li7

'point for inner box
j3=(128.6598,(18.30491-li9),(117.1533+li10),48.30141,-56.78895,-166.5825)
p21=(-336,li1,456,li2,li3,li4)
p22=(-336,li1,336,li2,li3,li4)
p23=(336,li1,336,li2,li3,li4)
p24=(336,li1,456,li2,li3,li4)

'moves to start position
move p, @e j3, s=li5
delay li8
'draws inner box
move l, @e p21, @e p22, s=li5
delay li8
move l, @e p23, @e p24, s=li5
delay li8
move l, @e p21, s=li5
delay li8

'points for V
p25=(-300,li1,336,li2,li3,li4)
p26=(-276,li1,336,li2,li3,li4)
p27=(-240,li1,456,li2,li3,li4)
p28=(-264,li1,456,li2,li3,li4)
p29=(-288,li1,384,li2,li3,li4)
p30=(-312,li1,456,li2,li3,li4)

'draws V
move l, @e p21, @e p25, s=li5
delay li8
move l, @e p26, @e p27, s=li5
delay li8
move l, @e p28, @e p29, s=li5
delay li8
move l, @e p30, @e p21, s=li5
delay li8
move l, @e j3, s=li5
delay li7

'points for 1st A
j4=(119.7449,(25.2983-li9),(129.6962+li10),32.23265,-68.46861,-148.0295)
j5=(114.5672,(10.29359-li9),(131.4191+li10),30.21703,-55.70073,-153.1697)
p31=(-204,li1,456,li2,li3,li4)
p32=(-240,li1,336,li2,li3,li4)
p33=(-216,li1,336,li2,li3,li4)
p34=(-204,li1,384,li2,li3,li4)
p35=(-180,li1,384,li2,li3,li4)
p36=(-168,li1,336,li2,li3,li4)
p37=(-144,li1,336,li2,li3,li4)
p38=(-180,li1,456,li2,li3,li4)
p39=(-192,li1,432,li2,li3,li4)
p40=(-204,li1,408,li2,li3,li4)
p41=(-180,li1,408,li2,li3,li4)

'moves to staring position
move p, @e j4, s=li5
delay li8
'draws 1st A
move l, @e p31, @e p32, s=li5
delay li8
move l, @e p33, @e p34, s=li5
delay li8
move l, @e p35, @e p36, s=li5
delay li8
move l, @e p37, @e p38, s=li5
delay li8
move l, @e p31, s=li5
delay li8
move l, @e j4, s=li5
delay li8
move l, @e j5, s=li5
delay li8
move l, @e p39, @e p40, s=li5
delay li8
move l, @e p41, @e p39, s=li5
delay li8 
move l, @e j5, s=li5
delay li7

'points for N
j6=(108.9246,(5.094772-li9),(133.2121+li10),24.66233,-51.00979,-151.1136)
p42=(-144,li1,456,li2,li3,li4)
p43=(-108,li1,456,li2,li3,li4)
p44=(-72,li1,384,li2,li3,li4)
p45=(-72,li1,456,li2,li3,li4)
p46=(-48,li1,456,li2,li3,li4)
p47=(-48,li1,336,li2,li3,li4)
p48=(-84,li1,336,li2,li3,li4)
p49=(-116,li1,408,li2,li3,li4)
p50=(-116,li1,336,li2,li3,li4)

'moves to starting position
move p, @e j6, s=li5
delay li8
'draws N
move l, @e p42, @e p43, s=li5
delay li8
move l, @e p44, @e p45, s=li5
delay li8
move l, @e p46, @e p47, s=li5
delay li8
move l, @e p48, @e p49, s=li5
delay li8
move l, @e p50, @e p37, s=li5
delay li8
move l, @e p42, s=li5
delay li8
move l, @e j6, s=li5
delay li7

'points for D
j7=(94.89909,(1.708032-li9),(136.817+li10),6.526316,-48.70978,-139.3171)
j8=(94.89909,(4.536976-li9),(138.0237+li10),6.161379,-52.72079,-138.7411)
p51=(-36,li1,456,li2,li3,li4)
p52=(-12,li1,456,li2,li3,li4)
p53=(48,li1,396,li2,li3,li4)
p54=(-12,li1,336,li2,li3,li4)
p55=(-36,li1,336,li2,li3,li4)
p56=(-12,li1,432,li2,li3,li4)
p57=(24,li1,396,li2,li3,li4)
p58=(-12,li1,360,li2,li3,li4)

'moves to position
move p, @e j7, s=li5
delay li8
'draws D
move l, @e p51, @e p52, s=li5
delay li8
move c, p53, @e p54, s=li5
delay li8
move l, @e p55, @e p51, s=li5
delay li8
move l, @e j8, s=li5
delay li8
move l, @e p56, s=li5
delay li8
move c, p57, @e p58, s=li5
delay li8
move l, @e p56, s=li5
delay li8
move l, @e j8, s=li5
delay li7

'points for 2nd A
j9=(83.4802,(18.68621-li9),(140.043+li10),-6.991866,-68.87336,-132.469)
j10=(77.125,(5.897543-li9),(136.5211+li10),-16.08874,-53.51922,-125.2694)
p59=(48,li1,336,li2,li3,li4)
p60=(84,li1,456,li2,li3,li4)
p61=(108,li1,456,li2,li3,li4)
p62=(144,li1,336,li2,li3,li4)
p63=(120,li1,336,li2,li3,li4)
p64=(108,li1,384,li2,li3,li4)
p65=(84,li1,384,li2,li3,li4)
p66=(72,li1,336,li2,li3,li4)
p67=(96,li1,432,li2,li3,li4)
p68=(84,li1,408,li2,li3,li4)
p69=(108,li1,408,li2,li3,li4)

'moves to staring position
move p, @e j9, s=li5
delay li8
'draws 2nd A
move l, @e p59, @e p60, s=li5
delay li8
move l, @e p61, @e p62, s=li5
delay li8
move l, @e p63, @e p64, s=li5
delay li8
move l, @e p65, @e p66, s=li5
delay li8
move l, @e p59, s=li5
delay li8
move l, @e j9, s=li5
delay li8
move l, @e j10, s=li5
delay li8
move l, @e p67, @e p68, s=li5
delay li8
move l, @e p69, @e p67, s=li5
delay li8
move l, @e j10, s=li5
delay li7

'points for L
j11=(71.07536,(5.094772-li9),(133.2121+li10),-24.66233,-51.00979,-118.8864)
p70=(144,li1,456,li2,li3,li4)
p71=(168,li1,456,li2,li3,li4)
p72=(168,li1,360,li2,li3,li4)
p73=(228,li1,360,li2,li3,li4)
p74=(228,li1,336,li2,li3,li4)

'moves to starting position
move p, @e j11, s=li5
delay li8
'draws L
move l, @e p70, @e p71,s=li5
delay li8
move l, @e p72, @e p73,s=li5
delay li8
move l, @e p74, @e p62,s=li5
delay li8
move l, @e p70,s=li5
delay li8
move l, @e j11, s=li5
delay li7

'points for S
j12=(51.34019,(21.69614-li9),(118.6082+li10),-46.11523,-60.08276,-107.5909)
p75=(336,li1,420,li2,li3,li4)
p76=(336,li1, 444,li2,li3,li4)
p77=(300,li1,456,li2,li3,li4)
p78=(264,li1,420,li2,li3,li4)
p79=(288,li1,372,li2,li3,li4)
p80=(276,li1,360,li2,li3,li4)
p81=(264,li1,372,li2,li3,li4)
p82=(240,li1,372,li2,li3,li4)
p83=(276,li1,336,li2,li3,li4)
p84=(312,li1,372,li2,li3,li4)
p85=(288,li1,420,li2,li3,li4)
p86=(300,li1,432,li2,li3,li4)
p87=(324,li1,420,li2,li3,li4)
p88=(240,li1,360,li2,li3,li4)

'moves to starting position
move p, @e j12, s=li5
delay li8
'draws S
move l, @e p75, s=li5
move l, @e p76, s=li5
move c, p77, @p p78, s=li5
move c, p78, @p p79, s=li5
move c, p80, @e p81, s=li5
move l, @e p82, @e p88, s=li5
move c, p83, @p p84, s=li5
move c, p84, @p p85, s=li5
move c, p86, @e p87, s=li5
move l, @e p75, s=li5
move l, @e j12, s=li5
delay li7

'goes home
move p, @e p0, s=li5

END
