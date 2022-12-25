const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/2111.jpg)'}} className="subscribe__content">
          <h4>Join us today ! 
          </h4>
<p>  More than 500 designers and developers trust Swiss-High-Tech Services.</p>
          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe