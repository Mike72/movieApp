app.controller("movieCtrl", function($scope ,$http){

//Actor Constractor
function Actor(fname,lname,image,href){
    this.fname = fname;
    this.lname = lname;
    this.image = image;
    this.href = href;
}
$scope.actors = [];

  $http.get("actors.json").then(function mySuccess(response) {
    for (var i = 0; i < response.data.length; i++) {
      $scope.actors.push(new Actor(response.data[i].fname, response.data[i].lname, 
        response.data[i].image, response.data[i].href))  
    }
    //alert("success" + JSON.stringify(response.status));
  }, function myError(response) {
    alert("error" + JSON.stringify(response.status));
  })
/*$scope.actors = [new Actor("Daisy","Ridley","https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_UY317_CR20,0,214,317_AL_.jpg","http://www.imdb.com/name/nm5397459/?ref_=tt_ov_st_sm"),
                new Actor("John","Boyega","https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNTgzNTI1MF5BMl5BanBnXkFtZTgwMjc2OTM5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg","http://www.imdb.com/name/nm3915784/?ref_=tt_ov_st_sm"),
                new Actor("Mark","Hamill","https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3Njc5ODc4OV5BMl5BanBnXkFtZTYwNjY5MTU0._V1_UX214_CR0,0,214,317_AL_.jpg","http://www.imdb.com/name/nm0000434/?ref_=tt_ov_st_sm"),
                new Actor("Crystal","Clarke","https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2MDc1NTg2N15BMl5BanBnXkFtZTgwNjc3OTE1NzE@._V1_UY317_CR20,0,214,317_AL_.jpg","http://www.imdb.com/name/nm5402906/?ref_=ttfc_fc_cl_t34")


];*/
$scope.addActor = function() {
    $scope.actors.push(new Actor("Florian", "Robin","https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MDc3MTUyOV5BMl5BanBnXkFtZTcwNTg5NzcyOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg","http://www.imdb.com/name/nm1752567/?ref_=ttfc_fc_cl_t33"));
  }
  $scope.sortBy = function(prop) {
    $scope.orderProp = prop;
  }
});