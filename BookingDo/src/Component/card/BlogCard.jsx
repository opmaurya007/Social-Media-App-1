const BlogCard = (props) => (
  <>
    <div className="store-box">
      <div className="store-image">
        <img src={props.image} alt={props.imagee} />
      </div>
      <div className="feature-headpage">
        <p className="card-description">{props.description}</p>
        <div className="btn-3">
          <button>Read More</button>
        </div>
      </div>
    </div>
  </>
);
export default BlogCard;
