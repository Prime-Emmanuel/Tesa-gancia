import React from 'react';
import { useNetworkStatus } from '../../hooks/useNetworkStatus';
import { useLanguage } from '../../i18n/LanguageContext';
import { Toast } from '../ui/Toast';

export const OfflineBanner: React.FC = () => {
  const { isOnline, showStatusToast, dismissToast } = useNetworkStatus();
  const { t } = useLanguage();

  if (!showStatusToast) return null;

  return (
    <Toast
      isVisible={showStatusToast}
      type={isOnline ? 'success' : 'warning'}
      message={isOnline ? t.floating.onlineRestored : t.floating.offlineMessage}
      onClose={dismissToast}
    />
  );
};
