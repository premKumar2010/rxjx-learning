const { from, fromEvent } = rxjs;


const a = [{
    name: 'prem'
}, {
    name: ' kumar'
}, {
    name: 'prem1'
}];

const from$ = from(a);

const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('promie resolved')
    // }, 1000);

    setTimeout(() => {
        reject('promie rejected')
    }, 3000);
})

const promise$ = from(promise);

const input$ = fromEvent(document.getElementById('input-field'), 'input');

function init() {

    from$.subscribe({
        next: (res) => console.log('res', res),
        error: (err) => console.log('error', err),
        complete: () => console.log('Completed')
    });

    promise$.subscribe({
        next: (res) => console.log('promise', res),
        error: (err) => console.log('promise error', err),
        complete: () => console.log('promise Completed')
    });


    input$.subscribe({
        next: (res) => console.log('input', res.data),
        error: (err) => console.log('input error', err),
        complete: () => console.log('input Completed')
    });



}


init();