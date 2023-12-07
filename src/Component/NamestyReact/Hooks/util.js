export const filterData = (searchText, allRestuarant) => {
        const resFilterData = allRestuarant.filter((item) => {
            return item?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
        });
        
    return resFilterData;
};
