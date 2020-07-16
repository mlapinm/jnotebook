#ifndef TABPS5_H
#define TABPS5_H

#include <QtGui/QWidget>
#include "ui_tabps5.h"
#include "unit.h"
#include "wrd.h"

class TabPs5 : public QWidget
{
	Q_OBJECT

public:
	TabPs5(QWidget *parent = 0);
	~TabPs5();
private:
	Ui::TabPs5Class ui;
public:
	void createActionsKors();
	void createActionsArp95Ch();
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
	void slLiEdCourseLanding();
	void slChBoComplectAuto();
	void slLiEdMaxTimeBlock();
	void slLiEdNameRls();
	void slLiEdPointStandingDistance();
	void slLiEdPointStandingAzimuth();
	void slRaBuGrad();

	void slLiEdTorNulN1();
	void slLiEdTorNulN2();
	void slLiEdPnt1();
	void slLiEdPnt2();
	void slLiEdHiVpp1();
	void slLiEdHiVpp2();
	void slLiEdAxVpp();
	void slLiEdGlAmpl();
	void slLiEdCourseAmpl();
public:
	uchar firstChar(ushort a1);
	uchar secondChar(ushort a1);
};

#endif // TABPS5_H
