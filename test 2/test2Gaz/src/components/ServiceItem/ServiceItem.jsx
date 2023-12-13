import './ServiceItem.css';

export const ServiceItem = ({ service }) => {
  return (
    <div className="service">
      <a href={`/services/${service.id}`}>{service.name}</a>
      <div>{service.price}</div>
    </div>
  );
};
