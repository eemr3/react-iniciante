import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import './List.css';

const PromotionList = ({ loading, error, promotions  }) => {
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
                <PromotionCard promotion={promotion} key={promotion.id}/>
            ))}
        </div>
    )
};

export default PromotionList;