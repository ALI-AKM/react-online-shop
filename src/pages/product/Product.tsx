import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"
export default function Product() {
  const params = useParams()
  return (
    <div>
      <Container>
      <div>
        <div id="info">
          <h3>عنوان محصول</h3>
          <div>
            <p>قیمت:25$</p>
            <p>lorem10</p>
          </div>

        </div>
        <div id="img">
          <button>add to cart</button>
        </div>

      </div>
      </Container>
      
    </div>
  )
}
