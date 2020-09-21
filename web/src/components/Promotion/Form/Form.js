import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useApi from 'components/Utils/useApi'
import { Formik, Form } from 'formik'

import Field from 'components/Form/Field/Field'
import Schima from './schema'
import './Form.css'

const initialVelue = {
  title: '',
  url: '',
  imageUrl: '',
  price: 0,
}

const PromotionForm = ({ id }) => {
  const history = useHistory()
  const [load, lodinfo] = useApi({
    method: 'get',
    url: `/promotions/${id}`,
  })

  const [save, saveInfo] = useApi({
    url: id ? `/promotions/${id}` : '/promotions',
    method: id ? 'put' : 'post',

    onCompleted: (response) => {
      if (!response.error) {
        history.push('/')
      }
    },
  })

  useEffect(() => {
    if (id) {
      load()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  function onSubmit(formvalues) {
    save({
      data: formvalues,
    })
  }

  const values = id ? lodinfo.data : initialVelue

  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      {!values ? (
        <div>Carregando...</div>
      ) : (
        <Formik
          initialValues={values}
          onSubmit={onSubmit}
          validationSchema={Schima}
          render={() => (
            <Form>
              {saveInfo.loading && <span>Salvando dados</span>}
              <div className="promotion-form__grup">
                <Field name="title" type="text" label="Tótilo" />
              </div>
              <div className="promotion-form__grup">
                <Field name="url" type="text" label="Link" />
              </div>
              <div className="promotion-form__grup">
                <Field name="imageUrl" type="text" label="Imagem (URL)" />
              </div>
              <div className="promotion-form__grup">
                <Field name="price" type="number" label="Preço" />
              </div>
              <div>
                <button type="submit">Salvar</button>
              </div>
            </Form>
          )}
        />
      )}
    </div>
  )
}

export default PromotionForm
