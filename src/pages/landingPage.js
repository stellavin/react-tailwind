import HeaderComponent from "../components/headerComponent";
import ImageComponent from "../components/imageComponent";

function Home() {
  return (
    <div className="flex flex-col h-fit items-center justify-center group bg-light-pink">
      <HeaderComponent />
      <ImageComponent />
    </div>
  );
}

export default Home;
