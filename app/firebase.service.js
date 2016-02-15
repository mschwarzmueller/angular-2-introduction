System.register(['angular2/core', "angular2/http", 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var FirebaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            FirebaseService = (function () {
                function FirebaseService(_http) {
                    this._http = _http;
                }
                FirebaseService.prototype.setUser = function (firstName, lastName) {
                    var body = JSON.stringify({ firstName: firstName, lastName: lastName });
                    return this._http.put('https://vivid-heat-6188.firebaseIO.com/user.json', body)
                        .map(function (response) { return response.json(); });
                };
                FirebaseService.prototype.getUser = function () {
                    return this._http.get('https://vivid-heat-6188.firebaseIO.com/user.json')
                        .map(function (response) { return response.json(); });
                };
                FirebaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FirebaseService);
                return FirebaseService;
            })();
            exports_1("FirebaseService", FirebaseService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiRmlyZWJhc2VTZXJ2aWNlIiwiRmlyZWJhc2VTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiRmlyZWJhc2VTZXJ2aWNlLnNldFVzZXIiLCJGaXJlYmFzZVNlcnZpY2UuZ2V0VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJQSx5QkFBb0JBLEtBQVdBO29CQUFYQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFNQTtnQkFBR0EsQ0FBQ0E7Z0JBRW5DRCxpQ0FBT0EsR0FBUEEsVUFBUUEsU0FBaUJBLEVBQUVBLFFBQWdCQTtvQkFDdkNFLElBQU1BLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEVBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLFFBQVFBLEVBQUVBLFFBQVFBLEVBQUNBLENBQUNBLENBQUNBO29CQUN4RUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0RBQWtEQSxFQUFFQSxJQUFJQSxDQUFDQTt5QkFDMUVBLEdBQUdBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBRURGLGlDQUFPQSxHQUFQQTtvQkFDSUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0RBQWtEQSxDQUFDQTt5QkFDeEVBLEdBQUdBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO2dCQUN0Q0EsQ0FBQ0E7Z0JBZExIO29CQUFDQSxpQkFBVUEsRUFBRUE7O29DQWVaQTtnQkFBREEsc0JBQUNBO1lBQURBLENBZkEsQUFlQ0EsSUFBQTtZQWZELDZDQWVDLENBQUEiLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQge2xhc3R9IGZyb20gXCJyeGpzL29wZXJhdG9yL2xhc3RcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICAgIHNldFVzZXIoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtmaXJzdE5hbWU6IGZpcnN0TmFtZSwgbGFzdE5hbWU6IGxhc3ROYW1lfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnB1dCgnaHR0cHM6Ly92aXZpZC1oZWF0LTYxODguZmlyZWJhc2VJTy5jb20vdXNlci5qc29uJywgYm9keSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHBzOi8vdml2aWQtaGVhdC02MTg4LmZpcmViYXNlSU8uY29tL3VzZXIuanNvbicpXG4gICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
