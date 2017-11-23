app.controller("toptenCtrl", function ($scope, $log, $http, convert) {

  //Movie Constractor
  function Movie(mname, mhref, mmail, time) {
    this.mname = mname;
    this.mhref = mhref;
    this.mmail = mmail;
    this.time = time;
    this.timeConv = convert.hours(time);

  }
  $scope.movies = [];

  $http.get("movies.json").then(function mySuccess(response) {
    for (var i = 0; i < response.data.length; i++) {
      $scope.movies.push(new Movie(
        response.data[i].mname,
        response.data[i].mhref,
        response.data[i].mmail,
        response.data[i].time
      ))
    }
    //alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })


  /* $scope.toptens = [{
     mname: "Chaos Walking",
     mhref: "http://www.imdb.com/title/tt2076822/?ref_=nm_flmg_act_1",
     mmail: "mike@mike.com",
     time: 129
   },
   {
     mname: "dkhgvk.",
     mhref: ">KSDBJVK>",
     mmail: "star@wars.com",
     time: 159
   }
   ]*/

});