import { api, apiLogin } from "./api.js";
import * as dotenv from "dotenv";
dotenv.config();

export const validaToken = async (req, res, next) => {
    if (typeof api.defaults.headers.common['Authorization'] === "undefined") {
        const new_access_token = await gerarToken();
        if (new_access_token.error) {
            res.send(new_access_token);
            return;
        } else {
            api.defaults.headers.common['Authorization'] = `Bearer ${new_access_token}`;
        }
    }
    next();
}

export const gerarToken = async () => {
    try {
        const request = await apiLogin.post("/login", {
            email: process.env.EMAIL,
            password: process.env.PASSWORD
        });

        return request.data.data.token;

    } catch (error) {
        if (error.response) {
            return { error: error.response.data.message };
        }
    }
}