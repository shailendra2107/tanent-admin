import React from "react";
import NavHeader from "./NavHeader";
import Navigate from "./Navigate";
// import { Link } from 'react-router-dom';

const App: React.FC<any> = ({ children }) => {
  // const [open, setOpen] = useState<boolean>(true);
  // const Menus = [
  //   { title: "Dashboard", src: Chart_fill, path: "/" },
  //   { title: "Inbox", src: Chat, path: "/index" },
  //   { title: "Accounts", src: User, path: "/Accounts", gap: true },
  //   { title: "Schedule ", src: Calendar, path: "/Schedule " },
  //   { title: "Search", src: Search, path: "/Search" },
  //   { title: "Analytics", src: Chart, path: "/Analytics" },
  //   { title: "Files ", src: Folder, path: "/Files ", gap: true },
  //   { title: "Setting", src: Setting, path: "/Setting" },
  // ];

  return (
    <div className="">
      {/* ///////////// Header \\\\\\\\\\\\\\\\\\ */}
      <NavHeader />
      {/* ///////////// Navigate \\\\\\\\\\\\\\\ */}
      <Navigate />
      <div className="bg-light-smoke">{children}</div>
    </div>
  );
};

export default App;
