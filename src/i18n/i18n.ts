import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { ar, en } from './languages'

const { isRTL } = Localization
const translations = {en, ar};
const i18n:any = new I18n(translations);
i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n['isRtl'] = isRTL;

export default i18n;