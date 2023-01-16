export const state = () => ({
  detailDialog: false, // variable to store the state of the detail dialog
  freshNft: "", // variable to store the new NFT data
  selected: "", // variable to store the selected NFT 
  editing: false // variable to store the state of editing mode
});

export const mutations = {
  setDetailDialog(state, payload) {
    state.detailDialog = payload;
  },
  setData(state, { freshNft, selected, editing }) {
    state.freshNft = freshNft;
    state.selected = selected;
    state.editing = editing;
  }
};
