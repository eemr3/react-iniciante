import React from 'react'

import './CommentsTree.css'

const PromotionModalCommentsTree = ({ comments }) => {
  if (!comments) {
    return <div>Carregando...</div>
  }

  return (
    <ul className="prmotion-modal-comments-tree">
      {comments.map((item) => (
        <li key={item.id} className="prmotion-modal-comments-tree__item">
          <img
            src={item.user.avatarUrl}
            alt={`Foto de ${item.user.name}`}
            className="prmotion-modal-comments-tree__item__avatar"
          />
          <div className="prmotion-modal-comments-tree__item__info">
            <span className="prmotion-modal-comments-tree__item__name">
              {item.user.name}
            </span>
            <p>{item.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PromotionModalCommentsTree
