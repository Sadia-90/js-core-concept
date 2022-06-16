
// problem solving

// no. 1
// print all even numbers from 0 -10

// for (var i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         // console.log(i)
//     }
// }


//no. 2
//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 


// function posNeg(num1, num2) {
//     if (num1 > 0 && num2 < 0) {
//         console.log('correct input');
//     }
//     else {
//         console.log('incorrect input')
//     }
// }
// posNeg(3, 8)
// posNeg(3, -8)

// no. 3
//Calculate the sum of salaries within an array of object
// var persons = [
//     { name: 'karim', salary: 10000 },
//     { name: 'rahim', salary: 12000 },
//     { name: 'deloyar', salary: 2000 },
//     { name: 'babul', salary: 20000 },
// ];
// var sum = 0;
// for (var i = 0; i < persons.length; i++) {
//     sum = sum + persons[i].salary
// }
// console.log(sum);




// let x = 5;
// let y = 2;
// let z = x - y;
// console.log(z)


// +oparetor

// let x = 5;
// x++;
// let z = x;
// console.log(z);



// no. 5
// Write a JavaScript program to check whether a given integer is within 20 of 100
// function isPresent(number) {
//     for (var i = 20; i < 100; i++) {
//         if (i == number) {
//             console.log('present')
//         }
       
//     }
// }


// isPresent(66);



// even number
    // for (var i = 0; i < 100; i++) {
    //     if (i % 2 == 0) {
    //         console.log( i)
    //     }
       
    // }

    // odd number

    // for (var i = 0; i < 100; i++) {
    //     if (i % 2 != 0) {
    //         console.log( i)
    //     }
       
    // }




    // const myHobby = [
    //     `Reciting Quran`,
    //     `Coding`,
    //     `Walking with Friends`,
    //     `Watching Tech Podcast`,
    //   ];
      
    //   console.log(myHobby[0]);
    //   myHobby[0] = `Nothing Here`;???/


    let mySelf = {
        firstName: 'sadia',
        lastName: `sultana`,
        age: 32,
        Religion: `Islam`,
        favChannel: [`Islamic tv`, `Code with understanding`, `Jhankar Mahbub`, `Web Devolopment`],
      };
      
      // console.log(mySelf.favChannel[3])
      mySelf.favChannel[3] = `There is no Channel`;
      // mySelf [`age`] = `soon will be 32, man`;


      var Ideology = `Religion`;

       mySelf[Ideology] = `No way, It's Islam Always`;

        console.log(mySelf);