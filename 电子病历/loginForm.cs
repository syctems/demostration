using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using DevComponents.DotNetBar;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using 电子病历.tools;

namespace 电子病历
{
    public partial class loginForm : Office2007Form
    {
        public loginForm()
        {
            InitializeComponent();
        }

        private void LoginForm_Load(object sender, EventArgs e)
        {

        }

        private void ButtonX1_Click(object sender, EventArgs e)
        {
            string account = textBoxX1.Text;
            string pwd = textBoxX2.Text;
            var obj = new {
                account = account,
                pwd = pwd,
            };
            string jsonData = JsonConvert.SerializeObject(obj);
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse("http://88.88.89.139:9999/uuuu/auth/doLogin", jsonData));
            if (urlData["status"].ToString() == "0")
            {
                MessageBox.Show(urlData["txt"].ToString());
            }
            else
            {
                Form1 mainForm = new Form1();
                mainForm.Show();
            }
        }
    }
}
