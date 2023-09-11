const date = new Date();
let dayOfTheWeek = ['sunday', 'monday', 'tuesday', 'wednesday','thursday', 'friday', 'saturday'];
let currDay = dayOfTheWeek[date.getDay()]
const utcTime = date.toUTCString();
const myIdentity ={
    Track: 'Frontend Development',
    slackName: 'phenyl',
    utc: utcTime,
    week: currDay,
}

// Passing Strings to Html
document.getElementById('slack').textContent = `Slack Name: ${myIdentity.slackName}`
document.getElementById('utc').textContent = `UTC: ${myIdentity.utc}`
document.getElementById('Track').textContent = `Track: ${myIdentity.Track}`
document.getElementById('week').textContent = `Week: ${myIdentity.week}`