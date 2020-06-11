import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/postsActions/postsActions";
import { ListItem } from "./listItem";

const PostList = () => {
  const posts = useSelector((state) => state.postsReducer.posts);
  const error = useSelector((state) => state.postsReducer.error);
  const dispatch = useDispatch();
  console.log("ERROR: ", error);
  return (
    <div>
      <button onClick={() => dispatch(fetchPosts())}>Fetch Posts</button>
      <ul>
        {error ? (
          <div>Error</div>
        ) : (
          posts.slice(0, 5).map((post) => {
            return <ListItem key={post.id} post={post} />;
          })
        )}
      </ul>
    </div>
  );
};

export default PostList;
