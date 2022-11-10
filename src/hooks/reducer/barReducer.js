export const barReducer = (state, action) => {
  switch (action.type) {
    case "searchBar":
      return {
        ...state,
        displaySearchBar: true,
        displayPropertiesBar: false,
        displayAgentsBar: false,
        displayStoriesBar: false,
      };
    case "propertiesBar":
      return {
        ...state,
        displayPropertiesBar: true,
        displaySearchBar: false,
        displayAgentsBar: false,
        displayStoriesBar: false,
      };
    case "agentsBar":
      return {
        ...state,
        displayAgentsBar: true,
        displaySearchBar: false,
        displayPropertiesBar: false,
        displayStoriesBar: false,
      };
    case "storiesBar":
      return {
        ...state,
        displayStoriesBar: true,
        displaySearchBar: false,
        displayPropertiesBar: false,
        displayAgentsBar: false,
      };
    case "closeBar":
      return {
        ...state,
        displaySearchBar: false,
        displayPropertiesBar: false,
        displayAgentsBar: false,
        displayStoriesBar: false,
      };
    default:
      throw new Error();
  }
};
