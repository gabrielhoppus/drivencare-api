function conflictError(message) {
    return {
        name: "ConflictError",
        message,
    };
}

function conflictTimeError(time){
    return {
        name: "conflictTimeError",
        message: "This time slot is not available",
        time,
    };
}

function duplicatedEmailError(email) {
    return {
        name: "DuplicatedEmailError",
        message: "There is already an user with given email",
        email,
    };
}

function duplicatedError() {
    return {
        name: "DuplicatedError",
        message: "There is already an user with given email or crm",
    };
}

function unauthorizedError() {
    return {
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
    };
}

function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}

function invalidCredentialsError() {
    return {
        name: "InvalidCredentialsError",
        message: "Email or password are incorrect",
    };
}

export default {
    conflictError,
    duplicatedEmailError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
    duplicatedError,
    conflictTimeError
};