import { defineStore } from "pinia";

export const useFiltersStore = defineStore("filters", {
  state: () => {
    return {
      new: {
        tags: {
          isHeavilyDiscounted: {
            label: "Great Value",
            isSelected: true,
          },
          isPopular: {
            label: "Hot",
            isSelected: false,
          },
          isRare: {
            label: "Rare",
            isSelected: false,
          },
          isAev: {
            label: "AEV",
            isSelected: false,
          },
          isCustom: {
            label: "Customs",
            isSelected: false,
          },
          isComingSoon: {
            label: "Coming Soon",
            isSelected: false,
          },
          isPresale: {
            label: "Presale",
            isSelected: false,
          },
          isSold: {
            label: "Sold",
            isSelected: false,
          },
        },
        selections: [],
      },
    };
  },
});
/*
export const state = () => ({
  tags: {
    isHeavilyDiscounted: {
      label: "Great Value",
      isSelected: true,
    },
    isPopular: {
      label: "Hot",
      isSelected: false,
    },
    isRare: {
      label: "Rare",
      isSelected: false,
    },
    isAev: {
      label: "AEV",
      isSelected: false,
    },
    isCustom: {
      label: "Customs",
      isSelected: false,
    },
    isComingSoon: {
      label: "Coming Soon",
      isSelected: false,
    },
    isPresale: {
      label: "Presale",
      isSelected: false,
    },
    isSold: {
      label: "Sold",
      isSelected: false,
    },
  },
  selections: [],
  // price: [0, 1000000],
  // keywords: "",
  // showingCount: 48,
  // sort: {
  //   by: "price",
  //   asc: true,
  // },
  //   },
});
*/
