import React from 'react';

const Card = ({title,children,id,className}) => {
  return(
    <div className={`${className} card`} id={id}>
      <div className="card-title">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card;