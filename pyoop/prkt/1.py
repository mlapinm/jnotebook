import win32com.client
# Excel = win32com.client.Dispatch("Excel.Application")
Excel = win32com.client.Dispatch()
wb = WxcelWorkbooks.Open('1.xlsx')
