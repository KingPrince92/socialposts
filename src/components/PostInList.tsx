import Post from "../models/Post";
import "./PostInList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const trash = <FontAwesomeIcon icon={faTrash} />;

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <li className="PostInList">
      <div>
        <p className="titles">{post.title}</p>
        <p className="thoughts">{post.thought}</p>
      </div>
      <button onClick={() => onDelete()}>{trash}</button>
    </li>
  );
};

export default PostInList;
