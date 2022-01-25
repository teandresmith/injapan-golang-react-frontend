import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetBlogByIDQuery } from '../../redux/services/blogAPI'
import '../../assets/css/BlogView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from '../Spinner'
import createDOMPurify from 'dompurify'

const BlogView = () => {
  const params = useParams('blogid')
  const { data, isLoading } = useGetBlogByIDQuery(params.blogid)
  const dompurify = createDOMPurify()

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='section-wrapper'>
            <div className='left-side'>
              <div className='blog-photo'>
                <h1 className='blog-title'>{data.title} </h1>
                <h5>{data.subtitle}</h5>
                <img
                  src={process.env.PUBLIC_URL + data.image}
                  alt={data.image_description}
                />{' '}
                <br />
                <small>{data.created_at}</small>
              </div>

              <div className='blog-content-wrapper'>
                <div className='blog-content'>
                  {
                    <div
                      className='blog-writings'
                      dangerouslySetInnerHTML={{
                        __html: dompurify.sanitize(data.body),
                      }}
                    />
                  }
                </div>
              </div>
            </div>

            <div className='about-wrapper'>
              <h4 className='about-header'>
                <FontAwesomeIcon icon='arrow-down' /> About Me
                <FontAwesomeIcon icon='arrow-down' />
              </h4>
              <p className='about-text'>
                I am a huge nerd that enjoys playing games, building tech,
                watching anime, and working out. I currently live in Japan, and
                aspire to fuel others expectations with realistic information
                about Japan
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default BlogView
