import Notifications from "./components/Notifications";
import Sidebar from "./components/Sidebar";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl bg-black text-white py-3">Video Chat</h1>
      </div>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
