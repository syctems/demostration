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
        public string parentId;
        public string categoryName;
        public string categoryNo;
        public string fullpath;
        public string note;

        public Menu(string id, string parentId, string categoryName, string categoryNo, string note,string fullpath)
        {
            this.id = id;
            this.parentId = parentId;
            this.categoryName = categoryName;
            this.categoryNo = categoryNo;
            this.note = note;
            this.fullpath = fullpath;
        }

        public Menu(string parentId, string categoryName, string categoryNo, string note, string fullpath)
        {
            this.parentId = parentId;
            this.categoryName = categoryName;
            this.categoryNo = categoryNo;
            this.note = note;
            this.fullpath = fullpath;
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
            return parentId;
        }
        public void setPid(string pid)
        {
            this.parentId = pid;
        }
        public string getName()
        {
            return categoryName;
        }
        public void setName(string name)
        {
            this.categoryName = name;
        }

        public string getCategoryNo()
        {
            return categoryNo;
        }
        public void setCategoryNo(string name)
        {
            this.categoryNo = name;
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
