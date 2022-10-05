import Button from "../components/elements/Button";
import HeaderComponent from "../components/headerComponent";
import ImageComponent from "../components/imageComponent";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const createMyEvent = () => {
    history.push("/create");
  };
  return (
    <div className="flex flex-col h-fit items-center justify-center group bg-light-pink">
      <HeaderComponent
        subTitle=" Easily host and share events with your friends across any social
            media."
        Img=""
      />
      <ImageComponent />
      <Button title={"🎉 Create my event"} handleEvent={createMyEvent} />
    </div>
  );
}

export default Home;
