import '../styles/products.css';
import { useEffect, useState } from 'react';


function Posts() {

  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState(data);
const a=0;
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/posts/")
    .then(response => response.json())
    .then(data => setPosts(data));
  }, [a]);

  //filteration
  useEffect(()=> {
    const getproducts = async () =>{
    const response = await fetch("http://127.0.0.1:8000/api/v1/posts/");

    setData(await response.clone().json());
    setFilter(await response.json());

    console.log(filter);
}}, [data]);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  return (
    <div className="App">
      <center>
        <h1 className="mt-5 productHeader">Xidmətlər</h1>
        <hr/>
      </center>

      <div className="productsContainer">
        <div className="filterationContainer">
          <div className="filteration mt-5" >
            <div>
              <h3>Kateqoriyalar</h3>
              <hr/>
              <ul>
                <li><a href="/" onClick={()=>setFilter(data)}>Usta</a></li>
                <li><a href="/" onClick={()=>setFilter(data)}>Repetitor</a></li>
                <li><a href="/" onClick={()=>setFilter(data)}>Uşaq baxıcısı</a></li>
                <li><a href="/" onClick={()=>setFilter(data)}>Copywriter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="productContainer">
          <form>
            <input type="text" className="form-control" placeholder="Axtar"/>
            <button className="btn btn-primary">Axtar</button>
          </form>


          <div>
          {
            posts.map(post=>{
              return(
                <a href={`/posts/${post.id}`} key={post.id} >
                  <div className="productItem mt-5">
                    <div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tellissaare.JPG/200px-Tellissaare.JPG" alt="" className="mb-2" id={post.id}/>
                      <div>
                        <div>
                          <h4 className="title">{post.title}</h4>
                          <h4>{post.cost}$</h4>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry. </p>
                      </div>
                    </div>
                    <a className='btn btn-primary' href={`/posts/${post.id}`}>Order</a>
                  </div>
                </a>
              )
            })
          }
          </div>
          <button className="btn btn-lg m-5">Daha çox</button>
        </div>
      </div>
    </div>
  );
}

export default Posts;
