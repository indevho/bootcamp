import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y", "Model X"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducer: {},
});
// , 삐져나와도 별로 상관 없음 ..

export const selectCars = (state) => state.car.cars;
// state.car.cars  >> 가 위의 cars 배열로 mapping 됨.
//  carSlice  -->   state.car 에  cars 이름으로 담아준다??

export default carSlice.reducer;
// default 로 비어있더라도 export 되도록 한다.
