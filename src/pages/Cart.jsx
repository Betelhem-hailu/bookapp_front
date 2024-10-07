/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { cover } from '../assets';
import { Header } from '../containers';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../slices/cart.slices';

// Styled components using Emotion
const Title = styled.h1`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    width: 100%;
    margin-top: 40px;
    text-align: center;
`;

const tableStyle = css`
    width: 100%;
    th {
        text-align: left;
        padding: 12px 0;
        border-bottom: 1px solid #E5E7EB;
    }
`;

const bodyStyle = css`
    tr {
        border-bottom: 1px solid #E5E7EB;
        td {
            padding: 12px 0;
        }
    }
`;

const CartArea = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CartTable = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const SummaryBox = styled.div`
  background: #ECECEC;
  width: 100%;
  max-width: 360px;
  max-height: 240px;
  padding: 20px;
  margin-top: 20px;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

const CartButton = styled.button`
  background: #14B8A6;
  color: white;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const Cart = () => {
    const cartItems = [
        // { id: 1, title: 'Soul', author: 'By author', price: 250, quantity: 2, total: 500, imageUrl: cover },
        // { id: 2, title: 'Soul', author: 'By author', price: 250, quantity: 2, total: 500, imageUrl: cover },
    ];

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);

    useEffect(()=>{
        dispatch(getCart());
    }, [dispatch])

    const subTotal = cartItems.reduce((acc, item) => acc + item.total, 0);
    const shipping = 100;
    const total = subTotal + shipping;

    return (
        <div>
        <Header /> 
        <div>
        <Title>Your cart</Title>
        <CartArea>
            <CartTable>
            <table css={tableStyle}>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody css={bodyStyle}>
                {cart?.length > 0 && cart.map(item => (
                    <tr key={item.id}>
                    <td>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={item.imageUrl} alt={item.title} style={{ width: '92px', height: '132px', marginRight: '16px' }} />
                        <div>
                            <p>{item.title}</p>
                            <p style={{ color: '#71717A', fontSize: '14px' }}>{item.author}</p>
                        </div>
                        </div>
                    </td>
                    <td>{item.price} ETB</td>
                    <td>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button>-</button>
                        <span style={{ margin: '0 12px' }}>{item.quantity}</span>
                        <button>+</button>
                        </div>
                    </td>
                    <td>{item.total} ETB</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </CartTable>
            <SummaryBox>
            <h2 style={{ borderBottom: "2px solid #000000" }}>Order Summary</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span>Sub Total</span>
                <span>{subTotal} ETB</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span>Shipping</span>
                <span>{shipping} ETB</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '18px' }}>
                <span>Total</span>
                <span>{total} ETB</span>
            </div>
            <CartButton>Check Out</CartButton>
            </SummaryBox>
        </CartArea>
        </div>
        </div>
    );
};

export default Cart;
