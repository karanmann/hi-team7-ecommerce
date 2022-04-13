import Card from './Card';
import { popularProducts } from '../Data';
import '../styles/CardContainer.css';

const CardContainer = () => {
  return (
    <div className="cards-container">
      {popularProducts.map((item) => (
        <Card key={item.id} image={item.img} />
      ))}
    </div>
  );
};

export default CardContainer;
