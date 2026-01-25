import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { resetItems } from "../../redux/campers/slice";

import FilterBar from "../../components/FilterBar/FilterBar";
import CamperCard from "../../components/CamperCard/CamperCard";
import Loader from "../../components/Loader/Loader";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  
  // Отримуємо дані зі стору
  const { items, loading, error, total } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);
  
  // Локальний стан для сторінок (пагінація)
  const [page, setPage] = useState(1);

  // При першому завантаженні очищуємо список і вантажимо першу порцію
  useEffect(() => {
    dispatch(resetItems());
    dispatch(fetchCampers({ page: 1, filters }));
  }, [dispatch]);

  // Функція завантаження наступної сторінки
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ page: nextPage, filters }));
  };

  // Перевірка, чи показувати кнопку "Load more"
  const canLoadMore = items.length < total && !loading;

  return (
    <div className={css.container}>
      {/* Бокова панель з фільтрами */}
      <aside className={css.sidebar}>
        <FilterBar />
      </aside>

      {/* Основний контент зі списком кемперів */}
      <main className={css.content}>
        {items.length > 0 ? (
          <ul className={css.list}>
            {items.map((camper) => (
              /* Використовуємо camper.id як унікальний ключ, щоб уникнути помилок у консолі */
              <li key={camper.id} className={css.listItem}>
                <CamperCard camper={camper} />
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p className={css.empty}>No campers found. Try changing filters.</p>
        )}

        {/* Індикатор завантаження */}
        {loading && <Loader />}

        {/* Повідомлення про помилку */}
        {error && <p className={css.error}>Error: {error}</p>}

        {/* Кнопка пагінації */}
        {canLoadMore && (
          <button 
            type="button" 
            className={css.loadMoreBtn} 
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </main>
    </div>
  );
};

export default CatalogPage;