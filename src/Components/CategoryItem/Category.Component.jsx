import './categories.styles.scss'

const Category = (cat) => {
  //console.log({cat})
  //const {imageUrl,title} = cat
    return (
        <div className="category-container" >
          <div className="background-image" style={{
            backgroundImage : `url(${cat.category.imageUrl})`
          }}/>
          <div className="category-body-container" >
          <h2>{cat.category.title}</h2>
          <p>Shop Now</p>
          </div>
        </div>
    )
}

export default Category;