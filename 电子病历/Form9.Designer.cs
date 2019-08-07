namespace 电子病历
{
    partial class Form9
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.microChart1 = new DevComponents.DotNetBar.MicroChart();
            this.SuspendLayout();
            // 
            // microChart1
            // 
            // 
            // 
            // 
            this.microChart1.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.microChart1.Location = new System.Drawing.Point(161, 32);
            this.microChart1.Name = "microChart1";
            this.microChart1.Size = new System.Drawing.Size(610, 214);
            this.microChart1.Style = DevComponents.DotNetBar.eDotNetBarStyle.StyleManagerControlled;
            this.microChart1.TabIndex = 0;
            this.microChart1.Text = "microChart1";
            // 
            // Form9
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.microChart1);
            this.Name = "Form9";
            this.Text = "用户管理";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.Form9_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private DevComponents.DotNetBar.MicroChart microChart1;
    }
}