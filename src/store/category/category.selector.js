import { createSelector} from 'reselect'
const selectCategoryReducer = (state) => {
 return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],(categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector(
    [selectCategories],(categories) => categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {}));

/*export const selectCurrentCategory = (state) =>
    state.categories.categories.reduce((acc, category) => {
    const {title, items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});*/
