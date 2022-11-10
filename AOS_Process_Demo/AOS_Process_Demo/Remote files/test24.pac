'!TITLE "<Title>"
PROGRAM test24

TAKEARM 

  defpos pos1
  
  SPEED 10


  pos1 = J2P((-86.16,45.35,-90.56,160.74,2.22,1.15))
  
  MOVE P,@0 pos1

END
