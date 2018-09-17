// 클라이언트에서 API를 호출하는 함수
import axios from 'axios';

// 글 작성 API 함수
export const writePost = ({title, body, tags}) => axios.post('/api/posts', {title, body, tags});

// 포스트 읽기 API 함수
export const getPost = (id) => axios.get(`/api/posts/${id}`);