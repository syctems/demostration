using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using System.Windows.Forms;
using System.Xml;

namespace 电子病历.tools
{
    class Tool
    {
        private static string path = Application.StartupPath + "../../../config/apiSet.xml";
        public static string CreatePostHttpResponse(string url, string postDataStr)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "POST";
            request.ContentType = "application/json";
            request.ServicePoint.Expect100Continue = false;
            Stream myRequestStream = request.GetRequestStream();
            StreamWriter myStreamWriter =
                new StreamWriter(myRequestStream, Encoding.GetEncoding("utf-8"));

            myStreamWriter.Write(postDataStr);
            myStreamWriter.Close();

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            Stream myResponseStream = response.GetResponseStream();
            StreamReader myStreamReader =
                new StreamReader(myResponseStream, Encoding.GetEncoding("utf-8"));
            string retString = myStreamReader.ReadToEnd();
            myStreamReader.Close();
            myResponseStream.Close();
            return retString;
        }

        public static string stringToJSON(string tmp)
        {
            StringBuilder info = new StringBuilder();
            for (int i = 0; i < tmp.Length; i++)
            {
                char t = tmp[i];
                switch (t)
                {
                    case '"':
                        info.Append("\"");
                        break;
                    case '\\':
                        info.Append("\\\\");
                        break;
                    case '/':
                        info.Append("\\/");
                        break;
                    case '\b':
                        info.Append("\\b");
                        break;
                    case '\f':
                        info.Append("\\f");
                        break;
                    case '\n':
                        info.Append("\\n");
                        break;
                    case '\r':
                        info.Append("\\r");
                        break;
                    case '\t':
                        info.Append("\\t");
                        break;
                    default:
                        info.Append(t);
                        break;
                }
            }
            return info.ToString();
        }

        public static string GetXMLInformation(string TagName,int index)
        {
            string value = null;
            XmlDocument myXmlDoc = new XmlDocument();
            myXmlDoc.Load(path);
            XmlElement tableElement = (XmlElement)myXmlDoc.SelectSingleNode("api").ChildNodes[index];
            value = tableElement.GetElementsByTagName(TagName)[0].InnerText;                  
            return value;
        }

        public static string GetXMLInt(string TagName)
        {
            string value = "";
            XmlDocument myXmlDoc = new XmlDocument();
            myXmlDoc.Load(path);
            XmlNode tableElements = myXmlDoc.SelectSingleNode("api");
            foreach (XmlElement n in tableElements)
            {
                if (n.GetElementsByTagName("currentName")[0].InnerText == TagName)
                {
                    value = n.GetElementsByTagName("number")[0].InnerText.ToString();
                }                   
            }
            return value;
        }
        public static string getListApi(int index)
        {
            return GetXMLInformation("serverIP", index) + "/"+ GetXMLInformation("currentClass", index) + "/" + GetXMLInformation("listAction", index);
        }

        public static string getAddApi(int index)
        {
            return GetXMLInformation("serverIP", index) + "/" + GetXMLInformation("currentClass", index) + "/" + GetXMLInformation("addAction", index);
        }

        public static string getUpdateApi(int index)
        {
            return GetXMLInformation("serverIP", index) + "/" + GetXMLInformation("currentClass", index) + "/" + GetXMLInformation("updateAction", index);
        }

        public static string getDetailApi(int index)
        {
            return GetXMLInformation("serverIP", index) + "/" + GetXMLInformation("currentClass", index) + "/" + GetXMLInformation("detailAction", index);
        }

        public static string getDeleteApi(int index)
        {
            return GetXMLInformation("serverIP", index) + "/" + GetXMLInformation("currentClass", index) + "/" + GetXMLInformation("deleteAction", index);
        }

        public static JObject removeObjId(object o)
        {
            JObject obj = JObject.FromObject(o);
            obj.Remove("id");
            return obj;
        }

        public static JObject changeObjField(object o ,string keyField,string changeField)
        {
            JObject obj = removeObjId(o);
            if (obj.ContainsKey(keyField))
            {
                obj[changeField] = obj[keyField];
                obj.Remove(keyField);
            }
            return obj;
        }

        public static JObject changeObjField2(object o, string keyField, string changeField)
        {
            JObject obj = JObject.FromObject(o);
            if (obj.ContainsKey(keyField))
            {
                obj[changeField] = obj[keyField];
                obj.Remove(keyField);
            }
            return obj;
        }
    }
}
