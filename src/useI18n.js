// useI18n.js
import { useTranslation } from 'react-i18next';

let initialized = false;

const useI18n = () => {
    const { i18n, t } = useTranslation();

    if (!initialized) {
        // Perform any initialization logic here
        initialized = true;
    }

    return { i18n, t };
};

export default useI18n;
