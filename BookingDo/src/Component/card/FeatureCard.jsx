const FeatureCard = (props) => (
  <>
    <div className="feature-box" style={{ backgroundColor: props.color }}>
      <div className="card-image">
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
