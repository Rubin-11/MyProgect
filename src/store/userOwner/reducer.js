import { ADD_SURNAME } from "./actions";

const userOwner = {
    surname: "Сидоровский",
    name: "Иван",
    patronymic: "Сергеевич",
    apartmentNumber: 30,
    houseAddress: "куратово 23A"
}

export const userOwnerReducer = (state = userOwner, action) => {
    switch (action.type) {
        case ADD_SURNAME: {
            return {
                ...state,
                surname: action.payload,
            }
        }
        default: 
            return state;
        
    }
}