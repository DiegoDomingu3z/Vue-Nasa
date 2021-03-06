import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"




class ApodService {

    async getApod(){
        const res = await api.get('')
        AppState.apod = res.data 
        logger.log('apod is here ',res.data)
    }

    async pickDate(date){
        const res = await api.get(`?date=${date}`)
        logger.log(res.data, 'data pickDate')
        AppState.apod = res.data
    }



}

export const apodService = new ApodService()