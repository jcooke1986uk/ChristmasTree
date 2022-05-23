const makeMeTreeBtn = document.getElementById('makeMeTree');
const makeMeTreeInConsoleBtn = document.getElementById('makeMeTreeInConsole');
const generateConsoleTreeBtn = document.getElementById('generateConsoleTree');
const resetBtn = document.getElementById('reset');

makeMeTreeBtn.addEventListener('click', () => {
    const numOfTreeBranches = document.getElementById('treeBranches').value;
    if ( numOfTreeBranches < 3 || numOfTreeBranches > 100 ) {
        alert('You can only select 3 to 100 branches.');
        return;
    }

    if (confirm('You are now a tree!!')) {
        makeMeTreeBtn.style.display = 'none';
        makeMeTreeInConsoleBtn.style.display = 'block';
    }
})

makeMeTreeInConsoleBtn.addEventListener('click', () => {
    console.log("You are now a tree!!")
    makeMeTreeInConsoleBtn.style.display = 'none';
    generateConsoleTreeBtn.style.display = 'block';
})

generateConsoleTreeBtn.addEventListener('click', () => {
    const numOfTreeBranches = document.getElementById('treeBranches').value;
    for (let branch = 0; branch < numOfTreeBranches; branch++) {
        const startingBranch = branch + 1;
        const midBranch = startingBranch * 2;
        const endingBranch = startingBranch * 4;
        const treeBranch1 = Array(startingBranch).fill('#')
        const treeBranch2 = Array(midBranch).fill('#')
        const treeBranch3 = Array(endingBranch).fill('#')
        console.log(treeBranch1.join(''))
        console.log(treeBranch2.join(''))
        console.log(treeBranch3.join(''))
    }
})

resetBtn.addEventListener('click', () => {
    console.clear();
    
    makeMeTreeBtn.style.display = 'inline';
    makeMeTreeInConsoleBtn.style.display = 'none';
    generateConsoleTreeBtn.style.display = 'none';
})
