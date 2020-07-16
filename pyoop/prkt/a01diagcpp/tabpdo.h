#ifndef TABPDO_H
#define TABPDO_H

#include <QtGui/QWidget>
#include "ui_tabpdo.h"
#include "unit.h"
#include "wrd.h"

class TabPdo : public QWidget
{
	Q_OBJECT

public:
	TabPdo(QWidget *parent = 0);
	~TabPdo();

private:
	Ui::TabPdo ui;
public:

	int iChoiceRls;
	void createActions();
	void setEnabledThe(bool b);

	Unit* unitReceive,*unitSend;
	Wrd wrd,wrdWr;
	void updateDialog();
protected slots:
//Ёкранные слоты:
	void fLineEditIPInitial();
	void fLineEditBasicPort();
	void fLineEditPortBoard();
	void fLineEditGradient();
public:
	void fLiEdAzimuth(void* l, ushort* pReceiveSePar, ushort* pSendSelPar);
protected slots:
	void slLiEdFuNameBoard();
	void slCoBoDistance(int index );
	void slLiEdCourseLanding();
	void slLiEdMaxTimeBlock();
	void slLiEdWaitTimeBlock();
	void slLiEdNameRls_1();
	void slLiEdPointStandingDistance_1();
	void slLiEdPointStandingAzimuth_1();
	void slChBoInvPzk_1();
	void slRaBuRls1Rls2();
	void slRaBuGrad();
	void slCoBoRankAngle(int index );
	void slCoBoNRls(int index );
	void slCoBoNApoi(int index );
	void slChBoRlsOn();
	void slChBoApoiOn();
	void slLiEdNameApoi();
	void slLiEdLockApoi();

	void slLiEdDisVideo_1();
	void slLiEdLockVideo_1();
	void slLiEdTurn_1();
	void slCoBoBedstvie_1(int index );

	void slLiEdNameRls_2();
	void slLiEdPointStandingDistance_2();
	void slLiEdPointStandingAzimuth_2();
	void slChBoInvPzk_2();
	void slLiEdDisVideo_2();
	void slLiEdLockVideo_2();
	void slLiEdTurn_2();
	void slCoBoBedstvie_2(int index );

public:
	uchar firstChar(ushort a1);
	uchar secondChar(ushort a1);
	void fLiEdAzimuth1(void* l, ushort* pReceiveSePar, ushort* pSendSelPar);
	void fLiEdAzimuth2(void* l, ushort* pReceiveSePar, ushort* pSendSelPar);
	void fLiEdAzimuth3(void* l, ushort* pReceiveSePar, ushort* pSendSelPar);


};

#endif // TABPDO_H
