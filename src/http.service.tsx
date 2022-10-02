export function GetNewOrder() {
    return new Promise((resolve, reject) => {
        fetch('https://ls-ios-products.herokuapp.com/')
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
