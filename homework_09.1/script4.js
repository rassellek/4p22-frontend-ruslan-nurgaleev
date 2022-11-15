'use strict'

const user = 
    {
        firstName: 'Alex',
        lastName: 'Ivanov',
        hobby: {
            firstName: 'Alex',
            lastName: 'Ivanov',
            hobby: {
                firstName: 'Alex',
                lastName: 'Ivanov',
                hobby: {
                    firstName: 'Alex',
                    lastName: 'Ivanov',
                    hobby: {
                        firstName: 'Alex',
                        lastName: 'Ivanov',
                        hobby: {
                            firstName: 'Alex',
                            lastName: 'Ivanov',
                            hobby: 'fishing',
                        }
                    }
                }
            }
        }
    }


let count = 0;

function recursion(obj) {
    for (let item in obj){
        if (typeof obj[item] === 'object'){
            console.log(' '.repeat(count * 4) + item + ':');
            count++;
            recursion(obj[item]);
        } else {
            console.log(' '.repeat(count * 4) + item + ':', '"' + obj[item] + '"');
        };
        
    };
};

recursion(user);