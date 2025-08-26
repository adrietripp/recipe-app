import React from "react";

function RecipeRow({ recipe, index, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img
          src={recipe.photo}
          alt={recipe.name}
          style={{
            objectFit: "cover",   // Ensures the full image fits nicely
            width: "100%",        // Fills the entire cell width
            height: "100px",      // Keeps all images uniform
            display: "block"      // Removes spacing below images
          }}
        />
      </td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
      </td>
    </tr>
  );
}

export default RecipeRow;