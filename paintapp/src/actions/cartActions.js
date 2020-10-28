const { default: Axios } = require("axios");
const { CART_ADD_ITEM } = require("../constants/cartConstants");

const addToCart = (productId, week)=> async (dispatch) =>{
    try{
        const {data} = await Axios.get("/paintings/"+ productId);
        dispatch({type: CART_ADD_ITEM, payload:{
            product: data.id,
            name: data.paintingname,
            image: data.image,
            price: data.rentcost,
            week
        }})
    } catch(error){

    }
}

export { addToCart };