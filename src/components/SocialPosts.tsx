import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "I'm stressed", thought: "I could use a vacation!" },
    { title: "I'm hungry", thought: "I could use a Burger!" },
    { title: "I'm tired", thought: "I could use a nap!" },
    { title: "I'm irritated", thought: "I could use a longer nap!" },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deletePost = (index: number): void => {
    setPosts((prev) => {
      const newList: Post[] = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  };

  const addPost = (post: Post): void => {
    setPosts((prev) => {
      const newList = prev.slice(0);
      newList.unshift(post);
      return newList;
    });
  };

  return (
    <div className="SocialPosts">
      <button className="new-thoughts" onClick={() => setShowForm(true)}>
        New Thought
      </button>
      {showForm && (
        <div className="form-container" onClick={() => setShowForm(false)}>
          <PostForm onAdd={addPost} onSetShowForm={setShowForm} />
        </div>
      )}
      <ul className="feed">
        {posts.map((post, index) => (
          <PostInList post={post} onDelete={() => deletePost(index)} />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
