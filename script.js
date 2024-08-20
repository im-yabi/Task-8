function water(callback){
    setTimeout(() => {
    console.log("water service complete");
    callback();
}, 2000);
}

function engine(callback){
    setTimeout(() => {
    console.log("engine service complete");
    callback();
}, 1000);
}

function wheels(callback){
    setTimeout(() => {
    console.log("wheels service complete");
    callback();
}, 3000);
}

function brakes(callback){
    setTimeout(() => {
    console.log(" brakes service complete");
    callback();
}, 1500);
}

water(() => {
    engine(() => {
        wheels(() => {
            brakes(() =>console.log("All service complete"));
        })
        })

    });





