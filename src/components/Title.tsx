import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Title: React.FC = () => {
  const { t } = useTranslation(); // Translation hook
  return (
    <div>
      <h1 className="text-3xl font-bold">{t('Welcome to Hello Pets')}</h1>
      <p>Application Description＿＿＿＿＿＿＿＿＿＿＿＿＿＿</p>
      <ButtonGroup className="gap-2">
        <a href="/login">
          <Button>{t('Login')}</Button>
        </a>
        <a href="/register">
          <Button>{t('Register')}</Button>
        </a>
      </ButtonGroup>
    </div>
  );
};

export default Title;
