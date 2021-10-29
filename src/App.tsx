import { ClearOutlined, ReloadOutlined } from "@ant-design/icons";
import "./App.css";
import ReplyForm from "./Components/ReplyForm";
import ThreadsList from "./Components/ThreadsList";
import { useAppDispatch } from "./helpers/hooks";
import {
  createThread,
  clearThreads,
  restoreThreadsMock,
} from "./store/threadSlice";

function App() {
  const dispatch = useAppDispatch();

  const handleReply = (payload: { text: string; name: string }) => {
    dispatch(createThread(payload));
  };
  const handleClear = () => {
    dispatch(clearThreads());
  };
  const handleRestore = () => {
    dispatch(restoreThreadsMock());
  };

  return (
    <div className="wallContainer">
      <div className="wallInterface">
        <ReloadOutlined className="icon restoreIcon" onClick={handleRestore} />
        <ClearOutlined className="icon clearIcon" onClick={handleClear} />
      </div>
      <ReplyForm onReply={handleReply} />
      <ThreadsList />
    </div>
  );
}

export default App;
