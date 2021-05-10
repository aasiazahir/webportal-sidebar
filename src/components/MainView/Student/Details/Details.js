import React from 'react';
import * as s from "./Details.styles";

const Details = props => {
  const details = props.match.params.details;
  const countries = {
    batch: {
      img: '/images/details/batch.png',
      description: 'Student Batch'
    },
    year: {
      img: '/images/details/year.jpg',
      description: 'Student Year'
    },
   
  }

  return (
    <s.DetailsContainer>
     
    </s.DetailsContainer>
  )
}

export default Details