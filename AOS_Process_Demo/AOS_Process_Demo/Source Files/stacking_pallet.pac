'!TITLE "<Title>"
PROGRAM STACKING_PALLET

DEFINT li2,li3
li2=200
TAKEARM

for li3= 0 to 4
  p6=(0,500,180,180,0,180) 'pick up location
  'pick up is po
  p7=(400,600-(li2),180,180,0,180) 'goes to the bin

'pick up  
  move p,@e p6, s=100 'moves to pickup position
 
  APPROACH P ,P6 ,@0 -30 ,S=100 'grabs object
  delay 500
  DEPART P ,@0 30 ,S=100 'takes object

'drop off
  
  move p,@e p7, s=100 'moves to bin
  
  APPROACH P ,P7 ,@0 -30 ,S=100 'puts object in
  delay 500
  DEPART P ,@0 30 ,S=100 'leaves object

  
  li2=li2+200
  delay 1000
  move p,@e p6, s=100
  next
  
END
