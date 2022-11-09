'use strict';

const button = document.getElementById('get-users');

button.addEventListener('click', () => {

    fetch ("https://reqres.in/api/users" , {method: "GET"})
    .then((response) => {
            response.json().then((users) => {
                // console.log(response);
                const list = document.getElementById("user-list");

                for(let user of users) {
                const li = document.createElement("li");
                const liContent = document.createTextNode(user.name);
                li.appendChild(liContent);

                list.appendChild(li);
                }        
                
                const resultStr = users.reduse((acc, user) => {
                   if (acc === "") {
                    acc = user.name;
                    return acc;
                   }                  
                    acc = `${acc}, ${user.name}`;
                    return acc;
                }, "");
                
                console.log(resultStr);

                const resultStr = users.reduse((acc, user) => {
                acc.push(user.name);
                return acc;
                }, []);
                 
                 console.log(user.map((user) => user.map));

                
            });
        })
        .catch((e) => {
            console.log(e);
        });
        
});

//codewars