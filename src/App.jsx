import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import "./App.css";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import TreeView from "./components/tree-view/TreeView";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-code-generator/QrCodeGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabTest from "./components/tabs/TabTest";
import ModalTest from "./components/custom-modal-popup/ModalTest";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import Search from "./components/search-autocomplete-with-api/Search";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import UseFetchTest from "./components/use-fetch/UseFetchTest";
import UseOutsideClickTest from "./components/use-outside-click/UseOutsideClickTest";
import UseWindowResizeTest from "./components/use-window-resize/UseWindowResizeTest";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/ScrollToTopAndBottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/ScrollToSection";

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QrCodeGenerator />
      <LightDarkMode />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <TabTest />
      <ModalTest />
      <GithubProfileFinder />
      <Search />
      <TicTacToe />
      <UseFetchTest />
      <UseOutsideClickTest />
      <UseWindowResizeTest />
      <ScrollToTopAndBottom />
      <ScrollToSection />
    </>
  );
}

export default App;
