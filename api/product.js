import request from '@/plugins/axios'

export function getData(data) {
    return request({
        url: '/products/get',
        method: 'GET',
        params: data
    })
}