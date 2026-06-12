import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, MapPin, Mail, Search, Wrench, Truck, ShieldCheck } from 'lucide-react';
import './style.css';

function App() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', vehicle:'', vin:'', part:'' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submitRequest = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Parts Request from GO-AUTO Website');
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nVehicle: ${form.vehicle}\nVIN: ${form.vin}\nPart Needed: ${form.part}`);
    window.location.href = `mailto:info@go-autoparts.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <section className="hero">
        <nav>
          <div className="logo">GO-AUTO PARTS</div>
          <a className="phoneLink" href="tel:6155360536"><Phone size={18}/> 615-536-0536</a>
        </nav>

        <div className="heroContent">
          <span className="badge">Website Coming Soon</span>
          <h1>Quality Used Auto Parts & Vehicle Solutions</h1>
          <p>We are building a better online experience for parts requests, customer service, and vehicle solutions.</p>
          <div className="actions">
            <a href="#request" className="btn primary"><Search size={18}/> Request a Part</a>
            <a href="tel:6155360536" className="btn secondary"><Phone size={18}/> Call Now</a>
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="card"><Wrench/><h3>Used Auto Parts</h3><p>Request quality used parts for your vehicle.</p></div>
        <div className="card"><Truck/><h3>Shipping Support</h3><p>Fast service and shipping options coming soon.</p></div>
        <div className="card"><ShieldCheck/><h3>Dealer Services</h3><p>Professional support for vehicle and parts operations.</p></div>
      </section>

      <section className="split">
        <div>
          <h2>About GO-AUTO PARTS LLC</h2>
          <p>GO-AUTO PARTS LLC is preparing a new online platform to serve customers looking for used auto parts, vehicle information, and dealer-related services.</p>
          <p className="muted">Our full website is currently under construction. Please contact us directly or submit a parts request below.</p>
        </div>
        <div className="comingSoon">
          <h3>Coming Soon</h3>
          <ul>
            <li>Online Parts Search</li>
            <li>Customer Requests</li>
            <li>Order Tracking</li>
            <li>Vehicle Inventory</li>
          </ul>
        </div>
      </section>

      <section id="request" className="requestBox">
        <h2>Request a Part</h2>
        <p>Tell us what you need and we will get back to you.</p>
        <form onSubmit={submitRequest}>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="vehicle" placeholder="Vehicle Year / Make / Model" onChange={handleChange} required />
          <input name="vin" placeholder="VIN (Optional)" onChange={handleChange} />
          <textarea name="part" placeholder="Part Needed" onChange={handleChange} required />
          <button type="submit">Submit Request</button>
        </form>
      </section>

      <footer>
        <div><strong>GO-AUTO PARTS LLC</strong></div>
        <div><MapPin size={16}/> 450 S Mill St, Dowelltown, TN 37059</div>
        <div><Phone size={16}/> 615-536-0536</div>
        <div><Mail size={16}/> info@go-autoparts.com</div>
        <small>© 2026 GO-AUTO PARTS LLC. All rights reserved.</small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
