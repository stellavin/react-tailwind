import Button from "../components/elements/Button";
import { useHistory } from "react-router-dom";
import HeaderComponent from "../components/headerComponent";

const CreateEventPage = () => {
  const history = useHistory();

  const createMyEvent = () => {
    history.push("/event");
  };

  return (
    <div className="flex flex-col h-fit items-center justify-center group bg-white-color">
      <div className="sm:mt-18 mb-10 text-center ">
        <>
          <h1 className="w-400">
            Create <span className="text-gradient">Event</span>
          </h1>
        </>
      </div>{" "}
      <div className="-mt-14">
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
