// 클라이언트에서 API를 호출하는 함수
import axios from 'axios';
import queryString from 'query-string'; // 문자열 형태의 url 쿼리를 객체 형태로 변환, 혹은 객체 형태를 문자열 형태로 변환 할 수 있는 라이브러리

// 글 작성 API 함수
export const writePost = ({title, body, tags}) => axios.post('/api/posts', {title, body, tags});

// 포스트 읽기 API 함수
export const getPost = (id) => axios.get(`/api/posts/${id}`);

// 포스트 리스트 API 함수
export const getPostList = ({ tag, page }) => axios.get(`/api/posts/?${queryString.stringify({tag, page})}`);

// 포스트 수정 API 함수
export const editPost = ({id, title, body, tags}) => axios.patch(`/api/posts/${id}`,{title, body, tags});

// 포스트 삭제 API 함수
export const removePost = (id) => axios.delete(`/api/posts/${id}`);

// 로그인 API 연동 함수 (로그인, 로그인 체크, 로그아웃)
export const login = (password) => axios.post(`/api/auth/login`, {password});

export const checkLogin = () => axios.get(`/api/auth/check`);

export const logout = () => axios.post(`/api/auth/logout`);