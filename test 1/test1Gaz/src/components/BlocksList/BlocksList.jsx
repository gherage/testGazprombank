import { mockData } from '../../utils/MockData';
import { BlockItem } from '../BlockItem/BlockItem';
import './BlocksList.css';

export const BlocksList = () => {
  return (
    <div className="blockContainer">
      {mockData.map((block) => (
        <BlockItem key={crypto.randomUUID} data={block} />
      ))}
    </div>
  );
};
