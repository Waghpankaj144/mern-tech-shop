import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useFilterContext } from "./context/filter_context";

const Products = () => {

  // const [userData, setUserData] = useState();
  const navigate =useNavigate();

  const callProductsPage = async()=>{
    try{
        const res =await fetch( '/signin',{
          method : "GET",
          headers : {
            Accept : "application/json",
            "Content-Type" : "application/json"
          },
          credentials : "include"
        });
  
        const data = await res.json();
        console.log(data);
  
        if(!res.status === 200 ){
          const error = new Error(res.error);
          throw error;
        }
  
    }catch(err){
      console.log(err);
      navigate('/products');
    }
   }
  
      useEffect(()=>{
        callProductsPage();
      }, []);

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
