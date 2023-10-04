import { FaShoppingCart } from 'react-icons/fa';

export const CarritoDeCompras = () => {
    return (
        <div  className="mx-2 relative ">
            <FaShoppingCart size={24} />
            <span className="text-black px-1">
              0
            </span>
        </div>
    );
};
