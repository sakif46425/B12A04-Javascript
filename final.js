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






// Problem-03 : FIFA Best Team Award 

function  bestTeam( player1, player2 ) {
          if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) 
        {
            return "Invalid";

        }  

        let team1Total = player1.foul + player1.cardY + player1.cardR;
        let team2Total = player2.foul + player2.cardY
        + player2.cardR;

        if (team1Total < team2Total)
        {
            return player1.name;
        }
        else if (team2Total < team1Total)
        {
            return player2.name;
        }
        else
        {
            return "Tie";
        }
}







//Problem-04: Same Same But Different

function  isSame(arr1 , arr2 ) {
          
    if (!Array.isArray(arr1) || !Array.isArray(arr2))
    {
        return Invalid;
    }

    if (arr1.length !== arr2.length)
    {
        return false;
    }

    for (let i = 0; i < arr1.length; i++)
    {
        if (arr1[i] !== arr2[i])
        {
            return false;
        }
    }

    return true;

}








//Problem-05: Exam Result Report Generator











