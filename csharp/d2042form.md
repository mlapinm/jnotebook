1 [Visual C# Create WinForms Project - YouTube](#Visual-C-Create-WinForms-Project---YouTube)   
2 [Visual C# Change Windows Form Icon - YouTube](#Visual-C-Change-Windows-Form-Icon---YouTube)   
3 [Visual C# Color Dialog Control - YouTube](#Visual-C-Color-Dialog-Control---YouTube)   
4 [Visual C# ComboBox Control - YouTube](#Visual-C-ComboBox-Control---YouTube)   
5 [Visual C# DateTimePicker Control - YouTube](#Visual-C-DateTimePicker-Control---YouTube)   
6 [Visual C# Font Dialog Control - YouTube](#Visual-C-Font-Dialog-Control---YouTube)   
7 [Visual C# ListBox Control - YouTube](#Visual-C-ListBox-Control---YouTube)   
8 [Visual C# OpenFileDialog Control - YouTube](#Visual-C-OpenFileDialog-Control---YouTube)   
9 [Visual C# Picturebox Control - YouTube](#Visual-C-Picturebox-Control---YouTube)   
10 [Visual C# ProgressBar Control - YouTube](#Visual-C-ProgressBar-Control---YouTube)   
11 [Visual C# SaveFileDialog Control - YouTube](#Visual-C-SaveFileDialog-Control---YouTube)   
12 [Visual C# Resize Windows Form - YouTube](#Visual-C-Resize-Windows-Form---YouTube)   
13 [Visual C# Windows Form Transparency - YouTube](#Visual-C-Windows-Form-Transparency---YouTube)   
[footer](#footer)  
## Visual C# Create WinForms Project - YouTube  
[Visual C# Create WinForms Project - YouTube](https://www.youtube.com/watch?v=eByGuqy5bcw&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY)  
D:\programs\d02sharp  
d2042_012form
  
## Visual C# Change Windows Form Icon - YouTube  
[Visual C# Change Windows Form Icon - YouTube](https://www.youtube.com/watch?v=4lcBHDeUJ2E&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=2)  
d2042_022icon  
## Visual C# Color Dialog Control - YouTube  
[Visual C# Color Dialog Control - YouTube](https://www.youtube.com/watch?v=AydfWXkCI2c&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=3)  
d2042_032color  
```
namespace d2042_032color
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_mouseClick(object sender, MouseEventArgs e)
        {
            ColorDialog cd = new ColorDialog();
            cd.ShowDialog();
        }
    }
}
```
## Visual C# ComboBox Control - YouTube  
[Visual C# ComboBox Control - YouTube](https://www.youtube.com/watch?v=yA-QfsReVLc&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=4)  
d2042_042combo
```
       private void Form1_load(object sender, EventArgs e)
        {
            comboBox1.Items.Add("One");
            comboBox1.Items.Add("Two");
            comboBox1.Items.Add("Three");
            comboBox1.Items.Add("Four");
            comboBox1.SelectedIndex = 0;
        }
        

        private void button1_MouseClick(object sender, MouseEventArgs e)
        {
            label1.Text = "Selected option " + comboBox1.Text;
        }
```  
## Visual C# DateTimePicker Control - YouTube  
[Visual C# DateTimePicker Control - YouTube](https://www.youtube.com/watch?v=NH7Cf_KB0qU&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=5)  
d2042_052picker  
```
        private void button1_mouseClick(object sender, MouseEventArgs e)
        {
            String date1;
            DateTime result = dateTimePicker1.Value;
            date1 = result.ToString();
            textBox1.Text = date1;
        }
```
## Visual C# Font Dialog Control - YouTube  
[Visual C# Font Dialog Control - YouTube](https://www.youtube.com/watch?v=ILbo6gsQSFI&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=6)  
d2042_062Font  
```
FontDialog fd = new FontDialog();
fd.ShowDialog();
```  
## Visual C# ListBox Control - YouTube  
[Visual C# ListBox Control - YouTube](https://www.youtube.com/watch?v=AX6FH0246Co&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=7)  
d2042_072ListBox  
```
        private void Form1_Load(object sender, EventArgs e)
        {
            listBox1.Items.Add("One");
            listBox1.Items.Add("Two");
            listBox1.Items.Add("Three");
            listBox1.Items.Add("Four");

        }

        private void button1_MouseClick(object sender, MouseEventArgs e)
        {
            label1.Text = "Selected Option : " + listBox1.Text;
        }
```
## Visual C# OpenFileDialog Control - YouTube  
[Visual C# OpenFileDialog Control - YouTube](https://www.youtube.com/watch?v=dG_Ah8Bt8LE&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=8)  
d2042_082FileDialog
```
OpenFileDialog ofd = new OpenFileDialog();
ofd.ShowDialog();
```
## Visual C# Picturebox Control - YouTube  
[Visual C# Picturebox Control - YouTube](https://www.youtube.com/watch?v=6f_lZM-f6-Q&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=9)  
d2042_082Picturebox   
```
pictureBox1.Image = Image.FromFile(@"../../pizza.png");
label1.Text = Directory.GetCurrentDirectory();
```
## Visual C# ProgressBar Control - YouTube  
[Visual C# ProgressBar Control - YouTube](https://www.youtube.com/watch?v=KQP5oe-rQj4&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=10)  
d2042_102ProgressBar  
```
progressBar1.Minimum = 0;
progressBar1.Maximum = 200;
for (int i = 0; i < 200; i++)
{
	progressBar1.Value = i;
	System.Threading.Thread.Sleep(80);
}
```
## Visual C# SaveFileDialog Control - YouTube  
[Visual C# SaveFileDialog Control - YouTube](https://www.youtube.com/watch?v=jFI0T6HvcXk&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=11)  
d2042_102SaveFileDialog  
```
SaveFileDialog sfd = new SaveFileDialog();
sfd.ShowDialog();
```
## Visual C# Resize Windows Form - YouTube  
[Visual C# Resize Windows Form - YouTube](https://www.youtube.com/watch?v=gG7IzMQKV-8&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=12)  
d2042_112Resize  
this.Size = new System.Drawing.Size(400, 350);  
## Visual C# Windows Form Transparency - YouTube  
[Visual C# Windows Form Transparency - YouTube](https://www.youtube.com/watch?v=u7lrbwx0V40&list=PLUY1lsOTtPeL8korF_BXhfwyVpas_EEVY&index=13)  
d2042_132Resize  
```
this.BackColor = Color.White;
this.TransparencyKey = Color.White;
```


d2042_142Clipboard

## footer
[Create a C# Application from Start to Finish - Complete Course - fcc 24 hours](https://www.youtube.com/watch?v=wfWxdh-_k_4)    
не в тему  


