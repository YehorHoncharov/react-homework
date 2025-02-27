import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../hooks/usePosts";

interface IPostContext {
  favouritePosts: IPost[];
  addFavPost: (post: IPost) => void;
  deletePost: (id: number) => void;
  isPostLiked: (id: number) => boolean;
}

const initialValue: IPostContext = {
  favouritePosts: [],
  addFavPost: (post: IPost) => {},
  deletePost: (id: number) => {},
  isPostLiked: (id: number) => false,
};

// Лучше не делать children обязательным пропсом
interface IFavPostContextProviderProps{
    children?: ReactNode
}
// не нужно экспортировать
export const postContext = createContext<IPostContext>(initialValue);

export function useFavPostContext() {
    return useContext(postContext)
}

export function FavContextProvider(props: IFavPostContextProviderProps) {
    const { children } = props;
  const [favouritePosts, setFavouritePosts] = useState<IPost[]>([])

  function addFavPost(post: IPost){
      let array = [...favouritePosts, post]
      setFavouritePosts(array)
  }

  function deletePost(id: number) {
      const filterPosts = favouritePosts.filter((post)=>{
          return post.id !== id
          
      })
      setFavouritePosts(filterPosts)
  }

  function isPostLiked(id: number) {
    // можно заменить some 
    for (let post of favouritePosts){
      if (post.id === id){
          return true;
      }
  }
  return false;
  }

  return (
    <postContext.Provider
    value={{
        favouritePosts: favouritePosts,
        addFavPost: addFavPost,
        deletePost: deletePost,
        isPostLiked: isPostLiked
        }}>
        { children }
</postContext.Provider>
  )
}