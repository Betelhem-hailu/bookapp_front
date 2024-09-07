/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AdminLayout } from '../containers';
import { Button, InputField } from '../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBook, getCategories } from '../slices/book.slices';
import styled from '@emotion/styled/macro';

// Emotion Styles

const formContainer = css`
display: flex;
justify-content: space-around;
padding: 40px;
gap: 40px;
`;

const formSection = css`
display: flex;
flex-direction: column;
gap: 20px;
width: 40%;
`;

const buttonContainer = css`
width: 200px;
margin: 0 auto;
`;

const Error = styled.p`
color: #dc2f02;
font-size: 16px;
`;

const initialState = {
title: "",
author: "",
price: "",
isbn: "",
language: "",
description: "",
publishDate: "",
selectedCategories: []
};

const AddBook = () => {
const [book, setBook] = useState(initialState);
const [selectedFiles, setSelectedFiles] = useState([]);
const [newCategory, setNewCategory] = useState("");
const [error, setError] = useState(null);

const dispatch = useDispatch();
const navigate = useNavigate();
const { categories, loading } = useSelector((state) => state.book);

useEffect(() => {
dispatch(getCategories());
}, [dispatch]);

const handleCategoryChange = (e) => {
const selectedValue = e.target.value;
if (!book.selectedCategories.includes(selectedValue)) {
    setBook((prev) => ({
    ...prev,
    selectedCategories: [...prev.selectedCategories, selectedValue]
    }));
}
};

const handleNewCategory = () => {
if (newCategory && !book.selectedCategories.includes(newCategory)) {
    setBook((prev) => ({
    ...prev,
    selectedCategories: [...prev.selectedCategories, newCategory]
    }));
    setNewCategory("");
}
};

const onInputChange = (e) => {
const { name, value } = e.target;
setBook((prevState) => ({
    ...prevState,
    [name]: value
}));
};

const handleCoverFile = (e) => {
const files = Array.from(e.target.files);
setSelectedFiles(files); // Save the selected files in state
};

const handleSubmit = (e) => {
e.preventDefault();

// Create a new FormData instance for form submission
const formData = new FormData();
formData.append("title", book.title);
formData.append("author", book.author);
formData.append("price", book.price);
formData.append("isbn", book.isbn);
formData.append("language", book.language);
formData.append("description", book.description);
formData.append("publishDate", book.publishDate);

// Append each selected file to formData
selectedFiles.forEach((file, index) => {
    formData.append(`imageFile`, file);
});

// Append categories
book.selectedCategories.forEach((category) =>
    formData.append("categories", category)
);


// Dispatch createBook action
dispatch(createBook(formData))
    .unwrap()
    .then((response) => {
    navigate("/admin/books");
    })
    .catch((error) => {
        if (error) {
            console.log(error)
            setError(error.message);
        } else {
    setError("Submission failed. Please try again later.");
        }
    });

setBook(initialState); // Reset the form
setSelectedFiles([]); // Clear selected files
};

return (
<AdminLayout>
    <form onSubmit={handleSubmit}>
    {error && <Error>{error}</Error>}
    <div css={formContainer}>
        <div css={formSection}>
        <InputField
            label="Title"
            placeholder="Title"
            name="title"
            value={book.title}
            onChange={onInputChange}
        />
        <InputField
            label="Author"
            placeholder="Author"
            name="author"
            value={book.author}
            onChange={onInputChange}
        />
        <InputField
            label="ISBN"
            placeholder="ISBN"
            name="isbn"
            value={book.isbn}
            onChange={onInputChange}
        />
        <InputField
            type="select"
            placeholder="Select a category"
            name="category"
            options={categories}
            onChange={handleCategoryChange}
        />
        <div>
            <InputField
            type="text"
            placeholder="Add new category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            />
            <button type="button" onClick={handleNewCategory}>
            Add Category
            </button>
        </div>
        </div>
        <div css={formSection}>
        <InputField
            label="Price"
            placeholder="Price"
            name="price"
            value={book.price}
            onChange={onInputChange}
        />
        <InputField
            label="Published Date"
            placeholder="Published Date"
            name="publishDate"
            type="date"
            value={book.publishDate}
            onChange={onInputChange}
        />
        <InputField
            label="Language"
            placeholder="Language"
            name="language"
            value={book.language}
            onChange={onInputChange}
        />
        <InputField
            label="Cover Image"
            placeholder="Cover Image"
            type="file"
            name="coverImage"
            accept="image/jpeg, image/png, image/jpg"
            multiple
            onChange={handleCoverFile}
        />
        <InputField
            label="Description"
            placeholder="Description"
            name="description"
            type="textarea"
            value={book.description}
            onChange={onInputChange}
        />
        </div>
    </div>
    <div css={buttonContainer}>
        <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Add Book"}
        </Button>
    </div>
    </form>
</AdminLayout>
);
};

export default AddBook;
