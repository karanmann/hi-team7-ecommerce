import Card from './Card';
import '../styles/CardContainer.css';

const CardContainer = ({ filteredData }) => {
  return (
    <div className="cards-container">
      {filteredData.map((item) => (
        <Card key={item.id} image={item.img} />
      ))}
    </div>
  );
};

export default CardContainer;
