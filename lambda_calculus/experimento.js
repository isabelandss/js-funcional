let r

//função identidade
const I = a => a

r = I(3)
r

r = I(I)
r

//função self application
const SELF = f => f(f)

r = SELF(I)
r

//primeiro
const PRI = a => b => a
r = PRI(7)(11)
r

//ultimo
const ULT = a => b => b
r = ULT(1)(5)
r

//flip
const FLIP = f => a => b => f(b)(a)

r = FLIP(ULT)(1)(5)
r 

r = FLIP(PRI)(2)(4)
r

//função 'ultima' usando flip
const ULT2 = a => b => FLIP(PRI)(a)(b)

r = ULT2(1)(2)
r

//boolean TRUE e FALSE
//exp ? PRI : ULT

const T = PRI
const F = ULT

T.inspect = () => 'verdadeiro (PRI)'
F.inspect = () => 'false (ULT)'

T
F

//NOT
const NOT = a => a(F)(T)

r = NOT(F)
r

//AND
/**
 * true && false => false
 * true && true => true
 * false && false => false
 * false && true => false
 */
const AND = a => b => a(b)(F)

r = AND(T)(T)
r

r = AND(T)(F)
r

r = AND(F)(T)
r

r = AND(F)(F)
r

//OR
/**
 * true || true => true
 * true || false => true
 * false || true => true
 * false || false => false
 */
const OR = a => b => a(T)(b)

r = OR(T)(T)
r

r = OR(T)(F)
r

r = OR(F)(T)
r

r = OR(F)(F)
r

//EQ
/**
 * true == true => true
 * false == false => true
 * false == true => false
 * true == false => false
 */
const EQ = a => b => a(b)(NOT(b))

r = EQ(T)(T)
r

r = EQ(F)(F)
r

r = EQ(T)(F)
r

r = EQ(F)(T)
r

//XOR
/** 
 * false || true => true
 * true || false => true
 * false || false => false
 * true || true => false
 */
const XOR = a => b => NOT(EQ(a)(b))

r = XOR(T)(T)
r

r = XOR(F)(F)
r

r = XOR(T)(F)
r

r = XOR(F)(T)
r
