const baseURL = "http://localhost:9000/";

export const connectData = {
    password: "admin",
    serverName: "string",
    userName: "admin"
}

export const connectUrl = `http://192.168.0.84:8081/bpm-service/connect`;
export const processName = `http://192.168.0.84:8081/bpm-service/process/user/${connectData.userName}`;
export const documentClass = baseURL + "documentClass";
export const caseModels = baseURL + "caseModels";
export const containerCollection = baseURL + "containerCollection";
export const trigger = baseURL + "trigger";
