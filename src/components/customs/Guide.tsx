import { FaQuestion } from "react-icons/fa";
import { driver } from "driver.js";

const Guide = () => {
  const hanldeGuideTour = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: "#input-date-container",
          popover: {
            title: "This is your input date",
            description: "Enter the date that you want to convert to your localization time zone",
            side: "left",
            align: "start",
          },
        },
        {
          element: "#convert-button-container",
          popover: {
            title: "Convert Button",
            description: "Click here to start converting your input data",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#output-date-container",
          popover: {
            title: "This is your output date",
            description: "The result of the conversion will be displayed here",
            side: "left",
            align: "start",
          },
        },
        { popover: { title: "Happy Using 👋", description: "If you have any trouble. Don't hesitate to contact me 😉." } },
      ],
    });

    driverObj.drive();
  };

  return (
    <button className="btn btn-circle fixed bottom-32 right-2" onClick={hanldeGuideTour}>
      <FaQuestion className="w-5 h-5" />
    </button>
  );
};

export default Guide;
