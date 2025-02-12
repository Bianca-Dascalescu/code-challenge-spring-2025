import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./MenuItem.module.css";
import { FaHeart } from "react-icons/fa";

const MenuItem = ({ dish, addToWishList }) => {
  const { strMeal: name, strMealThumb: image } = dish;
  const navigate = useNavigate();
  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button onClick={() => navigate(`/meals/${dish.idMeal}`)}>
          Details
        </Button>
      </div>
      <h2>{dish.strMeal}</h2>
      <button onClick={addToWishList}>
        <FaHeart />
      </button>
    </div>
  );
};

export default MenuItem;
