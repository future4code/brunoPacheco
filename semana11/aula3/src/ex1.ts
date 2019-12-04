const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("acabou");
        resolve();
    }, 2000)
});
/*
myPromise.then(() => {
    console.log("Promise finalizada com sucesso");

})
*/

const teste = async () => {
    await myPromise;
    console.log("Promise finalizada com sucesso")
};
