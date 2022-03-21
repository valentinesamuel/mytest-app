import Movie from './Movie'

const Category = ({ movieCategory }) => {


      return (
            <section className='category'>
                  <p className='category-name'>Movie Category</p>
                  <section className='movie-category'>
                        {movieCategory.map(movie => {
                              return <Movie movie={movie} key={movie.id} />
                        })}

                  </section>
            </section>
      )
}

export default Category