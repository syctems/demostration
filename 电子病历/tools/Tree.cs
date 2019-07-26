using Open_Newtonsoft_Json;
using Open_Newtonsoft_Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
namespace 电子病历.tools
{

    class Tree
    {
        private List<Menu> menuList;
        private Form form;
        public void setMenuList(List<Menu> menuData)
        {
            this.menuList = menuData;
        }

        public void setForm(Form form)
        {
            this.form = form;
        }
        public  void test()
        {            
            for (int i = 0; i < menuList.Count(); i++)
            {
                Menu menu = menuList[i];
                if (menu.getPid() == "0")
                {
                    TreeNode rootNode = new TreeNode();
                    Console.WriteLine(menu.getName());
                    showMenu(menu, menuList);
                    break;
                }
            }

        }



        public static void showMenu(Menu parentMenu, List<Menu> menuList)
        {
            for (int i = 0; i < menuList.Count(); i++)
            {
                Menu menu = menuList[i];
                if (menu.getPid() == parentMenu.getId())
                {
                    Console.WriteLine(menu.getName());
                    showMenu(menu, menuList);
                }
            }
        }
    }
}
