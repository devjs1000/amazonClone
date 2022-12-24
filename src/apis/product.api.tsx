import axios from 'axios';
import {api, productUrl} from '../.env';

const createGet =
  (routeName: any, params = false, query=false) =>
  async (param: any) => {
    try {
      const {data} = await axios.get(
        `${routeName}${params || query ? `${query?'':'/'}${param}` : ''}`,
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };

const getProductByIndex = createGet(productUrl(), true);
const getAllProducts = createGet(productUrl(), false);
const getCategories = createGet(productUrl('categories'), false);
const getCategory = createGet(productUrl('categories'), true);
const getCart= createGet(api('cart?userId='), false, true)
const getProducts=createGet(api('products?limit='), false, true)
