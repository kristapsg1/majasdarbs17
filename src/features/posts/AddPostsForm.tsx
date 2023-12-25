import { useState } from "react";
import { useDispatch } from "react-redux";
import { postsAdd } from "./postsSlice";
import { nanoid } from "nanoid";

const startingValue = {
  animal: "",
  picture: "",
};

type TypeValues = typeof startingValue;

const AddPostsForm = () => {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState<TypeValues>(startingValue);

  const onAnimalAddBtn = (e) => {
    e.preventDefault();

    dispatch(postsAdd({ ...formValue, id: nanoid() }));
    setFormValue(startingValue);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onAnimalAddBtn}>
        <div>
          <h1>Add Animal</h1>
        </div>
        <input
          type="text"
          placeholder="Animal"
          name="animal"
          required
          value={formValue.animal}
          onChange={(e) =>
            setFormValue({ ...formValue, animal: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Picture"
          name="picture"
          required
          value={formValue.picture}
          onChange={(e) =>
            setFormValue({ ...formValue, picture: e.target.value })
          }
        />
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
};

export default AddPostsForm;
