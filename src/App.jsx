import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// Імпортуємо базові компоненти (не ліниво, бо вони потрібні одразу)
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

// Використовуємо ліниве завантаження для великих сторінок
// Це покращує продуктивність (Performance) твого сайту
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));

const App = () => {
  return (
    // Layout забезпечує спільний Header та відступи (контейнер) для всіх сторінок
    <Layout>
      {/* Suspense показує Loader, поки браузер "підтягує" файл сторінки */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Головна сторінка: / */}
          <Route path="/" element={<HomePage />} />

          {/* Сторінка каталогу: /catalog */}
          <Route path="/catalog" element={<CatalogPage />} />

          {/* Динамічний маршрут для окремого кемпера: /catalog/:id */}
          {/* :id — це параметр, який ми будемо використовувати в DetailsPage через useParams */}
          <Route path="/catalog/:id" element={<DetailsPage />} />

          {/* "Запобіжник": якщо користувач введе неіснуючу адресу, 
              його автоматично перенаправить на головну сторінку */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;