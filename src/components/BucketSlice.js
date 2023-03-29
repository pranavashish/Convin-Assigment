import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  buckets: [
    {
      id: nanoid(),
      name: "Entertainment",
      cards: [
        {
          id: nanoid(),
          title: "Kapil Sharma",
          link: "https://www.youtube.com/embed/mBseYad_sX4",
        },
        {
          id: nanoid(),
          title: "TMKOC",
          link: "https://www.youtube.com/embed/RPROWui7R30",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Educational",
      cards: [
        {
          id: nanoid(),
          title: "Coder Dost",
          link: "https://www.youtube.com/embed/1zCNdVhdvHE",
        },
        {
          id: nanoid(),
          title: "NCERT Wallah",
          link: "https://www.youtube.com/embed/qXZoCe_8Dfo",
        },
        {
          id: nanoid(),
          title: "Vikas Divyakirti",
          link: "https://www.youtube.com/embed/7oPLVNiRK68",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Fitness",
      cards: [
        {
          id: nanoid(),
          title: "Jeet Selal",
          link: "https://www.youtube.com/embed/MuTO0sCoHJE",
        },
        {
          id: nanoid(),
          title: "Yatinder Singh",
          link: "https://www.youtube.com/embed/IzkS_pH5ebI",
        },
        {
          id: nanoid(),
          title: "OkayMohit",
          link: "https://www.youtube.com/embed/GoIeBy7kTLM",
        },
      ],
    },
    {
      name: "Cooking",
      id: nanoid(),
      cards: [
        {
          id: nanoid(),
          title: "Ranveer Brar",
          link: "https://www.youtube.com/embed/Gb4NvSVCPOw",
        },
        {
          id: nanoid(),
          title: "Your Food Lab",
          link: "https://www.youtube.com/embed/iVXSOMNHrek",
        },
      ],
    },
  ],
};

export const bucketSlice = createSlice({
  name: "buckets",
  initialState,
  reducers: {
    editBucketName: {
      reducer(state, action) {
        const { editedName, id } = action.payload;
        const foundBucket = state.buckets.find((bucket) => bucket.id === id);
        if (foundBucket) {
          foundBucket.name = editedName;
        }
      },
    },
    deleteBucket: {
      reducer(state, action) {
        const { index } = action.payload;
        state.buckets.splice(index, 1);
      },
    },
    addBucket: {
      reducer(state, action) {
        state.buckets.unshift({
          name: "new bucket",
          id: nanoid(),
          cards: [],
          initialEdit: true,
        });
      },
    },
    addCard: {
      reducer(state, action) {
        const { bucketIndex, title, link } = action.payload;
        const newCard = {
          id: nanoid(),
          title,
          link,
        };

        const foundBucket = state.buckets.find(
          (bucket, index) => index === bucketIndex
        );
        foundBucket.cards.unshift(newCard);
      },
    },
    updateCard: {
      reducer(state, action) {
        const { title, link, bucketIndex, cardIndex } = action.payload;
        const foundBucket = state.buckets.find(
          (bucket, index) => index === bucketIndex
        );
        const foundCard = foundBucket.cards[cardIndex];
        foundCard.title = title;
        foundCard.link = link;
      },
    },
    deleteCard: {
      reducer(state, action) {
        const { bucketIndex, cardIndex } = action.payload;
        console.log(action.payload, "delete");
        state.buckets[bucketIndex].cards.splice(cardIndex, 1);
      },
    },
    toggleInitialEditValue: {
      reducer(state, action) {
        const { index } = action.payload;
        const val = state.buckets[index].initialEdit;
        if (val !== undefined) {
          state.buckets[index].initialEdit = false;
        }
      },
    },
  },
});

export const allBuckets = (state) => state.buckets.buckets;
export const {
  editBucketName,
  addCard,
  updateCard,
  deleteBucket,
  addBucket,
  deleteCard,
  toggleInitialEditValue,
} = bucketSlice.actions;

export default bucketSlice.reducer;
