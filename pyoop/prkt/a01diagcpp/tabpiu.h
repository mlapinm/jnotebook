#ifndef TABPIU_H
#define TABPIU_H

#include <QtGui/QWidget>
#include "ui_tabpiu.h"
#include "unit.h"
#include "wrd.h"

class TabPiu : public QWidget
{
	Q_OBJECT

public:
	TabPiu(QWidget *parent = 0);
	~TabPiu();

	Unit* unitReceive,*unitSend;
	Wrd wrd,wrdWr;
	void createActions();
	void setEnabledThe(bool b);
	void updateDialog();
	void fLiEdAzimuth(void* l, ushort* pReceiveSePar, ushort* pSendSelPar);
	void fLiEdAzimuth1(void* l, ushort* pReceiveSePar, ushort* pSendSelPar);
	void fLiEdAzimuth2(void* l, ushort* pReceiveSePar, ushort* pSendSelPar);
	short to12bit(int a);

protected slots:
	void slLiEdNameBoard();
	void fLineEditIPInitial();
	void fLineEditBasicPort();
	void fLineEditPortBoard();
	void fLineEditGradient();
	void fComboBoxRankAngle(int index );
	void slGrBoP18M();
	void slGrBoSecCh();
	void slLiEdPrimarName();
	void slLiEdSecondName();
	void slRaBuGradient();
	void slLiEdPointStandingDistance();
	void slLiEdPointStandingAzimuth();
	void slLiEdPrimTurn();
	void slLiEdSecondTurn();
	void slCoBoPrimarRlsNumber(int index);
	void slCoBoSecondApoiNumber(int index);
	void slLiEdPrimarLockVideo();
	void slLiEdPrimLev1();
	void slLiEdPrimLev2();
	void slLiEdPrimLev3();
	void slLiEdSecondIpRls();
	void slLiEdSecondIpBoard();
	void slLiEdSecondPortBase();
	void slLiEdLatitude();
	void slLiEdLongitude();

private:
	Ui::TabPiu ui;

public:
	uchar firstChar(ushort a1);
	uchar secondChar(ushort a1);


};

#endif // TABPIU_H

