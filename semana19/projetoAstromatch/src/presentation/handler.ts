export const handler = async (event: any) => {
    let execute = JSON.parse(event)
    let path = execute.pathparams
    switch (path) {
        case '/signup':
            
            break;
        case '/getallusers':

            break;
        case '/login':

            break;
        case '/users/match':

            break;
        case '/users/unmatch':

            break;
        case '/getallrelationsusers':

            break;
        default:
        throw new Error
    }
};