using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using DCSoft.Writer.Dom;
using DevComponents.DotNetBar;
using Open_Newtonsoft_Json;
using Open_Newtonsoft_Json.Linq;
using 电子病历.objClass;
using 电子病历.tools;

namespace 电子病历
{
    public partial class Form4 : Office2007Form
    {

        private string path = Application.StartupPath + "../../../file/";
        private string currentTemplate = "";
        private string id = null;
        private List<commonClass> jsonData = null;
        private int xmlNumber = 0;

        public Form4()
        {
            InitializeComponent();
        }

        private void Form4_Load(object sender, EventArgs e)
        {
            var files = Directory.GetFiles(path, "*.xml");
            foreach (var v in files)
            {
                String t = v.Substring(v.LastIndexOf("/") + 1, (v.LastIndexOf(".") - v.LastIndexOf("/") - 1));
                treeView1.Nodes.Add(t);
            }
        }



        private void deleteData()
        {
            if (id == null)
            {
                MessageBox.Show("请选择病例，然后在进行删除");
                return;
            }
            int index = dataGridViewX1.CurrentRow.Index;
            id = dataGridViewX1.Rows[index].Cells[0].Value.ToString();
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse(Tool.getDeleteApi(this.xmlNumber), "{\"id\": \"" + id + "\"}"));
            id = null;
            if (urlData["status"].ToString() == "1")
                MessageBox.Show("删除成功");
            else
                MessageBox.Show("删除失败");
        }

        private void clearData()
        {
            foreach (PropertyInfo info in typeof(commonClass).GetProperties())
            {
                if (info.Name == "id")
                    continue;
                writerControl2.GetElementById(info.Name).Text = "";
                writerControl1.GetElementById(info.Name).Text = "";
            }
            id = null;
        }

        private void listData()
        {
            dataGridViewX1.Rows.Clear();
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse(Tool.getListApi(this.xmlNumber), "{\"pageSize\": \"" + 50 + "\"}"));
            List<commonClass> jsonData = JsonConvert.DeserializeObject<List<commonClass>>(urlData["data"].ToString());
            displayData(jsonData);
            return;
        }

        private void updateData()
        {
            if (id == null)
            {
                MessageBox.Show("请到病例列表选择病人病例，然后在进行修改");
                return;
            }
            XTextElementList xmlData = writerControl2.InputFields;
            Dictionary<string, string> data = getXMLData(xmlData);
            data.Add("id", id);
            string XMLJsonData = Tool.stringToJSON(JsonConvert.SerializeObject(data));

            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse(Tool.getUpdateApi(this.xmlNumber), XMLJsonData));
            if (urlData["status"].ToString() == "1")
                MessageBox.Show("修改成功");
            else
                MessageBox.Show("修改失败");
        }

        private void addData()
        {
            XTextElementList xmlData = writerControl1.InputFields;
            Dictionary<string, string> data = getXMLData(xmlData);
            string XMLJsonData = Tool.stringToJSON(JsonConvert.SerializeObject(data));
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse(Tool.getAddApi(this.xmlNumber), XMLJsonData));
            if (urlData["status"].ToString() == "1")
                MessageBox.Show("添加成功");
            else
                MessageBox.Show("添加失败");
            clearData();
        }

        private void detailData()
        {
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse(Tool.getDetailApi(this.xmlNumber), "{\"id\": \"" + id + "\"}"));
            commonClass detailData = JsonConvert.DeserializeObject<commonClass>(urlData["data"].ToString());
            superTabControl1.SelectedTabIndex = 2;
            foreach (PropertyInfo info in typeof(commonClass).GetProperties())
            {

                if (info.Name == "id")
                    continue;
                writerControl2.GetElementById(info.Name).Text = (info.GetValue(detailData, null) == null) ? "" : info.GetValue(detailData, null).ToString();
            }
        }
        private void displayData(List<commonClass> jsonData)
        {
            int index = 0;
            foreach (commonClass v in jsonData)
            {
                index = this.dataGridViewX1.Rows.Add();
                this.dataGridViewX1.Rows[index].Cells[0].Value = v.id;
                this.dataGridViewX1.Rows[index].Cells[1].Value = v.username;
                this.dataGridViewX1.Rows[index].Cells[2].Value = (v.sex == "2") ? "女" : "男";
                this.dataGridViewX1.Rows[index].Cells[3].Value = v.relationDoc;
                this.dataGridViewX1.Rows[index].Cells[4].Value = v.currentTime;
                index++;
            }
            return;
        }

        private Dictionary<string, string> getXMLData(XTextElementList xData)
        {
            Dictionary<string, string> data = new Dictionary<string, string>();
            foreach (XTextInputFieldElementBase v in xData)
            {
                data.Add(v.ID, v.InnerValue);
            }
            return data;
        }

        private void ToolStripButton3_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("确定添加?", "提示", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                addData();
                listData();
                foreach (PropertyInfo info in typeof(commonClass).GetProperties())
                {
                    if (info.Name == "id")
                        continue;
                    writerControl1.GetElementById(info.Name).Text = "";
                }
            }
        }

        private void ToolStripButton4_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("确定重置?", "提示", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                clearData();
            }
        }

        private void ToolStripButton2_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("确定删除?", "提示", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                deleteData();
                listData();
                clearData();
            }
        }

        private void ToolStripButton1_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("确定修改?", "提示", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                updateData();
                listData();
            }
        }

        private void TreeView1_NodeMouseDoubleClick(object sender, TreeNodeMouseClickEventArgs e)
        {
            string filename = path + e.Node.Text + ".xml";
            currentTemplate = e.Node.Text;
            this.xmlNumber = int.Parse(Tool.GetXMLInt(currentTemplate));
            this.writerControl2.LoadDocumentFromFile(filename, "xml");
            this.writerControl2.RefreshDocument();
            this.writerControl1.LoadDocumentFromFile(filename, "xml");
            this.writerControl1.RefreshDocument();
            if (Tool.GetXMLInformation("serverIP", xmlNumber) != "")
            {
                toolStrip1.Show();
                toolStrip2.Show();
                listData();
            }
            else
            {
                toolStrip1.Hide();
                toolStrip2.Hide();
                MessageBox.Show("后台数据接口还未完成，病例列表暂无数据，请耐心等待！");
            }
            superTabControl1.SelectedTabIndex = 1;
        }

        private void DataGridViewX1_CellMouseDoubleClick(object sender, DataGridViewCellMouseEventArgs e)
        {
            int index = dataGridViewX1.CurrentRow.Index;
            id = dataGridViewX1.Rows[index].Cells[0].Value.ToString();
            detailData();
        }
    }
}
