import ApiResponse from "../classes/apiResponse";

function validJson(text) {
    if (typeof text !== "string") {
        return false;
    }
    try {
        var json = JSON.parse(text);

        //return (typeof json === 'object');
        return (typeof json === 'object') ? json : false;
    }
    catch (error) {
        return false;
    }
}

export default validJson;