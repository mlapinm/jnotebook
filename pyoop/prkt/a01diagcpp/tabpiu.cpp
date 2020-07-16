#include "tabpiu.h"
#include "unn.h"

TabPiu::TabPiu(QWidget *parent)
	: QWidget(parent)
{
	ui.setupUi(this);
	createActions();

	ui.liEdIp->setText("112");
}

TabPiu::~TabPiu()
{

}
uchar TabPiu::firstChar(ushort a1)
{
	uchar ch1;

	a1 = a1;
	a1&=0xff;
	ch1 = a1;
	return ch1;
}
uchar TabPiu::secondChar(ushort a1)
{
	uchar ch1;
	a1&=0xff00;
	a1>>=8;
	ch1 = a1;
	return ch1;
}
void TabPiu::createActions()
{
	connect(ui.liEdNameBoard,SIGNAL(editingFinished()),this,SLOT(slLiEdNameBoard()));//
	connect(ui.liEdIp,SIGNAL(editingFinished()),this,SLOT(fLineEditIPInitial()));
	connect(ui.liEdPortBase,SIGNAL(editingFinished()),this,SLOT(fLineEditBasicPort()));
	connect(ui.liEdPortBoard,SIGNAL(editingFinished()),this,SLOT(fLineEditPortBoard()));
	connect(ui.liEdSclonenie,SIGNAL(editingFinished()),this,SLOT(fLineEditGradient()));
	connect(ui.comboBoxRankAngle,SIGNAL(currentIndexChanged ( int )),this,SLOT(fComboBoxRankAngle(int)));
	connect(ui.grBoP18M,SIGNAL(clicked()),this,SLOT(slGrBoP18M()));
	connect(ui.grBoSecCh,SIGNAL(clicked()),this,SLOT(slGrBoSecCh()));

	connect(ui.liEdPrimarName,SIGNAL(editingFinished()),this,SLOT(slLiEdPrimarName()));//
	connect(ui.liEdSecondName,SIGNAL(editingFinished()),this,SLOT(slLiEdSecondName()));//
	connect(ui.raBuGradientMagnetic,SIGNAL(clicked()),this,SLOT(slRaBuGradient()));
	connect(ui.raBuGradientGeographic,SIGNAL(clicked()),this,SLOT(slRaBuGradient()));
	connect(ui.liEdPointStandingDistance,SIGNAL(editingFinished()),this,SLOT(slLiEdPointStandingDistance()));
	connect(ui.liEdPointStandingAzimuth,SIGNAL(editingFinished()),this,SLOT(slLiEdPointStandingAzimuth()));
	connect(ui.liEdPrimTurn,SIGNAL(editingFinished()),this,SLOT(slLiEdPrimTurn()));
	connect(ui.liEdSecondTurn,SIGNAL(editingFinished()),this,SLOT(slLiEdSecondTurn()));
	connect(ui.coBoPrimarRlsNumber,SIGNAL(currentIndexChanged(int)),this,SLOT(slCoBoPrimarRlsNumber(int)));
	connect(ui.coBoSecondApoiNumber,SIGNAL(currentIndexChanged(int)),this,SLOT(slCoBoSecondApoiNumber(int)));
	connect(ui.liEdPrimarLockVideo,SIGNAL(editingFinished()),this,SLOT(slLiEdPrimarLockVideo()));
	connect(ui.liEdPrimLev1,SIGNAL(editingFinished()),this,SLOT(slLiEdPrimLev1()));
	connect(ui.liEdPrimLev2,SIGNAL(editingFinished()),this,SLOT(slLiEdPrimLev2()));
	connect(ui.liEdPrimLev3,SIGNAL(editingFinished()),this,SLOT(slLiEdPrimLev3()));
	connect(ui.liEdSecondIpRls,SIGNAL(editingFinished()),this,SLOT(slLiEdSecondIpRls()));
	connect(ui.liEdSecondIpBoard,SIGNAL(editingFinished()),this,SLOT(slLiEdSecondIpBoard()));
	connect(ui.liEdSecondPortBase,SIGNAL(editingFinished()),this,SLOT(slLiEdSecondPortBase()));
	connect(ui.liEdLatitude,SIGNAL(editingFinished()),this,SLOT(slLiEdLatitude()));
	connect(ui.liEdLongitude,SIGNAL(editingFinished()),this,SLOT(slLiEdLongitude()));

//	connect(ui.raBuPcmMetr,SIGNAL(clicked()),this,SLOT(slRaBuPcmMetr()));
//	connect(ui.raBuPcmFoot,SIGNAL(clicked()),this,SLOT(slRaBuPcmMetr()));

}
void TabPiu::fLiEdAzimuth(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
{
	PLineEdit* lineEdit =(PLineEdit*)l;
	int b1,b2,b3,index,index1;bool ok1,ok2;
	int a0,a1,a2;QString str;
	QString str1,str2,str3;
	str1=lineEdit->text();
	index=str1.indexOf("°",0);
	if(index==-1)
	{
		str2=str1;
		str3="00";
	}else
	{
		str2 = str1.left(index);
		str3 = str1.mid(index+1,str1.size()-index);
	}
	b2 = str2.toInt(&ok1);
	index1 = str3.indexOf("'");
	if(index1>0)
	{
		str3.remove(index1,1);
	}
	b3 = str3.toInt(&ok2);
	b1 =b2*60 +b3;
	if(b1>=360*60||b1<0)
		b1=0;
////
	a0=b1;
	a1 = a0/60;
	a2 = abs( a0 - (a1*60) );
	if(a1>360.||a1<360.)//модуль больше 360
	{
		a1 = a1-(a1/360*360) ;
	}
	if(a1<0)
		a1+=360;
	str = QString("%1").arg(a1);
	str.append(QString("°%1'").arg(a2,2,10,QLatin1Char( '0' )));
//
	if(ok1&&ok2)
	{
		lineEdit->setText(str);
//
		*pReceiveSePar=b1;
		*pSendSelPar=b1;
	}
	return;
}

void TabPiu::fLiEdAzimuth1(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
{

	PLineEdit* lineEdit =(PLineEdit*)l;
	int b1,b2,b3,index,index1;bool ok1,ok2;
	int a0,a1,a2;QString str;
	double d1=0;
	QString str1,str2,str3;
	str1=lineEdit->text();
	index=str1.indexOf("°",0);
	if(index==-1)
	{
		a0 = str1.toInt();
		a1 = a0/60;
		a2 = a0 - a1*60;
		str2 = QString("%1").arg(a1);
		str3 = QString("%1").arg(a2);

	}else
	{
		str2 = str1.left(index);
		str3 = str1.mid(index+1,str1.size()-index);
	}
	b2 = str2.toInt(&ok1);
	if(b2>360||b2<360)//модуль больше 360
	{
//		b2 = deg-((int)deg/360*360.) ;
		b2 = b2%360;
	}

	index1 = str3.indexOf("'");
	if(index1>0)
	{
		str3.remove(index1,1);
	}
	b3 = str3.toInt(&ok2);
	if(str3.isEmpty())
	{
		ok2=true;
	}
	b1 =b2*60 +b3;
////
	a0=b1;
	a1 = a0/60;
	a2 = a0 - (a1*60);
	d1 = a1 + (double)a2/60.;
	b1 = d1*4096./360.+.5;
	str = QString("%1").arg(a1);
	str.append(QString("°%1'").arg(a2,2,10,QLatin1Char( '0' )));
//
	if(ok1&&ok2)
	{
		lineEdit->setText(str);
//
		*pReceiveSePar=b1;
		*pSendSelPar=b1;
	}
	return;
}
//градусы, минуты
void TabPiu::fLiEdAzimuth2(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
{		//модуль больше 360, ><0

	PLineEdit* lineEdit =(PLineEdit*)l;
	int b1,b2,b3,index,index1;bool ok1,ok2;
	int a0,a1,a2;QString str;
	double d1=0;
	QString str1,str2,str3;
	str1=lineEdit->text();
	index=str1.indexOf("°",0);
	if(index==-1)
	{
		a0 = str1.toInt();
		a1 = a0/60;
		a2 = abs(a0 - a1*60);
		str2 = QString("%1").arg(a1);
		str3 = QString("%1").arg(a2);

	}else
	{
		str2 = str1.left(index);
		str3 = str1.mid(index+1,str1.size()-index);
	}
	b2 = str2.toInt(&ok1);

	index1 = str3.indexOf("'");
	if(index1>0)
	{
		str3.remove(index1,1);
	}
	b3 = str3.toInt(&ok2);	//минуты
	if(b3>=60)
	{
		if(b2>=0 && !str1.contains('-'))
		{
			b2+=b3/60;
		}else
		{
			b2-=b3/60;
		}
		b3 = b3%60;
	}
	if(b2>360||b2<360)//модуль больше 360
	{
		b2 = b2%360;	//градусы
	}
	b3 = b3<60 ? b3:0;
	if(b2>=0 && !str1.contains('-'))		//><0
	{
		d1 = (double)b2+(double)b3/60.;
		b1 = d1*4096/360+.5;
	}else
	{
		d1 = (double)b2-(double)b3/60.;
		b1 = (360.+d1)*4096/360+.5;
	}
	b1&=0xfff;
	d1 = b1*360./4096.;			//градусы и доли
	//><180
	if(d1>180.&&d1<360.)
	{
		d1 = d1 - 360.;
	}
	//градусы
	b2 = d1;
	//секунды
	b3 = abs(d1-b2)*60;

	if(str3.isEmpty())
	{
		ok2=true;
	}
	if(d1<0&&b2==0)
	str = QString("-");
	str+= QString("%1").arg(b2);
	str.append(QString("°%1'").arg(b3,2,10,QLatin1Char( '0' )));
//
	if(ok1&&ok2)
	{
		lineEdit->setText(str);
//
		*pReceiveSePar=b1;
		*pSendSelPar=b1;
	}
	return;
}




void TabPiu::slLiEdNameBoard()
{
//12Е14  функциональное название платы 6 байт
	int iAddr = 12;
	PLineEdit* lineEdit = ui.liEdNameBoard;
	QString str1,str2;
	ushort b1;
	QChar char1,char2;
	str1=lineEdit->text();
	b1=str1.size();
	QByteArray ba1,ba2;
	ba2.resize(1);
	ba2[0]=0x00;
	ba1.resize(b1);
	ba1 = str1.toAscii();
	str1 = str1.trimmed();

	lineEdit->setText(str1);

	b1=str1.size();

	QByteArray ba = str1.toAscii();

	b1 = b1 > 5 ? 6 : b1;
	ushort ua[8];
	memset(ua, 0, sizeof(ua));
	memcpy(ua, str1.toAscii().constData(), b1);

	///*
	for(int i=0;i<3;i++)
	{
		unitReceive->basicSetting[iAddr+i]=ua[i];
		unitSend->basicSetting[iAddr+i]=ua[i];
	}
}
void TabPiu::fLineEditIPInitial()
{
	int iAddr = 0;
	QString str0,str1,str2,str3,str4;
	str0=ui.liEdIp->text();
	int b1,b2,b3,b4;
	int ind[4],len[4];int j=0;int k=0;
	while ((j = str0.indexOf(".", j)) != -1)
	{
		ind[k++]=j;
		++j;
	}
	len[0]=ind[0];
	len[1]=ind[1]-ind[0]-1;
	len[2]=ind[2]-ind[1]-1;
	len[3]=str0.length()-ind[2]-1;
	str1=str0.left(len[0]);
	str2=str0.mid(ind[0]+1,len[1]);
	str3=str0.mid(ind[1]+1,len[2]);
	str4=str0.mid(ind[2]+1,len[3]);
	bool ok;
	b1=str1.toInt(&ok);
	if(!ok || b1>256 || b1<0) b1=256;
	b2=str2.toInt(&ok);
	if(!ok || b2>256 || b2<0) b2=256;
	b3=str3.toInt(&ok);
	if(!ok || b3>256 || b3<0) b3=256;
	b4=str4.toInt(&ok);
	if(!ok || b4>256 || b4<0) b4=256;


	str0=str0.right(ind[0]+1);
	str1=QString("%1.").arg(b1);
	str1.append(QString("%1.").arg(b2));
	str1.append(QString("%1.").arg(b3));
	str1.append(QString("%1").arg(b4));
	ui.liEdIp->setText(str1);
	b2<<=8;
	b1|=b2;		//high
	b4<<=8;
	b3|=b4;		//low
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
	unitReceive->basicSetting[iAddr+1]=b3;
	unitSend->basicSetting[iAddr+1]=b3;
}
void TabPiu::fLineEditBasicPort()
{
	int iAddr = 2;
	bool ok;QChar char0 = '0';
	QString str0,str1,str2;
	str0=ui.liEdPortBase->text();
	int b1,b2,b3,b4;
	b1=str0.indexOf("x", 0);
	b2=str0.indexOf("/", 0);
	str1=str0.mid(b1+1,b2-b1-1);
	b1=str1.toInt(&ok,16);

	b3=str0.indexOf("/", 0);
	b4=str0.size();
	str1=str0.mid(b3+1,b4-b3-1);
	b2=str1.toInt();
	b3=unitReceive->basicSetting[iAddr];
	if(b3!=b1)
	{
	}
	if(b3!=b2)
	{
		b1=b2;
	}

	str2 = QString("0x%1/").arg(b1,4,16,char0);
	str2.append(QString("%1").arg(b1));
	ui.liEdPortBase->setText(str2);
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
//	if(isSetPressEnter())
//		ui.liEdPortBase->selectAll();

}
void TabPiu::fLineEditGradient()
{
	int iAddr = 7;
	PLineEdit* lineEdit = ui.liEdSclonenie;
	fLiEdAzimuth(	lineEdit,
		&unitReceive->basicSetting[iAddr],
		&unitSend->basicSetting[iAddr]	);

}

void TabPiu::fLineEditPortBoard()
{
	int iAddr = 3;
	bool ok;QChar char0='0';
	QString str0,str1,str2;
	str0=ui.liEdPortBoard->text();
	int b1,b2,b3,b4;
	b1=str0.indexOf("x", 0);
	b2=str0.indexOf("/", 0);
	str1=str0.mid(b1+1,b2-b1-1);
	b1=str1.toInt(&ok,16);

	b3=str0.indexOf("/", 0);
	b4=str0.size();
	str1=str0.mid(b3+1,b4-b3-1);
	b2=str1.toInt();
	b3=unitReceive->basicSetting[iAddr];
	if(b3!=b1)
	{
	}
	if(b3!=b2)
	{
		b1=b2;
	}

	str2 = QString("0x%1/").arg(b1,4,16,char0);
	str2.append(QString("%1").arg(b1));
	ui.liEdPortBoard->setText(str2);

	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
}
void TabPiu::setEnabledThe(bool b)
{
	b = true;
//	ui.grBoPort1->setEnabled(b);
}
void TabPiu::fComboBoxRankAngle(int index )
{
	int iAddr = 64;
	int b1,b2;
	if(ui.comboBoxRankAngle->hasFocus())
	{
//		comboBoxRankAngle->clearFocus();
		b1 = unitReceive->basicSetting[iAddr];
		wrd.f(unitReceive->basicSetting[iAddr]);
		if(index==0)
			{wrd.s.bit3=1;wrd.s.bit2=1;}
		if(index==1)
			{wrd.s.bit3=1;wrd.s.bit2=0;}
		if(index==2)
			{wrd.s.bit3=0;wrd.s.bit2=1;}
		b2=wrd.f();
		unitReceive->basicSetting[iAddr]=b2;
		unitSend->basicSetting[iAddr]=b2;
	}
}
void TabPiu::slGrBoP18M()
{
	int iAddr = 64;
	bool b;
	b=ui.grBoP18M->isChecked();
	wrd.f(
		unitReceive->basicSetting[iAddr]
		)->bit0=b;
	unitReceive->basicSetting[iAddr]=wrd.f();
	unitSend->basicSetting[iAddr]=wrd.f();
	return;
}
void TabPiu::slGrBoSecCh()
{
	int iAddr = 64;
	bool b;
	b=ui.grBoSecCh->isChecked();
	wrd.f(
		unitReceive->basicSetting[iAddr]
		)->bit1=b;
	unitReceive->basicSetting[iAddr]=wrd.f();
	unitSend->basicSetting[iAddr]=wrd.f();
	return;
}
void TabPiu::slLiEdPrimarName()
{
//12Е14  название первичного канала 6 байт
	int iAddr = 96;
	PLineEdit* lineEdit = ui.liEdPrimarName;
	QString str1,str2;
	ushort b1;
	QChar char1,char2;
	str1=lineEdit->text();
	b1=str1.size();
	QByteArray ba1,ba2;
	ba2.resize(1);
	ba2[0]=0x00;
	ba1.resize(b1);
	ba1 = str1.toAscii();
	str1 = str1.trimmed();

	lineEdit->setText(str1);

	b1=str1.size();

	QByteArray ba = str1.toAscii();

//	b1 = b1 > 5 ? 6 : b1;
	b1 = b1 > 15 ? 16 : b1;
	ushort ua[8];
	memset(ua, 0, sizeof(ua));
	memcpy(ua, str1.toAscii().constData(), b1);

	///*
	for(int i=0;i<8;i++)
	{
		unitReceive->basicSetting[iAddr+i]=ua[i];
		unitSend->basicSetting[iAddr+i]=ua[i];
	}
}
void TabPiu::slLiEdSecondName()
{
//12Е14  название первичного канала 6 байт
	int iAddr = 128;
	PLineEdit* lineEdit = ui.liEdSecondName;
	QString str1,str2;
	ushort b1;
	QChar char1,char2;
	str1=lineEdit->text();
	b1=str1.size();
	QByteArray ba1,ba2;
	ba2.resize(1);
	ba2[0]=0x00;
	ba1.resize(b1);
	ba1 = str1.toAscii();
	str1 = str1.trimmed();

	lineEdit->setText(str1);

	b1=str1.size();

	QByteArray ba = str1.toAscii();

//	b1 = b1 > 5 ? 6 : b1;
	b1 = b1 > 15 ? 16 : b1;
	ushort ua[8];
	memset(ua, 0, sizeof(ua));
	memcpy(ua, str1.toAscii().constData(), b1);

	///*
	for(int i=0;i<8;i++)
	{
		unitReceive->basicSetting[iAddr+i]=ua[i];
		unitSend->basicSetting[iAddr+i]=ua[i];
	}
}
void TabPiu::slRaBuGradient()
{
	int iAddr =64;
	wrd.f(unitReceive->basicSetting[iAddr]);
	wrd.s.bit15=ui.raBuGradientMagnetic->isChecked();
	unitReceive->basicSetting[iAddr]=wrd.f();
	unitSend->basicSetting[iAddr]=wrd.f();
	return;
}
void TabPiu::slLiEdPointStandingDistance()
{
//70
	int iAddr = 70;
	PLineEdit* lineEdit = ui.liEdPointStandingDistance;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt();
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1));
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;

	return;
}
void TabPiu::slLiEdPointStandingAzimuth()
{
//71

	int iAddr =71;
	PLineEdit* lineEdit = ui.liEdPointStandingAzimuth ;

	fLiEdAzimuth(	lineEdit,
		&unitReceive->basicSetting[iAddr],
		&unitSend->basicSetting[iAddr]	);
	return;
}
void TabPiu::slLiEdPrimTurn()
{
//104
	int iAddr = 104;
	PLineEdit* lineEdit = ui.liEdPrimTurn;
	int b1;
//	QString str1,str2;
//	str1=lineEdit->text();
	QString str,str2,str3,strend;
	str = lineEdit->text();
        uint ival=0;double deg=0;
	if(str.contains(QChar('.'))||str.contains(QChar(',')))
	{
		while(str.contains(QChar('°')))
		{
			str.chop(1);
		}
		deg=str.toDouble();
		if(deg>360.||deg<360.)//модуль больше 360
		{
			deg = deg-((int)deg/360*360.) ;
		}
		if(deg>=0)		//><0
		{
			ival = deg*4096/360+.5;
		}else
		{
			ival = (360.+deg)*4096/360+.5;
		}

	}else
	{
		if(str.contains(QChar('/')))
		{
			str=str.right(str.indexOf(QChar('/')));
		}
		ival=str.toInt()&0xfff;
	}
		deg = ival*360./4096.;
		//><180
		if(deg>180.&&deg<360.)
		{
			deg = deg - 360.;
		}

	str2=QString("%1").arg(ival);
	str3=QString("%1").arg(deg,0,'f',1);
	str3.replace(str3.indexOf(QChar('.')),1,QChar(','));
	strend=str3+"°"+"/"+str2;
	b1=ival;
	lineEdit->setText(strend);
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;


}
void TabPiu::slLiEdSecondTurn()
{
//136
	int iAddr = 136;
	PLineEdit* lineEdit = ui.liEdSecondTurn ;

	fLiEdAzimuth2(	lineEdit,
		&unitReceive->basicSetting[iAddr],
		&unitSend->basicSetting[iAddr]	);
	return;
}
void TabPiu::slCoBoPrimarRlsNumber(int index)
{
//64	24.05.2017
	if(ui.coBoPrimarRlsNumber->hasFocus()&&index<8)
	{
		int iAddr =64;
		wrd.f(unitReceive->basicSetting[iAddr]);
		wrdWr.f(index);
		wrd.s.bit4=wrdWr.s.bit0;
		wrd.s.bit5=wrdWr.s.bit1;
		wrd.s.bit6=wrdWr.s.bit2;
		unitReceive->basicSetting[iAddr]=wrd.f();
		unitSend->basicSetting[iAddr]=wrd.f();
	}
	return;
}
void TabPiu::slLiEdPrimarLockVideo()
{
//105
	int iAddr = 105;
	PLineEdit* lineEdit = ui.liEdPrimarLockVideo;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt();
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1));
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;

	return;
}
void TabPiu::slLiEdPrimLev1()
{
//114
	int iAddr = 114;
	PLineEdit* lineEdit = ui.liEdPrimLev1;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt();
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1));
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
	return;
}
void TabPiu::slLiEdPrimLev2()
{
//115
	int iAddr = 115;
	PLineEdit* lineEdit = ui.liEdPrimLev2;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt();
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1));
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
	return;
}
void TabPiu::slLiEdPrimLev3()
{
//116
	int iAddr = 116;
	PLineEdit* lineEdit = ui.liEdPrimLev3;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt();
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1));
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
	return;
}
void TabPiu::slCoBoSecondApoiNumber(int index)
{
//64	24.05.2017
	if(ui.coBoSecondApoiNumber->hasFocus()&&index<4)
	{
		int iAddr =64;
		wrd.f(unitReceive->basicSetting[iAddr]);
		wrdWr.f(index);
		wrd.s.bit8=wrdWr.s.bit0;
		wrd.s.bit9=wrdWr.s.bit1;
		unitReceive->basicSetting[iAddr]=wrd.f();
		unitSend->basicSetting[iAddr]=wrd.f();
	}
	return;
}
void TabPiu::slLiEdSecondIpBoard()
{
	int iAddr = 138;
	QString str0,str1,str2,str3,str4;
	str0=ui.liEdSecondIpBoard->text();
	int b1,b2,b3,b4;
	int ind[4],len[4];int j=0;int k=0;
	while ((j = str0.indexOf(".", j)) != -1)
	{
		ind[k++]=j;
		++j;
	}
	len[0]=ind[0];
	len[1]=ind[1]-ind[0]-1;
	len[2]=ind[2]-ind[1]-1;
	len[3]=str0.length()-ind[2]-1;
	str1=str0.left(len[0]);
	str2=str0.mid(ind[0]+1,len[1]);
	str3=str0.mid(ind[1]+1,len[2]);
	str4=str0.mid(ind[2]+1,len[3]);
	bool ok;
	b1=str1.toInt(&ok);
	if(!ok || b1>256 || b1<0) b1=256;
	b2=str2.toInt(&ok);
	if(!ok || b2>256 || b2<0) b2=256;
	b3=str3.toInt(&ok);
	if(!ok || b3>256 || b3<0) b3=256;
	b4=str4.toInt(&ok);
	if(!ok || b4>256 || b4<0) b4=256;


	str0=str0.right(ind[0]+1);
	str1=QString("%1.").arg(b1);
	str1.append(QString("%1.").arg(b2));
	str1.append(QString("%1.").arg(b3));
	str1.append(QString("%1").arg(b4));
	ui.liEdSecondIpBoard->setText(str1);
	b2<<=8;
	b1|=b2;		//high
	b4<<=8;
	b3|=b4;		//low
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
	unitReceive->basicSetting[iAddr+1]=b3;
	unitSend->basicSetting[iAddr+1]=b3;
}
void TabPiu::slLiEdSecondIpRls()
{
	int iAddr = 140;
	QString str0,str1,str2,str3,str4;
	str0=ui.liEdSecondIpRls->text();
	int b1,b2,b3,b4;
	int ind[4],len[4];int j=0;int k=0;
	while ((j = str0.indexOf(".", j)) != -1)
	{
		ind[k++]=j;
		++j;
	}
	len[0]=ind[0];
	len[1]=ind[1]-ind[0]-1;
	len[2]=ind[2]-ind[1]-1;
	len[3]=str0.length()-ind[2]-1;
	str1=str0.left(len[0]);
	str2=str0.mid(ind[0]+1,len[1]);
	str3=str0.mid(ind[1]+1,len[2]);
	str4=str0.mid(ind[2]+1,len[3]);
	bool ok;
	b1=str1.toInt(&ok);
	if(!ok || b1>256 || b1<0) b1=256;
	b2=str2.toInt(&ok);
	if(!ok || b2>256 || b2<0) b2=256;
	b3=str3.toInt(&ok);
	if(!ok || b3>256 || b3<0) b3=256;
	b4=str4.toInt(&ok);
	if(!ok || b4>256 || b4<0) b4=256;


	str0=str0.right(ind[0]+1);
	str1=QString("%1.").arg(b1);
	str1.append(QString("%1.").arg(b2));
	str1.append(QString("%1.").arg(b3));
	str1.append(QString("%1").arg(b4));
	ui.liEdSecondIpRls->setText(str1);
	b2<<=8;
	b1|=b2;		//high
	b4<<=8;
	b3|=b4;		//low
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
	unitReceive->basicSetting[iAddr+1]=b3;
	unitSend->basicSetting[iAddr+1]=b3;
}
void TabPiu::slLiEdSecondPortBase()
{
	int iAddr = 142;
	bool ok;QChar char0 = '0';
	QString str0,str1,str2;
	str0=ui.liEdSecondPortBase->text();
	int b1,b2,b3,b4;
	b1=str0.indexOf("x", 0);
	b2=str0.indexOf("/", 0);
	str1=str0.mid(b1+1,b2-b1-1);
	b1=str1.toInt(&ok,16);

	b3=str0.indexOf("/", 0);
	b4=str0.size();
	str1=str0.mid(b3+1,b4-b3-1);
	b2=str1.toInt();
	b3=unitReceive->basicSetting[iAddr];
	if(b3!=b1)
	{
	}
	if(b3!=b2)
	{
		b1=b2;
	}

	str2 = QString("0x%1/").arg(b1,4,16,char0);
	str2.append(QString("%1").arg(b1));
	ui.liEdPortBase->setText(str2);				//liEdSecondPortBase
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;
//	if(isSetPressEnter())
//		ui.liEdPortBase->selectAll();

}

void TabPiu::slLiEdLatitude()
{
//66
	int iAddr = 66;
	PLineEdit* lineEdit = ui.liEdLatitude;
	float f1;
	QString str1,str2;
	str1=lineEdit->text();
	f1=str1.toFloat();
	lineEdit->setText(QString("%1").arg(f1));
	memcpy(&unitReceive->basicSetting[iAddr],&f1,4);
	memcpy(&unitSend->basicSetting[iAddr],&f1,4);
	return;
}
void TabPiu::slLiEdLongitude()
{
//68
	int iAddr = 68;
	PLineEdit* lineEdit = ui.liEdLongitude;
	float f1;
	QString str1,str2;
	str1=lineEdit->text();
	f1=str1.toFloat();
	lineEdit->setText(QString("%1").arg(f1));
	memcpy(&unitReceive->basicSetting[iAddr],&f1,4);
	memcpy(&unitSend->basicSetting[iAddr],&f1,4);
	return;
}

short TabPiu::to12bit(int a)
{
	short b = a;
	b<<=4;
	b>>=4;
	return b;
}

//-------------------------------------------------------------------
//
//-------------------------------------------------------------------

void TabPiu::updateDialog()
{
//
	int iAddr=0;
	ushort a0,a1,a2,a3;
	double d1=0;
	short b1;
    QString str,strWhole,str2;
    char ch;int k0;
	char nameSource[16];
//12Е14  функциональное название платы 6 байт
	iAddr=12;						//12;
	for (int i=0;i<6;i++)
	{
		k0=i;
		if(i/2*2==i)
		{
			ch = firstChar(unitReceive->basicSetting[i/2+iAddr]);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i]=ch;
		}
		else
		{
			ch  = secondChar(unitReceive->basicSetting[i/2+iAddr]);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i] = ch;
		}
	}
	str2 = QString::fromAscii(nameSource,k0+1);
	if(!ui.liEdNameBoard->hasFocus())
		ui.liEdNameBoard->setText(str2);
//IP
	a0=unitReceive->basicSetting[0];
	a2=unitReceive->basicSetting[1];
	a1=a0;
	a3=a2;
	a0&=0xff;
	a1&=0xff00;
	a1>>=8;
	a2&=0xff;
	a3&=0xff00;
	a3>>=8;
	str = QString("%1").arg(a0);
	strWhole.append(str);
	str = QString(".%1").arg(a1);
	strWhole.append(str);
	str = QString(".%1").arg(a2);
	strWhole.append(str);
	str = QString(".%1").arg(a3);
	strWhole.append(str);
	if(!ui.liEdIp->hasFocus())
		ui.liEdIp->setText(strWhole);
	QChar char0='0';
	str = QString("0x%1").arg(unitReceive->basicSetting[2],4,16,char0);
	strWhole = str;
	str = QString("/%1").arg(unitReceive->basicSetting[2]);
	strWhole.append(str);
	if(!ui.liEdPortBase->hasFocus())
		ui.liEdPortBase->setText(strWhole);
	str = QString("0x%1").arg(unitReceive->basicSetting[3],4,16,char0);
	strWhole = str;
	str = QString("/%1").arg(unitReceive->basicSetting[3]);
	strWhole.append(str);
	if(!ui.liEdPortBoard->hasFocus())
		ui.liEdPortBoard->setText(strWhole);
//склонение
	a0 = unitReceive->basicSetting[7];
	a1 = a0/60;
	a2 = a0 - (a1*60);
	str = QString("%1").arg(a1);
	str.append(QString("°%1'").arg(a2,2,10,QLatin1Char( '0' )));
	if(!ui.liEdSclonenie->hasFocus())
		ui.liEdSclonenie->setText(str);
//xxxx130Е137  название источника
	int iAddr0=0;

//64	общие настройки
	iAddr0 = 64;
//биты 1,0:	номер устройства
	wrd.f(unitReceive->basicSetting[iAddr0]);
//	wrd.f(1);
//64:0 режим –Ћ—(младшее слово)
//	0 - –Ћ— не выбрана
//	1 - –Ћ— выбрана
	if(wrd.s.bit0)
		ui.grBoP18M->setChecked(true);
	else
		ui.grBoP18M->setChecked(false);
//64:0 режим јѕќ»(младшее слово)
//	0 - јѕќ» не выбрана
//	1 - јѕќ» выбрана
	if(wrd.s.bit1)
		ui.grBoSecCh->setChecked(true);
	else
		ui.grBoSecCh->setChecked(false);
//64:3,2
//00 - не используетс¤
//01 - разр¤дность кода угла = 12
//10 - разр¤дность кода угла = 11
//11 - разр¤дность кода угла = 10
//разр¤дность угла
	a1 = wrd.s.bit3*2+wrd.s.bit2;
	if(!ui.comboBoxRankAngle->hasFocus())
	{
		if(a1==0)										//10
			ui.comboBoxRankAngle->setCurrentIndex(0);
		if(a1==1)										//12
			ui.comboBoxRankAngle->setCurrentIndex(2);
		if(a1==2)										//11
			ui.comboBoxRankAngle->setCurrentIndex(1);
		if(a1==3)										//10
			ui.comboBoxRankAngle->setCurrentIndex(0);
	}
//64:6,5,4
//номер –Ћ—
	a1 = wrd.s.bit6*4+wrd.s.bit5*2+wrd.s.bit4;
	ui.coBoPrimarRlsNumber->setCurrentIndex(a1);
//64:9,8
//номер јѕќ»
	a1 = wrd.s.bit9*2+wrd.s.bit8;
	ui.coBoSecondApoiNumber->setCurrentIndex(a1);
//бит 15:	склонение (0 Ч географическое (истинное), 1 Ч магнитное)
	if(wrd.s.bit15)
		ui.raBuGradientMagnetic->setChecked(true);
	else
		ui.raBuGradientGeographic->setChecked(true);

	float f1=0;
//66..67 широта, градусы(тип float)
	iAddr0 = 66;
	f1 = *((float*)(&unitReceive->basicSetting[iAddr0]));
	str=QString("%1").arg(f1);
	if(!ui.liEdLatitude->hasFocus())
	{
		ui.liEdLatitude->setText(str);
	}
//68..69 долгота, градусы(тип float)
	iAddr0 = 68;
	f1 = *((float*)(&unitReceive->basicSetting[iAddr0]));
//	f1 = 44444441.414;
	str=QString("%1").arg(f1);
	if(!ui.liEdLongitude->hasFocus())
	{
		ui.liEdLongitude->setText(str);
	}
//70	дальность точки сто¤ни¤, метры
	iAddr0 = 70;
	a1 = unitReceive->basicSetting[iAddr0];
	str = QString("%1").arg(a1);
	if(!ui.liEdPointStandingDistance->hasFocus())
		ui.liEdPointStandingDistance->setText(str);
//71 азимут точки сто¤ни¤, минуты (градусы ° 60)
	iAddr0 = 71;
	a0 = unitReceive->basicSetting[iAddr0];
	a1 = a0/60;
	a2 = a0 - (a1*60);
	str = QString("%1").arg(a1);
	str.append(QString("°%1'").arg(a2,2,10,QLatin1Char( '0' )));
	if(!ui.liEdPointStandingAzimuth->hasFocus())
		ui.liEdPointStandingAzimuth->setText(str);

//96Е103  название первичного канала
	iAddr0 = 96;
	for (int i=0;i<16;i++)
	{
		k0=i;
		if(i/2*2==i)
		{
			ch = firstChar(unitReceive->basicSetting[i/2+iAddr0]);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i]=ch;
		}
		else
		{
			ch  = secondChar(unitReceive->basicSetting[i/2+iAddr0]);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i] = ch;
		}
	}
	str2 = QString::fromAscii(nameSource,k0+1);
	if(!ui.liEdPrimarName->hasFocus())
		ui.liEdPrimarName->setText(str2);
//104 доворот  ќ
	iAddr0 = 104;
	a1 = unitReceive->basicSetting[iAddr0];
	a3=to12bit(a1);
	a3&=0xfff;
	d1=a3*360./4096.;
	if(d1>180.&&d1<360.)
	{
		d1 = d1 - 360.;
	}
	str = QString("%1°/").arg(d1,0,'f',1)+QString("%1").arg(a3);
	str.replace(str.indexOf(QChar('.')),1,QChar('.'));
	if(!ui.liEdPrimTurn->hasFocus())
		ui.liEdPrimTurn->setText(str);
//105 блокировка видео
	iAddr0 = 105;
	a1 = unitReceive->basicSetting[iAddr0];
	str=QString("%1").arg(a1);
	if(!ui.liEdPrimarLockVideo->hasFocus())
	{
		ui.liEdPrimarLockVideo->setText(str);
	}
//114 уровень 1
	iAddr0 = 114;
	a1 = unitReceive->basicSetting[iAddr0];
	str=QString("%1").arg(a1);
	if(!ui.liEdPrimLev1->hasFocus())
	{
		ui.liEdPrimLev1->setText(str);
	}
//115 уровень 2
	iAddr0 = 115;
	a1 = unitReceive->basicSetting[iAddr0];
	str=QString("%1").arg(a1);
	if(!ui.liEdPrimLev2->hasFocus())
	{
		ui.liEdPrimLev2->setText(str);
	}
//116 уровень 3
	iAddr0 = 116;
	a1 = unitReceive->basicSetting[iAddr0];
	str=QString("%1").arg(a1);
	if(!ui.liEdPrimLev3->hasFocus())
	{
		ui.liEdPrimLev3->setText(str);
	}
//128Е135  название вторичного канала
	iAddr0 = 128;
	for (int i=0;i<16;i++)
	{
		k0=i;
		if(i/2*2==i)
		{
			ch = firstChar(unitReceive->basicSetting[i/2+iAddr0]);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i]=ch;
		}
		else
		{
			ch  = secondChar(unitReceive->basicSetting[i/2+iAddr0]);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i] = ch;
		}
	}
	str2 = QString::fromAscii(nameSource,k0+1);
	if(!ui.liEdSecondName->hasFocus())
		ui.liEdSecondName->setText(str2);
//136 доворот  ќ
	iAddr0 = 136;
	a0 = unitReceive->basicSetting[iAddr0];
//	a0 = 57;			////////////////////////////////////
	d1=a0*360./4096.;
	if(d1>180.&&d1<360.)
	{
		d1 = d1 - 360.;
	}

	b1 = d1;
	a1 = d1-b1;
	a2 = abs(d1-b1)*60;

	str.clear();
	if(d1<0&&b1==0)
		str = QString("-");
	str+= QString("%1").arg(b1);
	str.append(QString("°%1'").arg(a2,2,10,QLatin1Char( '0' )));
	if(!ui.liEdSecondTurn->hasFocus())
	{
		ui.liEdSecondTurn->setText(str);
	}
//
//IP
	iAddr0 = 138;
	a0=unitReceive->basicSetting[iAddr0+0];
	a2=unitReceive->basicSetting[iAddr0+1];
	a1=a0;
	a3=a2;
	a0&=0xff;
	a1&=0xff00;
	a1>>=8;
	a2&=0xff;
	a3&=0xff00;
	a3>>=8;
	strWhole="";
	str = QString("%1").arg(a0);
	strWhole.append(str);
	str = QString(".%1").arg(a1);
	strWhole.append(str);
	str = QString(".%1").arg(a2);
	strWhole.append(str);
	str = QString(".%1").arg(a3);
	strWhole.append(str);
	if(!ui.liEdSecondIpBoard->hasFocus())
		ui.liEdSecondIpBoard->setText(strWhole);

//IP
	iAddr0 = 140;
	a0=unitReceive->basicSetting[iAddr0+0];
	a2=unitReceive->basicSetting[iAddr0+1];
	a1=a0;
	a3=a2;
	a0&=0xff;
	a1&=0xff00;
	a1>>=8;
	a2&=0xff;
	a3&=0xff00;
	a3>>=8;
	strWhole="";
	str = QString("%1").arg(a0);
	strWhole.append(str);
	str = QString(".%1").arg(a1);
	strWhole.append(str);
	str = QString(".%1").arg(a2);
	strWhole.append(str);
	str = QString(".%1").arg(a3);
	strWhole.append(str);
	if(!ui.liEdSecondIpRls->hasFocus())
		ui.liEdSecondIpRls->setText(strWhole);
	char0='0';
	str = QString("0x%1").arg(unitReceive->basicSetting[iAddr0+2],4,16,char0);
	strWhole = str;
	str = QString("/%1").arg(unitReceive->basicSetting[iAddr0+2]);
	strWhole.append(str);
	if(!ui.liEdSecondPortBase->hasFocus())
		ui.liEdSecondPortBase->setText(strWhole);

}

