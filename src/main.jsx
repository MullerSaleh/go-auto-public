import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, Mail, MapPin, Clock, Lock, User, Car, Barcode, Send, Wrench, Truck, ShieldCheck, ShoppingBag } from 'lucide-react';
import './style.css';

function App() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', vin: '', part: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitRequest = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Parts Request from GO-AUTO Website');
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nVehicle: ${form.vehicle}\nVIN: ${form.vin}\nPart Needed: ${form.part}`);
    window.location.href = `mailto:info@go-autoparts.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page">
      <section className="hero" id="home">
        <div className="shade" />
        <nav className="nav">
          <a className="brand" href="#home">
            <div className="logoCircle">GO</div>
            <div className="logoText">
              <strong>GO-AUTO</strong>
              <span>PARTS</span>
              <small>LLC</small>
            </div>
          </a>
          <div className="navLinks">
            <a href="#home" className="active">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#request">Request a Part</a>
            <a href="#contact">Contact Us</a>
          </div>
          <a className="topPhone" href="tel:6155360536"><Phone size={20} /> 615-536-0536</a>
        </nav>

        <div className="heroInner">
          <span className="badge">QUALITY YOU CAN TRUST</span>
          <h1>Quality Used<br />Auto Parts<br /><em>Nationwide</em></h1>
          <p>We provide reliable used auto parts and vehicle solutions with fast service and nationwide shipping.</p>
          <div className="actions">
            <a className="btn primary" href="#request"><ShoppingBag size={18} /> Request a Part</a>
            <a className="btn secondary" href="tel:6155360536"><Phone size={18} /> Call Now</a>
          </div>
        </div>

        <div className="serviceStrip" id="services">
          <div className="serviceCard"><Wrench size={44} /><div><h3>Used Auto Parts</h3><p>Quality tested parts for all makes and models.</p></div></div>
          <div className="serviceCard"><Truck size={44} /><div><h3>Fast Shipping</h3><p>Nationwide shipping with care and speed.</p></div></div>
          <div className="serviceCard"><ShieldCheck size={44} /><div><h3>Dealer Support</h3><p>Professional support for your business.</p></div></div>
        </div>
      </section>

      <section className="request" id="request">
        <div className="requestIntro">
          <h2>Request a Part</h2>
          <span className="redLine" />
          <p>Tell us what you need and we will get back to you.</p>
        </div>
        <form onSubmit={submitRequest}>
          <label><User size={18} /><input name="name" placeholder="Full Name" required onChange={handleChange} /></label>
          <label><Phone size={18} /><input name="phone" placeholder="Phone Number" required onChange={handleChange} /></label>
          <label><Mail size={18} /><input name="email" placeholder="Email" onChange={handleChange} /></label>
          <label><Car size={18} /><input name="vehicle" placeholder="Vehicle Year / Make / Model" required onChange={handleChange} /></label>
          <label className="full"><Barcode size={18} /><input name="vin" placeholder="VIN (Optional)" onChange={handleChange} /></label>
          <label className="full area"><Wrench size={18} /><textarea name="part" placeholder="Part Needed" required onChange={handleChange} /></label>
          <button className="submit" type="submit"><Send size={18} /> Submit Request</button>
        </form>
      </section>

      <footer className="footer" id="contact">
        <div className="footerGrid">
          <div>
            <div className="footerBrand"><div className="logoCircle small">GO</div><div className="logoText"><strong>GO-AUTO</strong><span>PARTS</span><small>LLC</small></div></div>
            <p>Providing quality used auto parts and vehicle solutions you can trust.</p>
            <div className="social"><span>f</span><span>◎</span><span>✉</span></div>
          </div>
          <div><h4>Company</h4><a href="#about">About Us</a><a href="#services">Services</a><a href="#request">Request a Part</a><a href="#contact">Contact Us</a></div>
          <div><h4>Contact</h4><p><MapPin size={16}/> GO-AUTO PARTS LLC<br/>450 S Mill St<br/>Dowelltown, TN 37059</p><p><Phone size={16}/> 615-536-0536</p><p><Mail size={16}/> info@go-autoparts.com</p></div>
          <div><h4>Business Hours</h4><p><Clock size={16}/> Monday - Friday<br/>8:00 AM - 5:00 PM</p><p>Saturday - Sunday<br/>Closed</p></div>
          <div><h4>Quick Links</h4><a>Warranty Information</a><a>Shipping Information</a><a>Terms & Conditions</a><a>Privacy Policy</a></div>
        </div>
        <div className="bottom"><span>© 2026 GO-AUTO PARTS LLC. All rights reserved.</span><a href="https://portal.go-autoparts.com"><Lock size={14}/> Admin Login</a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
