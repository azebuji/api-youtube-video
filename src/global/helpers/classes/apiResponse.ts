import SendRequest from "../../interfaces/SendRequest"
import { statusCode } from "../../utils/binds";

class ApiResponse {

    status: SendRequest['status'];
    statusText: SendRequest['statusText']

    constructor(status: SendRequest['status'], statusText: SendRequest['statusText']) {
        this.status = status;
        this.statusText = statusText;
    }
}

export default ApiResponse;