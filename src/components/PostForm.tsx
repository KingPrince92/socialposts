import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onAdd: (post: Post) => void;
  onSetShowForm: (showForm: boolean) => void;
}

const PostForm = ({ onAdd, onSetShowForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onAdd({ title, thought });
    onSetShowForm(false);
    setTitle("");
    setThought("");
  };

  return (
    <form
      className="PostForm"
      onSubmit={(e) => handleSubmit(e)}
      onClick={(e) => e.stopPropagation()}
    >
      <label htmlFor="title">Title</label>
      <input
        required
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thoughts">Thoughts</label>
      <input
        required
        type="text"
        name="thoughts"
        id="thoughts"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <button className="add-post">Add Post</button>
    </form>
  );
};

export default PostForm;
