export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      <button onClick={handleSort} className="sortByTitleAsc" id="asc_title">Sort by title Asc</button>
      <button onClick={handleSort} className="sortByTitleDesc" id="desc_title">Sort by title Desc</button>
      <button onClick={handleSort} className="sortByPriceAsc" id="asc_price">Sort by Price Asc</button>
      <button onClick={handleSort} className="sortByPriceDesc" id="desc_price">Sort by Price Dsc</button>
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
    </div>
  );
};
