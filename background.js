//App needs info from persistent variable as soon as installed
// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.storage.sync.set({ color });
//     console.log("Default background color set to %cgreen", `color: ${color}`);
// });

let bookmarks = [];

// ? TODO: User selects Bookmarks folder
// const userFolder = (input) =>{
//     let userInput = document.getElementById().value();
//     for(let i = 0; i < userInput.length; i++){
//     bookmarks.push(userInput);
//     }

// }

// ? TODO: retrieve bookmarks from chrome user 

/*
Here's what the selected code is doing:
1.First, it gets the bookmarks from the user's computer.
2. Then, it loops through the bookmarks and prints them to the console.

The code is pretty straightforward. The only thing to note is that the bookmarks are returned as an array of objects.

The bookmarks are returned as an array of objects. Each bookmark is an object with the following properties:

id: The ID of
*/
const getBookmarks = () =>{
    chrome.bookmarks.getTree(function(bmTree){
        bmTree.forEach(function(node){
            console.log(node);
            // * Variables are hardcoded for development
            let list = node.children[0].children[2].children[1];
            console.log(list);
        });
    })
};

getBookmarks();