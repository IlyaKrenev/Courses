"use strict"

let model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    },
    {
        id: 5,
        title: 'Title text 6',
        text: 'Some text 6',
        user: {
            id: 0,
            name: 'user 1',
        },
    },
    {
        id: 6,
        title: 'Title text 6',
        text: 'Some text 6',
        user: {
            id: 1,
            name: 'user 2',
        },
    }
];

    let newArr = [];
    for (let element of model) {
        let exUser = newArr.filter(group => group.id === element.user.id);
        
        if(exUser.length > 0) {
            
           // exUser[0].posts += ([element.id, element.title, element.text]);
        } else {
        const posts = [];

        model.map(el => {
          if(el.user.id === element.user.id){
            posts.push(
              {
                id: el.id,
                title: el.title,
                text: el.text,
              }
            )
          }
        })

        let newGroup = {
            id: element.user.id,
            user: element.user.name,
            posts:[
              ...posts,
            ],
        };
          
        newArr.push(newGroup);
      }
    }

    const util = require('util')

    console.log(util.inspect(newArr, {showHidden: false, depth: null}))
