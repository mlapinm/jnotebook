#include "wrd.h"

Wrd::Wrd(QObject *parent)
	: QObject(parent)
{


}

Wrd::~Wrd()
{

}
S* Wrd::f(ushort a1)
{
//	s = *((S*)&a1);
	memcpy(&s,&a1,2);
	return &s;
}
ushort Wrd::f()
{
	ushort a1;
//	a1 = *((ushort*)&s);
	memcpy(&a1,&s,2);
	return a1;
}

