const set = (info: { [key: string]: string }): void => {
    if (info) localStorage.setItem('userInfo', JSON.stringify(info));
};

const get = (): { [key: string]: string } => {
    try {
        return JSON.parse(localStorage.getItem('userInfo')) || {};
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.message, '--- get userInfo ---');
        return {};
    }
};
const userInfo = { set, get };
export default userInfo;
