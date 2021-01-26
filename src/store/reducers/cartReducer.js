const initState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
};

const cartReducer = (state = initState, action) => {
    let findProduct;
    let index;
    switch (action.type) {
        case "ADD_TO_CART": {
            const { product, quantity } = action.payload;
            const check = state.products.find((prd) => prd.id === product.id);
            if (check) {
                return state;
            } else {
                const TotalPrice =
                    state.totalPrice + product.discountPrice * quantity;
                const TotalQuantities = state.totalQuantity + quantity;
                product.quantity = quantity;
                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: TotalPrice,
                    totalQuantity: TotalQuantities,
                };
            }
        }
        case "INC":
            findProduct = state.products.find(
                (product) => product.id === action.payload
            );
            index = state.products.findIndex(
                (product) => product.id === action.payload
            );
            findProduct.quantity += 1;
            state.products[index] = findProduct;
            return {
                ...state,
                totalPrice: state.totalPrice + findProduct.discountPrice,
                totalQuantity: state.totalQuantity + 1,
            };
        case "DEC":
            findProduct = state.products.find(
                (product) => product.id === action.payload
            );
            index = state.products.findIndex(
                (product) => product.id === action.payload
            );
            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                state.products[index] = findProduct;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findProduct.discountPrice,
                    totalQuantity: state.totalQuantity - 1,
                };
            } else {
                return state;
            }
        case "REMOVE":
            findProduct = state.products.find(
                (product) => product.id === action.payload
            );
            const filtered = state.products.filter(
                (product) => product.id !== action.payload
            );
            return {
                ...state,
                products: filtered,
                totalPrice:
                    state.totalPrice -
                    findProduct.discountPrice * findProduct.quantity,
                TotalQuantities: state.TotalQuantities - findProduct.quantity,
            };
        default:
            return state;
    }
};

export default cartReducer;
