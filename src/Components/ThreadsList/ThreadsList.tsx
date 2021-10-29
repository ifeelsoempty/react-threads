import Comment from "../Comment";
import { selectAllThreads } from "../../store/threadSlice";
import { useAppSelector } from "../../helpers/hooks";
import s from "./ThreadsList.module.css";

export const ThreadsList = () => {
  const threadsData = useAppSelector(selectAllThreads);
  return (
    <div className={s.threadsList}>
      {threadsData.map((thread, index) => (
        <Comment
          threadIndex={index}
          className={s.thread}
          data={{ ...thread }}
        />
      ))}
    </div>
  );
};
