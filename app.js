function mySetTimeout(delay, callback) {
    console.log('Satamasho mzadebis proceshia');
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback);
        }, delay);
    });
};  

const delay = 2000;
const workingDelay = 3000;
const toyDeliveringTime = 2000;
const sellingTime = 1000;
const callback = () => {
    console.log('tojina dammzadda');
};

async function workingOnToy(toyCreatingFunction, customDelay) {
    console.log('Gtxovt daelodot ' + customDelay + ' wami');
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(toyCreatingFunction), customDelay);
    });
}; 

const toyDelivering = async (resultOfWaiting, toyDeliveringTime) => {
    console.log('Dafiqsirda shecdoma satamashoshi, gtxovt dagvelodot ' + toyDeliveringTime + ' sanam shevasworebt xarvezs');
    const result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resultOfWaiting();
            resolve(() => console.log('tojina gaiyida'));
        }, toyDeliveringTime);
    });
    return result;
};

const sellProduct = async (sellingFunc, sellingDelay) => {
    console.log('mimdinareobs produqciis gayidva');
    setTimeout(sellingFunc, sellingDelay);
};


mySetTimeout(delay, callback)
    .then(result => workingOnToy(result, workingDelay))
    .then(resultOfWorking => toyDelivering(resultOfWorking, toyDeliveringTime))
    .then(selling => sellProduct(selling, sellingTime))
    .catch(error => console.log(error));