import { useState} from 'react';
import axios from 'axios'

import useDebouncedPromise from 'components/Utils/useDebouncedPromise';

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false,
}

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo)
  const debouncedAxios = useDebouncedPromise(axios, config.debounceDelay);

  async function call(localConfig) {
    setRequestInfo({
      ...initialRequestInfo,
      loading: true,
    });
    let response = null;
    const finalCongig = {
      baseURL: 'http://localhost:5000',
      ...config,
      ...localConfig,
    }
    const fn = finalCongig.debounced ? debouncedAxios : axios;
    try {
      response =  await fn(finalCongig);
  
      setRequestInfo({
        ...initialRequestInfo,
        data: response.data,
      })

    } catch (error){
      setRequestInfo({
        ...initialRequestInfo,
        error,
      });
    }
    

    if(config.onCompleted){
      config.onCompleted(response);
    }
    return response;
  }

  return [
    call,
    requestInfo,
  ]
}