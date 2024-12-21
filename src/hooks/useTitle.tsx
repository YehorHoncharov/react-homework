// import { useState, useEffect } from "react";

// export function useTitle(initialTitle: string) {
//     const [title, setTitle] = useState(initialTitle);

//     useEffect(() => {
//         async function getTitle() {
//             try {
//                 const response = await fetch(`https://dev.to/api/articles/${title}`);
//                 const data = await response.json();
//                 console.log(data);
//                 if (data.title) {
//                     setTitle(data.title);
//                     document.title = data.title;
//                 }
//             } catch (error) {
//                 console.error("Error fetching title:", error);
//             }
//         }

//         getTitle();
//     }, [title]);

//     const changeTitle = (newTitle: string) => {
//         document.title = newTitle;
//         setTitle(newTitle);
//     };

//     return { title, changeTitle };
// }

// import { useState, useEffect } from "react";

// export function useTitle() {
//     const [title, setTitle] = useState<string>(document.title);

//     useEffect(() => {
//         async function fetchTitleFromAPI() {
//             try {
//                 const response = await fetch(`https://dev.to/api/articles/${document.title}`);
//                 const data = await response.json();

//                 if (data.title) {
//                     setTitle(data.title);
//                     document.title = data.title; 
//                 }
//             } catch (error) {
//                 console.error("Error fetching title from API:", error);
//             }
//         }

//         fetchTitleFromAPI();
//     }, []);

//     const changeTitle = (newTitle: string) => {
//         setTitle(newTitle);
//         document.title = newTitle; 
//     };

//     return { title, changeTitle };
// }

import { useEffect, useState } from "react";

export function useTitle(initialTitle: string) {
    const [title, setTitle] = useState(initialTitle);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return { title, setTitle };
}
