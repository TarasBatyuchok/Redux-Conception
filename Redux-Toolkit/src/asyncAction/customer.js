import { addManyCustomersAction } from "../vanillaRedux/mainReducer";

const fetchCustomers = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;

  return dispatch => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка запиту до сервера");
        }
        return response.json();
      })
      .then((json) => {
        console.log("Отримані дані:", json);
        dispatch(addManyCustomersAction(json))
      })
      .catch((error) => console.error("Помилка при отриманні даних:", error));
  };
};

export default fetchCustomers;
