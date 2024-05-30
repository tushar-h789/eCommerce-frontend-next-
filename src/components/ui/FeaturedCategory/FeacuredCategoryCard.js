
const FeacuredCategoryCard = ({category}) => {
  return (
    <div className="border text-center flex justify-center items-center p-14 rounded-2xl shadow-lg">
        <p>{category.name}</p>
    </div>
  )
}

export default FeacuredCategoryCard