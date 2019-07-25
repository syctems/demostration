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
namespace 电子病历
{
    public partial class Form1 : Office2007Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void ButtonItem16_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form4 form = new Form4();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem14_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form2 form = new Form2();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem15_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form3 form = new Form3();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem17_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form5 form = new Form5();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem18_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form6 form = new Form6();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem19_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form7 form = new Form7();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem20_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form8 form = new Form8();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem21_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form9 form = new Form9();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem22_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form10 form = new Form10();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem23_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form11 form = new Form11();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }

        private void ButtonItem24_Click(object sender, EventArgs e)
        {
            panel1.Controls.Clear();
            Form12 form = new Form12();
            form.TopLevel = false;
            panel1.Controls.Add(form);
            form.Show();
        }
    }
}
