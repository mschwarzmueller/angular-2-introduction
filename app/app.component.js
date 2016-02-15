System.register(['angular2/core', "./firebase.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_firebaseService) {
                    this._firebaseService = _firebaseService;
                }
                AppComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this._firebaseService.setUser(form.value.firstName, form.value.lastName)
                        .subscribe(function (user) { return _this.response = JSON.stringify(user); }, function (error) { return console.log(error); });
                };
                AppComponent.prototype.onGetUser = function () {
                    var _this = this;
                    this._firebaseService.getUser()
                        .subscribe(function (user) { return _this.response = JSON.stringify(user); }, function (error) { return console.log(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"flex\">\n            <div id=\"set-user\" class=\"container\">\n                <h2>Set a user</h2>\n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                    <div>\n                        <label for=\"first-name\">First Name</label>\n                        <input type=\"text\" ngControl=\"firstName\">\n                    </div>\n                    <div>\n                        <label for=\"last-name\">Last Name</label>\n                        <input type=\"text\" ngControl=\"lastName\">\n                    </div>\n                    <button type=\"submit\">Submit</button>\n                </form>\n            </div>\n            <div id=\"get-user\" class=\"container\">\n                <h2>Get User</h2>\n            <button (click)=\"onGetUser()\">Get User</button>\n            </div>\n        </div>\n        <div class=\"container\" id=\"response\">Response: {{response}}</div>\n    ",
                        providers: [firebase_service_1.FirebaseService]
                    }), 
                    __metadata('design:paramtypes', [firebase_service_1.FirebaseService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uU3VibWl0IiwiQXBwQ29tcG9uZW50Lm9uR2V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBOEJJQSxzQkFBb0JBLGdCQUFnQ0E7b0JBQWhDQyxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWdCQTtnQkFDcERBLENBQUNBO2dCQUVERCwrQkFBUUEsR0FBUkEsVUFBU0EsSUFBaUJBO29CQUExQkUsaUJBTUNBO29CQUxHQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBO3lCQUNuRUEsU0FBU0EsQ0FDTkEsVUFBQUEsSUFBSUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBcENBLENBQW9DQSxFQUM1Q0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBbEJBLENBQWtCQSxDQUM5QkEsQ0FBQ0E7Z0JBQ1ZBLENBQUNBO2dCQUVERixnQ0FBU0EsR0FBVEE7b0JBQUFHLGlCQU1DQTtvQkFMR0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxPQUFPQSxFQUFFQTt5QkFDMUJBLFNBQVNBLENBQ05BLFVBQUFBLElBQUlBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEVBQXBDQSxDQUFvQ0EsRUFDNUNBLFVBQUFBLEtBQUtBLElBQUlBLE9BQUFBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLEVBQWxCQSxDQUFrQkEsQ0FDOUJBLENBQUNBO2dCQUNWQSxDQUFDQTtnQkEvQ0xIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsUUFBUUEsRUFBRUEsODdCQXNCVEE7d0JBQ0RBLFNBQVNBLEVBQUVBLENBQUNBLGtDQUFlQSxDQUFDQTtxQkFDL0JBLENBQUNBOztpQ0FzQkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FoREEsQUFnRENBLElBQUE7WUFoREQsdUNBZ0RDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udHJvbEdyb3VwfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSBcIi4vZmlyZWJhc2Uuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZXQtdXNlclwiIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPlNldCBhIHVzZXI8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdChmKVwiICNmPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3QtbmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3QtbmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuZ0NvbnRyb2w9XCJsYXN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZ2V0LXVzZXJcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5HZXQgVXNlcjwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkdldFVzZXIoKVwiPkdldCBVc2VyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cInJlc3BvbnNlXCI+UmVzcG9uc2U6IHt7cmVzcG9uc2V9fTwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbRmlyZWJhc2VTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHJlc3BvbnNlOnN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZpcmViYXNlU2VydmljZTpGaXJlYmFzZVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBvblN1Ym1pdChmb3JtOkNvbnRyb2xHcm91cCkge1xuICAgICAgICB0aGlzLl9maXJlYmFzZVNlcnZpY2Uuc2V0VXNlcihmb3JtLnZhbHVlLmZpcnN0TmFtZSwgZm9ybS52YWx1ZS5sYXN0TmFtZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgdXNlciA9PiB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkodXNlciksXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uR2V0VXNlcigpIHtcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VTZXJ2aWNlLmdldFVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB1c2VyID0+IHRoaXMucmVzcG9uc2UgPSBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
