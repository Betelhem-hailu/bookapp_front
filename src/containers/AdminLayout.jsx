/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Sidebar } from '../components';

const layoutStyle = css`
display: flex;
height: 100vh;
`;

const mainStyle = css`
padding: 20px;
overflow-y: auto;
flex-grow: 1;
`;

const AdminLayout = ({ children }) => {
return (
<div css={layoutStyle}>
    <Sidebar />
    <main css={mainStyle}>
        {children}
    </main>
</div>
);
};

export default AdminLayout;
