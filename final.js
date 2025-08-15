//Problem-01 : Train TT's Fine Calculator 

function totalFine( fare ) {
          if (typeof fare !== "number" || fare <= 0)
          {
            return "Invalid fare";
          }

          let fine = fare + fare * (20/100) + 30;
          return fine;

}






// Problem-02 : Clean & Capitalize Characters

function  onlyCharacter( str ) {
          if (typeof str !== "string" )
          {
            return "Invalid";
          }

          let result = str.replace(/\s+/g, "").toUpperCase();

          return result;
}











