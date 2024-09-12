/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AdminLayout } from '../containers';
import styled from '@emotion/styled/macro';
import { Button, InputField } from '../components';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookbyId, getCategories, updateBook } from '../slices/book.slices';
import moment from 'moment';

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

const Image = styled.img`
  width: 400px;
  height: 200px;
`;

const UpdateBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const { book, loading, error } = useSelector(
      state => state.book
    );
    // const [selectedProfile, setSelectedProfile] = useState([]);
    
    const { bookId } = useParams();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [newCategory, setNewCategory] = useState("");

    const [bookData, setBook] = useState({
        title: "",
        author: "",
        price: "",
        isbn: "",
        language: "",
        description: "",
        publishDate: new Date(),
        imageFile: "",
        coverImageUrl: "",
        selectedCategories: []
    });
  
    // useEffect(() => {
    //   if (id) {
    //     const fetchBook = async () => {
    //       try {
    //         await dispatch(getBookbyId(id)).then(res => {
    //           console.log("from single", res);
    //           setBook({
                
    //           });
    //         });
    //       } catch (error) {
    //         console.error("Error fetching Employee:", error);
    //       }
    //     };
    //     fetchBook();
    //   }
    // }, [dispatch, id]);

    useEffect(() => {
        // Fetch the book details and available categories
        const fetchBookDetails = async () => {
          dispatch(getBookbyId(bookId));
          const categoriesResponse = dispatch(getCategories());
    
          setBook({
            ...book,
            // categories: bookResponse.book.categories.map(c => c.name),
          });
          setAllCategories(categoriesResponse.data);
        };
    
        fetchBookDetails();
      }, [dispatch, bookId]);
  
      console.log("id", bookId);
    console.log("book data", bookData);
  
  
    const onInputChange = e => {
      const { name, value } = e.target;
      setBook({ ...bookData, [name]: value });
      // const validationErrors = validate(employee);
      // setErrors(validationErrors);
    };

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

            const handleCoverFile = (e) => {
                const files = Array.from(e.target.files);
                setSelectedFiles(files); // Save the selected files in state
                };
  
    // const handleSubmit = async e => {
    //   e.preventDefault();
    //   if (id) {
    //     const bookData = {
    //       ...book,
    //       id
    //     };
    //     try {
    //       const actionResult = await dispatch(updateBook(bookData));
    //       if (UpdateBook.fulfilled.match(actionResult)) {
    //        navigate("/admin/books");
    //       } else {
    //        console.log("failed to update");
    //       }
    //     } catch (error) {
    //       console.error("Error updating employee:", error);
    //     }
    //   }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', book.title);
        formData.append('author', book.author);
        formData.append('description', book.description);
        formData.append('price', book.price);
        formData.append('isbn', book.isbn);
        formData.append('coverImageUrl', book.coverImageUrl); // retain existing URL if no new image is provided
    
        if (selectedFiles) {
          formData.append('ImageFile', selectedFiles);
        }
    
        book.categories.forEach(category => {
          formData.append('categories', category);
        });
    
        try {
          const response = dispatch(updateBook(bookId, formData))
          navigate("/admin/books");
          console.log('Book updated successfully', response.data);
        } catch (error) {
          console.error('Error updating book:', error);
        }
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
            value={bookData.title}
            onChange={onInputChange}
        />
        <InputField
            label="Author"
            placeholder="Author"
            name="author"
            value={bookData.author}
            onChange={onInputChange}
        />
        <InputField
            label="ISBN"
            placeholder="ISBN"
            name="isbn"
            value={bookData.isbn}
            onChange={onInputChange}
        />
        <InputField
            type="select"
            placeholder="Select a category"
            name="category"
            value={bookData.categories}
            options={allCategories}
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
            value={bookData.price}
            onChange={onInputChange}
        />
        <InputField
            label="Published Date"
            placeholder="Published Date"
            name="publishDate"
            type="date"
            // value={new Date(moment(bookData.publishDate))}
            onChange={onInputChange}
        />
        <InputField
            label="Language"
            placeholder="Language"
            name="language"
            value={bookData.language}
            onChange={onInputChange}
        />
        <div>
        <InputField 
           label="Cover Image"
            placeholder="Cover Image"
            type="file"
            name="coverImage"
            accept="image/jpeg, image/png, image/jpg"
            multiple onChange={handleCoverFile} />
          {bookData.coverImageUrl && selectedFiles < 0 && (
            <>
          <p>Current Image: </p><Image href={bookData.coverImageUrl} target="_blank" rel="noopener noreferrer" />
          </>
        )}
      </div>
        <InputField
            label="Description"
            placeholder="Description"
            name="description"
            type="textarea"
            value={bookData.description}
            onChange={onInputChange}
        />
        </div>
    </div>
    <div css={buttonContainer}>
        <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "update Book"}
        </Button>
    </div>
    </form>
</AdminLayout>
)
}

export default UpdateBook