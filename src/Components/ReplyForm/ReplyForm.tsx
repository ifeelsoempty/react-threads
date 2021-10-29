import { SyntheticEvent } from "hoist-non-react-statics/node_modules/@types/react";
import { TCommentPayload } from "../../types/Comment.types";
import s from "./ReplyForm.module.css";
import { useState } from "react";
import cx from "classnames";

type TReply = {
  onReply(event: { text: string; name: string }): void;
  onClose?(event: SyntheticEvent): void;
};

export const ReplyForm = ({ onReply, onClose }: TReply) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleReply = () => {
    if (text && name) {
      clearFields();
      onReply({ text, name });
    }
  };

  const clearFields = () => {
    setName("");
    setText("");
  };

  return (
    <div className={s.replyForm}>
      <div className={s.inputBox}>
        <div>Name:</div>
        <input
          className={s.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={s.inputBox}>
        <div>Comment:</div>
        <textarea
          className={s.input}
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={s.buttonsContainer}>
        {onClose && (
          <button className={cx([s.button, s.redButton])} onClick={onClose}>
            Canel
          </button>
        )}
        <button className={cx([s.button, s.greenButton])} onClick={handleReply}>
          Reply
        </button>
      </div>
    </div>
  );
};
