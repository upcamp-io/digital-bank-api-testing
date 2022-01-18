import dotenv from 'dotenv'

dotenv.config();
export default {
    baseUrl: process.env.BASE_URL,
    adminUsername: process.env.ADMIN_USERNAME,
    adminPassword: process.env.ADMIN_PASSWORD

}