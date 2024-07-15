import categoryServices from "../../services/categoryServices";
import { useLoaderData } from "react-router-dom";
import AddCategory from "./AddCategory";
import { useState } from "react";

export const loader = async () => {
  const categories = await categoryServices.getCategories();
  return { categories };
};
function Categories() {
  const { categories } = useLoaderData();
  const [cats, setCats] = useState(categories.data.categorys);
  const [selectedCategory, setSelectedCategory] = useState(0);
  // console.log(cats[0][0].categoryName);
  const handleAddCategory = async (newCat) => {
    categoryServices
      .addCategory(newCat.name, newCat.description)
      .then((response) => {
        setCats([...cats, response.data.category]);
        alert("Added category successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed adding category");
      });
  };
  const handleEditCategory = async (updatedCat) => {
    categoryServices
      .updateCategory(
        updatedCat.name,
        updatedCat.description,
        selectedCategory._id
      )
      .then((response) => {
        const updatedCategories = cats.map((cat) =>
          cat._id === selectedCategory._id ? response.data.category : cat
        );
        setCats(updatedCategories);
        console.log(updatedCategories);
        alert("Edited category successful");
        setSelectedCategory(null);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed editing category");
      });
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await categoryServices.deleteCategory(categoryId);
      alert("Deleted category successful");
      setCats(cats.filter((c) => c._id !== categoryId));
    } catch (error) {
      console.error("Error deleting category", error);
    }
  };

  return (
    <div>
      <div>
        {selectedCategory ? (
          <AddCategory
            onAddCategory={handleEditCategory}
            selected={selectedCategory}
          />
        ) : (
          <AddCategory
            onAddCategory={handleAddCategory}
            selected={selectedCategory}
          />
        )}
      </div>
      <div className="table-responsive m-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Categoryname</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cats.length > 0 ? (
              cats.map((category, index) => (
                <tr key={category._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.categoryName}</td> 
                  <td>{category.description}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="btn btn-warning btn-sm m-1"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(category._id)}
                        className="btn btn-danger btn-sm m-1"
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <li>No categories found</li>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;
