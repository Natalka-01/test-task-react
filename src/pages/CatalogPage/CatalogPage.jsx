import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { resetItems } from "../../redux/campers/slice";
import CamperCard from "../../components/CamperCard/CamperCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import Loader from "../../components/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, total, loading } = useSelector(state => state.campers);
  const filters = useSelector(state => state.filters);
  const [page, setPage] = useState(1);

  // Скидаємо все при новому пошуку (фільтрах)
  useEffect(() => {
    dispatch(resetItems());
    setPage(1);
    dispatch(fetchCampers({ page: 1, filters }));
  }, [dispatch, filters]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ page: nextPage, filters }));
  };

  return (
    <div className={css.container}>
      <aside className={css.sidebar}><FilterBar /></aside>
      <main className={css.content}>
        <div className={css.list}>
          {items.map(item => <CamperCard key={item.id} camper={item} />)}
        </div>
        {loading && <Loader />}
        {items.length < total && !loading && (
          <button className={css.loadMore} onClick={loadMore}>Load more</button>
        )}
      </main>
    </div>
  );
};
export default CatalogPage;