import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";

function Store(){
  return(<>
  <Container>
    <h3>محصولات جدید</h3>
    
    <div className="grid grid-cols-4 gap-4 mt-5">
      <Link to={`/product/${1}`}><ProductItem/></Link>
      <Link to={`/product/${2}`}><ProductItem/></Link>
      <Link to={`/product/${3}`}><ProductItem/></Link>
      <Link to={`/product/${4}`}><ProductItem/></Link>
      <Link to={`/product/${5}`}><ProductItem/></Link>
    </div>
  
  
  
  </Container>
  </>);
}
export default Store;