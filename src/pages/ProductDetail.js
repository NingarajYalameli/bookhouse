import {useState, useEffect} from 'react';
import { Rating } from '../components';
import { useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context';
import { getProduct } from '../services';
import {toast} from 'react-toastify';

export const ProductDetail = () => {
const { cartList, addToCart, removeFromCart } = useCart();
const [inCart, setIncart] = useState(false);
const [product, setProduct] = useState({})
const {id} = useParams();
useTitle(product.name);

useEffect(() => {
    async function fetchProducts() {
    try{
  const data= await getProduct(id)
  setProduct(data);
  }catch(error){
 toast.error(error.message, {theme:"dark", position:"bottom-right", autoClose:5000, closeOnClick:true, closeButton:"true"})
  }
      
    }
    fetchProducts();
  }, [id]);

useEffect(() => {
    const productCart = cartList.find((item) => item.id === product.id);
    if (productCart) {
      setIncart(true);
    } else {
      setIncart(false);
    }
  }, [cartList, product.id]);

  return (
    <main>
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src={product.poster} alt='' />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">₹</span>
                <span className="">{product.price}</span>
              </p>
              <p className="my-3"> 
                <span>
                  <Rating  rating={product.rating}/>
                </span>
              </p>
              <p className="my-4 select-none">
                {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}   
                {product.in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}
                {!product.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
              </p>
              <p className="my-3">
                {!inCart && <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={ product.in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>}
                {inCart && <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                {product.long_description}
              </p>
            </div>
          </div>
        </section>
      </main> 
  )
}