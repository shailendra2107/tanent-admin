import view from "../../assets/Icons/open_eye.svg";
import Icon from "../Icon";

export const ServiceRequest: any[] = [
  {
    dataField: "des",
    caption: "Description",
    cssClass: "px-10",
  },
  {
    dataField: "date",
    caption: "Date",
    cssClass: "px-10",
    width: 120,
  },

  {
    dataField: "status",
    caption: "status",
    cssClass: "px-10",
    width: 120,
    cellRender: (cellData: any) => {
      return (
        <label className="font_13 text_green bg_light_green p-1 flex items-center justify-center rounded-sm  font-bold">
          {cellData.data.status}
        </label>
      );
    },
  },
  {
    dataField: "",
    caption: "view details",
    width: 150,
    cssClass: "text_center",
    cellRender: (cellData: any) => {
      return (
        <div className="flex justify-center cursor-pointer active:scale-90 transition duration-150">
          <Icon src={view} height="auto" />
        </div>
      );
    },
  },
];
