/*if (1 > 2) {
    largest = 1;
} else if (2 > 1) {
    largest = 2;
} else {
    largest = "Both numbers are equal.";
}


alert("The largest integer is: " + largest);*/



/*let num1 = 3;
let num2 = -7;
let num3 = 2;

let product = num1 * num2 * num3;

if (product > 0) {
    alert("The sign is +");
} else if (product < 0) {
    alert("The sign is -");
} else {
    alert("The product is 0");
}
*/




/*let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;


let largest = a;


if (b > largest) {
    largest = b;
}
if (c > largest) {
    largest = c;
}
if (d > largest) {
    largest = d;
}
if (e > largest) {
    largest = e;
}


alert("The largest number is: " + largest);*/







/*for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}*/






/*const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
];


function calculateAverage(students) {
    let totalMarks = 0;
    for (const student of students) {
        totalMarks += student.marks;
    }
    return totalMarks / students.length;
}


function determineGrade(averageMarks) {
    if (averageMarks < 60) {
        return 'F';
    } else if (averageMarks < 70) {
        return 'D';
    } else if (averageMarks < 80) {
        return 'C';
    } else if (averageMarks < 90) {
        return 'B';
    } else {
        return 'A';
    }
}*/





/*for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }*/



    /*function isHappyNumber(num) {
        let seen = new Set();
        
        while (num !== 1 && !seen.has(num)) {
            seen.add(num);
            num = sumOfSquares(num);
        }
        
        return num === 1;
    }
    
    function sumOfSquares(num) {
        let sum = 0;
        
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        
        return sum;
    }
    
    function findHappyNumbers(count) {
        let happyNumbers = [];
        let num = 1;
        
        while (happyNumbers.length < count) {
            if (isHappyNumber(num)) {
                happyNumbers.push(num);
            }
            num++;
        }
        
        return happyNumbers;
    }
    
    const first5HappyNumbers = findHappyNumbers(5);
    console.log("The first 5 happy numbers are:", first5HappyNumbers);


const averageMarks = calculateAverage(students);


const grade = (averageMarks);

console.log(averageMarks)*/



