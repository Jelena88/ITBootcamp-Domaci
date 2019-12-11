const SPACEX_API='https://api.spacexdata.com/v3';
const LAUNCHES_PAST='/launches/past'
const LAUNCHES_UPCOMING='/launches/upcoming'
const FOOTER = '/roadster'
const HEADER= '/info'


   

export function getPastLaunches(){
    return fetch(`${SPACEX_API}${LAUNCHES_PAST}`).then(res=> res.json());
}

export function getUpcomingLaunches(){
    return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`).then(res=> res.json());
}

export function getFooter(){
    return fetch(`${SPACEX_API}${FOOTER}`).then(res=> res.json());
}
export function getCompanyInfo(){
 return fetch(`${SPACEX_API}${HEADER}`).then(res=>res.json());
}