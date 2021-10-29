import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import threadMock from "./mocks/Thread.mock";
import {
  TComment,
  TCommentPayload,
  TThreadPayload,
} from "../types/Comment.types";
import { searchInTree } from "../helpers/search";

/* FIX: Index-dependend thread search */
export const counterSlice = createSlice({
  name: "threads",
  initialState: {
    threads: [threadMock],
    lastCommentId: 9,
  },
  reducers: {
    addReply: (state, { payload }: { payload: TCommentPayload }) => {
      const currentThread = state.threads[payload.threadIndex];

      if (currentThread) {
        const repliedComment = searchInTree<TComment>(
          currentThread,
          payload.parentId
        );

        state.lastCommentId = state.lastCommentId + 1;
        if (repliedComment) {
          repliedComment.children = [
            ...repliedComment.children,
            {
              id: state.lastCommentId,
              name: payload.name,
              text: payload.text,
              children: [],
            },
          ];
        }
      }
    },
    createThread: (state, { payload }: { payload: TThreadPayload }) => {
      state.lastCommentId = state.lastCommentId + 1;
      state.threads = [
        {
          id: state.lastCommentId,
          name: payload.name,
          text: payload.text,
          children: [],
        },
        ...state.threads,
      ];
    },
    clearThreads: (state) => {
      state.threads = [];
    },
    restoreThreadsMock: (state) => {
      state.threads = [threadMock];
    },
  },
});

export const { addReply, createThread, clearThreads, restoreThreadsMock } =
  counterSlice.actions;

export const selectAllThreads = (state: RootState) => state.threadSlice.threads;

export default counterSlice.reducer;
