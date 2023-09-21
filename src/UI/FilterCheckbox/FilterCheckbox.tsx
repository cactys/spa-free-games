const FilterCheckbox = ({
  title,
  type,
  id,
  filterCheckbox,
  handleLikesFilter,
}: {
  title: string;
  type: string;
  id: string;
  filterCheckbox: boolean;
  handleLikesFilter: VoidFunction;
}) => {
  return (
    <label>
      <input
        type={type}
        id={id}
        checked={filterCheckbox ? true : false}
        onChange={handleLikesFilter}
      />
      <span />
      <span>{title}</span>
    </label>
  );
};

export default FilterCheckbox;
