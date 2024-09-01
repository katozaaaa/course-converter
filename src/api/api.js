import axios from 'axios';

const cb = {
    instance: axios.create({
        baseURL: 'http://www.cbr.ru/scripts/',
        withCredentials: true,
    }),
    dailyQuotes: {
        path: 'XML_daily.asp',
        paramsNames: 'date_req',
    },

    get(pathKey, ...paramsValues) {
        const pathObj = cb[pathKey];

        let params = new Array(paramsValues.length).fill(null);

        if (pathObj.paramsNames instanceof Array) {
            pathObj.paramsNames.map((paramName, index) => {
                params[index] = `${paramName}=${paramsValues[index]}`;
            });

            params = params.filter((param) => param !== null);
        } else {
            params.map((param, index) => {
                return `${pathObj.paramsNames}=${paramsValues[index]}`;
            });
        }

        const endPath = `${cb[pathKey].path}?${params.join('&')}`;

        return cb.instance.get(endPath);
    }
};

export const API = {
    getQuotesOnDate(date) {
        return cb.get('dailyQuotes', date);
    }
};