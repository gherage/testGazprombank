import { useEffect } from 'react';
import { getOneServiceFetch } from '../../redux/ServiceState';
import { useDispatch, useSelector } from 'react-redux';
import spinner from '../../assets/dual_ball.svg';
import { useNavigate, useParams } from 'react-router-dom';
import './ServicePage.css';

const ServicePage = () => {
  const serviceId = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.services.isLoading);
  const oneService = useSelector((state) => state.services.oneService);
  const error = useSelector((state) => state.services.error);
  const spin = <img src={spinner} alt="preloader" />;

  useEffect(() => {
    dispatch(getOneServiceFetch(serviceId));
  }, [dispatch, serviceId]);

  const onHandleRefetch = () => dispatch(getOneServiceFetch(serviceId));

  const contentError = (
    <div>
      Произошла ошибка!
      <button type="button" onClick={onHandleRefetch}>
        Повторить запрос
      </button>
    </div>
  );

  const content = (
    <div className="serviceContainer">
      <div>{oneService.name}</div>
      <div>{oneService.content}</div>
      <div>{oneService.price}</div>
      <button type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );

  return loading ? spin : error ? contentError : content;
};

export default ServicePage;
