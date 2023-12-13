import React from 'react';
import './BlockItem.css';

export const BlockItem = ({ data }) => {
  return (
    <div className="block">
      <h2 className="title">{data.header}</h2>
      <ul className="ulBlock">
        {data.options.map((option) => (
          <li key={crypto.randomUUID()}>
            <span className="liBlock">{option}</span>
          </li>
        ))}
      </ul>
      <div className="textBlock">{data.text}</div>
    </div>
  );
};
