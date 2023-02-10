import Layout from '../../layouts/Main';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { PayPalScriptProvider,PayPalButtons } from '@paypal/react-paypal-js';
import { RootState } from 'store';

const CheckoutPage = () => {

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  })
 
 
  return (
    <Layout>
         <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Log in</button>
                <button className="btn btn--rounded btn--border">Sign up</button>
              </div>

              <div className="block">
                <h3 className="block__title">Shipping information</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Email" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Address" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="First name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="City" />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Last name" />
                    </div>

                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Postal code / ZIP" />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input className="form__input form__input--sm" type="text" placeholder="Phone number" />
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select>
                          <option>Country</option>
                          <option value="Argentina">Argentina</option>  <option value="France">France</option>  <option value="England">England</option>
                          <option value="Suisse">Suisse</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Payment method</h3>
                <ul className="round-options round-options--three">
                <PayPalScriptProvider options={{"client-id":"AZqoesjbE7XnmdZ_wQlmmFgxmwa7bNbGDS2YbmEjncjX0oMlOxCb-KpWBtLPZTLxQWbOA0M7AzoiWCmq"}}>
                <PayPalButtons createOrder={(_data,actions)=>{
                  return actions.order.create({
                    purchase_units:[
                      {amount:{
                        value:`${priceTotal}`,
                      },
                    },
                    ],
                  });
                }}
              
                ></PayPalButtons>
                  </PayPalScriptProvider> 
                
                </ul>
              </div>
            
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />
                
                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Back</a>
            <div className="cart-actions__items-wrapper">
              {/* <button type="button" className="btn btn--rounded btn--border">Continue shopping</button>
              <button type="button" className="btn btn--rounded btn--yellow">Proceed to payment</button>  
                        */}
            </div>
          </div>
        </div>
      </section>
    
    </Layout>
    
  )
};

  
export default CheckoutPage