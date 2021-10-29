import s from "./Comment.module.css";
import { TComment } from "../../types/Comment.types";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../helpers/hooks";
import { addReply } from "../../store/threadSlice";
import { getRandomAvatar } from "@fractalsoftware/random-avatar-generator";
import ReplyForm from "../ReplyForm";
import { DoubleRightOutlined } from "@ant-design/icons";
import cx from "classnames";

type TCommentComponent = {
  data: TComment;
  threadIndex: number;
  className?: string;
};

export const Comment = ({
  className,
  threadIndex,
  data: { id, text, name, children },
}: TCommentComponent) => {
  const dispatch = useAppDispatch();
  const [hasReplyForm, setReplyForm] = useState(false);
  const [avatar, setAvatar] = useState("");

  const onReply = (payload: { text: string; name: string }) => {
    dispatch(addReply({ ...payload, parentId: id, threadIndex }));
    setReplyForm(false);
  };

  useEffect(() => {
    setAvatar(btoa(getRandomAvatar()));
  }, [setAvatar]);

  const toggleReplyForm = () => setReplyForm(!hasReplyForm);

  return (
    <div className={cx([s.comment, className])}>
      <div className={s.info}>
        <div className={s.avatar}>
          <img alt="avatar" src={`data:image/svg+xml;base64,${avatar}`} />;
        </div>
        <div className={s.name}>{name}</div>
        <div className={s.interactionElements}>
          <DoubleRightOutlined
            onClick={toggleReplyForm}
            className="icon replyIcon"
          />
        </div>
      </div>
      <div className={s.contentBox}>
        <div className={s.divider} />
        <div className={s.content}>
          <div className={s.commentText}>{text}</div>
          {hasReplyForm && (
            <ReplyForm onClose={toggleReplyForm} onReply={onReply} />
          )}
          {children &&
            children.map((child) => (
              <div className={s.child}>
                <Comment
                  threadIndex={threadIndex}
                  data={{ ...child }}
                ></Comment>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
