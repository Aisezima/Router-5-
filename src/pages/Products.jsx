import { Link, useParams } from "react-router-dom"

const Products = () => {
   const params = useParams()
  return (
    <section>
      <h1>Product page is here</h1>
       <ul>
        <Link to={`/products-detail/${1}`}><li>Carpet</li></Link>
        <Link to={`/products-detail/${2}`}><li>Book</li></Link>
        <Link to={`/products-detail/${3}`}><li>Online </li></Link>

       </ul>
    
    </section>
  )  
} 

export default Products
