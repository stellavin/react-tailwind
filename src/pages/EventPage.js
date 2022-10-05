import Button from "../components/elements/Button";
import { useHistory } from "react-router-dom";
import HeaderComponent from "../components/headerComponent";
import image from "../assets/images/Birthday-cake.png";

const EventPage = () => {
  const history = useHistory();

  const createMyEvent = () => {
    history.push("/");
  };

  const event = {
    name: "Movie night",
    subtitle: "Hosted by Elysia",
    from: "18 August 6:00PM",
    to: "to 19 August 1:00PM UTC +10",
    streatname: "Street name",
    code: "Suburb, State, Postcode",
    responses: 13,
  };

  return (
    <div className="flex flex-col h-fit items-center justify-center group bg-light-pink">
      <div className=" sm:mt-16 mb-10 text-center ">
        <div className="w-400 ">
          <HeaderComponent Img={image} subTitle="" />
        </div>
        <div>
          <div>
            <h2>{event.name}</h2>
            <p className="smalltxt">{event.subtitle}</p>
          </div>

          <div>
            <div className="mt-10">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <div className="smallcard"></div>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div className="flex flex-col items-start">
                      <span className="fromtxt">{event.from}</span>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate"> {event.to}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex min-w-0 flex-1 items-center">
                  <div className="flex-shrink-0">
                    <div className="smallcard"></div>
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div className="flex flex-col items-start">
                      <span className="fromtxt">{event.streatname}</span>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="truncate"> {event.code}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
