sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onAddUserPress: function () {
            if (!this._oDialog) {
                this._oDialog = this.byId("addUserDialog");
            }
            this._oDialog.open();
        },

        onCancelDialog: function () {
            this.byId("addUserDialog").close();
        },

        onConfirmAddUser: function () {
            var oFirstName = this.byId("firstNameInput").getValue();
            var oLastName = this.byId("lastNameInput").getValue();
            var oPosition = this.byId("positionInput").getValue();
            var oModel = this.getView().getModel("Employees");
            var aEmployees = oModel.getProperty("/Employees");
            aEmployees.push({
                FirstName: oFirstName,
                LastName: oLastName,
                Position: oPosition
            });
            oModel.setProperty("/Employees", aEmployees);
            this.byId("addUserDialog").close();
        },

        onDialogClose: function () {
            this.byId("firstNameInput").setValue("");
            this.byId("lastNameInput").setValue("");
            this.byId("positionInput").setValue("");
        }
    });
});