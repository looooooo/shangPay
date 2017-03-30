import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };/**
 * Created by lukefan on 2017/3/30.
 */
