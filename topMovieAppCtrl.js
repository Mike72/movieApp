myApp.controller("topMovieAppCtrl", function($scope ,$http){
    
    //Actor Constractor
    function Movie(mname,mhref){
        this.mname = mname;
        this.mhref = mhref;
    }
$scope.movies = [];

    $http.get("movies.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
          $scope.movies.push(new Movie(response.data[i].mname, response.data[i].mhref))  
        }
        //alert("success" + JSON.stringify(response.status));
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })








});