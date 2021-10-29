export type TComment = {
  id: number;
  name: string;
  text: string;
  children: TComment[];
};

export type TCommentPayload = {
  parentId: number;
  threadIndex: number;
  name: string;
  text: string;
};

export type TThreadPayload = {
  name: string;
  text: string;
};
