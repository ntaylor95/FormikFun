import * as React from "react";
import { APIGatewayProxyResult } from 'aws-lambda';
import ReactDOMServer from 'react-dom/server';
import App from './App';

module.exports.testPage = async (): Promise<APIGatewayProxyResult> => {
    const response = {
        statusCode: 200,
        body: ReactDOMServer.renderToString(<App title="Forms with Formik + TypeScript" />),
        headers: {
            'content-type': 'text/html; charset=utf-8'
        }
    };

    return response;
};