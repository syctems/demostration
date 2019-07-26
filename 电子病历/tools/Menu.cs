using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 电子病历.tools
{
    public class Menu
    {
        private String id;
        private String parentId;
        private String categoryName;
        private String categoryNo;
        private String note;

        public Menu(String id, String parentId, String categoryName, String categoryNo, String note)
        {
            this.id = id;
            this.parentId = parentId;
            this.categoryName = categoryName;
            this.categoryNo = categoryNo;
            this.note = note;
        }
        public String getId()
        {
            return id;
        }
        public void setId(String id)
        {
            this.id = id;
        }
        public String getPid()
        {
            return parentId;
        }
        public void setPid(String pid)
        {
            this.parentId = pid;
        }
        public String getName()
        {
            return categoryName;
        }
        public void setName(String name)
        {
            this.categoryName = name;
        }

        public String getCategoryNo()
        {
            return categoryNo;
        }
        public void setCategoryNo(String name)
        {
            this.categoryNo = name;
        }

        public String getNote()
        {
            return note;
        }
        public void setNote(String name)
        {
            this.note = name;
        }
    }

}
