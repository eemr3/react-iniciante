import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import UIModal from 'components/UI/Modal/Modal';

import './List.css';
import { useState } from 'react';

const PromotionList = ({ loading, error, promotions  }) => {
    const [promotionId, setPromotionId] = useState(null);

    if (error){
        return <div>Erro ao tentar acessar o servidor</div>
    }

    if (loading || promotions === null) {
        return <div>Carregando...</div>
    }

    if (promotions.length === 0){
        return <div>Nenhum resultado encontrado.</div>
    }

    return (
        <div  className="promotion-list" >
            {promotions.map((promotion) => (
                <PromotionCard promotion={promotion}
                 key={promotion.id}
                 onclickComments={() => setPromotionId(promotion.id)}
                />
            ))}
            <UIModal isOpen={Boolean(promotionId)} onclickClose={() => setPromotionId(null)}>
                <h1>Comentários</h1>
            </UIModal>
        </div>
    );
};

export default PromotionList;