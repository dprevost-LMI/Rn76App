// Not Working
// import Qualtrics, { InitializationResult } from 'react-native-qualtrics';

// Working, but src is not something we usually see in an import path
import Qualtrics, { InitializationResult } from 'react-native-qualtrics/src';


export const qualtricsTest = () => {
    Qualtrics.initialize(
        'BRAND_ID',
        'PROJECT_ID',
        'INTERCEPT_ID',
        (result: InitializationResult) => {
            console.log(result);
        },
    );
};
