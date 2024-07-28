import { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function IssueForm() {
  // Destructure addIssue function from UserContext
  const { addIssue } = useContext(UserContext);

  // Initial state for the form
  const initState = {
    title: '',
    description: '',
    imgUrl: ''
  };

  // State to manage form data
  const [formData, setFormData] = useState(initState);

  // Handle changes in form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    addIssue(formData);
    setFormData(initState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Issue title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        name="imgUrl"
        placeholder="Image URL"
        value={formData.imgUrl}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
