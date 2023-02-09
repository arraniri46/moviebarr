import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import { useSearchStore } from "../../reducer/store";

const Main = () => {
  const { isSearch } = useSearchStore();

  return (
    <>
      <div>{!isSearch ? <HomePage /> : <SearchPage />}</div>
    </>
  );
};

export default Main;
