import React from "react";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
    image:
      "https://media.discordapp.net/attachments/1314516379524923446/1314516749189775470/1708250582111.jpg?ex=6790b39f&is=678f621f&hm=176164641f9f03bca7c2ea11a37a6a94d61812621474f9ef7453e7a05956f757&=&format=webp&width=582&height=582",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
    image:
      "https://media.discordapp.net/attachments/1314516379524923446/1314516749189775470/1708250582111.jpg?ex=6790b39f&is=678f621f&hm=176164641f9f03bca7c2ea11a37a6a94d61812621474f9ef7453e7a05956f757&=&format=webp&width=582&height=582",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card",
    image:
      "https://media.discordapp.net/attachments/1314516379524923446/1314516749189775470/1708250582111.jpg?ex=6790b39f&is=678f621f&hm=176164641f9f03bca7c2ea11a37a6a94d61812621474f9ef7453e7a05956f757&=&format=webp&width=582&height=582",
  },
];

function Task13() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "200px",
            textAlign: "center",
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{ width: "100%", borderRadius: "4px" }}
          />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Task13;
