import React from 'react';
import { graphql, useStaticQuery} from 'gatsby'
import './mywork.scss';
import Work from './work/work'

export default function MyWork() {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
            spec
            title
            tags
            picName
            liveSiteUrl
            description
          }
        }
      }
    }
  `)

  const works = data.allPortfolioJson.edges
  return (
    <section className='mywork section' id='mywork'>
      <h1>My Work</h1>
      {works.map(work => {
        const {spec, title, tags, description, picName, liveSiteUrl} = work.node
        const reverse = works.indexOf(work) % 2 === 0 ? false : true
        console.log(spec, title, tags, description, picName)

        return (
          <Work
            spec= {spec}
            title={title}
            tags={tags}
            picName={picName}
            liveSiteUrl={liveSiteUrl}
            reverse= {reverse}
          >
            {description}
          </Work>
        )
      })}
    </section>
  )
}