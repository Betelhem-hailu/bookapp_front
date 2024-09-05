/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AdminLayout } from '../containers';
import { Button, InputField } from '../components';

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


const AddBook = () => {
return (
<AdminLayout>
    <div css={formContainer}>
    <div css={formSection}>
        <InputField label="Title" placeholder="Title" />
        <InputField label="Author" placeholder="Author" />
        <InputField label="Category" placeholder="Category" />
        <InputField label="ISBN" placeholder="ISBN" />
        <InputField label="Price" placeholder="Price" />
    </div>
    <div css={formSection}>
        <InputField label="Published Date" placeholder="Published Date" />
        <InputField label="Language" placeholder="Language" />
        <InputField label="Cover Image" placeholder="Cover Image" type="file" />
        <InputField label="Description" placeholder="Description" type="textarea" />
    </div>
    </div>
    <div css={buttonContainer}>
    <Button>Add Book</Button>
    </div>
</AdminLayout>
);
};


export default AddBook;
