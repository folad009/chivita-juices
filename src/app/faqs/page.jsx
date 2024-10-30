import FaqOverviews from '@/components/common/OverviewFaqs';
import BreadcrumbRoundedElevatedTextIconPreview from '@/components/common/BreadCrumb'

const FAQsPage = () => {
  return (
    <>
      <BreadcrumbRoundedElevatedTextIconPreview currentPage="FAQs" />
      <FaqOverviews />
    </>
  )
}

export default FAQsPage;