import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div
      className="category-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <img src={}/> */}
      <div className="category-body-container">
        <h1> {title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
