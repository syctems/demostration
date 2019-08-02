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
using Menu = 电子病历.tools.Menu;

namespace 电子病历
{
    public partial class Form6 : Office2007Form
    {
        private List<Menu> menuList;
        private Menu menuObj;
        public Form6()
        {
            InitializeComponent();
        }

        private void Form6_Load(object sender, EventArgs e)
        {
            init();
        }

        private void init()
        {
            treeView1.Nodes.Clear();
            menuList = JsonConvert.DeserializeObject<List<Menu>>(Tool.CreatePostHttpResponse("http://10.0.253.9:9999/pppp/medical/allnodes", "{}"));
            getMenu(menuList);
        }

        private void getMenu(List<Menu> menuList)
        {
            for (int i = 0; i < menuList.Count(); i++)
            {               
                Menu menu = menuList[i];
                TreeNode rootNode = treeView1.Nodes.Add(menu.getName());
                rootNode.ImageIndex = 0;
                if (menu.getPid() == "0")
                {
                    getChildMenu(menu, menuList,rootNode);
                    break;
                }
            }
        }

        private void getChildMenu(Menu parentMenu, List<Menu> menuList,TreeNode node)
        {
            for (int i = 0; i < menuList.Count(); i++)
            {
                Menu menu = menuList[i];
                if (menu.getPid() == parentMenu.getId())
                {
                    TreeNode childNode = new TreeNode(menu.getName());
                    node.Nodes.Add(childNode);
                    node.ImageIndex = 0;
                    node.Tag = "folder";
                    getChildMenu(menu, menuList,childNode);
                }
            }
        }

        private void ButtonX1_Click(object sender, EventArgs e)
        {
            medicalAdd();
            init();
        }

        private void TreeView1_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            TreeNode tn = treeView1.SelectedNode;
            menuObj = getMenuListObj(tn.Text);
            displayFolderPage(tn);
        }

        private void displayFolderPage(TreeNode tn)
        {
            superTabControl1.SelectedTabIndex = 1;
            Menu menuObj = getMenuListObj(tn.Text);
            textBoxX3.Text = menuObj.getCategoryNo();
            textBoxX4.Text = menuObj.getName();
            richTextBoxEx2.Text = menuObj.getNote();
        }

        private Menu getMenuListObj(string text)
        {
            foreach (Menu m in menuList)
            {
                if (m.getName() == text)
                    return m;
            }
            return null;
        }

        private bool checkNode()
        {
            if (menuObj == null)
            {
                MessageBox.Show("请在左边选择修改对象，然后在进行修改");
                return false; 
            }               
            return true;
        }

        private void medicalAdd()
        {
            TreeNode tn = treeView1.SelectedNode;
            menuObj = getMenuListObj(tn.Text);
            Menu obj = new Menu()
            {
                id = menuObj.id,
                parentId = menuObj.id,
                categoryName = textBoxX2.Text,
                categoryNo = textBoxX1.Text,
                note = richTextBoxEx1.Text
            };
            string jsonData = Tool.changeObjField(obj, "note", "bigTxt").ToString();
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse("http://10.0.253.9:9999/pppp/medical/save", jsonData));
            if (urlData["flag"].ToString() == "1")
                MessageBox.Show("添加成功");
            else
                MessageBox.Show("添加失败");
        }

        private void ButtonX4_Click(object sender, EventArgs e)
        {
            updateMedical();
            init();
        }

        private void updateMedical()
        {
            TreeNode tn = treeView1.SelectedNode;
            menuObj = getMenuListObj(tn.Text);
            Menu obj = new Menu()
            {
                id = menuObj.id,
                parentId = menuObj.parentId,
                categoryName = textBoxX4.Text,
                categoryNo = textBoxX3.Text,
                note = richTextBoxEx2.Text
            };
            string jsonData = Tool.changeObjField2(obj,"note","bigTxt").ToString();
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse("http://10.0.253.9:9999/pppp/medical/updateCategory", jsonData));
            if (urlData["flag"].ToString() == "1")
                MessageBox.Show("修改成功");
            else
                MessageBox.Show("修改失败");
        }

        private void deleteMedical()
        {
            TreeNode tn = treeView1.SelectedNode;
            menuObj = getMenuListObj(tn.Text);
            JObject urlData = JObject.Parse(Tool.CreatePostHttpResponse("http://10.0.253.9:9999/pppp/medical/delete", "{\"id\": \"" + menuObj.id + "\"}"));
            if (urlData["flag"].ToString() == "1")
                MessageBox.Show("删除成功");
            else
                MessageBox.Show("删除失败");
        }

        private void ButtonX3_Click(object sender, EventArgs e)
        {
            deleteMedical();
            init();
        }

        private void ButtonX2_Click(object sender, EventArgs e)
        {
            textBoxX1.Text = "";
            textBoxX2.Text = "";
            richTextBoxEx1.Clear();
        }
    }
}
