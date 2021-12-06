import coach from './classes/Coach.js'

window.addEventListener('DOMContentLoaded', () => {
    console.log("inside dom content loaded");
    x();
})


function x() {

    coach.getAllCandidates();
}
