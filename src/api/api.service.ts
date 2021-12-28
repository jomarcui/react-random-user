import axios, { AxiosResponse } from "axios";
import { IPerson } from "../interfaces";

export const getRandomData = async (url: string): Promise<IPerson> => {
    return axios.get(url)
        .then((response: AxiosResponse) => {
            const { email, name } = response.data.results[0]; // getting index 0 is safe because API returns only 1 person

            const person: IPerson = { email, name };

            return person;
        });
}