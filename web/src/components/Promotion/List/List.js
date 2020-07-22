import React, { useState } from 'react';

import PromotionCard from 'components/Promotion/Card/Card';
import PromotionModal from '../Modal/Modal';

import './List.css';

const PromotionList = ({ loading, error, promotions }) => {
    const [promotionId, setPromotionId] = useState(null);

    if (error) {
        return <div>Erro ao tentar acessar o servidor</div>
    }

    if (loading || promotions === null) {
        return <div>Carregando...</div>
    }

    if (promotions.length === 0) {
        return <div>Nenhum resultado encontrado.</div>
    }

    return (
        <div className="promotion-list" >
            {promotions.map((promotion) => (
                <PromotionCard promotion={promotion}
                    key={promotion.id}
                    onclickComments={() => setPromotionId(promotion.id)}
                />
            ))}
            {promotionId && (
                <PromotionModal
                    promotionId={promotionId}
                    onclickClose={() => setPromotionId(null)}
                />
            )}
        </div>
    );
};

export default PromotionList;