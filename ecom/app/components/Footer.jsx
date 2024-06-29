import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="footer" class="section-p1">
        <div class="column">
          <img src="img/logo.png" alt="logo" style="margin-bottom: 28px;" />
          <h4>Contact</h4>
          <p>
            <Strong>Address:</Strong> Abc, Xyz, India
          </p>
          <p>
            <Strong>Phone:</Strong> +91 999xxxxx76
          </p>
          <p>
            <Strong>Hours:</Strong> 11:00 - 18:00, Mon-Fri
          </p>
          <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
              <i class="fa fa-facebook-f"></i>
              <i class="fa fa-twitter"></i>
              <i class="fa fa-instagram"></i>
              <i class="fa fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="column">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Instruction</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Help</a>
        </div>
        <div class="column">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div class="column install">
          <h4>Install App</h4>
          <p>Download our app for Android and iPhone.</p>
          <div class="d-logo">
            <img src="img/pay/app.jpg" />
            <img src="img/pay/play.jpg" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay/pay.png" />
        </div>

        <div class="copywright">
          <p>©2023, I made it 28/07</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;