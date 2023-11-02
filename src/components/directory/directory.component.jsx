import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ category }) => {
  return (
    <div className="directory-container">
      {category.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};
export default Directory;
