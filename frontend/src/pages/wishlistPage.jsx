import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import { useContext } from 'react';
import ProductCard from '../components/productCard';
import { CartContext } from '../context/cart/cartContext';
import { useWishlist } from '../store/WishlistContext';

function WishlistPage() {
   const {wishlist}=useWishlist();

    return( 
     <Container className='pt-5'>
        <Row xs={1} md={2} lg={3}className="g-4">
           {wishlist.map((item, idx,arr) => (
             <Col key={idx}>
        <ProductCard
        image1={item.image1}
        title={item.title}
        price={item.price}
        />
        </Col>
           ))}
         </Row>
         </Container>
 );
}
export default WishlistPage;