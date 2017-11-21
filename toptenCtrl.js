app.controller("toptenCtrl", function($scope){
    
  /*  //Actor Constractor
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

*/
$scope.toptens = [{
    mname:  "Chaos Walking",
    mhref: "http://www.imdb.com/title/tt2076822/?ref_=nm_flmg_act_1",
    mmail: "mike@mike.com"
},{
  mname: "dkhgvk.",
  mhref:">KSDBJVK>"
}
]
  
});