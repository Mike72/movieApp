app.controller("movieCtrl", function($scope){

//Actor Constractor
function Actor(fname,lname,image,href){
    this.fname = fname;
    this.lname = lname;
    this.image = image;
    this.href = href;
}

$scope.actors = [new Actor("Daisy"," Ridley","https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_UY317_CR20,0,214,317_AL_.jpg","http://www.imdb.com/name/nm5397459/?ref_=tt_ov_st_sm"),
                new Actor("John"," Boyega","https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNTgzNTI1MF5BMl5BanBnXkFtZTgwMjc2OTM5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg","http://www.imdb.com/name/nm3915784/?ref_=tt_ov_st_sm"),
                new Actor("Mark"," Hamill","https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3Njc5ODc4OV5BMl5BanBnXkFtZTYwNjY5MTU0._V1_UX214_CR0,0,214,317_AL_.jpg","http://www.imdb.com/name/nm0000434/?ref_=tt_ov_st_sm")


];
$scope.addActor = function() {
    $scope.actors.push(new Actor("Florian", "Robin","https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MDc3MTUyOV5BMl5BanBnXkFtZTcwNTg5NzcyOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg","http://www.imdb.com/name/nm1752567/?ref_=ttfc_fc_cl_t33"));
  }
});