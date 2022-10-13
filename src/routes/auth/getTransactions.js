import * as api from 'api.js';

export async function post(reg,res){
    api.get('transactions', reg.session.token ).then(response => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    })
}