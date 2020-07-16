QT += core network gui

CONFIG += c++11

TARGET = diag
CONFIG += console
CONFIG -= app_bundle

TEMPLATE = app

SOURCES += main.cpp \
    blocmeas.cpp \
    board.cpp \
    diagnostica.cpp \
    diagnosticapsp.cpp \
    dialog.cpp \
    dialog2.cpp \
    dialog3.cpp \
    dlgcust.cpp \
    dlgfault.cpp \
    glcu.cpp \
    levels.cpp \
    list.cpp \
    listdlg.cpp \
    netexchange.cpp \
    olineedit.cpp \
    plineedit.cpp \
    rastr.cpp \
    tabcust.cpp \
    tabcust00.cpp \
    tabcust0.cpp \
    tabcust2.cpp \
    tabcust3.cpp \
    tabcustkors.cpp \
    tabcustmvrl.cpp \
    tabpcm.cpp \
    tabpdo.cpp \
    tabpiu.cpp \
    tabps5.cpp \
    unit.cpp \
    unn.cpp \
    widrastr.cpp \
    widrastrtext.cpp \
    wrd.cpp

FORMS += \
    dialog.ui \
    dlgcust.ui \
    dlgfault.ui \
    listdlg.ui \
    tabcust.ui \
    tabcust0.ui \
    tabpcm.ui \
    tabpdo.ui \
    tabpiu.ui \
    tabps5.ui \
    widrastr.ui

DISTFILES += \
    uecho.pro.user

HEADERS += \
    blocmeas.h \
    board.h \
    diagnostica.h \
    diagnosticapsp.h \
    dialog.h \
    dlgcust.h \
    dlgfault.h \
    glcu.h \
    levels.h \
    list.h \
    listdlg.h \
    netexchange.h \
    olineedit.h \
    plineedit.h \
    rastr.h \
    tabcust.h \
    tabcust0.h \
    tabpcm.h \
    tabpdo.h \
    tabpiu.h \
    tabps5.h \
    unit.h \
    unn.h \
    widrastr.h \
    widrastrtext.h \
    wrd.h
