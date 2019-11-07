sap.ui.define([
	"sap/ui/core/mvc/Controller",

	"sap/ui/model/json/JSONModel",

	 "classes/assingment4/FORMATTER/FORMATTER"

], function (Controller, JSONModel, formatter ) {

	"use strict";


	return Controller.extend("classes.assingment4.controller.View1", {
		formatter:formatter,

		onInit: function () {

      var oModel = new JSONModel("model/products.json");

			this.getView().setModel(oModel); 

		},

		onAfterRendering:function(){

	

		this.getView().byId("idProductsTable").getItems().forEach(function(item,index){

		

				if(item.getCells()[3].getText() === "Available"){

					item.getCells()[3].addStyleClass("green");

				}

			//	else{

			//			item.getCells()[3].addStyleClass("red");

					

			//	}

			}); }

	});

});