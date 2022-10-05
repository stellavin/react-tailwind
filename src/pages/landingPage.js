import Button from "../components/elements/Button";
import HeaderComponent from "../components/headerComponent";
import ImageComponent from "../components/imageComponent";

function Home() {
  const createMyEvent = () => {
    console.log("clicked");
  };
  return (
    <div className="flex flex-col h-fit items-center justify-center group bg-light-pink">
      <HeaderComponent />
      <ImageComponent />
      <Button title={"🎉 Create my event"} handleEvent={createMyEvent} />
    </div>
  );
}

export default Home;
