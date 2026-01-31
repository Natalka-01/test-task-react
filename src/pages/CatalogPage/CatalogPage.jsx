import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { resetItems } from "../../redux/campers/slice";
import FilterBar from "../../components/FilterBar/FilterBar";
import CamperList from "../../components/CamperList/CamperList";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, total, loading } = useSelector(state => state.campers);
  const filters = useSelector(state => state.filters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(resetItems());
    dispatch(fetchCampers({ page: 1, filters }));
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ page: nextPage, filters }));
  };

  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <FilterBar />
      </aside>
      <main className={css.content}>
        <CamperList campers={items} />
        {items.length < total && !loading && (
          <button className={css.loadMore} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </main>
    </div>
  );
};

export default CatalogPage;