import { TComment } from "../../types/Comment.types";

const ThreadMock: TComment = {
  id: 1,
  name: "warp99",
  text: "In case anyone fails to recognise it this is the methane distributor for Super Heavy. There are twenty feed pipes to the outer ring of engines in two layers of ten at the top and then what appears to be nine vertical pipes to the inner ring of engines. So this is for B5 or B6 since we think the 13 engine thrust pucks come in for B7.",
  children: [
    {
      id: 2,
      name: "HalfManHalfBiscuit_",
      text: "That is wild that we get to see such a strange piece of the very guts of a Super Heavy. Kind of like seeing a real human heart.",
      children: [],
    },
    {
      id: 3,
      name: "mattmacphersonphoto",
      text: "Where does this sit in the booster? Right above the thrust puck?",
      children: [
        {
          id: 4,
          name: "warp99",
          text: "Yes welded to the center of the thrust puck with the 1.2m diameter methane downcomer feeding into the top. That seems to be a fill pipe coming in the side at the top of the distributor.",
          children: [
            {
              id: 5,
              name: "DidaMath",
              text: "1.2m downcomer means that the pipe alone will hold something like 30 cubic meters of fuel. After depleting the main methane tank, Superheavy will continue to operate for a number of miles almost equal to what my car will achieve after the tank is completely empty. What we lack in fuel we make up in courage!",
              children: [],
            },
          ],
        },
        {
          id: 6,
          name: "Blarck-Deek",
          text: "picture of it installed",
          children: [],
        },
      ],
    },
    {
      id: 7,
      name: "djohnso6",
      text: "How can you tell it apart from the LOX distributor?",
      children: [
        {
          id: 8,
          name: "alle0441",
          text: "There isn't one. LOX is sitting directly above each engine.",
          children: [],
        },
        {
          id: 9,
          name: "Inertpyro",
          text: "Lox just comes out through holes on the bottom of the tank dome with pick up tubes going to the bottom of the dome for the outer engines. Methane needs to be transferred down and then split from the upper tank.",
          children: [],
        },
      ],
    },
  ],
};

export default ThreadMock;
