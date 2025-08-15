function  resultReport( marks ) {
          if (!Array.isArray(marks))
          {
             return "Invalid";
          }


          if (marks.length === 0)
        {
            return { finalScore: 0, pass: 0, fail: 0 };

        }

        let total = 0;
        let passCount = 0;
        let failCount = 0;

        for (let i = 0; i < marks.length; i++)
        {
            let score = marks[i];
            total += score;

            if (score >= 40)
            {
                passCount++;
            }
            else{
                failCount++;
            }
        }

        let avg = Math.round(total / marks.length);
        return {
            finalScore: avg,
            pass: passCount,
            fail: failCount
        };
}


// console.log(resultReport([]));
// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
// console.log(resultReport([99, 87, 67, 12 ,87]));
// console.log(resultReport([99]));
// console.log(resultReport(100));