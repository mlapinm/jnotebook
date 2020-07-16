#include "tabpdo.h"

TabPdo::TabPdo(QWidget *parent)
	: QWidget(parent)
{
	ui.setupUi(this);
	iChoiceRls=0;
	createActions();
	ui.tabWidget->setTabEnabled(0,false);		//..........

}

TabPdo::~TabPdo()
{

}
void TabPdo::createActions()
{
	connect(ui.liEdIp,SIGNAL(editingFinished()),this,SLOT(fLineEditIPInitial()));
	connect(ui.liEdPortBase,SIGNAL(editingFinished()),this,SLOT(fLineEditBasicPort()));
	connect(ui.liEdPortBoard,SIGNAL(editingFinished()),this,SLOT(fLineEditPortBoard()));
	connect(ui.liEdSclonenie,SIGNAL(editingFinished()),this,SLOT(fLineEditGradient()));
	connect(ui.liEdFuNameBoard,SIGNAL(editingFinished()),this,SLOT(slLiEdFuNameBoard()));//
	connect(ui.coBoDistance,SIGNAL(currentIndexChanged ( int )),this,SLOT(slCoBoDistance(int)));
	connect(ui.liEdCourseLanding,SIGNAL(editingFinished()),this,SLOT(slLiEdCourseLanding()));//
	connect(ui.liEdMaxTimeBlock,SIGNAL(editingFinished()),this,SLOT(slLiEdMaxTimeBlock()));//
	connect(ui.liEdWaitTimeBlock,SIGNAL(editingFinished()),this,SLOT(slLiEdWaitTimeBlock()));//

	connect(ui.liEdNameRls_1,SIGNAL(editingFinished()),this,SLOT(slLiEdNameRls_1()));//
	connect(ui.liEdPointStandingDistance_1,SIGNAL(editingFinished()),this,SLOT(slLiEdPointStandingDistance_1()));//
	connect(ui.liEdPointStandingAzimuth_1,SIGNAL(editingFinished()),this,SLOT(slLiEdPointStandingAzimuth_1()));//
	connect(ui.chBoInvPzk_1,SIGNAL(clicked()),this,SLOT(slChBoInvPzk_1()));
	connect(ui.raBuRls1,SIGNAL(clicked()),this,SLOT(slRaBuRls1Rls2()));
	connect(ui.raBuRls1Rls2,SIGNAL(clicked()),this,SLOT(slRaBuRls1Rls2()));
	connect(ui.raBuGradMagn,SIGNAL(clicked()),this,SLOT(slRaBuGrad()));
	connect(ui.raBuGradGeograph,SIGNAL(clicked()),this,SLOT(slRaBuGrad()));

	connect(ui.coBoRankAngle,SIGNAL(currentIndexChanged ( int )),this,SLOT(slCoBoRankAngle(int)));
	connect(ui.coBoNRls,SIGNAL(currentIndexChanged ( int )),this,SLOT(slCoBoNRls(int)));
	connect(ui.coBoNApoi,SIGNAL(currentIndexChanged ( int )),this,SLOT(slCoBoNApoi(int)));
	connect(ui.chBoRlsOn,SIGNAL(clicked()),this,SLOT(slChBoRlsOn()));
	connect(ui.chBoApoiOn,SIGNAL(clicked()),this,SLOT(slChBoApoiOn()));
	connect(ui.liEdNameApoi,SIGNAL(editingFinished()),this,SLOT(slLiEdNameApoi()));//
	connect(ui.liEdLockApoi,SIGNAL(editingFinished()),this,SLOT(slLiEdLockApoi()));

	connect(ui.liEdDisVideo_1,SIGNAL(editingFinished()),this,SLOT(slLiEdDisVideo_1()));
	connect(ui.liEdLockVideo_1,SIGNAL(editingFinished()),this,SLOT(slLiEdLockVideo_1()));
	connect(ui.liEdTurn_1,SIGNAL(editingFinished()),this,SLOT(slLiEdTurn_1()));
	connect(ui.coBoBedstvie_1,SIGNAL(currentIndexChanged ( int )),this,SLOT(slCoBoBedstvie_1(int)));

	connect(ui.liEdNameRls_2,SIGNAL(editingFinished()),this,SLOT(slLiEdNameRls_2()));//
	connect(ui.liEdPointStandingDistance_2,SIGNAL(editingFinished()),this,SLOT(slLiEdPointStandingDistance_2()));//
	connect(ui.liEdPointStandingAzimuth_2,SIGNAL(editingFinished()),this,SLOT(slLiEdPointStandingAzimuth_2()));//
	connect(ui.chBoInvPzk_2,SIGNAL(clicked()),this,SLOT(slChBoInvPzk_2()));
	connect(ui.liEdDisVideo_2,SIGNAL(editingFinished()),this,SLOT(slLiEdDisVideo_2()));
	connect(ui.liEdLockVideo_2,SIGNAL(editingFinished()),this,SLOT(slLiEdLockVideo_2()));
	connect(ui.liEdTurn_2,SIGNAL(editingFinished()),this,SLOT(slLiEdTurn_2()));
	connect(ui.coBoBedstvie_2,SIGNAL(currentIndexChanged ( int )),this,SLOT(slCoBoBedstvie_2(int)));

}
void TabPdo::setEnabledThe(bool b)
{
//	ui.frPar->setEnabled(b);
	ui.frObsch->setEnabled(b);
}
uchar TabPdo::firstChar(ushort a1)
{
	uchar ch1;

	a1 = a1;
	a1&=0xff;
	ch1 = a1;
	return ch1;
}
uchar TabPdo::secondChar(ushort a1)
{
	uchar ch1;
	a1&=0xff00;
	a1>>=8;
	ch1 = a1;
	return ch1;
}

void TabPdo::fLiEdAzimuth(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
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


void TabPdo::fLineEditIPInitial()
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
void TabPdo::fLineEditBasicPort()
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
void TabPdo::fLineEditGradient()
{
	int iAddr = 7;
	PLineEdit* lineEdit = ui.liEdSclonenie;
	fLiEdAzimuth(	lineEdit,
		&unitReceive->basicSetting[iAddr],
		&unitSend->basicSetting[iAddr]	);

}

void TabPdo::fLineEditPortBoard()
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
void TabPdo::slLiEdFuNameBoard()
{
	int iAddr =12;
	PLineEdit* lineEdit = ui.liEdFuNameBoard;
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
	for(int i=0;i<4;i++)
	{
		unitReceive->basicSetting[iAddr+i]=ua[i];
		unitSend->basicSetting[iAddr+i]=ua[i];
	}
	return;
}
void TabPdo::slCoBoDistance(int index )
{
	int iAddr = 11;  //13,12,11
	int b1,b2;
	if(ui.coBoDistance->hasFocus())
	{
		b1 = unitReceive->basicSetting[iAddr];
		wrd.f(unitReceive->basicSetting[iAddr]);
		wrdWr.f(index);
		wrd.s.bit13=wrdWr.s.bit2;
		wrd.s.bit12=wrdWr.s.bit1;
		wrd.s.bit11=wrdWr.s.bit0;
		b2=wrd.f();
		unitReceive->basicSetting[iAddr]=b2;
		unitSend->basicSetting[iAddr]=b2;
	}
}
void TabPdo::slLiEdCourseLanding()
{
//32
	int iAddr =32;
	PLineEdit* lineEdit=ui.liEdCourseLanding;
	QString str1,str2;
	ushort b1=0;
	str1=lineEdit->text();
	bool ok=true;
	b1=str1.toInt(&ok);
	b1 &= 0xffff;
	if(ok&&b1>0)
	{
		lineEdit->setText(QString("%1").arg(b1));
		unitReceive->basicSetting[iAddr]=b1;
		unitSend->basicSetting[iAddr]=b1;
	}
	return;
}
void TabPdo::slLiEdMaxTimeBlock()
{
//64
	int iAddr =64;
	PLineEdit* lineEdit=ui.liEdMaxTimeBlock;
	QString str1,str2;
	ushort b1=0,b2=0;
	str1=lineEdit->text();
	bool ok=true;
	b1=str1.toInt(&ok);
	b1 &= 0xff;
	b2 = unitReceive->basicSetting[iAddr];
	b2 &= 0xff00;
	b2 = b2|b1;
	if(ok&&b1>=0)
	{
		lineEdit->setText(QString("%1").arg(b1));
		unitReceive->basicSetting[iAddr]=b2;
		unitSend->basicSetting[iAddr]=b2;
	}
	return;
}
void TabPdo::slLiEdWaitTimeBlock()
{
//64
	int iAddr =64;
	PLineEdit* lineEdit=ui.liEdWaitTimeBlock;
	QString str1,str2;
	ushort b1=0,b2=0,b3=0;
	str1=lineEdit->text();
	bool ok=true;
	b1=str1.toInt(&ok);
	b1 &= 0xff;
	b2 = b1<<8;
	b3 = unitReceive->basicSetting[iAddr];
	b3 &= 0xff;
	b2 = b2|b3;
	if(ok&&b1>=0)
	{
		lineEdit->setText(QString("%1").arg(b1));
		unitReceive->basicSetting[iAddr]=b2;
		unitSend->basicSetting[iAddr]=b2;
	}
	return;
}
void TabPdo::slLiEdNameRls_1()
{
	int iAddr =128 -128;
	PLineEdit* lineEdit = ui.liEdNameRls_1;
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

	b1 = b1 > 15 ? 16 : b1;
	ushort ua[8];
	memset(ua, 0, sizeof(ua));
	memcpy(ua, str1.toAscii().constData(), b1);

	///*
	for(int i=0;i<8;i++)
	{
		unitReceive->selectedParameters0[iAddr+i]=ua[i];
		unitSend->selectedParameters0[iAddr+i]=ua[i];
	}
	return;
}
void TabPdo::slLiEdPointStandingDistance_1()
{
//136
	int iAddr =136 -128;
	PLineEdit* lineEdit = ui.liEdPointStandingDistance_1;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt();
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1));
	unitReceive->selectedParameters0[iAddr]=b1;
	unitSend->selectedParameters0[iAddr]=b1;
	return;
}
void TabPdo::slLiEdPointStandingAzimuth_1()
{
//137
	int iAddr =137 -128;
	PLineEdit* lineEdit = ui.liEdPointStandingAzimuth_1 ;
	fLiEdAzimuth(	lineEdit,
		&unitReceive->selectedParameters0[iAddr],
		&unitSend->selectedParameters0[iAddr]	);
	return;
}
void TabPdo::slChBoInvPzk_1()
{
	int iAddr =138 -128;
	wrd.f(unitReceive->selectedParameters0[iAddr]);
	wrd.s.bit10 = ui.chBoInvPzk_1->isChecked();
	unitReceive->selectedParameters0[iAddr]=wrd.f();
	unitSend->selectedParameters0[iAddr]=wrd.f();
}
void TabPdo::slRaBuRls1Rls2()
{
	int iAddr =11;
	wrd.f(unitReceive->basicSetting[iAddr]);
	wrd.s.bit8=ui.raBuRls1Rls2->isChecked();
	unitReceive->basicSetting[iAddr]=wrd.f();
	unitSend->basicSetting[iAddr]=wrd.f();
	return;
}
void TabPdo::slRaBuGrad()
{
	int iAddr =10;
	wrd.f(unitReceive->basicSetting[iAddr]);
	wrd.s.bit15=ui.raBuGradMagn->isChecked();
	unitReceive->basicSetting[iAddr]=wrd.f();
	unitSend->basicSetting[iAddr]=wrd.f();
	return;
}
void TabPdo::slCoBoRankAngle(int index )
{
	int iAddr = 10;
	int b1,b2;
	if(ui.coBoRankAngle->hasFocus())
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
void TabPdo::slCoBoNRls(int index )
{
	int iAddr = 10;  //6,5,4	wrdWr
	int b1,b2;
	if(ui.coBoNRls->hasFocus())
	{
		b1 = unitReceive->basicSetting[iAddr];
		wrd.f(unitReceive->basicSetting[iAddr]);
		wrdWr.f(index);
		wrd.s.bit6=wrdWr.s.bit2;
		wrd.s.bit5=wrdWr.s.bit1;
		wrd.s.bit4=wrdWr.s.bit0;
		b2=wrd.f();
		unitReceive->basicSetting[iAddr]=b2;
		unitSend->basicSetting[iAddr]=b2;
	}
}
void TabPdo::slCoBoNApoi(int index )
{
	int iAddr = 96;  //1,0	параметры АПОИ
	int b1,b2;
	if(ui.coBoNApoi->hasFocus())
	{
		b1 = unitReceive->basicSetting[iAddr];
		wrd.f(unitReceive->basicSetting[iAddr]);
		wrdWr.f(index);
		wrd.s.bit1=wrdWr.s.bit1;
		wrd.s.bit0=wrdWr.s.bit0;
		b2=wrd.f();
		unitReceive->basicSetting[iAddr]=b2;
		unitSend->basicSetting[iAddr]=b2;
	}
}
void TabPdo::slChBoRlsOn()
{
	int iAddr = 10;
	wrd.f(unitReceive->basicSetting[iAddr]);
	wrd.s.bit0 = ui.chBoRlsOn->isChecked();
	unitReceive->basicSetting[iAddr]=wrd.f();
	unitSend->basicSetting[iAddr]=wrd.f();
}
void TabPdo::slChBoApoiOn()
{
	int iAddr = 10;
	wrd.f(unitReceive->basicSetting[iAddr]);
	wrd.s.bit1 = ui.chBoApoiOn->isChecked();
	unitReceive->basicSetting[iAddr]=wrd.f();
	unitSend->basicSetting[iAddr]=wrd.f();
}
void TabPdo::slLiEdNameApoi()
{
	int iAddr =98;
	PLineEdit* lineEdit = ui.liEdNameApoi;
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
	for(int i=0;i<4;i++)
	{
		unitReceive->basicSetting[iAddr+i]=ua[i];
		unitSend->basicSetting[iAddr+i]=ua[i];
	}
	return;
}
void TabPdo::slLiEdLockApoi()
{
//108
	int iAddr = 108;

	PLineEdit* lineEdit = ui.liEdLockApoi;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt()/25;
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1*25));
	unitReceive->basicSetting[iAddr]=b1;
	unitSend->basicSetting[iAddr]=b1;

	return;
}
void TabPdo::slLiEdDisVideo_1()
{
//173
	int iAddr =173 -128;
	PLineEdit* lineEdit = ui.liEdDisVideo_1;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt()/25;
	//b1 &= 0xffff;		//19.07.2017
	lineEdit->setText(QString("%1").arg(b1*25));
	unitReceive->selectedParameters0[iAddr]=b1;
	unitSend->selectedParameters0[iAddr]=b1;

	return;
}
void TabPdo::slLiEdLockVideo_1()
{
//192
	int iAddr =192 -128;
	PLineEdit* lineEdit = ui.liEdLockVideo_1;
	int b1,b2;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt()/25;
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1*25));
	unitReceive->selectedParameters0[iAddr]=b1;
	unitSend->selectedParameters0[iAddr]=b1;

	return;
}
void TabPdo::slLiEdTurn_1()
{
//175
	int iAddr = 175 -128;
	PLineEdit* lineEdit = ui.liEdTurn_1 ;

	fLiEdAzimuth3(	lineEdit,
		&unitReceive->selectedParameters0[iAddr],
		&unitSend->selectedParameters0[iAddr]	);
	return;
}
void TabPdo::slCoBoBedstvie_1(int index )
{
	int iAddr = 49;  //биты 2,1,0
	int b1,b2;
	if(ui.coBoBedstvie_1->hasFocus())
	{
		b1 = unitReceive->basicSetting[iAddr];
		wrd.f(unitReceive->basicSetting[iAddr]);
		wrdWr.f(index);
		wrd.s.bit2=wrdWr.s.bit2;
		wrd.s.bit1=wrdWr.s.bit1;
		wrd.s.bit0=wrdWr.s.bit0;
		b2=wrd.f();
		unitReceive->setSelectedParameters(0,iAddr,b2);
		unitSend->setSelectedParameters(0,iAddr,b2);
	}
}

void TabPdo::slLiEdNameRls_2()
{
	int iAddr =0;
	PLineEdit* lineEdit = ui.liEdNameRls_2;
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

	b1 = b1 > 15 ? 16 : b1;
	ushort ua[8];
	memset(ua, 0, sizeof(ua));
	memcpy(ua, str1.toAscii().constData(), b1);

	///*
	for(int i=0;i<8;i++)
	{
		unitReceive->setSelectedParameters(iChoiceRls,iAddr+i,ua[i]);
		unitSend->setSelectedParameters(iChoiceRls,iAddr+i,ua[i]);
	}
	return;
}
void TabPdo::slLiEdPointStandingDistance_2()
{
//136
	int iAddr =8;
	PLineEdit* lineEdit = ui.liEdPointStandingDistance_2;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt();
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1));
		unitReceive->setSelectedParameters(iChoiceRls,iAddr,b1);
		unitSend->setSelectedParameters(iChoiceRls,iAddr,b1);
	return;
}
void TabPdo::slLiEdPointStandingAzimuth_2()
{
//137
	int iAddr =9;
	int b1=0;
	PLineEdit* lineEdit = ui.liEdPointStandingAzimuth_2 ;
	fLiEdAzimuth(	lineEdit,
		&unitReceive->selectedParameters1[iAddr],	//??????
		&unitSend->selectedParameters1[iAddr]	);
	return;
}
void TabPdo::slChBoInvPzk_2()
{
	int iAddr =138 -128;//10
	wrd.f(unitReceive->isSelectedParameters(iChoiceRls,iAddr));
	wrd.s.bit10 = ui.chBoInvPzk_2->isChecked();
		unitReceive->setSelectedParameters(iChoiceRls,iAddr,wrd.f());
		unitSend->setSelectedParameters(iChoiceRls,iAddr,wrd.f());
}
void TabPdo::slLiEdDisVideo_2()
{
//45
	int iAddr =173 -128;
	PLineEdit* lineEdit = ui.liEdDisVideo_2;
	int b1;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt()/25;
	//b1 &= 0xffff;				//19.07.2017
	lineEdit->setText(QString("%1").arg(b1*25));
		unitReceive->setSelectedParameters(iChoiceRls,iAddr,b1);
		unitSend->setSelectedParameters(iChoiceRls,iAddr,b1);

	return;
}
void TabPdo::slLiEdLockVideo_2()
{
//64
	int iAddr =192 -128;
	PLineEdit* lineEdit = ui.liEdLockVideo_2;
	int b1,b2;
	QString str1,str2;
	str1=lineEdit->text();
	b1=str1.toInt()/25;
	b1 &= 0xffff;
	lineEdit->setText(QString("%1").arg(b1*25));
		unitReceive->setSelectedParameters(iChoiceRls,iAddr,b1);
		unitSend->setSelectedParameters(iChoiceRls,iAddr,b1);

	return;
}
void TabPdo::slLiEdTurn_2()
{
//47
	int iAddr = 175 -128;
	PLineEdit* lineEdit = ui.liEdTurn_2 ;

	fLiEdAzimuth3(	lineEdit,
		&unitReceive->selectedParameters1[iAddr],
		&unitSend->selectedParameters1[iAddr]	);
	return;
}
void TabPdo::slCoBoBedstvie_2(int index )
{
	int iAddr = 49;  //биты 2,1,0
	int b1,b2;
	if(ui.coBoBedstvie_2->hasFocus())
	{
		b1 = unitReceive->basicSetting[iAddr];
		wrd.f(unitReceive->basicSetting[iAddr]);
		wrdWr.f(index);
		wrd.s.bit2=wrdWr.s.bit2;
		wrd.s.bit1=wrdWr.s.bit1;
		wrd.s.bit0=wrdWr.s.bit0;
		b2=wrd.f();
		unitReceive->setSelectedParameters(1,iAddr,b2);
		unitSend->setSelectedParameters(1,iAddr,b2);
	}
}



void TabPdo::fLiEdAzimuth1(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
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
	b1 = d1*4096/360+.5;
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
void TabPdo::fLiEdAzimuth2(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
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
	str.clear();
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
void TabPdo::fLiEdAzimuth3(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
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
	if(b2>0)
	{
		b1=b2*60+b3;
	}else
	{
		b1=b2*60-b3;
	}
	if(str3.isEmpty())
	{
		ok2=true;
	}
	str.clear();
	if(b1<0&&b2==0)
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



void TabPdo::updateDialog()
{
//	setTeEd00();
    int iAddr0=0;
	double d1=0;

	ushort a0,a1,a2,a3;
	short b1,b2,b3;
        QString str,strWhole,str2;
        char ch;int k0;
	char nameSource[16];

//
//

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
//бит 15:	склонение (0 — географическое (истинное), 1 — магнитное)
	iAddr0 =10;
	wrd.f(unitReceive->basicSetting[iAddr0]);
	if(wrd.s.bit15)
		ui.raBuGradMagn->setChecked(true);
	else
		ui.raBuGradGeograph->setChecked(true);

//10	общие настройки
	iAddr0 = 10;
	wrd.f(unitReceive->basicSetting[iAddr0]);
//10:0 РЛС не выбрана, выбрана
	ui.chBoRlsOn->setChecked(wrd.s.bit0);
//10:1 АПОИ не выбрана, выбрана
	ui.chBoApoiOn->setChecked(wrd.s.bit1);

//10:3,2
//00 - не используется
//01 - разрядность кода угла = 12
//10 - разрядность кода угла = 11
//11 - разрядность кода угла = 10
//разрядность угла
	a1 = wrd.s.bit3*2+wrd.s.bit2;
		if(a1==0)										//10
			ui.coBoRankAngle->setCurrentIndex(0);
		if(a1==1)										//12
			ui.coBoRankAngle->setCurrentIndex(2);
		if(a1==2)										//11
			ui.coBoRankAngle->setCurrentIndex(1);
		if(a1==3)										//10
			ui.coBoRankAngle->setCurrentIndex(0);
//10:6,5,4 - № Rls 1-8
	a1 = wrd.s.bit6*4+wrd.s.bit5*2+wrd.s.bit4;
		ui.coBoNRls->setCurrentIndex(a1);

/////////////////////////////////////////////////////

//бит 8:	 (0 — только РЛС1, 1 — РЛС1 и РЛС2)
	iAddr0 =11;
	wrd.f(unitReceive->basicSetting[iAddr0]);
	if(wrd.s.bit8)
	{
		ui.raBuRls1Rls2->setChecked(true);
		ui.grBoRls2->setEnabled(true);
	}
	else
	{
		ui.raBuRls1->setChecked(true);
		ui.grBoRls2->setEnabled(false);
	}
//11	общие настройки
	iAddr0 = 11;
//биты 13,12,11:	рабочая дальность резерв,20,40,60,150,200,350,400
	wrd.f(unitReceive->basicSetting[iAddr0]);
//11:13,12,11 - резерв,20,40,60,150,200,350,400
	a1 = wrd.s.bit13*4+wrd.s.bit12*2+wrd.s.bit11*1;
		ui.coBoDistance->setCurrentIndex(a1);



//12…14  функциональное название платы
	iAddr0=12;
	for (int i=0;i<6;i++)
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
	if(!ui.liEdFuNameBoard->hasFocus())
		ui.liEdFuNameBoard->setText(str2);
//32		курс посадки 1 в градусах
	iAddr0 =32;
	a1 = unitReceive->basicSetting[iAddr0];
	str = QString("%1").arg(a1);
	if(!ui.liEdCourseLanding->hasFocus())
		ui.liEdCourseLanding->setText(str);

//96:1,0 - № Apoi 1-4
//96	параметры АПОИ
	iAddr0 = 96;
//биты 1,0:	номер устройства
	wrd.f(unitReceive->basicSetting[iAddr0]);
	a1 = wrd.s.bit1*2+wrd.s.bit0;
		ui.coBoNApoi->setCurrentIndex(a1);
//98…105  название источника АПОИ
	iAddr0=98;
	for (int i=0;i<6;i++)
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
	if(!ui.liEdNameApoi->hasFocus())
		ui.liEdNameApoi->setText(str2);
//108 блокировка АПОИ
	iAddr0 =108;
	a1 = unitReceive->basicSetting[iAddr0];
	str=QString("%1").arg(a1*25);
	if(!ui.liEdLockApoi->hasFocus())
	{
		ui.liEdLockApoi->setText(str);
	}
//64:7-0	максимальная длительность одного блока с несколькими лучами, мс
	iAddr0 =64;
	a1 = unitReceive->basicSetting[iAddr0];
	a1 = a1&0xFF;
	str = QString("%1").arg(a1);
	if(!ui.liEdMaxTimeBlock->hasFocus())
		ui.liEdMaxTimeBlock->setText(str);
//64:15-8	время ожидания открытого блока, мс
	iAddr0 =64;
	a1 = unitReceive->basicSetting[iAddr0];
	a1 = (a1>>8)&0xFF;
	str = QString("%1").arg(a1);
	if(!ui.liEdWaitTimeBlock->hasFocus())
		ui.liEdWaitTimeBlock->setText(str);
//0...7 128...135 256...263  название РЛС
	iAddr0= 0;
	for (int i=0;i<16;i++)
	{
		k0=i;
		if(i/2*2==i)
		{
			ch = firstChar(unitReceive->isSelectedParameters(0,i/2)+iAddr0);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i]=ch;
		}
		else
		{
			ch  = secondChar(unitReceive->isSelectedParameters(0,i/2)+iAddr0);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i] = ch;
		}
	}
	str2 = QString::fromAscii(nameSource,k0+1);
	if(!ui.liEdNameRls_1->hasFocus())
		ui.liEdNameRls_1->setText(str2);
//8 136 264	дальность точки стояния, метры
	iAddr0 =8;
	a1 = unitReceive->isSelectedParameters(0,iAddr0);
	str = QString("%1").arg(a1);
	if(!ui.liEdPointStandingDistance_1->hasFocus())
		ui.liEdPointStandingDistance_1->setText(str);
//9 137 265 азимут точки стояния, минуты (градусы ? 60)
	iAddr0=9;
	a0 = unitReceive->isSelectedParameters(0,iAddr0);
	a1 = a0/60;
	a2 = a0 - (a1*60);
	str = QString("%1").arg(a1);
	str.append(QString("°%1'").arg(a2,2,10,QLatin1Char( '0' )));
	if(!ui.liEdPointStandingAzimuth_1->hasFocus())
		ui.liEdPointStandingAzimuth_1->setText(str);
//10 138 266  :10 инверсия ПЗК
	iAddr0 =10;
	wrd.f(unitReceive->isSelectedParameters(0,iAddr0));
	ui.chBoInvPzk_1->setChecked(wrd.s.bit10);
//45 173 301   смещение видео по 25 м
	iAddr0 =45;
	b1 = unitReceive->isSelectedParameters(0,iAddr0);
	str=QString("%1").arg(b1*25);
	if(!ui.liEdDisVideo_1->hasFocus())
	{
		ui.liEdDisVideo_1->setText(str);
	}
//47	175	303	доворот КО, отображать в градусах и минутах от -180° до 359°,  (формат
//хранения: знаковое число в минутах)
//47 175 303   доворот КО
	iAddr0 = 47;
	b1 = unitReceive->isSelectedParameters(0,iAddr0);

	b2 = b1/60;
	b3 = b1-b2*60;


	str.clear();
	if(b1<0&&b2==0)
		str = QString("-");
	str+= QString("%1").arg(b2);
	str.append(QString("°%1'").arg(abs(b3),2,10,QChar( '0' )));
	if(!ui.liEdTurn_1->hasFocus())
	{
		ui.liEdTurn_1->setText(str);
	}

//49	177	305	критерий декодирования бедствия:
//			000: по ТИ и координате БН и ТИ
//			001: по ТИ и координате БН или ТИ
//			010: только по ТИ
//			011: в зависимости от дальности 0/30/60км
//			100: в зависимости от дальности 0/50/100км
	iAddr0 = 49;
//биты 2,1,0
	wrd.f(unitReceive->isSelectedParameters(0,iAddr0));
	a1 = wrd.s.bit2*4+wrd.s.bit1*2+wrd.s.bit0*1;
		ui.coBoBedstvie_1->setCurrentIndex(a1);


//64 192 320   блокировка видео
	iAddr0 =64;
	a1 = unitReceive->isSelectedParameters(0,iAddr0);
	str=QString("%1").arg(a1*25);
	if(!ui.liEdLockVideo_1->hasFocus())
	{
		ui.liEdLockVideo_1->setText(str);
	}
//
//0...7 128...135 256...263  название РЛС
	iAddr0= 0;
	for (int i=0;i<16;i++)
	{
		k0=i;
		if(i/2*2==i)
		{
			ch = firstChar(unitReceive->isSelectedParameters(1,i/2)+iAddr0);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i]=ch;
		}
		else
		{
			ch  = secondChar(unitReceive->isSelectedParameters(1,i/2)+iAddr0);
			if(ch == 0x00)
			{	k0--;
				break;	}
			nameSource[i] = ch;
		}
	}
	str2 = QString::fromAscii(nameSource,k0+1);
	if(!ui.liEdNameRls_2->hasFocus())
		ui.liEdNameRls_2->setText(str2);
//8 136 264	дальность точки стояния, метры
	iAddr0 =8;
	a1 = unitReceive->isSelectedParameters(1,iAddr0);
	str = QString("%1").arg(a1);
	if(!ui.liEdPointStandingDistance_2->hasFocus())
		ui.liEdPointStandingDistance_2->setText(str);
//9 137 265 азимут точки стояния, минуты (градусы ? 60)
	iAddr0=9;
	a0 = unitReceive->isSelectedParameters(1,iAddr0);
	a1 = a0/60;
	a2 = a0 - (a1*60);
	str = QString("%1").arg(a1);
	str.append(QString("°%1'").arg(a2,2,10,QLatin1Char( '0' )));
	if(!ui.liEdPointStandingAzimuth_2->hasFocus())
		ui.liEdPointStandingAzimuth_2->setText(str);
//10 138 266  :10 инверсия ПЗК
	iAddr0 =10;
	wrd.f(unitReceive->isSelectedParameters(1,iAddr0));
	ui.chBoInvPzk_2->setChecked(wrd.s.bit10);
//45 173 301   смещение видео по 25 м
	iAddr0 =45;
	b1 = unitReceive->isSelectedParameters(1,iAddr0);	//19.07.2017
	str=QString("%1").arg(b1*25);
	if(!ui.liEdDisVideo_2->hasFocus())
	{
		ui.liEdDisVideo_2->setText(str);
	}
//47 175 303   доворот КО
	iAddr0 = 47;
	b1 = unitReceive->isSelectedParameters(1,iAddr0);

	b2 = b1/60;
	b3 = b1-b2*60;


	str.clear();
	if(b1<0&&b2==0)
		str = QString("-");
	str+= QString("%1").arg(b2);
	str.append(QString("°%1'").arg(abs(b3),2,10,QChar( '0' )));
	if(!ui.liEdTurn_2->hasFocus())
	{
		ui.liEdTurn_2->setText(str);
	}
//49	177	305	критерий декодирования бедствия:
//			000: по ТИ и координате БН и ТИ
//			001: по ТИ и координате БН или ТИ
//			010: только по ТИ
//			011: в зависимости от дальности 0/30/60км
//			100: в зависимости от дальности 0/50/100км
	iAddr0 = 49;
//биты 2,1,0
	wrd.f(unitReceive->isSelectedParameters(1,iAddr0));
	a1 = wrd.s.bit2*4+wrd.s.bit1*2+wrd.s.bit0*1;
		ui.coBoBedstvie_2->setCurrentIndex(a1);

//64 192 320   блокировка видео
	iAddr0 =64;
	a1 = unitReceive->isSelectedParameters(1,iAddr0);
	str=QString("%1").arg(a1*25);
	if(!ui.liEdLockVideo_2->hasFocus())
	{
		ui.liEdLockVideo_2->setText(str);
	}
//

}
