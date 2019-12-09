#coding: utf8 
import pdb
#— рассчитать определитель матрицы 2*2 
def calc_det(R):
    r11 = R[0][0] 
    print(r11)
    r12 = R[0][1] 
    r21 = R[1][0] 
    r22 = R[1][1]
    return float( r11*r22 - r12*r21 ) 

print (u'расчет простых контуров')
e1,e2,r1,r2,r3 = input('введите El, E2, R1, R2, R3: ').split()
e1=int(e1);e2=int(e2);\
r1=int(r1);r2=int(r2);r3=int(r3)

pdb.set_trace()

R = [ [r1+r3, r3], [r3, r2+r3] ]
det = calc_det( R )
i1 = ( (r2 + r3)*e1 - r3*e2 )/det
i2 = ( -r3*e1 +(r1 + r3)*e2)/det
i3 = i1 + i2 
u3 = r3*i3

print (u'токи в мА II = %5.2f, 12 = %5.2f,\
i3 = %5.2f' %( i1*1000, i2*1000, i3*1000)) 
print (u'напряжение U3 = %5.2f вольтах' % (u3))
