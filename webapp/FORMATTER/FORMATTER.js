sap.ui.define([], function () {

	

	return {

		

		Status: function(oEvent) {

			

			if(oEvent === "A"){

				return "Available";

			}

			

			else {

				return "Not-Available";

			}

			

		},

		

		Weight:function(oEvent){

				if(oEvent <= "30"){

				return "Lightweight";

			}

			

			else {

				return "Heavyweight";

			}

			

			

			

		}

		

		

	};





	

});