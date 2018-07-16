import { PAGE_SIZE } from '../constants';
import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/faultthing?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/api/faultthing/${id}/del`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/faultthing/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/faultthing', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}


