import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Spider Plant",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0zz.jpg/220px-Chlorophytum_comosum_0zz.jpg",
          description: "Excellent air purifier, easy to care for.",
          cost: "$10.00",
        },
        {
          name: "Snake Plant",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_plant_Sansevieria_trifasciata.jpg/220px-Snake_plant_Sansevieria_trifasciata.jpg",
          description: "Very low maintenance, tolerates low light.",
          cost: "$15.00",
        },
        {
          name: "Peace Lily",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/220px-Spathiphyllum_cochlearispathum_RTBG.jpg",
          description: "Elegant white blooms, great for low-light rooms.",
          cost: "$18.00",
        },
        {
          name: "Boston Fern",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Boston_fern_%28Nephrolepis_exaltata_%27Bostoniensis%27%29.jpg/220px-Boston_fern_%28Nephrolepis_exaltata_%27Bostoniensis%27%29.jpg",
          description: "Lush, feathery fronds that improve humidity.",
          cost: "$20.00",
        },
        {
          name: "Rubber Plant",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_-_rubber_fig.jpg/220px-Ficus_elastica_-_rubber_fig.jpg",
          description: "Bold dark leaves, purifies indoor air.",
          cost: "$22.00",
        },
        {
          name: "Aloe Vera",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/220px-Aloe_vera_flower_inset.png",
          description: "Soothing gel, drought-tolerant, easy to grow.",
          cost: "$12.00",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1499578124509-1611b77778c8?w=400&q=80",
          description: "Calming scent, beautiful purple blooms.",
          cost: "$12.00",
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&q=80",
          description: "Sweet, romantic fragrance, perfect indoors.",
          cost: "$14.00",
        },
        {
          name: "Rosemary",
          image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&q=80",
          description: "Mediterranean herb with a pine-like aroma.",
          cost: "$9.00",
        },
        {
          name: "Mint",
          image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&q=80",
          description: "Cool, refreshing scent great for teas.",
          cost: "$7.00",
        },
        {
          name: "Lemon Balm",
          image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&q=80",
          description: "Citrus scent with calming properties.",
          cost: "$9.00",
        },
        {
          name: "Hyacinth",
          image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=400&q=80",
          description: "Intensely sweet spring fragrance.",
          cost: "$11.00",
        },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://images.unsplash.com/photo-1599598425947-5202edd56fde?w=400&q=80",
          description: "Strong scent deters aphids and other pests.",
          cost: "$8.00",
        },
        {
          name: "Marigold",
          image: "https://images.unsplash.com/photo-1548460571-b7b5b70c4a9c?w=400&q=80",
          description: "Bright blooms that repel mosquitoes naturally.",
          cost: "$6.00",
        },
        {
          name: "Geraniums",
          image: "https://images.unsplash.com/photo-1562889880-4af5a63b1a92?w=400&q=80",
          description: "Colorful flowers that deter leafhoppers.",
          cost: "$10.00",
        },
        {
          name: "Basil",
          image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=400&q=80",
          description: "Repels flies and mosquitoes, smells wonderful.",
          cost: "$7.00",
        },
        {
          name: "Lavender (Insect)",
          image: "https://images.unsplash.com/photo-1499578124509-1611b77778c8?w=400&q=80",
          description: "Repels moths, fleas, flies and mosquitoes.",
          cost: "$13.00",
        },
        {
          name: "Catnip",
          image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?w=400&q=80",
          description: "10x more effective than DEET at repelling mosquitoes.",
          cost: "$9.00",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera (Med)",
          image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80",
          description: "Heals burns, cuts and skin irritations.",
          cost: "$13.00",
        },
        {
          name: "Chamomile",
          image: "https://images.unsplash.com/photo-1567360425618-1594206637d2?w=400&q=80",
          description: "Calming tea herb, relieves anxiety and insomnia.",
          cost: "$9.00",
        },
        {
          name: "Calendula",
          image: "https://images.unsplash.com/photo-1490750967868-88df5691cc3e?w=400&q=80",
          description: "Anti-inflammatory golden flower for skin care.",
          cost: "$8.00",
        },
        {
          name: "Echinacea",
          image: "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=400&q=80",
          description: "Boosts immune system, fights colds.",
          cost: "$14.00",
        },
        {
          name: "Ginger",
          image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
          description: "Aids digestion, anti-nausea, anti-inflammatory.",
          cost: "$10.00",
        },
        {
          name: "Turmeric",
          image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80",
          description: "Powerful anti-inflammatory and antioxidant.",
          cost: "$12.00",
        },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80",
          description: "Glossy leaves, thrives on neglect and low light.",
          cost: "$20.00",
        },
        {
          name: "Pothos",
          image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=400&q=80",
          description: "Trailing vine that tolerates almost anything.",
          cost: "$11.00",
        },
        {
          name: "Succulents Mix",
          image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80",
          description: "Assorted drought-tolerant desktop plants.",
          cost: "$15.00",
        },
        {
          name: "Cast Iron Plant",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
          description: "Virtually indestructible, tolerates deep shade.",
          cost: "$18.00",
        },
        {
          name: "Jade Plant",
          image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80",
          description: "Symbol of good luck, needs very little water.",
          cost: "$13.00",
        },
        {
          name: "Dracaena",
          image: "https://images.unsplash.com/photo-1614594575117-497f2b7a7b1c?w=400&q=80",
          description: "Striking striped leaves, tolerates low light.",
          cost: "$17.00",
        },
      ],
    },
  ];

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)
    setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
      ...prevState, // Spread the previous state to retain existing entries
      [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowPlants(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
    setShowPlants(true);
  };

  return (
    <div>
      <div style={styleObj}>
        <div className="luxury-heading">&nbsp;Paradise Nursery 🌴</div>
        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={handleHomeClick} style={styleA}>Home</a>
          </div>
          <div>
            <a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className='cart'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                  <rect width="256" height="256" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="176" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32,32H16"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                <div className='cart_quantity_count'>{cartItemCount}</div>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>
                <div>{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
