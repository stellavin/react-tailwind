import Button from "../components/elements/Button";
import { useHistory } from "react-router-dom";
import HeaderComponent from "../components/headerComponent";

const CreateEventPage = () => {
  const history = useHistory();

  const createMyEvent = () => {
    history.push("/event");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center group bg-white-color">
      <HeaderComponent createtitle="Create new event." Img="" />
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Event Name
        </label>
        <div className="mt-1">
          <input type="text" name="Eventname" id="email" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <div className="mt-1">
          <input type="text" name="Eventname" id="email" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <div className="mt-1">
          <input type="text" name="Eventname" id="email" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <div className="mt-1">
          <input type="text" name="Eventname" id="email" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Location Name
        </label>
        <div className="mt-1">
          <input type="text" name="Eventname" id="email" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <div className="mt-1">
          <input type="file" name="Eventname" id="email" accept="image/*" />
        </div>
      </div>

      <Button title={"🎉 Create my event"} handleEvent={createMyEvent} />
    </div>
  );
};

export default CreateEventPage;
