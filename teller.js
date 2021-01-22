let numChildren = [2, 3, 4, 5, 6];
let partnerNames = ['Abdullah', 'Auwal', 'Amina', 'Zainab', 'Hauwa'];
let locations = ['Nigeria', 'Dubai', 'London', 'USA', 'Saudi'];
let jobs = ['programmer', 'Doctor', 'Nurse', 'Accountant', 'Manager']

const teller = () => {
    let randChildren = numChildren[Math.floor(Math.random() * numChildren.length)];
    let randPartner = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    let randLocation = locations[Math.floor(Math.random() * locations.length)];
    let randJob = jobs[Math.floor(Math.random() * jobs.length)];

    return `You will be a ${randJob} in ${randLocation}, married to ${randPartner} with ${randChildren} kids.`

}
console.log(teller(numChildren, partnerNames, locations, jobs));