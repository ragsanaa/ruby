import "../styles/card_info.css";
function CardInfo() {
  return (
    <div className="App">
      <div className="logincontainer">
        <input type="text" placeholder="Card Number" className="form-control"/>
        <input type="text" placeholder="Card Holder" className="form-control"/>
        <input type="text" placeholder="Expiration Date" className="form-control"/>
        <input type="text" placeholder="CVV" className="form-control"/>
        <a href="posts" type="submit" className="btnLogin" onClick={() =>{ alert("Successfully upgreded.")}}>
          Submit
        </a>
      </div>
    </div>
  );
}

export default CardInfo;
