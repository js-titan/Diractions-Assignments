const print = json => console.log(json);
const main = async () => {
    console.log('1');
    setTimeout(() => console.log('2'), 0);
    console.log('3');

    const results = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(results)

    console.log('4');
    console.log('5');
    console.log('6');

}



main();