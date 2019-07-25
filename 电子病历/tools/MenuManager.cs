using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace 电子病历.tools
{
    public class MenuManager
    {
        private List<Menu> menuList = new List<Menu>();

        public void add(Menu menu)
        {
            menuList.Add(menu);
        }

        public List<Menu> getMenuList()
        {
            return menuList;
        }

        public void setMenuList(List<Menu> menuList)
        {
            this.menuList = menuList;
        }
    }
}
