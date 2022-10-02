export function GetNewOrder() {
    return new Promise((resolve, reject) => {
        fetch(process.env.REACT_APP_BACKEND_URI ?? '')
            .then((results) => {
                resolve(results.json());
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export interface OrderData {
    id: number;
    name: string;
    price: string;
}
