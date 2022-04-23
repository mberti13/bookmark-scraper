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
// ? Either a type input or find a input type for file that works with bookmarks

// ! Function to retrieve bookmarks from node tree
const getBookmarks = () =>{
    chrome.bookmarks.getTree(function(bmTree){
        bmTree.forEach(function(node){
            console.log(node);
            // * Variables are hardcoded for development
            // * reaches Resources folder in Coding Folder
            // TODO: declare variable = to userInput from bookmark tree
            let list = node.children[0].children[2].children[1];
            console.log(list);
            // Retrieve bookmarks title and url
            for (let i = 0; i < list.children.length; i++){
                var bkmk = [list.children[i].title, list.children[i].url];

                // console.log(bkmk);
                // * bookmarks array now has url and title of bookmarks in location
                bookmarks.push(bkmk);          
            }; 
            console.log(bookmarks);
        });
    })
};

// // ! Function to print or return bookmarks to popup.html
// const printBookmarks = (bookmarks) => {

// }


getBookmarks();