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
using Open_Newtonsoft_Json;
using 电子病历.tools;
using Menu = 电子病历.tools.Menu;

namespace 电子病历
{
    public partial class Form6 : Office2007Form
    {
        public Form6()
        {
            InitializeComponent();
        }

        private void Form6_Load(object sender, EventArgs e)
        {
             List<Menu> menuList = JsonConvert.DeserializeObject<List<Menu>>(Tool.CreatePostHttpResponse("http://10.0.253.9:9999/pppp/medical/allnodes", "{}"));
             getMenu(menuList);
        }

        private void getMenu(List<Menu> menuList)
        {
            for (int i = 0; i < menuList.Count(); i++)
            {               
                Menu menu = menuList[i];
                TreeNode rootNode = treeView1.Nodes.Add(menu.getName());
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

        }
    }
}
