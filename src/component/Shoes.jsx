const Shoes=()=>{
    return(
        <main className="shoes">
            <div className="shoes-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>Your feet deserves the best and we are here to help you with our new branded shoes. A Dream destination for all your requirements along with the facility to order online or pickup at your nearest store</p>
                <div className="shoes-btn">
                    <button>Shop Now</button>
                    <button className="second-btn">Category</button>
                </div>
                <div className="shopping">
                    Also availabe on
                    <div className="brand-icons">
                        <img src="src/images/amazon.png" alt="amazon"/>
                        <img src="src/images/flipkart.png" alt="flipkart"/>
                    </div>
                </div>
            </div>
            <div className="shoes-image">
                <img src="src/images/shoe_image.png" alt="shoes-image"/>
            </div>
        </main>
    );
};

export default Shoes;