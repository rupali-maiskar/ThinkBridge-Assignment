﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ShopBridgeAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class ShopBridgeEntities : DbContext
    {
        public ShopBridgeEntities()
            : base("name=ShopBridgeEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Component> Components { get; set; }
        public virtual DbSet<Inventory> Inventories { get; set; }
        public virtual DbSet<InventoryComponentMapping> InventoryComponentMappings { get; set; }
    
        public virtual ObjectResult<uspGetComponent_Result> uspGetComponent(Nullable<int> componentID)
        {
            var componentIDParameter = componentID.HasValue ?
                new ObjectParameter("ComponentID", componentID) :
                new ObjectParameter("ComponentID", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<uspGetComponent_Result>("uspGetComponent", componentIDParameter);
        }
    
        public virtual int uspAddUpdateItem(Nullable<int> componentID, string name, string description, Nullable<decimal> price, byte[] image, Nullable<bool> isDeleted, Nullable<int> createdBy, Nullable<int> updatedBy)
        {
            var componentIDParameter = componentID.HasValue ?
                new ObjectParameter("ComponentID", componentID) :
                new ObjectParameter("ComponentID", typeof(int));
    
            var nameParameter = name != null ?
                new ObjectParameter("Name", name) :
                new ObjectParameter("Name", typeof(string));
    
            var descriptionParameter = description != null ?
                new ObjectParameter("Description", description) :
                new ObjectParameter("Description", typeof(string));
    
            var priceParameter = price.HasValue ?
                new ObjectParameter("Price", price) :
                new ObjectParameter("Price", typeof(decimal));
    
            var imageParameter = image != null ?
                new ObjectParameter("Image", image) :
                new ObjectParameter("Image", typeof(byte[]));
    
            var isDeletedParameter = isDeleted.HasValue ?
                new ObjectParameter("IsDeleted", isDeleted) :
                new ObjectParameter("IsDeleted", typeof(bool));
    
            var createdByParameter = createdBy.HasValue ?
                new ObjectParameter("CreatedBy", createdBy) :
                new ObjectParameter("CreatedBy", typeof(int));
    
            var updatedByParameter = updatedBy.HasValue ?
                new ObjectParameter("UpdatedBy", updatedBy) :
                new ObjectParameter("UpdatedBy", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("uspAddUpdateItem", componentIDParameter, nameParameter, descriptionParameter, priceParameter, imageParameter, isDeletedParameter, createdByParameter, updatedByParameter);
        }
    }
}
