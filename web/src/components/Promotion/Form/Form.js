import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useApi from 'components/Utils/useApi';

import './Form.css';

const initialVelue = {
    title: '',
    url: '',
    imageUrl: '',
    price: 0
}

const PromotionForm = ({ id }) => {

    const [values, setValues] = useState(id ? null : initialVelue);
    const history = useHistory();
    const [load] = useApi({
        method: 'get',
        url: `/promotions/${id}`,
        onCompleted: (response) => {
            setValues(response.data);
        }
    })

    const [save, saveInfo] = useApi({
        url: id ? `/promotions/${id}` : '/promotions',
        method: id ? 'put' : 'post',
        data: values,
        onCompleted: (response) =>{
            if (!response.error) {
                history.push('/')
            }  
        }
    })

    useEffect(() =>{
        if(id) {
            load();
        }
    }, [id]);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({...values, [name] : value});
    }

    
    function onSubmit(ev){
        ev.preventDefault();
        save();
    }

    return (
        <div>
            <h1>Promo Show</h1>
            <h2>Nova Promoção</h2>
            
            {!values 
            ? (
                
                <div>Carregando...</div>
              )
            :(
                <form onSubmit={onSubmit}>
                    {saveInfo.loading && <span>Salvando dados</span>}
                    <div className="promotion-form__grup">
                        <label htmlFor="title">Titulo</label>
                        <input id="title" name="title" type="text" onChange={onChange} value={values.title} />
                    </div>
                    <div className="promotion-form__grup">
                        <label htmlFor="url">Link</label>
                        <input id="url" name="url" type="text" onChange={onChange} value={values.url} />
                    </div>
                    <div className="promotion-form__grup">
                        <label htmlFor="imageUrl">Imagem</label>
                        <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={values.imageUrl} />
                    </div>
                    <div className="promotion-form__grup">
                        <label htmlFor="price">Preço</label>
                        <input id="price" name="price" type="number" onChange={onChange} value={values.price} />
                    </div>
                    <div>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
               )
            }
        </div>

    )
}

export default PromotionForm;