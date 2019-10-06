@ECHO OFF
FOR /L %%X IN (100,1,105) DO (
ping -n 1 -w 1 192.168.1.%%X |Find /I "TTL="||ECHO %%X
)
