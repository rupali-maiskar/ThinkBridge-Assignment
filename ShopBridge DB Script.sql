USE [ShopBridge]
GO
/****** Object:  Table [dbo].[Component]    Script Date: 26-11-2020 18:17:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Component](
	[ComponentId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Description] [varchar](max) NULL,
	[Price] [decimal](18, 2) NULL,
	[Image] [varbinary](max) NULL,
	[IsDeleted] [bit] NOT NULL CONSTRAINT [DF_Component_IsDeleted]  DEFAULT ((0)),
	[CreatedBy] [int] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedOn] [datetime] NULL,
 CONSTRAINT [PK_Component] PRIMARY KEY CLUSTERED 
(
	[ComponentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Inventory]    Script Date: 26-11-2020 18:17:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Inventory](
	[InventoryId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[IsDeleted] [bit] NOT NULL CONSTRAINT [DF_Inventory_IsDeleted]  DEFAULT ((0)),
	[CreatedBy] [int] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[UpdatedBy] [int] NULL,
	[UpdatedOn] [datetime] NULL,
 CONSTRAINT [PK_Inventory] PRIMARY KEY CLUSTERED 
(
	[InventoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[uspAddUpdateItem]    Script Date: 26-11-2020 18:17:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspAddUpdateItem] @ComponentID INT = NULL
	,@Name VARCHAR(50) = NULL
	,@Description VARCHAR(200) = NULL
	,@Price Decimal = NULL
	,@Image VARBINARY(max) = NULL
	,@IsDeleted BIT = NULL
	,@CreatedBy INT = NULL
	,@UpdatedBy INT = NULL
	
	
AS
BEGIN
	
	BEGIN
		IF (@ComponentID = 0)
		BEGIN
			INSERT INTO Component (
			    Name
			    ,Description
			    ,Price
				,Image
				,IsDeleted
				,CreatedBy
				,CreatedOn
				)
			VALUES (
			    @Name
			    ,@Description
			    ,@Price
			    ,@Image
				,0
				,@CreatedBy
				,GETDATE()
				)
		END
		ELSE
		BEGIN
			UPDATE Component
			SET 
				Name = @Name
				,Description = @Description
				,Price = @Price
				,Image = @Image
				,IsDeleted = 0
				,UpdatedBy = @UpdatedBy
				,UpdatedOn = GETDATE()
			WHERE ComponentId = @ComponentID
		END
		
	END
END

GO
/****** Object:  StoredProcedure [dbo].[uspGetComponent]    Script Date: 26-11-2020 18:17:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetComponent] @ComponentID INT = NULL
AS
BEGIN
	IF @ComponentID > 0
	BEGIN
		SELECT *
		FROM  Component
		WHERE ComponentId = @ComponentID and Isdeleted = 0

	END
	ELSE
	BEGIN
		SELECT *
		FROM Component 
		where Isdeleted = 0
	END
END


GO
