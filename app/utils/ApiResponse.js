export class ApiResponse {
static ok(data = {}, message = 'OK') {
return { success: true, message, data };
}
static created(data = {}, message = 'Created') {
return { success: true, message, data };
}
static error(message = 'Error', code = 400, errors = []) {
return { success: false, code, message, errors };
}
}