import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71DM0VoXW2L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123456"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="1234567"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/615kwOY9+3L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="Samsung 28-Inch 4K Ultra HD 60Hz 4ms GTG IPS LED FreeSync Picture by Picture High Resolution Black/Grey Monitor"
            price={298.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81RAZNbGdmL._AC_SX679_.jpg"
          />
          <Product
            id="123456789"
            title="Echo Show 8 (2nd Gen, 2021 release) | HD smart display with Alexa and 13 MP camera | Charcoal"
            price={169.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/51qIGisRgqS._AC_UL640_FMwebp_QL65_.jpg"
          />

          <Product
            id="1234678"
            title="Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi 6E + 5G Cellular, 12MP front"
            price={1699.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81hAx31maUL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="987654321"
            title="Samsung 34-inch WQHD 100Hz WQHD Curved High Resolution Monitor with Thunderbolt - (LC34J791WTNXZA)"
            price={1294.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81oADRhNq2L._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
