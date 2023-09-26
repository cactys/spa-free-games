import styles from './FilterCheckbox.module.scss';

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
    <label className={styles.wrapper}>
      <input
        type={type}
        id={id}
        checked={filterCheckbox ? false : true}
        onChange={handleLikesFilter}
        className={styles.checkbox}
      />
      <span className={styles.bubble} />
      <span className={styles.title}>{title}</span>
    </label>
  );
};

export default FilterCheckbox;
