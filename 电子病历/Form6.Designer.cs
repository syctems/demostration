namespace 电子病历
{
    partial class Form6
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
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form6));
            this.splitContainer1 = new System.Windows.Forms.SplitContainer();
            this.treeView1 = new System.Windows.Forms.TreeView();
            this.imageList1 = new System.Windows.Forms.ImageList(this.components);
            this.superTabControl1 = new DevComponents.DotNetBar.SuperTabControl();
            this.superTabControlPanel2 = new DevComponents.DotNetBar.SuperTabControlPanel();
            this.buttonX3 = new DevComponents.DotNetBar.ButtonX();
            this.labelX4 = new DevComponents.DotNetBar.LabelX();
            this.buttonX4 = new DevComponents.DotNetBar.ButtonX();
            this.labelX5 = new DevComponents.DotNetBar.LabelX();
            this.textBoxX3 = new DevComponents.DotNetBar.Controls.TextBoxX();
            this.textBoxX4 = new DevComponents.DotNetBar.Controls.TextBoxX();
            this.richTextBoxEx2 = new DevComponents.DotNetBar.Controls.RichTextBoxEx();
            this.labelX6 = new DevComponents.DotNetBar.LabelX();
            this.superTabItem2 = new DevComponents.DotNetBar.SuperTabItem();
            this.superTabControlPanel1 = new DevComponents.DotNetBar.SuperTabControlPanel();
            this.richTextBoxEx1 = new DevComponents.DotNetBar.Controls.RichTextBoxEx();
            this.buttonX2 = new DevComponents.DotNetBar.ButtonX();
            this.labelX1 = new DevComponents.DotNetBar.LabelX();
            this.buttonX1 = new DevComponents.DotNetBar.ButtonX();
            this.labelX3 = new DevComponents.DotNetBar.LabelX();
            this.textBoxX1 = new DevComponents.DotNetBar.Controls.TextBoxX();
            this.textBoxX2 = new DevComponents.DotNetBar.Controls.TextBoxX();
            this.labelX2 = new DevComponents.DotNetBar.LabelX();
            this.superTabItem1 = new DevComponents.DotNetBar.SuperTabItem();
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).BeginInit();
            this.splitContainer1.Panel1.SuspendLayout();
            this.splitContainer1.Panel2.SuspendLayout();
            this.splitContainer1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.superTabControl1)).BeginInit();
            this.superTabControl1.SuspendLayout();
            this.superTabControlPanel2.SuspendLayout();
            this.superTabControlPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // splitContainer1
            // 
            this.splitContainer1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.splitContainer1.Location = new System.Drawing.Point(0, 0);
            this.splitContainer1.Name = "splitContainer1";
            // 
            // splitContainer1.Panel1
            // 
            this.splitContainer1.Panel1.Controls.Add(this.treeView1);
            // 
            // splitContainer1.Panel2
            // 
            this.splitContainer1.Panel2.Controls.Add(this.superTabControl1);
            this.splitContainer1.Size = new System.Drawing.Size(800, 450);
            this.splitContainer1.SplitterDistance = 149;
            this.splitContainer1.TabIndex = 0;
            // 
            // treeView1
            // 
            this.treeView1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.treeView1.ImageIndex = 1;
            this.treeView1.ImageList = this.imageList1;
            this.treeView1.Location = new System.Drawing.Point(0, 0);
            this.treeView1.Name = "treeView1";
            this.treeView1.SelectedImageIndex = 2;
            this.treeView1.Size = new System.Drawing.Size(149, 450);
            this.treeView1.TabIndex = 0;
            this.treeView1.Tag = "file";
            this.treeView1.MouseDoubleClick += new System.Windows.Forms.MouseEventHandler(this.TreeView1_MouseDoubleClick);
            // 
            // imageList1
            // 
            this.imageList1.ImageStream = ((System.Windows.Forms.ImageListStreamer)(resources.GetObject("imageList1.ImageStream")));
            this.imageList1.TransparentColor = System.Drawing.Color.Transparent;
            this.imageList1.Images.SetKeyName(0, "文件_gaitubao_33x33.png");
            this.imageList1.Images.SetKeyName(1, "文件 (1)_gaitubao_20x20.png");
            this.imageList1.Images.SetKeyName(2, "circle-圆圈_gaitubao_22x22.png");
            // 
            // superTabControl1
            // 
            // 
            // 
            // 
            // 
            // 
            // 
            this.superTabControl1.ControlBox.CloseBox.Name = "";
            // 
            // 
            // 
            this.superTabControl1.ControlBox.MenuBox.Name = "";
            this.superTabControl1.ControlBox.Name = "";
            this.superTabControl1.ControlBox.SubItems.AddRange(new DevComponents.DotNetBar.BaseItem[] {
            this.superTabControl1.ControlBox.MenuBox,
            this.superTabControl1.ControlBox.CloseBox});
            this.superTabControl1.Controls.Add(this.superTabControlPanel1);
            this.superTabControl1.Controls.Add(this.superTabControlPanel2);
            this.superTabControl1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.superTabControl1.Location = new System.Drawing.Point(0, 0);
            this.superTabControl1.Name = "superTabControl1";
            this.superTabControl1.ReorderTabsEnabled = true;
            this.superTabControl1.SelectedTabFont = new System.Drawing.Font("宋体", 9F, System.Drawing.FontStyle.Bold);
            this.superTabControl1.SelectedTabIndex = 0;
            this.superTabControl1.Size = new System.Drawing.Size(647, 450);
            this.superTabControl1.TabFont = new System.Drawing.Font("宋体", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.superTabControl1.TabIndex = 0;
            this.superTabControl1.Tabs.AddRange(new DevComponents.DotNetBar.BaseItem[] {
            this.superTabItem1,
            this.superTabItem2});
            this.superTabControl1.Text = "superTabControl1";
            // 
            // superTabControlPanel2
            // 
            this.superTabControlPanel2.Controls.Add(this.buttonX3);
            this.superTabControlPanel2.Controls.Add(this.labelX4);
            this.superTabControlPanel2.Controls.Add(this.buttonX4);
            this.superTabControlPanel2.Controls.Add(this.labelX5);
            this.superTabControlPanel2.Controls.Add(this.textBoxX3);
            this.superTabControlPanel2.Controls.Add(this.textBoxX4);
            this.superTabControlPanel2.Controls.Add(this.richTextBoxEx2);
            this.superTabControlPanel2.Controls.Add(this.labelX6);
            this.superTabControlPanel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.superTabControlPanel2.Location = new System.Drawing.Point(0, 28);
            this.superTabControlPanel2.Name = "superTabControlPanel2";
            this.superTabControlPanel2.Size = new System.Drawing.Size(647, 422);
            this.superTabControlPanel2.TabIndex = 0;
            this.superTabControlPanel2.TabItem = this.superTabItem2;
            // 
            // buttonX3
            // 
            this.buttonX3.AccessibleRole = System.Windows.Forms.AccessibleRole.PushButton;
            this.buttonX3.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.buttonX3.ColorTable = DevComponents.DotNetBar.eButtonColor.OrangeWithBackground;
            this.buttonX3.Location = new System.Drawing.Point(386, 344);
            this.buttonX3.Name = "buttonX3";
            this.buttonX3.Size = new System.Drawing.Size(75, 23);
            this.buttonX3.Style = DevComponents.DotNetBar.eDotNetBarStyle.StyleManagerControlled;
            this.buttonX3.TabIndex = 16;
            this.buttonX3.Text = "删除";
            this.buttonX3.Click += new System.EventHandler(this.ButtonX3_Click);
            // 
            // labelX4
            // 
            this.labelX4.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.labelX4.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.labelX4.Location = new System.Drawing.Point(186, 55);
            this.labelX4.Name = "labelX4";
            this.labelX4.Size = new System.Drawing.Size(75, 23);
            this.labelX4.TabIndex = 10;
            this.labelX4.Text = "编号";
            // 
            // buttonX4
            // 
            this.buttonX4.AccessibleRole = System.Windows.Forms.AccessibleRole.PushButton;
            this.buttonX4.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.buttonX4.ColorTable = DevComponents.DotNetBar.eButtonColor.OrangeWithBackground;
            this.buttonX4.Location = new System.Drawing.Point(278, 344);
            this.buttonX4.Name = "buttonX4";
            this.buttonX4.Size = new System.Drawing.Size(75, 23);
            this.buttonX4.Style = DevComponents.DotNetBar.eDotNetBarStyle.StyleManagerControlled;
            this.buttonX4.TabIndex = 15;
            this.buttonX4.Text = "修改";
            this.buttonX4.Click += new System.EventHandler(this.ButtonX4_Click);
            // 
            // labelX5
            // 
            this.labelX5.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.labelX5.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.labelX5.Location = new System.Drawing.Point(186, 234);
            this.labelX5.Name = "labelX5";
            this.labelX5.Size = new System.Drawing.Size(75, 23);
            this.labelX5.TabIndex = 12;
            this.labelX5.Text = "备注";
            // 
            // textBoxX3
            // 
            this.textBoxX3.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.textBoxX3.Border.Class = "TextBoxBorder";
            this.textBoxX3.Border.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.textBoxX3.Location = new System.Drawing.Point(278, 55);
            this.textBoxX3.Name = "textBoxX3";
            this.textBoxX3.Size = new System.Drawing.Size(177, 21);
            this.textBoxX3.TabIndex = 9;
            // 
            // textBoxX4
            // 
            this.textBoxX4.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.textBoxX4.Border.Class = "TextBoxBorder";
            this.textBoxX4.Border.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.textBoxX4.Location = new System.Drawing.Point(278, 123);
            this.textBoxX4.Name = "textBoxX4";
            this.textBoxX4.Size = new System.Drawing.Size(177, 21);
            this.textBoxX4.TabIndex = 13;
            // 
            // richTextBoxEx2
            // 
            this.richTextBoxEx2.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.richTextBoxEx2.BackgroundStyle.Class = "RichTextBoxBorder";
            this.richTextBoxEx2.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.richTextBoxEx2.Location = new System.Drawing.Point(278, 194);
            this.richTextBoxEx2.Name = "richTextBoxEx2";
            this.richTextBoxEx2.Size = new System.Drawing.Size(183, 100);
            this.richTextBoxEx2.TabIndex = 14;
            // 
            // labelX6
            // 
            this.labelX6.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.labelX6.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.labelX6.Location = new System.Drawing.Point(186, 122);
            this.labelX6.Name = "labelX6";
            this.labelX6.Size = new System.Drawing.Size(75, 23);
            this.labelX6.TabIndex = 11;
            this.labelX6.Text = "名称";
            // 
            // superTabItem2
            // 
            this.superTabItem2.AttachedControl = this.superTabControlPanel2;
            this.superTabItem2.GlobalItem = false;
            this.superTabItem2.Name = "superTabItem2";
            this.superTabItem2.Text = "修改";
            // 
            // superTabControlPanel1
            // 
            this.superTabControlPanel1.Controls.Add(this.richTextBoxEx1);
            this.superTabControlPanel1.Controls.Add(this.buttonX2);
            this.superTabControlPanel1.Controls.Add(this.labelX1);
            this.superTabControlPanel1.Controls.Add(this.buttonX1);
            this.superTabControlPanel1.Controls.Add(this.labelX3);
            this.superTabControlPanel1.Controls.Add(this.textBoxX1);
            this.superTabControlPanel1.Controls.Add(this.textBoxX2);
            this.superTabControlPanel1.Controls.Add(this.labelX2);
            this.superTabControlPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.superTabControlPanel1.Location = new System.Drawing.Point(0, 28);
            this.superTabControlPanel1.Name = "superTabControlPanel1";
            this.superTabControlPanel1.Size = new System.Drawing.Size(647, 422);
            this.superTabControlPanel1.TabIndex = 1;
            this.superTabControlPanel1.TabItem = this.superTabItem1;
            // 
            // richTextBoxEx1
            // 
            this.richTextBoxEx1.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.richTextBoxEx1.BackgroundStyle.Class = "RichTextBoxBorder";
            this.richTextBoxEx1.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.richTextBoxEx1.Location = new System.Drawing.Point(281, 211);
            this.richTextBoxEx1.Name = "richTextBoxEx1";
            this.richTextBoxEx1.Size = new System.Drawing.Size(183, 100);
            this.richTextBoxEx1.TabIndex = 15;
            // 
            // buttonX2
            // 
            this.buttonX2.AccessibleRole = System.Windows.Forms.AccessibleRole.PushButton;
            this.buttonX2.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.buttonX2.ColorTable = DevComponents.DotNetBar.eButtonColor.OrangeWithBackground;
            this.buttonX2.Location = new System.Drawing.Point(389, 353);
            this.buttonX2.Name = "buttonX2";
            this.buttonX2.Size = new System.Drawing.Size(75, 23);
            this.buttonX2.Style = DevComponents.DotNetBar.eDotNetBarStyle.StyleManagerControlled;
            this.buttonX2.TabIndex = 8;
            this.buttonX2.Text = "清空";
            this.buttonX2.Click += new System.EventHandler(this.ButtonX2_Click);
            // 
            // labelX1
            // 
            this.labelX1.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.labelX1.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.labelX1.Location = new System.Drawing.Point(189, 64);
            this.labelX1.Name = "labelX1";
            this.labelX1.Size = new System.Drawing.Size(75, 23);
            this.labelX1.TabIndex = 2;
            this.labelX1.Text = "编号";
            // 
            // buttonX1
            // 
            this.buttonX1.AccessibleRole = System.Windows.Forms.AccessibleRole.PushButton;
            this.buttonX1.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.buttonX1.ColorTable = DevComponents.DotNetBar.eButtonColor.OrangeWithBackground;
            this.buttonX1.Location = new System.Drawing.Point(281, 353);
            this.buttonX1.Name = "buttonX1";
            this.buttonX1.Size = new System.Drawing.Size(75, 23);
            this.buttonX1.Style = DevComponents.DotNetBar.eDotNetBarStyle.StyleManagerControlled;
            this.buttonX1.TabIndex = 7;
            this.buttonX1.Text = "添加";
            this.buttonX1.Click += new System.EventHandler(this.ButtonX1_Click);
            // 
            // labelX3
            // 
            this.labelX3.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.labelX3.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.labelX3.Location = new System.Drawing.Point(189, 243);
            this.labelX3.Name = "labelX3";
            this.labelX3.Size = new System.Drawing.Size(75, 23);
            this.labelX3.TabIndex = 4;
            this.labelX3.Text = "备注";
            // 
            // textBoxX1
            // 
            this.textBoxX1.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.textBoxX1.Border.Class = "TextBoxBorder";
            this.textBoxX1.Border.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.textBoxX1.Location = new System.Drawing.Point(281, 64);
            this.textBoxX1.Name = "textBoxX1";
            this.textBoxX1.Size = new System.Drawing.Size(177, 21);
            this.textBoxX1.TabIndex = 1;
            // 
            // textBoxX2
            // 
            this.textBoxX2.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.textBoxX2.Border.Class = "TextBoxBorder";
            this.textBoxX2.Border.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.textBoxX2.Location = new System.Drawing.Point(281, 132);
            this.textBoxX2.Name = "textBoxX2";
            this.textBoxX2.Size = new System.Drawing.Size(177, 21);
            this.textBoxX2.TabIndex = 5;
            // 
            // labelX2
            // 
            this.labelX2.Anchor = System.Windows.Forms.AnchorStyles.None;
            // 
            // 
            // 
            this.labelX2.BackgroundStyle.CornerType = DevComponents.DotNetBar.eCornerType.Square;
            this.labelX2.Location = new System.Drawing.Point(189, 131);
            this.labelX2.Name = "labelX2";
            this.labelX2.Size = new System.Drawing.Size(75, 23);
            this.labelX2.TabIndex = 3;
            this.labelX2.Text = "名称";
            // 
            // superTabItem1
            // 
            this.superTabItem1.AttachedControl = this.superTabControlPanel1;
            this.superTabItem1.GlobalItem = false;
            this.superTabItem1.Name = "superTabItem1";
            this.superTabItem1.Text = "添加";
            // 
            // Form6
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.splitContainer1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Form6";
            this.Text = "药品分类";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.Form6_Load);
            this.splitContainer1.Panel1.ResumeLayout(false);
            this.splitContainer1.Panel2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.splitContainer1)).EndInit();
            this.splitContainer1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.superTabControl1)).EndInit();
            this.superTabControl1.ResumeLayout(false);
            this.superTabControlPanel2.ResumeLayout(false);
            this.superTabControlPanel1.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.SplitContainer splitContainer1;
        private System.Windows.Forms.TreeView treeView1;
        private DevComponents.DotNetBar.SuperTabControl superTabControl1;
        private DevComponents.DotNetBar.SuperTabControlPanel superTabControlPanel1;
        private DevComponents.DotNetBar.SuperTabItem superTabItem1;
        private DevComponents.DotNetBar.SuperTabControlPanel superTabControlPanel2;
        private DevComponents.DotNetBar.SuperTabItem superTabItem2;
        private System.Windows.Forms.ImageList imageList1;
        private DevComponents.DotNetBar.ButtonX buttonX2;
        private DevComponents.DotNetBar.ButtonX buttonX1;
        private DevComponents.DotNetBar.Controls.TextBoxX textBoxX2;
        private DevComponents.DotNetBar.LabelX labelX3;
        private DevComponents.DotNetBar.LabelX labelX2;
        private DevComponents.DotNetBar.LabelX labelX1;
        private DevComponents.DotNetBar.Controls.TextBoxX textBoxX1;
        private DevComponents.DotNetBar.ButtonX buttonX3;
        private DevComponents.DotNetBar.LabelX labelX4;
        private DevComponents.DotNetBar.ButtonX buttonX4;
        private DevComponents.DotNetBar.LabelX labelX5;
        private DevComponents.DotNetBar.Controls.TextBoxX textBoxX3;
        private DevComponents.DotNetBar.Controls.TextBoxX textBoxX4;
        private DevComponents.DotNetBar.Controls.RichTextBoxEx richTextBoxEx2;
        private DevComponents.DotNetBar.LabelX labelX6;
        private DevComponents.DotNetBar.Controls.RichTextBoxEx richTextBoxEx1;
    }
}