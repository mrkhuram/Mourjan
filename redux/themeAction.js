export default themeChange = () => (dispatch) => {
    dispatch({
        type: "DARK"
    })
};
export let changeCountry = (country) => (dispatch) => {
    dispatch({
        type: "COUNTRY",
        payload: country

    })
};
