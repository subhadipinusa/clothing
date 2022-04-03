import Category from '../CategoryItem/Category.Component'

const Categories = (cats)=> {
    
    //const {categoriesItem} = cats.categories
    //console.log(cats.categories)
    const {categories} = cats
    return (
        <div className="categories-container">
            {
            categories.map(
    
              (c) => {
                const { id, title, imageUrl } = c;
                return (
                  <Category key={id} category={c} />
                )
    
              }
            )
          }
        </div>
        
    )
}

export default Categories;