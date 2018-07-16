import request from '../../../utils/request';



export function fetch(values) {
  return request('/api/authenticate', {
    headers: { 
      "Content-Type": "application/json; charset=utf-8"
  },
    method: 'POST',
    body: JSON.stringify(values),
  });
  //console.log('the value is '+values)
}