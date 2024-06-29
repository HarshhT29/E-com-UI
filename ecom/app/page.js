import React from "react";

const page = () => {
  return (
    <div>
      <section id="up">
        <h3>Trade in-offer</h3>
        <h2>Super Offers</h2>
        <h1>On all products</h1>
        <p>Get up to 60% off!</p>
        <button>Shop Now</button>
      </section>

      <section id="features" class="section-p1">
        <div class="fe-box">
          <img src="/features/f1.png" alt="fe1" />
          <h6>Free Shipping</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f2.png" alt="fe1" />
          <h6>On Time Delivery</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f3.png" alt="fe1" />
          <h6>Save Money</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f4.png" alt="fe1" />
          <h6>Promotions</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f5.png" alt="fe1" />
          <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
          <img src="/features/f6.png" alt="fe1" />
          <h6>24/7 Support</h6>
        </div>
      </section>






    {/* NEWSLETTER */}
    <section id="newsletter" class="section-p1 section-m1" >
        <div class="nl1">
            <h3>Sign Up</h3>
            <p class="p2">Get updates about our latest and <span className="text-[#ffbd27]">special offers.</span></p>
        </div>
        <div class="nl2">
            <input type="email" placeholder="Enter your email" />
            <button class="btn">SignUp</button>
        </div>
    </section>


    </div>
  );
};

export default page;
