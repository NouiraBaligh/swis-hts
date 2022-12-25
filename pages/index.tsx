import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />
      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/products/product-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>New trainings sessions are now in!</h3>
              <a href="#" className="btn btn--rounded">Show Sessions</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/products/product-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Flutter session</h3>
              <a href="#" className="btn btn--rounded">More details
</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/products/product-5.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>
Data Analytics session</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
            <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Comfort of learning from your own home</h4>
                  </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
              <h4>
A large selection of courses</h4>
                
                 </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>A special offer for new participants</h4>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
              <h4>Easy Payments</h4>
                   </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage