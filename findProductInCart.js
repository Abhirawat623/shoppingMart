


export const findProuductInCart= (cart,prodId)=>{
    const isProdInCart = cart && cart.length>0 && cart.some(({_id})=> _id === prodId);
    return isProdInCart;
    } //cart should be greater thamn 0 and prod id would be chceked as array id too.
    