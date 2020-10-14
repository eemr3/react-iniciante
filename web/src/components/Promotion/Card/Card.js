import React from 'react'
import { Link } from 'react-router-dom'

import './Card.css'
import UIButton from 'components/UI/Button/Button'

const PromotionCard = ({ promotion, onclickComments }) => (
  <div className="promotion-card">
    <img
      src={promotion.imageUrl}
      alt={promotion.title}
      className="promotion-card__image"
    />
    <div className="promotion-card__info">
      <h1 className="promotion-card__title">{promotion.title}</h1>
      <span className="promotion-card__price">R$ {promotion.price}</span>
      <footer className="promotion-card__footer">
        {promotion.comments.length > 0 && (
          <div className="promotion-card__comment">
            "{promotion.comments[0].comment}"
          </div>
        )}
        <button
          className="promotion-card__comments-count"
          onClick={onclickComments}
        >
          {promotion.comments.length}{' '}
          {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
        </button>
        <UIButton
          componet="a"
          href={promotion.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir Para o Site
        </UIButton>
        <UIButton
          componet={Link}
          to={`/edit/${promotion.id}`}
          className="promotion-card__edit-button"
        >
          Editar
        </UIButton>
      </footer>
    </div>
  </div>
)

export default PromotionCard
