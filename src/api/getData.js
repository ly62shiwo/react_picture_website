import request from './request'

const WINTER = '/winter'

// 请求方式
const GET = 'get'
// const POST = 'post'

const PICTURE = '/picture'
export const getInfinityList = (data) => request(GET, WINTER + PICTURE + '/getInfinity', data) // Infinity
export const getCategories = (data) => request(GET, WINTER + PICTURE + '/getCategories', data)
export const getPictureList = (data) => request(GET, WINTER + PICTURE + '/getPictures', data)
