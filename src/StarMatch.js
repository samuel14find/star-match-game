import React, { useState } from 'react'

export function StarMatch (){
    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };
    const utils = {
        // Sum an array
        sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

        // create an array of numbers between min and max (edges included)
        range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

        // pick a random number between min and max (edges included)
        random: (min, max) => min + Math.floor(max * Math.random()),

        // Given an array of numbers and a max...
        // Pick a random sum (< max) from the set of all available sums in arr
        randomSumIn: (arr, max) => {
            const sets = [[]];
            const sums = [];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0, len = sets.length; j < len; j++) {
                    const candidateSet = sets[j].concat(arr[i]);
                    const candidateSum = utils.sum(candidateSet);
                    if (candidateSum <= max) {
                        sets.push(candidateSet);
                        sums.push(candidateSum);
                    }
                }
            }
            return sums[utils.random(0, sums.length)];
        },
    };

    const [stars, setStars] = useState(utils.random(1,9)); // para ser usado para fazer um lopp e mostrar as estrelas aleatoriamente
return(
    <div className="game">
        <div className="help">
            Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
            <div className="left">
                {utils.range(1,stars).map(starId => // utils.range(1,range) vai nos da uma array assim [1,2,3,4,5]
                    <div key={starId} className="star"/> // Filhos dinâmicos por isso useu key={starId}.
                )}
            </div>
            <div className="right">
                {utils.range(1,9).map(number =>
                    <button key={number} className="number">{number}</button>
                )}
            </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
    </div>
);
}