using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace 电子病历.tools
{

    class Tree
    {
        public static String level = "";
        private List<Menu> menuList;
        public  void test()
        {
            MenuManager mm = new MenuManager();
            mm.add(new Menu(0, -1, "主控管理系统"));
            mm.add(new Menu(100, 0, "主控管理"));
            mm.add(new Menu(101, 0, "公共信息"));
            mm.add(new Menu(102, 0, "本单位管理"));
            mm.add(new Menu(103, 0, "下属管理"));
            mm.add(new Menu(104, 0, "部门管理"));
            mm.add(new Menu(105, 0, "职位管理"));
            mm.add(new Menu(10000, 104, "部门类别"));
            mm.add(new Menu(10001, 104, "部门信息"));
            menuList = mm.getMenuList();
            for (int i = 0; i < menuList.Count(); i++)
            {
                Menu menu = menuList[i];
                if (menu.getPid() == -1)
                {
                    Console.WriteLine(menu.getName());
                    showMenu(menu, menuList);
                    break;
                }
            }

        }



        public static void showMenu(Menu parentMenu, List<Menu> menuList)
        {
            level += "----";
            for (int i = 0; i < menuList.Count(); i++)
            {
                Menu menu = menuList[i];
                if (menu.getPid() == parentMenu.getId())
                {
                    Console.WriteLine(level + menu.getName());
                    showMenu(menu, menuList);
                }
            }
            level = level.Substring(0, level.Length - 4);
        }
    }
}
