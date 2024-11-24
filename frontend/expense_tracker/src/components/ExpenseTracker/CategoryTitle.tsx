import { Category } from "../hooks/useCategory";

interface Props {
  category: Category;
}

function CategoryTitle({ category }: Props) {
  return (
    <>
      <p>{category.title}</p>
    </>
  );
}

export default CategoryTitle;
