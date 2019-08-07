using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 电子病历.tools
{
    public class Menu
    {
        public string id;
        public string upId;
        public string caption;
        public string sn;
        public string note;
        public string bigTxt;

        public Menu(string id, string upid, string caption, string sn, string note)
        {
            this.id = id;
            this.upId = upid;
            this.caption = caption;
            this.sn = sn;
            this.note = note;
        }

        public Menu()
        {
        }

        public string getId()
        {
            return id;
        }
        public void setId(string id)
        {
            this.id = id;
        }
        public string getPid()
        {
            return upId;
        }
        public void setPid(string pid)
        {
            this.upId = pid;
        }
        public string getName()
        {
            return caption;
        }
        public void setName(string name)
        {
            this.caption = name;
        }

        public string getCategoryNo()
        {
            return sn;
        }
        public void setCategoryNo(string name)
        {
            this.sn = name;
        }

        public string getNote()
        {
            return note;
        }
        public void setNote(string name)
        {
            this.note = name;
        }
    }

}
