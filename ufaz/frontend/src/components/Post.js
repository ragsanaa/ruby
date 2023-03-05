import '../styles/product.css';
import Img from '../assest/image_1.png';
import { Rating } from 'react-simple-star-rating'

import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Post() {

  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }


  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/posts/${id}/`)
    .then(response => response.json())
    .then(data => setPost(data));
  }, [post]);


  function handleClick() {

    // Send data to the backend via POST
    fetch(`http://localhost:8000/api/v1/posts/${id}/`, {
      method: 'POST',
      body: "" // body data type must match "Content-Type" header

    })

  }

  return (
    <div className="App">
     {
      post.map(p=>{
        return(
          <div className="productContainer mt-5" key={p.id}>
            <div className="productItem">
              <div className='productImage'>
                <img src={Img} alt=""/>
              </div>
              <div className="productInformation">
                <h1>{p.title}</h1>
                <h3>{p.cost}$</h3>
                <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
      />
                <p>
                  {p.article}
                </p>
                <form method="post">
                  <button name="order" id="order" type="submit" value=""  onClick={handleClick}>Sifariş Et</button>
                </form>
              </div>
              {/* <!-- <div id="success">
                <div className="success-content">
                  <i className="fa-sharp fa-solid fa-circle-check"></i>
                  <h2>Müraciətiniz uğurla göndərildi.</h2><br>
                  <h2>Təşəkkürlər</h2>
                  <span className="success-close btn btn-info">Bağla</span>
                </div>
              </div> --> */}
            </div>
          </div>
        )
      })
     }
  {/* <!-- Related Products --> */}
     <center>
        <h1 className="mt-5">Related Products</h1>
      </center>
      <div className="relatedProductContainer m-5">
        <div className="relatedProductItem mt-5">
          <div>
            <img src={Img} alt="" className="mb-2"/>
            <div>
              <div>
                <h3>Qazsız 18L</h3>
                  <h4>15$</h4>
              </div>
              <p>Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry. </p>
            </div>
          </div>
        </div>

        <div className="relatedProductItem mt-5">
          <div>
            <img src={Img} alt="" className="mb-2"/>
            <div>
              <div>
                <h3>Qazsız 18L</h3>
                  <h4>15$</h4>
              </div>
              <p>Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry. </p>
            </div>
          </div>
        </div>


        <div className="relatedProductItem mt-5">
          <div>
            <img src={Img} alt="" className="mb-2"/>
            <div>
              <div>
                <h3>Qazsız 18L</h3>
                  <h4>15$</h4>
              </div>
              <p>Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
