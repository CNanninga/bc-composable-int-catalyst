import { getProductFaqMetafields } from '~/client/queries/get-product-faq-metafields';
import ProductFaqs from '~/components/product-faqs';
import { getTranslations } from 'next-intl/server';
import { LocaleType } from '~/i18n';

const Faqs = async ({ productId, locale }: { productId: number, locale: LocaleType }) => {
  return '';
};

export default Faqs;
