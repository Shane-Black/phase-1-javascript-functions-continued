function saturdayFun(task='roller-skate') {
    return `This Saturday, I want to ${task}!`;
}

function mondayWork(task='go to the office') {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(string='*') {
    return function(comment='special') {
        return `You are ${string}${comment}${string}!`
    }
}