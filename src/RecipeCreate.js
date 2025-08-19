import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" value={formData.name} onChange={handleChange} required placeholder="Name" />
            </td>
            <td>
              <input name="cuisine" value={formData.cuisine} onChange={handleChange} required placeholder="Cuisine" />
            </td>
            <td>
              <input name="photo" value={formData.photo} onChange={handleChange} required placeholder="URL" />
            </td>
            <td>
              <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} required placeholder="Ingredients" />
            </td>
            <td>
              <textarea name="preparation" value={formData.preparation} onChange={handleChange} required placeholder="Preparation" />
            </td>
            <td>
              <button type="submit" name="create">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
