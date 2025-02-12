import { FaHeart } from "react-icons/fa";

const Wishlist = ({ wishlist }) => {
  return (
    <div>
      <h1>
        Wishlist <FaHeart /> {wishlist > 0 && `+${wishlist}`}
      </h1>
    </div>
  );
};

export default Wishlist;
