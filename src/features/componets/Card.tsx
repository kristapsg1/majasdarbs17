import { useState } from "react";
import { useDispatch } from "react-redux";
import postsEdit from "../posts/postsSlice";
import { Animal } from "../posts/postsSlice";

type CardProps = {
  cardToDispaly: Animal;
  onDelete: () => void;
};

const Card = ({ cardToDispaly,  onDelete }: CardProps) => {
  const dispatch = useDispatch();

  const [editForm, setEditForm] = useState({ cardToDispaly });
  const [editState, setEditState] = useState(false);

  return (
    <section>
      {!editState ? (
        <div className="card-wrapper">
          <div className="cards" key={cardToDispaly.id}>
            <h3> {cardToDispaly.animal}</h3>
            <img src={cardToDispaly.picture} alt="" className="picture-size" />
            <div className="button-wrapper">
              <button onClick={onDelete}>Delete</button>
              <button onClick={() => setEditState(true)}>Edit</button>
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postsEdit(editForm));
            setEditState(false);
          }}
        >
          <div className="card-wrapper">
            <div className="cards" key={cardToDispaly.id}>
              <input
                placeholder="Animal"
                value={editForm.cardToDispaly.animal}
                onChange={(e) =>
                  setEditForm({ ...editForm, animal: e.target.value })
                }
              />
              <input
                placeholder="Picture"
                value={editForm.cardToDispaly.picture}
                onChange={(e) =>
                  setEditForm({ ...editForm, picture: e.target.value })
                }
              />

              <div className="button-wrapper">
                <button type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Card;
