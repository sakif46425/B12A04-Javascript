//Problem-01 : Train TT's Fine Calculator 

function totalFine( fare ) {
          if (typeof fare !== "number" || fare <= 0)
          {
            return "Invalid fare";
          }

          let fine = fare + fare * (20/100) + 30;
          return fine;

}












