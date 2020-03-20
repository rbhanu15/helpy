import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';


const notifiReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_notifi':
      return action.payload;
    default:
      return state;
  }
};

const fetchNotification = dispatch => async () => {
  const token = await AsyncStorage.getItem('token'); 
  const auth = "Bearer "+token;
  const response = await trackerApi.get('/notification',{
    headers: {
    Authorization: auth 
    },
   });

  dispatch({ type: 'fetch_notifi', payload: response.data });
};




const alarm = dispatch => async (notification) => {
  const token = await AsyncStorage.getItem('token'); 
  const auth = "Bearer "+token;
  console.log(auth);
  await trackerApi.post('/alarm', {
    "notification": "A contact person is infected. Keep calm and stay at home for at least 2 weeks. If you have symptoms, hold the button"
   },{
    headers: {
    Authorization: auth 
    },
   });
};

export const { Provider, Context } = createDataContext(
  notifiReducer,
  { fetchNotification, alarm},
  []
);