type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
     
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Free Support
</h4>
         </div>
         <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>         Source code

</h4>
         </div>

    </section>
  );
};
  
export default Description;
    