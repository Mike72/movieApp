app.controller("movieCtrl", function($scope){

//Actor Constractor
function Actor(fname,lname,image){
    this.fname = fname;
    this.lname = lname;
    this.image = image;
}

$scope.actors = [new Actor("Daisy","Ridley","https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMDk3MjI4OF5BMl5BanBnXkFtZTgwMzQxMDY5NjE@._V1_UY317_CR20,0,214,317_AL_.jpg"),
                new Actor("John","Boyega","https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNTgzNTI1MF5BMl5BanBnXkFtZTgwMjc2OTM5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg"),
                new Actor("Mark","Hamill","https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3Njc5ODc4OV5BMl5BanBnXkFtZTYwNjY5MTU0._V1_UX214_CR0,0,214,317_AL_.jpg")


];

});