using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using ShopBridgeAPI.Models;
using System.Web.Http.Cors;
using System.Web.Http;

namespace ShopBridgeAPI.Controllers
{
    [System.Web.Http.Route("[controller]/[action]")]
    //[ApiController]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class ShopBridgeController : Controller
    {
        private readonly ShopBridgeEntities _context;
        public ShopBridgeController()
        {
            _context = new ShopBridgeEntities();
        }
        // GET: ShopBridge
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        [System.Web.Http.HttpGet]
        public async Task<JsonResult> GetComponents(int? componentId = null)
        {
            try
            {
                var listResult = await Task.FromResult(_context.uspGetComponent(componentId).AsQueryable().ToList());
                return Json(listResult,JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        [System.Web.Http.HttpPost]
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

        public async Task<bool> SaveItem([FromBody]uspGetComponent_Result objItem)
        {
            try
            {
                var result = await Task.FromResult(_context.uspAddUpdateItem(componentID: objItem.ComponentId, name: objItem.Name, description: objItem.Description,
                        price: objItem.Price, image: objItem.Image, 
                    isDeleted: objItem.IsDeleted, createdBy: objItem.CreatedBy, updatedBy: objItem.UpdatedBy));
                return result > 0;
            }
            catch(Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> RemoveItem(int itemId)
        {
            try
            {
                Component c = (from x in _context.Components
                              where x.ComponentId == itemId
                              select x).First();
                c.IsDeleted = true;
                int status = _context.SaveChanges();
                return status > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}