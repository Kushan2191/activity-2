
function fizzBuzzArray() {
    let result = [];
  
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
  
    return result;
  }
  console.log("Task 1 - FizzBuzz Array:", fizzBuzzArray());
  
  
 
  const scores = [85, 93, 78, 92, 88, 76, 95, 89];
  

  const passingScores = scores.filter(score => score >= 80);
  
  
  const boostedScores = passingScores.map(score => score + 5);
  

  const totalClassScore = boostedScores.reduce((total, score) => total + score, 0);
  
  console.log("Task 2 - Passing Scores:", passingScores);          
  console.log("Task 2 - Boosted Scores:", boostedScores);           
  console.log("Task 2 - Total Class Score:", totalClassScore);      
  
 
  function findMaxMin(numbers) {
    let max = numbers[0];
    let min = numbers[0];
  
    for (let num of numbers) {
      if (num > max) max = num;
      if (num < min) min = num;
    }
  
    return { max, min };
  }
  console.log("Task 3 - Max and Min in Array:", findMaxMin([10, 60, 25, 80, 45, 100]));  
  console.log("Task 3 - Max and Min in Array:", findMaxMin([5, 3, 8, 1, 9]));            
  
  
  
  function sortAndSum(numbers) {
  
    let sortedArray = [...numbers].sort((a, b) => a - b);
  
    
    let totalSum = sortedArray.reduce((total, num) => total + num, 0);
  
    return { sortedArray, totalSum };
  }
  console.log("Bonus Task - Sorted Array and Sum:", sortAndSum([10, 60, 25, 80, 45, 100]));  
  console.log("Bonus Task - Sorted Array and Sum:", sortAndSum([5, 3, 8, 1, 9]));           
  