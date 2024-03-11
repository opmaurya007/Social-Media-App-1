const FeatureCard = (props) => (
  <>
    <div className="store-box">
      <div className="store-image">
        <img src={props.image} alt={props.imagee} />
      </div>
      <div className="feature-headpage">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  </>
);
export default FeatureCard;
