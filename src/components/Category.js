import React from 'react'
import Movie from './Movie'

const Category = ({ movieCategory }) => {
      return (
            <section className='category'>
                  <p className='category-name'>Movie Category</p>
                  <section className='movie-category'>
                        <Movie />
                       
                  </section>
            </section>
      )
}

export default Category