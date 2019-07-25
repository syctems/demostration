using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 电子病历.tools
{
    public class Menu
    {
        private int id;
        private int pid;
        private String name;

        public Menu(int id, int pid, String name)
        {
            this.id = id;
            this.pid = pid;
            this.name = name;
        }
        public int getId()
        {
            return id;
        }
        public void setId(int id)
        {
            this.id = id;
        }
        public int getPid()
        {
            return pid;
        }
        public void setPid(int pid)
        {
            this.pid = pid;
        }
        public String getName()
        {
            return name;
        }
        public void setName(String name)
        {
            this.name = name;
        }
    }

}
