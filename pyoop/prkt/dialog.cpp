//dialog.cpp
/* sfsfsf */
//пороги
/* sfsfsf */
	intPressEnter=0;
	widgetRiftZ->setLevelEdgeColor(1,QColor(Qt::red));	//изм.зн.ампл.
	widgetRiftZ->setLevelEdgeColor(2,QColor(Qt::blue));	//уст.пор.зап.
	widgetRiftZ->setLevelEdgeColor(3,QColor(Qt::cyan));	//уст.пор.вид.
QString sss="уст.пор.вид.";
/*
вапвпвп
sdfsdf

*/
//120	параметры АРП
//		бит 14:	1 — использовать «выбор РЛС»
	fWord(unitReceive->basicSetting[120]);
	if(word.bit14) checkBoxARPUseRLS->setChecked(true);
	else checkBoxARPUseRLS->setChecked(false);
//		бит 15:	склонение (0 — географическое (истинное), 1 — магнитное)
	if(word.bit15)	radioButtonArpGradientMagnetic->setChecked(true);
	else radioButtonArpGradientGeographic->setChecked(true);
//биты 1,0:	номер АРП
	a1 = word.bit1*2+word.bit0;
	comboBoxArpNumber->setCurrentIndex(a1);
//127	порт выхода на осциллограф
//	младший байт: канал 1
//	0: выключен		-	23
//	1: >ВЗ			-	1
//	2: >П			-	2
//	3: >А
//	4: >М
//	5: >С
//	6: З>
//	7: П>
//	8: А>
//	9: М>
//	10: С>
//	11: ПЗК
//	12: Т1
//	13: Т2
//	14: Т3

