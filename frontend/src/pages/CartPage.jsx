import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { useContext, useMemo, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard';
import { CartContext, useCart } from '../context/cart/cartContext';


function CartPage() {
  const { cart,addToCart,removeFromCart}=useCart();
const sum=useMemo(()=>{
  return cart.reduce((prev,item)=>{
  return prev+ item.price*item.quantity ;
},0);
},[cart])
const renderList=cart.map((item, idx,arr) => (
  <ListGroup.Item
  key={idx}
  as="li"
  className="gap-4 d-flex justify-content-between align-items-start"
>
<div className="p-2">  
<Image src={item.image1} rounded className='Square-img'/>
</div>
<div className="fs-3 fw-bolder me-auto" >{item.title}{" "} 
<span className='fs-4 fw-normal' >x{item.quantity ?? 0}</span></div>
<Stack className='ms-auto flex-grow-0'>
<Button variant="danger" onClick={()=>removeFromCart(item)}>Remove</Button>
<div className="p-2 mt-auto fs-4 fw-semibold p-1">
  {item.price}EGP
</div>
</Stack>
</ListGroup.Item>
))
const [checked, setChecked] = useState(false);

const [radioValue, setRadioValue] = useState('1');
const radios = [
  { name: 'Cash', value: '1' },
  { name: 'Credit', value: '2' },
  { name: 'Vodafone cash', value: '3' },
];
    return(
         <Container className='pt-5'>
         <ListGroup as="ol"  className='gap-4'>
      {renderList}
    </ListGroup>
    <h4 >Details</h4>
    <h9>Total: {sum} EGP</h9>
    <hr />
    <Stack gap={4}>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <Button variant='success'as={Link} to="/checkout">Checkout</Button>
      </Stack>

    </Container>
    )
}
export default CartPage;