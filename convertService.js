app.factory("convert", function(){

    function convertTime(time){
        return Math.round(time / 60);
    }
      
      return {
        /*km2Mile: convertKMToMile*/
       /* distance: convertDistance*/
       hours : convertTime
      }
});