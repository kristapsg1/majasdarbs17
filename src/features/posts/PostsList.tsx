import { useSelector, useDispatch } from "react-redux";
import { postsDelete, sortASC, sortDESC } from "./postsSlice";
import { RootState } from "../../app/store";
import Card from "../componets/Card";

const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts);

  console.log(typeof localStorage.getItem("animalArr"));

  const dispatch = useDispatch();

  return (
    <section>
      <div className="post-header">
        <h2>Posts</h2>
        <div className="header-btn-wrapper">
          <button onClick={() => dispatch(sortASC())}>asc</button>
          <button onClick={() => dispatch(sortDESC())}>desc</button>
        </div>
      </div>
      <div className="card-wrapper">
        {posts && posts.length ? (
          posts.map((card) => (
            <Card
              key={card.id}
              cardToDispaly = {card}

              onDelete={() => dispatch(postsDelete(card.id))}
            />
          ))
        ) : (
          <h1>EMPTY</h1>
        )}
      </div>
    </section>
  );
};

export default PostsList;
