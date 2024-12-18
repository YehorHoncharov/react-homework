import { useState } from "react";

export const useTitle = () => {
  const [title, setTitle] = useState<string>(document.title);

  const changeTitle = (newTitle: string) => {
    document.title = newTitle;
    setTitle(newTitle);
  };

  return { title, changeTitle };
};


// export function useTitle(title: string) {
//     const [title, setTitle] = useState<IPost>()

//     useEffect(() => {
//         async function getTitle() {
//             const response = await fetch(`https://fakestoreapi.com/products/${title}`)
//             const title = await response.json()
//             setTitle(title)
//         }
//         getTitle()
//     }, [title])

//     return {title: title}
// }