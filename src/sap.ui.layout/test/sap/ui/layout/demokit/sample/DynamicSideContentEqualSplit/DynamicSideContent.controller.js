sap.ui.define(['jquery.sap.global', 'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
	function(jQuery, Controller, JSONModel) {
	"use strict";

	var DynamicSideContent = Controller.extend("sap.ui.layout.sample.DynamicSideContentEqualSplit.DynamicSideContent", {
		onInit : function (oEvent) {
			// set explored app's demo model on this sample
			var oImgModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/img.json"));
			this.getView().setModel(oImgModel, "img");
		},
		onAfterRendering: function (oEvent) {
			// Get the initial breakpoint here.
			this.updateToggleButtonState();
		},
		handleSliderChange: function (oEvent) {
			var iValue = oEvent.getParameter("value");
			this.updateControlWidth(iValue);
		},
		updateControlWidth: function (iValue) {
			var $DSCContainer = this.getView().byId("sideContentContainer").$();
			if (iValue) {
				$DSCContainer.width(iValue + "%");
				this.updateToggleButtonState();
			}
		},
		updateToggleButtonState: function () {
			var oToggleButton = this.getView().byId("equalSplitToggleButton"),
				oDSC = this.getView().byId("DynamicSideContent");

			if (oDSC.getCurrentBreakpoint() === "S") {
				oToggleButton.setEnabled(true);
			} else {
				oToggleButton.setEnabled(false);
			}
		},
		handleToggleClick: function (oEvent) {
			this.getView().byId("DynamicSideContent").toggle();
		}
	});

	return DynamicSideContent;

});
