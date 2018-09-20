"use strict";
/**
 * Define App Locals & Configs
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const dotenv = require("dotenv");
class Locals {
    /**
     * Makes env configs available for your app
     * throughout the app's runtime
     */
    static config() {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        const name = process.env.APP_NAME || 'NodeTS Dashboard';
        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const keywords = process.env.APP_KEYWORDS || 'somethings';
        const year = (new Date()).getFullYear();
        const copyright = `Copyright ${year} ${name} | All Rights Reserved`;
        const company = process.env.COMPANY_NAME || 'GeekyAnts';
        const description = process.env.APP_DESCRIPTION || 'Here goes the app description';
        const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
        const mongooseUrl = process.env.MONGOOSE_URL;
        const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
        const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';
        const isCORSEnabled = process.env.CORS_ENABLED || true;
        const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
        const apiPrefix = process.env.API_PREFIX || 'api';
        const port = process.env.PORT || 4040;
        const logDays = process.env.LOG_DAYS || 10;
        return {
            appSecret,
            apiPrefix,
            company,
            copyright,
            description,
            isCORSEnabled,
            jwtExpiresIn,
            keywords,
            logDays,
            maxUploadLimit,
            maxParameterLimit,
            mongooseUrl,
            name,
            port,
            url
        };
    }
    /**
     * Injects your config to the app's locals
     */
    static init(_express) {
        _express.locals.app = this.config();
        return _express;
    }
}
exports.default = Locals;
//# sourceMappingURL=Locals.js.map