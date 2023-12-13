import { useEffect } from 'react';
import { getServicesFetch } from '../../redux/ServiceState';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceItem } from '../ServiceItem/ServiceItem';
import spinner from '../../assets/dual_ball.svg';

const ServicesList = () => {
  const loading = useSelector((state) => state.services.isLoading);
  const services = useSelector((state) => state.services.services);
  const error = useSelector((state) => state.services.error);
  const spin = <img src={spinner} alt="preloader" />;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesFetch());
  }, [dispatch]);

  const onHandleRefetch = () => dispatch(getServicesFetch());

  const contentError = (
    <div>
      Произошла ошибка!
      <button type="button" onClick={onHandleRefetch}>
        Повторить запрос
      </button>
    </div>
  );

  const content = (
    <div className="servicesList">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );

  return loading ? spin : error ? contentError : content;
};

export default ServicesList;
