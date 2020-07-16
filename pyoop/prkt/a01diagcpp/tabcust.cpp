#include "tabcust.h"
#include <QDebug>
#include <QtGui/QStandardItemModel>

TabCust::TabCust(QWidget *parent)
	: QWidget(parent)
{
	ui.setupUi(this);

//
	diagnosticaPsp=new DiagnosticaPsp(this);
	QStringList lAsPort,lSincrPort,lCoBoRlsProt, 
		lCoBoMet1Prot, lCoBoArp1Prot, lCoBoSev1Prot;

	lAsPort+="нет";	//0
	lAsPort+="прямой";	//1
	lAsPort+="РСБН-4НМ";	//2
	lAsPort+="Астерикс";	//3
	lAsPort+="КОРС";	//4
	lAsPort+="АДРМ";	//5
	lAsPort+="резерв 06";	//6
	lAsPort+="резерв 07";	//7
	lAsPort+="РСП-27";	//8
	lAsPort+="АРП-95";	//9
	lAsPort+="АРП-95 (Синтез)";	//10
	lAsPort+="Тахион";	//11
	lAsPort+="АМИС-РФ";	//12
	lAsPort+="МК-ЛМ";	//13
	lAsPort+="резерв 14";	//14

	lSincrPort+="нет";	//0
	lSincrPort+="Астерикс";	//1
	lSincrPort+="Aircat";	//2
	lSincrPort+="резерв 03";	//3

	lCoBoRlsProt+="нет";	//0
	lCoBoRlsProt+="Астерикс(кат.01,02)";	//1
	lCoBoRlsProt+="Астерикс(кат.34,48)";	//2
	lCoBoRlsProt+="Астерикс(МРВЛ)";	//3
	lCoBoRlsProt+="Астерикс(Лира)";	//4
	lCoBoRlsProt+="Астерикс(КОРС)";	//5
	lCoBoRlsProt+="Астерикс(АОРЛ)";	//6
	lCoBoRlsProt+="АДРМ";	//7
	lCoBoRlsProt+="РСП-27";	//8
	lCoBoRlsProt+="РСБН-4НМ";	//9

	lCoBoMet1Prot+="нет";	//0
	lCoBoMet1Prot+="METAR";	//1
	lCoBoMet1Prot+="резерв 02";	//2
	lCoBoMet1Prot+="резерв 03";	//3
	lCoBoMet1Prot+="КРАМС";	//4
	lCoBoMet1Prot+="резерв 05";	//5
	lCoBoMet1Prot+="резерв 06";	//6
	lCoBoMet1Prot+="АМИС-РФ";	//7
	lCoBoMet1Prot+="МК-ЛМ";	//8
	lCoBoMet1Prot+="резерв 09";	//9

	lCoBoArp1Prot += "нет";	//0
	lCoBoArp1Prot += "АРП-95";	//1
	lCoBoArp1Prot += "АРП-95 (Синтез)";	//2
	lCoBoArp1Prot += "Астерикс(кат.02)";	//3
	lCoBoArp1Prot += "Астерикс(кат.34)";	//4
	lCoBoArp1Prot += "Астерикс(кат.48)";	//5
	lCoBoArp1Prot += "Пеленгатор РСП-27";	//6
	lCoBoArp1Prot += "резерв 07";	//7

	lCoBoSev1Prot += "нет";	//0
	lCoBoSev1Prot += "Тахион";	//1
	lCoBoSev1Prot += "ПС-161";	//2
	lCoBoSev1Prot += "резерв 03";	//3

	ui.coBoMet1Prot->clear();
	ui.coBoMet1Prot->addItems(lCoBoMet1Prot);
	ui.coBoMet2Prot->clear();
	ui.coBoMet2Prot->addItems(lCoBoMet1Prot);
	ui.coBoMet3Prot->clear();
	ui.coBoMet3Prot->addItems(lCoBoMet1Prot);
	ui.coBoMet4Prot->clear();
	ui.coBoMet4Prot->addItems(lCoBoMet1Prot);



	ui.coBoPort1AsincrProt->clear();
	ui.coBoPort1AsincrProt->addItems(lAsPort);
	ui.coBoPort2AsincrProt->clear();
	ui.coBoPort2AsincrProt->addItems(lAsPort);
	ui.coBoPort3AsincrProt->clear();
	ui.coBoPort3AsincrProt->addItems(lAsPort);
	ui.coBoPort4AsincrProt->clear();
	ui.coBoPort4AsincrProt->addItems(lAsPort);
	ui.coBoPort5AsincrProt->clear();
	ui.coBoPort5AsincrProt->addItems(lAsPort);
	ui.coBoPort6AsincrProt->clear();
	ui.coBoPort6AsincrProt->addItems(lAsPort);
	ui.coBoPort7AsincrProt->clear();
	ui.coBoPort7AsincrProt->addItems(lAsPort);
	ui.coBoPort8AsincrProt->clear();
	ui.coBoPort8AsincrProt->addItems(lAsPort);
	ui.coBoPort9AsincrProt->clear();
	ui.coBoPort9AsincrProt->addItems(lAsPort);
	ui.coBoPort10AsincrProt->clear();
	ui.coBoPort10AsincrProt->addItems(lAsPort);

	ui.coBoPort1SincrProt->clear();
	ui.coBoPort1SincrProt->addItems(lSincrPort);
	ui.coBoPort2SincrProt->clear();
	ui.coBoPort2SincrProt->addItems(lSincrPort);
	ui.coBoPort3SincrProt->clear();
	ui.coBoPort3SincrProt->addItems(lSincrPort);
	ui.coBoPort4SincrProt->clear();
	ui.coBoPort4SincrProt->addItems(lSincrPort);
	ui.coBoPort5SincrProt->clear();
	ui.coBoPort5SincrProt->addItems(lSincrPort);
	ui.coBoPort6SincrProt->clear();
	ui.coBoPort6SincrProt->addItems(lSincrPort);
	ui.coBoPort7SincrProt->clear();
	ui.coBoPort7SincrProt->addItems(lSincrPort);
	ui.coBoPort8SincrProt->clear();
	ui.coBoPort8SincrProt->addItems(lSincrPort);
	ui.coBoPort9SincrProt->clear();
	ui.coBoPort9SincrProt->addItems(lSincrPort);

	ui.coBoRls1Prot->clear();
	ui.coBoRls1Prot->addItems(lCoBoRlsProt);
	ui.coBoRls2Prot->clear();
	ui.coBoRls2Prot->addItems(lCoBoRlsProt);
	ui.coBoRls3Prot->clear();
	ui.coBoRls3Prot->addItems(lCoBoRlsProt);
	ui.coBoRls4Prot->clear();
	ui.coBoRls4Prot->addItems(lCoBoRlsProt);
	ui.coBoRls5Prot->clear();
	ui.coBoRls5Prot->addItems(lCoBoRlsProt);
	ui.coBoRls6Prot->clear();
	ui.coBoRls6Prot->addItems(lCoBoRlsProt);

	ui.coBoArp1Prot->clear();
	ui.coBoArp1Prot->addItems(lCoBoArp1Prot);
	ui.coBoArp2Prot->clear();
	ui.coBoArp2Prot->addItems(lCoBoArp1Prot);

	ui.coBoSev1Prot->clear();
	ui.coBoSev1Prot->addItems(lCoBoSev1Prot);
	ui.coBoSev2Prot->clear();
	ui.coBoSev2Prot->addItems(lCoBoSev1Prot);

//
	QStringList stLiModProt;
	stLiModProt+="00";	//
	stLiModProt+="01";	//
	stLiModProt+="02";	//
	stLiModProt+="03";	//
	ui.coBoPort1ModProt->clear();	ui.coBoPort1ModProt->addItems(stLiModProt);
	ui.coBoPort2ModProt->clear();	ui.coBoPort2ModProt->addItems(stLiModProt);
	ui.coBoPort3ModProt->clear();	ui.coBoPort3ModProt->addItems(stLiModProt);
	ui.coBoPort4ModProt->clear();	ui.coBoPort4ModProt->addItems(stLiModProt);
	ui.coBoPort5ModProt->clear();	ui.coBoPort5ModProt->addItems(stLiModProt);
	ui.coBoPort6ModProt->clear();	ui.coBoPort6ModProt->addItems(stLiModProt);
	ui.coBoPort7ModProt->clear();	ui.coBoPort7ModProt->addItems(stLiModProt);
	ui.coBoPort8ModProt->clear();	ui.coBoPort8ModProt->addItems(stLiModProt);
	ui.coBoPort9ModProt->clear();	ui.coBoPort9ModProt->addItems(stLiModProt);
	ui.coBoPort10ModProt->clear();	ui.coBoPort10ModProt->addItems(stLiModProt);

	createActions();
//	ui.tabWidget->setTabEnabled(0,false);		//..........
}

TabCust::~TabCust()
{

}
void TabCust::createActions()
{
//При использовании порта 1 в синхронном режиме
//настройки на данной вкладке не используются
	QPalette pal = ui.label_41->palette();
	pal.setBrush(QPalette::Foreground,Qt::red);
	ui.label_41->setPalette(pal);
	ui.label_42->setPalette(pal);
	ui.label_43->setPalette(pal);
	ui.label_44->setPalette(pal);
	ui.label_111->setPalette(pal);
	ui.label_112->setPalette(pal);
	ui.label_105->setPalette(pal);
	ui.label_106->setPalette(pal);
	ui.label_107->setPalette(pal);
	ui.label_108->setPalette(pal);
	ui.label_109->setPalette(pal);
	ui.label_110->setPalette(pal);
//
	st10Port6Rls =		"0000000000000000";
	st10Port6RlsPrev =	"0000000000000000";
	createActionsSoPo();
	createActionsArpMetSev();

	return;
}
void TabCust::setEnabledThe(bool b)
{
	ui.grBoPort1->setEnabled(b);
	ui.grBoPort2->setEnabled(b);
	ui.grBoPort3->setEnabled(b);
	ui.grBoPort4->setEnabled(b);
	ui.grBoPort5->setEnabled(b);
	ui.grBoPort6->setEnabled(b);
	ui.grBoPort7->setEnabled(b);
	ui.grBoPort8->setEnabled(b);
	ui.grBoPort9->setEnabled(b);
	ui.grBoPort10->setEnabled(b);
	ui.grBoRls1->setEnabled(b);
	ui.grBoRls2->setEnabled(b);
	ui.grBoRls3->setEnabled(b);
	ui.grBoRls4->setEnabled(b);
	ui.grBoRls5->setEnabled(b);
	ui.grBoRls6->setEnabled(b);
	ui.grBoArp1->setEnabled(b);
	ui.grBoArp2->setEnabled(b);
	ui.grBoMet0->setEnabled(b);
	ui.grBoSev1->setEnabled(b);
	ui.grBoSev2->setEnabled(b);

}
//////////////////////////////////////////////

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
void TabCust::toTabCust(uchar* pch,int sz)
{
	uchar header[4];
	int szHeader;
	szHeader = sz>4 ? 4:0;
	if(!szHeader)return;
	memcpy(header,pch,szHeader);
	int typeBlock=header[1];
	int szBlock = *((ushort*)(header+2));
	if(sz!=szBlock+4)
		return;
	int tBlock,nBlock;	//тип блока, номер источника(порта)
	tBlock=typeBlock & 0xF0;
	nBlock=typeBlock & 0x0F;
	bool ok=false;
	if(tBlock==0x30&&nBlock<14)
	{
		ok=true;
	}
	if(tBlock==0x20&&nBlock<10)
	{
		ok=true;
	}
	if(!ok)
		return;
	int pBegin=4,pEnd=4;
	int numStrPort=0,numStrRls=0;
	QString str;
	bool bClear=false;
//	qDebug()<<sz<<szBlock<< tBlock <<nBlock;
////////////////////////////////////////////////////////////
	QByteArray ba;
	char chrow[2000];
					int sz0=0;
					memset(chrow,0,2000);
////////////////////////////////////////////////////////////
	for(int i=4;i<sz;i++)
	{
		if( pch[i] == 0x00 )
		{
			pEnd=i;
			str = QString::fromLocal8Bit((char*)pch+pBegin,pEnd-pBegin);
			pBegin=pEnd+1;
			if(!str.isEmpty())
			{
				if(tBlock==0x30)
				{
					if(!bClear)
					{
						bClear=true;
						stLiRls[nBlock].clear();
					}
				stLiRls[nBlock]+=str;
				numStrRls++;
				}
				if(tBlock==0x20)
				{
					if(!bClear)
					{
						bClear=true;
						stLiPort[nBlock].clear();
					}
					stLiPort[nBlock]+=str;
					numStrPort++;
					ba=str.toAscii();
					sz0=ba.size();
					memset(chrow,0,2000);
					memcpy(chrow,ba.data(),ba.size());
//					qDebug()<<str;
				}
			}
		}
	}
if(tBlock==0x20)
{
//	memcpy(chrow,ba.data(),ba.size());
}
//

}
void TabCust::updDiagRlsPorts()
{
//	QStringList stLiRls[6],stLiPort[10];
	QLabel* la1,*la2;
	QString str1,str2;
//Rls
	for(int i=0;i<14;i++)
	{
		if(!stLiRls[i].isEmpty())
		{
			switch(i)
			{
			case 0:
				la1=ui.la1Rls1;
				la2=ui.la2Rls1;
				break;
			case 1:
				la1=ui.la1Rls2;
				la2=ui.la2Rls2;
				break;
			case 2:
				la1=ui.la1Rls3;
				la2=ui.la2Rls3;
				break;
			case 3:
				la1=ui.la1Rls4;
				la2=ui.la2Rls4;
				break;
			case 4:
				la1=ui.la1Rls5;
				la2=ui.la2Rls5;
				break;
			case 5:
				la1=ui.la1Rls6;
				la2=ui.la2Rls6;
				break;
			case 6:
				la1=ui.la1Rls7;
				la2=ui.la2Rls7;
				break;
			case 7:
				la1=ui.la1Rls8;
				la2=ui.la2Rls8;
				break;
			case 8:
				la1=ui.la1Rls9;
				la2=ui.la2Rls9;
				break;
			case 9:
				la1=ui.la1Rls10;
				la2=ui.la2Rls10;
				break;
			case 10:
				la1=ui.la1Rls11;
				la2=ui.la2Rls11;
				break;
			case 11:
				la1=ui.la1Rls12;
				la2=ui.la2Rls12;
				break;
			case 12:
				la1=ui.la1Rls13;
				la2=ui.la2Rls13;
				break;
			case 13:
				la1=ui.la1Rls14;
				la2=ui.la2Rls14;
				break;
			}
			str1.clear();
			str2.clear();
			for(int j=0;j<stLiRls[i].size();j++)
			{
				if(j<10)
				{
					str1+=stLiRls[i][j];
					str1+="\n";
				}else
				{
					str2+=stLiRls[i][j];
					str2+="\n";
				}
			}
			str1=str1.trimmed();
			str2=str2.trimmed();
			la1->setText(str1);
			la2->setText(str2);
		}
	}
//Port
	for(int i=0;i<10;i++)
	{
		if(!stLiPort[i].isEmpty())
		{
			switch(i)
			{
			case 0:
				la1=ui.la1Port1;
				la2=ui.la2Port1;
				break;
			case 1:
				la1=ui.la1Port2;
				la2=ui.la2Port2;
				break;
			case 2:
				la1=ui.la1Port3;
				la2=ui.la2Port3;
				break;
			case 3:
				la1=ui.la1Port4;
				la2=ui.la2Port4;
				break;
			case 4:
				la1=ui.la1Port5;
				la2=ui.la2Port5;
				break;
			case 5:
				la1=ui.la1Port6;
				la2=ui.la2Port6;
				break;
			case 6:
				la1=ui.la1Port7;
				la2=ui.la2Port7;
				break;
			case 7:
				la1=ui.la1Port8;
				la2=ui.la2Port8;
				break;
			case 8:
				la1=ui.la1Port9;
				la2=ui.la2Port9;
				break;
			case 9:
				la1=ui.la1Port10;
				la2=ui.la2Port10;
				break;
			}
			str1.clear();
			str2.clear();
			for(int j=0;j<stLiPort[i].size();j++)
			{
				if(j<10)
				{
					str1+=stLiPort[i][j];
					str1+="\n";
				}else
				{
					str2+=stLiPort[i][j];
					str2+="\n";
				}
			}
			la1->setText(str1);
			la2->setText(str2);
		}
	}
}
void TabCust::updateDialog()
{
////////////////////////////////////////////////////////////////////////////////////
	updDiagRlsPorts();
	updateDialogSoPo();
	updateDialogArpMetSev();
	updateDialogArp1Ch();
	updateDialogArp2Ch();

	return;
}
void TabCust::fLiEdAzimuth(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
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
void TabCust::fLiEdAzimuth2(void* l, ushort* pReceiveSePar, ushort* pSendSelPar)
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

//04.09.2017	64208
//tabcust.h	tabcust.cpp	tabcust2.cpp	tabcust.ui	
//81 период обзора, мс
//lCoBoRlsProt+="нет";	//0
