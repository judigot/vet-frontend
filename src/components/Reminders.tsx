import React from 'react';
import { useTranslation } from 'react-i18next';


const Reminders: React.FC = () => {
    const { t } = useTranslation(); // Translation hook
    return <h1 className='text-3xl font-bold'>{t('reminders')}</h1>;
};

export default Reminders;