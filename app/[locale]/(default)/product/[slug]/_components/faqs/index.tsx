import { getProductFaqMetafields } from '~/client/queries/get-product-faq-metafields';
import ProductFaqs from '~/components/product-faqs';
import { getTranslations } from 'next-intl/server';
import { LocaleType } from '~/i18n';

const Faqs = async ({ productId, locale }: { productId: number, locale: LocaleType }) => {
  const limit = 2;

  const faqData = await getProductFaqMetafields(productId, limit);
  const t = await getTranslations({ locale, namespace: "Product" });

  return <ProductFaqs 
    faqData={faqData} 
    limit={limit} 
    loadMoreLabel={t('FAQ.loadMore')}
    productId={productId}
  />;
};

export default Faqs;
