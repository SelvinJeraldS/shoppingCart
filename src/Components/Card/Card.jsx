import React from 'react';

const Card = () => {
  const [cards, setCards] = useState([
    { title: "Card 1", content: "Content 1", imageUrl: "https://example.com/image1.jpg" },
    { title: "Card 2", content: "Content 2", imageUrl: "https://example.com/image2.jpg" },
    { title: "Card 3", content: "Content 3", imageUrl: "https://example.com/image3.jpg" }
  ]);

  return (
    <div className="card-group">
      {cards.map((card, index) => (
        <Card
          key={index} // Remember to provide a unique key when rendering dynamic lists
          title={card.title}
          content={card.content}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
  };

export default Card;
