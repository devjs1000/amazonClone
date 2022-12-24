const local = 'https://fakestoreapi.com'
const production = 'https://fakestoreapi.com'

const isProduction = false;
const apis = [
    local, production
]
export const api = (route?: any) => `${apis[Number(isProduction)]}${route !== undefined ? `/${route}` : ''}`

export const productUrl = (route?: string | number) => {
    return api(`products${route !== undefined ? `/${route}` : ''}`)
}

